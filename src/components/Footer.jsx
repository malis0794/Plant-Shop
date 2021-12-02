import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/malis0794"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Plantee</strong> - High Quality Plants & Coffee
      </p>
    </footer>
  );
};

export default Footer;
