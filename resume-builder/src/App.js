import logo from './assets/logo.svg';
import './App.css';
import Login from './components/login';
import LandingPage from './components/landing_page_component.js';
import AboutUs from './components/aboutUs.js';
import DeveloperPage from './components/developerPage.js';

function App() {
  return (     
    <>
    <LandingPage />
    <AboutUs />
    <DeveloperPage />
    </>
  );
}

export default App;
