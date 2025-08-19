import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Loader from './components/Loader'
import Particles from './components/Particles'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  // app-level state/hooks must be declared unconditionally
  const [loading,setLoading] = useState(true)
  const [theme,setTheme] = useState('dark')
  const [lightBg,setLightBg] = useState(false)

  function toggleLightBg(){
    setLightBg(v=>{
      const nv = !v
      document.documentElement.classList.toggle('light-bg', nv)
      return nv
    })
  }

  // section refs (always created so hook order remains stable)
  const sections = { hero: useRef(null), about: useRef(null), skills: useRef(null), projects: useRef(null), experience: useRef(null), contact: useRef(null) }
  const [active,setActive] = useState('hero')

  // observe sections to update active nav (always registered after mount)
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) setActive(e.target.dataset.section) })
    },{threshold:0.5})
    Object.values(sections).forEach(r=> r.current && obs.observe(r.current))
    return ()=> obs.disconnect()
  },[])

  useEffect(()=>{
  // fun easter-egg removed from console for production
  },[])

  useEffect(()=>{
  document.documentElement.dataset.theme = theme
  // also keep a css class in sync for utilities that target .light/.dark
  document.documentElement.classList.toggle('light', theme === 'light')
  document.documentElement.classList.toggle('dark', theme === 'dark')
  },[theme])

  if(loading) return <Loader onFinish={()=> setLoading(false)} />

  function scrollTo(key){ sections[key].current.scrollIntoView({behavior:'smooth',block:'start'}) }

  return (
    <div className="relative font-body min-h-screen">
      <Particles />
      <div className="fixed top-4 right-4 z-50"> 
        <ThemeToggle />
      </div>

      <nav className="fixed left-4 top-1/3 z-50 flex flex-col gap-2">
        {Object.keys(sections).map(key=> (
          <button key={key} onClick={()=> scrollTo(key)} aria-current={active===key} className={`px-3 py-2 rounded ${active===key? 'bg-white/8' : 'bg-white/2'}`}>{key}</button>
        ))}
      </nav>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>
  <div ref={sections.hero} data-section="hero"><Hero theme={theme} setTheme={setTheme} toggleLightBg={toggleLightBg} /></div>
        <main className="max-w-6xl mx-auto px-6 py-12">
          <section ref={sections.about} data-section="about"><About /></section>
          <section ref={sections.skills} data-section="skills"><Skills /></section>
          <section ref={sections.projects} data-section="projects"><Projects /></section>
          <section ref={sections.experience} data-section="experience"><Experience /></section>
          <section ref={sections.contact} data-section="contact"><Contact /></section>
        </main>
      </motion.div>
    </div>
  )
}
