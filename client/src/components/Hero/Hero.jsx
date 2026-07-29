import "./Hero.css";
import profile from "../../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../SocialLinks/SocialLinks";
import portfolioData from "../../data/portfolioData";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-circle circle-one"></div>
        <div className="gradient-circle circle-two"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Available for Full Stack Opportunities
          </div>
          <h1 className="hero-name">{portfolioData.personal.fullName}</h1>

          <TypeAnimation
            sequence={[
              ...portfolioData.personal.roleSequence.flatMap((role) => [
                role,
                2000,
              ]),
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="hero-role"
          />

          <p className="hero-description">
            {portfolioData.personal.description}
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              {portfolioData.buttons.primary}
            </button>

            <button className="secondary-btn">
              {portfolioData.buttons.secondary}
            </button>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-image">
          <img src={profile} alt="Utsav Shrivastav" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
