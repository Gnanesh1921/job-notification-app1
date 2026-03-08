import './styles/variables.css';
import './styles/global.css';
import './styles/typography.css';
import './styles/spacing.css';
import TopBar from './components/layout/TopBar';
import ContextHeader from './components/layout/ContextHeader';
import PrimaryWorkspace from './components/layout/PrimaryWorkspace';
import SecondaryPanel from './components/layout/SecondaryPanel';
import ProofFooter from './components/layout/ProofFooter';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Input from './components/ui/Input';
import Badge from './components/ui/Badge';
import Checklist from './components/ui/Checklist';
import './App.css';

function App() {
  const checklistItems = ["UI Built", "Logic Working", "Test Passed", "Deployed"];
  
  const secondaryPanelContent = [
    {
      title: "Step Explanation",
      content: "This design system provides a calm, intentional foundation for your Job Notification App. All components follow consistent spacing, typography, and color rules."
    },
    {
      title: "Design Principles",
      content: "No gradients. No glassmorphism. No neon colors. Maximum 4 colors per section. Intentional whitespace. Coherent aesthetic."
    }
  ];

  return (
    <div className="app">
      <TopBar 
        appName="Job Notification App"
        currentStep={1}
        totalSteps={5}
        status="In Progress"
      />
      
      <div className="app__content" style={{ display: 'flex' }}>
        <PrimaryWorkspace>
          <ContextHeader 
            title="Design System Foundation"
            subtitle="A premium SaaS design system built for clarity and professionalism."
          />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Card padding="large">
              <h2 style={{ marginBottom: 'var(--space-3)' }}>Color Palette</h2>
              <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#F7F6F3', border: '1px solid #E5E5E5', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <span style={{ fontSize: '12px', color: '#666' }}>Background</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#111111', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <span style={{ fontSize: '12px', color: '#666' }}>Text</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#8B0000', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <span style={{ fontSize: '12px', color: '#666' }}>Accent</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#4A7C59', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <span style={{ fontSize: '12px', color: '#666' }}>Success</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#B8860B', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <span style={{ fontSize: '12px', color: '#666' }}>Warning</span>
                </div>
              </div>
            </Card>

            <Card padding="large">
              <h2 style={{ marginBottom: 'var(--space-3)' }}>Typography</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div>
                  <h1>Heading 1 - Serif Font</h1>
                  <p style={{ color: '#666', marginTop: '4px' }}>32px / Line-height: 1.6</p>
                </div>
                <div>
                  <h2>Heading 2 - Serif Font</h2>
                  <p style={{ color: '#666', marginTop: '4px' }}>24px / Line-height: 1.6</p>
                </div>
                <div>
                  <h3>Heading 3 - Serif Font</h3>
                  <p style={{ color: '#666', marginTop: '4px' }}>20px / Line-height: 1.6</p>
                </div>
                <div>
                  <p>Body text uses system sans-serif fonts at 16px with 1.6-1.8 line-height for optimal readability.</p>
                  <p style={{ color: '#666', marginTop: '4px' }}>16px / Line-height: 1.8</p>
                </div>
              </div>
            </Card>

            <Card padding="large">
              <h2 style={{ marginBottom: 'var(--space-3)' }}>Components</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div>
                  <p style={{ marginBottom: 'var(--space-2)', color: '#666' }}>Buttons:</p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                  </div>
                </div>
                
                <div>
                  <p style={{ marginBottom: 'var(--space-2)', color: '#666' }}>Badges:</p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                    <Badge variant="default">Default</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                  </div>
                </div>

                <div>
                  <p style={{ marginBottom: 'var(--space-2)', color: '#666' }}>Input Field:</p>
                  <div style={{ maxWidth: '400px' }}>
                    <Input 
                      label="Email Address"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </PrimaryWorkspace>

        <SecondaryPanel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {secondaryPanelContent.map((section, index) => (
              <Card key={index} padding="medium">
                <h3 style={{ marginBottom: 'var(--space-2)' }}>{section.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.8' }}>{section.content}</p>
              </Card>
            ))}

            <Card padding="medium">
              <h3 style={{ marginBottom: 'var(--space-3)' }}>Component Checklist</h3>
              <Checklist items={checklistItems} />
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <Button variant="primary">Continue to Next Step</Button>
              <Button variant="secondary">Save Progress</Button>
            </div>
          </div>
        </SecondaryPanel>
      </div>

      <ProofFooter items={checklistItems} />
    </div>
  );
}

export default App;
