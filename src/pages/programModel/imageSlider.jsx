import { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images = [], program }) => {  // ✅ images + program كـ props
  const sliderRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Default image
  const defaultImage = "/images/default-program.jpg"; // ضعها في public/images

  const settings = {
    dots: true,
    infinite: images.length > 1,      // ✅ لو صورة واحدة مافيش infinite
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: images.length > 1,      // ✅ Autoplay بس لو أكتر من صورة
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrentImage(next),
  };

  // ✅ لو مفيش صور يرجع صورة الغلاف أو default
  const sliderImages = images.length > 0 
    ? images 
    : [program?.image || defaultImage];

  return (
    <div className="relative w-full">
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index} className="relative w-full h-80 md:h-96 lg:h-[28rem]">
            {/* ✅ Image مع full URL */}
            <div className="w-full h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
              <img
                src={
                  image.startsWith('http') || image.startsWith('/')
                    ? image
                    : `${import.meta.env.VITE_API_URL}/${image.replace(/\\/g, "/")}`
                }
                alt={`${program?.title} - صورة ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = defaultImage;  // ✅ Fallback
                  e.target.className += ' opacity-75';
                }}
              />
            </div>

            {/* Counter */}
            {sliderImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-2xl">
                {currentImage + 1} / {sliderImages.length}
              </div>
            )}
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      {sliderImages.length > 1 && <SliderNav sliderRef={sliderRef} />}
    </div>
  );
};

// ✅ Navigation Component
const SliderNav = ({ sliderRef }) => (
  <>
    <button
      onClick={() => sliderRef.current?.slickPrev()}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-2xl p-3.5 rounded-full transition-all duration-300 z-20 border-2 border-white/50 md:left-6 lg:left-8 hover:scale-110 hover:shadow-3xl active:scale-95"
      aria-label="الصورة السابقة"
    >
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button
      onClick={() => sliderRef.current?.slickNext()}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-2xl p-3.5 rounded-full transition-all duration-300 z-20 border-2 border-white/50 md:right-6 lg:right-8 hover:scale-110 hover:shadow-3xl active:scale-95"
      aria-label="الصورة التالية"
    >
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </>
);

export default ImageSlider;