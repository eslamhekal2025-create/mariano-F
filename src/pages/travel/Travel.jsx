import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPlane,
  FaCalendarAlt,
  FaUser,
  FaSearch,
  FaWhatsapp,
  FaPhone,
  FaCheckCircle,
  FaInfoCircle,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaClock,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaArrowLeft,
  FaStar
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function FlightBooking() {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
    class: "economy"
  });

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("price");
  const [filterResults, setFilterResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  // Meta Tags
  useEffect(() => {
    document.title = "حجز تذاكر الطيران - شركة ماريانو للسياحة";
  }, []);

  // Mock Data for Flight Results
  const mockFlights = [
    {
      id: 1,
      airline: "الخطوط السعودية",
      flightNumber: "SV123",
      from: "القاهرة",
      to: "جدة",
      departureTime: "08:00",
      arrivalTime: "10:30",
      duration: "2h 30m",
      stops: 0,
      price: 1500,
      class: "economy",
      logo: "https://via.placeholder.com/50"
    },
    {
      id: 2,
      airline: "مصر للطيران",
      flightNumber: "MS456",
      from: "القاهرة",
      to: "دبي",
      departureTime: "14:00",
      arrivalTime: "18:30",
      duration: "3h 30m",
      stops: 0,
      price: 2200,
      class: "economy",
      logo: "https://via.placeholder.com/50"
    },
    {
      id: 3,
      airline: "الخطوط التركية",
      flightNumber: "TK789",
      from: "القاهرة",
      to: "اسطنبول",
      departureTime: "10:00",
      arrivalTime: "13:00",
      duration: "2h 00m",
      stops: 0,
      price: 1800,
      class: "economy",
      logo: "https://via.placeholder.com/50"
    },
    {
      id: 4,
      airline: "الخطوط السعودية",
      flightNumber: "SV234",
      from: "القاهرة",
      to: "الرياض",
      departureTime: "16:00",
      arrivalTime: "18:30",
      duration: "2h 30m",
      stops: 0,
      price: 1600,
      class: "economy",
      logo: "https://via.placeholder.com/50"
    }
  ];

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSearchResults(mockFlights);
      setFilterResults(mockFlights);
      setLoading(false);
    }, 1500);
  };

  // Handle Sort
  const handleSort = () => {
    const sorted = [...filterResults].sort((a, b) => {
      if (sortBy === "price") {
        return a.price - b.price;
      } else if (sortBy === "duration") {
        return a.duration.localeCompare(b.duration);
      }
    });
    setFilterResults(sorted);
  };

  // Handle Filter
  const handleFilter = (type, value) => {
    let filtered = [...mockFlights];
    
    if (type === "stops") {
      filtered = filtered.filter(f => f.stops === value);
    } else if (type === "class") {
      filtered = filtered.filter(f => f.class === value);
    } else if (type === "priceRange") {
      filtered = filtered.filter(f => f.price <= value);
    }
    
    setFilterResults(filtered);
  };

  // Format Price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ar-EG", {
      style: "currency",
      currency: "EGP",
      minimumFractionDigits: 0
    }).format(price);
  };

  // Handle Booking
  const handleBooking = (flight) => {
    setSelectedFlight(flight);
    // هنا هتضيف كود إرسال البيانات للـ Backend
    console.log("Booking flight:", flight);
  };

  return (
    <>
      {/* META TAGS */}
      <Helmet>
        <title>حجز تذاكر الطيران - شركة ماريانو للسياحة</title>
        <meta name="description" content="احجز تذاكر الطيران بأفضل الأسعار - شركة ماريانو للسياحة - حجز طيران داخلي ودولي" />
        <meta property="og:title" content="حجز تذاكر الطيران - شركة ماريانو للسياحة" />
        <meta property="og:description" content="احجز تذاكر الطيران بأفضل الأسعار" />
        <meta property="og:image" content="/flight-booking.jpg" />
        <meta property="og:url" content="https://marianotravel.com/flight-booking" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Flight",
            "airline": {
              "@type": "Airline",
              "name": "شركة ماريانو للسياحة"
            },
            "departureAirport": {
              "@type": "Airport",
              "name": "مطار القاهرة الدولي"
            }
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#1f2c33] to-[#2c3e50] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              احجز تذاكر الطيران
            </h1>
            <p className="text-gray-300 text-lg">
              أفضل الأسعار - حجز آمن - دعم على مدار الساعة
            </p>
          </motion.div>

          {/* BOOKING FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto"
          >
            <form onSubmit={handleSearch} className="space-y-6">
              {/* FROM & TO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaPlaneDeparture className="inline-block ml-2 text-[#F05A28]" />
                    من
                  </label>
                  <input
                    type="text"
                    value={searchParams.from}
                    onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
                    placeholder="المدينة المغادرة"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaPlaneArrival className="inline-block ml-2 text-[#F05A28]" />
                    إلى
                  </label>
                  <input
                    type="text"
                    value={searchParams.to}
                    onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
                    placeholder="المدينة الوصول"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* DATES & PASSENGERS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaCalendarAlt className="inline-block ml-2 text-[#F05A28]" />
                    تاريخ الذهاب
                  </label>
                  <input
                    type="date"
                    value={searchParams.departureDate}
                    onChange={(e) => setSearchParams({...searchParams, departureDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent outline-none transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaCalendarAlt className="inline-block ml-2 text-[#F05A28]" />
                    تاريخ العودة
                  </label>
                  <input
                    type="date"
                    value={searchParams.returnDate}
                    onChange={(e) => setSearchParams({...searchParams, returnDate: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaUser className="inline-block ml-2 text-[#F05A28]" />
                    عدد الركاب
                  </label>
                  <select
                    value={searchParams.passengers}
                    onChange={(e) => setSearchParams({...searchParams, passengers: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent outline-none transition"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} ركاب</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CLASS */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  فئة الرحلة
                </label>
                <div className="flex gap-4">
                  {["economy", "business", "first"].map((cls) => (
                    <label key={cls} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="class"
                        value={cls}
                        checked={searchParams.class === cls}
                        onChange={(e) => setSearchParams({...searchParams, class: e.target.value})}
                        className="w-4 h-4 text-[#F05A28] focus:ring-[#F05A28]"
                      />
                      <span className="text-gray-700 capitalize">
                        {cls === "economy" ? "اقتصادية" : cls === "business" ? "رجال أعمال" : "درجة أولى"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F05A28] hover:bg-[#e24e1f] text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري البحث...
                  </>
                ) : (
                  <>
                    <FaSearch />
                    ابحث عن الرحلات
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      {searchResults.length > 0 && (
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* RESULTS HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                نتائج البحث ({searchResults.length} رحلة)
              </h2>
              
              <div className="flex flex-wrap gap-4">
                {/* SORT */}
                <div className="flex items-center gap-2">
                  <FaSortAmountDown className="text-gray-600" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] outline-none"
                  >
                    <option value="price">السعر: من الأقل للأعلى</option>
                    <option value="duration">المدة: من الأقصر للأطول</option>
                  </select>
                </div>

                {/* FILTERS TOGGLE */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <FaFilter />
                  <span>فلاتر</span>
                </button>
              </div>
            </div>

            {/* FILTERS SIDEBAR */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-white rounded-lg p-6 mb-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4">الفلاتر</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* STOPS */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">عدد التوقفات</label>
                    <div className="flex gap-4">
                      {["0", "1", "2+"].map((stops) => (
                        <label key={stops} className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="stops"
                            value={stops}
                            onChange={() => handleFilter("stops", stops === "2+" ? 2 : parseInt(stops))}
                            className="w-4 h-4 text-[#F05A28]"
                          />
                          <span className="text-gray-700">
                            {stops === "0" ? "مباشر" : stops === "1" ? "توقف واحد" : "توقفين أو أكثر"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* PRICE RANGE */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">أقصى سعر</label>
                    <input
                      type="range"
                      min="1000"
                      max="5000"
                      step="100"
                      onChange={(e) => handleFilter("priceRange", parseInt(e.target.value))}
                      className="w-full"
                    />
                    <p className="text-gray-600 mt-2">
                      حتى {formatPrice(parseInt(e.target.value))}
                    </p>
                  </div>

                  {/* CLASS */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">الفئة</label>
                    <div className="flex gap-4">
                      {["economy", "business", "first"].map((cls) => (
                        <label key={cls} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="class"
                            value={cls}
                            onChange={() => handleFilter("class", cls)}
                            className="w-4 h-4 text-[#F05A28]"
                          />
                          <span className="text-gray-700 capitalize">
                            {cls === "economy" ? "اقتصادية" : cls === "business" ? "رجال أعمال" : "درجة أولى"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* FLIGHT RESULTS */}
            <div className="space-y-4">
              {filterResults.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-lg">
                  <FaInfoCircle className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">لا توجد رحلات مطابقة للفلاتر</p>
                  <button
                    onClick={() => {
                      setFilterResults(mockFlights);
                      setShowFilters(false);
                    }}
                    className="mt-4 bg-[#F05A28] text-white px-6 py-2 rounded-lg hover:bg-[#e24e1f] transition"
                  >
                    عرض كل الرحلات
                  </button>
                </div>
              ) : (
                filterResults.map((flight, index) => (
                  <motion.div
                    key={flight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
                  >
                    {/* FLIGHT HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={flight.logo}
                          alt={flight.airline}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-gray-800">{flight.airline}</h3>
                          <p className="text-gray-500 text-sm">رقم الرحلة: {flight.flightNumber}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {flight.stops === 0 ? "مباشر" : `${flight.stops} توقف`}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                          {flight.class === "economy" ? "اقتصادية" : flight.class === "business" ? "رجال أعمال" : "درجة أولى"}
                        </span>
                      </div>
                    </div>

                    {/* FLIGHT DETAILS */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                      {/* DEPARTURE */}
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">{flight.departureTime}</p>
                        <p className="text-gray-600 font-semibold">{flight.from}</p>
                        <FaPlaneDeparture className="text-[#F05A28] mx-auto mt-2 text-xl" />
                      </div>

                      {/* DURATION */}
                      <div className="text-center">
                        <p className="text-gray-600">{flight.duration}</p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <div className="w-16 h-[2px] bg-gray-300"></div>
                          <FaClock className="text-gray-400" />
                          <div className="w-16 h-[2px] bg-gray-300"></div>
                        </div>
                      </div>

                      {/* ARRIVAL */}
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-800">{flight.arrivalTime}</p>
                        <p className="text-gray-600 font-semibold">{flight.to}</p>
                        <FaPlaneArrival className="text-[#F05A28] mx-auto mt-2 text-xl" />
                      </div>

                      {/* PRICE & BOOK */}
                      <div className="text-center md:text-right">
                        <p className="text-3xl font-bold text-[#F05A28] mb-2">
                          {formatPrice(flight.price)}
                        </p>
                        <p className="text-gray-500 text-sm mb-4">للراكب الواحد</p>
                        <button
                          onClick={() => handleBooking(flight)}
                          className="w-full bg-[#F05A28] hover:bg-[#e24e1f] text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                        >
                          <FaCheckCircle />
                          احجز الآن
                        </button>
                      </div>
                    </div>

                    {/* FLIGHT INFO */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-500" />
                        <span>4.5 تقييم</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        <span>حجز آمن</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaPhone className="text-blue-500" />
                        <span>دعم 24/7</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "هل يمكنني إلغاء الحجز؟",
                a: "نعم، يمكنك إلغاء الحجز خلال 24 ساعة من الحجز مع استرداد كامل للمبلغ."
              },
              {
                q: "هل يمكنني تغيير موعد الرحلة؟",
                a: "نعم، يمكنك تغيير موعد الرحلة مقابل رسوم تغيير بسيطة."
              },
              {
                q: "ما هي الوثائق المطلوبة للحج؟",
                a: "جواز سفر ساري المفعول، تأشيرة入境 (إذا لزم الأمر)، وتذاكر الطيران."
              },
              {
                q: "كيف يمكنني التواصل مع الدعم؟",
                a: "يمكنك التواصل معنا عبر الواتساب أو الهاتف على مدار 24 ساعة."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/2017115"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#128C7E] transition transform hover:scale-110"
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp className="text-[24px]" />
      </a>

      {/* FOOTER */}
      <footer className="bg-[#1f2c33] text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 شركة ماريانو للسياحة - جميع الحقوق محفوظة
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-[#F05A28] transition">سياسة الخصوصية</a>
            <a href="#" className="hover:text-[#F05A28] transition">شروط الاستخدام</a>
            <a href="#" className="hover:text-[#F05A28] transition">اتصل بنا</a>
          </div>
        </div>
      </footer>
    </>
  );
}