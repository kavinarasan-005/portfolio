/**
 * Main App Component
 * 
 * Single-page application structure assembling all sections.
 * Includes smooth scrolling and section navigation.
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { FeatureGrid } from './components/FeatureGrid';
import { Footer } from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Trust Logos */}
        <TrustMarquee />

        {/* Features Grid */}
        <FeatureGrid />

        {/* Content Section Example - "Start with your raw thoughts" */}
        <section className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
                Start with your{' '}
                <span className="gradient-text">raw thoughts</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                No templates, no structure needed. Just brain-dump everything
                that's in your head. Chronicle helps you organize it later.
              </p>
              <ul className="space-y-4">
                {[
                  'Voice notes automatically transcribed',
                  'Quick capture from any device',
                  'AI-powered organization',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 aspect-square flex items-center justify-center">
              {/* [PLACEHOLDER] Add illustration or animated panel */}
              <div className="text-text-muted">Content Preview</div>
            </div>
          </div>
        </section>

        {/* Video Section - "Watch Chronicle bring your story to life" */}
        <section className="section-container text-center">
          <h2 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
            Watch Chronicle bring your{' '}
            <span className="gradient-text">story to life</span>
          </h2>
          <p className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto">
            See how Chronicle transforms scattered thoughts into beautiful,
            structured narratives with just one click.
          </p>
          <div className="glass-card p-4 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-bg-secondary flex items-center justify-center group cursor-pointer hover:bg-bg-tertiary transition-colors">
              {/* [PLACEHOLDER] Replace with actual video */}
              <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Placeholder */}
        <section className="section-container">
          <h2 className="text-display-sm md:text-display-md font-bold text-text-primary text-center mb-16">
            Loved by <span className="gradient-text">creators worldwide</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass-card p-6">
                <p className="text-text-secondary mb-4 leading-relaxed">
                  "Chronicle has completely transformed how I work. It's like
                  having a personal assistant that understands my creative
                  process."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple" />
                  <div>
                    <div className="text-text-primary font-semibold">
                      User Name
                    </div>
                    <div className="text-text-muted text-sm">
                      Title, Company
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container text-center">
          <div className="glass-card p-12 md:p-16 max-w-4xl mx-auto">
            <h2 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Join thousands of creators who've already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#signup"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl glass-card hover:border-glass-glow transition-all duration-300 hover:scale-105 active:scale-95 font-semibold"
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

