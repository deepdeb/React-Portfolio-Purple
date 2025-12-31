import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      title: 'Skill Program Info & Enrollment Platform',
      desc: 'A full-featured website for a Skill Development Organization',
      img: 'images/Mediskills-Landing.png',
      link: 'https://mediskills.in/#/',
    },
    {
      id: 2,
      category: 'web',
      title: 'Ecommerce Website',
      desc: 'E-commerce website with product browsing, filter, and checkout.',
      img: 'images/Storify-landing.png',
      link: 'https://storify-c275.onrender.com/',
    },
    {
      id: 3,
      category: 'design',
      title: 'Analytics Dashboard',
      desc: 'Comprehensive analytics dashboard for financial performance tracking',
      img: 'images/nextjs-dashboard.png',
      link: 'https://next-realtime-dashboard-frontend.vercel.app/',
    },
    {
      id: 4,
      category: 'web',
      title: 'CRM Platform',
      desc: 'CRM website for an Electrical & Automation supplier company.',
      img: 'images/Sarthak-landing.png',
      link: 'https://sarthakcomponents.com/crm/#/',
    },
    {
      id: 5,
      category: 'web',
      title: 'Social Media Website',
      desc: 'Social media/Image sharing website for club goers.',
      img: 'images/Connectcircle-landing.png',
      link: '#', // Add real link if available
    },
    {
      id: 6,
      category: 'design',
      title: 'Yoga Landing Page',
      desc: 'Modern & clean Landing page design for a Yoga studio.',
      img: 'images/yoga-landing-page.png',
      link: 'images/yoga-landing-page.png',
    },
    {
      id: 7,
      category: 'web',
      title: 'Ecommify',
      desc: 'Next.js social commerce platform with optimized performance.',
      img: 'images/ecommify-landing.png',
      link: 'https://nextjs-ecom-murex.vercel.app/',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="relative py-20 lg:py-30 px-4 lg:px-30 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">


      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20" />
      </div>


      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
              My <span className="text-blue-600">Work</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl w-fit">
            {['all', 'web', 'app', 'design'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${filter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[300px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 animate-in fade-in zoom-in duration-500"
            >
              {/* Project Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2">
                    {project.desc}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/40"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;