import React, { createContext, useContext, useState } from 'react';
import { BugReporterWidget } from './BugReporterWidget';

export interface BugReporterConfig {
  endpoint: string;
  token: string;
  enabled?: boolean;
  getUser?: () => { name?: string; email?: string } | null;
}

interface BugReporterContextValue {
  config: BugReporterConfig;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BugReporterContext = createContext<BugReporterContextValue | null>(null);

export function useBugReporter() {
  const ctx = useContext(BugReporterContext);
  if (!ctx) throw new Error('useBugReporter must be used within BugReporterProvider');
  return ctx;
}

interface BugReporterProviderProps {
  config: BugReporterConfig;
  children: React.ReactNode;
}

export function BugReporterProvider({ config, children }: BugReporterProviderProps) {
  const [open, setOpen] = useState(false);
  const enabled = config.enabled !== false;

  return (
    <BugReporterContext.Provider value={{ config, open, setOpen }}>
      {children}
      {enabled && <BugReporterWidget />}
    </BugReporterContext.Provider>
  );
}
