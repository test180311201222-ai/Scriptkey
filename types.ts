export interface StepData {
  id: number;
  title: string;
  description: string;
  url?: string;
  buttonText: string;
  waitDurationSeconds: number; // Simulated wait time to "verify" the user saw the ad
}

export enum StepStatus {
  LOCKED = 'LOCKED',
  PENDING = 'PENDING', // User is currently on this step
  WAITING = 'WAITING', // User clicked, waiting for timer
  READY = 'READY',     // Timer finished, ready to proceed
  COMPLETED = 'COMPLETED'
}
