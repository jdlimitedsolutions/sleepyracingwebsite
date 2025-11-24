"use client";

import { useState } from "react";

export default function Affiliates() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Error submitting:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen section-container">
      <h1 className="text-5xl font-bold mb-8 text-sleepy-neonGreen">
        BECOME AN AFFILIATE
      </h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-neutral-400 mb-12">
          Rep the brand. Get discounts. Make money. Simple.
        </p>

        {submitted && (
          <div className="p-6 mb-8 glossy-card border-sleepy-neonGreen">
            <p className="text-sleepy-neonGreen font-bold">
              Application received. We'll be in touch soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="glossy-input w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="glossy-input w-full"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              className="glossy-input w-full"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Instagram</label>
            <input
              type="text"
              name="instagram"
              required
              className="glossy-input w-full"
              placeholder="@yourhandle"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Follower Count</label>
            <input
              type="number"
              name="followers"
              required
              className="glossy-input w-full"
              placeholder="Approximate number"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">
              Why do you want to be an affiliate?
            </label>
            <textarea
              name="why"
              required
              className="glossy-input w-full h-32 resize-none"
              placeholder="Tell us why you'd be a good fit..."
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">
              What do you post about?
            </label>
            <textarea
              name="content"
              required
              className="glossy-input w-full h-24 resize-none"
              placeholder="Cars, builds, lifestyle, etc."
            />
          </div>

          <button 
            type="submit" 
            className="sharp-btn-primary"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Apply"}
          </button>
        </form>

        <div className="mt-16 p-8 glossy-card">
          <h2 className="text-xl font-bold mb-4 tracking-wider">What you get:</h2>
          <ul className="space-y-2 text-neutral-400">
            <li>• 15-25% discount on all SLEEPY merch</li>
            <li>• Unique affiliate code for your followers</li>
            <li>• Commission on every sale</li>
            <li>• Early access to drops</li>
            <li>• Feature opportunities on our platforms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
