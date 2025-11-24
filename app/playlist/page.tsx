export default function Playlist() {
  return (
    <div className="min-h-screen section-container">
      <h1 className="text-5xl font-bold mb-8 tracking-wider">
        PLAYLISTS
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-neutral-400 mb-12">
          Aurafarming essentials. The soundtrack to midnight runs and late-night wrenching.
        </p>

        <div className="space-y-8">
          {/* Playlist 1 */}
          <div className="glossy-card p-6">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3E2yuP5CkpWn9fiXJbDOMO?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          {/* Playlist 2 */}
          <div className="glossy-card p-6">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2wWGXrllGyy0uX1INCl4gq?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
