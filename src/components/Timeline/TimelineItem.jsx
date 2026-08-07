export function TimelineItem({ index = 0, media, children, id, paired = false }) {
  const isReversed = index % 2 !== 0

  return (
    <li
      id={id}
      className={[
        'timeline__item',
        isReversed && 'timeline__item--reversed',
        paired && 'timeline__item--paired',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="timeline__body">
        {media && <div className="timeline__media">{media}</div>}
        <div className="timeline__content">{children}</div>
      </div>
    </li>
  )
}
