import Card from '../ui/Card';
import './EmptyState.css';

export default function Saved() {
  return (
    <div className="empty-state-page">
      <div className="empty-state-page__content">
        <Card padding="large" className="empty-state-page__card">
          <div className="empty-state-page__icon">🔖</div>
          <h1 className="empty-state-page__title">No saved jobs</h1>
          <p className="empty-state-page__text">
            Save interesting job postings to review them later. Your saved jobs will appear here.
          </p>
        </Card>
      </div>
    </div>
  );
}
