import { useState } from 'react'

const degrees = [
  {
    degree: 'Master of Engineering',
    field: 'Electrical & Computer Engineering — Software Engineering',
    school: 'Western University',
    location: 'London, ON, Canada',
    period: 'Sep 2023 – Sep 2024',
    cgpa: '3.7 / 4.0',
    highlights: [
      'Coursework: Machine Learning, Advanced Image Processing, Data Analytics, Artificial Intelligence, Data Management',
    ],
    accolades: [],
    image: '/meng-certification.png',
    imageLabel: 'MEng Certification',
  },
  {
    degree: 'Bachelor of Engineering Science',
    field: 'Software Engineering — Graduated with Distinction',
    school: 'Western University',
    location: 'London, ON, Canada',
    period: 'Sep 2018 – May 2023',
    cgpa: '3.7 / 4.0',
    highlights: [],
    accolades: [
      { label: "President's Scholarship", year: '2018' },
      { label: "Dean's Honour List", year: '2021, 2022, 2023' },
    ],
    image: '/beng-diploma.png',
    imageLabel: 'BEng Diploma',
  },
]

const certifications = [
  {
    title: 'Google Data Analytics Certificate',
    issuer: 'Google',
    year: '2023',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.963 5.963 0 014.123 1.632l2.913-2.913A10.005 10.005 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
      </svg>
    ),
  },
  {
    title: 'AWS Certified Data Analytics – Specialty',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.19.08-.422.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.311a.365.365 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.406-.75.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.814-.415.304-.096.623-.144.95-.144.168 0 .343.008.51.024.176.016.336.048.495.08.152.04.296.08.43.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.142.167z"/>
      </svg>
    ),
  },
]

function TrophyIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M8 21h8m-4-4v4M5 3H3a2 2 0 000 4c0 2.21 1.343 4.122 3.25 4.874M19 3h2a2 2 0 010 4c0 2.21-1.343 4.122-3.25 4.874M5 3h14v5a7 7 0 01-14 0V3z"
      />
    </svg>
  )
}

function Lightbox({ src, label, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Close
        </button>

        {/* Image */}
        <img
          src={src}
          alt={label}
          className="w-full h-auto rounded-xl shadow-2xl shadow-black/60 border border-slate-700"
        />

        {/* Caption */}
        <p className="text-center text-slate-400 text-sm mt-4">{label}</p>
      </div>
    </div>
  )
}

export default function Education() {
  const [lightbox, setLightbox] = useState(null) // { src, label }

  return (
    <section id="education" className="py-24 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="mt-4 w-12 h-0.5 bg-indigo-500" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800 hidden md:block" />

          <div className="flex flex-col gap-10">
            {degrees.map((item, i) => (
              <div key={i} className="md:pl-14 relative">
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors">
                  {/* Two-column layout: details left, image right on md+ */}
                  <div className="flex flex-col md:flex-row">

                    {/* Left: degree details */}
                    <div className="flex-1 p-6">
                      {/* Top row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                        <div>
                          <h3 className="text-white font-semibold text-lg leading-snug">{item.degree}</h3>
                          <p className="text-indigo-400 font-medium text-sm">{item.field}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium whitespace-nowrap self-start">
                          {item.period}
                        </span>
                      </div>

                      {/* School */}
                      <p className="text-slate-500 text-sm mb-4">
                        {item.school} &mdash; {item.location}
                      </p>

                      {/* CGPA */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium mb-4">
                        <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        CGPA {item.cgpa}
                      </div>

                      {/* Coursework */}
                      {item.highlights.length > 0 && (
                        <ul className="space-y-1.5 mb-4">
                          {item.highlights.map((h, j) => (
                            <li key={j} className="flex gap-2 text-sm text-slate-400">
                              <span className="text-indigo-500 mt-0.5">›</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Accolades */}
                      {item.accolades.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.accolades.map((a, j) => (
                            <div
                              key={j}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                            >
                              <TrophyIcon />
                              {a.label}
                              <span className="text-indigo-500">{a.year}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: credential image */}
                    <div className="md:w-56 md:shrink-0 border-t border-slate-800 md:border-t-0 md:border-l">
                      <button
                        onClick={() => setLightbox({ src: item.image, label: item.imageLabel })}
                        className="group relative w-full h-44 md:h-full overflow-hidden bg-slate-800 flex items-center justify-center"
                        aria-label={`View ${item.imageLabel}`}
                      >
                        <img
                          src={item.image}
                          alt={item.imageLabel}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1.5 text-white">
                            <svg className="w-7 h-7 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            <span className="text-xs font-medium drop-shadow-lg">View Full Size</span>
                          </div>
                        </div>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  {cert.icon}
                </div>
                <div>
                  <p className="text-slate-200 text-sm font-medium leading-snug">{cert.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{cert.issuer} &middot; {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Languages</p>
            <div className="flex flex-wrap gap-2">
              {[
                { lang: 'English', level: 'Fluent' },
                { lang: 'Mandarin', level: 'Native' },
              ].map((l) => (
                <span key={l.lang} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium">
                  {l.lang}
                  <span className="text-slate-500">{l.level}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          label={lightbox.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
