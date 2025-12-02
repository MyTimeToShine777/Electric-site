import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

gsap.registerPlugin(ScrollTrigger)

export function Products() {
  const substationProjects = [
    {
      name: '400kV Substations',
      description: 'Extra High Voltage substations for bulk power transmission and distribution networks',
      specs: ['Complete EPC services', 'GIS/AIS configurations', 'Bay extensions', 'Protection & control systems'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      name: '230kV Substations',
      description: 'High voltage substations for regional power distribution and industrial power systems',
      specs: ['Turnkey execution', 'Civil & electrical works', 'Automation systems', 'Grid interconnection'],
       image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    },
    {
      name: '110kV & 66kV Substations',
      description: 'Medium voltage substations for local power distribution and industrial applications',
      specs: ['Compact designs', 'Quick deployment', 'Urban/rural configurations', 'Smart grid ready'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    },
  ]

  const transmissionProjects = [
    {
      name: '400kV Transmission Lines',
      description: 'Extra high voltage transmission lines for long-distance power transfer across regions',
      specs: ['ACSR/AAAC conductors', 'Lattice tower structures', 'ROW management', 'Environment clearance support'],
      image: 'https://images.unsplash.com/photo-1509390874765-c2168d4d4e1f?w=800&h=600&fit=crop',
    },
    {
      name: '230kV Transmission Lines',
      description: 'High voltage lines connecting substations and power plants to transmission grids',
      specs: ['Single/double circuit', 'Foundation engineering', 'Stringing works', 'Testing & energization'],
      image: 'https://images.unsplash.com/photo-1588517034798-3d1558e3dd64?w=800&h=600&fit=crop',
    },
    {
      name: '110kV & 66kV Lines',
      description: 'Medium voltage transmission and distribution lines for regional power networks',
      specs: ['Overhead/underground', 'Tower erection', 'Cable laying', 'Protection systems'],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    },
  ]

  const titleRef = useRef<HTMLDivElement>(null)

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

  const ProductCard = ({ product, index }: { product: typeof substationProjects[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.7,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        })
      })

      return () => ctx.revert()
    }, [index])

    return (
      <div ref={cardRef}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="relative h-48 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-background">{product.name}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
              {product.specs.map((spec) => (
                <div key={spec} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-sm text-foreground">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="products" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Expertise</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Project Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized expertise in executing EHV substations and transmission line projects 
            across all voltage levels from concept to commissioning.
          </p>
        </div>

        <Tabs defaultValue="substations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="substations" className="text-base">
              EHV Substations
            </TabsTrigger>
            <TabsTrigger value="transmission" className="text-base">
              Transmission Lines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="substations" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {substationProjects.map((product, index) => (
                <ProductCard key={product.name} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transmission" className="mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {transmissionProjects.map((product, index) => (
                <ProductCard key={product.name} product={product} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Turnkey Solutions</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer complete Design, Engineering, Procurement, Construction, Testing & Commissioning, 
                and Operation & Maintenance services. Our integrated approach ensures seamless project 
                execution from planning to handover, backed by our 30 years of proven expertise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Single-point responsibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Budget adherence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Quality assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm font-medium">Timely delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop"
                  alt="Power infrastructure project"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg">Delivering Power. Powering Progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
