const ActionButtons = ({ whatsapp, whatsappButtonText, onClose }) => (
  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
    <WhatsappButton 
      href={whatsapp || "https://wa.me/201065624727"}
      text={whatsappButtonText || 'تواصل واتساب'}
    />
    <CloseButton onClose={onClose} />
  </div>
);

// Reusable Buttons
const WhatsappButton = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-4 px-6 rounded-2xl text-center font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
  >
    <span>📱</span>
    {text}
  </a>
);

const CloseButton = ({ onClose }) => (
  <button
    onClick={onClose}
    className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    ❌ إغلاق
  </button>
);

export default ActionButtons;