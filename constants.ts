import { StepData } from './types';

export const APP_NAME = "Flick HUB";
export const SCRIPT_KEY = "Flick-HUB-script";

// REPLACES THESE URLS WITH YOUR ACTUAL LINKVERTISE LINKS
export const LINK_STEPS: StepData[] = [
  {
    id: 1,
    title: "Support Check 1",
    description: "Complete the first verification step on Linkvertise to proceed.",
    url: "https://linkvertise.com/example/step1", // <--- PUT YOUR FIRST LINK HERE
    buttonText: "Go to Linkvertise 1",
    waitDurationSeconds: 10
  },
  {
    id: 2,
    title: "Support Check 2",
    description: "Almost there! Complete the final verification step.",
    url: "https://linkvertise.com/example/step2", // <--- PUT YOUR SECOND LINK HERE
    buttonText: "Go to Linkvertise 2",
    waitDurationSeconds: 10
  }
];
