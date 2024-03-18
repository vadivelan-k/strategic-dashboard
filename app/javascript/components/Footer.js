import React from 'react';

const Footer = () => (
  <div className="footer-primary" style={{
    paddingBottom: "1rem",
    paddingTop: "1rem",
    background: "#e8e8e6"
  }}>
    <div className="row align-items-center justify-content-md-between cog-container" style={{ height: "50px" }}>
      <div className="col-12 col-md-auto mb-half mb-md-0">
      </div>
      <div className="col-12 col-md-7">
        <ul className="nav flex-column flex-md-row justify-content-md-end align-items-md-center m-0 small">
          <li className="align-self-lg-center nav-item pe-1">
            <p className="m-0">
              <span className="small">©2024 Cognizant, all rights reserved</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
