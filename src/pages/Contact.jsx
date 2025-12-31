import React from 'react';
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaSquareUpwork, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-30 px-4 lg:px-30 bg-white dark:bg-slate-950 transition-colors duration-300">


      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-600/20" />
      </div>


      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Information Side */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's talk about your project
              </h3>

              <div className="space-y-6">
                {/* Contact Items */}
                {[
                  {
                    icon: <FaEnvelope />,
                    label: "Email",
                    val: "debnath.pradeep619@gmail.com",
                    href: "mailto:debnath.pradeep619@gmail.com"
                  },
                  {
                    icon: <FaPhoneAlt />,
                    label: "Phone",
                    val: "+91 6290005151",
                    href: "tel:+916290005151"
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Location",
                    val: "Kolkata, West Bengal, India",
                    href: null
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
                          {item.val}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Row */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/deepdeb" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/pradeepdebnath/" },
                  { icon: <FaXTwitter />, href: "https://x.com/pradeepdebnath_" },
                  { icon: <FaInstagram />, href: "https://www.instagram.com/pradeepdebnath_" },
                  { icon: <FaFacebookF />, href: "https://www.facebook.com/pradeep.debnath.73" },
                  { icon: <FaSquareUpwork />, href: "https://www.fiverr.com/debnath_pradeep" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <form id="contactForm" action="https://formspree.io/f/xjkrglgo" method="post" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white placeholder:text-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white placeholder:text-slate-400"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white placeholder:text-slate-400"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white placeholder:text-slate-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;