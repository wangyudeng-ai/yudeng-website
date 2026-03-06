import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Sparkles, MapPin, Code, PenTool, X, ChevronRight } from "lucide-react";

export default function ResumeSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "【代表项目1】拍照批改功能（从0到1能力搭建）",
      bgTarget: "为快速占领用户“作业检查”核心场景，从0到1搭建拍照批改功能，打通拍批的基础链路。",
      actions: [
        {
          title: "核心链路搭建与异常兜底",
          desc: "梳理“拍批功能”流程，定义关键状态与跳转规则，上线“实时进度卡片”前台化进度展示；补齐异常提示等特殊状态，提升首用可用性，降低链路断点。"
        },
        {
          title: "结果页架构设计与解题迭代",
          desc: "设计“答案-视频-解析”三层结构，统一展示口径并支持追问承接，提升学习闭环体验；随AI讲题技术迭代，优化”解析”结构设计，贴近真人教师讲题。"
        },
        {
          title: "交付与质量闭环",
          desc: "产出prd/原型/对接清单/验收用例，搭建埋点漏斗与badcase回收机制，按“复现-归因-修复”推进线上问题闭环，持续优化中间态与兜底策略，降低链路流失。"
        }
      ],
      result: "通过进校、图书履约与社群引流完成冷启动，上线约2个月APP日活峰值达到8w；沉淀拍照批改异常兜底策略、题型展示口径与验收体系，为后续AI讲题与会员承接能力扩展提供复用框架。"
    },
    {
      id: 2,
      title: "【代表项目2】AI拍照讲题",
      bgTarget: "面向K12高频拍题讲解场景，引入大模型提升讲题供给效率与质量，形成AI讲题稳定交付体系。",
      actions: [
        {
          title: "供应链提效与稳定交付",
          desc: "搭建“AI前置生产+人工审核兜底”的讲题供应链，与研发共建生产/审核分发/异常兜底机制，保障高峰期端到端30分钟稳定交付。"
        },
        {
          title: "体验策略与转化承接",
          desc: "针对等待流失现状，基于教学场景拆解SOP，设计“审题/圈画题干信息/考点与方法判断”等前置交互，降低等候焦虑提升参与感，；按学段构建两套体验策略（小低习惯培养、小高/初中应试赋能）提升专业感与可用性。"
        },
        {
          title: "质量标准化与数据闭环",
          desc: "与教研沉淀小学数学讲题模板与标准讲解结构，完成200套标准讲题模版，覆盖80%+题型，推进“模板+数据标注+模型微调”的垂直优化；并建立多维评测指标（思路清晰度/步骤完整度/定理准确度/板书条理等）用以模型迭代与持续优化。"
        }
      ],
      result: "AI讲题覆盖多平台日均13w+用户，实现日均讲题77w；数学讲题覆盖率约50%，视频等待交互优化后，退出率下降4.6%；数学学科中，用户满意度高于真人讲题2.3%。同时沉淀标准模板与评测体系，形成可复用的数据与优化闭环。"
    },
    {
      id: 3,
      title: "【代表项目】《3分钟漫画速背小学古诗词》产品策划及生产管理",
      bgTarget: "基于小学低幼用户心智特点，分析存量市场竞争格局，引入用户调研分析实际需求，策划漫画古诗词类产品。",
      actions: [
        {
          title: "敏捷出版与跨部门协同",
          desc: "主导新品70天极速出版上市，利用甘特图等流程看板管理，高效协调设计、印刷、出版、审校等多部门完成300+页高质量内容交付。"
        },
        {
          title: "AI技术赋能增效",
          desc: "引入Claude、Gpt等模型辅助漫画脚本生产，高效完成120+漫画脚本，整体提效30%以上，并形成可复用方法论。"
        },
        {
          title: "产品营销卖点及全周期运营",
          desc: "深度拆解产品卖点，协调短视频制定差异化短视频要点提炼，做好产品上市后的全周期工作。"
        }
      ],
      result: "具备高压环境下统筹全局能力和跨部门协调能力，实现新品快速落地，驱动单品财年900w+营收增长，展现高压环境下的统筹与跨部门协同能力。"
    }
  ];

  const timelineRows = [
    {
      id: 1,
      main: {
        date: '2025.1 - 2026.2',
        title: '小思AI教育产品经理',
        description: '在小思AI担任产品经理一职，完成AI在教育场景下功能的落地，推动业务增长。',
        icon: Briefcase
      },
      side: null
    },
    {
      id: 2,
      main: {
        date: '2024.3 - 2025.1',
        title: '学而思图书-内容产品管培生',
        description: '校招进入学而思图书，负责产品策划与内容生产环节，职业观逐步形成。',
        icon: Briefcase
      },
      side: [
        {
          title: '探索AI辅助设计',
          description: '利用Midjourney生成高质量珠宝摄影图片，提供珠宝视觉呈现方案，累计落地8款方案。',
          icon: Sparkles
        }
      ]
    },
    {
      id: 3,
      main: {
        date: '2020.9 - 2023.7',
        title: '北京工业大学-硕士',
        description: '跨专业上岸设计学硕士，主修视觉传达设计，提升产品交互与设计能力。',
        icon: GraduationCap
      },
      side: [
        {
          title: '一线教学经验沉淀',
          description: '先后在北京一六一中学、十三中、清华附小昌平学校、中科启元学校实习授课，深入一线理解教育场景。',
          icon: MapPin
        },
        {
          title: '字节跳动-AI写字课实习生',
          description: '首次大厂实习，通过学前写字项目，初步理解AI赋能教育的可能。',
          icon: Code
        }
      ]
    },
    {
      id: 4,
      main: null,
      side: [
        {
          title: '野生设计师养成',
          description: '自学各类设计软件，承接独立设计项目，积累视觉设计经验，培养了敏锐的设计直觉。',
          icon: PenTool
        }
      ]
    },
    {
      id: 5,
      main: {
        date: '2015.9 - 2019.7',
        title: '安徽省淮北师范大学-本科',
        description: '书法学专业，精进书法艺术中。',
        icon: GraduationCap
      },
      side: null
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-24"
    >
      {/* Work Experience Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-olive">工作经历</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-brand-olive">
                  北京学而思教育科技有限公司
                </h3>
                <p className="text-xl text-brand-muted mt-2">产品经理（小思AI）</p>
              </div>
              <span className="px-5 py-2.5 bg-brand-cream rounded-full text-sm font-bold text-brand-olive">
                2025.1 - 2026.2
              </span>
            </div>
            <ul className="space-y-4 text-brand-muted text-lg mb-8">
              <li className="flex gap-4">
                <span className="text-brand-lime mt-1 text-xl">✦</span>
                <span className="leading-relaxed">
                  负责核心功能拍照批改的搭建，冷启动后2个月，日活峰值达8w。
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-lime mt-1 text-xl">✦</span>
                <span className="leading-relaxed">
                  负责AI讲题功能探索与数学讲题模版的搭建，推进“模板+数据标注+模型微调”的垂直优化，并建立多维评测指标。
                </span>
              </li>
            </ul>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.filter(p => p.id === 1 || p.id === 2).map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center justify-between p-5 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-lime hover:bg-brand-lime/10 transition-colors group text-left"
                >
                  <span className="font-bold text-brand-olive group-hover:text-brand-lime-hover transition-colors">
                    {project.title}
                  </span>
                  <ChevronRight className="w-5 h-5 text-brand-muted group-hover:text-brand-lime-hover transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Second Company Role */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-brand-olive">
                  北京学而思教育科技有限公司
                </h3>
                <p className="text-xl text-brand-muted mt-2">内容产品管培生（学而思图书）</p>
              </div>
              <span className="px-5 py-2.5 bg-brand-cream rounded-full text-sm font-bold text-brand-olive">
                2024.3 - 2025.1
              </span>
            </div>
            <ul className="space-y-4 text-brand-muted text-lg mb-8">
              <li className="flex gap-4">
                <span className="text-brand-lime mt-1 text-xl">✦</span>
                <span className="leading-relaxed">
                  <strong className="text-brand-olive">【新品策划/PMF验证】</strong>围绕用户痛点搭建“定性+定量”验证体系；完成60+次访谈（40+小时），触达400+目标用户，输出需求洞察/竞品分析/立项方案，支撑新品选题与立项决策。
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-lime mt-1 text-xl">✦</span>
                <span className="leading-relaxed">
                  <strong className="text-brand-olive">【高价值用户运营】</strong>多轮招募沉淀一二线城市“精致妈妈”私域社群，建立用户调研SOP与样本库，为选题与内容迭代提供持续输入。
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-brand-lime mt-1 text-xl">✦</span>
                <span className="leading-relaxed">
                  <strong className="text-brand-olive">【内容生产与商业结果】</strong>负责12册图书内容生产与上线管理，累计销量72万+，累计GMV 3200万+。
                </span>
              </li>
            </ul>

            <div className="grid sm:grid-cols-1 gap-4">
              {projects.filter(p => p.id === 3).map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project.id)}
                  className="flex items-center justify-between p-5 rounded-2xl bg-brand-cream border border-gray-100 hover:border-brand-lime hover:bg-brand-lime/10 transition-colors group text-left"
                >
                  <span className="font-bold text-brand-olive group-hover:text-brand-lime-hover transition-colors">
                    {project.title}
                  </span>
                  <ChevronRight className="w-5 h-5 text-brand-muted group-hover:text-brand-lime-hover transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-olive">里程碑</h2>
          <p className="text-xl text-brand-muted mt-3">
            涵盖大学至今的主要事件
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-olive/10 -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {timelineRows.map((row) => (
              <div key={row.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-cream border-4 border-brand-olive rounded-full items-center justify-center z-10 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <div className="w-3 h-3 bg-brand-lime rounded-full"></div>
                </div>

                <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-brand-olive/10"></div>
                <div className="md:hidden absolute left-[1.125rem] top-6 w-4 h-4 bg-brand-lime rounded-full border-4 border-brand-cream z-10"></div>

                {row.main ? (
                  <div className="w-full md:w-[45%] pl-14 md:pl-0 md:pr-12 text-left md:text-right mb-8 md:mb-0">
                    <div className="flex flex-col md:items-end gap-3 mb-4">
                      <span className="inline-block px-4 py-1.5 bg-brand-olive text-brand-cream rounded-full text-sm font-bold w-max">
                        {row.main.date}
                      </span>
                      <h3 className="text-2xl font-bold text-brand-olive flex items-center md:justify-end gap-2">
                        <row.main.icon className="w-6 h-6 text-brand-muted order-first md:order-last" />
                        主线：{row.main.title}
                      </h3>
                    </div>
                    <p className="text-lg text-brand-muted leading-relaxed">
                      {row.main.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block w-[45%]"></div>
                )}

                {row.side ? (
                  <div className="w-full md:w-[45%] pl-14 md:pl-12 text-left space-y-6">
                    {row.side.map((s, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-lime"></div>
                        <h4 className="text-xl font-bold text-brand-olive mb-3 flex items-center gap-2">
                          <s.icon className="w-5 h-5 text-brand-lime" />
                          支线：{s.title}
                        </h4>
                        <p className="text-brand-muted leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="hidden md:block w-[45%]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-dark/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-brand-cream/50 sticky top-0 z-10">
                <h3 className="text-2xl font-bold text-brand-olive">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <button onClick={() => setSelectedProject(null)} className="p-2 bg-white hover:bg-gray-100 rounded-full text-brand-olive transition-colors shadow-sm">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 md:p-10 overflow-y-auto hide-scrollbar space-y-10">
                {/* 背景与目标 */}
                <div>
                  <h4 className="text-lg font-bold text-brand-olive mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-brand-lime rounded-full"></div>
                    背景 & 目标
                  </h4>
                  <p className="text-brand-muted leading-relaxed text-lg bg-brand-cream/30 p-6 rounded-2xl">
                    {projects.find(p => p.id === selectedProject)?.bgTarget}
                  </p>
                </div>

                {/* 关键动作 */}
                <div>
                  <h4 className="text-lg font-bold text-brand-olive mb-6 flex items-center gap-2">
                    <div className="w-2 h-6 bg-brand-lime rounded-full"></div>
                    关键动作
                  </h4>
                  <div className="space-y-6">
                    {projects.find(p => p.id === selectedProject)?.actions.map((action, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-cream text-brand-olive font-bold flex items-center justify-center shrink-0 mt-1">
                          {idx + 1}
                        </div>
                        <div>
                          <strong className="block text-brand-olive text-lg mb-2">{action.title}</strong>
                          <p className="text-brand-muted leading-relaxed">{action.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 项目结果 */}
                <div>
                  <h4 className="text-lg font-bold text-brand-olive mb-4 flex items-center gap-2">
                    <div className="w-2 h-6 bg-brand-lime rounded-full"></div>
                    项目结果
                  </h4>
                  <div className="bg-brand-olive text-brand-cream p-6 md:p-8 rounded-3xl shadow-md">
                    <p className="leading-relaxed text-lg">
                      {projects.find(p => p.id === selectedProject)?.result}
                    </p>
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
