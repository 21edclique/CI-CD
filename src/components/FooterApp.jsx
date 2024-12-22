import { Footer } from "antd/es/layout/layout";
import React from "react";

/**
 * Renders the FooterApp component.
 *
 * @return {JSX.Element} The rendered FooterApp component.
 */
const FooterApp = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer style={{ textAlign: "center", backgroundColor: "#f0f2f5", padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <strong>BRYAN JINEZ DAS</strong>
      </div>
      <div style={{ fontSize: "12px", color: "#888" }}>
        © {currentYear} Todos los derechos reservados. | 
        <a href="https://www.linkedin.com/in/bryan-jinez" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px", color: "#1890ff" }}>
          LinkedIn
        </a>
        |
        <a href="https://github.com/bryan-jinez" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "5px", color: "#1890ff" }}>
          GitHub
        </a>
      </div>
    </Footer>
  );
};

export default FooterApp;
