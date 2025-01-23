import logo from "./assets/logo.svg";
import "./App.css";
import Login from "./components/login";
import LandingPage from "./components/landing_page_component.js";
import AboutUs from "./components/aboutUs.js";
import DeveloperPage from "./components/developerPage.js";
import Login_render from "./components/Loginn/Login_render.js";

function App() {
  return (
    <>
      <LandingPage />
      <AboutUs />
      <DeveloperPage />
      <Login_render />
    </>
  );
}

export default App;
