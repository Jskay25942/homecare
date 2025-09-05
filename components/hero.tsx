"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Users, Clock } from "lucide-react"

export function Hero() {
  const [counters, setCounters] = useState({
    families: 0,
    caregivers: 0,
    experience: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { families: 500, caregivers: 10, experience: 15 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          families: Math.floor(targets.families * progress),
          caregivers: Math.floor(targets.caregivers * progress),
          experience: Math.floor(targets.experience * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-gray-900">
            Compassionate Care, <span className="text-blue-600">Right at Home</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Professional homecare services that bring comfort, dignity, and peace of mind to your family.
          </p>

          {/* Animated Counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-blue-600">{counters.families}+</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Families Served</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-green-100 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-green-600 mr-2" />
                <span className="text-3xl font-bold text-green-600">{counters.caregivers}+</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Certified Caregivers</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-blue-600">{counters.experience}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">Years of Experience</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => scrollToSection('services')}
            >
              Book Care Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              onClick={() => scrollToSection('services')}
            >
              Learn About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}