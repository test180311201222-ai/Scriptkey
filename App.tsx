import React from 'react';
import { StepWizard } from './components/StepWizard';
import { APP_NAME } from './constants';
import { Disc, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 flex flex-col relative overflow-x-hidden selection:bg-primary/30">
      
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }} 
      />
      
      {/* Top Navbar */}
      <header className="relative z-10 w-full p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="text-white w-6 h-6 fill-current" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                {APP_NAME}
            </h1>
        </div>
        <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Status: Online
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4">
        
        <div className="text-center mb-10 space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Get your <span className="text-primary">Key</span>
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto">
                Follow the steps below to unlock the script functionality. It only takes a minute.
            </p>
        </div>

        <StepWizard />

      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full p-6 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}