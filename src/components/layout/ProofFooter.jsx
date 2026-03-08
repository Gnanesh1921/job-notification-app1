import './ProofFooter.css';

export default function ProofFooter({ items = ["UI Built", "Logic Working", "Test Passed", "Deployed"] }) {
  return (
    <footer className="proof-footer">
      <div className="proof-footer__content">
        {items.map((item, index) => (
          <div key={index} className="proof-footer__item">
            <span className="proof-footer__bullet">□</span>
            <span className="proof-footer__text">{item}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
