import logo from './assets/logo.svg';
import './App.css';
import Login from './components/login';
import LandingPage from './components/landing_page_component.js';
import AboutUs from './components/aboutUs.js';
import DeveloperPage from './components/developerPage.js';
import Login1 from './components/Loginn/Login1.js';


function App() {
  return (
    <>
      <div> {/* Wrapper to prevent layout conflicts */}
        <LandingPage />
        <AboutUs />
        <DeveloperPage />
      </div>
    </>
  );
}


export default App;
