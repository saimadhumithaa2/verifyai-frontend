export default function Sidebar() {
  const items = [
    "Dashboard",
    "Upload Document",
    "Verification Status",
    "Fraud Analytics",
    "Settings"
  ];

  return (
    <aside className="sidebar">
      <div className="logo">VerifyAI</div>

      <nav>
        {items.map((item, index) => (
          <div
            key={item}
            className={`nav-item ${index === 1 ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="version">VerifyAI v2.4.1</div>
    </aside>
  );
}