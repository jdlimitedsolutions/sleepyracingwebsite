"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get('payment_intent');

  return (
    <div className="min-h-screen section-container flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <div className="glossy-card p-12">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-sleepy-neonGreen rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 tracking-wider">ORDER CONFIRMED!</h1>
          <p className="text-xl text-neutral-400 mb-8">
            Thank you for your order. We'll start working on it right away.
          </p>

          {paymentIntentId && (
            <div className="bg-neutral-900/50 border border-neutral-800 p-4 mb-8">
              <p className="text-sm text-neutral-500 mb-1">Order ID:</p>
              <p className="font-mono text-sm">{paymentIntentId}</p>
            </div>
          )}

          <div className="space-y-4 text-left mb-8 p-6 bg-neutral-900/30 border border-neutral-800">
            <h2 className="text-lg font-bold mb-4">WHAT HAPPENS NEXT?</h2>
            <div className="flex gap-4">
              <div className="text-sleepy-neonBlue font-bold">1</div>
              <div>
                <p className="font-bold mb-1">Order Processing</p>
                <p className="text-sm text-neutral-400">
                  We'll send you a confirmation email with your order details.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-sleepy-neonBlue font-bold">2</div>
              <div>
                <p className="font-bold mb-1">Production (2-3 Weeks)</p>
                <p className="text-sm text-neutral-400">
                  Your custom items are made to order. We'll keep you updated on progress.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-sleepy-neonBlue font-bold">3</div>
              <div>
                <p className="font-bold mb-1">Shipping & Delivery</p>
                <p className="text-sm text-neutral-400">
                  Once shipped, you'll receive tracking information via email.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/shop" className="sharp-btn-primary inline-block">
              Continue Shopping
            </Link>
            <p className="text-sm text-neutral-500">
              Questions? <Link href="/support" className="text-sleepy-neonBlue hover:underline">Contact Support</Link>
            </p>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="mt-12 p-8 border border-neutral-800">
          <h3 className="text-xl font-bold mb-4 tracking-wider">REP THE BRAND</h3>
          <p className="text-neutral-400 mb-6">
            Share your order on social and tag us @sleepy
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-btn text-sm"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sharp-btn text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen section-container flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
          <p className="text-neutral-400">Loading confirmation...</p>
        </div>
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}
