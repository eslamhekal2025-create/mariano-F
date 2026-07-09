import { useTranslation } from "react-i18next";

const ProgramCard = ({ program, onClick }) => {
  // ✅ Fallback image لو الصورة مش موجودة
  const defaultImage = "https://via.placeholder.com/400x300/10b981/ffffff?text=برنامج+عمرة";
const[t]=useTranslation()
  return (

    <div
      onClick={onClick}
      className="bg-white  rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
    >
      {/* ✅ Image مع fallback */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
        className="h-[100%]"
  src={
    program.image
      ? `${import.meta.env.VITE_API_URL}/${program.image.replace(/\\/g, "/")}`
      : defaultImage
  }
  alt={program.title}
  onError={(e) => {
    e.target.src = defaultImage;
  }}
/>
        
        {/* ✅ Featured badge */}
        {program.isFeatured && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            مميز
          </div>
        )}
      </div>

      {/* ✅ Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
          {program.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl font-black text-emerald-600">
            {program.price?.toLocaleString()} ج
            
          </span>
          <span className="text-sm text-gray-500 line-through">
            {Math.round(program.price * 1.2).toLocaleString()} ج
          </span>
        </div>

        {/* Duration & Hotel */}
        <div className="space-y-1 mb-4">
          <p className="text-lg font-semibold text-gray-700">
            {program.duration} days 
             | {program.hotel}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span>{program.roomTypeLabel || program.roomType}</span>
            <span>•</span>
            <span>{program.classTypeLabel || program.classType}</span>
          </p>
        </div>

        {/* Highlights */}
        {program.highlights?.items?.length > 0 && (
          <div className="mb-4 space-y-1">
            {program.highlights.items.slice(0, 2).map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span>{highlight.icon}</span>
                <span className="font-medium">{highlight.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-4 px-6 rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 transform">
          🚀 تفاصيل البرنامج
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;