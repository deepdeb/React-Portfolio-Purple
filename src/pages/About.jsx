import React, { useState } from 'react';
import { FaBriefcase, FaCode, FaMobileAlt, FaPaintBrush, FaServer, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <section id="about" className="relative py-20 lg:py-30 px-4 lg:px-30 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">


      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20" />
      </div>


      <div className="container mx-auto px-6">

        {/* About Me Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* About Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Fullstack Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 text-lg">
              With over 2.5 years of experience in web development, I've worked on diverse projects from
              enterprise applications to innovative startups. My passion lies in creating efficient, scalable
              solutions that deliver exceptional user experiences.
            </p>

            {/* Skills, Experience and Education Tabs */}
            <div className="flex gap-6 border-b border-slate-200 dark:border-slate-800 mb-8">
              {['skills', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab
                      ? 'text-blue-600'
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content: Skills */}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {[
                  { icon: <FaCode />, title: "Frontend", desc: "React, Vue, JS, TS" },
                  { icon: <FaServer />, title: "Backend", desc: "Node.js, Express, SQL" },
                  { icon: <FaMobileAlt />, title: "Mobile", desc: "React Native" },
                  { icon: <FaPaintBrush />, title: "UI/UX", desc: "Figma, Tailwind CSS" },
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-hover hover:border-blue-500/50">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{skill.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content: Experience */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {[
                  { title: "Fullstack Developer", company: "Tech India", date: "Oct 2025 - Present", desc: "Built modern web applications with React, Node.js, and SQL." },
                  { title: "Fullstack Developer", company: "Microbase Infotech", date: "Apr 2024 - Sept 2025", desc: "Developed end-to-end solutions using TS and Tailwind." },
                  { title: "Software Developer", company: "SAP Labs", date: "Feb 2017 - Dec 2017", desc: "Built performant React applications with REST APIs." },
                ].map((exp, idx) => (
                  <div key={idx} className="flex gap-4 relative pb-6 border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-8 last:pb-0">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white leading-none mb-1">{exp.title}</h4>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{exp.company} | {exp.date}</span>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Content: Education */}
            {activeTab === 'education' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 flex gap-5 items-center">
                  <div className="p-4 bg-amber-100 dark:bg-amber-900/20 text-amber-600 rounded-2xl text-2xl">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">B.Tech in Electrical Engineering</h4>
                    <p className="text-blue-600 font-bold text-sm">GNIT (2012 - 2016)</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Graduated with CGPA 7.069</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-blue-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-2xl">
              <img
                src="images/me.png"
                alt="Pradeep Debnath"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;