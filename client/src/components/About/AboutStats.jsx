import portfolioData from "../../data/portfolioData";

function AboutStats() {
  return (
    <div className="about-stats">
      {portfolioData.stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h3>{stat.number}</h3>

          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;
