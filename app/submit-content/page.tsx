export default function SubmitContent() {
  return (
    <div className="min-h-screen section-container">
      <h1 className="text-5xl font-bold mb-8 text-sleepy-neonBlue neon-glow-blue">
        GET FEATURED
      </h1>
      
      <div className="max-w-2xl">
        <p className="text-lg text-neutral-400 mb-12">
          Got a sleeper build? Track footage? Show us what you're working with. 
          Best submissions get featured on our site and socials.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Name / Handle</label>
            <input
              type="text"
              className="glossy-input w-full"
              placeholder="How should we tag you?"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Instagram (optional)</label>
            <input
              type="text"
              className="glossy-input w-full"
              placeholder="@yourhandle"
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
            <label className="block text-sm uppercase tracking-wider mb-2">Car / Build</label>
            <input
              type="text"
              className="glossy-input w-full"
              placeholder="What are you driving?"
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">Tell us about it</label>
            <textarea
              className="glossy-input w-full h-32 resize-none"
              placeholder="Mods, power figures, the story..."
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-wider mb-2">
              Content Links
            </label>
            <input
              type="text"
              className="glossy-input w-full mb-2"
              placeholder="Google Drive, Dropbox, Instagram post, etc."
            />
            <p className="text-xs text-neutral-500">
              Share photos or videos. High quality only.
            </p>
          </div>

          <button type="submit" className="sharp-btn-primary">
            Submit
          </button>
        </form>

        <div className="mt-16 p-8 glossy-card">
          <h2 className="text-xl font-bold mb-4 tracking-wider">What we're looking for:</h2>
          <ul className="space-y-2 text-neutral-400">
            <li>• Legit sleeper builds (JDM preferred)</li>
            <li>• Clean photography or quality video</li>
            <li>• Track footage, canyon runs, rolling shots</li>
            <li>• No riced out garbage</li>
            <li>• Function over flash</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
