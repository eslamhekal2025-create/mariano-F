import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
  FaUser,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Travel.css"
export default function FlightBooking() {
  const [form, setForm] = useState({
  tripType: "oneWay",
  name: "",
  phone: "",
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  class: "economy",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
✈️ *طلب حجز طيران جديد*

👤 الاسم:
${form.name}

📞 الهاتف:
${form.phone}

🛫 من:
${form.from}

🛬 إلى:
${form.to}

📅 تاريخ السفر:
${form.departureDate}

${form.tripType === "oneWay" ? "ذهاب فقط" : "ذهاب وعودة"}

📅 تاريخ السفر:
${form.departureDate}

${
  form.tripType === "roundTrip"
    ? `📅 تاريخ العودة:\n${form.returnDate}`
    : ""
}

👥 عدد المسافرين:
${form.passengers}

💺 الدرجة:
${form.class === "business" ? "بيزنس" : "اقتصادي"}
`;

    const phone = "201065624727"; // ضع رقم الواتساب هنا

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>حجز تذاكر الطيران</title>
      </Helmet>

      <section className="flight-page">

        <div className="flight-container">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="flight-header"
          >
            <h1 className="flight-title">
              احجز تذكرتك الآن
            </h1>

            <p className="flight-subtitle">
              املأ البيانات وسيتم التواصل معك عبر واتساب.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="booking-card"
          >
            <form
              onSubmit={handleSubmit}
              className="booking-form"
            >
              <div className="form-grid">

                <div className="form-group">
                  <label className="form-label">
                    <FaUser className="inline ml-2 text-orange-500" />
                    الاسم
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaPhone className="inline ml-2 text-orange-500" />
                    رقم الهاتف
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaPlaneDeparture className="inline ml-2 text-orange-500" />
                    من
                  </label>

                  <input
                    type="text"
                    name="from"
                    required
                    value={form.from}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaPlaneArrival className="inline ml-2 text-orange-500" />
                    إلى
                  </label>

                  <input
                    type="text"
                    name="to"
                    required
                    value={form.to}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>


{/* نوع الرحلة */}
<div className="form-group full-width">
  <label className="form-label">نوع الرحلة</label>

  <div className="trip-type">
    <label>
      <input
        type="radio"
        name="tripType"
        value="oneWay"
        checked={form.tripType === "oneWay"}
        onChange={handleChange}
      />
      ذهاب فقط
    </label>

    <label>
      <input
        type="radio"
        name="tripType"
        value="roundTrip"
        checked={form.tripType === "roundTrip"}
        onChange={handleChange}
      />
      ذهاب وعودة
    </label>
  </div>
</div>

{/* تاريخ السفر */}
<div className="form-group">
  <label className="form-label">
    <FaCalendarAlt className="icon" />
    تاريخ السفر
  </label>

  <input
    type="date"
    name="departureDate"
    value={form.departureDate}
    onChange={handleChange}
    className="form-input"
    required
  />
</div>

{/* تاريخ العودة */}
{form.tripType === "roundTrip" && (
  <div className="form-group">
    <label className="form-label">
      <FaCalendarAlt className="icon" />
      تاريخ العودة
    </label>

    <input
      type="date"
      name="returnDate"
      value={form.returnDate}
      onChange={handleChange}
      className="form-input"
      required
    />
  </div>
)}
                <div className="form-group">
                  <label className="form-label">
                    <FaUsers className="inline ml-2 text-orange-500" />
                    عدد المسافرين
                  </label>

                  <select
                    name="passengers"
                    value={form.passengers}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-3"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    درجة السفر
                  </label>

                  <select
                    name="class"
                    value={form.class}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="economy">
                      اقتصادي
                    </option>

                    <option value="business">
                      بيزنس
                    </option>
                  </select>
                </div>

              </div>

              <button
                type="submit"
                className="whatsapp-btn"
              >
                <FaWhatsapp size={24} />
                إرسال الطلب عبر واتساب
              </button>

            </form>
          </motion.div>

        </div>

      </section>
    </>
  );
}