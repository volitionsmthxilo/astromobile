// ============================================
// FILE 1: /app/tablets/page.js (LIST PAGE)
// ============================================

"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tablet } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TabletsPage() {
  const scrollRef = useRef(null)
  const headerRef = useRef(null)
  const productsRef = useRef(null)

  const tablets = [
    {
      id: "astro-funbook-a1",
      name: "Astro Funbook A1",
      tagline: "Professional Productivity",
      image: "/12ipad11.png",
      img: "/12ipad11.png",
      price: "399",
      title: "From $20us + usage top ups",
    },
    {
      id: "astro-funbook-a2",
      name: "Astro Funbook A2",
      tagline: "Perfect for Learning",
      image: "/1900.png",
      img: "/1900.png",
      price: "199",
      title: "From $20us + usage top ups",
    }
  ]

  useEffect(() => {
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
              <Tablet className="w-8 h-8" style={{ color: '#8FC240' }} />
              <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl text-center">
              Explore our tablet collection designed for productivity, education, and entertainment. Large screens and powerful performance for every need.
            </p>
          </div>

          {/* Products Grid */}
         <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  {tablets.map((tablet) => (
    <Card key={tablet.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
      <div className="relative from-muted to-muted/50 overflow-hidden">
<div className="relative w-full h-[320px]"> {/* container defines height */}
  <Image
    src={(tablet.image || "/placeholder.svg").trim()}
    alt={tablet.name}
    className="object-contain block group-hover:scale-105 transition-transform duration-300"
    fill // makes image take full width & height of container
    loading="lazy"
    priority={false}
  />
</div>
</div>


                {/* FIXED SPACING TO EXACTLY 15PX */}
                {/* <CardContent className="px-6 py-0 space-y-1">
                  <div className="mt-[15px]">
                    <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
                    <p className="text-sm text-muted-foreground">{tablet.tagline}</p>
                  </div>

                  <div className="flex justify-between">
                    <Link href={`/blog/${tablet.id}`}>
                      <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent> */}

<CardContent className="px-6 py-0">
  <div className="mt-[12px]">
    <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
    <p className="text-sm text-muted-foreground">{tablet.tagline}</p>
  </div>

  <div className="flex justify-between mt-2">
    <Link href={`/blog/${tablet.id}`}>
      <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
        Learn More
      </Button>
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











// // ============================================
// // FILE 1: /app/tablets/page.js (LIST PAGE)
// // ============================================

// "use client"

// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tablet } from "lucide-react"
// import Link from "next/link"
// import { useEffect, useRef } from "react"
// import ThreeBackground from "@/components/ThreeBackground"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// export default function TabletsPage() {
//   const scrollRef = useRef(null)
//   const headerRef = useRef(null)
//   const productsRef = useRef(null)

//   const tablets = [
//     {
//       id: "astro-tab-pro",
//       name: "Astro iPad 11",
//       tagline: "Professional Productivity",
//       image: "/12ipad11.png",
//       img: "/12ipad11.png",
//       price: "399",
//       title: "From $20us + usage top ups",
//     },
//     {
//       id: "astro-tab-lite",
//       name: "Astro Tab 8",
//       tagline: "Perfect for Learning",
//       image: "/1900.png",
//       img: "/1900.png",
//       price: "199",
//       title: "From $20us + usage top ups",
//     }
//   ]

//   useEffect(() => {
//     if (headerRef.current) {
//       gsap.fromTo(
//         headerRef.current.querySelectorAll('.header-content > *'),
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           ease: 'power3.out',
//           delay: 0.3
//         }
//       )
//     }

//     if (productsRef.current) {
//       gsap.fromTo(
//         productsRef.current.querySelectorAll('.product-card'),
//         { opacity: 0, y: 100, scale: 0.8, rotateY: -45 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotateY: 0,
//           duration: 0.8,
//           stagger: 0.15,
//           ease: 'back.out(1.7)',
//           scrollTrigger: {
//             trigger: productsRef.current,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       )
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//     }
//   }, [])

//   return (
//     <div className="min-h-screen relative" ref={scrollRef}>
//       <ThreeBackground />
//       <Navigation />

//       <main className="pt-24 pb-16 relative z-10">
//         <div className="container mx-auto px-4 lg:px-8">
//           {/* Header */}
//           <div ref={headerRef} className="mb-12 flex justify-center items-center flex-col header-content">
//             <div className="flex items-center gap-3 mb-4">
//               <Tablet className="w-8 h-8" style={{ color: '#8FC240' }} />
//               <h1 className="text-4xl md:text-5xl font-bold">Tablets</h1>
//             </div>
//             <p className="text-lg text-muted-foreground max-w-2xl text-center">
//               Explore our tablet collection designed for productivity, education, and entertainment. Large screens and powerful performance for every need.
//             </p>
//           </div>

//           {/* Products Grid */}
//           <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//             {tablets.map((tablet) => (
//               <Card key={tablet.id} className="product-card group hover:shadow-xl transition-shadow overflow-hidden">
//                 <div className="relative aspect-square from-muted to-muted/50 overflow-hidden">
//                   <img
//                     src={tablet.image || "/placeholder.svg"}
//                     alt={tablet.name}
//                     className="w-full h-[320px] object-contain group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <CardContent className="px-6 py-2 space-y-2">
//                   <div className="pb-2">
//                     <h3 className="font-semibold text-xl mb-1">{tablet.name}</h3>
//                     <p className="text-sm text-muted-foreground">{tablet.tagline}</p>
//                   </div>

//                   <div className="flex justify-between">
//                     {/* THIS IS THE KEY LINK - MATCHES SMARTPHONES PATTERN */}
//                     <Link href={`/blog/${tablet.id}`}>
//                       <Button className="w-full" style={{ backgroundColor: '#8FC240' }}>
//                         Learn More
//                       </Button>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   )
// }