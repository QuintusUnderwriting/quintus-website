export type ProductSlug =
  | "property-owners"
  | "specialist-home-insurance"
  | "landowners-liability"
  | "bespoke-schemes";

export type Product = {
  slug: ProductSlug;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  outcome: string;
  suitableFor: string[];
  underwritingFocus: string[];
  brokerSupport: string[];
};

export const brokerRegistrationUrl = "https://forms.office.com/e/fZXhNgyP8q";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Bespoke Schemes", href: "/bespoke-schemes" },
];

export const productNav = [
  { label: "Property Owners", href: "/property-owners" },
  { label: "Specialist Home Insurance", href: "/specialist-home-insurance" },
  { label: "Landowners Liability", href: "/landowners-liability" },
  { label: "Bespoke Schemes", href: "/bespoke-schemes" },
];

export const brokerReasons = [
  {
    title: "Broker First",
    text: "Responsive service, clear communication, and underwriting expertise brokers can rely on.",
  },
  {
    title: "Expert Underwriting",
    text: "Judgement-led decisions shaped by risk insight, technical experience, and commercial context.",
  },
  {
    title: "Intelligent Technology",
    text: "A modern approach to process, data, and efficiency without losing personal underwriting care.",
  },
  {
    title: "Strong Relationships",
    text: "Built on trust, transparency, and long-term partnerships that create better outcomes.",
  },
  {
    title: "Financial Strength",
    text: "A disciplined operating model designed to support stable broker and policyholder confidence.",
  },
];

export const pillars = [
  {
    title: "Human Excellence",
    text: "Empowered underwriting talent sits at the centre of Quintus, combining technical judgement, commercial empathy and broker-facing energy to reach clear, confident outcomes.",
  },
  {
    title: "Intelligent Innovation & Technology",
    text: "Technology is applied with intent: removing friction, improving insight and speeding broker journeys while keeping human judgement in control of underwriting decisions.",
  },
  {
    title: "Transparent Data Insight",
    text: "We share meaningful performance data with brokers and capacity partners, turning trends, outcomes and portfolio insight into better decisions and sustainable books.",
  },
  {
    title: "Market-Leading Products & Solutions",
    text: "Products are built around customer need, robust wording, competitive pricing and disciplined controls, giving brokers a first-choice market they can trust.",
  },
  {
    title: "Relentless Improvement",
    text: "We actively seek challenge, broker feedback and insurer insight, then adapt with governance, discipline and pace so every MGA remains relevant and resilient.",
  },
];

export const products: Product[] = [
  {
    slug: "property-owners",
    title: "Property Owners",
    shortTitle: "Property Owners",
    summary:
      "Comprehensive insurance solutions for residential and commercial property owners.",
    intro:
      "A structured property owners proposition for brokers placing residential, commercial, and mixed-use risks that need careful underwriting attention.",
    outcome:
      "Designed to protect property, income, and long-term asset value with an underwriting approach that understands occupancy, construction, geography, and claims profile.",
    suitableFor: [
      "Residential portfolios and individual let properties",
      "Commercial and mixed-use property schedules",
      "Property owners requiring considered non-standard review",
    ],
    underwritingFocus: [
      "Construction, occupancy, security, and maintenance profile",
      "Loss history, risk management controls, and exposure mapping",
      "Portfolio shape, reinstatement values, and income protection needs",
    ],
    brokerSupport: [
      "Clear submission guidance and responsive underwriting dialogue",
      "Practical appetite conversations before full presentation",
      "Structured terms that help brokers explain the risk story",
    ],
  },
  {
    slug: "specialist-home-insurance",
    title: "Specialist Home Insurance",
    shortTitle: "Specialist Home",
    summary:
      "Tailored cover for high-value, unique, and distinctive homes requiring individual underwriting.",
    intro:
      "Specialist home insurance for private clients whose homes, contents, construction, or usage require more than a standard household approach.",
    outcome:
      "Built for brokers who need a considered market for complex household risks, from distinctive residences to higher-value homes and unusual property features.",
    suitableFor: [
      "High-value and distinctive homes",
      "Unique construction, listed, or heritage-style residences",
      "Clients requiring an individually reviewed home proposition",
    ],
    underwritingFocus: [
      "Property characteristics, occupancy, and protection measures",
      "Contents, fine art, valuables, and lifestyle exposures",
      "Claims experience, risk improvements, and client stewardship",
    ],
    brokerSupport: [
      "Direct underwriter access for nuanced household presentations",
      "Clear evidence requests and practical risk improvement notes",
      "A service-led process for time-sensitive private client needs",
    ],
  },
  {
    slug: "landowners-liability",
    title: "Landowners Liability",
    shortTitle: "Landowners Liability",
    summary:
      "Protection for landowners against liability exposures arising from rural and undeveloped land.",
    intro:
      "A focused liability proposition for brokers arranging protection for landowners, estates, rural holdings, and specialist land exposures.",
    outcome:
      "Designed to address the liability questions that can sit behind open land, access rights, farming links, events, environmental features, and rural usage.",
    suitableFor: [
      "Private estates, rural land, and undeveloped plots",
      "Land with public access, footpaths, tracks, or rights of way",
      "Owners seeking clear protection for third-party injury or damage exposures",
    ],
    underwritingFocus: [
      "Land use, access arrangements, boundaries, and visitor exposure",
      "Water, woodland, livestock, machinery, and tenant arrangements",
      "Risk controls, signage, inspection cadence, and claims history",
    ],
    brokerSupport: [
      "Straightforward information requirements for land schedules",
      "Underwriting guidance on unusual rural or leisure exposures",
      "Clear communication on terms, exclusions, and risk management actions",
    ],
  },
  {
    slug: "bespoke-schemes",
    title: "Bespoke Schemes",
    shortTitle: "Bespoke Schemes",
    summary:
      "Custom underwriting solutions for niche portfolios, affinity opportunities, and complex broker schemes.",
    intro:
      "A partnership-led route for brokers with niche portfolios, specialist distribution, or scheme opportunities that need structured underwriting design.",
    outcome:
      "Created for propositions where appetite, governance, data, delegated authority, and operational service must work together from the start.",
    suitableFor: [
      "Niche portfolios with a clear customer segment",
      "Affinity, delegated, or broker-led scheme opportunities",
      "Complex risks that benefit from a custom underwriting framework",
    ],
    underwritingFocus: [
      "Portfolio data, claims performance, and target risk selection",
      "Governance, authority controls, pricing logic, and performance reporting",
      "Operational model, broker journey, and customer service standards",
    ],
    brokerSupport: [
      "Collaborative proposition design and appetite development",
      "A practical route from opportunity review to launch planning",
      "Ongoing performance conversations once the scheme is live",
    ],
  },
];

export function getProduct(slug: ProductSlug) {
  return products.find((product) => product.slug === slug);
}
