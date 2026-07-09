const BasicFields = ({ formData, onChange }) => (
  <div className="space-y-6">
    {/* Row 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="title"
        placeholder="عنوان البرنامج"
        value={formData.title}
        onChange={onChange}
        className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500 focus:border-transparent"
        required
      />
      
      <select
        name="type"
        value={formData.type}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
      >
        <option value="umrah">🕋 العمرة</option>
        <option value="hajj">🕌 الحج</option>
      </select>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <input
        name="price"
        placeholder="السعر (12,999 ر.س)"
        value={formData.price}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
        required
      />
      
      <select
        name="roomType"
        value={formData.roomType}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
      >
        <option value="single">👤 مفرد</option>
        <option value="double">👥 ثنائي</option>
        <option value="triple">👨‍👩‍👧 ثلاثي</option>
        <option value="quad">👨‍👩‍👧‍👦 رباعي</option>
      </select>
      
      <select
        name="classType"
        value={formData.classType}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
      >
        <option value="economy">💰 اقتصادي</option>
        <option value="business">✈️ بيزنس</option>
        <option value="premium">⭐ بريميوم</option>
      </select>
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="duration"
        placeholder="المدة (7 أيام)"
        value={formData.duration}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
        required
      />
      
      <input
        name="hotel"
        placeholder="اسم الفندق"
        value={formData.hotel}
        onChange={onChange}
        className="p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-emerald-500"
        required
      />
    </div>

    <input
      name="whatsapp"
      placeholder="رابط الواتساب (اختياري)"
      value={formData.whatsapp}
      onChange={onChange}
      className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-green-500"
    />
  </div>
);

export default BasicFields;