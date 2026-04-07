const contactItems = [
  {
    label: 'Email',
    value: 'Zhangzichen118@gmail.com',
    href: 'mailto:Zhangzichen118@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Mobile',
    value: '+1 (647) 533-5998',
    href: 'tel:+16475335998',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'zichen-zhang-a625061bb',
    href: 'https://www.linkedin.com/in/zichen-zhang-a625061bb',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 py-20 section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            I&apos;m currently open to full-time Data Analyst and ML Engineering roles.
            Reach out through any channel below — I reply within 24 hours.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-3 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 text-center"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-slate-300 text-sm font-medium break-all">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-12">
          <a
            href="mailto:Zhangzichen118@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me an Email
          </a>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-600 text-sm">
          <p>
            Designed &amp; built by{' '}
            <span className="text-slate-400 font-medium">Zichen Zhang</span>{' '}
            &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
