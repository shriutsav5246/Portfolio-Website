import portfolioData from "../../data/portfolioData";

function AboutTimeline() {
  return (
    <div className="timeline">

      <div className="section-subtitle">
        <h3>Developer Journey</h3>
      </div>

      {portfolioData.timeline.map((item, index) => (
        <div className="timeline-item" key={index}>

          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>{item.year}</span>
            <h4>{item.title}</h4>
          </div>

        </div>
      ))}

    </div>
  );
}

export default AboutTimeline;