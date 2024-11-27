import React from 'react';
import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-emerald-600" />
          <span className="font-semibold text-gray-900">Safe Wealth Formula</span>
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm">
          Take the Quiz →
        </button>
      </div>
    </header>
  );
}