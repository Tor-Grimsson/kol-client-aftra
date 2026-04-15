import { menuData, simpleLinks } from '../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[200px_repeat(auto-fit,minmax(0,1fr))] gap-x-8 gap-y-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <span className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm">
                M
              </span>
              MegaCo
            </a>
          </div>

          {/* Sitemap columns — one per section from menuData */}
          {menuData.flatMap((menu) =>
            menu.sections.map((section) => (
              <div key={`${menu.label}-${section.heading}`}>
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  {section.heading}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}

          {/* Extra column for simple links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              General
            </h3>
            <ul className="space-y-3">
              {simpleLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MegaCo, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
