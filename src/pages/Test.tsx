import InteractiveStarfield from '../components/InteractiveStarfield';
import InteractiveNet from '../components/InteractiveNet';

const Test = () => {
  return (
    <div className="min-h-screen">
      {/* Interactive Starfield Section */}
      <section className="h-screen">
        <InteractiveStarfield />
      </section>

      {/* Interactive Net Section */}
      <section className="h-screen">
        <InteractiveNet />
      </section>

      {/* Other Test Sections */}
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black text-center mb-8 text-text-light dark:text-text-dark">
            Test Page
          </h1>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                Testing Components
              </h2>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                This is a test page to verify that all components and styling are working correctly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded">
                  <h3 className="font-semibold text-primary mb-2">Primary Color Test</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    Testing primary color styling
                  </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">
                  <h3 className="font-semibold text-text-light dark:text-text-dark mb-2">Dark Mode Test</h3>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    Testing dark mode compatibility
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                Button Tests
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors">
                  Primary Button
                </button>
                <button className="bg-white dark:bg-slate-700 text-text-light dark:text-text-dark px-4 py-2 rounded border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                  Secondary Button
                </button>
                <button className="text-primary hover:text-primary/80 transition-colors underline">
                  Link Button
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                Typography Test
              </h2>
              <div className="space-y-4">
                <h1 className="text-3xl font-black text-text-light dark:text-text-dark">Heading 1</h1>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">Heading 2</h2>
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark">Heading 3</h3>
                <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                  This is regular paragraph text with <strong className="font-semibold text-text-light dark:text-text-dark">bold text</strong> and <em className="italic">italic text</em>.
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  This is smaller text for secondary content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;