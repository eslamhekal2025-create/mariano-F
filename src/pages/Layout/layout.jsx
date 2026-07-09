import React, { useEffect } from 'react'
import { Outlet} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserRedux } from '../../Redux/user.js';
import Navbar from '../navbar/navbar.jsx';

export default function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUserRedux(JSON.parse(storedUser)));
    }
  }, [dispatch]);

 return (
  <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
 
    <main className="flex-grow">
    <Navbar/>
      <Outlet />
    </main>
    
 </div>
);

}
