import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import Footer from './components/Footer';

function App() {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Trust />
      <Footer />

      {/* Exit Intent Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Don't leave your future to chance!</h2>
            <p className="text-gray-600 mb-6">
              Take the 2-minute checkup now and discover how to protect your wealth.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowExitIntent(false)}
                className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              >
                Take the Quiz
              </button>
              <button 
                onClick={() => setShowExitIntent(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;