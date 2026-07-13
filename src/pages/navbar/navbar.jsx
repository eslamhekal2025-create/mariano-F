import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";

import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import {
  FaBars,
  FaTimes,
  FaPhone,
  FaPlane,
  FaMosque,
  FaKaaba,
  FaInfoCircle,
  FaUserTie,
  FaNewspaper,
  FaUserShield,
  FaTicketAlt,
  FaPlusCircle
} from "react-icons/fa";

import "./navbar.css";


export default function Navbar() {


const {t,i18n}=useTranslation();


const [open,setOpen]=useState(false);


const [scrolled,setScrolled]=useState(false);



const [token,setToken]=useState(
localStorage.getItem("token")
);



const navigate=useNavigate();





// LOGIN / LOGOUT LISTENER

useEffect(()=>{


const loginHandler=()=>{

setToken(
localStorage.getItem("token")
);

};



const logoutHandler=()=>{

setToken(null);

};



window.addEventListener(
"login",
loginHandler
);


window.addEventListener(
"logout",
logoutHandler
);



return ()=>{


window.removeEventListener(
"login",
loginHandler
);


window.removeEventListener(
"logout",
logoutHandler
);



}


},[]);







const logout=()=>{


localStorage.removeItem("token");

localStorage.removeItem("userId");


setToken(null);



window.dispatchEvent(
new Event("logout")
);



navigate("/login");


};






useEffect(()=>{


const scrollHandler=()=>{


setScrolled(
window.scrollY>40
);


};



window.addEventListener(
"scroll",
scrollHandler
);



return ()=>{


window.removeEventListener(
"scroll",
scrollHandler
);


}



},[]);






useEffect(()=>{


document.body.style.overflow =
open ? "hidden" : "auto";



return ()=>{

document.body.style.overflow="auto";

}


},[open]);







const menuItems=[


{
icon:FaKaaba,
title:t("nav.hajj"),
link:"/HajjPrograms"
},


{
icon:FaMosque,
title:t("nav.umrah"),
link:"/OmraPrograms"
},


{
icon:FaPlane,
title:t("nav.flights"),
link:"/FlightBooking"
},


{
icon:FaInfoCircle,
title:t("nav.about"),
link:"/AboutUs"
},


{
icon:FaUserTie,
title:t("nav.chairman"),
link:"/ChairmanSection"
},


{
icon:FaNewspaper,
title:t("nav.allPrograms"),
link:"/AllPrograms"
},


{
icon:FaUserShield,
title:t("nav.adminpanel"),
link:"/admin-panel"
},


{
icon:FaTicketAlt,
title:t("nav.MyTickets"),
link:"/MyTickets"
},


{
icon:FaPlusCircle,
title:t("nav.addTicket"),
link:"/AddTicket"
}


];







return (

<>


<Helmet>

<title>
{t("nav.title")}
</title>


<meta
name="description"
content={t("nav.description")}
/>

</Helmet>






<header
className={`navbar ${scrolled ? "scrolled":""}`}
>



<div className="nav-container">





<div className="nav-left">


<button

className="mobile-btn"

onClick={()=>setOpen(!open)}

>

{
open ?

<FaTimes/>

:

<FaBars/>

}


</button>




<div className="hotline">

<FaPhone/>

<span>

{t("nav.hotline")}

</span>


<b>

17115

</b>


</div>


</div>







<nav className="desktop-menu">


{
menuItems.map((item,index)=>(


<Link

key={index}

to={item.link}

>


{item.title}


</Link>


))

}


</nav>









<div className="nav-right">



<Link to="/">

<img
src={logo}
alt="logo"
/>

</Link>





{
token ?

<button

className="logout"

onClick={logout}

>

{t("nav.logout")}


</button>


:


<Link

to="/login"

className="login-btn"

>

{t("nav.login")}

</Link>


}







<select

value={i18n.language}

onChange={(e)=>
i18n.changeLanguage(e.target.value)
}

>


<option value="ar">

🇪🇬 العربية

</option>


<option value="en">

🇺🇸 English

</option>


</select>






</div>








</div>


</header>









{
open &&


<div className="mobile-menu">


{
menuItems.map((item,index)=>{


const Icon=item.icon;


return (

<Link

key={index}

to={item.link}

onClick={()=>setOpen(false)}

>


<Icon/>

<span>

{item.title}

</span>


</Link>


)


})

}



</div>


}




</>


)

}