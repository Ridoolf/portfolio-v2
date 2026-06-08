import { useEffect } from 'react'
import './FormNotice.css'

export function FormNotice({ type, message, onClose }) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 6000)
    return () => window.clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`form-notice glass-surface--strong form-notice--${type}`}
      role={type === 'error' ? 'alert' : 'status'}
      aria-live="polite"
    >
      <span className="form-notice__icon" aria-hidden="true">
        {type === 'success' ? '✓' : '!'}
      </span>
      <p className="form-notice__message">{message}</p>
      <button
        type="button"
        className="form-notice__close"
        aria-label="Cerrar aviso"
        onClick={onClose}
      >
        ×
      </button>
    </div>
  )
}
