"use client";

import { PRODUCTS } from "@/lib/products/data";
import { useState } from "react";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";

const LAUNCH_DATE = new Date("2026-01-01T00:00:00");

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const isLaunched = new Date() >= LAUNCH_DATE;

  const categories = [
    { value: "all", label: "All" },
    { value: "apparel", label: "Apparel" },
    { value: "accessories", label: "Accessories" },
  ];

  const apparelTypes = ["hoodie", "crewneck", "tshirt"];
  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : selectedCategory === "apparel"
    ? PRODUCTS.filter(p => apparelTypes.includes(p.type))
    : PRODUCTS.filter(p => !apparelTypes.includes(p.type));

  if (!isLaunched) {
    return <CountdownTimer targetDate={LAUNCH_DATE} />;
  }

  return (
    <div className="min-h-screen section-container">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-sleepy-red neon-text">
          SHOP
        </h1>
        <p className="text-lg text-neutral-400">
          Full customization on every piece. Built to order.
        </p>
      </div>

      <div className="flex gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-6 py-2 border transition-all ${selectedCategory === cat.value ? "bg-white text-black border-white" : "bg-transparent text-white border-neutral-700 hover:border-white"}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="glossy-card p-0 overflow-hidden group">
            <div className="aspect-square bg-neutral-900 flex items-center justify-center border-b border-neutral-800 group-hover:bg-neutral-800 transition-colors">
              <span className="text-6xl opacity-30">{product.type === "hoodie" ? "👕" : product.type === "tshirt" ? "👕" : product.type === "crewneck" ? "👕" : product.type === "bandana" ? "🧣" : "📦"}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 tracking-wider">{product.name}</h3>
              <p className="text-sm text-neutral-400 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-sleepy-neonGreen">${product.basePrice.toFixed(2)}</span>
                <span className="text-xs uppercase tracking-wider text-neutral-500">Customize</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-8 glossy-card text-center">
        <h2 className="text-2xl font-bold mb-4 tracking-wider">Made to Order</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">Every piece is custom manufactured with your color and logo choices. Expect 2-3 weeks from order to delivery. No mass production. No stock sitting around. Just your exact build.</p>
      </div>
    </div>
  );
}