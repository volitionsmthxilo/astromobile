"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import {ArrowRight} from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    // Scroll detection for navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Initial animation for logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -50, rotate: -10 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.2
        }
      )
    }

    // Initial animation for links
    if (linksRef.current) {
      gsap.fromTo(
        linksRef.current.querySelectorAll('.nav-link'),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.4
        }
      )
    }
  }, [])

  // Smooth scroll to section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-[#8FC240]/20'
          : 'bg-background/80 backdrop-blur-md border-b border-border'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" >
            <img
              src="/astro.png"
              alt="AstroMobile logo"
              className="h-[40px] object-cover  hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center gap-8">
            <Link
              href="/smartphones"
              className="nav-link text-sm font-medium hover:text-[#8FC240] transition-all duration-300 relative group"
            >
              Smartphones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8FC240] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/tablets"
              className="nav-link text-sm font-medium hover:text-[#8FC240] transition-all duration-300 relative group"
            >
              Tablets
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8FC240] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/smartwatches"
              className="nav-link text-sm font-medium hover:text-[#8FC240] transition-all duration-300 relative group"
            >
              Smartwatches
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8FC240] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="nav-link text-sm font-medium hover:text-[#8FC240] transition-all duration-300 relative group"
            >
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8FC240] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/distributor">
              <Button
                variant="ghost"
                size="sm"
                className="hover:text-[#8FC240] hover:bg-[#8FC240]/10 transition-all duration-300"
              >
                Become a Distributor
              </Button>
            </Link>
            <Link href="/products">
              <Button
              size="lg"
                className="rounded-full bg-[#8FC240] hover:bg-[#7AB030] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#8FC240' }}
              >
              Find a Dealer
                <ArrowRight className="ml-2 w-5 h-5"/>

              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#8FC240]/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#8FC240]" />
            ) : (
              <Menu className="w-6 h-6 text-[#8FC240]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#8FC240]/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/smartphones"
                className="text-sm font-medium hover:text-[#8FC240] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#8FC240]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Smartphones
              </Link>
              <Link
                href="/tablets"
                className="text-sm font-medium hover:text-[#8FC240] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#8FC240]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tablets
              </Link>
              <Link
                href="/smartwatches"
                className="text-sm font-medium hover:text-[#8FC240] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#8FC240]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Smartwatches
              </Link>
              <Link
                href="/companies"
                className="text-sm font-medium hover:text-[#8FC240] transition-all duration-300 py-2 px-4 rounded-lg hover:bg-[#8FC240]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Companies
              </Link>
            
             
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/distributor">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full hover:text-[#8FC240] hover:bg-[#8FC240]/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Become a Distributor
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    className="w-full rounded-full text-sm hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: '#8FC240' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Locomotive scroll styling */
        [data-scroll-container] {
          min-height: 100vh;
        }

        [data-scroll-section] {
          will-change: transform;
        }
      `}</style>
    </nav>
  )
}



