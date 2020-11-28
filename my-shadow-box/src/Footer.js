import React from "react";
const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="page-footer center" style={{paddingTop:"0px"}}>
        <div className="footer-copyright">
          <div className="container">
            © {year} All rights reserved.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
