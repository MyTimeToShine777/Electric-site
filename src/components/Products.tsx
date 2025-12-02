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
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      name: '230kV Substations',
      description: 'High voltage substations for regional power distribution and industrial power systems',
      specs: ['Turnkey execution', 'Civil & electrical works', 'Automation systems', 'Grid interconnection'],
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      name: '110kV & 66kV Substations',
      description: 'Medium voltage substations for local power distribution and industrial applications',
      specs: ['Compact designs', 'Quick deployment', 'Urban/rural configurations', 'Smart grid ready'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
      color: 'from-[#10B981] to-[#059669]',
    },
  ]

  const transmissionProjects = [
    {
      name: '400kV Transmission Lines',
      description: 'Extra high voltage transmission lines for long-distance power transfer across regions',
      specs: ['ACSR/AAAC conductors', 'Lattice tower structures', 'ROW management', 'Environment clearance support'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      color: 'from-[#F97316] to-[#EA580C]',
    },
    {
      name: '230kV Transmission Lines',
      description: 'High voltage lines connecting substations and power plants to transmission grids',
      specs: ['Single/double circuit', 'Foundation engineering', 'Stringing works', 'Testing & energization'],
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop',
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      name: '110kV & 66kV Lines',
      description: 'Medium voltage transmission and distribution lines for regional power networks',
      specs: ['Overhead/underground', 'Tower erection', 'Cable laying', 'Protection systems'],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
  ]

  const titleRef = useRef<HTMLDivElement>(null)

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

  const ProductCard = ({ product, index }: { product: typeof substationProjects[0]; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Ensure card is visible first
        gsap.set(cardRef.current, { opacity: 1 })

        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.7,
          delay: index * 0.15,
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
        <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-0 bg-white hover:-translate-y-2">
          <div className="relative h-44 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-80`}></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{product.name}</h3>
            </div>
          </div>
          <div className="p-5">
            <p className="text-[#64748B] mb-4 leading-relaxed text-sm">{product.description}</p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-2">Key Features:</h4>
              {product.specs.map((spec, idx) => (
                <div key={spec} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color} flex-shrink-0`}></div>
                  <span className="text-sm text-[#0F172A]">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="products" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold rounded-full text-sm mb-4 shadow-lg shadow-[#10B981]/25">Our Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Project Capabilities
          </h2>
          <p className="text-base text-[#64748B] max-w-3xl mx-auto">
            Specialized expertise in executing EHV substations and transmission line projects 
            across all voltage levels from concept to commissioning.
          </p>
        </div>

        <Tabs defaultValue="substations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10 bg-[#0F172A]/5 p-1.5 rounded-xl h-14">
            <TabsTrigger value="substations" className="text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3B82F6] data-[state=active]:to-[#1D4ED8] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all">
              EHV Substations
            </TabsTrigger>
            <TabsTrigger value="transmission" className="text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F97316] data-[state=active]:to-[#EA580C] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg transition-all">
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

        <div className="mt-10 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F97316]/10 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Turnkey Solutions</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We offer complete Design, Engineering, Procurement, Construction, Testing & Commissioning, 
                and Operation & Maintenance services. Our integrated approach ensures seamless project 
                execution from planning to handover, backed by our 30 years of proven expertise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                  <span className="text-sm font-medium text-white/90">Single-point responsibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                  <span className="text-sm font-medium text-white/90">Budget adherence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
                  <span className="text-sm font-medium text-white/90">Quality assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                  <span className="text-sm font-medium text-white/90">Timely delivery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop"
                  alt="Power infrastructure project"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
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
