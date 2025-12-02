import React, { useState, useEffect } from 'react';
import { LINK_STEPS } from '../constants';
import { StepStatus } from '../types';
import { Button } from './Button';
import { ExternalLink, ArrowRight, Lock, CheckCircle2, Clock } from 'lucide-react';
import { KeyCard } from './KeyCard';

export const StepWizard: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepStatus, setStepStatus] = useState<StepStatus>(StepStatus.PENDING);
  const [countdown, setCountdown] = useState(0);

  const currentStepData = LINK_STEPS[currentStepIndex];
  const isFinished = currentStepIndex >= LINK_STEPS.length;

  useEffect(() => {
    let timer: any;
    if (stepStatus === StepStatus.WAITING && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (stepStatus === StepStatus.WAITING && countdown === 0) {
      setStepStatus(StepStatus.READY);
    }
    return () => clearInterval(timer);
  }, [stepStatus, countdown]);

  const handleLinkClick = () => {
    if (!currentStepData.url) return;
    
    // Open the link
    window.open(currentStepData.url, '_blank');
    
    // Start waiting logic
    setStepStatus(StepStatus.WAITING);
    setCountdown(currentStepData.waitDurationSeconds);
  };

  const handleNextStep = () => {
    setStepStatus(StepStatus.PENDING);
    setCurrentStepIndex((prev) => prev + 1);
  };

  if (isFinished) {
    return <KeyCard />;
  }

  return (
    <div className="w-full max-w-md">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8 px-2">
        {LINK_STEPS.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;
            return (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                        isActive ? 'border-primary bg-primary/20 text-white' : 
                        isCompleted ? 'border-green-500 bg-green-500/20 text-green-500' : 
                        'border-zinc-700 bg-zinc-800 text-zinc-500'
                    }`}>
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <span>{step.id}</span>}
                    </div>
                </div>
            );
        })}
        {/* Connecting Line */}
        <div className="absolute top-[2.4rem] w-full max-w-md px-6 left-0 right-0 -z-0">
             <div className="h-0.5 bg-zinc-800 w-full relative">
                <div 
                    className="h-full bg-primary transition-all duration-500 ease-out" 
                    style={{ width: `${(currentStepIndex / (LINK_STEPS.length - 1)) * 100}%` }}
                />
             </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-surface border border-zinc-700 rounded-xl p-8 shadow-xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        
        <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                {currentStepData.title}
            </h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
                {currentStepData.description}
            </p>

            <div className="space-y-4">
                {stepStatus === StepStatus.PENDING && (
                    <Button 
                        onClick={handleLinkClick} 
                        className="w-full" 
                        icon={<ExternalLink className="w-5 h-5" />}
                    >
                        {currentStepData.buttonText}
                    </Button>
                )}

                {stepStatus === StepStatus.WAITING && (
                    <Button 
                        disabled 
                        variant="secondary" 
                        className="w-full"
                        icon={<Clock className="w-5 h-5 animate-pulse" />}
                    >
                        Verifying ({countdown}s)
                    </Button>
                )}

                {stepStatus === StepStatus.READY && (
                    <Button 
                        onClick={handleNextStep} 
                        className="w-full bg-green-600 hover:bg-green-700 shadow-[0_0_15px_rgba(22,163,74,0.5)]"
                        icon={<ArrowRight className="w-5 h-5" />}
                    >
                        Continue to Next Step
                    </Button>
                )}
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-zinc-600">
                <Lock className="w-3 h-3" />
                <span>Secure connection verified</span>
            </div>
        </div>
      </div>
    </div>
  );
};