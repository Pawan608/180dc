import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import FullTeam from './pages/FullTeam';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  }, 
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "Team",
    element: <FullTeam />,
  }, 
  {
    path:"contact",
    element: <ContactUs />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
