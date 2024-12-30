'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function setupAnimations() {
  gsap.registerPlugin(ScrollTrigger)

  // Animate text
  gsap.utils.toArray("h1, h2, p").forEach((element: any) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        end: "bottom top+=100",
        toggleActions: "play none none reverse"
      }
    })
  })

  // Animate cards
  gsap.utils.toArray(".card").forEach((card: any) => {
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=50",
        end: "bottom top+=50",
        toggleActions: "play none none reverse"
      }
    })
  })
}

export function Animations() {
  useEffect(() => {
    setupAnimations()
  }, [])

  return null
}

