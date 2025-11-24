export default function Support() {
  return (
    <div className="min-h-screen section-container">
      <h1 className="text-5xl font-bold mb-8 text-sleepy-neonOrange neon-glow-orange">
        SUPPORT
      </h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-neutral-400 mb-12">
          Need help? Hit us up. We respond fast.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Name</label>
            <input
              type="text"
              className="glossy-input w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              className="glossy-input w-full"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Order Number (if applicable)</label>
            <input
              type="text"
              className="glossy-input w-full"
              placeholder="Optional"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">What's up?</label>
            <textarea
              className="glossy-input w-full h-32 resize-none"
              placeholder="Tell us what you need..."
            />
          </div>

          <button type="submit" className="sharp-btn-primary">
            Send It
          </button>
        </form>

        <div className="mt-16 pt-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold mb-6 tracking-wider">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="space-y-8">
            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">How long does production and shipping take?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Every SLEEPY product is made to order with your custom color and logo choices. Production takes 2-3 weeks from the time you place your order. Once it ships, standard delivery is 3-5 business days. Rush production is not available—quality takes time.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">What's your return/exchange policy?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Because all items are custom made to your specifications, we cannot accept returns or exchanges on standard orders. Please double-check your size, colors, and logo choices before completing your purchase. Refer to our size guide for measurements.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">What if my item arrives defective or damaged?</h3>
              <p className="text-neutral-400 leading-relaxed">
                We inspect every order before shipping, but mistakes happen. If your item arrives with a manufacturing defect or shipping damage, contact us within 7 days of delivery with photos. We'll send a replacement at no charge. This does not cover buyer's remorse or sizing issues.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">How do I track my order?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Once your order enters production, you'll receive a confirmation email. When it ships, we'll send tracking information to the email you provided at checkout. Check your spam folder if you don't see it.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">Do you ship internationally?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Currently shipping to the United States and Canada only. International shipping to other countries is coming soon. Follow us on social for updates.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">How do I know what size to order?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Our apparel fits true to size with a slightly relaxed fit. If you're between sizes or prefer a looser fit, size up. We recommend checking the size guide on each product page for exact measurements. Remember: custom orders cannot be exchanged for sizing issues.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">What's the quality of the materials?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Premium everything. Hoodies are 400GSM heavyweight cotton, crewnecks are 350GSM fleece-lined, tees are 180GSM soft-hand cotton. Bandanas are 100% cotton. Stickers are weatherproof vinyl with UV protection. We don't cut corners.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">Can I cancel or modify my order?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Once an order is placed, it goes into production immediately. We cannot cancel or modify orders after checkout. Make sure everything is correct before you complete your purchase.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">Do you offer wholesale or bulk orders?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Interested in bulk orders for your crew, shop, or club? Contact us through the form above with details about quantity and what you're looking for. We can work something out for orders of 10+ items.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">How do I become a SLEEPY affiliate?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Head to our Affiliates page and fill out the application. We're looking for real car enthusiasts with authentic builds and engaged audiences. If you're selected, you'll get exclusive access to drops, discount codes for your followers, and commission on sales.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">Are the colors on my screen accurate?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Screen displays vary, so colors may appear slightly different in person. Our neon colors are vibrant, blacks are deep black, and whites are pure white. If you have specific color concerns, contact us before ordering.
              </p>
            </div>

            <div className="glossy-card p-6">
              <h3 className="font-bold text-lg mb-3 text-sleepy-neonBlue">Do you have a physical store?</h3>
              <p className="text-neutral-400 leading-relaxed">
                Nope. We're online only. This keeps our costs down and allows us to focus on quality over retail overhead. Plus, sleepers don't need storefronts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
