import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        
        {/* Placeholder for video - will be replaced with actual footage */}
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
          <div className="text-center z-20">
            <h1 className="text-7xl md:text-9xl font-bold tracking-widest mb-6 text-sleepy-red italic">
              SLEEPY
            </h1>
            <p className="text-2xl md:text-3xl text-sleepy-neonBlue tracking-wider font-bold uppercase">
              Undercover. Overpowered.
            </p>
          </div>
        </div>

        {/* Video will go here */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video> */}
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <Link href="/shop" className="sharp-btn-primary">
            Shop Now
          </Link>
        </div>
      </section>


      {/* Featured Products Preview */}
      <section className="section-container">
        <h2 className="text-4xl font-bold mb-12 text-center tracking-wider">SIGNATURE PIECES</h2>
        <div className="product-grid">
          {["Hoodies", "Crewnecks", "Tees"].map((item) => (
            <Link key={item} href="/shop" className="glossy-card p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-wider">{item.toUpperCase()}</h3>
                <p className="text-neutral-500 mt-2">Full customization</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/shop" className="sharp-btn">
            View All
          </Link>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-container bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-wider">BUILT DIFFERENT.</h2>
          <p className="text-lg text-neutral-400 leading-relaxed mb-8">
            This is about what's under the hood. Performance that doesn't need to announce itself.
            Sleeper car culture for those who know.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="glossy-card p-16 text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">JOIN THE SLEEPY TEAM</h2>
          <p className="text-neutral-400 mb-8">
            Elite. Exclusive. Rep the brand and get early access to drops.
          </p>
          <Link href="/team" className="sharp-btn-primary">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
