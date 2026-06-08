import './Timeline.css'

export function Timeline({ children, className = '' }) {
  return (
    <ol className={['timeline', className].filter(Boolean).join(' ')}>
      {children}
    </ol>
  )
}
