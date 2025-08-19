import React from 'react'
import { motion } from 'framer-motion'

export default function Loader({onFinish}){
  React.useEffect(()=>{
    const t = setTimeout(()=> onFinish && onFinish(), 1400)
    return ()=> clearTimeout(t)
  },[])

  return (
    <div className="loader" role="status" aria-live="polite">
      <motion.div initial={{opacity:0}} animate={{opacity:[0,1,0]}} transition={{repeat:Infinity,duration:1.6}} className="vhs">
        PLEASE STAND BY
      </motion.div>
    </div>
  )
}
