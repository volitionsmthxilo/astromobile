import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Briefcase } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
             <Link href="/" className="flex items-center gap-2" >
            <img
              src="/astro.png"
              alt="AstroMobile logo"
              className="h-[40px] object-cover  hover:scale-110 transition-transform duration-300"
            />
          </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Smartphones built for Africa — affordable, durable, connected.
            </p>
            <div className="flex items-center gap-3">
               <Link
    href="https://www.facebook.com/search/top?q=astromobileafrica"
    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
  >
    <Facebook className="w-4 h-4" />
  </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
                  Products
                </Link>
              </li>
              {/* <li>
                <Link href="/payu" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
                  Pay-As-You-Use
                </Link>
              </li> */}
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Careers</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors flex items-center gap-2"
                >
                 
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers#openings"
                  className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors"
                >
                  Open Positions
                </Link>
              </li>
              <li>
                <Link
                  href="/careers#culture"
                  className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors"
                >
                  Company Culture
                </Link>
              </li>
              <li>
                <Link
                  href="/careers#benefits"
                  className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2  text-sm ">
                
                {/* <p className="text-bold"> Astro Mobile Africa</p> */}
                <p className="text-bold">P.O.Box 1432 ,00200</p>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                
                <span>City square Nairobi Westlands</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">

                <span>+254-701-561-809</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>info@astromobile.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 AstroMobile a company of Algebra Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#8FC240] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}