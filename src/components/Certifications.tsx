import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Certificate, Medal, Handshake, ShieldCheck, Lightning, CheckCircle } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const slideRef = useRef<HTMLDivElement>(null)

  const certifications = [
    {
      icon: Lightning,
      title: 'TNEB Class I Contractor',
      number: 'State Power Utility',
      description: 'Certified Class I contractor for executing EHV substation and transmission line works for Tamil Nadu Electricity Board',
      year: 'Active',
      color: 'from-[#0F172A] to-[#334155]',
      iconBg: 'bg-[#3B82F6]',
      image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop',
    },
    {
      icon: Certificate,
      title: 'ESA Grade License',
      number: 'ESA:530',
      description: 'Electrical Supervisor Authorization Grade License issued by Electrical Licensing Board of Tamil Nadu',
      year: 'Active',
      color: 'from-[#10B981] to-[#059669]',
      iconBg: 'bg-[#10B981]',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: ShieldCheck,
      title: 'CMWSSB Contractor',
      number: 'Class A & B',
      description: 'Certified contractor for Chennai Metropolitan Water Supply and Sewerage Board infrastructure projects',
      year: 'Active',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
      iconBg: 'bg-[#0F172A]',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
    },
    {
      icon: Medal,
      title: 'ISO 9001:2015',
      number: 'Quality Management',
      description: 'International certification for quality management systems ensuring consistent project delivery excellence',
      year: '2012',
      color: 'from-[#F97316] to-[#EA580C]',
      iconBg: 'bg-[#F97316]',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    },
  ]

  const achievements = [
    {
      icon: CheckCircle,
      title: '30+ Years Experience',
      description: 'Three decades of specialized expertise in power infrastructure',
    },
    {
      icon: Handshake,
      title: 'TNEB/CEIG Liaison',
      description: 'Established relationships and constant coordination with authorities',
    },
    {
      icon: Certificate,
      title: 'Strong Supplier Network',
      description: 'Extensive network ensuring timely material delivery',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure element is visible first
      gsap.set(titleRef.current, { opacity: 1 })

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
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certifications.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [certifications.length])

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
    }
  }, [activeIndex])

  const activeCert = certifications[activeIndex]

  return (
    <section id="certifications" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3B82F6]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#F97316]/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white font-bold rounded-full text-base mb-4 shadow-lg shadow-[#3B82F6]/25">Certifications & Licenses</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Recognized certifications and licenses demonstrating our commitment to quality, 
            safety, and regulatory compliance in power infrastructure construction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div ref={slideRef} key={activeIndex}>
              <Card className={`overflow-hidden shadow-2xl border-0 bg-gradient-to-br ${activeCert.color}`}>
                <div className="relative h-52">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full ${activeCert.iconBg} shadow-2xl ring-4 ring-white/20 flex items-center justify-center`}>
                      <activeCert.icon size={40} className="text-white" weight="duotone" />
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#0F172A]">{activeCert.title}</h3>
                    <span className="px-2 py-1 text-xs font-medium text-white bg-[#10B981] rounded">{activeCert.year}</span>
                  </div>
                  <p className="text-[#3B82F6] font-semibold mb-3">{activeCert.number}</p>
                  <p className="text-[#64748B] leading-relaxed text-sm">{activeCert.description}</p>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-[#3B82F6]' : 'w-2 bg-[#E2E8F0] hover:bg-[#3B82F6]/50'
                  }`}
                  aria-label={`View certification ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">Licensed & Certified</h3>
              <p className="text-[#64748B] leading-relaxed mb-6">
                MASS POWER SOLUTIONS holds all necessary certifications and licenses required for 
                executing EHV substation and transmission line projects. Our credentials reflect our 
                commitment to maintaining the highest standards of quality and regulatory compliance.
              </p>
            </div>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => {
                const colors = ['from-[#0F172A] to-[#334155]', 'from-[#3B82F6] to-[#1D4ED8]', 'from-[#10B981] to-[#059669]']
                return (
                  <Card
                    key={achievement.title}
                    className={`p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-r ${colors[index]} group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <achievement.icon size={20} className="text-white" weight="duotone" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                        <p className="text-sm text-white/80">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <Card className="p-6 bg-gradient-to-br from-[#F8FAFC] to-white border-[#3B82F6]/20 shadow-lg">
              <h4 className="font-semibold text-lg text-[#0F172A] mb-3">Regulatory Compliance</h4>
              <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                We maintain strict adherence to all statutory and regulatory requirements for power 
                infrastructure projects, including environmental clearances and safety certifications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full shadow">TNEB Approved</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full shadow">CEIG Compliant</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full shadow">Safety Certified</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-full shadow">ISO 9001:2015</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 lg:p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F97316]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by Power Utilities & Independent Power Producers
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Our certifications and proven track record make us the preferred partner for state power 
              utilities and independent power producers across Tamil Nadu and neighboring states.
            </p>
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-3xl font-bold text-[#3B82F6] mb-2 group-hover:scale-110 transition-transform">Class I</div>
                <div className="text-sm text-white/70">TNEB Contractor</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-3xl font-bold text-[#F97316] mb-2 group-hover:scale-110 transition-transform">ESA:530</div>
                <div className="text-sm text-white/70">Grade License</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-3xl font-bold text-[#10B981] mb-2 group-hover:scale-110 transition-transform">A & B</div>
                <div className="text-sm text-white/70">CMWSSB Class</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-3xl font-bold text-[#3B82F6] mb-2 group-hover:scale-110 transition-transform">ISO</div>
                <div className="text-sm text-white/70">9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
