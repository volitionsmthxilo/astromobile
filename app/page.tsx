"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CreditCard, Shield, Zap, Users, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import LogoLoop from "@/components/LogoLoop";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      type: "Smartphone",
      title: "Africa's Trusted Smartphone Brand",
      subtitle: "Smartphones Built for Africa",
      description:
        "Affordable innovation, reliable performance, and flexible ownership through retail and Pay-As-You-Use options.",
      image: "/BANNER_2.png",
    },
    {
      type: "Tablet",
      title: "Productivity Unleashed",
      subtitle: "Tablets for Work & Play",
      description: "Perfect for education, entertainment, and professional work. Large screens, powerful performance.",
      image: "/BANNER_3.png",
    },
    {
      type: "Smartwatch",
      title: "Stay Connected, Stay Healthy",
      subtitle: "Smartwatches for Modern Life",
      description: "Track your fitness, receive notifications, and stay connected without reaching for your phone.",
      image: "/BANNER_1.png",
    },
  ]

  const partners = [
    {img:"SPAR.jpeg"},
    { img:"OKM.jpeg"},
    { img:"OK.png"},
    { img:"NASH.png"},
    {img:"logo3.png"},
    { img:"INNOVATIVE.jpeg"},
    {img:"KANGO.png"},
    { img:"GAIN.jpg"},
    { img:"BornMarche.jpg"},
    { img:"BON MARCHE.png"},
    { img:"BholaHardware.jpeg"}
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative h-screen overflow-hidden pt-16 md:pt-20">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Full-screen background image with overlay */}
              <div className="absolute inset-0">
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="max-w-3xl md:space-y-1">
                    <Badge className="w-fit">{slide.type}</Badge>

                    <div className="space-y-1">
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
                        {slide.title}
                      </h1>
                      <p className="text-2xl pt-3 pb-1 md:text-3xl font-semibold text-primary leading-tight text-balance">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg  text-arial md:text-[16px] text-white/90 leading-relaxed text-pretty max-w-2xl">
                        {slide.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link href="/products">
                        <Button size="lg" className="text-base px-8 py-6 text-lg">
                          Shop Now
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                      <Link href="/payu">
                        <Button
                          size="lg"
                          variant="outline"
                          className="text-base px-8 py-6 text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                        >
                          Learn About PAYU
                        </Button>
                      </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-white">500K+</div>
                        <div className="text-xs text-white/60">Customers</div>
                      </div>
                      <div className="w-px h-8 bg-white/20" />
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-white">12+</div>
                        <div className="text-xs text-white/60">Countries</div>
                      </div>
                      <div className="w-px h-8 bg-white/20" />
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-white">4.8★</div>
                        <div className="text-xs text-white/60">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Controls */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-12" : "bg-white/30 w-3 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg text-white"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose AstroMobile?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to making technology accessible to everyone across Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Flexible Payment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pay-As-You-Use model makes smartphones affordable for everyone
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Reliable Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Durable devices built to withstand African conditions
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Fast Performance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Powerful processors for smooth multitasking and gaming
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Local Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated customer service across all our markets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Discover our bestselling smartphones</p>
            </div>
            <Link href="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {image:"Note15Pro_Newest.jpg.png", name: "Note15Pro",  tag: "Flagship " , title: "From $120 or $20.79/mo. for 6 mo." },
              {image:"TABLETS_PAD_11.jpg", name: "I pad 11", price: "$199", tag: "Best Seller", title: "From $140 or $25.79/mo. for 6 mo." },
              {image:"watch01.jpg", name: "Pusle spirit 2", price: "$129", tag: "Budget", title: "From $60 or $5.79/mo. for 6 mo." },
            
            ].map((product, i) => (
              <Card key={i} className="group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10">{product.tag}</Badge>
                  <img
          src={`/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <Star className="w-4 h-4 fill-muted text-muted" />
                      <span className="ml-1">(4.0)</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
          
                      <div className="text-xs text-muted-foreground">{product.title}</div>
                    </div>
                    <Button size="sm">Buy Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PAYU Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Pay-As-You-Use
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                Own Your Smartphone, One Payment at a Time
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Our flexible PAYU model makes it easy to own a smartphone without the upfront cost. Make affordable
                payments via mobile money and unlock full ownership.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Choose Your Device</h4>
                    <p className="text-sm text-primary-foreground/80">Select from our range of smartphones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get Connected</h4>
                    <p className="text-sm text-primary-foreground/80">Activate with our MNO partners</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Make Flexible Payments</h4>
                    <p className="text-sm text-primary-foreground/80">Pay via mobile money at your own pace</p>
                  </div>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="mt-4">
                Learn More About PAYU
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/person-using-smartphone-for-mobile-payment-in-afri.jpg"
                alt="PAYU Model"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
       <div className="spiral-divider"></div>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners Across Africa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with leading mobile network operators to bring connectivity to millions
            </p>
          </div>
          <div className="w-full">


  
            





     

          <LogoLoop
            logos={partners.map((partner) => ({
              src: `/${partner.img}`,
             
            }))}
            speed={50}
            direction="left"
            logoHeight={60}
            gap={40}
            pauseOnHover={true}
            fadeOut={true}
          />
       



          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Join the Astro Revolution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Whether you're looking to buy, partner with us, or become a distributor, we're here to help you connect
                with Africa's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/products">
                  <Button size="lg">
                    Shop Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/partner">
                  <Button size="lg" variant="outline">
                    Become a Partner
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
