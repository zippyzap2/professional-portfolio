import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-primary font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Senior Software Engineer <br />
          <span className="text-accent">& Architecting Scalable Systems</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Specializing in distributed systems, cloud architecture, and technical leadership. 
          Focused on solving complex engineering challenges that drive measurable business impact.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition">
            View Case Studies
          </a>
          <a href="#contact" className="border border-slate-300 px-8 py-3 rounded-full font-medium hover:bg-white transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* Impact Section (The "Senior" part) */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-12 text-center">Selected Engineering Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder Project Card */}
          <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition">
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Distributed Systems</div>
            <h3 className="text-2xl font-bold mb-4">Scalable Caching Layer Implementation</h3>
            <p className="text-slate-600 mb-6">
              Reduced API latency by 40% across 10M+ requests/day by designing a tiered Redis caching strategy.
            </p>
            <a href="#" className="text-primary font-bold hover:underline">Read Case Study &rarr;</a>
          </div>
          
          <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-lg transition">
            <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Cloud Architecture</div>
            <h3 className="text-2xl font-bold mb-4">Kubernetes Migration Strategy</h3>
            <p className="text-slate-600 mb-6">
              Led the migration of 50+ microservices to EKS, improving deployment velocity by 3x and reducing infra costs by 15%.
            </p>
            <a href="#" className="text-primary font-bold hover:underline">Read Case Study &rarr;</a>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="font-bold text-xl mb-2">Mentorship</h4>
              <p className="text-slate-600">Mentored 10+ mid-level engineers into senior roles.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📄</div>
              <h4 className="font-bold text-xl mb-2">RFCs & Design</h4>
              <p className="text-slate-600">Authored 20+ architectural blueprints for core platforms.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold text-xl mb-2">Open Source</h4>
              <p className="text-slate-600">Active contributor to high-scale cloud frameworks.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
