const HighlightsEditor = ({ highlights, onAdd, onUpdate, onRemove }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">✨ مميزات البرنامج</h3>
      <button
        type="button"
        onClick={onAdd}
        className="bg-emerald-600 text-white px-6 py-3 rounded-2xl hover:bg-emerald-700 transition-all"
      >
        + إضافة
      </button>
    </div>
    
    <div className="space-y-4">
      {highlights.map((highlight, index) => (
        <HighlightItem
          key={index}
          index={index}
          highlight={highlight}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      ))}
    </div>
  </div>
);

const HighlightItem = ({ index, highlight, onUpdate, onRemove }) => (
  <div className="flex gap-4 items-start p-6 bg-gray-50 rounded-2xl group hover:bg-white hover:shadow-md transition-all">
    <input
      value={highlight.icon}
      onChange={(e) => onUpdate(index, 'icon', e.target.value)}
      placeholder="👑"
      className="w-16 p-3 font-bold text-2xl text-center border border-gray-300 rounded-xl"
    />
    
    <div className="flex-1 grid grid-cols-1 gap-2">
      <input
        value={highlight.title}
        onChange={(e) => onUpdate(index, 'title', e.target.value)}
        placeholder="عنوان الميزة"
        className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
      />
      <input
        value={highlight.description}
        onChange={(e) => onUpdate(index, 'description', e.target.value)}
        placeholder="وصف (اختياري)"
        className="p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
      />
    </div>
    
    <button
      type="button"
      onClick={() => onRemove(index)}
      className="text-red-500 hover:text-red-700 font-bold text-xl self-center"
    >
      ✕
    </button>
  </div>
);

export default HighlightsEditor;