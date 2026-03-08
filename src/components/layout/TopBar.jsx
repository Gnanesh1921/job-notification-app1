import './TopBar.css';

export default function TopBar({ appName = "Job Notification App", currentStep = 1, totalSteps = 5, status = "Not Started" }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started':
        return '#666666';
      case 'In Progress':
        return '#B8860B';
      case 'Shipped':
        return '#4A7C59';
      default:
        return '#666666';
    }
  };

  return (
    <header className="top-bar">
      <div className="top-bar__left">
        <h3 className="top-bar__app-name">{appName}</h3>
      </div>
      
      <div className="top-bar__center">
        <span className="top-bar__progress">Step {currentStep} / {totalSteps}</span>
      </div>
      
      <div className="top-bar__right">
        <span 
          className="top-bar__status-badge"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </div>
    </header>
  );
}
