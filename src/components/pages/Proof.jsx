import Card from '../ui/Card';
import './EmptyState.css';

export default function Proof() {
  return (
    <div className="empty-state-page">
      <div className="empty-state-page__content">
        <Card padding="large" className="empty-state-page__card">
          <div className="empty-state-page__icon">📁</div>
          <h1 className="empty-state-page__title">Artifact Collection</h1>
          <p className="empty-state-page__text">
            Track and organize your job application artifacts, documents, and portfolio pieces.
          </p>
        </Card>
      </div>
    </div>
  );
}
