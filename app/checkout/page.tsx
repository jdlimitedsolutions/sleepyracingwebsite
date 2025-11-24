"use client";

import { useCart } from '@/lib/cart/CartContext';
import { getColorByCode } from '@/lib/products/data';
import Link from 'next/link';
import { useState } from 'react';
import StripeCheckoutForm from '@/components/StripeCheckoutForm';

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
  });
  const [step, setStep] = useState<'info' | 'payment'>('info');

  if (items.length === 0) {
    return (
      <div className="min-h-screen section-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/shop" className="sharp-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const shippingCost = 0; // Free shipping for now
  const tax = totalPrice * 0.08; // 8% tax estimate
  const finalTotal = totalPrice + shippingCost + tax;

  return (
    <div className="min-h-screen section-container">
      <h1 className="text-4xl font-bold mb-8 tracking-wider">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Customer Info & Payment */}
        <div>
          {step === 'info' ? (
            <div className="glossy-card p-8">
              <h2 className="text-2xl font-bold mb-6 tracking-wider">SHIPPING INFORMATION</h2>
              <form onSubmit={handleInfoSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-neutral-400">Email</label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="glossy-input w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">First Name</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                      className="glossy-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">Last Name</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                      className="glossy-input w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-neutral-400">Address</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    className="glossy-input w-full"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">City</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                      className="glossy-input w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">State</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.state}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })}
                      className="glossy-input w-full"
                      placeholder="CA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={customerInfo.zip}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, zip: e.target.value })}
                      className="glossy-input w-full"
                      placeholder="90210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-neutral-400">Country</label>
                    <select
                      value={customerInfo.country}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
                      className="glossy-input w-full"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="sharp-btn-primary w-full mt-6">
                  Continue to Payment
                </button>
              </form>
            </div>
          ) : (
            <div className="glossy-card p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold tracking-wider">PAYMENT</h2>
                <button
                  onClick={() => setStep('info')}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  ← Edit Info
                </button>
              </div>

              <div className="mb-6 p-4 bg-neutral-900/50 border border-neutral-800">
                <p className="text-sm text-neutral-400 mb-1">Shipping to:</p>
                <p className="font-bold">{customerInfo.firstName} {customerInfo.lastName}</p>
                <p className="text-sm">{customerInfo.address}</p>
                <p className="text-sm">{customerInfo.city}, {customerInfo.state} {customerInfo.zip}</p>
                <p className="text-sm">{customerInfo.email}</p>
              </div>

              <StripeCheckoutForm
                amount={Math.round(finalTotal * 100)} // Convert to cents
                customerInfo={customerInfo}
              />
            </div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div>
          <div className="glossy-card p-8 sticky top-24">
            <h2 className="text-2xl font-bold mb-6 tracking-wider">ORDER SUMMARY</h2>

            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {items.map((item, index) => {
                const primaryColor = getColorByCode(item.primaryColor);
                const secondaryColor = getColorByCode(item.secondaryColor);

                return (
                  <div key={index} className="flex gap-4 pb-4 border-b border-neutral-800">
                    <div
                      className="w-20 h-20 border border-neutral-800 flex items-center justify-center text-xs"
                      style={{ backgroundColor: primaryColor?.hex }}
                    >
                      <span style={{ color: secondaryColor?.hex }}>
                        {item.logo}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{item.product.name}</h3>
                      {item.size && <p className="text-sm text-neutral-400">Size: {item.size}</p>}
                      <p className="text-xs text-neutral-500">
                        {primaryColor?.name} / {secondaryColor?.name}
                      </p>
                      <p className="text-sm mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2 border-t border-neutral-800 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Shipping</span>
                <span className="text-sleepy-neonGreen">FREE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-neutral-800">
                <span>TOTAL</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-neutral-900/50 border border-neutral-800 text-sm text-neutral-400">
              <p className="mb-2">✓ Made to order • 2-3 weeks production</p>
              <p>✓ Free shipping on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
