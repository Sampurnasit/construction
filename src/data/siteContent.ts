/**
 * BSA Enterprise - Central Site Configuration & Content
 * 
 * Edit this single file to update all company details, contact information,
 * statistics, services, gallery projects, and process steps.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: 'civil' | 'building' | 'materials' | 'municipal';
  categoryLabel: string;
  location: string;
  description: string;
  image: string;
  specs: string[];
  status: 'Completed' | 'In Progress' | 'Quality Assured';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  tag: string;
}

export const siteConfig = {
  // Brand & Business Details
  company: {
    name: "BSA Enterprise",
    legalName: "BSA Enterprise",
    tagline: "Building a Better Tomorrow",
    descriptor: "Govt Civil Contractor, General Order Supplier",
    founder: "Sayantan Das",
    founderRole: "Founder & Managing Director",
    gstNo: "19DQYPD2942H1ZC",
    panNo: "DQYPD2942H", // Derived from GSTIN for quick verification
    stateCode: "19 (West Bengal)",
    establishedYear: "2017",
    address: {
      street: "35/D Regent Colony",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700040",
      country: "India",
      landmark: "Near Regent Park Police Station area, Tollygunge / Regent Estate"
    },
    contact: {
      phone: "9330967405",
      phoneFormatted: "+91 93309 67405",
      phoneTel: "tel:+919330967405",
      email: "bsaenterprise17@gmail.com",
      emailMailto: "mailto:bsaenterprise17@gmail.com",
      whatsappNumber: "919330967405",
      whatsappLink: "https://wa.me/919330967405?text=Hello%20BSA%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20your%20Civil%20Contracting%20and%20Supply%20services.",
      workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
      sundayNote: "Sunday: Closed (Emergency Site Inquiries On-Call)"
    },
    geo: {
      latitude: 22.4925,
      longitude: 88.3585
    }
  },

  // Color Palette Tokens
  theme: {
    primaryGreen: "#0B5D2E",
    deepGreen: "#063D1E",
    lightGreen: "#0E7339",
    goldAccent: "#D4A017",
    goldGradient: "linear-gradient(135deg, #F2D675 0%, #C8961A 50%, #8C6A0E 100%)",
    warmCream: "#FFFDF0",
    charcoal: "#1F2933",
  },

  // Trust Strip Animated Statistics
  // [CLIENT NOTE]: Update these numerical milestones as your portfolio expands
  stats: [
    {
      value: 100,
      suffix: "%",
      label: "Government Compliance",
      subtext: "Strict adherence to PWD & CPWD norms"
    },
    {
      value: 75,
      suffix: "+",
      label: "Civil & Supply Contracts",
      subtext: "Successfully completed across WB"
    },
    {
      value: 100,
      suffix: "%",
      label: "Government Compliance",
      subtext: "Audited & 100% Tax Compliant"
    },
    {
      value: 99,
      suffix: ".4%",
      label: "On-Time Handover",
      subtext: "Stringent project milestones delivery"
    }
  ],

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" }
  ],

  // Core Services
  services: [
    {
      id: "civil-contracting",
      title: "Civil Contracting",
      tag: "Govt & Institutional Grade",
      icon: "HardHat",
      shortDesc: "Comprehensive civil infrastructure execution conforming strictly to municipal, state, and central engineering specifications.",
      fullDesc: "From reinforced concrete structures and arterial road construction to urban drainage overhauls and site grading, BSA Enterprise manages end-to-end civil works with high precision machinery and certified supervisory teams.",
      features: [
        "RCC Roadways & Bituminous Pavement Works",
        "Stormwater Drainage & Municipal Culverts",
        "Site Grading, Earthwork & Foundation Piling",
        "Public Infrastructure & Utility Upgrades"
      ]
    },
    {
      id: "general-order-supply",
      title: "General Order Supply",
      tag: "Industrial & Project Materials",
      icon: "PackageCheck",
      shortDesc: "End-to-end sourcing and prompt delivery of industrial hardware, certified building materials, and bulk project supplies.",
      fullDesc: "We provide government bodies, private developers, and industrial facilities with verified, batch-tested construction materials. Every consignment includes complete GST invoicing, mill test certificates, and strict logistical punctuality.",
      features: [
        "Certified TMT Rebars (Fe 500D / 550D)",
        "Grade 43 / 53 Portland Cement & RMC",
        "Industrial Hardware, Fasteners & Piping",
        "Safety Gear, PPE & Worksite Utilities"
      ]
    },
    {
      id: "building-construction",
      title: "Building Construction",
      tag: "Turnkey Structural Works",
      icon: "Building2",
      shortDesc: "Turnkey residential, commercial, and administrative building projects constructed with durability, safety, and modern design.",
      fullDesc: "Our turnkey structural capabilities cover structural design coordination, reinforced concrete frameworks, masonry, premium finishing, waterproofing, and electrical/sanitary conduits executed under qualified civil oversight.",
      features: [
        "Institutional & Commercial Complexes",
        "Residential Multi-Story Civil Structures",
        "Structural Renovation & Seismic Retrofitting",
        "Waterproofing, Plastering & Advanced Finishes"
      ]
    },
    {
      id: "trusted-partnership",
      title: "Trusted Partnership",
      tag: "Statutory & Long-Term Reliability",
      icon: "Handshake",
      shortDesc: "Long-term partnership built on total regulatory transparency, safety standards, and dependable tender contract fulfillment.",
      fullDesc: "BSA Enterprise stands as a preferred contractor because of unwavering ethical conduct, transparent billing schedules, robust site safety protocols, and prompt administrative compliance for government tenders.",
      features: [
        "Full Government Tender Compliance & EMD Filing",
        "Transparent Measurement & Progress Billing",
        "Zero-Compromise On-Site Safety Protocols",
        "Dedicated Contract Supervisor & Single Point of Contact"
      ]
    }
  ] as ServiceItem[],

  // Why Choose Us
  whyChooseUs: [
    {
      title: "Quality Workmanship",
      description: "Every pour of concrete, steel tie, and structural finish is inspected against rigorous Indian Standard (IS) codes.",
      icon: "Award"
    },
    {
      title: "Timely Delivery",
      description: "Critical path scheduling and mechanized deployment guarantee milestones are met without costly project delays.",
      icon: "Clock"
    },
    {
      title: "Transparent Pricing",
      description: "Detailed bills of quantities (BOQ), verified rate analysis, and zero hidden costs ensure complete fiscal clarity.",
      icon: "ReceiptIndianRupee"
    },
    {
      title: "Government Compliance",
      description: "Fully compliant with GST, West Bengal state contracting regulations, labour codes, and safety standards.",
      icon: "ShieldCheck"
    },
    {
      title: "Experienced Team",
      description: "Headed by founder Sayantan Das with skilled site engineers, supervisors, and vetted equipment operators.",
      icon: "Users"
    },
    {
      title: "Safety First",
      description: "Zero-compromise site safety measures including complete PPE enforcement, hazard mitigation, and insurance coverage.",
      icon: "FlameKindling"
    }
  ],

  // 5-Step Execution Process
  process: [
    {
      step: "01",
      title: "Initial Enquiry",
      desc: "Prompt consultation to review tender requirements, architectural drawings, or material procurement schedules."
    },
    {
      step: "02",
      title: "Site Assessment",
      desc: "On-site survey, topography assessment, soil condition check, and logistical feasibility analysis."
    },
    {
      step: "03",
      title: "Transparent Quotation",
      desc: "Itemized BOQ formulation, competitive rate breakdown, and clear milestone schedules with zero ambiguities."
    },
    {
      step: "04",
      title: "Precision Execution",
      desc: "Mechanized mobilization, qualified supervisor oversight, material quality testing, and stage-wise progress reporting."
    },
    {
      step: "05",
      title: "Quality Handover",
      desc: "Comprehensive punch-list clearance, joint measurement sign-off, statutory documentation, and handover."
    }
  ],

  // Projects / Portfolio Gallery
  projects: [
    {
      id: "p1",
      title: "Urban Arterial Concrete Road & Pavement",
      category: "civil",
      categoryLabel: "Civil Infrastructure",
      location: "Kolkata Metropolitan Area",
      description: "Heavy-duty reinforced cement concrete road paving with integrated precast storm culverts and safety kerbs.",
      image: "/projects/road-infrastructure.jpg",
      specs: ["M40 Grade Concrete", "Heavy Vehicle Load Bearing", "Integrated Storm Drain"],
      status: "Completed"
    },
    {
      id: "p2",
      title: "Multi-Story Commercial & Administrative Framework",
      category: "building",
      categoryLabel: "Building Construction",
      location: "South Kolkata, West Bengal",
      description: "Structural civil construction of institutional RCC framework with seismic engineering safeguards and safety netting.",
      image: "/projects/commercial-building.jpg",
      specs: ["G+7 RCC Framework", "High Safety Standard", "Quality Finished Castings"],
      status: "Completed"
    },
    {
      id: "p3",
      title: "Bulk TMT Steel & Cement Logistics Order",
      category: "materials",
      categoryLabel: "General Order Supply",
      location: "Central Project Depot, Kolkata",
      description: "Bulk supply of Fe 550D primary TMT rebars and Grade 53 cement with comprehensive mill quality test reports.",
      image: "/projects/materials-logistics.jpg",
      specs: ["Fe 550D TMT Rebars", "Grade 53 Portland Cement", "Same-Day Dispatch Fleet"],
      status: "Quality Assured"
    },
    {
      id: "p4",
      title: "Municipal Underground Drainage & Box Culverts",
      category: "municipal",
      categoryLabel: "Municipal Works",
      location: "Tollygunge / Jadavpur Zone, Kolkata",
      description: "Sub-surface reinforced hume pipe installation and cast-in-situ concrete box culverts for water-logging prevention.",
      image: "/projects/drainage-infrastructure.jpg",
      specs: ["1200mm Hume Pipes", "Monolithic Box Culverts", "Trench Shoring Safety"],
      status: "Completed"
    },
    {
      id: "p5",
      title: "Elevated Flyover & Pier Structural Support",
      category: "civil",
      categoryLabel: "Civil Infrastructure",
      location: "Major Transit Corridor, WB",
      description: "Structural erection support and specialized casting for heavy transit flyover bridge spans and retaining walls.",
      image: "/projects/flyover-project.jpg",
      specs: ["Pre-stressed Concrete", "Hydraulic Crane Assembly", "24/7 Monitored Work"],
      status: "Quality Assured"
    },
    {
      id: "p6",
      title: "BSA Enterprise Corporate Infrastructure Banner",
      category: "building",
      categoryLabel: "Govt Registration",
      location: "Regent Colony, Kolkata - 700040",
      description: "Registered identity and core service overview verifying government contractor certification and order supply credentials.",
      image: "/banner.jpg",
      specs: ["GSTIN Registered", "Govt Civil Contractor", "General Order Supplier"],
      status: "Completed"
    }
  ] as ProjectItem[],

  // Founder Information & Statement
  founder: {
    name: "Sayantan Das",
    title: "Founder & Proprietor",
    badge: "Govt Registered Civil Contractor",
    image: "/founder.png",
    statement: "At BSA Enterprise, we measure our success not merely by structures raised, but by the enduring trust placed in us by government agencies, institutions, and project partners. Our commitment to Kolkata and West Bengal is anchored in precision engineering, honest commerce, and unwavering statutory compliance. When we lay a foundation, we build for generations.",
    credentials: [
      "Certified Government Civil Contractor",
      "Specialist in Municipal & Highway Infrastructure",
      "General Order Supplier for High-Volume Materials",
      "Headquartered at Regent Colony, Kolkata"
    ]
  },

  // Frequently Asked Questions
  faqs: [
    {
      q: "What types of government contracts does BSA Enterprise undertake?",
      a: "We specialize in municipal civil works, RCC road and highway pavements, storm drainage systems, public utility buildings, earthworks, and general order supplies for government departments across Kolkata and West Bengal."
    },
    {
      q: "How can we verify BSA Enterprise's GST and registration credentials?",
      a: "You can view and verify our official government GSTIN directly in our Credentials section below or via the official GST portal (services.gst.gov.in)."
    },
    {
      q: "What materials do you supply under General Order Supply?",
      a: "We supply primary TMT rebars (Fe 500D / 550D), Grade 43/53 cement, aggregate aggregates, stone chips, river sand, industrial safety equipment (PPE), drainage pipes, structural steel, and turnkey site consumables."
    },
    {
      q: "Can you provide custom itemized quotations for upcoming tenders?",
      a: "Yes. Simply share your scope of work or BOQ via our online enquiry form, email us at bsaenterprise17@gmail.com, or reach founder Sayantan Das directly at 9330967405."
    }
  ]
};
