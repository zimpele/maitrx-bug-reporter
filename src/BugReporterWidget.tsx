import { useState, useEffect } from 'react';
import { useBugReporter } from './BugReporterProvider';
import { BugReporterForm } from './BugReporterForm';

const s = {
  fab: {
    position: 'fixed' as const,
    bottom: '24px',
    right: '24px',
    zIndex: 99999,
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
    fontSize: '20px',
    transition: 'transform 0.15s ease',
  },
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    zIndex: 99998,
    background: 'rgba(0,0,0,0.3)',
  },
  dialog: {
    position: 'fixed' as const,
    bottom: '84px',
    right: '24px',
    zIndex: 99999,
    width: '340px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 16px',
    borderBottom: '1px solid #f0f0f0',
    background: '#fafafa',
  },
  headerTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#111',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#888',
    lineHeight: 1,
    padding: '2px',
  },
};

export function BugReporterWidget() {
  const { open, setOpen } = useBugReporter();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  const handleSubmitted = () => {
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2000);
  };

  return (
    <>
      <button
        style={s.fab}
        onClick={() => setOpen(!open)}
        title="Bug melden"
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
      >
        🐛
      </button>

      {open && (
        <>
          <div style={s.overlay} onClick={() => setOpen(false)} />
          <div style={s.dialog}>
            <div style={s.header}>
              <span style={s.headerTitle}>🐛 Bug melden</span>
              <button style={s.closeBtn} onClick={() => setOpen(false)}>×</button>
            </div>
            {submitted ? (
              <div style={{ padding: '32px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
                <p style={{ fontSize: '14px', color: '#444', margin: 0 }}>Danke! Bug wurde gemeldet.</p>
              </div>
            ) : (
              <BugReporterForm onSubmitted={handleSubmitted} />
            )}
          </div>
        </>
      )}
    </>
  );
}
