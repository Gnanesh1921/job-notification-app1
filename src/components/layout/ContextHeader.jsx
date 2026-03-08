import './ContextHeader.css';

export default function ContextHeader({ title, subtitle }) {
  return (
    <header className="context-header">
      <div className="context-header__content">
        <h1 className="context-header__title">{title}</h1>
        {subtitle && (
          <p className="context-header__subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
