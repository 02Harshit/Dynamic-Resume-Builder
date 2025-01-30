import logo from "./assets/logo.svg";
import "./App.css";
import LandingPage from "./components/landing_page_component.js";
import AboutUs from "./components/aboutUs.js";
import DeveloperPage from "./components/developerPage.js";
import Footer from "./components/footer.js";
import Navbar from "./components/Navbar.js";
import {useRef} from 'react';
import GoToTop from "./components/goToTop.js";
import Template1 from "./components/Templates/template1.js";

function App() {
  const aboutRef = useRef(null);
  const developerRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  const scrollToDeveloper = () => {
    developerRef.current?.scrollIntoView({behavior: "smooth"});
  }

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior: 'smooth' });
  }
  return (

    <>
      <Navbar scrollToTop = {scrollToTop} scrollToAbout={scrollToAbout} scrollToDeveloper = {scrollToDeveloper} />
      <LandingPage />
      <div ref={aboutRef}><AboutUs /></div>
      <div ref={developerRef}><DeveloperPage /></div>
      <Footer />
      <GoToTop />
      {/* <Template1 /> */}
      {/* <LoginPage/> */}
    </>
  );
}

export default App;
