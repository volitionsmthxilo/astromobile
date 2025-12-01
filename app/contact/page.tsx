"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"
import { useEffect, useRef } from "react"
import ThreeBackground from "@/components/ThreeBackground"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const scrollRef = useRef(null)

  useEffect(() => {
    // Animate sections on scroll
    const sections = scrollRef.current?.querySelectorAll('section')
    sections?.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <ThreeBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden z-10">
        <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(143, 194, 64, 0.05), rgba(143, 194, 64, 0.05), transparent)' }} />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto animate-in" style={{ backgroundColor: '#8FC240' }}>Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance animate-in">
              We're Here to{" "}
              <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(to right, #8FC240, #7AB030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Help</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty animate-in">
              Have questions about our products or PAYU model? Want to become a partner? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <Phone className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-sm text-muted-foreground">Mon-Fri 8am-6pm</p>
                <p className="font-semibold">+263 78555004</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                <p className="font-semibold">busiinessdevelopment@algebra.africa</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-xl transition-all animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto" style={{ backgroundColor: '#8FC240' + '1A' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#8FC240' }} />
                </div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-sm text-muted-foreground">Our headquarters</p>
                <p className="font-semibold">Harare, Zimbabwe</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-2 animate-in" style={{ borderColor: '#8FC240' + '33' }}>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly</p>
                </div>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+263 123 456 789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
                  </div>
                  <Button size="lg" className="w-full" style={{ backgroundColor: '#8FC240' }} onClick={handleSubmit}>
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="border-2 animate-in">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#8FC240' + '1A' }}>
                      <Headphones className="w-6 h-6" style={{ color: '#8FC240' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Need help with your device or PAYU payments? Our support team is ready to assist you.
                      </p>
                      <Button variant="outline">Contact Support</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 animate-in">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Partnership Inquiries</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Interested in becoming a partner? Let's discuss how we can work together.
                      </p>
                      <Button variant="outline">Partnership Team</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 text-primary-foreground animate-in" style={{ background: 'linear-gradient(to bottom right, #8FC240, #7AB030)' }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-primary-foreground/90">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-in">Our Regional Offices</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-in">Find us across Africa</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { country: "Zimbabwe", city: "Harare", phone: "+263 78555004" },
              { country: "Kenya", city: "Nairobi", phone: "+254-701-561-809" },
              { country: "Malawi", city: "Lilongwe", phone: "+265 123 456 789" },
              { country: "South Africa", city: "Johannesburg", phone: "+27 123 456 789" },
            ].map((office, i) => (
              <Card key={i} className="animate-in">
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-lg">{office.country}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{office.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{office.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

















// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center space-y-6">
//             <Badge className="w-fit mx-auto">Get In Touch</Badge>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
//               We're Here to{" "}
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Help</span>
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
//               Have questions about our products or PAYU model? Want to become a partner? We'd love to hear from you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
//             <Card className="border-2 hover:border-primary transition-colors">
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Call Us</h3>
//                 <p className="text-sm text-muted-foreground">Mon-Fri 8am-6pm</p>
//                 <p className="font-semibold">+263 123 456 789</p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 hover:border-primary transition-colors">
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
//                   <Mail className="w-6 h-6 text-accent" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Email Us</h3>
//                 <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
//                 <p className="font-semibold">info@astromobile.com</p>
//               </CardContent>
//             </Card>
//             <Card className="border-2 hover:border-primary transition-colors">
//               <CardContent className="pt-6 space-y-4 text-center">
//                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-semibold text-lg">Visit Us</h3>
//                 <p className="text-sm text-muted-foreground">Our headquarters</p>
//                 <p className="font-semibold">Harare, Zimbabwe</p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Form & Info */}
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Form */}
//             <Card className="border-2 border-primary/20">
//               <CardContent className="p-8 space-y-6">
//                 <div>
//                   <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
//                   <p className="text-muted-foreground">Fill out the form and we'll get back to you shortly</p>
//                 </div>
//                 <form className="space-y-6">
//                   <div className="grid sm:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="firstName">First Name</Label>
//                       <Input id="firstName" placeholder="John" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="lastName">Last Name</Label>
//                       <Input id="lastName" placeholder="Doe" />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" placeholder="john@example.com" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input id="phone" type="tel" placeholder="+263 123 456 789" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input id="subject" placeholder="How can we help?" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message</Label>
//                     <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} />
//                   </div>
//                   <Button size="lg" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Additional Info */}
//             <div className="space-y-8">
//               <Card className="border-2">
//                 <CardContent className="p-8 space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
//                       <Headphones className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
//                       <p className="text-muted-foreground leading-relaxed mb-4">
//                         Need help with your device or PAYU payments? Our support team is ready to assist you.
//                       </p>
//                       <Button variant="outline">Contact Support</Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-2">
//                 <CardContent className="p-8 space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
//                       <MessageSquare className="w-6 h-6 text-accent" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg mb-2">Partnership Inquiries</h3>
//                       <p className="text-muted-foreground leading-relaxed mb-4">
//                         Interested in becoming a partner? Let's discuss how we can work together.
//                       </p>
//                       <Button variant="outline">Partnership Team</Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-2 bg-gradient-to-br from-primary to-accent text-primary-foreground">
//                 <CardContent className="p-8 space-y-4">
//                   <div className="flex items-center gap-3">
//                     <Clock className="w-6 h-6" />
//                     <h3 className="font-semibold text-lg">Business Hours</h3>
//                   </div>
//                   <div className="space-y-2 text-primary-foreground/90">
//                     <div className="flex justify-between">
//                       <span>Monday - Friday</span>
//                       <span className="font-semibold">8:00 AM - 6:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Saturday</span>
//                       <span className="font-semibold">9:00 AM - 2:00 PM</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Sunday</span>
//                       <span className="font-semibold">Closed</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Regional Offices */}
//       <section className="py-16 md:py-24 bg-muted/30">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Regional Offices</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find us across Africa</p>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { country: "Zimbabwe", city: "Harare", phone: "+263 123 456 789" },
//               { country: "Kenya", city: "Nairobi", phone: "+254 123 456 789" },
//               { country: "Malawi", city: "Lilongwe", phone: "+265 123 456 789" },
//               { country: "South Africa", city: "Johannesburg", phone: "+27 123 456 789" },
//             ].map((office, i) => (
//               <Card key={i}>
//                 <CardContent className="p-6 space-y-3">
//                   <h3 className="font-bold text-lg">{office.country}</h3>
//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <div className="flex items-center gap-2">
//                       <MapPin className="w-4 h-4" />
//                       <span>{office.city}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Phone className="w-4 h-4" />
//                       <span>{office.phone}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
