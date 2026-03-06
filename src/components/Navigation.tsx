import { motion } from "motion/react";
import { User, Briefcase, Image as ImageIcon, Code2 } from "lucide-react";

export default function Navigation({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (s: string) => void;
}) {
  const navItems = [
    { id: "home", label: "首页", icon: User },
    { id: "resume", label: "简历", icon: Briefcase },
    { id: "products", label: "产品", icon: Code2 },
    { id: "portfolio", label: "作品", icon: ImageIcon },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit">
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-full p-1.5 flex items-center gap-1 overflow-x-auto hide-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                isActive
                  ? "text-brand-cream"
                  : "text-brand-olive hover:text-brand-olive-light hover:bg-white/50"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-olive rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
