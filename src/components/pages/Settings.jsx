import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import './SettingsPage.css';

export default function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-page__content">
        <h1 className="settings-page__title">Job Preferences</h1>
        <p className="settings-page__subtitle">Configure your job tracking preferences</p>

        <Card padding="large" className="settings-page__card">
          <div className="settings-page__form">
            <Input
              label="Role Keywords"
              placeholder="e.g., Senior Software Engineer, Frontend Developer"
            />

            <Input
              label="Preferred Locations"
              placeholder="e.g., San Francisco, New York, Remote"
            />

            <div className="settings-page__field">
              <label className="settings-page__label">Mode</label>
              <div className="settings-page__options">
                <label className="settings-page__option">
                  <input type="radio" name="mode" value="remote" />
                  <span>Remote</span>
                </label>
                <label className="settings-page__option">
                  <input type="radio" name="mode" value="hybrid" />
                  <span>Hybrid</span>
                </label>
                <label className="settings-page__option">
                  <input type="radio" name="mode" value="onsite" />
                  <span>Onsite</span>
                </label>
              </div>
            </div>

            <div className="settings-page__field">
              <label className="settings-page__label">Experience Level</label>
              <select className="settings-page__select">
                <option value="">Select experience level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="lead">Lead / Principal</option>
                <option value="executive">Executive</option>
              </select>
            </div>

            <div className="settings-page__actions">
              <Button variant="primary" size="large">Save Preferences</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
