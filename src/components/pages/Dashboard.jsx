import Card from '../ui/Card';
import './EmptyState.css';

export default function Dashboard() {
  return (
    <div className="empty-state-page">
      <div className="empty-state-page__content">
        <Card padding="large" className="empty-state-page__card">
          <div className="empty-state-page__icon">📊</div>
          <h1 className="empty-state-page__title">No jobs yet.</h1>
          <p className="empty-state-page__text">
            In the next step, you will load a realistic dataset.
          </p>
        </Card>
      </div>
    </div>
  );
}
