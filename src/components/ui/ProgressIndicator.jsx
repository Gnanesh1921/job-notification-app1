export default function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="progress-indicator">
      <span className="progress-indicator__text">Step {currentStep} / {totalSteps}</span>
    </div>
  );
}
