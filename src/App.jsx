import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/variables.css';
import './styles/global.css';
import './styles/typography.css';
import './styles/spacing.css';
import TopNavigation from './components/layout/TopNavigation';
import Dashboard from './components/pages/Dashboard';
import Saved from './components/pages/Saved';
import Digest from './components/pages/Digest';
import Settings from './components/pages/Settings';
import Proof from './components/pages/Proof';
import NotFound from './components/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavigation />
        
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/digest" element={<Digest />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
