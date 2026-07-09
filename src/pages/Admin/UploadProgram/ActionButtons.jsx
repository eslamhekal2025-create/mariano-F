const ActionButtons = ({ loading, onReset }) => (
  <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
    <SubmitButton loading={loading} />
    <ResetButton onReset={onReset} />
  </div>
);

const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    disabled={loading}
    className="flex-1 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-6 px-8 rounded-3xl text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
  >
    {loading ? (
      <>
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        جاري الرفع...
      </>
    ) : (
      '🚀 رفع البرنامج'
    )}
  </button>
);

const ResetButton = ({ onReset }) => (
  <button
    type="button"
    onClick={onReset}
    className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-6 px-8 rounded-3xl text-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
  >
    🔄 إعادة تعيين
  </button>
);

export default ActionButtons;