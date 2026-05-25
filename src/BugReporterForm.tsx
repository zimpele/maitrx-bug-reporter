import { useState } from 'react';
import { useBugReporter } from './BugReporterProvider';

interface BugReporterFormProps {
  onSubmitted: () => void;
}

const s = {
  body: { padding: '16px' },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    color: '#555',
    marginBottom: '4px',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    fontSize: '13px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  },
  textarea: {
    width: '100%',
    padding: '8px 10px',
    fontSize: '13px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
    resize: 'vertical' as const,
    minHeight: '72px',
    transition: 'border-color 0.15s',
  },
  meta: {
    fontSize: '11px',
    color: '#999',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginTop: '10px',
  },
  submitBtn: {
    width: '100%',
    marginTop: '12px',
    padding: '9px',
    background: '#1a1a1a',
    color: '#fff',
    border: 'none',
    borderRadius: '7px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.15s',
    fontFamily: 'inherit',
  },
  error: {
    fontSize: '12px',
    color: '#e53e3e',
    marginTop: '8px',
  },
};

async function captureScreenshot(): Promise<string | null> {
  try {
    // @ts-ignore
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(document.body, { useCORS: true, logging: false });
    return canvas.toDataURL('image/jpeg', 0.7);
  } catch {
    return null;
  }
}

function getBrowserInfo() {
  return {
    userAgent: navigator.userAgent,
    url: window.location.href,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language,
  };
}

export function BugReporterForm({ onSubmitted }: BugReporterFormProps) {
  const { config } = useBugReporter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !config) return;

    setIsSubmitting(true);
    setError('');

    try {
      const [screenshot, browserInfo] = await Promise.all([
        captureScreenshot(),
        Promise.resolve(getBrowserInfo()),
      ]);

      const user = config.getUser?.() ?? null;

      const res = await fetch(config.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: config.token,
          title: title.trim(),
          description: description.trim() || undefined,
          browser_info: browserInfo,
          screenshot_base64: screenshot ?? undefined,
          reporter_name: user?.name ?? undefined,
          reporter_email: user?.email ?? undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Fehler beim Senden');
      }

      onSubmitted();
    } catch (err: any) {
      setError(err.message || 'Unbekannter Fehler');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={s.body}>
      <div style={{ marginBottom: '12px' }}>
        <label style={s.label}>Was ist passiert? *</label>
        <input
          style={s.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Kurze Zusammenfassung"
          required
          autoFocus
        />
      </div>

      <div>
        <label style={s.label}>Beschreibung (optional)</label>
        <textarea
          style={s.textarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Was hast du erwartet? Was ist stattdessen passiert?"
        />
      </div>

      <div style={s.meta}>
        <span>📸</span>
        <span>Screenshot + Browser-Info wird automatisch mitgeschickt</span>
      </div>

      {error && <p style={s.error}>{error}</p>}

      <button
        type="submit"
        style={{ ...s.submitBtn, opacity: isSubmitting ? 0.7 : 1 }}
        disabled={isSubmitting || !title.trim()}
      >
        {isSubmitting ? 'Wird gesendet…' : 'Bug melden'}
      </button>
    </form>
  );
}
