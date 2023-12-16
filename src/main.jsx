import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/src/App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from '/src/pages/About';
import ContactUs from '/src/pages/ContactUs';
import Services from '/src/pages/Services';
import FullTeam from '/src/pages/FullTeam';


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
