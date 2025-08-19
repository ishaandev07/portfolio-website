import React from 'react'
import profile from '../data/profile'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function TimelineItem({item,custom}){
  const controls = useAnimation()
  const [ref,inView] = useInView({threshold:0.2, triggerOnce:true})
  React.useEffect(()=>{ if(inView) controls.start('visible') },[inView])
  const variants = {
    hidden: { opacity:0, y:30 },
    visible: (i)=> ({ opacity:1, y:0, transition:{delay: i*0.12, duration:0.5} })
  }
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} custom={custom} variants={variants} className="flex items-start gap-4 rip p-4 border border-white/5">
      <div className="text-neonpink font-bold w-40">{item.role}</div>
      <div>
  <div className="font-semibold mt-4 text-sm opacity-70">{item.company}</div>
        <ul className="text-sm opacity-70 list-disc ml-5 mt-2">
          {item.details.map((d,i)=> <li key={i}>{d}</li>)}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience(){
  return (
    <section className="my-16">
      <h3 className="text-3xl font-poster mb-6">Experience</h3>
      <div className="space-y-4">
        {profile.experience.map((e,idx)=> (
          <TimelineItem key={e.company+idx} item={e} custom={idx} />
        ))}

        <div className="mt-6">
          <h4 className="text-2xl font-poster mb-3">Education</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.education.map((ed,i)=> (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rip p-4 border border-white/5">
                <div className="font-semibold">{ed.institution}</div>
                <div className="text-sm opacity-70">{ed.degree} {ed.years ? `— ${ed.years}` : ''}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
