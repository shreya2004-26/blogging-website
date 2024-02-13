import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container1">
          <div className="text1">ShreyaBlog</div>
          <div className="text2"> | Copyright © 2024 BlogWithShreya</div>
        </div>

        <div className="container2">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/shreyasingh_839/?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/shreya-singh20" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
