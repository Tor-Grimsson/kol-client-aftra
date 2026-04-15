import { useState, useRef, useEffect } from 'react'
import { menuData, simpleLinks } from '../data/navigation'
import { Icon } from './icons'

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
    <nav ref={navRef} className="relative bg-white border-b border-gainsboro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/svg/aftra-lockup.svg" alt="Aftra" className="h-6" />
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
                      ? 'text-moody-300 bg-moody-50'
                      : 'text-gunpowder hover:text-steel hover:bg-athens'
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
                className="px-4 py-2 text-sm font-medium text-gunpowder hover:text-steel hover:bg-athens rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center h-10 px-6 text-sm font-semibold text-white bg-gunpowder rounded-lg hover:bg-steel transition-colors shadow-sm"
            >
              Book a demo
            </a>
            <a
              href="#"
              className="hidden lg:flex items-center justify-center h-10 w-10 rounded-lg bg-athens border border-gainsboro text-steel hover:bg-gainsboro transition-colors"
              aria-label="Security scan"
            >
              <Icon name="set-1-38" size={20} />
            </a>
            <button
              className="lg:hidden p-2 text-gunpowder hover:text-steel hover:bg-athens rounded-lg"
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
          className="hidden lg:block absolute left-0 right-0 z-50 bg-alabaster border-t border-b border-gainsboro shadow-xl"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Link sections */}
              {menuData[activeMenu].sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xs font-semibold text-n-steel-6 uppercase tracking-wider mb-4">
                    {section.heading}
                  </h3>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href="#"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-athens transition-colors group"
                        >
                          <Icon name={link.icon} size={20} className="mt-0.5 shrink-0 text-n-steel-6 group-hover:text-moody-300 transition-colors" />
                          <div>
                            <div className="text-sm font-medium text-steel group-hover:text-moody-300 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-n-steel-6">{link.desc}</div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured card */}
              <div className="bg-gradient-to-br from-moody-50 to-purple-50 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-moody-500 mb-2">
                    {menuData[activeMenu].featured.title}
                  </h3>
                  <p className="text-sm text-moody-400/70">
                    {menuData[activeMenu].featured.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-4 text-sm font-medium text-moody-300 hover:text-moody-400 transition-colors"
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
        <div className="lg:hidden border-t border-gainsboro bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {menuData.map((menu, index) => (
              <div key={menu.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-steel rounded-lg hover:bg-athens"
                  onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                  aria-expanded={activeMenu === index}
                >
                  {menu.label}
                  <span className="text-n-steel-6 text-xs ml-1">
                    {activeMenu === index ? '−' : '+'}
                  </span>
                </button>
                {activeMenu === index && (
                  <div className="mt-2 ml-3 space-y-4">
                    {menu.sections.map((section) => (
                      <div key={section.heading}>
                        <h3 className="text-xs font-semibold text-n-steel-6 uppercase tracking-wider mb-2 px-3">
                          {section.heading}
                        </h3>
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.name}>
                              <a
                                href="#"
                                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gunpowder hover:bg-athens"
                              >
                                <Icon name={link.icon} size={18} className="text-n-steel-6" />
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
                className="block px-3 py-2 text-sm font-medium text-steel rounded-lg hover:bg-athens"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#"
              className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-gunpowder rounded-lg hover:bg-steel"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
