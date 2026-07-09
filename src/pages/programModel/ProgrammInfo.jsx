const ProgramInfo = ({ program }) => (
  <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-100">
    <InfoCard icon="💰" label={program.price} className="text-green-600" />
    <InfoCard icon="📅" label={program.duration} />
    <InfoCard icon="🏨" label={program.hotel} />
  </div>
);

// Reusable InfoCard
const InfoCard = ({ icon, label, className = 'text-gray-700' }) => (
  <div className={`flex items-center gap-2 ${className} font-bold text-xl bg-gray-50 px-4 py-2 rounded-xl`}>
    <span>{icon}</span>
    <span>{label}</span>
  </div>
);

export default ProgramInfo;