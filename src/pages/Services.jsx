import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Custom website development with modern technologies like React, Vue, and Node.js. Responsive design that works perfectly on all devices."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      desc: "Cross-platform mobile app development using React Native. High-performance apps for iOS and Android from a single codebase."
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interface design focused on user experience. Wireframing, prototyping, and user testing to create the perfect product."
    }
  ];

  return (
    <section id="services" className="relative py-20 lg:py-30 px-4 lg:px-30 bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20" />
      </div>


      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50 flex flex-col"
            >
              <div className='flex-grow'>
                {/* Icon Container */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center text-3xl rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {service.desc}
                </p>
              </div>

              {/* Learn More Link */}
              <div className='mt-auto'>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-sm uppercase tracking-widest text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
                </a>
              </div>

              {/* Decorative background glow for dark mode */}
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services