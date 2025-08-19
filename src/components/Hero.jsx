import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import profile from '../data/profile'
import portraitImg from '../assets/71030723.jpeg'

const roles = profile.hero.roles

function NeonType(){
  const [index,setIndex] = React.useState(0)
  const [display,setDisplay] = React.useState('')
  React.useEffect(()=>{
    let mounted = true
    const role = roles[index%roles.length]
    let pos = 0
    const tick = () => {
      if(!mounted) return
      if(pos <= role.length){
        setDisplay(role.slice(0,pos))
        pos += 1
        setTimeout(tick, 80 + Math.random()*60)
      } else {
        setTimeout(()=>{
          setIndex(i=>i+1)
        },1200)
      }
    }
    tick()
    return ()=> mounted=false
  },[index])
  // per-letter span for RGB split effect
  return (
    <span className="ml-2 inline-flex items-center">
      {display.split('').map((c,i)=> (
        <span key={i} className="relative inline-block" style={{display:'inline-block'}}>
          <span aria-hidden style={{position:'absolute',left:0,top:0,color:'var(--neon-a)',mixBlendMode:'screen',transform:`translateX(${(i%3)-1}px)`}}>{c}</span>
          <span aria-hidden style={{position:'absolute',left:0,top:0,color:'var(--neon-c)',mixBlendMode:'screen',transform:`translateX(${(i%2)-1}px)`}}>{c}</span>
          <span style={{position:'relative'}}>{c}</span>
        </span>
      ))}
    </span>
  )
}

export default function Hero({theme,setTheme,toggleLightBg}){
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const tx = useTransform(x, v=> v/12)
  const ty = useTransform(y, v=> v/12)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" style={{backgroundImage: `url('/assets/noise.svg')`, opacity: 0.28, mixBlendMode: 'overlay'}} aria-hidden />
      <motion.div className="max-w-5xl w-full px-6 py-24 flex items-center" onMouseMove={(e)=>{
        const rect = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - rect.left - rect.width/2)
        y.set(e.clientY - rect.top - rect.height/2)
      }}>
        <div className="w-full text-center">
          <div className="mb-6 inline-block px-3 py-1 bg-white/5 rounded-sm border border-white/8"> 
            <span className="text-xs tracking-widest">PARENTAL ADVISORY</span>
          </div>
          <motion.h1 style={{x:tx,y:ty}} className="text-7xl md:text-9xl font-display leading-none glitch parallax" data-text={profile.hero.name} initial={{y:40,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}}>
            {profile.hero.name}
          </motion.h1>
          <p className="mt-6 text-xl opacity-80">"{profile.hero.tagline}"</p>
          <p className="mt-4 text-lg">
            <span className="inline-block">Role:</span>
            <NeonType />
          </p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="mt-8 flex items-center justify-center">
            <img
              src={portraitImg}
              alt="portrait demo"
              className="w-48 h-56 object-cover grayscale contrast-125 poster rip tilt"
              role="button"
              tabIndex={0}
              onClick={()=>{ if(typeof toggleLightBg === 'function') toggleLightBg() }}
              onKeyDown={(e)=> { if(e.key==='Enter' || e.key===' ') { if(typeof toggleLightBg === 'function') toggleLightBg() } }}
              data-test="portrait"
              title="Toggle theme"
              onError={(e)=>{ e.currentTarget.onerror=null; e.currentTarget.src='/potrait.png' }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
