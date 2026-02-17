import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Heart, Sparkles, MapPin } from "lucide-react";

const teamPhotos = [
  { id: 1, src: "/images/team1.jpg", alt: "Annual Gala Night", size: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/team2.jpg", alt: "Birthday Celebrations", size: "md:col-span-1" },
  { id: 3, src: "/images/team3.jpg", alt: "Clinical Workshop", size: "md:col-span-1" },
  { id: 4, src: "/images/team4.jpg", alt: "Outdoor Retreat", size: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "/images/team5.jpg", alt: "Coffee & Collaboration", size: "md:col-span-1" },
  { id: 6, src: "/images/team6.jpg", alt: "Weekend Trek", size: "md:col-span-1" },
];

function TeamFun()
{
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full pb-24 overflow-hidden">

      {/* 1. THE MINI-HERO (Top Background Image) */}
      <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-team.jpg"
          alt="Team Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold mb-4 border border-white/30"
          >
            <Sparkles size={16} className="text-yellow-400" />
            LIFE AT VU DEVI
          </motion.div>
          <h2 className="header text-4xl md:text-6xl font-medium text-white drop-shadow-lg">
            Beyond Work: <br /> <span className="text-red-700 font-light">Our Happy Moments</span>
          </h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto text-lg font-medium">
            We believe in working hard and celebrating harder. Our culture is the heartbeat of our excellence.
          </p>
        </div>
      </div>

      {/* 2. CREATIVE DECORATIVE DIVS */}
      <div className="max-w-7xl mx-auto px-6 relative mt-[-50px] z-20">

        {/* Floating Icons Background Layer */}
        <div className="absolute top-20 -left-10 text-red-100 -z-10 animate-pulse">
          <Camera size={120} />
        </div>


        {/* 3. BENTO BOX IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {teamPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              className={`relative overflow-hidden rounded-3xl shadow-md cursor-pointer group ${photo.size}`}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Playful Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#133a41]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white text-sm font-bold bg-red-600 w-fit px-3 py-1 rounded-full mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <MapPin size={14} />
                  Memory #{photo.id}
                </div>
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                  {photo.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. LIGHTBOX VIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#133a41]/95 backdrop-blur-xl flex items-center justify-center z-[100] p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors flex items-center gap-2 font-bold"
                onClick={() => setSelectedImage(null)}
              >
                CLOSE <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt="Selected"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-2xl font-bold">{selectedImage.alt}</h3>
                <p className="text-white/60 italic">Captured with love by the Vu Devi Team</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default TeamFun;