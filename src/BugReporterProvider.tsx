import React, { createContext, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BugReporterWidget } from './BugReporterWidget';
import { BugReporterSettingsPage } from './BugReporterSettingsPage';

export const STORAGE_KEY = 'maitrx_bug_reporter_config';
export const SETTINGS_PATH = '/bug-reporter';
export const CONFIG_CHANGED_EVENT = 'maitrx-config-changed';

export interface BugReporterConfig {
  endpoint: string;
  token: string;
  enabled?: boolean;
  getUser?: () => { name?: string; email?: string } | null;
}

export interface StoredConfig {
  token: string;
  endpoint: string;
  productName: string;
  enabled: boolean;
}

interface BugReporterContextValue {
  config: BugReporterConfig | null;
  storedConfig: StoredConfig | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  reloadConfig: () => void;
}

const BugReporterContext = createContext<BugReporterContextValue | null>(null);

export function useBugReporter() {
  const ctx = useContext(BugReporterContext);
  if (!ctx) throw new Error('useBugReporter must be used within BugReporterProvider');
  return ctx;
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const update = () => setPathname(window.location.pathname);

    const origPush = window.history.pushState.bind(window.history);
    window.history.pushState = function (...args) {
      origPush(...args);
      update();
    };
    const origReplace = window.history.replaceState.bind(window.history);
    window.history.replaceState = function (...args) {
      origReplace(...args);
      update();
    };

    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);

  return pathname;
}

function readStoredConfig(): StoredConfig | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredConfig) : null;
  } catch {
    return null;
  }
}

interface BugReporterProviderProps {
  children: React.ReactNode;
  getUser?: () => { name?: string; email?: string } | null;
}

export function BugReporterProvider({ children, getUser }: BugReporterProviderProps) {
  const [open, setOpen] = useState(false);
  const [storedConfig, setStoredConfig] = useState<StoredConfig | null>(readStoredConfig);
  const pathname = usePathname();

  const reloadConfig = () => setStoredConfig(readStoredConfig());

  useEffect(() => {
    window.addEventListener(CONFIG_CHANGED_EVENT, reloadConfig);
    return () => window.removeEventListener(CONFIG_CHANGED_EVENT, reloadConfig);
  }, []);

  const resolvedConfig: BugReporterConfig | null = storedConfig
    ? { endpoint: storedConfig.endpoint, token: storedConfig.token, enabled: storedConfig.enabled, getUser }
    : null;

  const isSettingsPage = pathname === SETTINGS_PATH;
  const showWidget = !isSettingsPage && resolvedConfig !== null && resolvedConfig.enabled !== false;

  return (
    <BugReporterContext.Provider value={{ config: resolvedConfig, storedConfig, open, setOpen, reloadConfig }}>
      {children}
      {isSettingsPage && createPortal(<BugReporterSettingsPage />, document.body)}
      {showWidget && createPortal(<BugReporterWidget />, document.body)}
    </BugReporterContext.Provider>
  );
}
