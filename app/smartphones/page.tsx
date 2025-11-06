"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Battery, Camera, Cpu, HardDrive, Smartphone } from "lucide-react"
import { productsDatabase, getProductById } from '../Database/products'
import Link from "next/link"

export default function SmartphonesPage() {
  const smartphones = [
    {
      id: "astro-blaze-x",
      name: "Astro Blaze X",
      tagline: "Flagship Performance",
      image: "/Note13Max_Newest.png",
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
      id: "astro-energy",
      name: "Astro Energy",
      tagline: "Power That Lasts",
      image: "/Note15_newest.png",
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
      id: "astro-smartone",
      name: "Astro SmartOne",
      tagline: "Smart & Affordable",
      payuPrice: "$12/month",
      image: "/Note15Pro_Newest.jpg.png",
      specs: {
        display: '6.2" IPS LCD',
        ram: "4GB RAM",
        storage: "32GB Storage",
        camera: "16MP Dual Camera",
        battery: "4000mAh",
        processor: "Quad-core 1.8GHz",
        features: ["Dual SIM", "Face Unlock", "Expandable Storage"],
      },
    },
    {
      id: "astro-pro",
      name: "Astro Pro",
      tagline: "Professional Grade",
      image: "/Note16_newest.png",
      specs: {
        display: '6.8" AMOLED',
        ram: "12GB RAM",
        storage: "256GB Storage",
        camera: "64MP Quad Camera",
        battery: "5500mAh",
        processor: "Octa-core 2.8GHz",
        features: ["5G Ready", "Wireless Charging", "IP68 Water Resistant", "Dual SIM", "In-Display Fingerprint"],
      },
    },
    {
      id: "astro-lite",
      name: "Astro Lite",
      tagline: "Essential Features",
      payuPrice: "$10/month",
      image: "/Note16Pro_newest.png",
      specs: {
        display: '6.0" IPS LCD',
        ram: "3GB RAM",
        storage: "32GB Storage",
        camera: "13MP Single Camera",
        battery: "3500mAh",
        processor: "Quad-core 1.6GHz",
        features: ["Dual SIM", "Expandable Storage", "Face Unlock"],
      },
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Smartphones</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our range of smartphones built for Africa. From flagship performance to budget-friendly options,
              find the perfect device for your needs.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {smartphones.map((phone) => (
              <Card key={phone.id} className="group hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <img
                    src={phone.image || "/placeholder.svg"}
                    alt={phone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="px-6 py-2 space-y-2">
                  <div className="pb-2">
                    <h3 className="font-semibold text-xl mb-1">{phone.name}</h3>
                    <p className="text-sm   text-muted-foreground">{phone.tagline}</p>
                  </div>

                  <div className="flex  justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="px-4 bg-transparent">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{phone.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img
                            src={phone.image || "/placeholder.svg"}
                            alt={phone.name}
                            className="w-full h-64 object-cover rounded-lg"
                          />

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Specifications</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="flex items-start gap-3">
                                <Smartphone className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Display</div>
                                  <div className="text-sm text-muted-foreground">{phone.specs.display}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <HardDrive className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Memory</div>
                                  <div className="text-sm text-muted-foreground">
                                    {phone.specs.ram} / {phone.specs.storage}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Camera className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Camera</div>
                                  <div className="text-sm text-muted-foreground">{phone.specs.camera}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Battery className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Battery</div>
                                  <div className="text-sm text-muted-foreground">{phone.specs.battery}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Cpu className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <div className="text-sm font-medium">Processor</div>
                                  <div className="text-sm text-muted-foreground">{phone.specs.processor}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-lg mb-3">Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {phone.specs.features.map((feature, i) => (
                                <Badge key={i} variant="secondary">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div>
                              <div className="text-sm text-muted-foreground">or {phone.payuPrice} with PAYU</div>
                            </div>
                            <Button size="lg">Buy Now</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Link href={`/blog/${phone.id}`}>
                      <Button className="w-full">Learn More</Button>
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
