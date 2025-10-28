/**
 * Main App Component
 * 
 * Single-page application structure assembling all sections.
 * Includes smooth scrolling and section navigation.
 */

import { Header } from './components/Header';
import { HeroChronicle } from './components/HeroChronicle';
import { TrustMarquee } from './components/TrustMarquee';
import { FeatureGrid } from './components/FeatureGrid';
import { ContentSection } from './components/ContentSection';
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
        <HeroChronicle />

        {/* Trust Logos */}
        <TrustMarquee />

        {/* Features Grid */}
        <FeatureGrid />

        {/* Content Section - "Start with your raw thoughts" */}
        <ContentSection
          heading="Start with your raw thoughts and ideas."
          paragraph="Choose a template, paste in a rough outline, or import existing content."
          bullets={[
            'Voice notes automatically transcribed',
            'Quick capture from any device',
            'AI-powered organization',
          ]}
          reverse={false}
        />

        {/* Content Section - "Watch Chronicle bring your story to life" */}
        <ContentSection
          heading="Watch Chronicle bring your story to life."
          paragraph="Generate a well crafted presentation, with beautiful layouts that you can refine, share and present."
          bullets={[]}
          reverse={true}
        />

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

