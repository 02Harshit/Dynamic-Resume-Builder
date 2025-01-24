import logo from "./assets/logo.svg";
import "./App.css";
import LandingPage from "./components/landing_page_component.js";
import AboutUs from "./components/aboutUs.js";
import DeveloperPage from "./components/developerPage.js";
import LoginPage from "./components/LoginPage.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <DeveloperPage />
      <Footer />
      {/* <LoginPage/> */}
    </>
  );
}

export default App;
