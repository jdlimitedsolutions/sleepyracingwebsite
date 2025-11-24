"use client";

import { useCart } from '@/lib/cart/CartContext';
import { getColorByCode } from '@/lib/products/data';
import Link from 'next/link';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={closeCart}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-black border-l border-neutral-800 z-50 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-wider">CART ({totalItems})</h2>
          <button
            onClick={closeCart}
            className="text-2xl hover:text-neutral-400 transition-colors"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-neutral-500 py-12">
              <p className="text-lg mb-4">Your cart is empty</p>
              <Link href="/shop" onClick={closeCart} className="sharp-btn">
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => {
                const primaryColor = getColorByCode(item.primaryColor);
                const secondaryColor = getColorByCode(item.secondaryColor);

                return (
                  <div key={index} className="glossy-card p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold tracking-wider">{item.product.name}</h3>
                        {item.size && (
                          <p className="text-sm text-neutral-400">Size: {item.size}</p>
                        )}
                        <p className="text-xs text-neutral-500 mt-1">
                          Primary: {primaryColor?.name} • Secondary: {secondaryColor?.name}
                        </p>
                        <p className="text-xs text-neutral-500">Logo: {item.logo}</p>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="text-neutral-500 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="w-8 h-8 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="w-8 h-8 border border-neutral-700 hover:border-white transition-colors flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold tracking-wider">TOTAL</span>
              <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="sharp-btn-primary w-full block text-center"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-neutral-500 hover:text-white transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
