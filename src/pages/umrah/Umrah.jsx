import { useState } from "react";
import { usePrograms } from "../../context/ProgrammContext.jsx";
import ProgramModal from "../programModel/ProgramModel.jsx";
import ProgramCard from "../programCard/ProgranCard.jsx";
import { Helmet } from "react-helmet";

const OmraPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const { programs, loading } = usePrograms();

  const umrahPrograms = programs.filter(program => program.type === "umrah");

  if (loading) return <div className="text-center py-20">جاري التحميل...</div>;

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>برامج العمرة 2026 | أفضل عروض العمرة - شركة ماريانو للسياحة</title>

        <meta
          name="description"
          content="اكتشف أفضل برامج العمرة 2026 مع شركة ماريانو للسياحة. عروض مميزة، فنادق قريبة من الحرم، وأسعار تنافسية. احجز الآن!"
        />

        <meta name="keywords" content="عمرة, برامج العمرة, عمرة 2026, حجز عمرة, سياحة دينية, شركة سياحة" />

        {/* Open Graph */}
        <meta property="og:title" content="أفضل برامج العمرة 2026 - شركة ماريانو" />
        <meta property="og:description" content="عروض عمرة مميزة بأسعار تنافسية وخدمات متكاملة" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marianotravel.com/umrah" />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="برامج العمرة - شركة ماريانو" />
        <meta name="twitter:description" content="احجز أفضل برامج العمرة الآن بسهولة" />
        <meta name="twitter:image" content="/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://marianotravel.com/umrah" />
      </Helmet>

      <section className="min-h-screen pt-[12vh] pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            برامج العمرة
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {umrahPrograms.map((program) => (
              <ProgramCard
                key={program._id}
                program={program}
                onClick={() => setSelectedProgram(program)}
              />
            ))}
          </div>
        </div>

        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      </section>
    </>
  );
};

export default OmraPrograms;