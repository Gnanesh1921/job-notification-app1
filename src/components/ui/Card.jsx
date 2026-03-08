import './Card.css';

export default function Card({ 
  children, 
  padding = 'medium',
  className = ''
}) {
  const classNames = [
    'card',
    `card--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
