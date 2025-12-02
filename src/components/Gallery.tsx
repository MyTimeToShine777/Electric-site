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
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'substation-2',
      title: '230kV Substation Construction',
      category: 'High Voltage',
      description: 'Turnkey execution of 230kV AIS substation with 3 incoming and 5 outgoing feeders. Complete civil, electrical, and T&C works delivered on schedule with zero safety incidents.',
      location: 'Tamil Nadu',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      color: 'from-green-500 to-green-700',
    },
    {
      id: 'substation-3',
      title: '110kV Distribution Substation',
      category: 'Medium Voltage',
      description: '110kV substation for urban distribution network. Compact design with advanced automation and remote monitoring capabilities. Project included equipment procurement and installation.',
      location: 'Tamil Nadu',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-purple-700',
    },
    {
      id: 'substation-4',
      title: '66kV Industrial Substation',
      category: 'Industrial Power',
      description: 'Dedicated 66kV substation for industrial power supply. Complete EPC scope including transformer installation, switchgear, protection systems, and auxiliary power supply.',
      location: 'Tamil Nadu',
      year: '2020',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop',
      color: 'from-orange-500 to-orange-700',
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
      image: 'https://images.unsplash.com/photo-1509390874765-c2168d4d4e1f?w=800&h=600&fit=crop',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'transmission-2',
      title: '230kV Transmission Line',
      category: 'High Voltage',
      description: '85 km single circuit 230kV line connecting substation to grid. ACSR conductor with complete ROW clearance, tower foundation, and energization activities.',
      location: 'Tamil Nadu',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1588517034798-3d1558e3dd64?w=800&h=600&fit=crop',
      color: 'from-green-500 to-emerald-700',
    },
    {
      id: 'transmission-3',
      title: '110kV Overhead Line',
      category: 'Medium Voltage',
      description: '42 km overhead transmission line for regional grid strengthening. Included tower supply, erection, conductor stringing, and protection system installation.',
      location: 'Tamil Nadu',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      color: 'from-violet-500 to-purple-700',
    },
    {
      id: 'transmission-4',
      title: 'Underground Cable Network',
      category: 'Cable Works',
      description: '15 km underground 66kV cable network for urban area distribution. Complete cable laying, jointing, termination, and testing works with HDD crossings.',
      location: 'Tamil Nadu',
      year: '2020',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
      color: 'from-amber-500 to-orange-700',
    },
  ]

  const infoCards = [
    {
      icon: Lightning,
      title: 'Substations Completed',
      value: '50+',
      description: 'Successfully commissioned',
    },
    {
      icon: Broadcast,
      title: 'Transmission Lines',
      value: '500+ km',
      description: 'Constructed & energized',
    },
    {
      icon: HardHat,
      title: 'Team Strength',
      value: '300+',
      description: 'Skilled professionals',
    },
    {
      icon: Wrench,
      title: 'O&M Contracts',
      value: '20+',
      description: 'Active maintenance',
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

      gsap.from(infoCardsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: infoCardsRef.current,
          start: 'top 80%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const GalleryCard = ({ item, index }: { item: GalleryItem; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const ctx = gsap.context(() => {
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
          className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
          onClick={() => setSelectedImage(item)}
        >
          <div className="relative h-56 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                {item.category}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
              <div className="flex items-center gap-2 text-sm text-white/90">
                {item.location && <span>{item.location}</span>}
                {item.year && <span>• {item.year}</span>}
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Project Gallery</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Projects & Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise in EHV substation and transmission line projects across Tamil Nadu. 
            Each project demonstrates our commitment to quality, safety, and on-time delivery.
          </p>
        </div>

        <div ref={infoCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infoCards.map((card) => (
            <Card key={card.title} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon size={24} className="text-primary" weight="duotone" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{card.value}</div>
              <div className="font-semibold mb-1">{card.title}</div>
              <div className="text-sm text-muted-foreground">{card.description}</div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="substations" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="substations" className="text-base">
              Substation Projects
            </TabsTrigger>
            <TabsTrigger value="transmission" className="text-base">
              Transmission Lines
            </TabsTrigger>
          </TabsList>

          <TabsContent value="substations">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {substationProjects.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transmission">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {transmissionProjects.map((item, index) => (
                <GalleryCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>
              <div className="relative h-96">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {selectedImage.location && <span>{selectedImage.location}</span>}
                    {selectedImage.year && <span>• {selectedImage.year}</span>}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{selectedImage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
