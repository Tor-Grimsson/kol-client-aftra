import { useState, useRef, useEffect } from 'react'
import { menuData, simpleLinks } from '../data/navigation'

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef(null)
  const navRef = useRef(null)

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current)
    setActiveMenu(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 200)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveMenu(activeMenu === index ? null : index)
    }
    if (e.key === 'Escape') {
      setActiveMenu(null)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav ref={navRef} className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="bg-indigo-600 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm">
              M
            </span>
            MegaCo
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {menuData.map((menu, index) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeMenu === index
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={activeMenu === index}
                  aria-haspopup="true"
                >
                  {menu.label}
                </button>
              </div>
            ))}

            {simpleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      {activeMenu !== null && (
        <div
          className="hidden lg:block absolute left-0 right-0 z-50 bg-gray-50 border-t border-b border-gray-200 shadow-xl"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Link sections */}
              {menuData[activeMenu].sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.heading}
                  </h3>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href="#"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <span className="text-xl mt-0.5 shrink-0">{link.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-gray-500">{link.desc}</div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured card */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-indigo-900 mb-2">
                    {menuData[activeMenu].featured.title}
                  </h3>
                  <p className="text-sm text-indigo-700/70">
                    {menuData[activeMenu].featured.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {menuData[activeMenu].featured.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {menuData.map((menu, index) => (
              <div key={menu.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-50"
                  onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                  aria-expanded={activeMenu === index}
                >
                  {menu.label}
                  <span className="text-gray-400 text-xs ml-1">
                    {activeMenu === index ? '−' : '+'}
                  </span>
                </button>
                {activeMenu === index && (
                  <div className="mt-2 ml-3 space-y-4">
                    {menu.sections.map((section) => (
                      <div key={section.heading}>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
                          {section.heading}
                        </h3>
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <a
                                href="#"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                              >
                                <span>{link.icon}</span>
                                <span>{link.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {simpleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#"
              className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
