import { useState, useEffect, useCallback } from 'react';

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

const MAITRX_URL = 'https://support.maitrx.ai';
const DEFAULT_STORAGE_KEY = 'tineon_bug_reporter_config';

const s = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    maxWidth: '460px',
    background: '#fff',
  },
  title: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#111',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '20px',
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '9px 16px',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '7px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '9px 16px',
    background: '#f3f4f6',
    color: '#111',
    border: '1px solid #e5e7eb',
    borderRadius: '7px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '12px',
  },
  badge: (active: boolean) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '3px 8px',
    borderRadius: '99px',
    fontSize: '11px',
    fontWeight: 600,
    background: active ? '#dcfce7' : '#f3f4f6',
    color: active ? '#166534' : '#555',
  }),
  toggle: {
    position: 'relative' as const,
    width: '36px',
    height: '20px',
    cursor: 'pointer',
  },
  label: {
    fontSize: '13px',
    color: '#555',
    marginBottom: '2px',
  },
  meta: {
    fontSize: '12px',
    color: '#999',
  },
  divider: {
    borderTop: '1px solid #f0f0f0',
    margin: '16px 0',
  },
};

export function BugReporterSettings({
  maitrxUrl = MAITRX_URL,
  storageKey = DEFAULT_STORAGE_KEY,
  onConfigChange,
}: BugReporterSettingsProps) {
  const [config, setConfig] = useState<ConnectedConfig | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as ConnectedConfig;
        setConfig(parsed);
        onConfigChange?.(parsed);
      }
    } catch {}
  }, [storageKey]);

  const saveConfig = useCallback((cfg: ConnectedConfig | null) => {
    if (cfg) {
      localStorage.setItem(storageKey, JSON.stringify(cfg));
    } else {
      localStorage.removeItem(storageKey);
    }
    setConfig(cfg);
    onConfigChange?.(cfg);
  }, [storageKey, onConfigChange]);

  const handleConnect = () => {
    const connectUrl = `${maitrxUrl}/auth/plugin-connect`;
    const popup = window.open(connectUrl, 'maitrx-connect', 'width=440,height=600,left=200,top=100');

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== new URL(maitrxUrl).origin) return;
      if (event.data?.type !== 'MAITRX_PLUGIN_CONNECT') return;
      window.removeEventListener('message', handleMessage);
      popup?.close();

      saveConfig({
        token: event.data.token,
        endpoint: event.data.endpoint,
        productName: event.data.productName,
        enabled: true,
      });
    };

    window.addEventListener('message', handleMessage);

    const checkClosed = setInterval(() => {
      if (popup?.closed) {
        clearInterval(checkClosed);
        window.removeEventListener('message', handleMessage);
      }
    }, 500);
  };

  const handleToggleEnabled = () => {
    if (!config) return;
    saveConfig({ ...config, enabled: !config.enabled });
  };

  const handleDisconnect = () => {
    saveConfig(null);
  };

  return (
    <div style={s.card}>
      <div style={s.title}>🐛 Bug Reporter</div>
      <div style={s.subtitle}>
        Verbinde diese App mit Maitrx um Bug-Reports direkt ins interne Tool zu senden.
      </div>

      {!config ? (
        <button style={s.btn} onClick={handleConnect}>
          <span>🔗</span> Mit Maitrx anmelden
        </button>
      ) : (
        <>
          <div style={s.row}>
            <div>
              <div style={s.label}>Verbunden mit</div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#111' }}>
                {config.productName}
              </div>
            </div>
            <span style={s.badge(config.enabled)}>
              {config.enabled ? '● Aktiv' : '○ Inaktiv'}
            </span>
          </div>

          <div style={s.divider} />

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
            <button style={s.btnSecondary} onClick={handleToggleEnabled}>
              {config.enabled ? 'Deaktivieren' : 'Aktivieren'}
            </button>
            <button style={s.btnSecondary} onClick={handleConnect}>
              Neu verbinden
            </button>
            <button
              style={{ ...s.btnSecondary, color: '#dc2626', borderColor: '#fecaca' }}
              onClick={handleDisconnect}
            >
              Trennen
            </button>
          </div>

          <div style={{ ...s.meta, marginTop: '12px' }}>
            Token wird sicher im localStorage gespeichert.
          </div>
        </>
      )}
    </div>
  );
}
