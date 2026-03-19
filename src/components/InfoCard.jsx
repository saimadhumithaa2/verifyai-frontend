export default function InfoCard({ label, value, full }) {
  return (
    <div className={`info-card ${full ? "full" : ""}`}>
      <span>{label}</span>
      <h4>{value}</h4>
    </div>
  );
}