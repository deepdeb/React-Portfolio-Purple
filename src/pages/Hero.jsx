import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-25 lg:pt-35 pb-20 lg:pb-30 px-4 lg:px-30 flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge-style text */}
          <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Available for Projects
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Pradeep Debnath
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Kolkata based coder running on <span className="text-amber-600 font-semibold italic">chai</span>, chaos, and 
            <code className="mx-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-pink-500 text-base">console.logs</code>. 
            I build sleek web apps and spend 2 hours asking, "Who wrote this crap?" 
            <span className="italic opacity-70"> — Spoiler: me. :')</span>
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="contact"
              className="group relative w-full sm:w-auto px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-full overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <a
              href="/docs/pradeepcv3.pdf"
              download
              className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 font-bold rounded-full hover:border-blue-500 transition-all active:scale-95"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;