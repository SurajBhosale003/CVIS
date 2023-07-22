
import AboutUs from './components/about_us/AboutUs';
import ContactUs from './components/contact_us/ContactUs';
import Services from './components/cservices/Services';
import Home from './components/home/Home';
import Learning from './components/learning_modules/Learning';
import Navbar from './components/attributes/Navbar';
import Footer from './components/attributes/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
