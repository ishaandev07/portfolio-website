import React from 'react'
import profile from '../data/profile'

export default function Contact(){
  return (
    <section className="my-20">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel p-6">
          <h3 className="text-3xl font-poster">Contact</h3>
          <p className="mt-4 opacity-80">Classified: Restricted Access. Or just say hello — I'll respond.</p>
          <div className="mt-4 flex gap-4">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">GitHub</a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">LinkedIn</a>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold">Certifications</h4>
            <ul className="text-sm opacity-70 list-disc ml-5 mt-2">
              {profile.certifications.map((c,i)=> <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        <form className="panel p-6" onSubmit={(e)=>{ e.preventDefault(); alert('Thanks — demo only') }}>
          <label className="block text-sm mb-2">Name<input aria-label="name" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6"/></label>
          <label className="block text-sm mb-2">Email<input aria-label="email" type="email" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6"/></label>
          <label className="block text-sm mb-2">Message<textarea aria-label="message" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6" rows={4} /></label>
          <button type="submit" className="mt-3 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
