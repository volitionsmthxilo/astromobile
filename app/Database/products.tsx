// db/products.js

export const productsDatabase = {
  smartphones: [
    {
      id: 1,
      name: "Astro Blaze X",
      bannerImage: "/note13Pro-collection-banner.webp",
      
      carouselImages: [
        "/Note5 13Pro.webp",
        "/Note2 13Pro.webp",
        "/Note3 13Pro.webp",
        "/Note1 13Pro.webp"
      ],
      carouselImagestwo: [
        "/note13-a-4.webp",
        "/note13-a-13.webp",
        "/note13-a-14.webp",
        "/note13-b-4.jpg"
      ],


      
      
      phoneType: {
        heading: "Flagship Performance",
        description: "The Astro Blaze X represents a new era in African smartphone technology with powerful features designed for professionals and content creators.",
        typeImage: "/note13-a-4.webp"
      },
      
      carouselImages2: [
        "/Note5 13Pro.webp",
        "/Note2 13Pro.webp",
        "/Note3 13Pro.webp",
        "/Note1 13Pro.webp"
      ],
      
      featureImage: {
        image: "/note13-a-12.webp",
        textRight: "Experience stunning visuals with 6.7-inch AMOLED display and blazing-fast 5G connectivity.",
        textBottom: "Designed for the modern African professional"
      },
      
      specs: {
        camera: [
          {
            title: "48MP Fusion Main Camera",
            details: [
              "24/48 mm focal length (1x/2x)",
              "ƒ/1.78 aperture",
              "2.44 μm quad-pixel (1.22 μm individual)"
            ]
          },
          {
            title: "12MP Ultra Wide Camera",
            details: [
              "13 mm focal length (.5x/macro)",
              "ƒ/2.2 aperture",
              "1.4 μm quad-pixel (0.7 μm individual)"
            ]
          },
          {
            title: "8MP Telephoto Camera",
            details: [
              "100/200 mm focal length (4x/8x)",
              "ƒ/2.8 aperture",
              "1.4 μm quad-pixel (0.7 μm individual)"
            ]
          }
        ],
        display: "6.7-inch AMOLED, 120Hz",
        processor: "Octa-core processor",
        connectivity: "5G enabled"
      },
      
      imageExplanations: [
        {
          image: "/note13-g-1.webp",
          title: "Professional Photography",
          explanation: "Capture stunning photos with our AI-enhanced 48MP triple camera system that automatically adjusts for perfect lighting."
        },
        {
          image: "/note13-c-1.webp",
          title: "Immersive Display",
          explanation: "The AMOLED screen delivers vibrant colors and deep blacks for an incredible viewing experience."
        },
        {
          image: "/note13-d.webp",
          title: "Future-Ready 5G",
          explanation: "Stay ahead with 5G connectivity that offers speeds up to 10x faster than 4G."
        }
      ]
    },
    
    {
      id: 2,
      name: "Astro Energy",
      bannerImage: "/banner15pro.webp",
      
      carouselImages: [
        "/Note15_newest.png",
        "/Note15Pro_Newest.jpg.png",
        "/note 15 pr09.webp",
        "/Note2 15pro.webp"
      ],
      
      phoneType: {
        heading: "Unstoppable Battery Life",
        description: "The Astro Energy lives up to its name with a massive 6000mAh battery that lasts 2-3 days on a single charge.",
        typeImage: "/note15pro.webp"
      },
      
      carouselImages2: [
        "/note 15 pro.webp",
        "/carosel1.webp",
        "/carosel2.webp",
        "/banner15pro.webp"
      ],
      
      featureImage: {
        image: "/features/energy-feature.jpg",
        textRight: "Never worry about charging with our revolutionary 6000mAh battery.",
        textBottom: "Perfect for entrepreneurs and busy professionals"
      },
      
      specs: {
        camera: [
          {
            title: "32MP Main Camera",
            details: [
              "26 mm focal length",
              "ƒ/1.8 aperture",
              "1.6 μm pixel size"
            ]
          },
          {
            title: "8MP Ultra Wide Camera",
            details: [
              "16 mm focal length",
              "ƒ/2.4 aperture",
              "1.2 μm pixel size"
            ]
          }
        ],
        battery: "6000mAh with fast charging",
        display: "6.5-inch LCD",
        features: "Dual SIM, expandable storage"
      },
      
      imageExplanations: [
        {
          image: "/explanations/battery-life.jpg",
          title: "All-Day Power",
          explanation: "Get up to 3 days of use on a single charge - perfect for areas with unreliable power supply."
        },
        {
          image: "/explanations/fast-charging.jpg",
          title: "Rapid Charging",
          explanation: "Get a full day's power in just 30 minutes with our fast charging technology."
        },
        {
          image: "/explanations/dual-sim.jpg",
          title: "Dual SIM Flexibility",
          explanation: "Separate business and personal lines while carrying just one device."
        }
      ]
    },
    
    {
      id: 3,
      name: "Astro SmartOne",
      bannerImage: "/banners/astro-smartone-banner.jpg",
      
      carouselImages: [
        "/carousel/smartone-1.jpg",
        "/carousel/smartone-2.jpg",
        "/carousel/smartone-3.jpg",
        "/carousel/smartone-4.jpg"
      ],
      
      phoneType: {
        heading: "Accessible Innovation",
        description: "At just $129 or $12/month with PAYU, the SmartOne brings smartphone technology to everyone.",
        typeImage: "/types/affordable-type.jpg"
      },
      
      carouselImages2: [
        "/carousel2/smartone-detail-1.jpg",
        "/carousel2/smartone-detail-2.jpg",
        "/carousel2/smartone-detail-3.jpg",
        "/carousel2/smartone-detail-4.jpg"
      ],
      
      featureImage: {
        image: "/features/smartone-feature.jpg",
        textRight: "Quality features at an unbeatable price - perfect for first-time smartphone users.",
        textBottom: "Your gateway to the digital economy"
      },
      
      specs: {
        camera: [
          {
            title: "13MP Main Camera",
            details: [
              "26 mm focal length",
              "ƒ/2.0 aperture",
              "Auto-focus enabled"
            ]
          }
        ],
        price: "$129 or $12/month with PAYU",
        storage: "Expandable storage up to 256GB",
        display: "6.2-inch HD+ display"
      },
      
      imageExplanations: [
        {
          image: "/explanations/affordable-price.jpg",
          title: "Accessible Pricing",
          explanation: "Start your smartphone journey with just $12/month through our flexible PAYU payment plan."
        },
        {
          image: "/explanations/student-friendly.jpg",
          title: "Perfect for Students",
          explanation: "Access online learning platforms, educational apps, and digital textbooks with ease."
        },
        {
          image: "/explanations/expandable-storage.jpg",
          title: "Room to Grow",
          explanation: "Expandable storage means you can download all your favorite content for offline access."
        }
      ]
    },
    
    {
      id: 4,
      name: "Astro Pro Max",
      bannerImage: "/banners/astro-pro-max-banner.jpg",
      
      carouselImages: [
        "/carousel/pro-max-1.jpg",
        "/carousel/pro-max-2.jpg",
        "/carousel/pro-max-3.jpg",
        "/carousel/pro-max-4.jpg"
      ],
      
      phoneType: {
        heading: "Professional Grade Power",
        description: "The Astro Pro Max competes with global premium smartphones while remaining accessible at $399.",
        typeImage: "/types/premium-type.jpg"
      },
      
      carouselImages2: [
        "/carousel2/pro-max-detail-1.jpg",
        "/carousel2/pro-max-detail-2.jpg",
        "/carousel2/pro-max-detail-3.jpg",
        "/carousel2/pro-max-detail-4.jpg"
      ],
      
      featureImage: {
        image: "/features/pro-max-feature.jpg",
        textRight: "Professional power meets African innovation with 12GB RAM and 120Hz display.",
        textBottom: "Built for content creators and professionals"
      },
      
      specs: {
        camera: [
          {
            title: "64MP Fusion Main Camera",
            details: [
              "24/48 mm focal length (1x/2x)",
              "ƒ/1.6 aperture",
              "2.8 μm quad-pixel (1.4 μm individual)"
            ]
          },
          {
            title: "48MP Ultra Wide Camera",
            details: [
              "13 mm focal length (.5x/macro)",
              "ƒ/2.0 aperture",
              "1.6 μm quad-pixel (0.8 μm individual)"
            ]
          },
          {
            title: "12MP Telephoto Camera",
            details: [
              "100/200 mm focal length (4x/8x)",
              "ƒ/2.6 aperture",
              "1.6 μm pixel size"
            ]
          },
          {
            title: "5MP Depth Sensor",
            details: [
              "Portrait mode enhancement",
              "Bokeh effect optimization"
            ]
          }
        ],
        display: "6.8-inch AMOLED, 120Hz refresh rate",
        memory: "12GB RAM, 256GB storage",
        video: "4K video recording at 60fps",
        durability: "IP68 water and dust resistance"
      },
      
      imageExplanations: [
        {
          image: "/explanations/120hz-display.jpg",
          title: "Buttery Smooth Display",
          explanation: "The 120Hz refresh rate makes scrolling, gaming, and everyday tasks incredibly smooth and responsive."
        },
        {
          image: "/explanations/pro-camera.jpg",
          title: "Professional Photography",
          explanation: "The 64MP quad camera system produces content indistinguishable from professional cameras."
        },
        {
          image: "/explanations/content-creation.jpg",
          title: "Content Creator's Dream",
          explanation: "12GB RAM ensures your editing apps never crash during intensive sessions."
        }
      ]
    },
    
    {
      id: 5,
      name: "Astro Vision",
      bannerImage: "/banners/astro-vision-banner.jpg",
      
      carouselImages: [
        "/carousel/vision-1.jpg",
        "/carousel/vision-2.jpg",
        "/carousel/vision-3.jpg",
        "/carousel/vision-4.jpg"
      ],
      
      phoneType: {
        heading: "Photography Perfection",
        description: "The Astro Vision's 50MP camera system redefines mobile photography for African creators.",
        typeImage: "/types/camera-type.jpg"
      },
      
      carouselImages2: [
        "/carousel2/vision-detail-1.jpg",
        "/carousel2/vision-detail-2.jpg",
        "/carousel2/vision-detail-3.jpg",
        "/carousel2/vision-detail-4.jpg"
      ],
      
      featureImage: {
        image: "/features/vision-feature.jpg",
        textRight: "Capture Africa's beauty with our revolutionary 50MP AI-enhanced camera system.",
        textBottom: "Designed for photographers and visual storytellers"
      },
      
      specs: {
        camera: [
          {
            title: "50MP Fusion Main Camera",
            details: [
              "24/50 mm focal length (1x/2x)",
              "ƒ/1.6 aperture",
              "2.5 μm quad-pixel (1.25 μm individual)",
              "Optical image stabilization"
            ]
          },
          {
            title: "12MP Ultra Wide Camera",
            details: [
              "13 mm focal length (.5x/macro)",
              "ƒ/2.2 aperture",
              "1.4 μm pixel size"
            ]
          },
          {
            title: "8MP Telephoto Camera",
            details: [
              "77 mm focal length (3x optical)",
              "ƒ/2.4 aperture",
              "1.0 μm pixel size",
              "Optical image stabilization"
            ]
          }
        ],
        video: "4K video at 30fps with OIS",
        nightMode: "Advanced computational photography",
        proMode: "Full manual control for professionals",
        display: "6.6-inch AMOLED"
      },
      
      imageExplanations: [
        {
          image: "/explanations/50mp-camera.jpg",
          title: "50MP Excellence",
          explanation: "Capture every detail with our professional-grade 50MP camera system tested across Africa's diverse landscapes."
        },
        {
          image: "/explanations/night-photography.jpg",
          title: "Night Mode Magic",
          explanation: "Advanced computational photography creates bright, detailed photos even in near-darkness."
        },
        {
          image: "/explanations/4k-video.jpg",
          title: "4K Video Recording",
          explanation: "Record professional-quality 4K video with optical image stabilization for smooth, steady footage."
        }
      ]
    }
  ],
  
  tablets: [
    {
      id: 1,
      name: "Astro Tab Pro",
      bannerImage: "/banners/tab-pro-banner.jpg",
      // ... similar structure as smartphones
    },
    {
      id: 2,
      name: "Astro Tab Lite",
      bannerImage: "/banners/tab-lite-banner.jpg",
      // ... similar structure
    },
    {
      id: 3,
      name: "Astro Tab Kids",
      bannerImage: "/banners/tab-kids-banner.jpg",
      // ... similar structure
    }
  ],
  
  watches: [
    {
      id: 1,
      name: "Astro Watch Pro",
      bannerImage: "/banners/watch-pro-banner.jpg",
      // ... similar structure
    },
    {
      id: 2,
      name: "Astro Watch Fit",
      bannerImage: "/banners/watch-fit-banner.jpg",
      // ... similar structure
    }
  ]
};

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return productsDatabase[category] || [];
};

// Helper function to get single product
export const getProductById = (category, id) => {
  const products = productsDatabase[category] || [];
  return products.find(product => product.id === id);
};