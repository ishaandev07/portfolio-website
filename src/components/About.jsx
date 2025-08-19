import React from 'react'
import profile from '../data/profile'
import potraitImg from '../assets/potrait.png'

export default function About(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
      <div className="flex items-center justify-center">
        <div className="w-80 h-96 bg-gray-800 rip overflow-hidden grayscale">
            <img src={potraitImg} alt="Ishaan" className="w-full h-full object-cover filter contrast-125" />
        </div>
      </div>
      <div>
  <h2 className="text-4xl font-poster mb-4">About</h2>
  <p className="text-lg opacity-80">{profile.about.summary}</p>
        <div className="mt-6 barcode" />
  <div className="mt-4 text-sm opacity-70">Coordinates: New Delhi, India — 28.6139° N, 77.2090° E</div>
      </div>
    </section>
  )
}
