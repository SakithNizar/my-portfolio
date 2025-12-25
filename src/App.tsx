import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
 Code2, 
  Layout, 
  Bug, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  Send,
  Cpu, 
  Database, 
  Globe, 
  Server, 
  Figma, 
  CheckCircle2,
  Terminal,
  Palette,
  Smartphone,
  ArrowLeft,
  ArrowRight,
  Upload,
  CreditCard,
  GitBranch,
  Lock,
  Cloud, 
  Gem, 
  PenTool,
  Award 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// --- Interfaces ---

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: boolean;
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

interface SkillBadgeProps {
  icon: LucideIcon;
  name: string;
  color?: string;
}

// --- Reusable Components ---

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-20">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="h-1 w-20 bg-blue-500 mt-4 rounded-full"
      />
    )}
  </div>
);

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hoverEffect = true, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" } : {}}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl relative overflow-hidden group ${className} ${onClick ? 'cursor-pointer' : ''}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </motion.div>
);

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon: Icon, name, color = "text-blue-400" }) => (
  <motion.div 
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors gap-3 min-w-[100px]"
  >
    <Icon className={`w-8 h-8 ${color}`} strokeWidth={1.5} />
    <span className="text-sm font-medium text-slate-300">{name}</span>
  </motion.div>
);

// --- PAGE COMPONENTS ---

const UiUxPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 pb-24">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <SectionHeading subtitle>All UI/UX Projects</SectionHeading>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Layout size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">FinTech Dashboard</h3>
            <p className="text-slate-400 text-sm mb-4">A complete redesign of a banking interface focusing on accessibility and dark mode aesthetics.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20">Figma</span>
            </div>
        </GlassCard>
        
        {/* Project 2 */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Smartphone size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Travel App</h3>
            <p className="text-slate-400 text-sm mb-4">User-centric mobile application design for travel planning and itinerary management.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">Adobe XD</span>
            </div>
        </GlassCard>

        {/* Project 3 (Placeholder for more) */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Palette size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Design System</h3>
            <p className="text-slate-400 text-sm mb-4">A comprehensive design system for a SaaS product including typography, color palettes, and components.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">Figma</span>
            </div>
        </GlassCard>
      </div>
    </div>
  );
};

const DevPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24 pb-24">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft size={20} /> Back to Home
      </button>
      <SectionHeading subtitle>All Engineering Projects</SectionHeading>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dev Project 1 */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Code2 size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">erce Platform</h3>
            <p className="text-slate-400 text-sm mb-4">Full-stack MERN application with Stripe payment integration.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">React</span>
               <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-300 border border-green-500/20">Node</span>
            </div>
        </GlassCard>

        {/* Dev Project 2 */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Bug size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">AutoTest Suite</h3>
            <p className="text-slate-400 text-sm mb-4">Automated testing framework using Selenium and Jest.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20">Selenium</span>
            </div>
        </GlassCard>

        {/* Dev Project 3 */}
        <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 bg-slate-800/50 rounded-xl mb-6 flex items-center justify-center">
               <Database size={48} className="text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Inventory API</h3>
            <p className="text-slate-400 text-sm mb-4">RESTful API built with Spring Boot for warehouse management.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-300 border border-green-500/20">Java</span>
               <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">SQL</span>
            </div>
        </GlassCard>
      </div>
    </div>
  );
};

// --- Main Portfolio Component ---

export default function App() {
  // State to manage the current view: 'home', 'uiux', or 'dev'
  const [currentView, setCurrentView] = useState<'home' | 'uiux' | 'dev'>('home');
  
  // REMOVED: const { scrollYProgress } = useScroll(); and const y = ... 
  // because they were unused and causing linter errors.

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form handling logic here
    alert("Message sent! (Demo)");
  };

  // Logic to render the correct page
  const renderContent = () => {
    if (currentView === 'uiux') return <UiUxPage onBack={() => setCurrentView('home')} />;
    if (currentView === 'dev') return <DevPage onBack={() => setCurrentView('home')} />;
    
    // Default: Render Home Page
    return (
      <>
        {/* --- Hero Section --- */}
        <section className="min-h-screen flex flex-col justify-center items-start pt-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-blue-400 font-medium mb-4"
              >
                <span className="h-px w-8 bg-blue-400"></span>
                <span>Hello, I'm</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Sakith<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Nizar.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 text-lg md:text-xl text-slate-400 mb-8 font-light"
              >
                <span className="flex items-center gap-2"><Layout size={20} className="text-blue-500" /> UI/UX Designer</span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-2"><Code2 size={20} className="text-green-500" /> Software Engineer</span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-2"><Bug size={20} className="text-red-500" /> QA Enthusiast</span>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-400 max-w-xl text-lg leading-relaxed mb-10"
              >
                Crafting digital experiences where <strong className="text-white">precision engineering</strong> meets <strong className="text-white">creative design</strong>. I build robust systems that feel effortless to use.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  View Work <ChevronDown size={18} />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Contact Me
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2 flex justify-center relative"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="absolute inset-4 bg-[#030712] rounded-full z-10 flex items-center justify-center border border-white/10 overflow-hidden">
                   <img src="/profile.jpg" alt="Profile" className="absolute inset-0 w-full h-full object-cover opacity-100 z-20" />
                   <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full z-30 pointer-events-none"></div>
                   <div className="absolute inset-8 border border-violet-500/20 rounded-full z-30 pointer-events-none"></div>
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] z-20"
                >
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          >
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* --- About Section (Bento Grid) --- */}
        <section id="about" className="py-24">
          <SectionHeading subtitle>About Me</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
            <GlassCard className="md:col-span-2 flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Globe size={24} /></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">My Journey</h3>
                  <p className="text-slate-400 leading-relaxed">
                    I am a passionate IT professional with a unique blend of creative and technical skills. 
                    My background in <span className="text-blue-300">Software Engineering</span> allows me to build powerful applications, while my eye for <span className="text-violet-300">UI/UX Design</span> ensures they are intuitive.
                  </p>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="bg-gradient-to-br from-blue-900/20 to-transparent border-blue-500/20">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-4">Education</h4>
                  <h3 className="text-xl font-bold text-white">Higher National Diploma</h3>
                  <p className="text-slate-400 text-sm mt-1">Information Technology</p>
                 
                </div>
              </div>
            </GlassCard>
            <GlassCard>
               <h4 className="text-sm uppercase tracking-widest text-orange-400 font-bold mb-4">Current Role</h4>
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                 <h3 className="text-lg font-bold text-white">Intern Software Engineer</h3>
               </div>
               <p className="text-slate-400 text-sm">Gamage Recruiters</p>
            </GlassCard>
            <GlassCard className="md:col-span-2">
               <h4 className="text-sm uppercase tracking-widest text-violet-400 font-bold mb-6">Core Competencies</h4>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['MERN Stack', 'Spring Boot', 'Figma UI', 'Auto Testing'].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 size={16} className="text-violet-500" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
               </div>
            </GlassCard>
          </div>
        </section>

         <section id="skills" className="py-24 relative">
          <SectionHeading subtitle>Tech Stack</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
             <SkillBadge icon={Figma} name="Figma" color="text-pink-400" />
             <SkillBadge icon={PenTool} name="Adobe XD" color="text-pink-500" />
             <SkillBadge icon={Gem} name="Sketch" color="text-yellow-500" />

             {/* Backend & DB */}
             <SkillBadge icon={Server} name="Node.js" color="text-green-500" />
             <SkillBadge icon={Server} name="Express.js" color="text-slate-400" />
             <SkillBadge icon={Cpu} name="Spring Boot" color="text-green-400" />
             <SkillBadge icon={Database} name="MongoDB" color="text-green-500" />
             <SkillBadge icon={Database} name="MySQL" color="text-blue-500" />
             <SkillBadge icon={Lock} name="JWT Auth" color="text-red-400" />

             {/* Tools & Deploy */}
             <SkillBadge icon={GitBranch} name="Git" color="text-orange-500" />
             <SkillBadge icon={Github} name="GitHub" color="text-white" />
             <SkillBadge icon={Terminal} name="Postman" color="text-orange-400" />
             <SkillBadge icon={Cloud} name="Vercel/Render/Railway" color="text-white" />
             <SkillBadge icon={Upload} name="Multer" color="text-yellow-200" />
             <SkillBadge icon={Mail} name="Nodemailer/JavaMail" color="text-blue-300" />
             <SkillBadge icon={CreditCard} name="Stripe/PayHere" color="text-purple-400" />
          </div>
        </section>

        {/* --- Experience Timeline --- */}
        <section id="experience" className="py-24">
           <SectionHeading subtitle>Experience</SectionHeading>
           <div className="relative pl-8 md:pl-0 md:max-w-3xl mx-auto space-y-12">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-700 to-transparent transform -translate-x-1/2"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:w-1/2 md:pr-12 ml-6 md:ml-0 md:text-right"
              >
                 <div className="absolute left-[-24px] md:left-full md:-translate-x-1/2 top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#030712] shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
                 <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                 <div className="text-blue-400 text-sm font-medium mb-2">Gamage Recruiters • Present</div>
                 <p className="text-slate-400 text-sm leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 inline-block text-left">
                    Developing scalable web applications using React and Spring Boot. Collaborating with cross-functional teams.
                 </p>
              </motion.div>
           </div>
        </section>

        {/* --- PROJECTS SECTION (WITH BUTTONS TO SWITCH PAGES) --- */}
        <section id="projects" className="py-24">
          <SectionHeading subtitle>Featured Work</SectionHeading>
          
          <div className="mb-20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-pink-500/20 rounded-lg"><Palette className="text-pink-400" size={24} /></div>
                UI/UX Design
              </h3>
              <button onClick={() => setCurrentView('uiux')} className="text-sm text-slate-400 hover:text-white flex items-center gap-1 transition-colors group">
                See More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="FinTech Dashboard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Employee Management System Dashboard</h3>
            <p className="text-slate-400 text-sm mb-4">A complete redesign of a banking interface focusing on accessibility and dark mode aesthetics.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-pink-500/10 text-pink-300 border border-pink-500/20">Figma</span>
            </div>
        </GlassCard>
              <GlassCard className="group" hoverEffect={false}>
            <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" alt="Travel App" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">E-Commerce Portal</h3>
            <p className="text-slate-400 text-sm mb-4">User-centric mobile application design for travel planning and itinerary management.</p>
            <div className="flex gap-2">
               <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">Figma</span>
            </div>
        </GlassCard>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg"><Terminal className="text-blue-400" size={24} /></div>
                Web Development
              </h3>
              <button onClick={() => setCurrentView('dev')} className="text-sm text-slate-400 hover:text-white flex items-center gap-1 transition-colors group">
                See More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="group" hoverEffect={false}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80" alt="E-Commerce" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Food Booking Platform</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">Full-stack MERN application.</p>
               </GlassCard>


               
               <GlassCard className="group" hoverEffect={false}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <div className="h-48 rounded-xl mb-6 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="AutoTest Suite" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Online Shopping System</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">Automated testing framework using Selenium.</p>
               </GlassCard>
            </div>
          </div>

        </section>

         {/* --- Certifications Section --- */}
        <section id="certifications" className="py-24 relative">
           <SectionHeading subtitle>Certifications & Awards</SectionHeading>
           <div className="grid md:grid-cols-2 gap-6">
              <GlassCard className="flex flex-row items-center gap-4 group hover:bg-white/5 transition-colors">
                 <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-400 group-hover:scale-110 transition-transform">
                    <Award size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Web Development Bootcamp</h3>
                    <p className="text-slate-400 text-sm">Udemy • Issued 2023</p>
                 </div>
              </GlassCard>

              <GlassCard className="flex flex-row items-center gap-4 group hover:bg-white/5 transition-colors">
                 <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                    <Award size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Oracle Certified Associate, Java SE 8</h3>
                    <p className="text-slate-400 text-sm">Oracle • Issued 2022</p>
                 </div>
              </GlassCard>

              <GlassCard className="flex flex-row items-center gap-4 group hover:bg-white/5 transition-colors">
                 <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400 group-hover:scale-110 transition-transform">
                    <Award size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Google UX Design Professional Certificate</h3>
                    <p className="text-slate-400 text-sm">Coursera • Issued 2023</p>
                 </div>
              </GlassCard>
              
               <GlassCard className="flex flex-row items-center gap-4 group hover:bg-white/5 transition-colors">
                 <div className="p-3 bg-green-500/20 rounded-xl text-green-400 group-hover:scale-110 transition-transform">
                    <Award size={32} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">Agile Project Management</h3>
                    <p className="text-slate-400 text-sm">Google • Issued 2024</p>
                 </div>
              </GlassCard>
           </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-24 md:max-w-4xl mx-auto">
           <GlassCard className="relative overflow-hidden">
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-30"></div>
             <div className="grid md:grid-cols-2 gap-12 relative z-10">
               <div>
                 <h2 className="text-3xl font-bold text-white mb-4">Let's create something amazing.</h2>
                 <div className="space-y-4">
                    <a href="mailto:sakithmohamed54@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                       <div className="p-3 bg-blue-500/20 rounded-full text-blue-400"><Mail size={20} /></div>
                       <div className="text-white">sakithmohamed54@gmail.com</div>
                    </a>
                    <a href="https://www.linkedin.com/in/mohamedsakith/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                       <div className="p-3 bg-blue-500/20 rounded-full text-blue-400"><Linkedin size={20} /></div>
                       <div className="text-white">Sakith Nizar</div>
                    </a>
                 </div>
               </div>
               <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" placeholder="Your name" />
                  <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" placeholder="your@email.com" />
                  <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white" placeholder="Message..."></textarea>
                  <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg font-bold text-white flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
               </form>
             </div>
           </GlassCard>
        </section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-violet-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-6 shadow-lg"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={currentView === 'home' ? item.href : '#'} 
              onClick={() => { if(currentView !== 'home') setCurrentView('home'); }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" onClick={() => setCurrentView('home')} className="text-sm font-bold text-blue-400 hover:text-blue-300 ml-2">
            Let's Talk
          </a>
        </motion.div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 pb-24">
        {renderContent()}
        
        {/* Footer */}
        <footer className="text-center text-slate-600 text-sm py-12 border-t border-white/5">
          <p>© {new Date().getFullYear()} Sakith Nizar. Designed & Built with React.</p>
        </footer>
      </main>
    </div>
  );
}