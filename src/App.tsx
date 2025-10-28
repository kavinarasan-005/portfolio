/**
 * Main App Component - ChronicleHQ.com Exact Match
 * 
 * Structure matches ChronicleHQ.com with GSAP animations
 */

import { Header } from './components/Header';
import { HeroChronicle } from './components/HeroChronicle';
import { TrustMarquee } from './components/TrustMarquee';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - ChronicleHQ.com exact match */}
        <HeroChronicle />

        {/* Trust Marquee - "Used by 5000+ teams" */}
        <TrustMarquee />

        {/* Content Section 1 - "Start with your raw thoughts" */}
        <section className="relative py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start with your raw thoughts and ideas.
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Choose a template, paste in a rough outline, or import existing content.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-gray-300">Voice notes automatically transcribed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-gray-300">Quick capture from any device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-gray-300">AI-powered organization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                {/* Placeholder for content preview */}
                <div className="text-gray-500">Content Preview</div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section 2 - "Watch Chronicle bring your story to life" */}
        <section className="relative py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Watch Chronicle bring your story to life.
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Generate a well crafted presentation, with beautiful layouts that you can refine, share and present.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-5xl mx-auto">
              <div className="aspect-video bg-white/5 rounded-xl flex items-center justify-center">
                {/* Placeholder for video preview */}
                <div className="text-gray-500">Video Preview</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Join thousands of creators who've already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-white/40 transition-all"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
