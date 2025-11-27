"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {  Smartphone } from "lucide-react"
import Link from "next/link"
import { HiShoppingCart } from "react-icons/hi";
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmartphonesPage() {
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const productsRef = useRef(null)

  const smartphones = [



    {
      




       id: "astro-vibe",
      name: "Astro Vibe",

     
      tagline: "From $10us + usage top ups",
      image: "/astrovibe06.png",
      img:"/astrovibe06.png",
      price:"160",
      title:"From $10us + usage top ups",
      specs: {
        display: '6.7" AMOLED',
        ram: "8GB RAM",
        storage: "128GB Storage",
        camera: "48MP Triple Camera",
        battery: "5000mAh",
        processor: "Octa-core 2.4GHz",
        features: ["5G Ready", "Fast Charging", "Dual SIM", "Face Unlock", "Fingerprint Sensor"],
      },
    },
    {
      
       id: "astro-nova",
      name: "Astro Nova",
      
      tagline: "From $20us + usage top ups",
      image: "/astronova001.png",
      
      title:"From $20us + usage top ups",
     img:"/astronova001.png",
      price:"250",
      specs: {
        display: '6.5" IPS LCD',
        ram: "6GB RAM",
        storage: "64GB Storage",
        camera: "32MP Dual Camera",
        battery: "6000mAh",
        processor: "Octa-core 2.0GHz",
        features: ["Long Battery Life", "Fast Charging", "Dual SIM", "Face Unlock"],
      },
    },
    {
      id: "astro-prime",
      name: "Astro Prime",
      tagline: "From $30us + usage top ups",
      payuPrice: "$12/month",
      image: "/astro note 13 max.png",
      title:"From $30us + usage top ups",
     img:"/logo3.png",
      price:"180",
      specs: {
        display: '6.2" IPS LCD',
        ram: "4GB RAM",
        storage: "32GB Storage",
        camera: "16MP Dual Camera",
        battery: "4000mAh",
        processor: "Quad-core 1.8GHz",
        features: ["Dual SIM", "Face Unlock", "Expandable Storage"],
      },
    }
  ]

  useEffect(() => {
    // Header animations
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.querySelectorAll('.header-content > *'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.3
        }
      )
    }

    // Products section animations
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current.querySelectorAll('.product-card'),
        { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: productsRef.current,
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

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="mb-12 flex justify-center items-center flex-col header-content">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8" style={{ color: '#8FC240' }} />
              <h1 className="text-4xl md:text-5xl font-bold">Smartphones</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our range of smartphones built for Africa. From flagship performance to budget-friendly options,
              find the perfect device for your needs.
            </p>
          </div>

          {/* Products Grid */}
          <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {smartphones.map((phone) => (
              <Card key={phone.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square  from-muted to-muted/50 overflow-hidden">
                  <img
                    src={phone.image || "/placeholder.svg"}
                    alt={phone.name}
                    className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="px-6 py-2 space-y-2">
                  
                  <div className="pb-2">
                    <h3 className="font-semibold text-xl mb-1">{phone.name}</h3>
                    <p className="text-sm   text-muted-foreground">{phone.tagline}</p>
                  </div>


                   <div className="flex justify-between  ">
                                 {/* <div className="flex flex-col cursor-pointer  gap-2 justify-center items-start">
                                 
                                 <div className="flex border-[#8FC240] rounded border p-2   items-center">
                                 
                                 
                                                  <HiShoppingCart  className="text-[#8FC240]" size={20}/>
                                 
                                 <img
                                                             src={phone.img || "/placeholder.svg"}
                                                         
                                                             className=" h-[20px] object-cover"
                                                           />
                                 
                                 </div>
                                
                                 
                   <p className="   text-[14px] text-muted-foreground    text-lg text-[#8FC240] ">{phone.title}</p>
                                 </div> */}
                                 
                   
                          
                  
                                      <Link href={`/blog/${phone.id}`}>
                                        <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>Learn More</Button>
                                      </Link>
                  
                                      </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}