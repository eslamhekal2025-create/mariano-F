import { useState, useCallback } from "react";
import { uploadProgram } from "../utitls/ProgrammApi.js";

export const useProgramForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "umrah",
    roomType: "triple",
    classType: "economy",
    price: "",
    duration: "",
    hotel: "",
    whatsapp: "",
    whatsappButtonText: "تواصل واتساب",
    isFeatured: false
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [highlights, setHighlights] = useState([
    { icon: "👑", title: "", description: "" }
  ]);
  const [loading, setLoading] = useState(false);

  // update inputs
  const updateFormData = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  // add images
  const handleImages = useCallback((files) => {
    const newImages = [...images, ...files];
    const previews = files.map(file => URL.createObjectURL(file));
    setImages(newImages);
    setPreviewImages(prev => [...prev, ...previews]);
  }, [images]);

  // remove image
  const removeImage = useCallback((index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  }, []);

  // highlights
  const addHighlight = () => {
    setHighlights(prev => [
      ...prev,
      { icon: "✨", title: "", description: "" }
    ]);
  };

  const updateHighlight = (index, field, value) => {
    setHighlights(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  const removeHighlight = (index) => {
    setHighlights(prev => prev.filter((_, i) => i !== index));
  };

  // ✅ submit مع validation كامل
  const submitProgram = async () => {
    // ✅ Validation
    const requiredFields = ['title', 'price', 'duration', 'hotel'];
    for (let field of requiredFields) {
      if (!formData[field]?.trim()) {
        return { success: false, error: `حقل "${field}" مطلوب` };
      }
    }

    if (images.length === 0) {
      return { success: false, error: 'يجب إضافة صور واحدة على الأقل' };
    }

    setLoading(true);
    try {
      const form = new FormData();

      // ✅ Form Fields
      Object.keys(formData).forEach(key => {
        form.append(key, formData[key]);
      });

      // ✅ Images
      images.forEach(img => {
        form.append("images", img);
      });

      // ✅ Highlights (فلترة الفاضية)
      const validHighlights = highlights.filter(h => h.title?.trim());
      form.append("highlights", JSON.stringify({
        title: "مميزات البرنامج",
        items: validHighlights
      }));

      const res = await uploadProgram(form); // ✅ FormData مباشرة
      return { success: true, data: res };

    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'حدث خطأ في الرفع'
      };
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      type: "umrah",
      roomType: "triple",
      classType: "economy",
      price: "",
      duration: "",
      hotel: "",
      whatsapp: "",
      whatsappButtonText: "تواصل واتساب",
      isFeatured: false
    });
    setImages([]);
    setPreviewImages([]);
    setHighlights([{ icon: "👑", title: "", description: "" }]);
  };

  return {
    formData,
    highlights,
    previewImages,
    images, // ✅ أضف images للـ return
    loading,
    updateFormData,
    handleImages,
    removeImage,
    addHighlight,
    updateHighlight,
    removeHighlight,
    submitProgram,
    resetForm
  };
};