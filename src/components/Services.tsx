import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cube, Gear, Wrench, Flask, TrendUp, Headset } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const services = [
    {
      icon: Cube,
      title: 'Design & Engineering',
      description: 'Comprehensive design and engineering services for EHV substations and transmission lines',
      features: ['Detailed engineering drawings', 'Load flow analysis', 'Equipment selection', 'Technical specifications'],
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      icon: Gear,
      title: 'Procurement Services',
      description: 'End-to-end procurement of electrical equipment, materials, and components from certified vendors',
      features: ['Vendor evaluation', 'Quality assurance', 'Timely delivery', 'Cost optimization'],
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      icon: Wrench,
      title: 'Construction (Civil & Electrical)',
      description: 'Complete civil and electrical construction works for substations and transmission line projects',
      features: ['Foundation & structures', 'Cable laying & termination', 'Equipment installation', 'Site management'],
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      icon: Flask,
      title: 'Testing & Commissioning',
      description: 'Comprehensive testing and commissioning services ensuring operational readiness and safety compliance',
      features: ['Pre-commissioning tests', 'Equipment calibration', 'System integration', 'Performance validation'],
      color: 'from-[#F97316] to-[#EA580C]',
    },
    {
      icon: TrendUp,
      title: 'Operation & Maintenance',
      description: 'Ongoing O&M services to ensure optimal performance and longevity of power infrastructure',
      features: ['Preventive maintenance', 'Breakdown support', 'Performance monitoring', 'Upgrade services'],
      color: 'from-[#0F172A] to-[#1E293B]',
    },
    {
      icon: Headset,
      title: 'Turnkey Project Execution',
      description: 'Complete end-to-end turnkey solutions from concept to commissioning and handover',
      features: ['Single-point responsibility', 'Integrated approach', 'Budget adherence', 'Timeline commitment'],
      color: 'from-[#3B82F6] to-[#2563EB]',
    },
  ]

  const titleRef = useRef<HTMLDivElement>(null)
  const bottomCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible first
      gsap.set(titleRef.current, { opacity: 1 })
      if (bottomCardsRef.current?.children) gsap.set(bottomCardsRef.current.children, { opacity: 1 })

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      })

      if (bottomCardsRef.current?.children) {
        gsap.from(bottomCardsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bottomCardsRef.current,
            start: 'top 85%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Ensure card is visible first
        gsap.set(cardRef.current, { opacity: 1 })

        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
          },
        })
      })

      return () => ctx.revert()
    }, [index])

    return (
      <div ref={cardRef}>
        <Card className={`relative overflow-hidden p-0 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br ${service.color} group`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 p-6">
            <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <service.icon size={32} className="text-white" weight="duotone" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-white">{service.title}</h3>
            <p className="text-white/85 mb-4 leading-relaxed text-base">{service.description}</p>
            <div className="space-y-2 pt-4 border-t border-white/20">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/80"></div>
                  <span className="text-sm text-white/85">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="services" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white font-bold rounded-full text-sm mb-4 shadow-lg shadow-[#3B82F6]/25">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0F172A]">
            Comprehensive Power Infrastructure Solutions
          </h2>
          <p className="text-base text-[#64748B] max-w-3xl mx-auto">
            From initial design to final commissioning and ongoing maintenance, we provide complete turnkey 
            solutions for EHV substations and transmission line projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div ref={bottomCardsRef} className="grid md:grid-cols-2 gap-8">
          <Card className="p-10 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Why Choose MASS POWER SOLUTIONS?</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-base font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] text-lg">TNEB Class I Certified</div>
                  <div className="text-base text-[#64748B]">State Power Utility certified contractor for EHV works</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-base font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] text-lg">ESA Grade License Holder</div>
                  <div className="text-base text-[#64748B]">ESA:530 license by Electrical Licensing Board of Tamil Nadu</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-base font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] text-lg">300+ Skilled Professionals</div>
                  <div className="text-base text-[#64748B]">Dedicated in-house team for all project aspects</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-base font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A] text-lg">Strong Supplier Network</div>
                  <div className="text-base text-[#64748B]">Ensuring timely material supply and cost efficiency</div>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-10 bg-white border border-[#E2E8F0] hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A]">Sectors We Serve</h3>
            <div className="grid grid-cols-2 gap-5">
              {[
                'Power Utilities',
                'Independent Power Producers',
                'State Electricity Boards',
                'Renewable Energy Projects',
                'Industrial Power Systems',
                'Smart Grid Projects',
                'Distribution Networks',
                'Transmission Infrastructure',
              ].map((sector) => (
                <div key={sector} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></div>
                  <span className="text-lg text-[#0F172A]">{sector}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
