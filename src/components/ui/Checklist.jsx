import './Checklist.css';

export default function Checklist({ items = [] }) {
  return (
    <div className="checklist">
      {items.map((item, index) => (
        <div key={index} className="checklist__item">
          <span className="checklist__bullet">□</span>
          <span className="checklist__text">{item}</span>
        </div>
      ))}
    </div>
  );
}
