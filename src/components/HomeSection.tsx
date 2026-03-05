import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, PenTool, Layout, Cpu, Phone, Mail, X } from "lucide-react";
import avatarImg from "../assets/images/avatar.jpeg";

export default function HomeSection() {
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 z-10">
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl text-brand-olive tracking-tighter leading-none font-['HeavyDisplay']">
                你好，
              </h1>
              <div className="relative inline-block mt-2">
                <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 h-[45%] bg-brand-lime -z-10"></div>
                <span className="relative z-10 block text-6xl sm:text-7xl lg:text-8xl text-brand-olive tracking-tighter leading-none font-['HeavyDisplay'] whitespace-nowrap">
                  我是王等等
                </span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-muted tracking-tight whitespace-nowrap">
              &lt;练习时长两年的产品人&gt;
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-xl text-brand-muted max-w-lg leading-relaxed">
              我相信好的产品不仅解决问题，更能唤醒共鸣。
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="px-8 py-4 rounded-full bg-brand-lime text-brand-olive font-bold hover:bg-brand-lime-hover transition-colors shadow-sm text-lg inline-block cursor-default">
                教育产品经理 / 野生设计师 / 斜杠青年
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContact(true)}
              className="px-8 py-4 rounded-full bg-brand-lime text-brand-olive font-bold hover:bg-brand-lime-hover transition-colors flex items-center gap-2 shadow-sm"
            >
              联系我 <ArrowRight className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-gray-200 shadow-sm">
              <span className="text-sm font-medium text-brand-muted">MBTI</span>
              <span className="text-base font-bold text-brand-olive">ISTJ</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md lg:max-w-none mx-auto">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Floating Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/40 backdrop-blur-2xl border border-white/50 p-6 rounded-[2rem] shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/60 rounded-xl">
                  <Sparkles className="w-5 h-5 text-brand-olive" />
                </div>
                <span className="font-bold text-brand-olive text-sm uppercase tracking-wider">
                  一句话 Flag
                </span>
              </div>
              <p className="text-brand-olive font-semibold text-lg leading-snug">
                "不积跬步，无以至千里。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid lg:grid-cols-2 gap-6">
        {/* 职业主张 */}
        <div className="bg-brand-olive text-brand-cream p-10 md:p-12 rounded-[2.5rem] shadow-lg">
          <h2 className="text-3xl font-bold mb-10">职业主张</h2>
          <ul className="space-y-8">
            <li className="flex gap-5 border-b border-white/10 pb-8">
              <span className="text-brand-lime font-bold text-xl">01</span>
              <div>
                <strong className="block text-xl mb-2">关于AI</strong>
                <span className="text-white/70 leading-relaxed">
                  AI是放大器，不是替代品。
                </span>
              </div>
            </li>
            <li className="flex gap-5 border-b border-white/10 pb-8">
              <span className="text-brand-lime font-bold text-xl">02</span>
              <div>
                <strong className="block text-xl mb-2">关于方法论</strong>
                <span className="text-white/70 leading-relaxed">
                  框架是用来打破的，不是用来束缚的。
                </span>
              </div>
            </li>
            <li className="flex gap-5 border-b border-white/10 pb-8">
              <span className="text-brand-lime font-bold text-xl">03</span>
              <div>
                <strong className="block text-xl mb-2">关于教育</strong>
                <span className="text-white/70 leading-relaxed">
                  唤醒比灌输更重要。
                </span>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="text-brand-lime font-bold text-xl">04</span>
              <div>
                <strong className="block text-xl mb-2">关于性格</strong>
                <span className="text-white/70 leading-relaxed">
                  保持敏感，保持钝感。
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* 工具能力 */}
        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-brand-olive mb-10">
            工具能力
          </h2>
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-brand-muted" />
                <h3 className="text-sm font-bold text-brand-muted uppercase tracking-wider">
                  产品
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Axure", "Figma", "Xmind", "Visio"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-brand-cream text-brand-olive rounded-full text-sm font-semibold border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PenTool className="w-5 h-5 text-brand-muted" />
                <h3 className="text-sm font-bold text-brand-muted uppercase tracking-wider">
                  设计
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Photoshop", "Illustrator", "Figma", "Indesign"].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-brand-cream text-brand-olive rounded-full text-sm font-semibold border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-brand-muted" />
                <h3 className="text-sm font-bold text-brand-muted uppercase tracking-wider">
                  AI
                </h3>
              </div>
              <div className="flex flex-col items-start gap-3">
                {[
                  "ChatGPT/Gemini等主流模型",
                  "Midjourney/lovart等AI绘画类工具",
                  "Trae/Google AI studio/GitHub等AI编程类工具"
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2.5 bg-brand-lime/20 text-brand-olive rounded-full text-sm font-semibold border border-brand-lime/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowContact(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowContact(false)} className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-brand-olive transition-colors">
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-3xl font-bold text-brand-olive mb-8">联系我</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-brand-cream rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Phone className="w-6 h-6 text-brand-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-lg font-bold text-brand-olive">18365220701</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-brand-cream rounded-2xl">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                    <Mail className="w-6 h-6 text-brand-olive" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-muted uppercase tracking-wider mb-1">Email</p>
                    <p className="text-lg font-bold text-brand-olive break-all">wangyudeng3926832@163.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
