import React, { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef(null)
  useEffect(()=>{
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    canvas.className = 'particles-canvas'
    ref.current.appendChild(canvas)
    const particles = Array.from({length: Math.round((w*h)/90000)}, ()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.6+0.2,
      vx: (Math.random()-0.5)/8,
      vy: (Math.random()-0.5)/8
    }))
    let raf
    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    function draw(){
      ctx.clearRect(0,0,w,h)
      // use computed --text color with low alpha for particles
      const root = getComputedStyle(document.documentElement)
      const text = root.getPropertyValue('--text').trim() || '#ffffff'
      // convert hex rgb to rgba fallback if needed
      function hexToRgba(hex, a){
        if(hex.startsWith('#')){
          const v = hex.slice(1)
          const bigint = parseInt(v.length===3 ? v.split('').map(c=>c+c).join('') : v, 16)
          const r = (bigint >> 16) & 255
          const g = (bigint >> 8) & 255
          const b = bigint & 255
          return `rgba(${r},${g},${b},${a})`
        }
        return `rgba(255,255,255,${a})`
      }
      ctx.fillStyle = text.startsWith('#') ? hexToRgba(text, 0.06) : 'rgba(255,255,255,0.06)'
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy
        if(p.x<0) p.x=w; if(p.x>w) p.x=0
        if(p.y<0) p.y=h; if(p.y>h) p.y=0
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize); ref.current.removeChild(canvas) }
  },[])
  return <div className="bg-canvas"><div className="bg-gradient" /><div ref={ref} /></div>
}
