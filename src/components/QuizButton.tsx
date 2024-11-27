import React from 'react';

export default function QuizButton() {
  return (
    <button 
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      onClick={() => {
        // Quiz logic would go here
        console.log('Starting quiz...');
      }}
    >
      <span className="relative">Reveal My Safe Wealth Score →</span>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
    </button>
  );
}