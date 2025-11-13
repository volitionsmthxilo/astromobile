"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CreditCard, Shield, Zap, Users, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef(null)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const productsRef = useRef(null)
  const payuRef = useRef(null)
  const partnersRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const partnerLogosRef = useRef<HTMLElement>(null) 
  
  const heroSlides = [
    {
      type: "Smartphone",
      title: "Africa's Trusted Smartphone Brand",
      subtitle: "Smartphones Built for Africa",
      description:
        "Affordable innovation, reliable performance, and flexible ownership through retail and Pay-As-You-Use options.",
      image: "/bannerimag3.png",
    },
    {
      type: "Tablet",
      title: "Productivity Unleashed",
      subtitle: "Tablets for Work & Play",
      description: "Perfect for education, entertainment, and professional work. Large screens, powerful performance.",
      image: "/twoastromobile.jpg",
    },
    {
      type: "Smartwatch",
      title: "Stay Connected, Stay Healthy",
      subtitle: "Smartwatches for Modern Life",
      description: "Track your fitness, receive notifications, and stay connected without reaching for your phone.",
      image: "/threeastromobile.jpg",
    },
  ]

  const partners = [
    { img: "Frame_8-removebg-preview (1).png", country: "Multiple Countries" },
    { img: "Frame_9-removebg-preview.png", country: "Zimbabwe" },
    { img: "Frame_10-removebg-preview copy.png", country: "Multiple Countries"  },
    { img: "Frame_11-removebg-preview.png", country: "Kenya"  },
    { img: "Frame_12-removebg-preview.png", country: "Zimbabwe" },
    { img: "Frame_7-removebg-preview.png", country: "Malawi"  },
    { img: "Frame_15-removebg-preview.png", country: "Multiple Countries"  },
    { img: "Frame_16-removebg-preview.png", country: "Multiple Countries" },
    { img: "Frame_13-removebg-preview.png", country: "Multiple Countries" }
  ]

  const testimonials = [
    {
      name: "Tendai Moyo",
      role: "Small Business Owner",
      location: "Harare, Zimbabwe",
      image: "/placeholder.svg",
      rating: 5,
      text: "The PAYU model changed everything for me. I couldn't afford to buy a smartphone outright, but now I own one and my business has grown tremendously. I can now take mobile payments and manage my inventory on the go."
    },
    {
      name: "Amara Okafor",
      role: "University Student",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg",
      rating: 5,
      text: "As a student, the flexible payment option was perfect for me. The phone quality is excellent and customer service is always responsive. I recommended AstroMobile to all my classmates!"
    },
    {
      name: "James Kamau",
      role: "Taxi Driver",
      location: "Nairobi, Kenya",
      image: "/placeholder.svg",
      rating: 4,
      text: "I use my AstroMobile phone every day for my taxi business. The battery lasts all day, and the GPS never fails me. The payment plan made it possible for me to get a quality device without breaking the bank."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-content > *'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5
        }
      )
    }

    // Features section animations
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll('.feature-card'),
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Products section animations
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current.querySelectorAll('.product-card'),
        { opacity: 0, x: -100, rotateY: -45 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: productsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // PAYU section animations
    if (payuRef.current) {
      gsap.fromTo(
        payuRef.current.querySelectorAll('.payu-content > *'),
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: payuRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(
        payuRef.current.querySelector('.payu-image'),
        { opacity: 0, x: 80, rotateY: 45 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: payuRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Partners section animations
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.querySelectorAll('.partner-card'),
        { opacity: 0, scale: 0, rotate: -180 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: partnersRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Testimonials section animations
    if (testimonialsRef.current) {
      gsap.fromTo(
        testimonialsRef.current.querySelectorAll('.testimonial-card'),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      {/* Hero Section with 3D parallax */}
  <section ref={heroRef} className="relative h-[500px] lg:h-screen overflow-hidden pt-12 lg:pt-16 md:pt-20">
  <div className="relative h-full lg:h-full">
    {heroSlides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0">
          <img 
            src={slide.image || "/placeholder.svg"} 
            alt={slide.title} 
            className={`w-full h-full object-cover ${
              index === currentSlide ? "scale-110 animate-slow-zoom" : "scale-100"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl md:space-y-1 hero-content">
              <Badge className="w-fit animate-fade-in-up" style={{ backgroundColor: '#8FC240' }}>
                {slide.type}
              </Badge>

              <div className="space-y-1">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
                  {slide.title}
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl pt-3 pb-1 font-semibold leading-tight text-balance" style={{ color: '#8FC240' }}>
                  {slide.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-arial text-white/90 leading-relaxed text-pretty max-w-2xl">
                  {slide.description}
                </p>
              </div>

              <div className="flex sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button size="lg" className="text-sm sm:text-base px-8 sm:px-20 py-5 hover:scale-105 rounded-full transition-transform" style={{ backgroundColor: '#8FC240' }}>
                    Find a Dealer
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/payu">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-sm sm:text-base px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white border-[#8FC240] hover:bg-white/20 hover:scale-105 transition-transform"
                  >
                    Learn About PAYU
                  </Button>
                </Link>
              </div>

              {/* Fixed stats section - responsive and no overflow */}
              <div className="flex items-center gap-3 sm:gap-6 pt-4 overflow-x-auto scrollbar-hide">
                <div className="stat-item flex-shrink-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">5M+</div>
                  <div className="text-[10px] sm:text-xs text-white/60 whitespace-nowrap">Devices sold</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-white/20 flex-shrink-0" />
                <div className="stat-item flex-shrink-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">12+</div>
                  <div className="text-[10px] sm:text-xs text-white/60 whitespace-nowrap">Countries</div>
                </div>
                <div className="w-px h-6 sm:h-8 bg-white/20 flex-shrink-0" />
                <div className="stat-item flex-shrink-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">4.8★</div>
                  <div className="text-[10px] sm:text-xs text-white/60 whitespace-nowrap">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* Bottom Navigation controls - FOR LG and XL */}
    <div className="hidden lg:flex absolute bottom-8 sm:bottom-12 mb-3 right-1 -translate-x-1/2 items-center gap-3 sm:gap-6 z-20 px-4">
      <button
        onClick={prevSlide}
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8 sm:w-12" : "bg-white/30 w-2 sm:w-3 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>

    {/* Side Arrows - ONLY FOR SM and MD */}
    <button
      onClick={prevSlide}
      className="lg:hidden absolute left-[1px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full   border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg text-white z-20"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>

    <button
      onClick={nextSlide}
      className="lg:hidden absolute right-[1px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full   border-2 border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg text-white z-20"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
</section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Go Astro?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We're committed to making technology accessible to everyone across Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <CreditCard className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Designed for African life</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                rugged, reliable, and affordable.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4">
 <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Shield className="w-6 h-6 text-accent" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Smart Pay Options</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  own your device through daily credits.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Zap className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Long-lasting batteries</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                 for the long days and long nights.
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
              <CardContent className="pt-6 space-y-4">
 <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Users className="w-6 h-6 text-accent" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Local support</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">Trusted by over 5,000,000 users with offices across Africa.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Discover our bestselling smartphones</p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="hover:scale-105 transition-transform">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {image:"astro note 13 max.png", name: "Astro Vibe", tag: "Bugdet Range", title: "From $20us + usage top ups"},
              {image:"astro note 15 pro.png", name: "Astro Nova", tag: "Middle Range", title: "From $30us + usage top ups"},
              {image:"astro note 16 pro.png", name: "Astro Prime", tag: "Top Range", title: "From $10us + usage top ups"},
            ].map((product, i) => (
              <Card key={i} className="product-card group hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <Badge className="absolute top-4 right-4 z-10" style={{ backgroundColor: '#8FC240' }}>{product.tag}</Badge>
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    className="w-full  object-contain h-[380px] group-hover:scale-101 group-hover:rotate-1 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
                   
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[14px] text-muted-foreground">{product.title}</div>
                    </div>
                    {/* <Button size="sm" className="hover:scale-105 transition-transform" style={{ backgroundColor: '#8FC240' }}>Buy Now</Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PAYU Section */}
      <section ref={payuRef} className="pt-16   md:py-24 text-primary-foreground relative z-10" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 payu-content">
              <Badge variant="secondary" className="w-fit">
                Pay-As-You-Use
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
             Pay the Smart Way – Own It on Your Terms.

              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Astro Mobile lets you get your dream phone today and pay as you use it.
No debt. No pressure. Just top up through M-Pesa and stay connected.

              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Pick Your Astro</h4>
                    <p className="text-sm text-primary-foreground/80">Choose your favorite model.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1"> Activate Instantly</h4>
                    <p className="text-sm text-primary-foreground/80">Make your first token payment via M-Pesa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                 

                  <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1"> Top Up Anytime</h4>
                    <p className="text-sm text-primary-foreground/80">Buy usage tokens whenever you need them.</p>
                  </div>
                </div>
              </div>
           <Button
  className="mt-4 border bg-white text-[#8FC240] rounded-full font-sm border-white transition-transform duration-200 hover:scale-115 hover:bg-white hover:text-[#8FC240] focus:outline-none active:outline-none"
>
  Learn More About PAYU
  <ArrowRight className="ml-2 w-5 h-5" />
</Button>

            </div>    
           
              <img
                src="/phone screen set.png"
                alt="PAYU Model"
                className="w-full h-[595px] object-contain relative  bottom-[-1px]  md:bottom-[-96px] "
              />
           
          </div>
        </div>
      </section>

      {/* Partner Network - Matching Partners Page Design */}
      <section ref={partnersRef} className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">   Let’s Grow Africa Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
 


             Partner with us to build the future of technology across the continent.


            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, i) => (
              <Card key={i} className="partner-card group hover:shadow-xl transition-all" style={{ borderColor: '#8FC240' }}>
                <CardContent className=" text-center ">
                  <div className="w-30 h-16 rounded-xl text-primary-foreground flex items-center justify-center mx-auto text-2xl font-bold group-hover:scale-110 transition-transform"  >
                    {/* {partner.logo} */}
                    {<img src={`/${partner.img}`} alt={partner.country} className="max-w-full max-h-full object-cover" /> }
                  </div>
                  {/* <div>
                   
                    <p className="text-sm text-muted-foreground">{partner.country}</p>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="w-fit mx-auto mb-4" style={{ backgroundColor: '#8FC240' }}>Customer Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who've transformed their lives with AstroMobile
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="testimonial-card border-2 hover:shadow-xl transition-all" style={{ borderColor: '#8FC240' + '33' }}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star 
                          key={index} 
                          className="w-5 h-5" 
                          style={{ 
                            fill: index < testimonial.rating ? '#8FC240' : 'transparent',
                            color: index < testimonial.rating ? '#8FC240' : '#cbd5e1'
                          }} 
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 opacity-20" style={{ color: '#8FC240' }} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" flex items-center justify-center  h-[580px] lg:h-[450px]   z-10  relative">

 <img  src="/last-sectionbanner.jpg" 
            className="w-full  object-cover h-full  relative"
            
            />

        <div className="container mx-auto px-4 lg:px-8  absolute ">
          <Card className="border-2  from-card hover:shadow-2xl transition-shadow" style={{ borderColor: '#8FC240' + '80', background: 'linear-gradient(to bottom right, var(--card), #8FC240' + '8D)' }}>
           
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Join the AstroMobile Revolution</h2>
              <p className="text-lg  max-w-2xl mx-auto text-pretty ">
                Whether you're looking to buy, partner with us, or become a distributor, we're here to help you connect
                with Africa's future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/products">
                  <Button  className="hover:scale-105 transition-transform  rounded-full text-sm " style={{ backgroundColor: '#8FC240' }}>
                    Shop Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/partner">
                 <Button
  variant="outline"
  className="text-sm rounded-full border border-[#8FC240] text-black/75 bg-transparent transition-transform duration-200 transform hover:scale-105 hover:bg-[#8FC240] hover:text-white focus:outline-none active:outline-none"
>
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






















// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, CreditCard, Shield, Zap, Users, Star, ChevronLeft, ChevronRight } from "lucide-react"
// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import LogoLoop from "@/components/LogoLoop"
// import ThreeBackground from "@/components/ThreeBackground"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)


// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const scrollRef = useRef(null)
//   const heroRef = useRef(null)
//   const featuresRef = useRef(null)
//   const productsRef = useRef(null)
//   const payuRef = useRef(null)
//   const partnersRef = useRef<HTMLElement>(null)
// const partnerLogosRef = useRef<HTMLElement>(null) 
//   const heroSlides = [
//     {
//       type: "Smartphone",
//       title: "Africa's Trusted Smartphone Brand",
//       subtitle: "Smartphones Built for Africa",
//       description:
//         "Affordable innovation, reliable performance, and flexible ownership through retail and Pay-As-You-Use options.",
//       image: "/BANNER_2.png",
//     },
//     {
//       type: "Tablet",
//       title: "Productivity Unleashed",
//       subtitle: "Tablets for Work & Play",
//       description: "Perfect for education, entertainment, and professional work. Large screens, powerful performance.",
//       image: "/BANNER_3.png",
//     },
//     {
//       type: "Smartwatch",
//       title: "Stay Connected, Stay Healthy",
//       subtitle: "Smartwatches for Modern Life",
//       description: "Track your fitness, receive notifications, and stay connected without reaching for your phone.",
//       image: "/BANNER_1.png",
//     },
//   ]

//   const partners = [
//     {img:"SPAR.jpeg"},
//     { img:"OKM.jpeg"},
//     { img:"OK.png"},
//     { img:"NASH.png"},
//     {img:"logo3.png"},
//     { img:"INNOVATIVE.jpeg"},
//     {img:"KANGO.png"},
//     { img:"GAIN.jpg"},
//     { img:"BornMarche.jpg"},
//     { img:"BON MARCHE.png"},
//     { img:"BholaHardware.jpeg"}
//   ]

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 6000)
//     return () => clearInterval(timer)
//   }, [])

//   useEffect(() => {
//     // Hero animations
//     if (heroRef.current) {
//       gsap.fromTo(
//         heroRef.current.querySelectorAll('.hero-content > *'),
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           delay: 0.5
//         }
//       )
//     }

//     // Features section animations
//     if (featuresRef.current) {
//       gsap.fromTo(
//         featuresRef.current.querySelectorAll('.feature-card'),
//         { opacity: 0, y: 100, scale: 0.8 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: featuresRef.current,
//             start: 'top 80%',
//             end: 'bottom 20%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     }

//     // Products section animations
//     if (productsRef.current) {
//       gsap.fromTo(
//         productsRef.current.querySelectorAll('.product-card'),
//         { opacity: 0, x: -100, rotateY: -45 },
//         {
//           opacity: 1,
//           x: 0,
//           rotateY: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: productsRef.current,
//             start: 'top 75%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     }

//     // PAYU section animations
//     if (payuRef.current) {
//       gsap.fromTo(
//         payuRef.current.querySelectorAll('.payu-content > *'),
//         { opacity: 0, x: -80 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: payuRef.current,
//             start: 'top 70%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )

//       gsap.fromTo(
//         payuRef.current.querySelector('.payu-image'),
//         { opacity: 0, x: 80, rotateY: 45 },
//         {
//           opacity: 1,
//           x: 0,
//           rotateY: 0,
//           duration: 1,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: payuRef.current,
//             start: 'top 70%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     }


//     if (partnersRef.current) {
//     const logoItems = partnersRef.current.querySelectorAll('.logo-item')
//     const verticalLine = partnersRef.current.querySelector('.vertical-line')
//     const horizontalLines = partnersRef.current.querySelectorAll('[class*="horizontal-line"]')

//     // Animate vertical line
//     gsap.fromTo(
//       verticalLine,
//       { scaleY: 0, transformOrigin: 'top' },
//       {
//         scaleY: 1,
//         duration: 1.5,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: partnersRef.current,
//           start: 'top 80%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     )

//     // Animate horizontal lines
//     gsap.fromTo(
//       horizontalLines,
//       { scaleX: 0, transformOrigin: 'left' },
//       {
//         scaleX: 1,
//         duration: 0.8,
//         stagger: 0.3,
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: partnersRef.current,
//           start: 'top 75%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     )

//     // Animate logo items
//     gsap.fromTo(
//       logoItems,
//       { opacity: 0, scale: 0, rotate: -180 },
//       {
//         opacity: 1,
//         scale: 1,
//         rotate: 0,
//         duration: 0.6,
//         stagger: 0.15,
//         ease: 'back.out(2)',
//         scrollTrigger: {
//           trigger: partnersRef.current,
//           start: 'top 70%',
//           toggleActions: 'play none none reverse'
//         }
//       }
//     )
//   }

//   return () => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//   }

       
//   }, [])

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

//   return (
//     <div className="min-h-screen relative" ref={scrollRef}>
//       <ThreeBackground />
//       <Navigation />

//       {/* Hero Section with 3D parallax */}
//       <section ref={heroRef} className="relative h-screen overflow-hidden pt-16 md:pt-20">
//         <div className="relative h-full">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
//               }`}
//             >
//               <div className="absolute inset-0">
//                 <img 
//                   src={slide.image || "/placeholder.svg"} 
//                   alt={slide.title} 
//                   className="w-full h-full object-cover scale-110 animate-slow-zoom" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
//               </div>

//               <div className="relative h-full flex items-center">
//                 <div className="container mx-auto px-4 lg:px-8">
//                   <div className="max-w-3xl md:space-y-1 hero-content">
//                     <Badge className="w-fit animate-fade-in-up " style={{ backgroundColor: '#8FC240' }}>{slide.type}</Badge>

//                     <div className="space-y-1">
//                       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance text-white">
//                         {slide.title}
//                       </h1>
//                       <p className="text-2xl pt-3 pb-1 md:text-3xl font-semibold leading-tight text-balance" style={{ color: '#8FC240' }}>
//                         {slide.subtitle}
//                       </p>
//                       <p className="text-lg text-arial md:text-[16px] text-white/90 leading-relaxed text-pretty max-w-2xl">
//                         {slide.description}
//                       </p>
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                       <Link href="/products">
//                         <Button size="lg" className="text-base px-8 py-6 text-lg hover:scale-105 transition-transform" style={{ backgroundColor: '#8FC240' }}>
//                           Shop Now
//                           <ArrowRight className="ml-2 w-5 h-5" />
//                         </Button>
//                       </Link>
//                       <Link href="/payu">
//                         <Button
//                           size="lg"
//                           variant="outline"
//                           className="text-base px-8 py-6 text-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform"
//                         >
//                           Learn About PAYU
//                         </Button>
//                       </Link>
//                     </div>

//                     <div className="flex items-center gap-6 pt-4">
//                       <div className="stat-item">
//                         <div className="text-xl md:text-2xl font-bold text-white">500K+</div>
//                         <div className="text-xs text-white/60">Devices sold</div>
//                       </div>
//                       <div className="w-px h-8 bg-white/20" />
//                       <div className="stat-item">
//                         <div className="text-xl md:text-2xl font-bold text-white">12+</div>
//                         <div className="text-xs text-white/60">Countries</div>
//                       </div>
//                       <div className="w-px h-8 bg-white/20" />
//                       <div className="stat-item">
//                         <div className="text-xl md:text-2xl font-bold text-white">4.8★</div>
//                         <div className="text-xs text-white/60">Rating</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
//             <button
//               onClick={prevSlide}
//               className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white"
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <div className="flex gap-3">
//               {heroSlides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide ? "bg-white w-12" : "bg-white/30 w-3 hover:bg-white/50"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg text-white"
//               aria-label="Next slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section ref={featuresRef} className="py-16 md:py-24 bg-muted/30 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose AstroMobile?</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//               We're committed to making technology accessible to everyone across Africa
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
//                   <CreditCard className="w-6 h-6" style={{ color: '#8FC240' }} />
//                 </div>
//                 <h3 className="font-semibold text-lg">Flexible Payment</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Pay-As-You-Use model makes smartphones affordable for everyone
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center hover:rotate-12 transition-transform">
//                   <Shield className="w-6 h-6 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Reliable Quality</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Durable devices built to withstand African conditions
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="w-12 h-12 rounded-xl flex items-center justify-center hover:rotate-12 transition-transform" style={{ backgroundColor: '#8FC240' + '1A' }}>
//                   <Zap className="w-6 h-6" style={{ color: '#8FC240' }} />
//                 </div>
//                 <h3 className="font-semibold text-lg">Fast Performance</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Powerful processors for smooth multitasking and gaming
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="feature-card border-2 transition-all hover:shadow-2xl hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center hover:rotate-12 transition-transform">
//                   <Users className="w-6 h-6 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Local Support</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   Dedicated customer service across all our markets
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section ref={productsRef} className="py-16 md:py-24 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center justify-between mb-12">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
//               <p className="text-muted-foreground">Discover our bestselling smartphones</p>
//             </div>
//             <Link href="/products">
//               <Button variant="outline" className="hover:scale-105 transition-transform">
//                 View All
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </Button>
//             </Link>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {[
//               {image:"Note15Pro_Newest.jpg.png", name: "Note 15 pro", tag: "Flagship", title: "From $20us + usage top ups"},
//               {image:"TABLETS_PAD_11.jpg", name: "Ipad 11", tag: "Best Seller", title: "From $30us + usage top ups"},
//               {image:"watch01.jpg", name: "Pulse Single", tag: "Budget", title: "From $10us + usage top ups"},
//             ].map((product, i) => (
//               <Card key={i} className="product-card group hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1">
//                 <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
//                   <Badge className="absolute top-4 right-4 z-10" style={{ backgroundColor: '#8FC240' }}>{product.tag}</Badge>
//                   <img
//                     src={`/${product.image}`}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500"
//                   />
//                 </div>
//                 <CardContent className="p-6 space-y-4">
//                   <div>
//                     <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
//                     <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                       <Star className="w-4 h-4 fill-muted text-muted" style={{ fill: '#8FC240', color: '#8FC240' }} />
//                       <Star className="w-4 h-4 fill-muted text-muted" style={{ fill: '#8FC240', color: '#8FC240' }} />
//                       <Star className="w-4 h-4 fill-muted text-muted" style={{ fill: '#8FC240', color: '#8FC240' }} />
//                       <Star className="w-4 h-4 fill-muted text-muted" style={{ fill: '#8FC240', color: '#8FC240' }} />
//                       <Star className="w-4 h-4 fill-muted text-muted" />
//                       <span className="ml-1">(4.0)</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-[14px] text-muted-foreground">{product.title}</div>
//                     </div>
//                     <Button size="sm" className="hover:scale-105 transition-transform" style={{ backgroundColor: '#8FC240' }}>Buy Now</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PAYU Section */}
//       <section ref={payuRef} className="py-16 md:py-24 text-primary-foreground relative z-10" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6 payu-content">
//               <Badge variant="secondary" className="w-fit">
//                 Pay-As-You-Use
//               </Badge>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
//                 Own Your Smartphone, One Payment at a Time
//               </h2>
//               <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
//                 Our flexible PAYU model makes it easy to own a smartphone without the upfront cost. Make affordable
//                 payments via mobile money and unlock full ownership.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
//                   <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="font-bold">1</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Choose Your Device</h4>
//                     <p className="text-sm text-primary-foreground/80">Select from our range of smartphones</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
//                   <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="font-bold">2</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Get Connected</h4>
//                     <p className="text-sm text-primary-foreground/80">Activate with our MNO partners</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
//                   <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="font-bold">3</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Make Flexible Payments</h4>
//                     <p className="text-sm text-primary-foreground/80">Pay via mobile money at your own pace</p>
//                   </div>
//                 </div>
//               </div>
//               <Button size="lg" variant="secondary" className="mt-4 hover:scale-105 transition-transform">
//                 Learn More About PAYU
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </div>
//             <div className="relative payu-image">
//               <img
//                 src="/person-using-smartphone-for-mobile-payment-in-afri.jpg"
//                 alt="PAYU Model"
//                 className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//      <section 
//         ref={partnerLogosRef}
//         className="py-16 md:py-24 flex justify-center w-full relative z-10 overflow-hidden"
//       >
//         <div className="flex w-[80%] justify-center items-center px-4 lg:px-8 gap-8">
//           {/* Left side - Title with animation */}
//           <div className="text-center w-1/2 trusted-title">
//             <h2 className="text-3xl md:text-2xl font-bold flex items-end mb-4">
//               Trusted by our customers & partners
//             </h2>
//           </div>

//           <div className="">
//             <div className="flex flex-wrap items-center gap-8 logo-grid">
//               <img 
//                 className="h-[40px] object-cover logo-item cursor-pointer" 
//                 src="/digicel.png"
//                 alt="Digicel"
//               />
//               <img 
//                 className="h-[80px] object-cover logo-item cursor-pointer" 
//                 src="/285199f4046e1c49ac29f14a1cb4c2a76cd1b.png"
//                 alt="Partner"
//               />
//               <img 
//                 className="h-[80px] object-cover logo-item cursor-pointer" 
//                 src="/images.jpg"
//                 alt="Partner"
//               />
//               <img 
//                 className="h-[100px] object-cover logo-item cursor-pointer" 
//                 src="/zm-atel-logo.png"
//                 alt="Zamtel"
//               />
//               <img 
//                 className="h-[60px] object-cover logo-item cursor-pointer" 
//                 src="/vodacom_africa_business_communities.png"
//                 alt="Vodacom"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-muted/30 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           <Card className="border-2 bg-gradient-to-br from-card hover:shadow-2xl transition-shadow" style={{ borderColor: '#8FC240' + '33', background: 'linear-gradient(to bottom right, var(--card), #8FC240' + '0D)' }}>
//             <CardContent className="p-8 md:p-12 text-center space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-balance">Join the Astro Revolution</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//                 Whether you're looking to buy, partner with us, or become a distributor, we're here to help you connect
//                 with Africa's future.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//                 <Link href="/products">
//                   <Button size="lg" className="hover:scale-105 transition-transform" style={{ backgroundColor: '#8FC240' }}>
//                     Shop Products
//                     <ArrowRight className="ml-2 w-5 h-5" />
//                   </Button>
//                 </Link>
//                 <Link href="/partner">
//                   <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
//                     Become a Partner
//                   </Button>
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }


