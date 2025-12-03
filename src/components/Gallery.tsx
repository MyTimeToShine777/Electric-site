import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { X, Lightning, Broadcast, HardHat, Wrench } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

interface GalleryItem {
  id: string
  title: string
  category: string
  description: string
  location?: string
  year?: string
  image: string
  color: string
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const infoCardsRef = useRef<HTMLDivElement>(null)

  const substationProjects = [
    {
      id: 'substation-1',
      title: '400kV EHV Substation',
      category: 'Extra High Voltage',
      description: '400kV GIS substation project including complete civil works, equipment installation, and commissioning. Project scope covered 4 bays with complete protection and SCADA integration.',
      location: 'Tamil Nadu',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      id: 'substation-2',
      title: '230kV Substation Construction',
      category: 'High Voltage',
      description: 'Turnkey execution of 230kV AIS substation with 3 incoming and 5 outgoing feeders. Complete civil, electrical, and T&C works delivered on schedule with zero safety incidents.',
      location: 'Tamil Nadu',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1413882353314-73a3d0d30538?w=800&h=600&fit=crop',
      color: 'from-[#3B82F6] to-[#1E40AF]',
    },
    {
      id: 'substation-3',
      title: '110kV Distribution Substation',
      category: 'Medium Voltage',
      description: '110kV substation for urban distribution network. Compact design with advanced automation and remote monitoring capabilities. Project included equipment procurement and installation.',
      location: 'Tamil Nadu',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      color: 'from-[#10B981] to-[#047857]',
    },
    {
      id: 'substation-4',
      title: '66kV Industrial Substation',
      category: 'Industrial Power',
      description: 'Dedicated 66kV substation for industrial power supply. Complete EPC scope including transformer installation, switchgear, protection systems, and auxiliary power supply.',
      location: 'Tamil Nadu',
      year: '2020',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      color: 'from-[#F97316] to-[#C2410C]',
    },
  ]

  const transmissionProjects = [
    {
      id: 'transmission-1',
      title: '400kV D/C Transmission Line',
      category: 'Extra High Voltage',
      description: '120 km double circuit 400kV transmission line with lattice tower structures. Complete line construction including foundation, tower erection, stringing, and testing works.',
      location: 'Tamil Nadu',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      color: 'from-[#0F172A] to-[#1E293B]',
    },
    {
      id: 'transmission-2',
      title: '230kV Transmission Line',
      category: 'High Voltage',
      description: '85 km single circuit 230kV line connecting substation to grid. ACSR conductor with complete ROW clearance, tower foundation, and energization activities.',
      location: 'Tamil Nadu',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=600&fit=crop',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      id: 'transmission-3',
      title: '110kV Overhead Line',
      category: 'Medium Voltage',
      description: '42 km overhead transmission line for regional grid strengthening. Included tower supply, erection, conductor stringing, and protection system installation.',
      location: 'Tamil Nadu',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      id: 'transmission-4',
      title: 'Underground Cable Network',
      category: 'Cable Works',
      description: '15 km underground 66kV cable network for urban area distribution. Complete cable laying, jointing, termination, and testing works with HDD crossings.',
      location: 'Tamil Nadu',
      year: '2020',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ]

  const infoCards = [
    {
      icon: Lightning,
      title: 'Substations Completed',
      value: '50+',
      description: 'Successfully commissioned',
      color: 'from-[#0F172A] to-[#1E293B]',
    },
    {
      icon: Broadcast,
      title: 'Transmission Lines',
      value: '500+ km',
      description: 'Constructed & energized',
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      icon: HardHat,
      title: 'Team Strength',
      value: '300+',
      description: 'Skilled professionals',
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      icon: Wrench,
      title: 'O&M Contracts',
      value: '20+',
      description: 'Active maintenance',
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible first
      gsap.set(titleRef.current, { opacity: 1 })
      if (infoCardsRef.current?.children) gsap.set(infoCardsRef.current.children, { opacity: 1 })

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

      if (infoCardsRef.current?.children) {
        gsap.from(infoCardsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoCardsRef.current,
            start: 'top 85%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const GalleryCard = ({ item, index }: { item: GalleryItem; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
        // Ensure card is visible first
        gsap.set(cardRef.current, { opacity: 1 })

        gsap.from(cardRef.current, {
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 0.7,
          delay: index * 0.05,
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
        <Card
          className="overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-0 bg-white rounded-xl"
          onClick={() => setSelectedImage(item)}
        >
          <div className="relative h-52 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute top-3 right-3">
              <span className="inline-block px-3 py-1.5 bg-white/95 text-[#0F172A] text-sm font-bold rounded-full shadow-lg backdrop-blur-sm">
                {item.category}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-lg">{item.title}</h3>
              <div className="flex items-center gap-3 text-base text-white/90 font-medium">
                {item.location && (
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                    {item.location}
                  </span>
                )}
                {item.year && (
                  <span className="px-2 py-0.5 bg-white/20 rounded text-xs backdrop-blur-sm">{item.year}</span>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-gradient-to-b from-white to-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#3B82F6]/10 text-[#3B82F6] font-bold rounded-full text-sm mb-4">
            Project Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0F172A]">
            Our Projects & Infrastructure
          </h2>
          <p className="text-base text-[#64748B] max-w-3xl mx-auto">
            Showcasing our expertise in EHV substation and transmission line projects across Tamil Nadu. 
            Each project demonstrates our commitment to quality, safety, and on-time delivery.
          </p>
        </div>

        <div ref={infoCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {infoCards.map((card) => (
            <Card key={card.title} className={`relative overflow-hidden p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 bg-gradient-to-br ${card.color}`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                  <card.icon size={28} className="text-white" weight="duotone" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{card.value}</div>
                <div className="font-semibold text-white/90 text-base mb-1">{card.title}</div>
                <div className="text-sm text-white/70">{card.description}</div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="substations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6 h-12 bg-[#E2E8F0] p-1">
            <TabsTrigger value="substations" className="text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-[#0F172A] data-[state=active]:shadow-sm">
              Substation Projects
            </TabsTrigger>
            <TabsTrigger value="transmission" className="text-base font-semibold data-[state=active]:bg-white data-[state=active]:text-[#0F172A] data-[state=active]:shadow-sm">
              Transmission Lines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="substations">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {substationProjects.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transmission">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {transmissionProjects.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border border-[#E2E8F0]">
          {selectedImage && (
            <div className="relative bg-white">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#F8FAFC] transition-colors shadow-md"
              >
                <X size={16} className="text-[#0F172A]" />
              </button>
              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.color} opacity-50`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                  <div className="flex items-center gap-3 text-sm text-[#64748B] font-medium">
                    {selectedImage.location && <span>{selectedImage.location}</span>}
                    {selectedImage.year && <span>• {selectedImage.year}</span>}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0F172A]">{selectedImage.title}</h3>
                <p className="text-[#64748B] leading-relaxed text-sm">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
