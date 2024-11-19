const services = [
  {
  id: 1,
  title: "Cleaning Service",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://www.apzomedia.com/wp-content/uploads/2020/02/How-House-Cleaning-Routine-Will-Change-Your-Life-1920x1280.jpeg",
  rating: {
  rate: 3.9,
  count: 120
  }
  },
  {
  id: 2,
  title: "AC & Appliance Repair",
  price: 22.3,
  description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image: "https://www.housepro.net/main/wp-content/uploads/2022/03/shutterstock_795704977.jpeg",
  rating: {
  rate: 4.1,
  count: 259
  }
  },
  {
  id: 3,
  title: "Bathroom Cleaning",
  price: 55.99,
  description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  category: "men's clothing",
  image: "https://cf.ltkcdn.net/cleaning/images/orig/270026-1600x1066-how-often-should-you-clean-your-bathroom.jpg",
  rating: {
  rate: 4.7,
  count: 500
  }
  },
  {
  id: 4,
  title: "Plumbing Service",
  price: 15.99,
  description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  category: "men's clothing",
  image: "https://www.build-review.com/wp-content/uploads/2021/03/Plumbing.jpg",
  rating: {
  rate: 2.1,
  count: 430
  }
  },
  {
  id: 5,
  title: "Door & Window Service",
  price: 695,
  description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  category: "jewelery",
  image: "http://residencestyle.com/wp-content/uploads/2019/12/Know-The-Type-of-Carpenter-You%E2%80%99re-Looking-For.jpg",
  rating: {
  rate: 4.6,
  count: 400
  }
  },
  {
  id: 6,
  title: "Wall Painting ",
  price: 168,
  description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  category: "jewelery",
  image: "https://www.familyhandyman.com/wp-content/uploads/2019/08/FH07FEB_475_52_101-interior-painting-tips-featured.jpg",
  rating: {
  rate: 3.9,
  count: 70
  }
  },
  {
  id: 7,
  title: "Pet Control Service",
  price: 9.99,
  description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
  category: "jewelery",
  image: "https://www.teamais.net/wp-content/uploads/2020/08/vet-min.jpg",
  rating: {
  rate: 3,
  count: 400
  }
  },
  {
  id: 8,
  title: "Electric Service",
  price: 10.99,
  description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
  category: "jewelery",
  image: "https://oncallelectric.ca/wp-content/uploads/2021/02/importance-of-hiring-an-electrician-over-diy-2-1-1.jpg",
  rating: {
  rate: 1.9,
  count: 100
  }
  },
  {
  id: 9,
  title: "Floor Work",
  price: 64,
  description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  category: "electronics",
  image: "https://www.thespruce.com/thmb/LgvqQKnHUUeIacxcLoKL5daHWrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/170040982-56a49f213df78cf772834e21.jpg",
  rating: {
  rate: 3.3,
  count: 203
  }
  },
  {
  id: 10,
  title: "Tiling Services",
  price: 109,
  description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  category: "electronics",
  image: "https://mediacache.homeimprovementpages.com.au/creative/galleries/755001_760000/756264/original_images/411483.jpg",
  rating: {
  rate: 2.9,
  count: 470
  }
  },
  {
  id: 11,
  title: "Camera Fitting",
  price: 109,
  description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  category: "electronics",
  image: "https://www.reviews.org/app/uploads/2020/05/Male-Technician-Standing-On-Stepladder-Fitting-CCTV-Camera-1.jpg",
  rating: {
  rate: 4.8,
  count: 319
  }
  },
  {
  id: 12,
  title: "Electric Appliance Fitting",
  price: 114,
  description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  category: "electronics",
  image: "https://blog.puls.com/hubfs/puls-ceiling-fan-installation-how-to.jpg#keepProtocol",
  rating: {
  rate: 4.8,
  count: 400
  }
  },
  {
  id: 13,
  title: "Washing Machine Repair",
  price: 599,
  description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  category: "electronics",
  image: "https://th.bing.com/th/id/OIP.ZQ8DJb6nmKPT_Ud1sRYNWQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain",
  rating: {
  rate: 2.9,
  count: 250
  }
  },
  {
  id: 14,
  title: "Electric Gate Fitting",
  price: 999.99,
  description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  category: "electronics",
  image: "https://butterflymx.com/wp-content/uploads/2022/09/electric-gate-openers.jpg",
  rating: {
  rate: 2.2,
  count: 140
  }
  },
  {
  id: 15,
  title: "Switchboard Repair",
  price: 56.99,
  description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  category: "women's clothing",
  image: "https://housing.com/news/wp-content/uploads/2022/11/home-switch-designs-FEATURE-compressed.jpg",
  rating: {
  rate: 2.6,
  count: 235
  }
  },
  {
  id: 16,
  title: "Door Lock Repair",
  price: 29.95,
  description: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
  category: "women's clothing",
  image: "https://th.bing.com/th/id/OIP.wmAk327RDbb6FTH5-BsmngHaFj?rs=1&pid=ImgDetMain",
  rating: {
  rate: 2.9,
  count: 340
  }
  },
  {
  id: 17,
  title: "Curtain Rod Installation",
  price: 39.99,
  description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
  category: "women's clothing",
  image: "https://www.theshadestore.com/blog/wp-content/uploads/the-shade-store-tailored-pleat-drapery-installation-luxe-linen-oyster-how-to-install-curtain-rods-professional-install-content-2022-los-angeles-950x550px.jpg.webp",
  rating: {
  rate: 3.8,
  count: 679
  }
  },
  {
  id: 18,
  title: "Cupboard Hinge Installation",
  price: 9.85,
  description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
  category: "women's clothing",
  image: "https://rogueengineer.com/wp-content/uploads/2020/02/Installing-Cabinet-Hinges-the-Easy-Way-Rogue-Engineer-3.jpeg",
  rating: {
  rate: 4.7,
  count: 130
  }
  },
  {
  id: 19,
  title: "Refridgerator Repair",
  price: 7.95,
  description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
  category: "women's clothing",
  image: "https://normanappliancerepair.com/wp-content/uploads/2019/09/Norman_Appliance_Repair_refrigerator_repair-5-700x467.jpg",
  rating: {
  rate: 4.5,
  count: 146
  }
  },
  {
  id: 20,
  title: "Well Pumb Repair",
  price: 12.99,
  description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
  category: "women's clothing",
  image: "https://res.cloudinary.com/liaison-inc/image/upload/c_fill,f_auto,q_auto/services/homeguide/backgrounds/well-pump-repair.jpg",
  rating: {
  rate: 3.6,
  count: 145
  }
  }
  ]



  export default services