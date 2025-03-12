import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './components/aboutUs';
import DeveloperPage from './components/developerPage';
import AuthPage from './components/Authorization/AuthPage';
import Dashboard from './components/Dashboard/DashboardPage';
import Template1 from './components/Templates/template1';
import Template2 from './components/Templates/template2';
import ChooseTemplate from './components/ChooseTemplate';
import ResumeForm1 from './components/Forms/ResumeForm1';
import ResumeForm2 from './components/Forms/ResumeForm2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/developer",
    element: <DeveloperPage />,
  },
  {
    path: "/authorization",
    element: <AuthPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/template1",
    element: <Template1 />
  },
  {
    path: "/template2",
    element: <Template2 />
  },
  {
    path: "/chooseTemplate",
    element: <ChooseTemplate />
  },
  {
    path: "/resumeForm1",
    element: <ResumeForm1 />
  },
  {
    path: "/resumeForm2",
    element: <ResumeForm2 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
