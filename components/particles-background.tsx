'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    particlesJS: any
  }
}

export function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
        script.async = true
        document.body.appendChild(script)

        script.onload = () => {
          window.particlesJS('particles-js', {
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: '#3B82F6' },
              shape: { type: 'circle' },
              opacity: { value: 0.5, random: false },
              size: { value: 3, random: true },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#3B82F6',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          })
        }
      } catch (error) {
        console.error('Error loading particles.js:', error)
      }
    }

    loadParticles()

    return () => {
      const canvas = document.querySelector('#particles-js canvas')
      if (canvas) {
        canvas.remove()
      }
    }
  }, [])

  return <div id="particles-js" className="fixed inset-0 z-0" />
}

