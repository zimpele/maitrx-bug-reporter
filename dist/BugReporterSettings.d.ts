interface ConnectedConfig {
    token: string;
    endpoint: string;
    productName: string;
    enabled: boolean;
}
interface BugReporterSettingsProps {
    maitrxUrl?: string;
    storageKey?: string;
    onConfigChange?: (config: ConnectedConfig | null) => void;
}
export declare function BugReporterSettings({ maitrxUrl, storageKey, onConfigChange, }: BugReporterSettingsProps): import("react/jsx-runtime").JSX.Element;
export {};
