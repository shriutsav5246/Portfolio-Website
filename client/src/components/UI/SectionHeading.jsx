import "./UI.css";

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">

      <span className="section-tag">
        Portfolio
      </span>

      <h2>{title}</h2>

      <p>{subtitle}</p>

    </div>
  );
}

export default SectionHeading;