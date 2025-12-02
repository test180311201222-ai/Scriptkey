import React, { useState } from 'react';
import { Copy, Check, Terminal, ShieldCheck } from 'lucide-react';
import { SCRIPT_KEY } from '../constants';
import { Button } from './Button';

export const KeyCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(SCRIPT_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md bg-surface border border-zinc-700 rounded-xl p-8 shadow-2xl animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <ShieldCheck className="w-10 h-10 text-green-500" />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Access Granted</h2>
          <p className="text-zinc-400">You have successfully completed the verification steps.</p>
        </div>

        <div className="w-full bg-black/50 border border-zinc-800 rounded-lg p-4 relative group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 overflow-hidden">
              <Terminal className="w-5 h-5 text-zinc-500 flex-shrink-0" />
              <code className="text-primary font-mono text-lg truncate select-all">
                {SCRIPT_KEY}
              </code>
            </div>
          </div>
        </div>

        <Button 
          onClick={handleCopy} 
          className="w-full"
          variant={copied ? 'secondary' : 'primary'}
          icon={copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        >
          {copied ? "Copied to Clipboard" : "Copy Key"}
        </Button>
        
        <p className="text-xs text-zinc-500 mt-4">
          Paste this key into the script window to activate Flick HUB.
        </p>
      </div>
    </div>
  );
};