import "./Attributes.css";


import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer">
    <h2>Collab Vision InfoSolution</h2>
      <div className="footer-content"  >          
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="Address">            
            <PhoneIcon /> <p> + 91 8767421060 </p>
          </div>
          <div className="Address">           
            <LocationOnIcon />
             <p> Plot No.14, Laxmi Vasahat, Jawahar Nagar, Kolhapur-416012  </p>
          </div>

        </div>
        <div className="footer-section">
          <h3>Follow</h3>
          <div className="socialMediaIcons">
          <a href="https://www.instagram.com/collabvisioninfo/" target= "blank" >
              <InstagramIcon fontSize="large" />
            </a>
            <a href ="https://www.facebook.com/sujatapradeepbadi/" target= "blank">
              <FacebookIcon fontSize="large"  />
            </a>
            <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/" target= "blank">
              <LinkedInIcon fontSize="large"  />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

