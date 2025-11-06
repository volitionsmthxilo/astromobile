"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { use, useState } from "react"
import { productsDatabase, getProductById } from '../../Database/products'

export default function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = use(params)
  const [currentCarousel1, setCurrentCarousel1] = useState(0)
  const [currentCarousel2, setCurrentCarousel2] = useState(0)
  const [currentFullCarousel, setCurrentFullCarousel] = useState(0)

  // Get product from database - you need to extract the category and id
  // For now, assuming it's a smartphone
  const product = getProductById('smartphones', parseInt(productId)) || getProductById('smartphones', 1)

  if (!product) {
    return <div>Product not found</div>
  }

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
    <div className="min-h-screen">
      <Navigation />

      {/* SECTION 1: Hero Banner with Text Overlay at Bottom */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden mt-16">
        <img
          src={product.bannerImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 text-white">
          <Badge className="mb-4 bg-primary/80 backdrop-blur-sm">New Release</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl">{product.phoneType.description}</p>
          <Button size="lg" className="text-lg px-8">
            Buy Now
            <ShoppingCart className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* SECTION 2: Highlights Section - Camera Specs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes {product.name} exceptional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {product.specs.camera.map((cam: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{cam.title}</h3>
                  <ul className="space-y-2">
                    {cam.details.map((detail: string, i: number) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
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

      {/* SECTION 3: First Carousel (4 images grid/slider) - carouselImages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Every Angle</h2>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {product.carouselImages.map((img: string, index: number) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
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
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide1}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {product.carouselImages.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarousel1(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCarousel1 ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Full Width Carousel (One Image at a Time) */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={product.carouselImagestwo[currentFullCarousel]}
          alt={`${product.name} showcase`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <button
          onClick={prevFullSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextFullSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {product.carouselImages.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentFullCarousel(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentFullCarousel ? 'bg-white w-12' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* SECTION 5: Phone Type Section - phoneType (Image in Middle, Text Below 20px) */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
              <img
                src={product.phoneType.typeImage}
                alt={product.phoneType.heading}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{product.phoneType.heading}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed" style={{ fontSize: '20px' }}>
              {product.phoneType.description}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Second Carousel - carouselImages2 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See It in Action</h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {product.carouselImages2.map((img: string, index: number) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={`${product.name} detail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.carouselImages2[currentCarousel2]}
                alt={`${product.name} detail`}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={prevSlide2}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide2}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {product.carouselImages2.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarousel2(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentCarousel2 ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Feature Image - featureImage (Image with Text on Right and Bottom) */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={product.featureImage.image}
                alt="Feature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{product.name}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.featureImage.textRight}
              </p>
              <Button size="lg" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-primary">{product.featureImage.textBottom}</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: ALL Detailed Specs - Full specs object */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Camera System */}
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Camera System</h3>
                    {product.specs.camera.map((cam: any, index: number) => (
                      <div key={index} className="mb-6 pb-6 border-b last:border-0">
                        <h4 className="text-lg font-semibold mb-3 text-primary">{cam.title}</h4>
                        <ul className="space-y-2 pl-4">
                          {cam.details.map((detail: string, i: number) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="text-primary mr-3">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Display */}
                  {product.specs.display && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Display</h3>
                      <p className="text-muted-foreground">{product.specs.display}</p>
                    </div>
                  )}

                  {/* Processor */}
                  {product.specs.processor && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Processor</h3>
                      <p className="text-muted-foreground">{product.specs.processor}</p>
                    </div>
                  )}

                  {/* Connectivity */}
                  {product.specs.connectivity && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Connectivity</h3>
                      <p className="text-muted-foreground">{product.specs.connectivity}</p>
                    </div>
                  )}

                  {/* Battery */}
                  {product.specs.battery && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Battery</h3>
                      <p className="text-muted-foreground">{product.specs.battery}</p>
                    </div>
                  )}

                  {/* Memory */}
                  {product.specs.memory && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Memory</h3>
                      <p className="text-muted-foreground">{product.specs.memory}</p>
                    </div>
                  )}

                  {/* Video */}
                  {product.specs.video && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Video Recording</h3>
                      <p className="text-muted-foreground">{product.specs.video}</p>
                    </div>
                  )}

                  {/* Durability */}
                  {product.specs.durability && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Durability</h3>
                      <p className="text-muted-foreground">{product.specs.durability}</p>
                    </div>
                  )}

                  {/* Storage */}
                  {product.specs.storage && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Storage</h3>
                      <p className="text-muted-foreground">{product.specs.storage}</p>
                    </div>
                  )}

                  {/* Price */}
                  {product.specs.price && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Pricing</h3>
                      <p className="text-muted-foreground">{product.specs.price}</p>
                    </div>
                  )}

                  {/* Features */}
                  {product.specs.features && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Key Features</h3>
                      <p className="text-muted-foreground">{product.specs.features}</p>
                    </div>
                  )}

                  {/* Night Mode */}
                  {product.specs.nightMode && (
                    <div className="pb-6 border-b">
                      <h3 className="text-xl font-bold mb-2">Night Mode</h3>
                      <p className="text-muted-foreground">{product.specs.nightMode}</p>
                    </div>
                  )}

                  {/* Pro Mode */}
                  {product.specs.proMode && (
                    <div>
                      <h3 className="text-xl font-bold mb-2">Pro Mode</h3>
                      <p className="text-muted-foreground">{product.specs.proMode}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9: Image Explanations - imageExplanations array */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose {product.name}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.imageExplanations.map((item: any, index: number) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.explanation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Own {product.name}?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of mobile technology today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-lg">
                  <ShoppingCart className="mr-2 w-5 h-5" />
                  Buy Now
                </Button>
                <Link href={`/blog/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button size="lg" variant="outline" className="text-lg">
                    Read Reviews
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}




















// "use client"

// import { productsDatabase, getProductsByCategory, getProductById } from '../';
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
// import Link from "next/link"
// import { use } from "react"

// export default function BlogPage({ params }: { params: Promise<{ productId: string }> }) {
//   const { productId } = use(params);
//   const smartphones = getProductsByCategory('smartphones');

// // Get specific phone
// const astroBlaze = getProductById('smartphones', 1);

//   // Blog articles data for each product
//   const blogData: Record<string, any> = {
//     "astro-blaze-x": {
//       product: "Astro Blaze X",
//       image: "/premium-flagship-smartphone.jpg",
//       articles: [
//         {
//           title: "Astro Blaze X: The Flagship That's Redefining African Smartphones",
//           date: "November 1, 2025",
//           author: "Tech Team",
//           excerpt:
//             "Discover how the Astro Blaze X is setting new standards for flagship smartphones in Africa with its powerful features and affordable pricing.",
//           content:
//             "The Astro Blaze X represents a new era in African smartphone technology. With its 6.7-inch AMOLED display, 48MP triple camera system, and 5G connectivity, it's designed to compete with global flagships while remaining accessible to African consumers. The device features an octa-core processor that handles multitasking with ease, making it perfect for professionals and content creators alike.",
//         },
//         {
//           title: "Camera Excellence: How Astro Blaze X Captures Africa's Beauty",
//           date: "October 28, 2025",
//           author: "Photography Expert",
//           excerpt:
//             "Professional photographers share their experience using the Astro Blaze X's 48MP camera system across various African landscapes.",
//           content:
//             "The 48MP triple camera system on the Astro Blaze X has been tested across diverse African environments - from the Serengeti plains to bustling city markets. The AI-enhanced photography features automatically adjust for lighting conditions, ensuring stunning photos whether you're capturing wildlife at dawn or vibrant street scenes at night. The night mode is particularly impressive, bringing out details in low-light situations that were previously impossible with smartphone cameras.",
//         },
//         {
//           title: "5G Connectivity: Future-Proofing Your Investment",
//           date: "October 25, 2025",
//           author: "Network Specialist",
//           excerpt:
//             "As 5G networks expand across Africa, the Astro Blaze X ensures you're ready for the next generation of mobile connectivity.",
//           content:
//             "With 5G networks rapidly expanding across major African cities, the Astro Blaze X's 5G capability ensures your device remains relevant for years to come. Experience download speeds up to 10 times faster than 4G, enabling seamless video streaming, cloud gaming, and instant file transfers. Our partnership with major African telecom providers ensures optimal 5G performance across the continent.",
//         },
//       ],
//     },
//     "astro-energy": {
//       product: "Astro Energy",
//       image: "/modern-smartphone-with-long-battery.jpg",
//       articles: [
//         {
//           title: "Astro Energy: The Phone That Never Quits",
//           date: "November 2, 2025",
//           author: "Battery Expert",
//           excerpt:
//             "Real-world testing shows the Astro Energy's 6000mAh battery lasting up to 3 days on a single charge.",
//           content:
//             "The Astro Energy lives up to its name with a massive 6000mAh battery that redefines what users can expect from smartphone battery life. In our extensive real-world testing across various African markets, users reported consistently getting 2-3 days of moderate use on a single charge. For heavy users, the phone easily lasts a full day even with constant social media, video streaming, and gaming. The fast charging technology means you can get a full day's power in just 30 minutes of charging.",
//         },
//         {
//           title: "Perfect for Entrepreneurs: Why Business Owners Love Astro Energy",
//           date: "October 30, 2025",
//           author: "Business Analyst",
//           excerpt:
//             "Small business owners across Africa share how the Astro Energy's long battery life has transformed their operations.",
//           content:
//             "For entrepreneurs operating in areas with unreliable power supply, the Astro Energy has become an essential business tool. Market vendors, taxi drivers, and mobile money agents report that the extended battery life allows them to conduct business all day without worrying about charging. The dual SIM capability also means they can separate business and personal lines while carrying just one device.",
//         },
//         {
//           title: "Astro Energy vs. Power Banks: The Math That Makes Sense",
//           date: "October 27, 2025",
//           author: "Cost Analyst",
//           excerpt:
//             "A detailed cost analysis shows how the Astro Energy's battery eliminates the need for expensive power banks and frequent charging.",
//           content:
//             "When you factor in the cost of power banks, charging cables, and the time spent looking for charging points, the Astro Energy's 6000mAh battery offers significant savings. Our analysis shows users save an average of $50 per year on charging accessories alone. More importantly, the convenience of not having to carry power banks or worry about finding charging stations is invaluable for busy professionals and travelers.",
//         },
//       ],
//     },
//     "astro-smartone": {
//       product: "Astro SmartOne",
//       image: "/affordable-budget-smartphone.jpg",
//       articles: [
//         {
//           title: "Astro SmartOne: Breaking Barriers to Smartphone Ownership",
//           date: "November 3, 2025",
//           author: "Social Impact Team",
//           excerpt: "How the Astro SmartOne is bringing smartphone technology to first-time users across Africa.",
//           content:
//             "The Astro SmartOne represents our commitment to making smartphone technology accessible to everyone. At just $129, or $12/month with PAYU, it's helping thousands of first-time smartphone users across Africa connect to the digital economy. The device doesn't compromise on essential features - it includes a quality camera, expandable storage, and a reliable battery, making it perfect for students, first-time buyers, and anyone looking for a dependable smartphone without breaking the bank.",
//         },
//         {
//           title: "Student Success Stories: Education in the Palm of Your Hand",
//           date: "October 29, 2025",
//           author: "Education Correspondent",
//           excerpt: "Students share how the affordable Astro SmartOne has enhanced their learning experience.",
//           content:
//             "With schools increasingly adopting digital learning tools, the Astro SmartOne has become a gateway to education for students who couldn't afford expensive smartphones. Teachers report that students using the SmartOne can access online learning platforms, educational apps, and digital textbooks without any performance issues. The expandable storage means students can download educational content for offline access, crucial in areas with limited internet connectivity.",
//         },
//         {
//           title: "PAYU Success: How $12/Month Changed Everything",
//           date: "October 26, 2025",
//           author: "Financial Inclusion Expert",
//           excerpt: "Real stories of how the Pay-As-You-Use model made the Astro SmartOne accessible to thousands.",
//           content:
//             "The PAYU model has revolutionized smartphone ownership for many Africans. Instead of saving for months to buy a phone outright, users can start with just $12/month and own their device over time. We've seen market vendors, students, and young professionals who never thought they could afford a smartphone now enjoying the benefits of mobile connectivity. The flexible payment structure through mobile money makes it easy to manage, and users report that the monthly payment is less than what they used to spend on internet cafes.",
//         },
//       ],
//     },
//     "astro-pro-max": {
//       product: "Astro Pro Max",
//       image: "/professional-premium-smartphone.jpg",
//       articles: [
//         {
//           title: "Astro Pro Max: Professional Power Meets African Innovation",
//           date: "November 4, 2025",
//           author: "Tech Reviewer",
//           excerpt: "An in-depth look at how the Astro Pro Max competes with global premium smartphones.",
//           content:
//             "The Astro Pro Max is our answer to premium smartphones from global brands, but with features specifically designed for African users. The 12GB RAM and 256GB storage handle professional applications with ease, while the 120Hz display provides a smooth, responsive experience. The 64MP quad camera system rivals anything on the market, and the IP68 water resistance means it can handle Africa's diverse climates. What sets it apart is the price - at $399, it's significantly more affordable than comparable international flagships.",
//         },
//         {
//           title: "Content Creators Choose Astro Pro Max: Here's Why",
//           date: "November 1, 2025",
//           author: "Content Creator",
//           excerpt:
//             "African content creators explain why the Astro Pro Max has become their go-to device for professional work.",
//           content:
//             "Content creators across Africa are choosing the Astro Pro Max for its professional-grade features. The 64MP camera with 4K video recording produces content that's indistinguishable from professional cameras. The 120Hz display makes video editing smooth and precise, while the 12GB RAM ensures apps don't crash during intensive editing sessions. Influencers, YouTubers, and photographers report that the Pro Max has eliminated their need for separate cameras and editing equipment.",
//         },
//         {
//           title: "120Hz Display: The Difference You Can See and Feel",
//           date: "October 28, 2025",
//           author: "Display Technology Expert",
//           excerpt: "Understanding why the Astro Pro Max's 120Hz display is a game-changer for mobile experiences.",
//           content:
//             "The 120Hz refresh rate on the Astro Pro Max's display isn't just a spec sheet number - it's a noticeable improvement in everyday use. Scrolling through social media feels incredibly smooth, gaming becomes more responsive, and even simple tasks like reading feel more natural. The AMOLED technology ensures deep blacks and vibrant colors, making it perfect for watching videos and viewing photos. Once you experience 120Hz, it's hard to go back to standard displays.",
//         },
//       ],
//     },
//     "astro-lite": {
//       product: "Astro Lite",
//       image: "/basic-entry-level-smartphone.jpg",
//       articles: [
//         {
//           title: "Astro Lite: Simplicity Meets Reliability",
//           date: "November 5, 2025",
//           author: "Product Team",
//           excerpt: "Why sometimes less is more - the philosophy behind the Astro Lite's design.",
//           content:
//             "The Astro Lite was designed with a specific user in mind - someone who needs a reliable smartphone for essential tasks without unnecessary complexity. At $99, it's our most affordable device, but it doesn't feel cheap. The compact 6.0-inch display is perfect for one-handed use, the 3GB RAM handles essential apps smoothly, and the 3500mAh battery provides all-day power. It's ideal for seniors, as a backup phone, or for anyone who values simplicity and reliability over cutting-edge features.",
//         },
//         {
//           title: "Senior Citizens Embrace Technology with Astro Lite",
//           date: "November 2, 2025",
//           author: "Community Outreach",
//           excerpt: "How the Astro Lite's simple interface is helping older adults stay connected with family.",
//           content:
//             "We've received heartwarming stories from families who bought the Astro Lite for their elderly parents and grandparents. The simple interface, large icons, and reliable performance make it easy for seniors to make video calls, send messages, and stay connected with family. The FM radio feature is particularly popular, allowing users to listen to their favorite stations without using data. Many users report that the Astro Lite has helped bridge the digital divide for older family members.",
//         },
//         {
//           title: "The Perfect Backup Phone: Why Everyone Needs an Astro Lite",
//           date: "October 30, 2025",
//           author: "Lifestyle Writer",
//           excerpt: "Exploring why the Astro Lite makes an excellent backup device for any smartphone user.",
//           content:
//             "Even if you own a flagship smartphone, there are compelling reasons to have an Astro Lite as a backup. At just $99, it's affordable insurance against lost, stolen, or broken primary phones. Travelers appreciate having a backup device with dual SIM capability for local SIM cards. The compact size and long battery life also make it perfect for outdoor activities where you don't want to risk your expensive primary phone. Many users keep an Astro Lite in their car or office as an emergency device.",
//         },
//       ],
//     },
//     "astro-vision": {
//       product: "Astro Vision",
//       image: "/smartphone-with-excellent-camera.jpg",
//       articles: [
//         {
//           title: "Astro Vision: Photography Redefined for African Creators",
//           date: "November 6, 2025",
//           author: "Photography Expert",
//           excerpt: "Professional photographers test the Astro Vision's 50MP camera across Africa's diverse landscapes.",
//           content:
//             "The Astro Vision's 50MP camera system has been put through rigorous testing by professional photographers across Africa. From capturing wildlife in Kenya to street photography in Lagos, the results have been consistently impressive. The AI-enhanced camera automatically adjusts settings for optimal results, while the Pro Mode gives experienced photographers full manual control. The night mode is particularly noteworthy, producing clear, detailed photos in low-light conditions that would challenge even dedicated cameras.",
//         },
//         {
//           title: "Night Mode Magic: Capturing Africa After Dark",
//           date: "November 3, 2025",
//           author: "Night Photography Specialist",
//           excerpt: "How the Astro Vision's advanced night mode is revolutionizing low-light photography.",
//           content:
//             "Africa comes alive at night, and the Astro Vision's night mode ensures you can capture it all. The advanced computational photography combines multiple exposures to create bright, detailed photos even in near-darkness. We've tested it at night markets, evening festivals, and under starry skies - the results are consistently stunning. The camera's ability to capture both bright lights and dark shadows in the same scene means you can photograph cityscapes, concerts, and nightlife without missing any details.",
//         },
//         {
//           title: "4K Video: Professional Content Creation on a Budget",
//           date: "October 31, 2025",
//           author: "Video Producer",
//           excerpt: "How the Astro Vision's 4K video capabilities are empowering African content creators.",
//           content:
//             "The Astro Vision records 4K video at 30fps, providing professional-quality footage for content creators. The optical image stabilization ensures smooth video even when walking or moving, while the AI-enhanced audio recording captures clear sound in noisy environments. Video bloggers and documentary makers report that the Astro Vision has replaced their need for expensive video cameras. The ability to edit and upload directly from the phone makes it a complete content creation solution.",
//         },
//       ],
//     },
//   }

//   const currentBlog = blogData[productId] || blogData["astro-blaze-x"]

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background -z-10" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <Link href="/products">
//             <Button variant="ghost" className="mb-6">
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Products
//             </Button>
//           </Link>
//           <div className="max-w-4xl mx-auto text-center space-y-6">
//             <Badge className="w-fit mx-auto">Product News & Reviews</Badge>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
//               Everything About{" "}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 {currentBlog.product}
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
//               Latest news, reviews, and insights about the {currentBlog.product}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Product */}
//       <section className="py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <Card className="overflow-hidden border-2 border-primary/20">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50">
//                 <img
//                   src={currentBlog.image || "/placeholder.svg"}
//                   alt={currentBlog.product}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-8 space-y-4">
//                 <h2 className="text-3xl font-bold">{currentBlog.product}</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Discover everything you need to know about the {currentBlog.product} - from detailed reviews to user
//                   experiences and expert insights.
//                 </p>
//                 <Link href="/products">
//                   <Button size="lg">View Product Details</Button>
//                 </Link>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Blog Articles */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-4xl mx-auto space-y-8">
//             {currentBlog.articles.map((article: any, index: number) => (
//               <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
//                 <CardContent className="p-8 space-y-4">
//                   <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4" />
//                       {article.date}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       {article.author}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl md:text-3xl font-bold leading-tight">{article.title}</h3>
//                   <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>
//                   <p className="text-base leading-relaxed">{article.content}</p>
//                   <div className="flex items-center gap-4 pt-4">
//                     <Button variant="outline" size="sm">
//                       <Share2 className="w-4 h-4 mr-2" />
//                       Share Article
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
//             <CardContent className="p-8 md:p-12 text-center space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-balance">
//                 Ready to Experience {currentBlog.product}?
//               </h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//                 Join thousands of satisfied customers across Africa who have made the switch to AstroMobile
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//                 <Link href="/products">
//                   <Button size="lg">Shop Now</Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button size="lg" variant="outline">
//                     Contact Us
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
