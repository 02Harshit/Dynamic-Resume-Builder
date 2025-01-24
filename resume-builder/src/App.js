import logo from "./assets/logo.svg";
import "./App.css";
import LandingPage from "./components/landing_page_component.js";
import AboutUs from "./components/aboutUs.js";
import DeveloperPage from "./components/developerPage.js";
import LoginPage from "./components/LoginPage.js";

function App() {
  return (
    <>
      {/* <LandingPage />
      <AboutUs />
      <DeveloperPage /> */}
      <LoginPage/>
    </>
  );
}

export default App;
