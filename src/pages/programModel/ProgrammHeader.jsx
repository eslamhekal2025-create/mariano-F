const ProgramHeader = ({ program }) => (
  <div className="flex items-start justify-between mb-6">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight flex-1 pr-4">
      {program.title}
    </h2>
    <TypeBadge type={program.type} />
  </div>
);

// Reusable Badge Component
const TypeBadge = ({ type }) => (
  <div className={`px-4 py-2 rounded-xl text-sm font-bold text-white shadow-lg ${
    type === 'umrah' 
      ? 'bg-gradient-to-r from-emerald-500 to-green-600' 
      : 'bg-gradient-to-r from-orange-500 to-red-600'
  }`}>
    {type === 'umrah' ? '🕋 العمرة' : '🕌 الحج'}
  </div>
);

export default ProgramHeader;