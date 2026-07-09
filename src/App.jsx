import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import { ToastContainer } from "react-toastify";
import {Provider} from 'react-redux';
import store from "./Redux/store.js";

import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";


import './i18n.js';
import Layout from "./pages/Layout/layout.jsx";
import Home from "./pages/Home/Home.jsx";
import FlightBooking from "./pages/travel/Travel.jsx";
import OmraPrograms from "./pages/umrah/Umrah.jsx";
import ProgramModal from "./pages/ContactUs/ContactUs.jsx";
import AdminUploadProgram from "./pages/Admin/UploadProgram/index.jsx";
import { ProgrammProvider } from "./context/ProgrammContext.jsx";
import HajjPrograms from "./pages/hajj/Hajj.jsx";
import AllPrograms from "./pages/AllPrograms/AllProgramm.jsx";
import ChairmanSection from "./pages/Owner/Owner.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Adminpanel from "./pages/Admin/Adminpanel/Adminpanel.jsx";
import AddTicket from "./pages/AddTickets/AddTickets.jsx";
import MyTickets from "./pages/MyTickets/MyTickets.jsx";


const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [

   
      { index: true, element:<Home />},
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/FlightBooking", element: <FlightBooking /> },
      { path: "/OmraPrograms", element: <OmraPrograms /> },
      { path: "/HajjPrograms", element: <HajjPrograms /> },
      { path: "/ProgramModal", element: <ProgramModal /> },
      { path: "/AddTicket", element: <AddTicket/> },
      { path: "/MyTickets", element: <MyTickets/> },
      
      { path: "/AdminUploadProgram", element: <AdminUploadProgram /> },
      { path: "/AllPrograms", element: <AllPrograms /> },
      { path: "/ChairmanSection", element: <ChairmanSection /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/admin-panel", element: <Adminpanel /> },

  
    ],
  },
]);

export default function App() {
  return (
<div className="xxl-[7vh]">
   <Provider store={store}>
      <ProgrammProvider>  {/* ✅ يلف كل حاجة */}
        <Toaster />
        <RouterProvider router={routers} />
      </ProgrammProvider>
    </Provider>
</div>
  );  
}
