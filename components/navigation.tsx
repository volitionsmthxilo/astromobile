"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
           

             <img
                src="/astro-no-tag.png"
                alt="logo"
                className=" h-[30px] object-cover rounded-2xl shadow-2xl"
              />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/smartphones" className="text-sm font-medium hover:text-primary transition-colors">
              Smartphones
            </Link>
            <Link href="/tablets" className="text-sm font-medium hover:text-primary transition-colors">
              Tablets
            </Link>
            <Link href="/smartwatches" className="text-sm font-medium hover:text-primary transition-colors">
              Smartwatches
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/distributor">
              <Button variant="ghost" size="sm">
                Become a Distributor
              </Button>
            </Link>
            <Link href="/products">
              <Button size="sm">Shop Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/smartphones" className="text-sm font-medium hover:text-primary transition-colors">
                Smartphones
              </Link>
              <Link href="/tablets" className="text-sm font-medium hover:text-primary transition-colors">
                Tablets
              </Link>
              <Link href="/smartwatches" className="text-sm font-medium hover:text-primary transition-colors">
                Smartwatches
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/distributor">
                  <Button variant="ghost" size="sm" className="w-full">
                    Become a Distributor
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="sm" className="w-full">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
