import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Quotes, CaretLeft, CaretRight, Star } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: 'K. Sundararajan',
      role: 'Chief Engineer (Projects)',
      company: 'Tamil Nadu Electricity Board',
      rating: 5,
      text: 'MASS POWER SOLUTIONS has executed multiple EHV substation projects for TNEB with exceptional quality and adherence to timelines. Their technical expertise in civil and electrical works, combined with strict safety protocols, makes them a reliable contractor for critical power infrastructure.',
      project: '400kV Substation, Madurai',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sundararajan&backgroundColor=b6e3f4',
    },
    {
      name: 'Dr. R. Manikandan',
      role: 'Project Director',
      company: 'Independent Power Producer',
      rating: 5,
      text: 'We engaged MASS POWER SOLUTIONS for complete turnkey execution of our 230kV substation and interconnection works. Their in-house team of 300+ professionals delivered the project ahead of schedule. The testing and commissioning was flawless, demonstrating their deep technical competence.',
      project: '230kV Substation & T/L Package',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manikandan&backgroundColor=c0aede',
    },
    {
      name: 'S. Venkatesh',
      role: 'Divisional Engineer',
      company: 'CMWSSB',
      rating: 5,
      text: 'As a Class A&B CMWSSB contractor, MASS POWER SOLUTIONS has demonstrated excellent project management and execution capabilities. Their understanding of local conditions and strong supplier network ensures timely material availability and smooth project completion.',
      project: 'Infrastructure Project, Chennai',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Venkatesh&backgroundColor=d1d4f9',
    },
    {
      name: 'A. Ramachandran',
      role: 'GM (Transmission)',
      company: 'State Power Utility',
      rating: 5,
      text: '30 years of experience truly shows in MASS POWER SOLUTIONS\' work. From design to commissioning, every aspect of the transmission line project was handled professionally. Their established liaison with TNEB/CEIG authorities facilitated smooth regulatory clearances and approvals.',
      project: '400kV D/C Transmission Line',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ramachandran&backgroundColor=ffd5dc',
    },
    {
      name: 'P. Krishnan',
      role: 'Operations Manager',
      company: 'Industrial Power System',
      rating: 5,
      text: 'MASS POWER SOLUTIONS\' O&M services have been exceptional. Their preventive maintenance programs and quick breakdown support ensure our 110kV substation operates at optimal efficiency. The dedicated support team understands our requirements and responds promptly.',
      project: '110kV Substation O&M',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Krishnan&backgroundColor=ffdfbf',
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
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (slidesRef.current) {
      gsap.fromTo(
        slidesRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      )
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[currentSlide]

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3B82F6]/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F97316]/10 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold rounded-full text-sm mb-4 shadow-lg shadow-[#F97316]/25">Client Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Trusted by power utilities, independent power producers, and industrial clients 
            for delivering exceptional EHV infrastructure projects across Tamil Nadu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white">
            <div className="grid lg:grid-cols-5 gap-6 p-6 lg:p-10">
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="relative mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#3B82F6] shadow-xl">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center shadow-lg">
                    <Quotes size={20} className="text-white" weight="fill" />
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">{activeTestimonial.name}</h3>
                  <p className="text-sm text-[#3B82F6] font-medium mb-1">{activeTestimonial.role}</p>
                  <p className="text-sm text-[#64748B] mb-3">{activeTestimonial.company}</p>
                  <div className="flex gap-1 justify-center lg:justify-start mb-3">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-[#F97316]" />
                    ))}
                  </div>
                  <span className="inline-block px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-full shadow">
                    {activeTestimonial.project}
                  </span>
                </div>
              </div>

              <div ref={slidesRef} className="lg:col-span-3 flex flex-col justify-center" key={currentSlide}>
                <p className="text-base text-[#64748B] leading-relaxed italic mb-5">
                  "{activeTestimonial.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'w-8 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8]' : 'w-2 bg-[#E2E8F0] hover:bg-[#3B82F6]/50'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevSlide}
                      className="rounded-full border-[#3B82F6]/30 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]"
                    >
                      <CaretLeft size={20} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextSlide}
                      className="rounded-full border-[#3B82F6]/30 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]"
                    >
                      <CaretRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all border-0 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">50+</div>
            <div className="text-sm text-white/80">Completed Projects</div>
          </Card>
          <Card className="p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all border-0 bg-gradient-to-br from-[#F97316] to-[#EA580C] group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-sm text-white/80">Client Satisfaction</div>
          </Card>
          <Card className="p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all border-0 bg-gradient-to-br from-[#10B981] to-[#059669] group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-sm text-white/80">On-Time Delivery</div>
          </Card>
          <Card className="p-5 text-center hover:shadow-xl hover:-translate-y-1 transition-all border-0 bg-gradient-to-br from-[#0F172A] to-[#334155] group">
            <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">Zero</div>
            <div className="text-sm text-white/80">Major Incidents</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
