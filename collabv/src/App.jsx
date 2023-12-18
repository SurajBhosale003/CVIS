import LetsChat from './components/chatboot/LetsChat'
import AboutUs from './components/about_us/AboutUs';
import ContactUs from './components/contact_us/ContactUs';
import Services from './components/cservices/Services';
import Home from './components/home/Home';
import Learning from './components/learning_modules/Learning';
import Navbar from './components/attributes/Navbar';
import Footer from './components/attributes/Footer';
import GoToTop from './components/attributes/GoToTop';
import Ccpage from './components/learning_modules/learning_pages/ccpage';
import Softwaretestinfpage from './components/learning_modules/learning_pages/softwaretestinfpage';
import Ccmulesoft from './components/learning_modules/learning_pages/ccmulesoft';
import Register from './components/attributes/Register';
import Ccmul from './components/learning_modules/content/ccmul';
import CloudComputing from './components/learning_modules/content/CloudComputing';
import SoftwareTesting from './components/learning_modules/content/SoftwareTesting';
import Garphic from './components/cservices/servicepages/garphic';
import Seopage from "./components/cservices/servicepages/seopage"
import Consultingpage from "./components/cservices/servicepages/Consulting"
import Swdevelopment from './components/cservices/servicepages/swdevelopment';
import Cloudcpage from './components/cservices/servicepages/cloudcpage'
import Softwaretesting from './components/cservices/servicepages/swtesting';
import Digitalbranding from './components/cservices/servicepages/digitalbranding';
import Androiddevpage from './components/cservices/servicepages/androiddevpage';
import Ccpagecontent from './components/learning_modules/learning_pages/ccpage';
import Webdesign from './components/cservices/servicepages/webdesign';
import Login from "./components/attributes/login";
import AdminLogin from "./components/attributes/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products/productinfo';
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          {/* Services page Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/graphic" element={<Garphic />} />
          <Route path="/services/seopage" element={<Seopage />} />
          <Route path="/services/cloudpage" element={<Cloudcpage />} />
          <Route path="/services/webdesign" element={<Webdesign />} />
          <Route path="/services/androidpage" element={<Androiddevpage />} />
          <Route path="/services/digitalbrandpage" element={<Digitalbranding />} />
          <Route path="/services/swdevelopment" element={<Swdevelopment />} />
          <Route path="/services/softwaretesting" element={<Softwaretesting />} />
          <Route path="/services/Consultingpage" element={<Consultingpage />} />
          {/* login register admin Page Routes */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/auth" element={<Register />} />

          {/* Learning Page Routes */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/ccpage" element={<Ccpage />} />
          <Route path="/learning/ccpage/ccpagecontent" element={<CloudComputing />} />
          <Route path="/learning/ccmulcontent" element={<Ccmul />} />
          <Route path="/learning/ccpagecontent" element={<Ccpagecontent />} />
          <Route path="/learning/softwaretestinfpage" element={<Softwaretestinfpage />} />
          <Route path="/learning/ccpage/SoftwareTesting" element={<SoftwareTesting />} />
          <Route path="/learning/ccmulesoft" element={<Ccmulesoft />} />
        </Routes>
        <GoToTop />
        <LetsChat/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
