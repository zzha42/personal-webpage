const featured = [
  {
    title: 'Intelligent Email Management Solution',
    period: 'Jan 2024 – Apr 2024',
    role: 'Scrum Master & ML Engineer',
    summary:
      'Led an Agile team as Scrum Master to deliver an NLP-powered email triage system that automatically classifies, prioritises, and routes incoming messages — cutting manual review time significantly.',
    highlights: [
      'Served as Scrum Master: facilitated sprints, managed backlog, and coordinated a cross-functional team of 5 using Agile/Scrum ceremonies.',
      'Engineered an NLP pipeline using transformer-based text classification to categorise emails by intent and urgency with high precision.',
      'Built a preprocessing module to handle noise, tokenisation, and stopword removal across diverse email corpora.',
      'Integrated the model into an end-to-end workflow with automated routing logic, reducing manual triage overhead.',
    ],
    tags: ['Python', 'NLP', 'Transformers', 'Scikit-Learn', 'Agile / Scrum'],
    github: '#',
    demo: null,
    accent: 'from-indigo-500 to-violet-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Apple Quality Prediction',
    period: 'Sep 2023 – Dec 2023',
    role: 'ML Engineer',
    summary:
      'Developed a machine learning classification system to predict apple quality from physical and chemical attributes, achieving 88% accuracy — enabling data-driven quality-control decisions in agri-food pipelines.',
    highlights: [
      'Achieved 88% classification accuracy by benchmarking Random Forest, Gradient Boosting, and SVM models with rigorous cross-validation.',
      'Performed feature engineering and PCA-based dimensionality reduction to isolate the most predictive quality indicators.',
      'Applied SMOTE oversampling to address class imbalance and improve recall on minority quality classes.',
      'Visualised decision boundaries and feature importances using Matplotlib and Seaborn to communicate model behaviour to stakeholders.',
    ],
    tags: ['Python', 'Scikit-Learn', 'Random Forest', 'SVM', 'PCA', 'Pandas'],
    github: '#',
    demo: null,
    accent: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Superstore Data Analysis & Visualization',
    period: 'Sep 2024 – Dec 2024',
    role: 'Data Analyst',
    summary:
      'End-to-end data analysis project on a large retail superstore dataset — from schema design and ETL to time-series forecasting and interactive visualisation — surfacing actionable insights for inventory and revenue strategy.',
    highlights: [
      'Developed a comprehensive data analysis and visualisation solution to derive business insights and optimise decision-making.',
      'Designed and implemented a normalised SQL schema to efficiently manage superstore data, improving query performance.',
      'Created an Entity-Relationship Diagram (ERD) to define and model key data relationships across products, customers, and orders.',
      'Built and executed complex SQL queries to extract, transform, and load (ETL) data, ensuring data integrity and consistency.',
      'Conducted time-series analysis to identify sales trends and seasonal patterns for revenue forecasting.',
      'Performed categorical analysis to compare sales and profit margins across product categories, improving inventory strategies.',
      'Utilised Python (Pandas, Matplotlib, Seaborn) for correlation analysis and advanced data visualisation.',
      'Developed and evaluated a predictive model using linear regression to forecast future sales, aiding strategic business planning.',
    ],
    tags: ['SQL', 'Python', 'Tableau', 'Pandas', 'Matplotlib', 'Seaborn', 'Linear Regression', 'ERD'],
    github: '#',
    demo: null,
    accent: 'from-amber-500 to-orange-500',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="mt-4 w-12 h-0.5 bg-indigo-500" />
        </div>

        {/* Featured cards — stacked full-width */}
        <div className="flex flex-col gap-8">
          {featured.map((project, i) => (
            <div
              key={project.title}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />

              <div className="p-7 md:p-8">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.accent} p-0.5 shrink-0`}>
                      <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center text-slate-300">
                        {project.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-slate-500 text-xs">{project.period}</span>
                        <span className="text-slate-700">·</span>
                        <span className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${project.accent}`}>
                          {project.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Links */}
                  <div className="flex gap-3 text-slate-600 group-hover:text-slate-400 transition-colors shrink-0">
                    {project.github && (
                      <a href={project.github} className="hover:text-white transition-colors" aria-label="GitHub">
                        <GitHubIcon />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="hover:text-white transition-colors" aria-label="Live demo">
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Two-column bullet list on md+ */}
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-slate-400 leading-relaxed">
                      <span className={`mt-0.5 shrink-0 text-transparent bg-clip-text bg-gradient-to-r ${project.accent} font-bold`}>›</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-slate-400 border border-slate-700"
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
    </section>
  )
}
