import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "./mariano.mp4";
import AllPrograms from "../AllPrograms/AllProgramm.jsx";
import { useTranslation } from "react-i18next";

export default function HomeHero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          
          {/* TITLE */}
          <h1 className="text-[#d4b57a] text-[38px] sm:text-[48px] md:text-[60px] font-bold tracking-wide mb-4">
            {t("home.titleCompany")}
          </h1>

          {/* SUBTITLE */}
          <p className="text-white/80 text-[18px] mb-14">
            {t("home.subtitle")}
          </p>

          {/* CARDS */}
          <div className="flex flex-wrap justify-center gap-6">
            <HeroCard icon="⭐" title={t("home.vip")} />
            <HeroCard link="/OmraPrograms" icon="🕌" title={t("home.umrah")} />
            <HeroCard link="/HajjPrograms" icon="🕋" title={t("home.hajj")} />
          </div>

          {/* BUTTON */}
          <Link to="/FlightBooking">
            <button className="mt-14 px-10 py-4 rounded-full bg-[#d4b57a] text-black font-semibold shadow-lg hover:bg-[#c5a766] hover:scale-105 transition-all duration-300">
              {t("home.bookNow")}
            </button>
          </Link>
        </div>
      </section>

      <AllPrograms />
    </>
  );
}

function HeroCard({ title, icon, link }) {
  if (!link) {
    return (
      <div className="w-[200px] h-[120px] flex flex-col items-center justify-center border border-white/30 rounded-xl backdrop-blur-lg bg-white/5 text-white cursor-pointer transition-all duration-300 hover:border-[#d4b57a] hover:text-[#d4b57a] hover:bg-white/10 hover:scale-105">
        <span className="text-3xl mb-2">{icon}</span>
        <span className="text-[16px] font-medium">{title}</span>
      </div>
    );
  }

  return (
    <Link
      to={link}
      className="w-[200px] h-[120px] flex flex-col items-center justify-center border border-white/30 rounded-xl backdrop-blur-lg bg-white/5 text-white cursor-pointer transition-all duration-300 hover:border-[#d4b57a] hover:text-[#d4b57a] hover:bg-white/10 hover:scale-105"
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-[16px] font-medium">{title}</span>
    </Link>
  );
}