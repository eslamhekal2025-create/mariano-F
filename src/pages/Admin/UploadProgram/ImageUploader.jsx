const ImageUploader = ({ onImagesChange, previewImages, onRemoveImage }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    if (files.length) onImagesChange(files);
  };

  return (
    <div 
      className="border-4 border-dashed border-gray-300 rounded-3xl p-12 text-center hover:border-emerald-400 transition-all group"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onImagesChange(Array.from(e.target.files))}
        className="hidden"
        id="image-upload"
      />
      
      <label htmlFor="image-upload" className="cursor-pointer block">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-700">اسحب الصور أو اضغط</p>
        </div>
      </label>

      {previewImages.length > 0 && (
        <ImagePreview images={previewImages} onRemove={onRemoveImage} />
      )}
    </div>
  );
};

const ImagePreview = ({ images, onRemove }) => (
  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t">
    {images.map((img, index) => (
      <div key={index} className="relative group">
        <img 
          src={img} 
          alt={`Preview ${index + 1}`} 
          className="w-full h-32 object-cover rounded-2xl shadow-lg" 
        />
        <button
          onClick={() => onRemove(index)}
          className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all"
        >
          ✕
        </button>
      </div>
    ))}
  </div>
);

export default ImageUploader;