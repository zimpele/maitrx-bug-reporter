import React from 'react';
export declare const STORAGE_KEY = "maitrx_bug_reporter_config";
export declare const SETTINGS_PATH = "/bug-reporter";
export declare const CONFIG_CHANGED_EVENT = "maitrx-config-changed";
export interface BugReporterConfig {
    endpoint: string;
    token: string;
    enabled?: boolean;
    getUser?: () => {
        name?: string;
        email?: string;
    } | null;
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
export declare function useBugReporter(): BugReporterContextValue;
interface BugReporterProviderProps {
    children: React.ReactNode;
    getUser?: () => {
        name?: string;
        email?: string;
    } | null;
}
export declare function BugReporterProvider({ children, getUser }: BugReporterProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
