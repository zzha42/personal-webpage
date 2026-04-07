const categories = [
  {
    label: 'Data Analytics & BI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    accent: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL (MySQL / PostgreSQL / MS SQL)', level: 92 },
      { name: 'R', level: 78 },
      { name: 'Tableau', level: 88 },
      { name: 'Power BI', level: 85 },
    ],
  },
  {
    label: 'Machine Learning & AI',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'TensorFlow', level: 82 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-Learn', level: 88 },
      { name: 'Predictive Modelling', level: 85 },
      { name: 'Feature Engineering & PCA', level: 80 },
    ],
  },
  {
    label: 'Cloud & Tools',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    accent: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 80 },
      { name: 'AWS', level: 78 },
      { name: 'Git', level: 90 },
      { name: 'Jupyter Notebook', level: 92 },
      { name: 'Excel (Pivot Tables / Macros)', level: 85 },
    ],
  },
]

function SkillBar({ name, level, accent }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-padding bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className="mt-4 w-12 h-0.5 bg-indigo-500" />
        </div>

        {/* Category grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
            >
              {/* Accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cat.accent}`} />

              <div className="p-6">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.accent} p-0.5`}>
                    <div className="w-full h-full rounded-[7px] bg-slate-900 flex items-center justify-center text-slate-300">
                      {cat.icon}
                    </div>
                  </div>
                  <h3 className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${cat.accent}`}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-4">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} accent={cat.accent} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools row */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">Also proficient in</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
              'ETL Pipeline Design', 'Data Modelling & Indexing',
              'A/B Testing', 'Hypothesis Testing', 'KPI Tracking',
              'Distributed Computing', 'Agile / Scrum', 'Optuna',
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-400 border border-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
