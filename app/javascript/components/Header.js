import React from 'react';

const Header = () => (
  <div className="cog-header__main position-relative" style={{ backgroundImage: "linear-gradient(270deg,#2d2d8f 10%,#006fba 50%,#21fceb 94%)" }}>
    <div className="cog-container gutter-space gap-half d-flex justify-content-between align-items-center" style={{ "padding": "2rem 1rem" }}>
      <div className="d-flex gap-half align-items-center flex-wrap flex-lg-nowrap cog-header__logo">
        <a href="/" role="link" aria-label="Cognizant Logo"
           data-cmp-data-layer="{&quot;navbar-logo-0df855935a&quot;:{&quot;xdm:trackingType&quot;:&quot;Cognizant Logo click&quot;,&quot;xdm:location&quot;:&quot;Body&quot;,&quot;dc:title&quot;:&quot;Cognizant Logo&quot;,&quot;xdm:linkURL&quot;:&quot;/content/cognizant-dot-com/sg/en/home&quot;}}"
           data-cmp-clickable="">
          <img aria-label="Cognizant Logo" alt="Cognizant Logo" width="250" height="45"
               src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-8?fmt=png-alpha"/>
        </a>
        <p className="m-0 ms-half ms-md-1" style={{ paddingLeft: "1rem" }}>Strategic Dashboard</p>
      </div>
    </div>
  </div>
);

export default Header;
