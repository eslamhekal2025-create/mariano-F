import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';
import { Link } from 'react-router-dom'; // أو useNavigate

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  // ✅ Dynamic SEO
  const seoData = {
    title: `${t('about.title')} | ${t('about.subtitle')}`,
    description: t('about.hero_desc')
  };

  const stats = [
    { value: "25K+", label: t('about.stats.clients') },
    { value: "500+", label: t('about.stats.programs') },
    { value: "9+", label: t('about.stats.years') },
    { value: "15+", label: t('about.stats.awards') }
  ];

  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "مدير تنفيذي",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      lang: "CEO"
    },
    {
      name: "فاطمة علي",
      role: "مديرة العمليات",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      lang: "Operations Manager"
    },
    {
      name: "محمد صالح",
      role: "مستشار سياحي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      lang: "Travel Consultant"
    }
  ];

  return (
    <>
      {/* ✅ SEO Head */}
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content="/about-og.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen pt-[80px] pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('about.hero_title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t('about.hero_desc')}
            </p>
            <div className="inline-block bg-white/70 px-8 py-4 rounded-3xl shadow-xl text-2xl font-bold text-emerald-700 border-4 border-white/50">
              {t('about.subtitle')}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                  {stat.value}
                </div>
                <p className="text-lg font-semibold text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                {t('about.mission_title')}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t('about.mission_desc')}
              </p>
              <div className="space-y-4">
                {t('about.values', { returnObjects: true }).map((value, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl">
                    <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-12 shadow-2xl">
                <div className="absolute inset-0 bg-white/20 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/30 rounded-full mx-auto mb-8 flex items-center justify-center">
                    <span className="text-4xl">🕋</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">100% ضمان الرضا</h3>
                  <p className="text-xl text-white/90">أو نعيد أموالك</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-6">
              {t('about.team_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team_desc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-gray-100">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-emerald-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.lang}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              {t('about.cta_title')}
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              {t('about.cta_desc')}
            </p>
            <Link
              to="/all-programs"
              className="inline-block bg-white text-emerald-700 px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform"
            >
              {t('about.contact')} 🚀
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;