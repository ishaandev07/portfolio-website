import { useEffect, useState } from "react";

function SunIcon(props){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
  )
}

function MoonIcon(props){
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
  )
}

export default function ThemeToggle(){
  const [theme,setTheme] = useState(()=> localStorage.getItem('theme') || 'dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button
      onClick={()=> setTheme(t=> t === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-[var(--panel)] hover:bg-[var(--glass)] transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span style={{color:'var(--text)'}}>
        {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
      </span>
    </button>
  )
}
