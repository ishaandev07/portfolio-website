import React from 'react'
import profile from '../data/profile'

export default function Skills(){
  const items = [
    ...profile.skills.languages,
    ...profile.skills.frameworks,
    ...profile.skills.ai_ml,
    ...profile.skills.databases,
    ...profile.skills.other
  ]

  return (
    <section className="my-16">
      <h3 className="text-3xl font-poster mb-6">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map(s=> (
          <div key={s} role="button" tabIndex={0} aria-label={`Skill ${s}`} className="p-4 rip bg-white/3 border border-white/5 flex items-center justify-between transition-shadow" style={{cursor:'pointer'}} onMouseEnter={(e)=> e.currentTarget.style.boxShadow = `0 0 12px var(--neon-a)`} onMouseLeave={(e)=> e.currentTarget.style.boxShadow = ''}>
            <div>
              <div className="text-sm opacity-70">{s}</div>
              <div className="text-xs opacity-50">{Math.floor(Math.random()*40)+60}%</div>
            </div>
            <div className="text-2xl font-display" style={{color:'var(--neon-b)'}}>{s[0]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
