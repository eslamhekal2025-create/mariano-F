
import ActionButtons from './ActionButtons.jsx';
import ImageSlider from './imageSlider.jsx';
import ProgramHighlights from './ProgramHighlights.jsx';
import ProgramHeader from './ProgrammHeader.jsx';
import ProgramInfo from './ProgrammInfo.jsx';

const ProgramModal = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <ImageSlider images={program.images || [program.image]} />
        
        <div className="p-6 lg:p-8">
          <ProgramHeader program={program} />
          <ProgramInfo program={program} />
          <ProgramHighlights highlights={program.highlights} />
          <ActionButtons 
            whatsapp={program.whatsapp} 
            whatsappButtonText={program.whatsappButtonText}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramModal;