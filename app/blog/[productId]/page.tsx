"use client"

import {Navigation} from "../../../components/navigation"
import {Footer} from "../../../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { use, useState, useEffect, useRef } from "react"
import { productsDatabase, getProductById } from '../../Database/products'
import { HiShoppingCart } from "react-icons/hi"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


gsap.registerPlugin(ScrollTrigger)

export default function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params)
  const [currentCarousel1, setCurrentCarousel1] = useState(0)
  const [currentCarousel2, setCurrentCarousel2] = useState(0)
  const [currentFullCarousel, setCurrentFullCarousel] = useState(0)

  // ⭐ THIS IS THE KEY CHANGE - Check smartphones first, then tablets!
  let product = getProductById('smartphones', productId)
  let productType = 'smartphone'
  
  if (!product) {
    product = getProductById('tablets', productId)
    productType = 'tablet'
  }
  
  // Fallback to default if nothing found
  if (!product) {
    product = getProductById('smartphones', 'astro-vibe')
    productType = 'smartphone'
  }

  const heroRef = useRef(null)
  const highlightsRef = useRef(null)
  const carousel1Ref = useRef(null)
  const fullCarouselRef = useRef(null)
  const phoneTypeRef = useRef(null)
  const carousel2Ref = useRef(null)
  const featureRef = useRef(null)
  const specsRef = useRef(null)
  const explanationsRef = useRef(null)
  const ctaRef = useRef(null)

  if (!product) {
    return <div>Product not found</div>
  }

  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-content > *'),
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3
        }
      )
    }

    // Highlights section animations
    if (highlightsRef.current) {
      gsap.fromTo(
        highlightsRef.current.querySelectorAll('.highlight-card'),
        { opacity: 0, y: 100, rotateX: -45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Carousel 1 animations
    if (carousel1Ref.current) {
      gsap.fromTo(
        carousel1Ref.current.querySelectorAll('.carousel-image'),
        { opacity: 0, scale: 0.8, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: carousel1Ref.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Phone type section animations
    if (phoneTypeRef.current) {
      gsap.fromTo(
        phoneTypeRef.current.querySelectorAll('.phone-type-content > *'),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: phoneTypeRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Feature section animations
    if (featureRef.current) {
      gsap.fromTo(
        featureRef.current.querySelector('.feature-image'),
        { opacity: 0, x: -100, rotateY: -25 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(
        featureRef.current.querySelectorAll('.feature-text > *'),
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featureRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Specs section animations
    if (specsRef.current) {
      gsap.fromTo(
        specsRef.current.querySelectorAll('.spec-card'),
        { opacity: 0, y: 100, rotateX: -45 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: specsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Explanations section animations
    if (explanationsRef.current) {
      gsap.fromTo(
        explanationsRef.current.querySelectorAll('.explanation-card'),
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: explanationsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // CTA section animations
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.querySelectorAll('.cta-content > *'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
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

  // Carousel navigation functions
  const nextSlide1 = () => {
    setCurrentCarousel1((prev) => (prev + 1) % product.carouselImages.length)
  }

  const prevSlide1 = () => {
    setCurrentCarousel1((prev) => (prev - 1 + product.carouselImages.length) % product.carouselImages.length)
  }

  const nextSlide2 = () => {
    setCurrentCarousel2((prev) => (prev + 1) % product.carouselImages2.length)
  }

  const prevSlide2 = () => {
    setCurrentCarousel2((prev) => (prev - 1 + product.carouselImages2.length) % product.carouselImages2.length)
  }

  const nextFullSlide = () => {
    setCurrentFullCarousel((prev) => (prev + 1) % product.carouselImages.length)
  }

  const prevFullSlide = () => {
    setCurrentFullCarousel((prev) => (prev - 1 + product.carouselImages.length) % product.carouselImages.length)
  }

  return (
    <div  className="overflow-hidden w-full" >
      <Navigation />

      {/* SECTION 1: Hero Banner with Text Overlay at Bottom */}
      <section ref={heroRef} className="relative h-[30vh] lg:h-[70vh] md:h-[80vh] overflow-hidden mt-16">
        <img
          src={product.bannerImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute flex justify-start flex-col items-center top-0 left-0 right-0 p-8 md:p-12 lg:p-8 text-white hero-content">
          <Badge className="mb-4 bg-primary/80 bg-[#8FC240]">New Release</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{product.name}</h1>
        </div>
      </section>

      {/* SECTION 2: Highlights Section - Camera Specs */}
      {product.specs.camera && Array.isArray(product.specs.camera) && (
        <section ref={highlightsRef} className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Highlights</h2>
              <p className="text-lg max-w-2xl text-[#8FC240] mx-auto">
                Discover what makes {product.name} exceptional
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {product.specs.camera.map((cam: any, index: number) => (
                <Card key={index} className="highlight-card hover:shadow-xl transition-all border-2 hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#8FC240]">{cam.title}</h3>
                    <ul className="space-y-2">
                      {cam.details.map((detail: string, i: number) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-[#8FC240]">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: First Carousel (4 images grid/slider) - carouselImages */}
      {product.carouselImages && product.carouselImages.length > 0 && (
        <section ref={carousel1Ref} className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8FC240]">Explore Every Angle</h2>
            
            {/* Desktop Grid View */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {product.carouselImages.map((img: string, index: number) => (
                <div key={index} className="carousel-image  relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-[300px] object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="md:hidden relative">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.carouselImages[currentCarousel1]}
                  alt={`${product.name} view`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={prevSlide1}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-[#8FC240]" />
              </button>
              <button
                onClick={nextSlide1}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-[#8FC240]" />
              </button>
              <div className="flex justify-center gap-2 mt-4">
                {product.carouselImages.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarousel1(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentCarousel1 ? 'w-8' : ''
                    }`}
                    style={{ backgroundColor: index === currentCarousel1 ? '#8FC240' : '#cbd5e1' }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Full Width Carousel */}
      {product.carouselImagestwo && product.carouselImagestwo.length > 0 && (
        <section ref={fullCarouselRef} className="relative h-[25vh] lg:h-[80vh] md:h-[80vh] overflow-hidden">
          <img
            src={product.carouselImagestwo[currentFullCarousel]}
            alt={`${product.name} showcase`}
            className="w-full h-[200px] lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <button
            onClick={prevFullSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/05 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8 text-[#8FC240]" />
          </button>
          <button
            onClick={nextFullSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/05 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8 text-[#8FC240]" />
          </button>
          <div className="absolute lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 hidden lg:flex">
            {product.carouselImages.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentFullCarousel(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentFullCarousel ? 'w-12' : ''
                }`}
                style={{
                  backgroundColor: index === currentFullCarousel ? '#8FC240' : 'rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* SECTION 5: Phone Type Section */}
      {product.phoneType && (
        <section ref={phoneTypeRef} className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05))' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center phone-type-content">
              <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
                <img
                  src={product.phoneType.typeImage}
                  alt={product.phoneType.heading}
                  className="w-full h-[150px] lg:h-[400px] object-cover"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#8FC240]">{product.phoneType.heading}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed" style={{ fontSize: '20px' }}>
                {product.phoneType.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: Feature Image */}
      {product.featureImage && (
        <section ref={featureRef} className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="feature-image relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={product.featureImage.image}
                  alt="Feature"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 feature-text">
                <h2 className="text-3xl md:text-4xl font-bold text-[#8FC240]">{product.name}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.featureImage.textRight}
                </p>
                <Button size="lg" className="text-lg" style={{ backgroundColor: '#8FC240' }}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-2xl font-semibold text-[#8FC240]">{product.featureImage.textBottom}</p>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8: Technical Specifications */}
      {product.specs.camera && Array.isArray(product.specs.camera) && (
        <section ref={specsRef} className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
              <p className="text-lg max-w-2xl text-[#8FC240] mx-auto">
                Complete camera system details for {product.name}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6"> 
              {product.specs.technical.map((cam: any, index: number) => (
                <Card key={index} className="spec-card hover:shadow-xl transition-all border-2 hover:-translate-y-2" style={{ borderColor: '#8FC240' }}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#8FC240]">{cam.title}</h3>
                    <ul className="space-y-2">
                      {cam.details.map((detail: string, i: number) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-[#8FC240]">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 9: Image Explanations */}
      {product.imageExplanations && product.imageExplanations.length > 0 && (
        <section ref={explanationsRef} className="py-16 md:py-24" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.03), rgba(143, 194, 64, 0.08))' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#8FC240]">Why Choose {product.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {product.imageExplanations.map((item: any, index: number) => (
                <Card key={index} className="explanation-card overflow-hidden hover:shadow-xl transition-all border-2" style={{ borderColor: '#8FC240' + '33' }}>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#8FC240]">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.explanation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2" style={{ borderColor: '#8FC240' + '33', background: 'linear-gradient(to bottom right, var(--card), #8FC240' + '0D)' }}>
            <CardContent className="p-8 md:p-12 text-center space-y-6 cta-content">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Own {product.name}?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of mobile technology today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <img
                  src="/OCTO_ASTRO_FLIERS_2.png"
                  className="h-[40px] object-cover mx-auto sm:mx-0"
                />
                <Link href={`/blog/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button size="lg" variant="outline" className="text-lg hover:scale-105 transition-transform" style={{ borderColor: '#8FC240', color: '#8FC240' }}>
                    Read Reviews
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

















