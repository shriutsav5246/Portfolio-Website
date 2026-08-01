import "./SocialLinks.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/shriutsav5246"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/shriutsav5246/"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://leetcode.com/u/shirutsav5246/"
        rel="noopener noreferrer"
        aria-label="LeetCode"
        title="LeetCode"
      >
        <SiLeetcode />
      </a>

      <a
        href="mailto:utsav.vinod5246@gmail.com"
        aria-label="Email"
        title="Email"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;
