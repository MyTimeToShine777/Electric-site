import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Envelope } from '@phosphor-icons/react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Projects', href: '#products' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    capabilities: [
      { label: 'EHV Substations', href: '#products' },
      { label: 'Transmission Lines', href: '#products' },
      { label: 'T&C Services', href: '#services' },
      { label: 'O&M Support', href: '#services' },
    ],
    support: [
      { label: 'Quality & Safety', href: '#about' },
      { label: 'Technical Support', href: '#contact' },
      { label: 'Project Consultation', href: '#contact' },
      { label: 'Certifications', href: '#certifications' },
    ],
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#0F172A] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white text-[#0F172A] rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">MPS</span>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">MASS POWER SOLUTIONS</h3>
                <p className="text-xs text-white/60">EHV Infrastructure Specialists</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Trusted EHV substation and transmission line contractor with 30 years of expertise. 
              TNEB Class I certified.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={14} className="text-[#3B82F6]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Envelope size={14} className="text-[#3B82F6]" />
                <span>info@masspowersolutions.com</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Capabilities</h4>
            <ul className="space-y-2">
              {footerLinks.capabilities.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Certifications</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/60">TNEB Class I Contractor</li>
              <li className="text-sm text-white/60">ESA Grade License (ESA:530)</li>
              <li className="text-sm text-white/60">CMWSSB Class A&B</li>
              <li className="text-sm text-white/60">ISO 9001:2015 Certified</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} MASS POWER SOLUTIONS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-sm text-white/50 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
