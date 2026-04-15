import MegaMenu from './components/MegaMenu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MegaMenu />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-6">
              Now in public beta
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight max-w-3xl mx-auto">
              Build faster. Ship smarter. Scale&nbsp;effortlessly.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              MegaCo gives your team the analytics, automation, and integrations
              to move from idea to production in record time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get started free
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Request a demo
              </a>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Three pillars that power every team on MegaCo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time analytics
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dashboards that update in milliseconds, not minutes. Spot trends
                the moment they happen and make decisions backed by live data.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Workflow automation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Drag, drop, done. Build automations visually and let repetitive
                work run itself so your team can focus on what matters.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-2xl mb-6">
                🔗
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Seamless integrations
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                200+ connectors out of the box. Sync with your existing stack in
                a few clicks — no engineering ticket required.
              </p>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight max-w-2xl mx-auto">
              Ready to accelerate your workflow?
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              Join thousands of teams already shipping faster with MegaCo.
              Free for up to 10 users, no credit card needed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Start for free
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
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
