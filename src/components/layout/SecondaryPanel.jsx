import './SecondaryPanel.css';

export default function SecondaryPanel({ children }) {
  return (
    <aside className="secondary-panel">
      {children}
    </aside>
  );
}
