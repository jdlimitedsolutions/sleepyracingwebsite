"use client";

import { useCart } from '@/lib/cart/CartContext';

export default function CartIcon() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative hover:text-neutral-400 transition-colors"
      aria-label={`Open cart with ${totalItems} items`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-sleepy-neonBlue text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}
