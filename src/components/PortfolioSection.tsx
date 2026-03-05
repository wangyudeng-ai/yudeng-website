import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Mock Data ---
import mj1 from '../assets/images/midjourney/mj1.jpg';
import mj2 from '../assets/images/midjourney/mj2.jpg';
import mj3 from '../assets/images/midjourney/mj3.jpg';
import mj4 from '../assets/images/midjourney/mj4.jpg';
import mj5 from '../assets/images/midjourney/mj5.jpg';
import mj6 from '../assets/images/midjourney/mj6.jpg';
import mj7 from '../assets/images/midjourney/mj7.jpg';
import mj8 from '../assets/images/midjourney/mj8.jpg';
import mj9 from '../assets/images/midjourney/mj9.jpg';
import mj10 from '../assets/images/midjourney/mj10.jpg';
import mj11 from '../assets/images/midjourney/mj11.jpg';
import mj12 from '../assets/images/midjourney/mj12.jpg';
import mj13 from '../assets/images/midjourney/mj13.jpg';
import mj14 from '../assets/images/midjourney/mj14.jpg';
import mj15 from '../assets/images/midjourney/mj15.jpg';
import mj16 from '../assets/images/midjourney/mj16.jpg';
import mj17 from '../assets/images/midjourney/mj17.jpg';

import ui1_1 from '../assets/images/ui/ui1_1.jpg';
import ui1_2 from '../assets/images/ui/ui1_2.jpg';
import ui1_3 from '../assets/images/ui/ui1_3.jpg';
import ui1_4 from '../assets/images/ui/ui1_4.jpg';
import ui1_5 from '../assets/images/ui/ui1_5.jpg';
import ui1_6 from '../assets/images/ui/ui1_6.jpg';

import ui2_1 from '../assets/images/ui/ui2_1.jpg';
import ui2_2 from '../assets/images/ui/ui2_2.jpg';
import ui2_3 from '../assets/images/ui/ui2_3.jpg';
import ui2_4 from '../assets/images/ui/ui2_4.jpg';
import ui2_5 from '../assets/images/ui/ui2_5.jpg';
import ui2_6 from '../assets/images/ui/ui2_6.jpg';

import ui3_1 from '../assets/images/ui/ui3_1.jpg';
import ui3_2 from '../assets/images/ui/ui3_2.jpg';
import ui3_3 from '../assets/images/ui/ui3_3.jpg';
import ui3_4 from '../assets/images/ui/ui3_4.jpg';

import ui4_1 from '../assets/images/ui/ui4_1.jpg';
import ui4_2 from '../assets/images/ui/ui4_2.jpg';
import ui4_3 from '../assets/images/ui/ui4_3.jpg';

import cal1 from '../assets/images/calligraphy/cal1.jpg';
import cal2 from '../assets/images/calligraphy/cal2.jpg';
import cal3 from '../assets/images/calligraphy/cal3.jpg';
import cal4 from '../assets/images/calligraphy/cal4.jpg';

const mjItems = [
  {
    id: 1,
    title: "中古珠宝氛围感",
    images: [mj1, mj2, mj3], 
    prompt: "chanel jewelry collection, vintage style, old book , pearls and gemstones, golden cross necklace, green ruby ring, red pearl earrings, golden chain around the neck, white paper background, soft lighting, warm tones, vintage style, old magazine spread in close-up view, highly detailed  —ar 9:16 --v 6"
  },
  {
    id: 2,
    title: "月升花丘珠宝系列",
    images: [mj4, mj5, mj6, mj7],
    prompt: "A cold fair-skinned woman with long hair, wearing vintage jewelry on her wrist and neck, dressed in a solid-colored dress (emerald green or other vintage style), standing in a clean background with natural light (no yellow warm tones), facing the camera directly, upper body shot, overall tone slightly white, high-quality texture suitable for a fashion magazine --v 5 --q 2 --ar 1:2 --s 750"
  },
  {
    id: 3,
    title: "悟空悟时 共享珠宝",
    images: [mj8, mj9],
    prompt: "Exquisite commercial photography created for a jewelry brand, showcasing an urban luxury style. At the center of the frame, a hand holds a transparent bubble tea cup. The arm is adorned with a Cartier luxury watch and diamond jewelry, and the fingers wear diamond rings, each set with a large gemstone, including sapphire, ruby, diamond, platinum, or gold. The cup has a brown lid and a paper straw, featuring an elegant and clearly visible beige minimalist label. The background is clean and light-colored, with natural and subtle light and shadow effects. The lighting is soft and natural, with clear reflections. Style: minimalist composition, sharp focus, shot with a 50mm lens.  --ar 1:1 --chaos 8 --s 150 --v 7 --seed 17"
  },
  {
    id: 4,
    title: "RX高定珠宝",
    images: [mj10, mj11, mj12], 
    prompt: "European models wear silver bracelets with rows of small diamond particles. On her hand is a green jade ring encrusted with diamonds. A simple pure white pearl necklace is worn around the neck, and there is a heart-shaped diamond stud earrings on the ear. It looks simple and elegant. They wore black velvet dresses with one hand to the side and head to the side, taking close-ups of their upper bodies in a studio photography setting. Photo taken with the Canon EOS R5 camera.  --ar 9:16 --s 40 --v 7 --seed 1028"
  },
  {
    id: 5,
    title: "素茉菲迩项目系列",
    images: [mj13, mj14, mj15, mj16],
    prompt: "A commercial fashion photo featuring a European female model wearing an exquisite gold necklace with fair skin. She wears a Bulgari diamond bracelet on her wrist and a purple diamond ring on her finger. She is dressed in a light-colored top, with her eyes closed, and a purple butterfly near her eye. The background is a clean white with a larger area, shot with a Canon EOS R5 camera and EF lens, aperture 80mm f/2.9, shutter speed 30 seconds, ISO appropriately set, using soft natural light, studio photography style, post-processed to achieve a magazine cover look, high resolution. --ar 9:16 --chaos 10 --s 127 --v 7 --seed 5301"
  },
  {
    id: 6,
    title: "原创饰品设计师品牌系列",
    images: [mj17],
    prompt: "A cold, fair-skinned, long-haired Asian woman with gold and blue pearls on her fingers, an elegant black velvet dress, a gold necklace encrusted with lapis lazuli beads around her neck, and simple pearl earrings. The model is sideways. The background features soft lighting, creating a minimalist yet luxurious atmosphere. In detail, the model has dark hair tied at the back with wavy bangs.    --ar 3:4 --chaos 1 --s 60 --v 6.1 --seed 2"
  }
];

const uiItems = [
  {
    id: 1,
    title: "桃花坞木板年画",
    category: "品牌视觉",
    images: [ui1_1, ui1_2, ui1_3, ui1_4, ui1_5, ui1_6]
  },
  {
    id: 2,
    title: "创意海报合集",
    category: "海报设计 / 视觉探索",
    images: [ui2_1, ui2_2, ui2_3, ui2_4, ui2_5, ui2_6]
  },
  {
    id: 3,
    title: "苏轼字体设计研究",
    category: "字体设计 / 传统文化",
    images: [ui3_1, ui3_2, ui3_3, ui3_4]
  },
  {
    id: 4,
    title: "Natural Herb香水",
    category: "品牌包装 / 产品设计",
    images: [ui4_1, ui4_2, ui4_3]
  }
];

const calligraphyItems = [
  {
    id: 1,
    text: "隶书中堂 古诗二首",
    image: cal1
  },
  {
    id: 2,
    text: "行书创作 节录《书法雅言》",
    image: cal2
  },
  {
    id: 3,
    text: "大字行书创作 《心相》",
    image: cal3
  },
  {
    id: 4,
    text: "楷书创作 《颜氏家训》",
    image: cal4
  }
];

export default function PortfolioSection() {
  // Modal States
  const [selectedMj, setSelectedMj] = useState<typeof mjItems[0] | null>(null);
  const [selectedUiIndex, setSelectedUiIndex] = useState<number | null>(null);
  const [selectedCalligraphy, setSelectedCalligraphy] = useState<typeof calligraphyItems[0] | null>(null);
  
  // Modal Carousel State
  const [[mjModalPage, mjModalDirection], setMjModalPage] = useState([0, 0]);
  const [[uiModalPage, uiModalDirection], setUiModalPage] = useState([0, 0]);

  const paginateMjModal = (newDirection: number) => {
    setMjModalPage([mjModalPage + newDirection, newDirection]);
  };

  const paginateUiModal = (newDirection: number) => {
    setUiModalPage([uiModalPage + newDirection, newDirection]);
  };
  
  const currentMjImageIndex = selectedMj 
    ? Math.abs(mjModalPage % selectedMj.images.length) 
    : 0;

  const currentUiImageIndex = selectedUiIndex !== null
    ? Math.abs(uiModalPage % uiItems[selectedUiIndex].images.length)
    : 0;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMj || selectedUiIndex !== null || selectedCalligraphy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedMj, selectedUiIndex, selectedCalligraphy]);

  // Reset modal carousel when opening a new item
  useEffect(() => {
    if (selectedMj) {
      setMjModalPage([0, 0]);
    }
  }, [selectedMj]);

  useEffect(() => {
    if (selectedUiIndex !== null) {
      setUiModalPage([0, 0]);
    }
  }, [selectedUiIndex]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const mjModalVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // UI Carousel Handlers
  const handlePrevUi = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedUiIndex !== null) {
      setSelectedUiIndex(selectedUiIndex === 0 ? uiItems.length - 1 : selectedUiIndex - 1);
    }
  };

  const handleNextUi = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedUiIndex !== null) {
      setSelectedUiIndex(selectedUiIndex === uiItems.length - 1 ? 0 : selectedUiIndex + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-20"
    >
      {/* 1. Midjourney Section */}
      <section>
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-brand-olive">Midjourney案例</h2>
            <p className="text-xl text-brand-muted mt-3">借助 AI能力达到影棚级图像表现</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mjItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedMj(item)}
              className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-brand-olive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xl block mb-2">{item.title}</span>
                  <span className="text-white/80 text-sm">AI 生成 / 视觉探索</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Visual Design Section */}
      <section>
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-brand-olive">视觉设计</h2>
          <p className="text-xl text-brand-muted mt-3">野生设计师的一些案例</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uiItems.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedUiIndex(index)}
              className="group relative aspect-video rounded-[2.5rem] overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 text-brand-olive" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl block mb-2">{item.title}</span>
                  <span className="text-white/80 text-base">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Calligraphy Section */}
      <section>
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-brand-olive">书法作品</h2>
          <p className="text-xl text-brand-muted mt-3">持续修炼的书法内功</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {calligraphyItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedCalligraphy(item)}
              className="group relative aspect-square rounded-[2rem] overflow-hidden bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={item.image} 
                alt={`Calligraphy ${item.id}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg whitespace-pre-line">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modals --- */}
      <AnimatePresence>
        {/* Midjourney Modal */}
        {selectedMj && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedMj(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-6xl w-full h-[85vh] flex flex-col md:flex-row relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedMj(null)} className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-brand-olive transition-colors">
                <X className="w-6 h-6" />
              </button>
              
              {/* Left: Images (Carousel) */}
              <div className="w-full md:w-3/5 h-[400px] md:h-full bg-gray-100 relative overflow-hidden flex items-center justify-center">
                <AnimatePresence initial={false} custom={mjModalDirection}>
                  <motion.img
                    key={mjModalPage}
                    src={selectedMj.images[currentMjImageIndex]}
                    custom={mjModalDirection}
                    variants={mjModalVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginateMjModal(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginateMjModal(-1);
                      }
                    }}
                    className="absolute w-full h-full object-contain cursor-grab active:cursor-grabbing p-4"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Controls */}
                {selectedMj.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); paginateMjModal(-1); }}
                      className="absolute left-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-brand-olive transition-colors z-10 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); paginateMjModal(1); }}
                      className="absolute right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-brand-olive transition-colors z-10 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Indicators */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                      {selectedMj.images.map((_, idx) => (
                        <div 
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentMjImageIndex ? 'bg-brand-olive w-6' : 'bg-brand-olive/30'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Right: Prompt */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-white h-1/2 md:h-full overflow-y-auto">
                <h3 className="text-3xl font-bold text-brand-olive mb-6">{selectedMj.title}</h3>
                <div className="flex-grow flex flex-col">
                  <span className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-3 block">Prompt</span>
                  <div className="bg-brand-cream p-6 rounded-2xl border border-gray-100 flex-grow">
                    <p className="font-mono text-sm text-brand-olive leading-relaxed break-words">
                      {selectedMj.prompt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Visual Design Modal (Carousel) */}
        {selectedUiIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedUiIndex(null)}
          >
            <button onClick={() => setSelectedUiIndex(null)} className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              key={selectedUiIndex}
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl w-full max-h-full flex items-center justify-center h-[85vh]"
              onClick={e => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={uiModalDirection}>
                <motion.img 
                  key={uiModalPage}
                  src={uiItems[selectedUiIndex].images[currentUiImageIndex]} 
                  custom={uiModalDirection}
                  variants={mjModalVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginateUiModal(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginateUiModal(-1);
                    }
                  }}
                  className="absolute max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing" 
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Controls */}
              {uiItems[selectedUiIndex].images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); paginateUiModal(-1); }}
                    className="absolute left-4 md:left-8 z-20 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); paginateUiModal(1); }}
                    className="absolute right-4 md:right-8 z-20 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {uiItems[selectedUiIndex].images.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentUiImageIndex ? 'bg-white w-6' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute bottom-[-3rem] left-0 right-0 text-center">
                <span className="text-white/70 font-medium tracking-widest text-sm uppercase">
                  {uiItems[selectedUiIndex].title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Calligraphy Modal */}
        {selectedCalligraphy && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedCalligraphy(null)}
          >
            <button onClick={() => setSelectedCalligraphy(null)} className="absolute top-6 right-6 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md">
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-full flex items-center justify-center group"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedCalligraphy.image} 
                alt="Calligraphy" 
                className="max-w-full max-h-[85vh] object-contain rounded-[2rem] shadow-2xl" 
                referrerPolicy="no-referrer"
              />
              
              {/* Text Overlay at Bottom Left */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-brand-dark/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 max-w-sm shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-brand-cream text-lg md:text-xl leading-relaxed whitespace-pre-line font-serif">
                  {selectedCalligraphy.text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
