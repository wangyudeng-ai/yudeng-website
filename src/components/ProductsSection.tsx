import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Code2, ChevronDown, ChevronUp } from 'lucide-react';

import coldlinkImg from '../assets/images/products/coldlink.jpg';
import userResearchImg from '../assets/images/products/user-research.jpg';

export default function ProductsSection() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      name: "Coldlink",
      shortDescription: "“拒绝监控缺失！我为老爸做了个冷库温度管理 App ⚡️\n这是我用 Vibe coding 模式极速跑通的第一个项目： ColdLink。",
      moreDescription: "针对冷库温度监控缺失的\"老大难\"问题，我把复杂的管理需求浓缩进了一个清爽的看板。\n全库位可视化：肉类、水果、蔬菜，各库温区一眼看穿。\n数据趋势分析：告别小本本，温度波动曲线全自动生成。\n云端实时同步：预警任务自动下发，异常状态秒感知。（还在建设中）\n从代码构建到域名绑定，ColdLink 证明了：场景+产品+AI，PM 一个人也能完成从 0 到 1 的完整上线。",
      url: "https://www.coldlink-app.top/",
      image: coldlinkImg,
      tags: ["Google AI studio", "vercel", "Codesandbox", "阿里云", "Gemini"]
    },
    {
      id: 2,
      name: "User Research 用户研究",
      shortDescription: "旨在将用户研究数据（访谈、问卷、焦点小组）散落在文档、表格及第三方平台导致的信息孤岛问题。通过结构化的项目管理逻辑，实现用户调研资产的沉淀与复用。",
      moreDescription: "",
      url: "https://wangyudeng-ai.github.io/user-research-workbench/",
      image: userResearchImg,
      tags: ["Trae", "GitHub", "Gemini", "阿里云"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-16"
    >
      <section>
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-brand-olive">我的vibe coding产品</h2>
          <p className="text-xl text-brand-muted mt-3">
            不要只是想象产品，要让它真实发生。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const isExpanded = expandedIds.includes(product.id);
            
            return (
              <div key={product.id} className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-500 transform hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 relative overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <Code2 className="w-4 h-4 text-brand-olive" />
                    <span className="text-xs font-bold text-brand-olive uppercase tracking-wider">Vibe Coding</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-olive mb-4">{product.name}</h3>
                  
                  <div className="mb-8 flex-grow">
                    <p className="text-lg text-brand-muted leading-relaxed whitespace-pre-line">
                      {product.shortDescription}
                    </p>
                    
                    {product.moreDescription && (
                      <>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, marginTop: 0 }}
                              animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                              exit={{ height: 0, opacity: 0, marginTop: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-lg text-brand-muted leading-relaxed whitespace-pre-line">
                                {product.moreDescription}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        <button 
                          onClick={() => toggleExpand(product.id)}
                          className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-brand-olive transition-colors"
                        >
                          {isExpanded ? (
                            <>收起详情 <ChevronUp className="w-4 h-4" /></>
                          ) : (
                            <>展开更多 <ChevronDown className="w-4 h-4" /></>
                          )}
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-brand-cream text-brand-olive rounded-full text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-olive text-brand-cream rounded-full font-bold hover:bg-brand-olive-light transition-colors group/btn mt-auto"
                  >
                    访问网页
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
