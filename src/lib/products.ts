export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  image: string;
  gallery: string[];
  faqs: { q: string; a: string }[];
}

export const productsData: Product[] = [
  // U-PVC Windows
  {
    slug: "villa-window",
    name: "U-PVC Villa Window",
    categorySlug: "upvc-windows",
    categoryName: "U-PVC Windows",
    shortDescription: "Elegant and secure villa windows designed for premium homes.",
    description: "The U-PVC Villa Window is a specialized combination window featuring an iron grill, a bug screen, and glass sashes. Engineered for Indian homes, it offers the perfect balance of security, ventilation, and aesthetics without compromising on the benefits of UPVC.",
    features: [
      "Integrated bug screen for mosquito protection",
      "Built-in iron grill for maximum security",
      "Double glazing compatible for sound insulation",
      "Multi-point locking system",
      "Termite and corrosion proof",
      "20-year warranty on profile"
    ],
    specifications: {
      "Profile System": "Core PSM Multi-chambered",
      "Frame Depth": "60mm / 112mm",
      "Glass Options": "Single (5mm/6mm) or Double Glazed (up to 24mm)",
      "Hardware": "Premium European / Equivalent",
      "Colors": "White, Golden Oak, Dark Oak, Mahogany"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    ],
    faqs: [
      { q: "Is the grill secure enough?", a: "Yes, the integrated MS grill is securely anchored to the UPVC frame with steel reinforcements, providing excellent security comparable to traditional wooden frames." },
      { q: "Can I customize the mesh?", a: "Yes, we offer fiberglass, stainless steel, and pet-resistant mesh options." }
    ]
  },
  {
    slug: "casement-window",
    name: "The Casement Window",
    categorySlug: "upvc-windows",
    categoryName: "U-PVC Windows",
    shortDescription: "Classic outward or inward opening windows for maximum ventilation.",
    description: "Casement windows are attached to their frame by one or more hinges at the side. They offer excellent ventilation and clear views. When closed and locked, casement windows provide an excellent seal against the weather.",
    features: [
      "Opens 100% for maximum airflow",
      "Superior weather sealing with double weather-stripping",
      "Easy to clean from the inside",
      "Excellent thermal and acoustic insulation",
      "Friction stay hinges hold window open at any angle"
    ],
    specifications: {
      "Profile System": "Core PSM Casement System",
      "Frame Depth": "60mm",
      "Glass Thickness": "5mm to 32mm",
      "Hinges": "Heavy-duty friction stays",
      "Locking": "Multipoint espagnolette"
    },
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "tilt-turn-window",
    name: "Tilt & Turn Window",
    categorySlug: "upvc-windows",
    categoryName: "U-PVC Windows",
    shortDescription: "European style window that tilts for ventilation and turns to open fully.",
    description: "A versatile European design that features a dual-action mechanism. Turn the handle 90 degrees to swing the window inward like a door, or 180 degrees to tilt the top inward for secure, draft-free ventilation.",
    features: [
      "Dual opening mechanism (Tilt and Turn)",
      "Draft-free ventilation in tilt position",
      "Easy cleaning from inside the room",
      "High security multi-point locking",
      "Premium aesthetic"
    ],
    specifications: {
      "Profile System": "Core PSM Premium Series",
      "Hardware": "German origin dual-action hardware",
      "Max Sash Size": "1200mm x 2400mm",
      "Glass Options": "Double or Triple Glazing"
    },
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "three-track-window",
    name: "Three Track Window",
    categorySlug: "upvc-windows",
    categoryName: "U-PVC Windows",
    shortDescription: "Sliding window system with an integrated mesh track.",
    description: "The Three Track Sliding Window features two glass sashes and one bug screen sash sliding independently. It is perfect for wide openings where space for outward opening windows is limited.",
    features: [
      "Space-saving sliding design",
      "Integrated bug screen track",
      "Smooth nylon rollers for effortless sliding",
      "Interlocking system for weather sealing",
      "Anti-lift blocks for security"
    ],
    specifications: {
      "Profile System": "Core PSM Sliding System",
      "Frame Depth": "112mm (3 Track)",
      "Rollers": "Adjustable tandem rollers",
      "Locking": "Touch lock or multi-point"
    },
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "fix-window",
    name: "U-PVC Fix Window",
    categorySlug: "upvc-windows",
    categoryName: "U-PVC Windows",
    shortDescription: "Non-opening windows to maximize light and views.",
    description: "Fixed windows (picture windows) do not open but offer unobstructed views and allow maximum natural light into a room. They provide the highest levels of energy efficiency and sound insulation since there are no opening gaps.",
    features: [
      "Maximum natural light",
      "Highest energy efficiency ratings",
      "Unobstructed views",
      "Can be combined with other window styles",
      "Zero maintenance required"
    ],
    specifications: {
      "Profile System": "Core PSM Fixed Frame",
      "Max Size": "Subject to wind load and glass thickness",
      "Glass Options": "Toughened, Laminated, DGU"
    },
    image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },

  // U-PVC Doors
  {
    slug: "sliding-fold-door",
    name: "U-PVC Sliding & Fold Door",
    categorySlug: "upvc-doors",
    categoryName: "U-PVC Doors",
    shortDescription: "Bi-fold doors that fold away to seamlessly connect indoors and outdoors.",
    description: "Sliding & Fold Doors (Bi-fold doors) consist of multiple panels that fold back against the wall like an accordion. They can create a clear opening up to 90% of the span, perfectly blending your indoor and outdoor living spaces.",
    features: [
      "Creates massive clear openings",
      "Smooth bottom-running roller system",
      "Multiple configuration options (up to 7 panels)",
      "High security locking on main door",
      "Weather-sealed against drafts and rain"
    ],
    specifications: {
      "Profile": "Heavy-duty Core PSM Door System",
      "Max Panel Width": "900mm",
      "Max Height": "2400mm",
      "Hardware": "Heavy-duty folding hardware"
    },
    image: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "double-door",
    name: "U-PVC Double Door",
    categorySlug: "upvc-doors",
    categoryName: "U-PVC Doors",
    shortDescription: "Classic French-style double doors for an elegant entrance.",
    description: "UPVC Double Doors (French Doors) offer a classic aesthetic with modern performance. They open fully from the center without a central mullion blocking the view, providing excellent access and ventilation.",
    features: [
      "Classic elegant design",
      "Opens fully without center post",
      "Multi-point locking on both master and slave doors",
      "Inward or outward opening options",
      "Reinforced for structural stability"
    ],
    specifications: {
      "Profile": "Core PSM Casement Door",
      "Reinforcement": "Thick GI steel reinforcement",
      "Hinges": "Heavy duty 3D adjustable hinges"
    },
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "villa-door",
    name: "U-PVC Villa Door",
    categorySlug: "upvc-doors",
    categoryName: "U-PVC Doors",
    shortDescription: "Premium main entrance doors with enhanced security features.",
    description: "The UPVC Villa Door is designed as a secure, premium main entrance door. It incorporates a heavy-duty frame, multi-point locks, and can be fitted with decorative panels or reinforced glass.",
    features: [
      "Heavy-duty construction for main entrances",
      "High-security multi-point locking mechanism",
      "Compatible with smart locks",
      "Excellent thermal and acoustic insulation",
      "Customizable with decorative door panels"
    ],
    specifications: {
      "Profile": "Core PSM Heavy Door System",
      "Threshold": "Aluminium low threshold available",
      "Locking": "5-point espag lock with cylinder"
    },
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },

  // Aluminium
  {
    slug: "domal-windows",
    name: "Aluminum Domal Window",
    categorySlug: "aluminium",
    categoryName: "Aluminium Systems",
    shortDescription: "Sleek and robust aluminium sliding windows for modern architecture.",
    description: "Domal aluminium windows offer a sleek, minimal profile with exceptional strength. Ideal for large spans, they provide a premium finish with powder coating or anodizing options that last for decades.",
    features: [
      "Slim sightlines for maximum glass area",
      "High structural strength for large openings",
      "Available in 2-track and 3-track systems",
      "Premium powder-coated or anodized finishes",
      "Heavy-duty bearing rollers for smooth operation"
    ],
    specifications: {
      "Material": "Extruded Aluminium Alloy",
      "Finish": "Powder Coated / Anodized / Wood Finish",
      "Track Options": "2-Track, 3-Track with mesh"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "telescopic-sliding-door",
    name: "Telescopic Sliding Door",
    categorySlug: "aluminium",
    categoryName: "Aluminium Systems",
    shortDescription: "Space-saving sliding doors that stack neatly to one side.",
    description: "Telescopic sliding doors are perfect for maximizing opening width in limited spaces. Multiple panels slide on synchronized tracks to stack compactly behind one another or against a wall.",
    features: [
      "Maximizes clear opening width",
      "Synchronized sliding mechanism",
      "Sleek aluminium profiles",
      "Floor track or top-hung options",
      "Ideal for balconies and large room dividers"
    ],
    specifications: {
      "System": "Synchronized Telescopic",
      "Configuration": "1+2, 1+3, or 2-way telescopic",
      "Glass": "Toughened safety glass"
    },
    image: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "glass-railing",
    name: "Aluminum Glass Railing",
    categorySlug: "aluminium",
    categoryName: "Aluminium Systems",
    shortDescription: "Modern, frameless or semi-frameless glass balustrades.",
    description: "Enhance your balconies and staircases with our premium aluminium and glass railing systems. They offer safety without obstructing your view, providing a sleek, contemporary look to any property.",
    features: [
      "Unobstructed views",
      "Toughened or laminated safety glass",
      "Corrosion-resistant aluminium base profiles",
      "Frameless or semi-frameless options",
      "Easy to clean and maintain"
    ],
    specifications: {
      "Base Profile": "Heavy-duty Aluminium U-channel",
      "Glass Thickness": "12mm to 19mm Toughened",
      "Handrail": "Optional SS or Aluminium top rail"
    },
    image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "kitchen",
    name: "Aluminium Modern Kitchen",
    categorySlug: "aluminium",
    categoryName: "Aluminium Systems",
    shortDescription: "Durable, termite-proof modular kitchen solutions.",
    description: "Replace traditional wooden cabinets with our sleek aluminium modular kitchens. 100% termite-proof, water-proof, and fire-resistant, they offer unmatched durability with a modern aesthetic.",
    features: [
      "100% Termite and borer proof",
      "Waterproof and fire-resistant",
      "Available in various colors and wood finishes",
      "Easy to clean and highly hygienic",
      "Customizable layouts"
    ],
    specifications: {
      "Carcass": "Aluminium tubular profiles",
      "Shutters": "Aluminium frame with ACP/Glass/Board insert",
      "Hardware": "Soft-close premium hinges and channels"
    },
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },

  // Glass & Partitions
  {
    slug: "office-partition",
    name: "Glass Office Partition",
    categorySlug: "glass-partitions",
    categoryName: "Glass & Partitions",
    shortDescription: "Sleek glass partitions for modern, open-plan offices.",
    description: "Create distinct workspaces without losing natural light or the open-plan feel. Our glass office partitions come in frameless or slim-frame designs, with options for soundproofing and smart glass integration.",
    features: [
      "Maximizes natural light distribution",
      "Acoustic options for privacy",
      "Slim aluminium framing or frameless design",
      "Can incorporate sliding or swing glass doors",
      "Quick and clean installation"
    ],
    specifications: {
      "System": "Slimline Aluminium or Frameless",
      "Glass Options": "10mm/12mm Toughened, Double Glazed",
      "Doors": "Floor spring or patch fitting"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "shower-partition",
    name: "Shower Partition",
    categorySlug: "glass-partitions",
    categoryName: "Glass & Partitions",
    shortDescription: "Elegant glass enclosures for modern bathrooms.",
    description: "Keep your bathroom dry and stylish with our custom glass shower partitions. Available in sliding, hinged, or fixed panel configurations with premium stainless steel hardware.",
    features: [
      "Keeps the rest of the bathroom dry",
      "Toughened safety glass for security",
      "Premium rust-free SS 304 hardware",
      "Easy-clean glass coating available",
      "Custom fitted to any bathroom layout"
    ],
    specifications: {
      "Glass": "8mm or 10mm Toughened Safety Glass",
      "Hardware": "SS 304 / Brass Chrome Plated",
      "Configuration": "Wall-to-wall, Corner, Cubicle"
    },
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "switchable-film",
    name: "Switchable Smart Glass",
    categorySlug: "glass-partitions",
    categoryName: "Glass & Partitions",
    shortDescription: "ON/OFF privacy glass controlled with a switch.",
    description: "Switchable Film (Smart Glass) changes from frosted (opaque) to clear with the flick of a switch. Perfect for conference rooms, bathrooms, or anywhere you need instant privacy without blinds.",
    features: [
      "Instant privacy at the touch of a button",
      "Blocks UV rays",
      "Modern alternative to blinds or curtains",
      "Can double as a projection screen",
      "Low power consumption"
    ],
    specifications: {
      "Operation": "PDLC Technology (Polymer Dispersed Liquid Crystal)",
      "Control": "Wall switch, Remote, or Smart Home integration",
      "State": "Opaque when OFF, Clear when ON"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },

  // Specialty
  {
    slug: "skylight-system",
    name: "Automatic Skylight System",
    categorySlug: "specialty",
    categoryName: "Specialty & Premium",
    shortDescription: "Motorized roof windows for ventilation and natural light.",
    description: "Bring the sky inside with our automatic skylight systems. Featuring motorized opening mechanisms, rain sensors, and remote control operation, they are the ultimate luxury addition to any space.",
    features: [
      "Motorized opening and closing",
      "Integrated rain sensors (auto-close)",
      "Provides abundant natural top-light",
      "Ventilates hot air from the ceiling",
      "Toughened and laminated safety glass"
    ],
    specifications: {
      "Frame": "Thermally broken aluminium",
      "Operation": "Electric actuator with remote",
      "Sensors": "Rain and wind sensors compatible"
    },
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  },
  {
    slug: "acp-elevation",
    name: "Front Elevation ACP",
    categorySlug: "specialty",
    categoryName: "Specialty & Premium",
    shortDescription: "Modern building facades using Aluminium Composite Panels.",
    description: "Transform the exterior of your building with our ACP (Aluminium Composite Panel) cladding solutions. Available in hundreds of colors and textures, ACP provides a sleek, modern, and weather-resistant facade.",
    features: [
      "Modernizes building exteriors instantly",
      "Highly weather and UV resistant",
      "Lightweight yet rigid",
      "Excellent flatness and smooth surface",
      "Fire-rated options available"
    ],
    specifications: {
      "Material": "Aluminium Composite Panel (3mm/4mm)",
      "Coating": "PVDF Coating for exterior durability",
      "Framing": "Aluminium tubular sub-frame"
    },
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    gallery: [],
    faqs: []
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return productsData.filter((p) => p.categorySlug === categorySlug);
}

export function getAllCategories() {
  const categories = new Set(productsData.map((p) => JSON.stringify({ name: p.categoryName, slug: p.categorySlug })));
  return Array.from(categories).map((c) => JSON.parse(c) as { name: string; slug: string });
}
