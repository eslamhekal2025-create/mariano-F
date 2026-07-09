import { toast } from 'react-hot-toast';
import ActionButtons from './ActionButtons';
import ImageUploader from './ImageUploader';
import HighlightsEditor from './HighlightsEditor';
import BasicFields from './BasicFields';
import { useProgramForm } from '../../../hooks/useProgramForm';

const ProgramForm = () => {
  const {
    formData,
    images, // ✅ أضف images
    highlights,
    previewImages,
    loading,
    updateFormData,
    handleImages,
    removeImage,
    addHighlight,
    updateHighlight,
    removeHighlight,
    submitProgram,
    resetForm
  } = useProgramForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitProgram();
    if (result?.success) {
      toast.success('✅ تم رفع البرنامج بنجاح!');
      resetForm();
    } else {
      toast.error(`❌ ${result?.error || 'حدث خطأ'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BasicFields formData={formData} onChange={updateFormData} />
      <ImageUploader 
        onImagesChange={handleImages} 
        previewImages={previewImages} 
        onRemoveImage={removeImage}
      />
      <HighlightsEditor 
        highlights={highlights}
        onAdd={addHighlight}
        onUpdate={updateHighlight}
        onRemove={removeHighlight}
      />
      <ActionButtons loading={loading} onReset={resetForm} />
    </form>
  );
};

export default ProgramForm;