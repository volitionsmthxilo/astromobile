"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Heart, Watch, Activity } from "lucide-react"
import Link from "next/link"
import { HiShoppingCart } from "react-icons/hi";
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmartwatchesPage() {
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const productsRef = useRef(null)

  const smartwatches = [
    {
      id: "astro-watch-pro",
      name: "Astro Watch Pro",
      tagline: "Premium Health Tracking",
      image: "/PULSE_SINGLE_1.jpg",
          img:"/logo3.png",
      price:"80",
      specs: {
        display: '1.4" AMOLED Always-On',
        battery: "7 Days Battery Life",
        waterproof: "5ATM Water Resistant",
        sensors: "Heart Rate, SpO2, Sleep, Stress",
        connectivity: "Bluetooth 5.0, GPS",
    
        features: [
          "100+ Sport Modes",
          "Music Control",
          "Call Notifications",
          "Weather Updates",
          "Find My Phone",
          "Customizable Watch Faces",
        ],
      },
    },
    {
      id: "astro-watch-fit",
      name: "Astro Watch Fit",
      tagline: "Fitness Focused",
      image: "/PULSE_SINGLE_2.jpg",
   img:"/logo3.png",
      price:"60",
      specs: {
        display: '1.3" TFT LCD',
        battery: "10 Days Battery Life",
        waterproof: "IP68 Water Resistant",
        sensors: "Heart Rate, Steps, Calories",
        connectivity: "Bluetooth 5.0",
        features: ["50+ Sport Modes", "Sleep Tracking", "Call Notifications", "Long Battery Life"],
      },
    },
    {
      id: "astro-watch-lite",
      name: "Astro Watch Lite",
      tagline: "Essential Smartwatch",
      image: "/PULSE_SINGLE_4.jpg",
     img:"/logo3.png",
      price:"90",
      specs: {
        display: '1.2" TFT LCD',
        battery: "14 Days Battery Life",
        waterproof: "IP67 Water Resistant",
        sensors: "Heart Rate, Steps",
        connectivity: "Bluetooth 4.2",
        features: ["Basic Fitness Tracking", "Notifications", "Ultra Long Battery", "Affordable"],
      },
    },
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
          <div ref={headerRef} className="mb-12 header-content flex justify-center flex-col w-full items-center ">
            <div className="flex items-center gap-3 mb-4">
              <Watch className="w-8 h-8" style={{ color: '#8FC240' }} />
              <h1 className="text-4xl md:text-5xl font-bold">Smartwatches</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl text-center">
              Stay connected and track your health with our smartwatch collection. From premium health tracking to
              essential fitness features.
            </p>
          </div>

          {/* Products Grid */}
          <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {smartwatches.map((watch) => (
              <Card key={watch.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={watch.image || "/placeholder.svg"}
                    alt={watch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="px-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{watch.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{watch.tagline}</p>
                  </div>
                     

                  <div className="flex justify-between">
                    

{/* <div className="flex  cursor-pointer gap-2 items-center">

 <div className="flex   items-center">


                 <HiShoppingCart  className="text-[#8FC240]" size={20}/>

<img
                            src={watch.img || "/placeholder.svg"}
                        
                            className=" h-[20px] object-cover"
                          />

</div>
<p className="text-lg text-[#8FC240] ">${watch.price}</p>

</div> 
                        */}




                    <Link href={`/blog/${watch.id}`}>
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