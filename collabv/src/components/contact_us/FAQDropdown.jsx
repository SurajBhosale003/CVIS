
import { useState } from "react";
import "./FAQDropdown.css"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const FAQDropdown = () => {
  const generalInfo = {
    question: "What is an FAQ section?",
    answer:
      "An FAQ section can be used to quickly answer common questions about you or your business, such as “Where do you ship to?”, “What are your opening hours?” or “How can I book a service?” It’s a great way to help people navigate your site and can even boost your site’s SEO.",
  };

  const settingFaqs = [
    {
      question: "How do I add a new question & answer?",
      answer:
        "To add a new FAQ follow these steps:\n\n1. Click “Manage FAQs” button\n2. From your site’s dashboard you can add, edit and manage all your questions and answers\n3. Each question and answer should be added to a category\n4. Save and publish.",
    },
    {
      question: "Can I insert an image, video, or gif in my FAQ?",
      answer:
        "Yes. To add media follow these steps:\n\n1. Enter the app’s Settings\n2. Click on the “Manage FAQs” button\n3. Select the question you would like to add media to\n4. When editing your answer click on the camera, video, or GIF icon\n5. Add media from your library.",
    },
    {
      question: "How do I edit or remove the “FAQ” title?",
      answer:
        "You can edit the title from the Settings tab in the app. If you don’t want to display the title, simply disable the Title under “Info to Display”.",
    },
  ];

  const [displaySection, setDisplaySection] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const handleSectionClick = (section) => {
    setDisplaySection(section);
    setOpenIndex(null);
  };

  const handleDropdownClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const currentFaqs =
    displaySection === "general" ? [generalInfo] : settingFaqs;

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        <div
          className={`faq-item general-section ${
            displaySection === "general" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("general")}
        >
          <div className="faq-question">General</div>
        </div>
        <div
          className={`faq-item settings-section ${
            displaySection === "settings" ? "active" : ""
          }`}
          onClick={() => handleSectionClick("settings")}
        >
          <div className="faq-question">Settings</div>
        </div>
      </div>
      <div className="faq-dropdown">
        {currentFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              onClick={() => handleDropdownClick(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <>
                <div className="faq-answer active">{faq.answer}</div>
                <div className="iconFaq">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.collabvision.in%2Fcontact%3FquestionId%3D847ca3f0-5b64-474e-b5f3-411365f893b6&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
                    <FacebookIcon style ={{padding :10}} color="white" />
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.collabvision.in%2Fcontact%3FquestionId">
                    <LinkedInIcon style ={{padding :10}} color="white" />
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=https://www.collabvision.in/contact?questionId=847ca3f0-5b64-474e-b5f3-411365f893b6&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
                    <TwitterIcon style ={{padding :10}} color="white" />
                  </a>
                  <a href="https://www.collabvision.in/contact?questionId=847ca3f0-5b64-474e-b5f3-411365f893b6&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
                    <ContentCopyIcon style ={{padding :10}} color="white" />
                  </a>
                </div>
              </>
            )}
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQDropdown;
