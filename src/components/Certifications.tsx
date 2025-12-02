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
      color: 'from-blue-500/20 to-blue-600/20',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      icon: Certificate,
      title: 'ESA Grade License',
      number: 'ESA:530',
      description: 'Electrical Supervisor Authorization Grade License issued by Electrical Licensing Board of Tamil Nadu',
      year: 'Active',
      color: 'from-green-500/20 to-green-600/20',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
    },
    {
      icon: ShieldCheck,
      title: 'CMWSSB Contractor',
      number: 'Class A & B',
      description: 'Certified contractor for Chennai Metropolitan Water Supply and Sewerage Board infrastructure projects',
      year: 'Active',
      color: 'from-purple-500/20 to-purple-600/20',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      icon: Medal,
      title: 'ISO 9001:2015',
      number: 'Quality Management',
      description: 'International certification for quality management systems ensuring consistent project delivery excellence',
      year: '2012',
      color: 'from-orange-500/20 to-orange-600/20',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
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
    <section id="certifications" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Certifications & Licenses</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognized certifications and licenses demonstrating our commitment to quality, 
            safety, and regulatory compliance in power infrastructure construction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div ref={slideRef} key={activeIndex}>
              <Card className="overflow-hidden shadow-2xl border-2">
                <div className={`relative h-64 bg-gradient-to-br ${activeCert.color}`}>
                  <div className="absolute inset-0 opacity-30">
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-xl">
                      <activeCert.icon size={48} className="text-primary" weight="duotone" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{activeCert.title}</h3>
                    <Badge variant="secondary">{activeCert.year}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-4">{activeCert.number}</p>
                  <p className="text-muted-foreground leading-relaxed">{activeCert.description}</p>
                </div>
              </Card>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`View certification ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Licensed & Certified</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                MASS POWER SOLUTIONS holds all necessary certifications and licenses required for 
                executing EHV substation and transmission line projects. Our credentials reflect our 
                commitment to maintaining the highest standards of quality and regulatory compliance.
              </p>
            </div>

            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className="p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <achievement.icon size={20} className="text-primary" weight="duotone" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-semibold text-lg mb-3">Regulatory Compliance</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We maintain strict adherence to all statutory and regulatory requirements for power 
                infrastructure projects, including environmental clearances and safety certifications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">TNEB Approved</Badge>
                <Badge variant="outline" className="text-xs">CEIG Compliant</Badge>
                <Badge variant="outline" className="text-xs">Safety Certified</Badge>
                <Badge variant="outline" className="text-xs">ISO 9001:2015</Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Trusted by Power Utilities & Independent Power Producers
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our certifications and proven track record make us the preferred partner for state power 
            utilities and independent power producers across Tamil Nadu and neighboring states.
          </p>
          <div className="grid sm:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">Class I</div>
              <div className="text-sm text-muted-foreground">TNEB Contractor</div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">ESA:530</div>
              <div className="text-sm text-muted-foreground">Grade License</div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">A & B</div>
              <div className="text-sm text-muted-foreground">CMWSSB Class</div>
            </div>
            <div className="bg-background rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">9001:2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
