import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider italic">
            SLEEPY
          </h1>
          <p className="text-2xl md:text-3xl text-sleepy-neonBlue tracking-wider font-bold uppercase mb-8">
            Undercover. Overpowered.
          </p>
          <p className="text-xl text-neutral-400 leading-relaxed">
            We're not here to be flashy. We're here to rep the real ones—the builders, the tuners, the late-night wrenchers who'd rather spend money under the hood than on the paint.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-container bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 tracking-wider">THE SLEEPER PHILOSOPHY</h2>

          <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
            <p>
              SLEEPY was born from a culture where respect is earned through what's under the hood. Midnight runs on empty highways.
              Wrench time, dyno pulls, and builds that back up the talk. While everyone else was slapping on fake vents and body kits
              with nothing to show for it, we were in the garage stacking real power. Built different.
            </p>

            <p>
              We celebrate the <span className="text-sleepy-neonGreen font-bold">sleeper</span>—the unassuming daily driver
              hiding a built motor, the bone-stock exterior with a fully loaded engine bay, the quiet exhaust that surprises
              everyone at the dig.
            </p>

            <p>
              It doesn't matter if it's a <span className="text-white font-bold">2JZ-swapped IS300, an S54-powered E30,
              a turbo LS Silverado, or a 2000hp Calvo.</span>. Sleepers transcend brands and borders.
              Japanese, German, American—if it's faster than it looks, it's one of ours.
            </p>

            <p className="text-sleepy-red font-bold text-xl">
              No rice. No fake vents. No AutoZone stick-ons with zero performance gain.
            </p>

            <p>
              Just authentic, understated gear for those who let their rear view do the talking.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-wider text-center">WHAT WE STAND FOR</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glossy-card p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">PERFORMANCE FIRST</h3>
              <p className="text-neutral-400">
                We believe in building for the track, not the 'gram. Real mods, real gains, real respect.
                If it doesn't add horsepower or improve handling, we're not interested.
              </p>
            </div>

            <div className="glossy-card p-8">
              <div className="text-4xl mb-4">💀</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">HIDDEN POWER</h3>
              <p className="text-neutral-400">
                Whether you roll quiet or loud, blacked out or bone stock—the aura is the same. Real builds command respect.
                Turbo setups that surprise. Big power hiding in plain sight. It's not about how it looks,
                it's about what happens when you hit the gas.
              </p>
            </div>

            <div className="glossy-card p-8">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">UNDERGROUND HERITAGE</h3>
              <p className="text-neutral-400">
                Born in late-night meets and back-alley races. Routes memorized. Before the takeovers and the cameras.
                Where respect was earned through midnight runs and proven times. We're getting back to the basics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Made */}
      <section className="section-container bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-wider">MADE TO ORDER</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Every piece of SLEEPY gear is <span className="text-white font-bold">custom made to order</span>.
            We don't do mass production. We don't do cheap prints. Each order is individually crafted with
            your chosen colors and logo placement.
          </p>
          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            Production takes <span className="text-sleepy-neonBlue font-bold">2-3 weeks</span> because quality
            takes time. Just like a quality build, we don't cut corners.
          </p>
          <Link href="/shop" className="sharp-btn-primary inline-block">
            Build Your Gear
          </Link>
        </div>
      </section>

      {/* Community */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 tracking-wider text-center">JOIN THE UNDERGROUND</h2>

          <div className="glossy-card p-12 text-center">
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              SLEEPY is more than a brand—it's a mindset. We're building a community of enthusiasts who
              value <span className="text-white font-bold">real power over fake mods</span>,
              <span className="text-white font-bold"> builds that perform</span>, and
              <span className="text-white font-bold"> aura that's earned, not bought</span>.
            </p>

            <div className="space-y-4">
              <Link href="/affiliates" className="sharp-btn-primary inline-block mr-4">
                Become an Affiliate
              </Link>
              <Link href="/submit-content" className="sharp-btn inline-block">
                Submit Your Build
              </Link>
            </div>

            <p className="text-sm text-neutral-500 mt-8">
              Tag us in your posts. Show us your builds. Let's grow this movement together.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-wider italic">
            REAL POWER. REAL RESPECT.
          </h2>
          <p className="text-xl text-sleepy-neonGreen mb-8">BUILT DIFFERENT.</p>
          <Link href="/shop" className="sharp-btn-primary inline-block">
            Shop SLEEPY
          </Link>
        </div>
      </section>
    </div>
  );
}
