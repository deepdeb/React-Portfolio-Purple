import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-center items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium tracking-wide text-center">
            &copy; 
            <span className="text-slate-900 dark:text-slate-200"> {year}</span>
            <span className="font-bold text-slate-900 dark:text-white uppercase tracking-tighter mx-1">
              {" "}Pradeep Debnath
            </span>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer