"use client";

import { getProductById, COLORS, LOGOS } from "@/lib/products/data";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart/CartContext";
import type { ColorCode, LogoCode, ProductSize } from "@/types/product";

export default function ProductCustomizer({ productId }: { productId: string }) {
  const product = getProductById(productId);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen section-container flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product not found</h1>
          <Link href="/shop" className="sharp-btn">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const [size, setSize] = useState<ProductSize | undefined>(product.sizes?.[0]);
  const [primaryColor, setPrimaryColor] = useState<ColorCode>("B");
  const [secondaryColor, setSecondaryColor] = useState<ColorCode>("W");
  const [logo, setLogo] = useState<LogoCode>(product.availableLogos[0]);

  const handleAddToCart = () => {
    addItem(product, {
      productId: product.id,
      size,
      primaryColor,
      secondaryColor,
      logo,
    });
  };

  const primaryColorData = COLORS.find((c) => c.code === primaryColor);
  const secondaryColorData = COLORS.find((c) => c.code === secondaryColor);

  return (
    <div className="min-h-screen section-container">
      <Link href="/shop" className="text-neutral-400 hover:text-white mb-8 inline-block">
        &larr; Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="glossy-card p-8">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-neutral-500">Live Preview</h3>
            <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-neutral-800">
              <div
                className="absolute inset-0"
                style={{ backgroundColor: primaryColorData?.hex }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="text-6xl font-bold opacity-80"
                      style={{ color: secondaryColorData?.hex }}
                    >
                      {logo}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-mono opacity-50">
                {product.id}-{size || "OS"}-{primaryColor}-{secondaryColor}-{logo}
              </div>
            </div>
          </div>
        </div>

        <div className="glossy-card p-8">
          <h1 className="text-4xl font-bold mb-4 tracking-wider">{product.name}</h1>
          <p className="text-neutral-400 mb-8">{product.description}</p>

          {product.sizes && (
            <div className="mb-6">
              <h3 className="text-sm uppercase tracking-wider mb-3 text-neutral-500">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-6 py-2 border transition-all ${size === s ? "bg-white text-black border-white" : "bg-transparent text-white border-neutral-700 hover:border-white"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider mb-3 text-neutral-500">Primary Color</h3>
            <div className="grid grid-cols-5 gap-2">
              {COLORS.map((color) => (
                <button
                  key={color.code}
                  onClick={() => setPrimaryColor(color.code)}
                  className={`aspect-square rounded-sm border-2 transition-all ${primaryColor === color.code ? "border-white scale-110" : "border-neutral-800 hover:border-neutral-600"}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm uppercase tracking-wider mb-3 text-neutral-500">Secondary Color (Logo/Details)</h3>
            <div className="grid grid-cols-5 gap-2">
              {COLORS.map((color) => (
                <button
                  key={color.code}
                  onClick={() => setSecondaryColor(color.code)}
                  className={`aspect-square rounded-sm border-2 transition-all ${secondaryColor === color.code ? "border-white scale-110" : "border-neutral-800 hover:border-neutral-600"}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-3 text-neutral-500">Logo Design</h3>
            <div className="space-y-2">
              {LOGOS.filter((l) => product.availableLogos.includes(l.code)).map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLogo(l.code)}
                  className={`w-full text-left px-4 py-3 border transition-all ${logo === l.code ? "bg-white text-black border-white" : "bg-transparent text-white border-neutral-800 hover:border-white"}`}
                >
                  <div className="font-bold">{l.name}</div>
                  <div className="text-sm opacity-70">{l.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-bold text-sleepy-neonGreen">${product.basePrice.toFixed(2)}</span>
              <span className="text-sm text-neutral-500">Made to order</span>
            </div>
            <button onClick={handleAddToCart} className="sharp-btn-primary w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
