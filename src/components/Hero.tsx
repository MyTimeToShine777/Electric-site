import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lightning, Buildings, Broadcast, Gear, Wrench } from '@phosphor-icons/react'

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure all elements are visible first
      gsap.set([badgeRef.current, contentRef.current, statsRef.current], { opacity: 1 })
      if (contentRef.current?.children) gsap.set(contentRef.current.children, { opacity: 1 })
      if (statsRef.current?.children) gsap.set(statsRef.current.children, { opacity: 1 })
      if (servicesRef.current?.children) gsap.set(servicesRef.current.children, { opacity: 1 })

      const tl = gsap.timeline()
      
      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power2.out',
      })
      .from(contentRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.3')
      .from(statsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.3')
      
      // Animate service cards
      if (servicesRef.current?.children) {
        gsap.from(servicesRef.current.children, {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.8,
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Services are now rendered directly in JSX with gradient backgrounds

  return (
    <section id="home" className="relative bg-white overflow-hidden pt-20">
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3B82F6]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F97316]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-12 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div ref={badgeRef}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/10 text-[#F97316] font-semibold rounded-full text-sm border border-[#F97316]/20">
                  <Lightning size={16} weight="fill" />
                  30+ Years of Excellence
                </span>
              </div>
              
              {/* Main content */}
              <div ref={contentRef} className="space-y-6">
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight text-[#0F172A]">
                  EHV Substation &{' '}
                  <span className="text-[#3B82F6]">Transmission Line</span>{' '}
                  Specialists
                </h1>
                
                <p className="text-lg text-[#64748B] leading-relaxed max-w-xl">
                  MASS POWER SOLUTIONS - Your trusted partner for complete Design, Engineering, Procurement, 
                  Construction, Testing & Commissioning of EHV substations and transmission lines. TNEB Class I 
                  certified contractor with ESA Grade License (ESA:530).
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    size="lg"
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/30 transition-all h-12 px-8 text-base font-semibold"
                    onClick={() => scrollToSection('services')}
                  >
                    Our Services
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-[#E2E8F0] hover:border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] h-12 px-8 text-base font-semibold transition-all"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E2E8F0]">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-[#0F172A]">30+</div>
                  <div className="text-sm text-[#64748B]">Years Experience</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-[#3B82F6]">300+</div>
                  <div className="text-sm text-[#64748B]">Team Members</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-[#10B981]">100%</div>
                  <div className="text-sm text-[#64748B]">On-Time Delivery</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-[#F97316]">TNEB</div>
                  <div className="text-sm text-[#64748B]">Class I Certified</div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Cards */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#F97316]/10 rounded-3xl blur-2xl"></div>
                
                {/* Card container */}
                <div className="relative bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-[#0F172A] mb-1">Our Core Services</h3>
                    <p className="text-sm text-[#64748B]">Complete EPC solutions for power infrastructure</p>
                  </div>
                  
                  {/* Service Grid */}
                  <div ref={servicesRef} className="grid grid-cols-2 gap-3" style={{ opacity: 1 }}>
                    <div className="group p-4 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Buildings size={22} className="text-white" weight="duotone" />
                        </div>
                        <span className="text-sm font-semibold text-white">EHV Substations</span>
                        <span className="text-xs text-white/70">66kV - 400kV</span>
                      </div>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Broadcast size={22} className="text-white" weight="duotone" />
                        </div>
                        <span className="text-sm font-semibold text-white">T&D Lines</span>
                        <span className="text-xs text-white/70">Up to 400kV</span>
                      </div>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Gear size={22} className="text-white" weight="duotone" />
                        </div>
                        <span className="text-sm font-semibold text-white">T&C Services</span>
                        <span className="text-xs text-white/70">Complete Testing</span>
                      </div>
                    </div>
                    <div className="group p-4 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-2">
                        <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Wrench size={22} className="text-white" weight="duotone" />
                        </div>
                        <span className="text-sm font-semibold text-white">O&M Support</span>
                        <span className="text-xs text-white/70">24/7 Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom highlight */}
                  <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                        <span className="text-[#64748B]">ISO 9001:2015 Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                        <span className="text-[#64748B]">TNEB Approved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
