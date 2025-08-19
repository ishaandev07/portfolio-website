import React from 'react'
import profile from '../data/profile'

export default function Projects(){
  const items = profile.projects.slice(0,12)
  return (
    <section className="my-16">
      <h3 className="text-3xl font-poster mb-6">Projects</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p,idx)=> (
          <div key={p.name+idx} tabIndex={0} role="article" aria-label={p.name} className="rip bg-gray-900 p-4 border border-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 tilt">
            <img loading="lazy" alt={p.name} src={p.thumbnail || '/assets/project.jpg'} className="w-full h-40 object-cover filter grayscale opacity-90 hover:opacity-70 transition-all rounded" />
            <div className="mt-3 flex items-center justify-between">
              <div className="glitch hover:scale-102" data-text={p.name}>{p.name}</div>
              <div className="barcode w-24" />
            </div>
            <div className="text-sm mt-2 opacity-70">{p.purpose || p.desc}</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              { (p.stack || '').split(/[,+]/).map(s=> s.trim()).filter(Boolean).map(t=> <span key={t} className="text-xs px-2 py-1 rounded bg-white/6">{t}</span>)}
            </div>
            <div className="mt-2 text-xs opacity-60">{p.visibility}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
