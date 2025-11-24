"use client";

import { useState } from "react";

export default function SleepyTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    location: "",
    followers: "",
    build: "",
    why: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", instagram: "", location: "", followers: "", build: "", why: "" });
      }
    } catch (error) {
      console.error("Failed to submit application:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen section-container">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-wider">
            SLEEPY TEAM
          </h1>
          <p className="text-lg text-neutral-400">
            A limited crew who've proven themselves in the scene.
          </p>
        </div>

        <div className="glossy-card p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold mb-6 tracking-wider">THE TEAM</h2>
          <p className="text-neutral-400 leading-relaxed mb-6">
            A select group who represent SLEEPY. People who are already moving in the scene and
            understand what this is about.
          </p>
          <p className="text-neutral-400 leading-relaxed mb-6">
            Early access and discounts on drops. Exclusive SLEEPY Team gear. Event access. Unlimited aura.
          </p>
          <p className="text-neutral-400 leading-relaxed">
            5-10 people. High bar. If you're the right fit, apply below.
          </p>
        </div>

        {submitted ? (
          <div className="glossy-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-sleepy-neonGreen">APPLICATION RECEIVED</h2>
            <p className="text-neutral-400">
              We'll review your build and get back to you if you're a fit for the team.
              Real recognizes real.
            </p>
          </div>
        ) : (
          <div className="glossy-card p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 tracking-wider">APPLY</h2>
            <p className="text-neutral-400 mb-8">
              Show us who you are and why you belong here.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 tracking-wider">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="instagram" className="block text-sm font-bold mb-2 tracking-wider">
                    INSTAGRAM HANDLE *
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    placeholder="@yourusername"
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="followers" className="block text-sm font-bold mb-2 tracking-wider">
                    FOLLOWER COUNT *
                  </label>
                  <input
                    type="text"
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleChange}
                    required
                    placeholder="Approximate across all platforms"
                    className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-bold mb-2 tracking-wider">
                  LOCATION (CITY, STATE) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Los Angeles, CA"
                  className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="build" className="block text-sm font-bold mb-2 tracking-wider">
                  YOUR BUILD *
                </label>
                <input
                  type="text"
                  id="build"
                  name="build"
                  value={formData.build}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2003 Honda Civic EX (K24 turbo, 400hp)"
                  className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="why" className="block text-sm font-bold mb-2 tracking-wider">
                  WHY YOU *
                </label>
                <textarea
                  id="why"
                  name="why"
                  value={formData.why}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Why do you belong on the SLEEPY Team?"
                  className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-sm text-white focus:border-sleepy-neonGreen focus:outline-none resize-none"
                />
              </div>

              <button type="submit" className="sharp-btn-primary w-full">
                SUBMIT
              </button>

              <p className="text-xs text-neutral-500 text-center">
                We review every application. 5-10 spots total.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
