"use client";

import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart/CartContext';
import { useRouter } from 'next/navigation';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface CheckoutFormProps {
  clientSecret: string;
}

function CheckoutForm({ clientSecret }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'An error occurred during payment');
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Payment successful
        clearCart();
        router.push(`/order-confirmation?payment_intent=${paymentIntent.id}`);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <PaymentElement />
      </div>

      {errorMessage && (
        <div className="mb-4 p-4 bg-red-900/20 border border-red-800 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="sharp-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>

      <p className="text-xs text-neutral-500 text-center mt-4">
        Payments processed securely by Stripe
      </p>
    </form>
  );
}

interface StripeCheckoutFormProps {
  amount: number;
  customerInfo: any;
}

export default function StripeCheckoutForm({ amount, customerInfo }: StripeCheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the component loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, customerInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setClientSecret(data.clientSecret);
        }
      })
      .catch((err) => {
        setError('Failed to initialize payment. Please try again.');
        console.error(err);
      });
  }, [amount, customerInfo]);

  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-800 text-red-400">
        <p className="font-bold mb-2">Payment Error</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        <p className="mt-4 text-neutral-400">Initializing payment...</p>
      </div>
    );
  }

  const appearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#00D9FF',
      colorBackground: '#000000',
      colorText: '#ffffff',
      colorDanger: '#FF0000',
      fontFamily: 'inherit',
      borderRadius: '0px',
    },
  };

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
}
