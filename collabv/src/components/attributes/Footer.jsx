import "./Attributes.css";


import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
    <h2>Collab Vision Infosolutions</h2>
      <div className="footer-content">     
        <div className="footer-section">         
          <h2>Join The Success!</h2>
          {/* <button className="enroll-button">Enroll Now</button> */}
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-footer">
            
            <PhoneIcon /> <p> + 91 8767421060 </p>
          </div>
          <div className="Address">
           
            <LocationOnIcon />
             <p> Plot No.14, Laxmi Vasahat, Jawahar Nagar, Kolhapur-416012
            </p>
          </div>
        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <div className="socialMedia-icons">
          <a href="https://www.instagram.com/collabvisioninfo/" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href ="https://www.facebook.com/sujatapradeepbadi/">
              <FacebookIcon fontSize="large"  />
            </a>
            <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/">
              <LinkedInIcon fontSize="large"  />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
