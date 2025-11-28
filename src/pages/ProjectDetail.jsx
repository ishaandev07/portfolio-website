import React from 'react'
import { useParams, Link } from 'react-router-dom'
import profile from '../data/profile'

function slugify(name){
  return encodeURIComponent(name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''))
}

export default function ProjectDetail(){
  const { slug } = useParams()
  const project = profile.projects.find(p => slugify(p.name) === slug)

  if(!project) return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="panel p-6">
        <h2 className="text-2xl font-poster">Project not found</h2>
        <p className="mt-3">No project matches that URL. <Link to="/" className="underline">Go back</Link></p>
      </div>
    </main>
  )

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="panel p-6">
        <div className="flex items-start gap-4">
          <img alt={project.name} src={project.thumbnail || '/assets/project.jpg'} className="w-40 h-28 object-cover rounded" />
          <div>
            <h1 className="text-3xl font-poster">{project.name}</h1>
            <div className="text-sm opacity-70 mt-1">{project.visibility} • {project.stack}</div>
            <div className="mt-2 text-sm opacity-80">{project.purpose}</div>
          </div>
        </div>

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <div className="mt-2 flex gap-2 flex-wrap">
            { (project.stack || '').split(/[,+]/).map(s=> s.trim()).filter(Boolean).map(t=> <span key={t} className="text-xs px-2 py-1 rounded bg-white/6">{t}</span>)}
          </div>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-semibold">Quick Tutorial</h3>
          <div className="mt-2 text-sm opacity-80 leading-relaxed">
            {project.tutorial ? project.tutorial : (
              <>
                This project does not include a written tutorial yet. Below is a suggested quick-start guide to reproduce the core idea:
                <ol className="list-decimal ml-6 mt-2">
                  <li>Read the project description and identify the main components (frontend, backend, data storage).</li>
                  <li>Bootstrap a new repo with the framework listed in the stack (e.g., create-react-app or Vite + React for frontend).</li>
                  <li>Implement the UI and wire up any APIs or data sources. For backend components, scaffold a small API (FastAPI/Express) and secure endpoints.</li>
                  <li>Containerize or prepare deployment (Vercel/Netlify for frontend, Render/Heroku for backend), and document environment variables.</li>
                  <li>Add tests and README instructions to help others reproduce your setup.</li>
                </ol>
              </>
            )}
          </div>
        </section>

        <div className="mt-6 flex items-center justify-between">
          <Link to="/" className="px-3 py-2 border border-white/10 rounded hover:bg-white/6">Back</Link>
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded">Open Repo</a>
          )}
        </div>
      </div>
    </main>
  )
}
