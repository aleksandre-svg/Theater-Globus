// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="footer01 strengthm5 cid-v20nubeNay"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 card text-center">

            <small
              className="mbr-copy mbr-fonts-style display-7"
              lang="ka" 
            >
              თეატრი გლობუსი © {year}. ყველა უფლება დაცულია.
            </small>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
