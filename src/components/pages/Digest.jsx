import Card from '../ui/Card';
import './EmptyState.css';

export default function Digest() {
  return (
    <div className="empty-state-page">
      <div className="empty-state-page__content">
        <Card padding="large" className="empty-state-page__card">
          <div className="empty-state-page__icon">📧</div>
          <h1 className="empty-state-page__title">Daily digest coming soon</h1>
          <p className="empty-state-page__text">
            Get a curated summary of new job matches delivered to your inbox every morning at 9AM.
          </p>
        </Card>
      </div>
    </div>
  );
}
