import './Badge.css';

export default function Badge({ 
  children, 
  variant = 'default',
  className = ''
}) {
  const classNames = [
    'badge',
    `badge--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames}>
      {children}
    </span>
  );
}
