import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  CaretLeft, 
  CaretRight, 
  CheckCircle, 
  Medal, 
  Users, 
  ClipboardText, 
  Target,
  ShieldCheck,
  TrendUp,
  Handshake,
  Lightning,
  Clock,
} from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const advantages = [
    {
      icon: Lightning,
      title: 'Three Decades of Excellence',
      subtitle: '30+ Years Experience',
      description: 'Since 1993, MASS POWER SOLUTIONS has been at the forefront of EHV substation and transmission line construction. Our extensive experience spans hundreds of successful projects across all voltage levels.',
      highlights: [
        'Executed 50+ major substation projects',
        'Constructed 500+ km of transmission lines',
        'Zero major safety incidents',
        'Proven track record with state utilities',
      ],
      stats: { value: '30+', label: 'Years in Business' },
      color: 'from-[#0F172A] to-[#334155]',
      iconBg: 'bg-[#3B82F6]',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      icon: Users,
      title: 'Dedicated Professional Team',
      subtitle: '300+ Skilled Professionals',
      description: 'Our greatest strength is our people. With over 300 dedicated professionals, including experienced engineers, skilled technicians, and project managers, we ensure world-class execution.',
      highlights: [
        'In-house technical expertise',
        'Continuous training & development',
        'Multi-disciplinary capabilities',
        'Experienced project management',
      ],
      stats: { value: '300+', label: 'Team Members' },
      color: 'from-[#10B981] to-[#059669]',
      iconBg: 'bg-[#10B981]',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Safety First',
      subtitle: '100% Compliance',
      description: 'We maintain the highest standards of quality control and safety protocols on every project. Our ISO 9001:2015 certification reflects our commitment to systematic quality management.',
      highlights: [
        'ISO 9001:2015 certified',
        'Comprehensive QA/QC procedures',
        'Stringent safety protocols',
        'Regular safety training programs',
      ],
      stats: { value: '100%', label: 'Quality Tested' },
      color: 'from-[#3B82F6] to-[#1D4ED8]',
      iconBg: 'bg-[#0F172A]',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery Promise',
      subtitle: 'Schedule Adherence',
      description: 'Time is critical in power infrastructure projects. Our systematic project management approach ensures timely delivery without compromising on quality or safety standards.',
      highlights: [
        'Detailed project planning',
        'Resource optimization',
        'Proactive risk management',
        'Real-time progress monitoring',
      ],
      stats: { value: 'On-Time', label: 'Delivery Focus' },
      color: 'from-[#F97316] to-[#EA580C]',
      iconBg: 'bg-[#F97316]',
      image: 'https://images.unsplash.com/photo-1509390874765-c2168d4d4e1f?w=800&h=600&fit=crop',
    },
    {
      icon: Medal,
      title: 'Certified & Licensed',
      subtitle: 'Official Recognition',
      description: 'MASS POWER SOLUTIONS holds all necessary certifications and licenses, including TNEB Class I contractor certification and ESA Grade License (ESA:530), demonstrating our technical and regulatory compliance.',
      highlights: [
        'TNEB Class I certified',
        'ESA Grade License (ESA:530)',
        'CMWSSB Class A&B contractor',
        'TNEB/CEIG liaison established',
      ],
      stats: { value: 'Class I', label: 'TNEB Certified' },
      color: 'from-[#0F172A] to-[#334155]',
      iconBg: 'bg-[#3B82F6]',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      icon: Handshake,
      title: 'Strong Industry Network',
      subtitle: 'Reliable Partnerships',
      description: 'Our extensive network of equipment suppliers, manufacturers, and subcontractors ensures timely material availability and competitive pricing for our clients.',
      highlights: [
        'Authorized OEM partnerships',
        'Strong supplier relationships',
        'Quality material procurement',
        'Cost-effective solutions',
      ],
      stats: { value: '20+', label: 'OEM Partners' },
      color: 'from-[#10B981] to-[#059669]',
      iconBg: 'bg-[#10B981]',
      image: 'https://images.unsplash.com/photo-1588517034798-3d1558e3dd64?w=800&h=600&fit=crop',
    },
    {
      icon: Target,
      title: 'Turnkey Solutions',
      subtitle: 'Complete Responsibility',
      description: 'From design to commissioning and beyond, we offer complete turnkey solutions with single-point responsibility. This integrated approach ensures seamless coordination and accountability.',
      highlights: [
        'Design & engineering',
        'Procurement & construction',
        'Testing & commissioning',
        'Operation & maintenance',
      ],
      stats: { value: 'Full', label: 'EPC Service' },
      color: 'from-[#3B82F6] to-[#1D4ED8]',
      iconBg: 'bg-[#0F172A]',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
    },
    {
      icon: TrendUp,
      title: 'Proven Success Record',
      subtitle: 'Client Satisfaction',
      description: 'Our commitment to excellence is reflected in our high client satisfaction rate and repeat business. We have successfully delivered projects for TNEB and multiple independent power producers.',
      highlights: [
        '98% client satisfaction',
        'Multiple repeat clients',
        'Zero major disputes',
        'Excellent safety record',
      ],
      stats: { value: '98%', label: 'Client Satisfaction' },
      color: 'from-[#F97316] to-[#EA580C]',
      iconBg: 'bg-[#F97316]',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
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
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advantages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, advantages.length])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { 
          opacity: 0, 
          x: 60,
          scale: 0.95,
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.8, 
          ease: 'power3.out',
        }
      )
    }
  }, [currentIndex])

  const nextSlide = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => (prev + 1) % advantages.length)
  }

  const prevSlide = () => {
    setIsPaused(true)
    setCurrentIndex((prev) => (prev - 1 + advantages.length) % advantages.length)
  }

  const goToSlide = (index: number) => {
    setIsPaused(true)
    setCurrentIndex(index)
  }

  const currentAdvantage = advantages[currentIndex]

  return (
    <section id="why-choose-us" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3B82F6]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F97316]/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 text-base font-bold text-[#3B82F6] bg-[#3B82F6]/10 rounded-full mb-4">Our Strengths</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-4">
            Why Choose MASS POWER SOLUTIONS?
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Discover what makes us the preferred partner for power utilities and independent power 
            producers across Tamil Nadu. Our unique combination of experience, expertise, and commitment 
            sets us apart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
          <div ref={carouselRef} key={currentIndex}>
            <Card className={`overflow-hidden shadow-2xl border-0 bg-gradient-to-br ${currentAdvantage.color}`}>
              <div className="relative h-72">
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={currentAdvantage.image}
                    alt={currentAdvantage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                    {currentAdvantage.subtitle}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-28 h-28 rounded-full ${currentAdvantage.iconBg} flex items-center justify-center shadow-2xl ring-4 ring-white/20`}>
                    <currentAdvantage.icon size={56} className="text-white" weight="duotone" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent">
                  <div className="flex items-end justify-between">
                    <h3 className="text-xl font-bold text-white">{currentAdvantage.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{currentAdvantage.stats.value}</div>
                      <div className="text-xs text-white/80">{currentAdvantage.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-[#64748B] leading-relaxed mb-5 text-sm">
                  {currentAdvantage.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-[#0F172A] mb-2">Key Highlights:</h4>
                  {currentAdvantage.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-[#10B981] flex-shrink-0 mt-0.5" size={18} weight="fill" />
                      <span className="text-sm text-[#0F172A]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-2 flex-wrap">
                {advantages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-[#3B82F6]' 
                        : 'w-2 bg-[#E2E8F0] hover:bg-[#3B82F6]/50'
                    }`}
                    aria-label={`View advantage ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full border-[#E2E8F0] hover:bg-[#F8FAFC]"
                >
                  <CaretLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full border-[#E2E8F0] hover:bg-[#F8FAFC]"
                >
                  <CaretRight size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="mb-5">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Our Competitive Edge</h3>
              <p className="text-[#64748B] leading-relaxed text-sm">
                MASS POWER SOLUTIONS combines decades of experience with modern project management 
                techniques and cutting-edge technology. Our comprehensive approach ensures that every 
                project benefits from our accumulated knowledge and best practices.
              </p>
            </div>

            <div className="grid gap-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {advantages.map((advantage, index) => (
                <Card
                  key={advantage.title}
                  className={`p-3 cursor-pointer transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#3B82F6]/5 border-[#3B82F6] shadow-md'
                      : 'border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#3B82F6]/30'
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      index === currentIndex
                        ? 'bg-[#3B82F6] text-white'
                        : 'bg-[#3B82F6]/10 text-[#3B82F6]'
                    }`}>
                      <advantage.icon size={20} weight="duotone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-[#0F172A] mb-0.5 truncate">{advantage.title}</h4>
                      <p className="text-xs text-[#64748B] truncate">{advantage.subtitle}</p>
                    </div>
                    {index === currentIndex && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></div>
                        <span className="text-xs font-medium text-[#3B82F6]">Active</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-5 lg:p-8 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F97316]/10 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-4 gap-6 text-center relative z-10">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">30+</div>
              <div className="text-white/70 text-sm">Years of Excellence</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#10B981] transition-colors">300+</div>
              <div className="text-white/70 text-sm">Skilled Professionals</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#F97316] transition-colors">50+</div>
              <div className="text-white/70 text-sm">Major Projects</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">98%</div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  )
}
