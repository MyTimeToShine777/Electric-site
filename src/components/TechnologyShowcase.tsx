import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CaretLeft, CaretRight, Cpu, Lightning, ShieldStar, Power, Gauge, Broadcast } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function TechnologyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const titleRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const technologies = [
    {
      icon: Lightning,
      title: 'Gas Insulated Switchgear (GIS)',
      category: 'High Voltage Equipment',
      description: 'Advanced GIS technology for compact and reliable EHV substation installations. Suitable for space-constrained urban areas with minimal environmental footprint.',
      features: [
        'Compact footprint - 10% of AIS',
        'Maintenance-free operation',
        'Enhanced safety & reliability',
        'Indoor/outdoor installation',
      ],
      voltageRange: '66kV to 400kV',
      applications: 'Urban substations, Industrial power systems',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Power,
      title: 'Air Insulated Switchgear (AIS)',
      category: 'Conventional Equipment',
      description: 'Proven AIS technology for large-scale EHV substations with excellent reliability and ease of maintenance. Cost-effective solution for outdoor installations.',
      features: [
        'Proven technology & reliability',
        'Easy maintenance access',
        'Cost-effective solution',
        'Modular expansion capability',
      ],
      voltageRange: '66kV to 400kV',
      applications: 'Transmission substations, Power plants',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Broadcast,
      title: 'Power Transformers',
      category: 'Transformation Equipment',
      description: 'High-efficiency power transformers with advanced cooling systems and protection mechanisms. Designed for continuous operation under varying load conditions.',
      features: [
        'Oil-filled & dry-type options',
        'Online condition monitoring',
        'Low noise & losses',
        'Seismic resistant design',
      ],
      voltageRange: '33kV to 400kV',
      applications: 'Substations, Distribution networks',
      image: 'https://unsplash.com/photos/a-black-and-white-photo-of-a-power-plant-ZNDQpkA41XE',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: ShieldStar,
      title: 'Protection & Control Systems',
      category: 'Digital Technology',
      description: 'State-of-the-art numerical protection relays and SCADA systems for comprehensive monitoring and control of substation equipment and operations.',
      features: [
        'Numerical protection relays',
        'SCADA integration',
        'Real-time monitoring',
        'Remote diagnostics',
      ],
      voltageRange: 'All Voltage Levels',
      applications: 'Substations, Control centers',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Cpu,
      title: 'Substation Automation',
      category: 'Smart Grid Technology',
      description: 'Advanced automation systems enabling unmanned substation operation with centralized monitoring and control. IEC 61850 compliant communication architecture.',
      features: [
        'IEC 61850 protocol',
        'Unmanned operation',
        'Centralized monitoring',
        'Predictive maintenance',
      ],
      voltageRange: 'All Voltage Levels',
      applications: 'Smart substations, Grid modernization',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Gauge,
      title: 'Testing & Measurement',
      category: 'Quality Assurance',
      description: 'Comprehensive testing equipment and procedures for commissioning and periodic testing of EHV equipment. Ensuring compliance with international standards.',
      features: [
        'High voltage testing',
        'Relay calibration',
        'Transformer diagnostics',
        'Cable fault location',
      ],
      voltageRange: 'Up to 400kV',
      applications: 'T&C services, Maintenance',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
      color: 'from-teal-500 to-teal-600',
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
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, technologies.length])

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { 
          opacity: 0, 
          x: 50,
          scale: 0.95,
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.7, 
          ease: 'power3.out',
        }
      )
    }
  }, [currentIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % technologies.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTech = technologies[currentIndex]

  return (
    <section id="technology" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technology & Equipment</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Advanced Power Infrastructure Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deploy cutting-edge equipment and technologies from leading global manufacturers, 
            ensuring reliable and efficient power infrastructure installations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div ref={carouselRef} key={currentIndex}>
            <Card className="overflow-hidden shadow-2xl">
              <div className={`relative h-80 bg-gradient-to-br ${currentTech.color}`}>
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={currentTech.image}
                    alt={currentTech.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {currentTech.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                    <currentTech.icon size={64} className="text-primary" weight="duotone" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-background mb-2">{currentTech.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentTech.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Voltage Range</div>
                    <div className="font-semibold text-sm">{currentTech.voltageRange}</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">Applications</div>
                    <div className="font-semibold text-sm">{currentTech.applications}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentTech.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {technologies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-border hover:bg-primary/50'
                    }`}
                    aria-label={`View technology ${index + 1}`}
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

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Equipment Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MASS POWER SOLUTIONS has extensive experience in handling and installing diverse 
                power infrastructure equipment across all voltage levels. Our technical team is 
                proficient in the latest technologies and international standards.
              </p>
            </div>

            <div className="grid gap-3">
              {technologies.map((tech, index) => (
                <Card
                  key={tech.title}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary/5 border-primary shadow-md'
                      : 'hover:bg-muted/50 hover:border-primary/30'
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      index === currentIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <tech.icon size={24} weight="duotone" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-0.5">{tech.title}</h4>
                      <p className="text-xs text-muted-foreground">{tech.category}</p>
                    </div>
                    {index === currentIndex && (
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightning size={32} className="text-primary" weight="duotone" />
              </div>
              <h4 className="font-semibold mb-2">OEM Partnerships</h4>
              <p className="text-sm text-muted-foreground">
                Authorized partners with leading global equipment manufacturers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ShieldStar size={32} className="text-accent" weight="duotone" />
              </div>
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm text-muted-foreground">
                Stringent quality checks and factory acceptance testing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Gauge size={32} className="text-secondary" weight="duotone" />
              </div>
              <h4 className="font-semibold mb-2">Performance Testing</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive site and commissioning tests as per standards
              </p>
            </div>
          </div>
        </Card>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  )
}
