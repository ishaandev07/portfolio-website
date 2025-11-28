import React from 'react'
import profile from '../data/profile'

export default function Contact(){
  const [state, setState] = React.useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState({})

  function validate(){
    const err = {}
    if(!state.name.trim()) err.name = 'Name is required'
    if(!state.email.trim()) err.email = 'Email is required'
    else if(!/^\S+@\S+\.\S+$/.test(state.email)) err.email = 'Invalid email'
    if(!state.message.trim()) err.message = 'Message is required'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  function handleChange(e){
    const { name, value } = e.target
    setState(s=> ({...s, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!validate()) return
    const emailTo = profile.contact.email
    if(emailTo){
      const subject = encodeURIComponent(`Portfolio message from ${state.name}`)
      const body = encodeURIComponent(`${state.message}\n\n— ${state.name} (${state.email})`)
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`
    } else {
      // fallback: send to user's GitHub/LinkedIn? For now, show success message
      alert('Thanks! Your message is ready — the demo uses mail client when an email is configured.')
      setState({ name: '', email: '', message: '' })
    }
  }

  return (
    <section className="my-20">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="panel p-6">
          <h3 className="text-3xl font-poster">Contact</h3>
          <p className="mt-4 opacity-80">Classified: Restricted Access. Or just say hello — I'll respond.</p>
          <div className="mt-4 flex gap-4">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">GitHub</a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">LinkedIn</a>
            {profile.contact.instagram && (
              <a href={profile.contact.instagram} target="_blank" rel="noreferrer" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">Instagram</a>
            )}
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-semibold">Certifications</h4>
            <ul className="text-sm opacity-70 list-disc ml-5 mt-2">
              {profile.certifications.map((c,i)=> <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>

        <form className="panel p-6" onSubmit={handleSubmit} noValidate>
          <label className="block text-sm mb-2">Name
            <input name="name" value={state.name} onChange={handleChange} aria-label="name" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6"/>
            {errors.name && <div className="text-sm text-red-400 mt-1">{errors.name}</div>}
          </label>

          <label className="block text-sm mb-2">Email
            <input name="email" value={state.email} onChange={handleChange} aria-label="email" type="email" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6"/>
            {errors.email && <div className="text-sm text-red-400 mt-1">{errors.email}</div>}
          </label>

          <label className="block text-sm mb-2">Message
            <textarea name="message" value={state.message} onChange={handleChange} aria-label="message" className="w-full mt-1 p-2 rounded bg-black/20 border border-white/6" rows={4} />
            {errors.message && <div className="text-sm text-red-400 mt-1">{errors.message}</div>}
          </label>

          <button type="submit" className="mt-3 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
