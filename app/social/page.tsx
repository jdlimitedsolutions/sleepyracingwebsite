export default function Social() {
  return (
    <div className="min-h-screen section-container">
      <h1 className="text-5xl font-bold mb-8 tracking-wider">
        SOCIAL
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-neutral-400 mb-12">
          Connect with the SLEEPY community. Follow us, submit your build, or join our affiliate program.
        </p>

        {/* Community Links */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-wider">COMMUNITY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/affiliates" className="glossy-card p-6 hover:border-sleepy-neonGreen transition-colors">
              <h3 className="text-xl font-bold mb-2 tracking-wider">AFFILIATES</h3>
              <p className="text-neutral-400 text-sm">
                Join our ambassador program and rep the brand.
              </p>
            </a>
            <a href="/submit-content" className="glossy-card p-6 hover:border-sleepy-neonBlue transition-colors">
              <h3 className="text-xl font-bold mb-2 tracking-wider">SUBMIT CONTENT</h3>
              <p className="text-neutral-400 text-sm">
                Show us your build. Share your story.
              </p>
            </a>
            <a href="/playlist" className="glossy-card p-6 hover:border-sleepy-neonOrange transition-colors">
              <h3 className="text-xl font-bold mb-2 tracking-wider">PLAYLISTS</h3>
              <p className="text-neutral-400 text-sm">
                Aurafarming playlists for late-night sessions.
              </p>
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6 tracking-wider">FOLLOW US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://instagram.com/sleepy"
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-card p-6 hover:border-sleepy-red transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 tracking-wider">INSTAGRAM</h3>
              <p className="text-neutral-400 text-sm">
                Daily builds, culture posts, and behind-the-scenes content.
              </p>
            </a>
            <a
              href="https://tiktok.com/@sleepy"
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-card p-6 hover:border-sleepy-neonGreen transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 tracking-wider">TIKTOK</h3>
              <p className="text-neutral-400 text-sm">
                Short-form content, car culture, and community highlights.
              </p>
            </a>
            <a
              href="https://youtube.com/@sleepy"
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-card p-6 hover:border-sleepy-neonOrange transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 tracking-wider">YOUTUBE</h3>
              <p className="text-neutral-400 text-sm">
                Build features, meet coverage, and long-form content.
              </p>
            </a>
            <a
              href="https://twitter.com/sleepy"
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-card p-6 hover:border-sleepy-neonBlue transition-colors"
            >
              <h3 className="text-xl font-bold mb-2 tracking-wider">X / TWITTER</h3>
              <p className="text-neutral-400 text-sm">
                Updates, announcements, and community engagement.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
