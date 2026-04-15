import { footerData } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-athens border-t border-gainsboro">
      {/* Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[200px_repeat(auto-fit,minmax(0,1fr))] gap-x-8 gap-y-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center">
              <img src="/svg/aftra-logomark.svg" alt="Aftra" className="h-8 w-8" />
            </a>
          </div>

          {/* Sitemap columns */}
          {footerData.sitemap.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold text-steel uppercase tracking-wider mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-n-steel-6 hover:text-steel transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal column */}
          <div>
            <h3 className="text-xs font-semibold text-steel uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerData.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-n-steel-6 hover:text-steel transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h3 className="text-xs font-semibold text-steel uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerData.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-n-steel-6 hover:text-steel transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:hello@aftra.io" className="text-sm text-n-steel-6 hover:text-steel transition-colors">
                  hello@aftra.io
                </a>
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gainsboro rounded-lg">
              <span className="text-xs font-medium text-steel">ISO/IEC 27001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social bar */}
      <div className="border-t border-gainsboro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-sm text-n-steel-6">Aftra {new Date().getFullYear()}</p>
          <div className="flex items-center gap-6">
            {footerData.social.map((link) => (
              <a key={link.label} href={link.href} className="text-n-steel-6 hover:text-steel transition-colors">
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
