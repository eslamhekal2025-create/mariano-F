const programsData = [
  {
    id: 1,
    title: "برنامج العمرة الذهبي - 10 أيام",
    price: "15,999 ر.س",
    duration: "10 أيام",
    hotel: "هيلتون مكة 5★",
    features: [
      "غرفة ثلاثية",
      "زيارة المدينة",
      "تأشيرة فورية",
      "نقل خاص",
      "دليل سياحي"
    ],
    images: [  // ✅ غيّر image لـ images
      "https://tse2.mm.bing.net/th/id/OIP.o7aiKDLjeRGA6RcBlRrLJAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse3.mm.bing.net/th/id/OIP.tR975tl7vgjomvHAw4EaGgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    image: "https://tse2.mm.bing.net/th/id/OIP.o7aiKDLjeRGA6RcBlRrLJAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" // ✅ fallback
  }
];

export default programsData;