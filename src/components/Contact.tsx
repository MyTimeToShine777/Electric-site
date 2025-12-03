import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Envelope, Clock } from '@phosphor-icons/react'
import { toast } from 'sonner'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactCardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility
      gsap.set([titleRef.current, formRef.current, ctaRef.current], { opacity: 1 })
      if (contactCardsRef.current?.children) {
        gsap.set(contactCardsRef.current.children, { opacity: 1 })
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

      gsap.from(formRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
        },
      })

      if (contactCardsRef.current?.children) {
        gsap.from(contactCardsRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: 'top 85%',
          },
        })
      }

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success('Message sent successfully! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['MASS POWER SOLUTIONS', 'Tamil Nadu', 'India'],
      color: 'from-[#0F172A] to-[#334155]',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX', 'Mon-Sat: 9:00 AM - 6:00 PM'],
      color: 'from-[#3B82F6] to-[#1D4ED8]',
    },
    {
      icon: Envelope,
      title: 'Email Us',
      details: ['info@masspowersolutions.co.in', 'projects@masspowersolutions.co.in', 'support@masspowersolutions.co.in'],
      color: 'from-[#10B981] to-[#059669]',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 6:00 PM', 'Sunday: Closed'],
      color: 'from-[#F97316] to-[#EA580C]',
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-8 sm:mb-10">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white font-bold rounded-full text-sm mb-4 shadow-lg shadow-[#3B82F6]/25">Contact Us</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-3xl mx-auto">
            Have a project inquiry or need technical consultation? Our team of experts is ready  
            to discuss your EHV substation and transmission line requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8 overflow-hidden">
          <div ref={formRef}>
            <Card className="p-6 border-0 bg-gradient-to-br from-[#F8FAFC] to-white shadow-xl">
              <h3 className="text-xl font-semibold text-[#0F172A] mb-5">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#0F172A]">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-[#E2E8F0] focus:border-[#3B82F6]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F172A]">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-[#E2E8F0] focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0F172A]">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-[#E2E8F0] focus:border-[#3B82F6]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#0F172A]">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-[#E2E8F0] focus:border-[#3B82F6]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#0F172A]">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-[#E2E8F0] focus:border-[#3B82F6]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] hover:from-[#2563EB] hover:to-[#1E40AF] text-white shadow-lg shadow-[#3B82F6]/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>

          <div ref={contactCardsRef} className="space-y-4 w-full max-w-full" style={{ opacity: 1 }}>
            {contactInfo.map((info, index) => (
              <Card key={info.title} className={`p-4 sm:p-5 border-0 bg-gradient-to-r ${info.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden w-full`} style={{ opacity: 1 }}>
                <div className="flex items-start gap-2 sm:gap-4 w-full">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon size={18} className="text-white sm:hidden" weight="duotone" />
                    <info.icon size={20} className="text-white hidden sm:block" weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{info.title}</h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-xs sm:text-sm text-white/80 break-words overflow-wrap-anywhere truncate sm:whitespace-normal">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div ref={ctaRef}>
          <Card className="p-5 lg:p-6 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border-none shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#F97316]/10 rounded-full blur-3xl"></div>
            <div className="text-center relative z-10">
              <h3 className="text-xl font-semibold text-white mb-3">Ready to Power Your Next Project?</h3>
              <p className="text-white/70 mb-5 max-w-2xl mx-auto text-sm">
                Whether you're a power utility, independent power producer, or industrial facility, we provide complete 
                EHV infrastructure solutions. Our team is ready to help you with technical consultation, project estimation, 
                and turnkey execution.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] rounded-full shadow">Free Project Consultation</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full shadow">TNEB Class I Certified</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full shadow">Turnkey Solutions</span>
                <span className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#334155] rounded-full shadow border border-white/20">30 Years Experience</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
