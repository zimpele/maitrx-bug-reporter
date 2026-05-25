import { useState, useEffect } from 'react';
import { useBugReporter, STORAGE_KEY, CONFIG_CHANGED_EVENT } from './BugReporterProvider';
import type { StoredConfig } from './BugReporterProvider';

const MAITRX_URL = 'https://support.maitrx.ai';

const s = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    zIndex: 999999,
    background: '#f9fafb',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  card: {
    background: '#fff',
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
    padding: '32px',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  logo: {
    fontSize: '28px',
    marginBottom: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111',
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#6b7280',
    marginBottom: '28px',
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '11px',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'opacity 0.15s',
  },
  btnSecondary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    background: '#f3f4f6',
    color: '#374151',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  btnDanger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '10px',
    background: '#fff',
    color: '#dc2626',
    border: '1px solid #fecaca',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  badge: (active: boolean) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 10px',
    borderRadius: '99px',
    fontSize: '12px',
    fontWeight: 600,
    background: active ? '#dcfce7' : '#f3f4f6',
    color: active ? '#166534' : '#6b7280',
  }),
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  label: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#9ca3af',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    marginBottom: '2px',
  },
  value: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#111',
  },
  divider: {
    borderTop: '1px solid #f0f0f0',
    margin: '20px 0',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
};

function saveConfig(cfg: StoredConfig | null) {
  if (cfg) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
  window.dispatchEvent(new Event(CONFIG_CHANGED_EVENT));
}

export function BugReporterSettingsPage() {
  const { storedConfig, reloadConfig } = useBugReporter();
  const [config, setConfig] = useState<StoredConfig | null>(storedConfig);

  useEffect(() => {
    setConfig(storedConfig);
  }, [storedConfig]);

  const handleConnect = () => {
    const url = `${MAITRX_URL}/auth/plugin-connect`;
    const popup = window.open(url, 'maitrx-connect', 'width=440,height=600,left=200,top=100');

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type !== 'MAITRX_PLUGIN_CONNECT') return;
      window.removeEventListener('message', handleMessage);
      popup?.close();

      const newConfig: StoredConfig = {
        token: event.data.token,
        endpoint: event.data.endpoint,
        productName: event.data.productName,
        enabled: true,
      };
      saveConfig(newConfig);
      setConfig(newConfig);
      reloadConfig();
    };

    window.addEventListener('message', handleMessage);
    const check = setInterval(() => {
      if (popup?.closed) {
        clearInterval(check);
        window.removeEventListener('message', handleMessage);
      }
    }, 500);
  };

  const handleToggle = () => {
    if (!config) return;
    const updated = { ...config, enabled: !config.enabled };
    saveConfig(updated);
    setConfig(updated);
    reloadConfig();
  };

  const handleDisconnect = () => {
    saveConfig(null);
    setConfig(null);
    reloadConfig();
  };

  return (
    <div style={s.overlay}>
      <div style={s.card}>
        <div style={s.logo}>🐛</div>
        <div style={s.title}>Bug Reporter</div>
        <div style={s.subtitle}>
          Verbinde diese App mit Maitrx — gemeldete Bugs landen direkt im internen Support-Tool.
        </div>

        {!config ? (
          <button style={s.btn} onClick={handleConnect}>
            🔗 Mit Maitrx anmelden
          </button>
        ) : (
          <>
            <div style={s.row}>
              <div>
                <div style={s.label}>Verbunden mit</div>
                <div style={s.value}>{config.productName}</div>
              </div>
              <span style={s.badge(config.enabled)}>
                {config.enabled ? '● Aktiv' : '○ Inaktiv'}
              </span>
            </div>

            <div style={s.divider} />

            <div style={s.actions}>
              <button style={s.btnSecondary} onClick={handleToggle}>
                {config.enabled ? '⏸ Deaktivieren' : '▶ Aktivieren'}
              </button>
              <button style={s.btnSecondary} onClick={handleConnect}>
                🔄 Neu verbinden
              </button>
              <button style={s.btnDanger} onClick={handleDisconnect}>
                ✕ Verbindung trennen
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
