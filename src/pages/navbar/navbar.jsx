import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    navigate("/login");
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { icon: FaKaaba, title: t("nav.hajj"), link: "/HajjPrograms" },
    { icon: FaMosque, title: t("nav.umrah"), link: "/OmraPrograms" },
    { icon: FaPlane, title: t("nav.flights"), link: "/FlightBooking" },
    { icon: FaInfoCircle, title: t("nav.about"), link: "/AboutUs" },
    { icon: FaUserTie, title: t("nav.chairman"), link: "/ChairmanSection" },
    { icon: FaNewspaper, title: t("nav.allPrograms"), link: "/AllPrograms" },
    { icon: FaUserShield, title: t("nav.adminpanel"), link: "/admin-panel" },
    { icon: FaUserShield, title: t("nav.MyTickets"), link: "/MyTickets" },
    { icon: FaUserShield, title: t("nav.addTicket"), link: "/AddTicket" }
  ];

  // const adminMenu = [
  //   {
  //     icon: FaUserShield,
  //     title: t("nav.adminpanel"),
  //     link: "/admin-panel",
  //   },
  //   {
  //     icon: FaUserShield,
  //     title: t("nav.MyTickets"),
  //     link: "/MyTickets",
  //   },
  //   {
  //     icon: FaUserShield,
  //     title: t("nav.addTicket"),
  //     link: "/AddTicket",
  //   },
  // ];

  return (
    <>
      <Helmet>
        <title>{t("nav.title")}</title>
        <meta name="description" content={t("nav.description")} />
      </Helmet>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1f2c33]/95 backdrop-blur shadow-lg border-b border-white/10"
            : "bg-[#1f2c33]/95 backdrop-blur border-b border-white/10"
        }`}
      >
        <div className="max-w-[90%] mx-auto h-20 flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(!open)}
              className="text-black text-2xl md:hidden "
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

            <span className="hidden lg:flex items-center gap-2 text-white">
              <FaPhone className="text-[#F05A28]" />
              {t("nav.hotline")} :
              <span className="text-[#F05A28] font-bold">17115</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-white hover:text-[#F05A28] duration-300"
              >
                {item.title}
              </Link>
            ))}

          //   {token &&
          //     adminMenu.map((item, index) => (
          //       <Link
          //         key={index}
          //         to={item.link}
          //         className="text-white hover:text-[#F05A28] duration-300"
          //       >
          //         {item.title}
          //       </Link>
          //     ))}
          // </nav>

          {/* Right */}
          <div className="flex items-center gap-3">

            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-11 h-11 rounded-full object-cover"
              />
            </Link>

            {token && (
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg duration-300"
              >
                {t("nav.logout")}
              </button>
            )}

            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="bg-[#1f2c33] text-white border border-gray-500 rounded px-2 py-1 outline-none"
            >
              <option value="ar">🇪🇬 العربية</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>
        </div>
      </header>
    {/* Mobile Menu */}
      {open && (
        <div className="fixed top-20 left-0 w-full bg-[#1f2c33] md:hidden z-40">
          {[...menuItems, ...(token ? adminMenu : [])].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-6 py-4 border-b border-white/10 text-white hover:bg-[#F05A28]"
            >
              <item.icon />
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}