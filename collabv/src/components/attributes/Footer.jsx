import "./Attributes.css";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linked.png";
import facebook from "../../assets/facebook.png";
import Button from '@mui/material/Button';
function Footer() {
  return (
    <>
      <div className="footerHeader">
        <a className="footerHeaderText"> Collab Vision Infosolutions </a>
      </div>

      <div className="FooterMain">
        <div >
          <li className="FooterMainText"> Join The success</li>
          <li className="button">
            
            <Button  className = "button" variant="contained" >Enroll Now</Button>
          </li>
        </div>

        <div >
          <li className="FooterMainText">Contact :+91 8767421060</li>
          <li className="FooterMainText">
            Address : Plot No.14, Laxmi Vasahat,<br/> Jawahar Nagar,<br/> Kolhapur-416012
          </li>

          <div>

          <a href="https://www.instagram.com/your_instagram_username" >
              <img src={insta} alt="insta" className="socialMediaLogo" />
          </a>

          <a href="https://www.linkedin.com/in/collab-vision-infosolutions-24844426b/" >
             <img src={linkedin} alt="linkedin" className="socialMediaLogo" />
          </a>

          <a href="https://www.facebook.com/sujatapradeepbadi/" >
              <img src={facebook} alt="facebook" className="socialMediaLogo" />
          </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
