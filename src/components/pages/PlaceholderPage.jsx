import './PlaceholderPage.css';

export default function PlaceholderPage({ title, subtitle }) {
  return (
    <div className="placeholder-page">
      <div className="placeholder-page__content">
        <h1 className="placeholder-page__title">{title}</h1>
        {subtitle && (
          <p className="placeholder-page__subtitle">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
