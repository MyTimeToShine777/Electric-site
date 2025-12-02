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
      color: 'from-blue-500/20 to-blue-600/20',
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
      color: 'from-green-500/20 to-green-600/20',
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
      color: 'from-purple-500/20 to-purple-600/20',
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
      color: 'from-orange-500/20 to-orange-600/20',
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
      color: 'from-red-500/20 to-red-600/20',
      image: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-power-plant-ZNDQpkA41XE',
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
      color: 'from-teal-500/20 to-teal-600/20',
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
      color: 'from-indigo-500/20 to-indigo-600/20',
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
      color: 'from-pink-500/20 to-pink-600/20',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
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
    <section id="why-choose-us" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Strengths</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose MASS POWER SOLUTIONS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred partner for power utilities and independent power 
            producers across Tamil Nadu. Our unique combination of experience, expertise, and commitment 
            sets us apart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div ref={carouselRef} key={currentIndex}>
            <Card className="overflow-hidden shadow-2xl">
              <div className={`relative h-80 bg-gradient-to-br ${currentAdvantage.color}`}>
                <div className="absolute inset-0 opacity-30">
                  <img
                    src={currentAdvantage.image}
                    alt={currentAdvantage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {currentAdvantage.subtitle}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center shadow-2xl border-4 border-background/50">
                    <currentAdvantage.icon size={64} className="text-primary" weight="duotone" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-bold text-background">{currentAdvantage.title}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-background">{currentAdvantage.stats.value}</div>
                      <div className="text-sm text-background/90">{currentAdvantage.stats.label}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentAdvantage.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm mb-3">Key Highlights:</h4>
                  {currentAdvantage.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} weight="fill" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2 flex-wrap">
                {advantages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-border hover:bg-primary/50'
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
                  className="rounded-full"
                >
                  <CaretLeft size={20} />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <CaretRight size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Our Competitive Edge</h3>
              <p className="text-muted-foreground leading-relaxed">
                MASS POWER SOLUTIONS combines decades of experience with modern project management 
                techniques and cutting-edge technology. Our comprehensive approach ensures that every 
                project benefits from our accumulated knowledge and best practices.
              </p>
            </div>

            <div className="grid gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {advantages.map((advantage, index) => (
                <Card
                  key={advantage.title}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary/5 border-primary shadow-md scale-[1.02]'
                      : 'hover:bg-muted/50 hover:border-primary/30'
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                      index === currentIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <advantage.icon size={24} weight="duotone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-0.5 truncate">{advantage.title}</h4>
                      <p className="text-xs text-muted-foreground truncate">{advantage.subtitle}</p>
                    </div>
                    {index === currentIndex && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-xs font-medium text-primary">Active</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-primary-foreground/80 text-sm">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-primary-foreground/80 text-sm">Skilled Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80 text-sm">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
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
          background: hsl(var(--primary) / 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.5);
        }
      `}</style>
    </section>
  )
}
