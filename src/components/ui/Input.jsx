import './Input.css';

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = ''
}) {
  const classNames = [
    'input-wrapper',
    error ? 'input-wrapper--error' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {label && (
        <label className="input-label">{label}</label>
      )}
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <span className="input-error">{error}</span>
      )}
    </div>
  );
}
