import React from "react";
import { useTranslation } from "react-i18next";

const ChairmanSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://www.ommatgroup.com/wp-content/uploads/2022/12/blog-0009.jpg"
            alt="Chairman"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("chairman.title")}
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {t("chairman.p1")}
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {t("chairman.p2")}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {t("chairman.p3")}
          </p>

          <div>
            <h3 className="text-xl font-semibold">
              {t("chairman.name")}
            </h3>
            <p className="text-gray-500">
              {t("chairman.position")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ChairmanSection;