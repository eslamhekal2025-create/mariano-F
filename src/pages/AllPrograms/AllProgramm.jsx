import { usePrograms } from "../../context/ProgrammContext.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ProgramCard from "../programCard/ProgranCard.jsx";
import { useEffect, useMemo, useState } from "react";
import ProgramModal from "../programModel/ProgramModel.jsx";
import Head from 'next/head'; // ✅ إضافة Head للـ SEO

const AllPrograms = () => {
  const { programs, loading, getAllPrograms } = usePrograms();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState(null);

  // ✅ Fetch data مرة واحدة
  useEffect(() => {
    getAllPrograms();
  }, []);

  // ✅ Filtering optimized
  const filteredPrograms = useMemo(() => {
    if (activeFilter === "all") return programs;
    return programs.filter((p) => p.type === activeFilter);
  }, [programs, activeFilter]);

  // ✅ Meta Tags للـ SEO
  const pageTitle = `جميع برامج العمرة والحج ${filteredPrograms.length} برنامج متاح`;
  const pageDescription = `اكتشف ${filteredPrograms.length} برنامج عمرة وحج بأسعار تنافسية وخدمات متميزة. حجز فوري ✅ ضمان السعر الأفضل ✅`;

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="برامج عمرة, برامج حج, حجز عمرة, حجز حج, عروض عمرة, أسعار عمرة 2024" />
        
        {/* ✅ Open Graph للـ Social Media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/all-programs" />
        <meta property="og:image" content="/og-image-programs.jpg" />
        
        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* ✅ Schema.org للـ Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "جميع برامج العمرة والحج",
            "description": pageDescription,
            "url": "https://yourwebsite.com/all-programs",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": filteredPrograms.slice(0, 10).map((program, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": program.title,
                "url": `https://yourwebsite.com/program/${program._id}`
              }))
            }
          })}
        </script>
      </Head>

      <section className="min-h-screen pt-[80px] pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ✅ Schema.org Article للـ Header */}
          <article itemScope itemType="https://schema.org/Article">
            
            {/* Header مع Schema */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              anima0te={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
              itemProp="headline"
            >
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
                itemProp="headline"
              >
                جميع برامج العمرة والحج
              </h1>

              <p 
                className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                itemProp="description"
              >
                اكتشف أحدث برامج العمرة والحج بأسعار تنافسية وخدمات متميزة
              </p>

              <div className="mt-8 text-2xl font-bold text-emerald-600 bg-white/50 px-8 py-3 rounded-full inline-block shadow-lg">
                {filteredPrograms.length} برنامج متاح
              </div>
            </motion.header>

            {/* Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
            >
              {[
                { id: "all", label: "الكل", icon: "🌟" },
                { id: "umrah", label: "العمرة", icon: "🕋" },
                { id: "hajj", label: "الحج", icon: "🕌" },
              ].map(({ id, label, icon }) => (
                <motion.button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`px-8 py-4 rounded-3xl font-bold text-lg transition-all duration-300 shadow-lg ${
                    activeFilter === id
                      ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white shadow-2xl"
                      : "bg-white/70 text-gray-700 hover:bg-white hover:shadow-xl border border-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{icon}</span>
                  {label}
                </motion.button>
              ))}
            </motion.div>

            {/* ✅ Programs Grid مع ARIA Labels */}
            <div 
              role="grid" 
              aria-label={`نتائج البحث عن ${activeFilter === 'all' ? 'جميع البرامج' : activeFilter === 'umrah' ? 'برامج العمرة' : 'برامج الحج'}`}
              className="grid grid-cols-1 
               sm:grid-cols-2 
               md:grid-cols-2 
               lg:grid-cols-2 
               xl:grid-cols-3 
               2xl:grid-cols-3 
               gap-6 sm:gap-7 lg:gap-8 xl:gap-10"
            >
              <AnimatePresence>
                {filteredPrograms.map((program, index) => (
                  <motion.div 
                    key={program._id}
                    role="gridcell"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.05,
                      },
                    }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    whileHover={{ y: -10 }}
                    layout
                    onClick={() => setSelectedProgram(program)}
                    aria-label={`عرض تفاصيل برنامج ${program.title}`}
                  >
                    <ProgramCard program={program} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {!loading && filteredPrograms.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-32"
                role="alert"
                aria-label="لا توجد برامج متاحة حالياً"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  لا توجد برامج
                </h2>
                <p className="text-xl text-gray-600">
                  جرب فلتر آخر أو أعد تحميل الصفحة
                </p>
              </motion.div>
            )}
          </article>
        </div>
        
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      </section>
    </>
  );
};

export default AllPrograms;0