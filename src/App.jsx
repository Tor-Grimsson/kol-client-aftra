import MegaMenu from './components/MegaMenu'
import Footer from './components/Footer'
import { Icon } from './components/icons'

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <MegaMenu />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-8 py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-moody-300 bg-moody-50 rounded-full mb-6">
                Now in public beta
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-steel tracking-tight">
                See your attack surface through the eyes of a&nbsp;hacker.
              </h1>
              <p className="mt-6 text-lg text-n-steel-7 max-w-xl leading-relaxed">
                Aftra maps your domains, uncovers shadow IT, and surfaces
                vulnerabilities continuously — so you can fix what matters
                before attackers find it.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <a href="#" className="px-8 py-3 text-base font-semibold text-white bg-gunpowder rounded-lg hover:bg-steel transition-colors shadow-sm">
                  Start free scan
                </a>
                <a href="#" className="px-8 py-3 text-base font-medium text-steel bg-athens border border-gainsboro rounded-lg hover:bg-gainsboro transition-colors">
                  Request a demo
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-alabaster rounded-2xl p-6 aspect-[4/3] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-xl border border-gainsboro" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Dashboard showcase ── */}
        <section className="bg-white pb-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-alabaster rounded-2xl p-8 min-h-[340px] flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-tabasco-200" />
                <div className="w-3 h-3 rounded-full bg-gold-100" />
                <div className="w-3 h-3 rounded-full bg-circuit-200" />
              </div>
              <div className="flex-1 bg-white rounded-xl border border-gainsboro p-6">
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {['Asset', 'Status', 'Severity', 'Last seen'].map((h) => (
                    <span key={h} className="text-xs font-semibold text-n-steel-6 uppercase tracking-wider">{h}</span>
                  ))}
                </div>
                {[
                  { asset: 'api.example.com', status: 'Exposed', severity: 'Critical', badge: 'bg-tabasco-50 text-tabasco-200' },
                  { asset: 'staging.internal', status: 'Shadow IT', severity: 'High', badge: 'bg-gold-50 text-gold-300' },
                  { asset: 'mail.example.com', status: 'Monitored', severity: 'Low', badge: 'bg-circuit-50 text-circuit-200' },
                  { asset: 'cdn.example.com', status: 'Monitored', severity: 'Info', badge: 'bg-moody-50 text-moody-300' },
                ].map((row) => (
                  <div key={row.asset} className="grid grid-cols-4 gap-4 py-3 border-t border-gainsboro">
                    <span className="text-sm font-medium text-steel">{row.asset}</span>
                    <span className="text-sm text-n-steel-7">{row.status}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${row.badge}`}>{row.severity}</span>
                    <span className="text-sm text-n-steel-6">2 hours ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Purple CTA + 3 cards ── */}
        <section className="bg-purple-300 py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-8 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Security for every team
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Whether you lead the company, manage IT, or run security ops — Aftra speaks your language.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'For Executives', desc: 'Peace of mind with real-time KPI dashboards and compliance-ready reporting. Know your risk posture at a glance.', icon: 'aftra-selection-20' },
              { title: 'For IT Teams', desc: 'Automated asset discovery and workflow integrations that save hours every week. No agents to install.', icon: 'aftra-selection-10' },
              { title: 'For Security Teams', desc: 'Continuous detection, prioritized remediation, and full audit trails. Sleep better at night.', icon: 'set-1-38' },
            ].map((card) => (
              <div key={card.title} className="bg-gunpowder/50 backdrop-blur rounded-2xl p-8 text-left">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                  <Icon name={card.icon} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Feature grid (alternating rows) ── */}
        <section className="bg-alabaster py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-8 space-y-24">
            {[
              {
                title: 'Discover every asset automatically',
                desc: 'Aftra continuously maps your domains, subdomains, cloud services, and APIs — including the shadow IT nobody knew existed. No manual inventory required.',
                icon: 'aftra-selection-25',
                reverse: false,
              },
              {
                title: 'Scan vulnerabilities in real time',
                desc: 'Stop relying on point-in-time reports. Aftra detects issues the moment they appear and prioritizes them by severity so your team fixes what matters first.',
                icon: 'aftra-selection-32',
                reverse: true,
              },
              {
                title: 'Track your digital footprint',
                desc: 'Monitor employee accounts on third-party platforms and detect credential breaches before attackers exploit them. See exposure others miss.',
                icon: 'set-1-9',
                reverse: false,
              },
              {
                title: 'Report with confidence',
                desc: 'Generate compliance-ready reports aligned with NIS2 and DORA frameworks. Executive dashboards translate cyber risk into business clarity.',
                icon: 'set-1-20',
                reverse: true,
              },
            ].map((feature) => (
              <div key={feature.title} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gainsboro flex items-center justify-center text-steel mb-6">
                    <Icon name={feature.icon} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-steel mb-4">{feature.title}</h3>
                  <p className="text-base text-n-steel-7 leading-relaxed max-w-lg">{feature.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl border border-gainsboro aspect-[4/3]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stats banner ── */}
        <section className="bg-white py-16 sm:py-20 border-y border-gainsboro">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '200+', label: 'Integrations' },
                { value: '< 5 min', label: 'Setup time' },
                { value: '90%', label: 'Breaches preventable' },
                { value: '24/7', label: 'Continuous monitoring' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-steel">{stat.value}</div>
                  <div className="mt-2 text-sm text-n-steel-6">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Large showcase card ── */}
        <section className="bg-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-steel tracking-tight">
                One score your whole organization can rally around
              </h2>
              <p className="mt-4 text-lg text-n-steel-7 max-w-xl mx-auto">
                Aftra's Security Score is a real-time KPI that everyone understands — from the CEO to every engineer.
              </p>
            </div>
            <div className="bg-alabaster rounded-2xl min-h-[448px] p-8 flex items-center justify-center">
              <div className="w-full h-80 bg-white rounded-xl border border-gainsboro" />
            </div>
          </div>
        </section>

        {/* ── Three tall cards ── */}
        <section className="bg-white pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-steel tracking-tight">
                Trusted by teams across Europe
              </h2>
              <p className="mt-4 text-lg text-n-steel-7 max-w-xl mx-auto">
                From telecoms to healthcare, organizations rely on Aftra to manage their external risk.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { quote: 'Aftra provides us with the necessary overview of all important vulnerabilities in one single location.', name: 'Security Engineer', company: 'Vodafone' },
                { quote: 'Implementing Aftra has been a game changer in uncovering and understanding our external attack surface.', name: 'CEO', company: 'Veritas' },
                { quote: 'The Security Score is very tangible for the whole team — from the CEO down to each employee.', name: 'CISO', company: 'INNNES' },
              ].map((t) => (
                <div key={t.company} className="bg-alabaster rounded-2xl p-8 flex flex-col justify-between min-h-[400px]">
                  <blockquote className="text-base text-steel leading-relaxed">"{t.quote}"</blockquote>
                  <div className="mt-8">
                    <div className="text-sm font-semibold text-steel">{t.name}</div>
                    <div className="text-sm text-n-steel-6">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="bg-moody-300 py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Don't just scan for vulnerabilities. Understand what's at risk.
            </h2>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Start with a free scan — top 5 insights, no sales commitment.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="px-8 py-3 text-base font-semibold text-moody-300 bg-white rounded-lg hover:bg-alabaster transition-colors">
                Start free scan
              </a>
              <a href="#" className="px-8 py-3 text-base font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
                Talk to sales
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App
