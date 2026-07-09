const ProgramHighlights = ({ highlights }) => {
  if (!highlights?.items?.length) return null;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        ✨ {highlights.title || 'مميزات البرنامج'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {highlights.items.map((item, index) => (
          <HighlightCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

// Reusable HighlightCard
const HighlightCard = ({ item }) => (
  <div className="group bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 p-4 rounded-xl hover:shadow-md transition-all duration-300">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
        <span className="text-white font-bold text-sm">{item.icon || '✓'}</span>
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-900 group-hover:text-emerald-700">
          {item.title}
        </p>
        {item.description && (
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        )}
      </div>
    </div>
  </div>
);

export default ProgramHighlights;