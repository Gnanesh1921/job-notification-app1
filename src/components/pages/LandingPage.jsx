import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <h1 className="landing-page__headline">Stop Missing The Right Jobs.</h1>
        <p className="landing-page__subtext">Precision-matched job discovery delivered daily at 9AM.</p>
        <div className="landing-page__cta">
          <Button 
            variant="primary" 
            size="large"
            onClick={() => navigate('/settings')}
          >
            Start Tracking
          </Button>
        </div>
      </div>
    </div>
  );
}
