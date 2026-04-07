const roles = [
  {
    title: 'Machine Learning / Data Engineer',
    type: 'Internship',
    company: 'Vosyn',
    period: 'Sep 2024 – Mar 2025',
    location: 'Remote',
    bullets: [
      'Designed and optimised end-to-end ETL pipelines in Python and SQL on Google Cloud Platform (GCP), improving data processing throughput by 30%.',
      'Fine-tuned the Stable Whisper model for multilingual transcription (EN, ES, FR), reducing Word Error Rate (WER) to 14% through hyperparameter tuning with Optuna and targeted noise-reduction techniques.',
      'Built data preprocessing pipelines to normalise and clean large multilingual audio datasets, ensuring consistency across downstream model training.',
      'Conducted feature engineering and rigorous model evaluation using cross-validation, accelerating iteration cycles.',
    ],
    tags: ['Python', 'SQL', 'GCP', 'ETL', 'PyTorch', 'Optuna'],
  },
  {
    title: 'Data Analyst',
    type: 'Internship',
    company: 'GFL Environment Inc.',
    period: 'May 2023 – Aug 2023',
    location: 'London, ON, Canada',
    bullets: [
      'Designed and implemented complex SQL queries to extract, clean, and transform raw operational and financial data from multiple sources, improving data accessibility by 40%.',
      'Developed interactive dashboards in Tableau and Power BI to visualise KPIs, production efficiency, and revenue trends — reducing manual reporting effort by 23%.',
      'Conducted statistical analysis and built forecasting models to predict monthly performance trends, directly informing investment planning decisions.',
      'Analysed large operational datasets to surface trends, patterns, and key performance drivers supporting strategic decision-making.',
    ],
    tags: ['SQL', 'Tableau', 'Power BI', 'Python', 'Statistical Analysis'],
  },
]

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-padding bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="mt-4 w-12 h-0.5 bg-indigo-500" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800 hidden md:block" />

          <div className="flex flex-col gap-10">
            {roles.map((role, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center text-indigo-400">
                  <BriefcaseIcon />
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-indigo-400 font-medium text-sm">{role.company}</span>
                        <span className="text-slate-700">·</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium whitespace-nowrap">
                        {role.period}
                      </span>
                      <span className="text-slate-600 text-xs">{role.location}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-4 border-t border-slate-800" />

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="text-indigo-500 mt-0.5 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-md bg-slate-800 text-slate-400 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
