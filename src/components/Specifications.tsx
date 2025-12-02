import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Users, ClipboardText, HardHat } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Specifications() {
  const titleRef = useRef<HTMLDivElement>(null)
  const qualityCardsRef = useRef<HTMLDivElement>(null)
  const bottomCtaRef = useRef<HTMLDivElement>(null)

  const executionCapabilities = [
    {
      category: 'Civil Works',
      icon: HardHat,
      color: 'from-[#0F172A] to-[#334155]',
      capabilities: [
        'Foundation & earthwork for substations and tower structures',
        'Equipment foundations for transformers, reactors & switchgear',
        'Cable trenches & underground cable laying',
        'Control room & building construction',
        'Yard development & drainage systems',
        'Road access & compound wall construction',
      ],
    },
    {
      category: 'Electrical Works',
      icon: ClipboardText,
      color: 'from-[#3B82F6] to-[#1D4ED8]',
      capabilities: [
        'Busbar & conductor installation',
        'Switchgear & protection equipment installation',
        'Power & distribution transformer erection',
        'Overhead line stringing & sagging',
        'Cable laying, jointing & termination',
        'Earthing & lightning protection systems',
      ],
    },
    {
      category: 'Testing & Quality',
      icon: Target,
      color: 'from-[#10B981] to-[#059669]',
      capabilities: [
        'Pre-commissioning inspections & tests',
        'Equipment calibration & functional testing',
        'Relay protection setting & testing',
        'High voltage testing (HV/EHV)',
        'Insulation resistance & continuity tests',
        'Complete documentation & test reports',
      ],
    },
  ]

  const qualityFeatures = [
    {
      icon: CheckCircle,
      title: 'Strict Quality Control',
      description: 'Comprehensive quality assurance at every stage from procurement to commissioning',
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      icon: Users,
      title: 'Expert Supervision',
      description: '300+ experienced professionals ensuring adherence to standards and safety protocols',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      icon: ClipboardText,
      title: 'Documentation',
      description: 'Complete project documentation including as-built drawings and O&M manuals',
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      icon: HardHat,
      title: 'Safety Compliance',
      description: 'Zero-accident safety culture with strict adherence to safety regulations',
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible first
      gsap.set([titleRef.current, bottomCtaRef.current], { opacity: 1 })
      if (qualityCardsRef.current?.children) gsap.set(qualityCardsRef.current.children, { opacity: 1 })

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

      if (qualityCardsRef.current?.children) {
        gsap.from(qualityCardsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: qualityCardsRef.current,
            start: 'top 85%',
          },
        })
      }

      gsap.from(bottomCtaRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: bottomCtaRef.current,
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const CapabilitySection = ({ capability, index }: { capability: typeof executionCapabilities[0]; index: number }) => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Ensure card is visible first
        gsap.set(sectionRef.current, { opacity: 1 })

        gsap.from(sectionRef.current, {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        })
      })

      return () => ctx.revert()
    }, [index])

    return (
      <div ref={sectionRef} className="h-full">
        <Card className={`p-6 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br ${capability.color} group`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-lg bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
              <capability.icon size={28} className="text-white" weight="duotone" />
            </div>
            <h3 className="text-xl font-bold text-white">{capability.category}</h3>
          </div>
          <ul className="space-y-3">
            {capability.capabilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-white/90 flex-shrink-0 mt-0.5" size={20} weight="fill" />
                <span className="text-base text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    )
  }

  return (
    <section id="specifications" className="py-12 lg:py-16 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-full text-base mb-4 shadow-lg shadow-[#10B981]/25">Execution Excellence</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0F172A]">
            Project Execution Capabilities
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Comprehensive in-house capabilities covering all aspects of EHV substation and 
            transmission line project execution with focus on quality and safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-6">
          {executionCapabilities.map((capability, index) => (
            <CapabilitySection key={capability.category} capability={capability} index={index} />
          ))}
        </div>

        <div ref={qualityCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {qualityFeatures.map((feature, index) => (
            <Card key={feature.title} className={`p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br ${feature.color} group`}>
              <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={32} className="text-white" weight="duotone" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-white">{feature.title}</h3>
              <p className="text-base text-white/85 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div ref={bottomCtaRef} className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F97316]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Committed to Excellence
              </h3>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Our 30 years of experience, combined with a dedicated team of 300+ professionals, 
                ensures every project is delivered with the highest standards of quality, safety, 
                and reliability. We maintain strong relationships with TNEB/CEIG for seamless project execution.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full shadow">
                  TNEB Class I Certified
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full shadow">
                  ESA:530 License
                </span>
                <span className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full shadow">
                  CMWSSB Class A&B
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#3B82F6] group-hover:scale-110 transition-transform">100%</div>
                <div className="text-white/80 text-base">Quality Tested</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#10B981] group-hover:scale-110 transition-transform">On-Time</div>
                <div className="text-white/80 text-base">Delivery Focus</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#F97316] group-hover:scale-110 transition-transform">300+</div>
                <div className="text-white/80 text-base">Team Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#3B82F6] group-hover:scale-110 transition-transform">Zero</div>
                <div className="text-white/80 text-base">Compromise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
