import React from 'react';
export interface BugReporterConfig {
    endpoint: string;
    token: string;
    enabled?: boolean;
    getUser?: () => {
        name?: string;
        email?: string;
    } | null;
}
interface BugReporterContextValue {
    config: BugReporterConfig;
    open: boolean;
    setOpen: (open: boolean) => void;
}
export declare function useBugReporter(): BugReporterContextValue;
interface BugReporterProviderProps {
    config: BugReporterConfig;
    children: React.ReactNode;
}
export declare function BugReporterProvider({ config, children }: BugReporterProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
