export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <p className="text-slate-400 text-lg font-medium tracking-widest uppercase mb-3">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
          Zichen Zhang
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 mb-6">
          Data Analyst &amp; Machine Learning Engineer
        </p>

        {/* Bio */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
          MEng graduate from Western University. I transform raw data into actionable insights
          through statistical analysis, predictive modelling, and interactive dashboards —
          bridging the gap between complex data and clear business decisions.
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Python', 'SQL', 'R', 'Tableau', 'Power BI', 'TensorFlow', 'PyTorch', 'Git', 'AWS', 'GCP'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:text-white transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/Zichen_Zhang_Resume_1.pdf"
            download="Zichen_Zhang_Resume_1.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 font-medium text-sm hover:bg-indigo-500/20 hover:text-indigo-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
