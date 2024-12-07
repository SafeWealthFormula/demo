import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';
import { Button } from './ui/Button';

export default function Header() {
  const startQuiz = useQuizStore((state) => state.startQuiz);

  return (
    <header className="py-4 px-6 bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-primary" />
          <span className="font-semibold text-neutral-900">Safe Wealth Formula</span>
        </div>
        <Button 
          onClick={startQuiz}
          className="group"
        >
          Take the Quiz
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </header>
  );
}