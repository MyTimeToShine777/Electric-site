import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Crosshair, Users, ShieldCheck, Clock, Handshake, Network } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const valuePropositions = [
    {
      icon: Crosshair,
      title: 'Proven Expertise & Experience',
      description: '30 years of specialized experience in EHV Substation and Transmission Line civil and electrical works',
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      icon: Clock,
      title: 'Timely Project Delivery',
      description: 'Focused on on-time delivery of projects within budgeted cost with strict adherence to timelines',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      icon: Users,
      title: 'Dedicated Professional Team',
      description: 'In-house team of 300+ professionals and skilled technicians experienced in all construction aspects',
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Safety Standards',
      description: 'Strict adherence to quality protocols and safety regulations on every project site',
      color: 'from-[#F97316] to-[#EA580C]',
    },
    {
      icon: Network,
      title: 'Resource Network',
      description: 'Good understanding of local conditions with access to technical and financial resources',
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      icon: Handshake,
      title: 'Strong Supplier Relationships',
      description: 'Extensive network of suppliers ensuring timely delivery of materials and equipment',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
  ]

  const capabilities = [
    'EHV Substation Design',
    'Civil & Electrical Works',
    'Transmission Line Construction',
    'Testing & Commissioning',
    'Operation & Maintenance',
    'Turnkey Project Execution',
    'TNEB Class I Certified',
    'ESA Grade License Holder',
    'CMWSSB Class A&B Contractor',
    'TNEB/CEIG Liaison',
    'Power Utility Projects',
    'Independent Power Producers',
  ]

  const titleRef = useRef<HTMLDivElement>(null)
  const contentLeftRef = useRef<HTMLDivElement>(null)
  const contentRightRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility
      gsap.set([titleRef.current, contentLeftRef.current, ctaRef.current], { opacity: 1 })
      if (contentRightRef.current?.children) {
        gsap.set(contentRightRef.current.children, { opacity: 1 })
      }

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

      gsap.from(contentLeftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentLeftRef.current,
          start: 'top 85%',
        },
      })

      if (contentRightRef.current?.children) {
        gsap.from(contentRightRef.current.children, {
          opacity: 0,
          x: 50,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRightRef.current,
            start: 'top 85%',
          },
        })
      }

      gsap.from(ctaRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold rounded-full text-sm mb-4 shadow-lg shadow-[#F97316]/25">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0F172A]">
            Power Infrastructure Excellence
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-3xl mx-auto">
            Three decades of specialized expertise in designing, engineering, and executing EHV substation 
            and transmission line projects for power utilities and independent power producers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mb-6 overflow-hidden">
          <div ref={contentLeftRef} className="space-y-4 sm:space-y-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-4 ring-white">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop" 
                alt="High voltage electrical substation with transformers and switchgear"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white">Powering Progress Since 1993</h3>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-[#0F172A]">Our Heritage</h3>
              <p className="text-[#64748B] leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                With <strong className="text-[#0F172A]">30 years of proven expertise</strong>, MASS POWER SOLUTIONS has 
                established itself as a leading contractor for EHV substation and transmission line works. 
                We specialize in complete turnkey solutions covering Design, Engineering, Procurement, 
                Construction, Testing & Commissioning, and Operation & Maintenance services.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                As a <strong className="text-[#0F172A]">TNEB certified Class I contractor</strong> and <strong className="text-[#0F172A]">ESA Grade License 
                (ESA:530) holder</strong> issued by the Electrical Licensing Board of Tamil Nadu, we execute 
                complex EHV substation and transmission line projects for state power utilities and independent 
                power producers across Tamil Nadu and neighboring states.
              </p>
              <p className="text-[#64748B] leading-relaxed text-sm sm:text-base">
                Our Class A&B CMWSSB contractor certification further demonstrates our commitment to delivering 
                infrastructure projects of the highest standards.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#0F172A]">Core Competencies</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-2">
                    <CheckCircle className="text-[#10B981] flex-shrink-0 mt-0.5" size={16} weight="fill" />
                    <span className="text-xs sm:text-sm text-[#64748B] leading-tight">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={contentRightRef} className="grid gap-4 sm:gap-5 w-full max-w-full" style={{ opacity: 1 }}>
            {valuePropositions.map((item, index) => (
              <Card
                key={item.title}
                className={`p-3 sm:p-4 md:p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 bg-gradient-to-r ${item.color} group overflow-hidden w-full`}
                style={{ opacity: 1 }}
              >
                <div className="flex items-start gap-2 sm:gap-3 w-full">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={16} className="text-white sm:hidden" weight="duotone" />
                    <item.icon size={22} className="text-white hidden sm:block md:hidden" weight="duotone" />
                    <item.icon size={24} className="text-white hidden md:block" weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-white mb-0.5 sm:mb-1 truncate sm:whitespace-normal">{item.title}</h4>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed break-words overflow-wrap-anywhere">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-5 sm:p-8 lg:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1509390874765-c2168d4d4e1f?w=1920&h=1080&fit=crop" 
              alt="Power transmission lines and infrastructure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F97316]/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Value of Association with MASS POWER SOLUTIONS
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-5 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Partner with a contractor who understands the complexities of power infrastructure. Our proven track 
              record, dedicated team, and commitment to quality ensure successful project delivery every time.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#F97316] group-hover:scale-110 transition-transform">30+</div>
                <div className="text-white/70 text-xs sm:text-sm">Years of Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#3B82F6] group-hover:scale-110 transition-transform">300+</div>
                <div className="text-white/70 text-xs sm:text-sm">Skilled Professionals</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#10B981] group-hover:scale-110 transition-transform">100%</div>
                <div className="text-white/70 text-xs sm:text-sm">Quality Compliance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:bg-white/15 transition-colors group">
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-[#F97316] group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-white/70 text-xs sm:text-sm">Project Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
