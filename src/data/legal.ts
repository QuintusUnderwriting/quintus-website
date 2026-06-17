export type LegalLink = {
  label: string;
  href: string;
};

export type LegalGroup = {
  title: string;
  items: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  groups?: LegalGroup[];
  links?: LegalLink[];
  followOn?: string[];
};

export const legalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "FCA Notice", href: "/fca-notice" },
];

export const privacyPolicyMeta = {
  title: "Privacy Policy",
  documentTitle: "Quintus Partners Ltd - Privacy Policy v1.0",
  preparedBy: "Thomas Cartwright",
  date: "March 2026",
};

export const privacyPolicySections: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "Quintus Partners Ltd (\"Quintus\", \"we\", \"us\", \"our\") is committed to protecting and respecting your privacy.",
      "This Privacy Policy explains how we collect, use, store and protect personal data in accordance with UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and applicable FCA regulatory requirements.",
      "As part of our role as a Managing General Agent (MGA), we process personal data in connection with the design, underwriting, administration and oversight of insurance products.",
    ],
  },
  {
    title: "Company Details",
    paragraphs: [
      "Company Name: Quintus Partners Ltd. Company Number: 17107079. Registered Address: 15 College Street, Irthlingborough, Wellingborough, England, NN9 5TU.",
      "For the purposes of data protection law, Quintus is typically a data controller when determining how personal data is processed.",
    ],
    links: [{ label: "Website", href: "https://quintusunderwriting.com/" }],
  },
  {
    title: "Scope of Privacy Policy",
    paragraphs: ["This Privacy Policy applies to:"],
    list: [
      "Customers and potential customers",
      "Insurance brokers and intermediaries",
      "Website users",
      "Business partners and suppliers",
      "Third parties involved in insurance transactions",
    ],
    followOn: [
      "This includes personal data processed across underwriting activities, product governance and distribution, claims oversight, and compliance and regulatory obligations.",
    ],
  },
  {
    title: "The Data We Collect",
    paragraphs: [
      "We may collect and process the following categories of personal data:",
    ],
    groups: [
      {
        title: "Identity Data",
        items: ["Name", "Date of birth", "Contact details"],
      },
      {
        title: "Contact Data",
        items: ["Address", "Email address", "Telephone number"],
      },
      {
        title: "Risk & Insurance Data",
        items: [
          "Property details",
          "Claims history",
          "Insurance requirements",
          "Risk characteristics",
        ],
      },
      {
        title: "Financial Data",
        items: [
          "Payment information where applicable",
          "Credit-related information",
        ],
      },
      {
        title: "Technical Data (Website)",
        items: ["IP address", "Browser type", "Usage data"],
      },
      {
        title: "Special Category Data",
        items: [
          "Health-related information where required, for example in claims",
          "Other sensitive data relevant to insurance",
        ],
      },
    ],
  },
  {
    title: "How We Collect Data",
    paragraphs: ["We collect personal data from:"],
    list: [
      "Insurance brokers and intermediaries",
      "Customers directly",
      "Insurer partners",
      "Claims administrators (TPAs)",
      "Third-party data providers, including risk enrichment tools",
      "Website interactions",
    ],
  },
  {
    title: "How We Use Personal Data",
    paragraphs: ["We use personal data to:"],
    groups: [
      {
        title: "Underwrite and administer insurance",
        items: [
          "Assess risk and provide quotations",
          "Issue and manage policies",
        ],
      },
      {
        title: "Support claims handling",
        items: ["Investigate and oversee claims", "Monitor claims outcomes"],
      },
      {
        title: "Meet regulatory obligations",
        items: [
          "FCA compliance, including Consumer Duty and PROD",
          "Financial crime checks, including AML and sanctions",
        ],
      },
      {
        title: "Manage broker relationships",
        items: ["Onboarding and due diligence", "Distribution oversight"],
      },
      {
        title: "Improve products and services",
        items: [
          "Product governance and fair value assessments",
          "Performance monitoring",
        ],
      },
    ],
    followOn: [
      "This aligns with Quintus' obligation to deliver fair outcomes and maintain appropriate oversight across the product lifecycle.",
    ],
  },
  {
    title: "Legal Basis for Processing",
    paragraphs: [
      "We process personal data under the following lawful bases:",
    ],
    list: [
      "Contractual necessity - to provide insurance services",
      "Legal obligation - regulatory and compliance requirements",
      "Legitimate interests - underwriting, risk management and business operations",
      "Consent - where required, for example marketing or sensitive data in certain cases",
    ],
  },
  {
    title: "Sharing of Personal Data",
    paragraphs: ["We may share personal data with:"],
    groups: [
      {
        title: "Insurer Partners",
        items: ["To provide underwriting capacity and claims settlement"],
      },
      {
        title: "Brokers and Intermediaries",
        items: ["For placement and servicing of insurance"],
      },
      {
        title: "Claims Administrators (TPAs)",
        items: ["For claims handling and investigation"],
      },
      {
        title: "Service Providers",
        items: [
          "IT systems, including policy platforms and CRM",
          "Data enrichment providers",
          "Compliance and audit partners",
        ],
      },
      {
        title: "Regulators and Authorities",
        items: ["FCA, ICO or other authorities where required"],
      },
    ],
    followOn: [
      "We ensure all third parties maintain appropriate data protection standards.",
    ],
  },
  {
    title: "International Transfers",
    paragraphs: [
      "Where personal data is transferred outside the UK:",
    ],
    list: [
      "Appropriate safeguards will be implemented",
      "Transfers will comply with UK GDPR requirements",
      "This may include Standard Contractual Clauses (SCCs)",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "Personal data will only be retained for as long as necessary to fulfil the purposes outlined in this policy and meet legal and regulatory requirements.",
      "Retention periods will typically reflect the policy lifecycle, claims handling timelines, and FCA and insurer reporting obligations.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "Quintus implements appropriate technical and organisational measures to protect personal data, including:",
    ],
    list: [
      "Access controls and permissions",
      "Secure systems and encryption",
      "Audit trails and monitoring",
      "Third-party security oversight",
    ],
    followOn: [
      "This aligns with our broader governance and compliance framework.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Under UK GDPR, individuals have the right to:",
    ],
    list: [
      "Access their personal data",
      "Request correction of inaccurate data",
      "Request erasure where applicable",
      "Restrict or object to processing",
      "Data portability",
      "Withdraw consent where applicable",
    ],
    followOn: ["Requests can be made using the contact details below."],
  },
  {
    title: "Cookies & Website Use",
    paragraphs: [
      "Our website uses strictly necessary cookies to keep the site working and to remember your cookie choices.",
      "Optional analytics or marketing cookies are only used if you actively allow them through the cookie notice.",
      "You can review the Cookie Policy for more detail and use the cookie settings button to change your preferences at any time.",
    ],
    links: [{ label: "Read the Cookie Policy", href: "/cookie-policy" }],
  },
  {
    title: "Complaints",
    paragraphs: [
      "If you have concerns about how your data is handled, you can contact us.",
      "You also have the right to lodge a complaint with the Information Commissioner's Office (ICO).",
      "This aligns with Quintus' commitment to fair and transparent customer outcomes.",
    ],
    links: [{ label: "Information Commissioner's Office", href: "https://www.ico.org.uk" }],
  },
  {
    title: "Contact Details",
    paragraphs: [
      "For any data protection queries, please contact Quintus Partners Ltd at 15 College Street, Irthlingborough, Wellingborough, NN9 5TU.",
    ],
    links: [{ label: "info@quintusunderwriting.com", href: "mailto:info@quintusunderwriting.com" }],
  },
  {
    title: "Updates to this Policy",
    paragraphs: [
      "This Privacy Policy will be reviewed periodically and updated where necessary to reflect regulatory changes, business developments, and operational changes.",
    ],
  },
];

export const cookiePolicyMeta = {
  title: "Cookie Policy",
  documentTitle: "Quintus Partners Ltd - Cookie Policy v1.0",
  preparedBy: "Thomas Cartwright",
  date: "June 2026",
};

export const cookiePolicySections: LegalSection[] = [
  {
    title: "Overview",
    paragraphs: [
      "Quintus Underwriting uses strictly necessary cookies to keep the website secure, functional, and able to remember your cookie preferences.",
      "Optional analytics and marketing cookies are not set unless you make a positive choice through the cookie notice.",
      "If we introduce new optional cookies in future, we will update this notice before they are used.",
    ],
  },
  {
    title: "What Cookies Are",
    paragraphs: [
      "Cookies are small text files placed on your device when you visit a website. They help websites remember settings, keep users signed in, and measure usage where appropriate.",
      "Some cookies are strictly necessary for a website to function. Others are optional and should only be used with consent where required by law.",
    ],
  },
  {
    title: "Cookie Categories",
    paragraphs: ["The categories we recognise are:"],
    groups: [
      {
        title: "Strictly Necessary Cookies",
        items: [
          "Required for navigation, security, and basic site functionality",
          "Remember the choice you make in the cookie notice",
          "Do not require consent under the ICO exemption for essential functionality",
        ],
      },
      {
        title: "Analytics Cookies",
        items: [
          "Used only if you choose to allow them",
          "Help us understand how the site is used so we can improve content and performance",
          "Are not loaded before consent",
        ],
      },
      {
        title: "Marketing Cookies",
        items: [
          "Used only if you choose to allow them",
          "May support campaign measurement and future broker journey improvements",
          "Are not loaded before consent",
        ],
      },
    ],
  },
  {
    title: "How Consent Works",
    paragraphs: [
      "When you first visit the website, you will see a clear notice with options to accept all optional cookies, reject non-essential cookies, or manage your preferences.",
      "We store your choice in a first-party preference cookie so the notice does not keep reappearing unless you change your settings.",
      "You can withdraw or change consent at any time using the cookie settings button in the footer or by reopening the notice.",
    ],
    links: [{ label: "Privacy Policy", href: "/privacy-policy" }],
  },
  {
    title: "Managing Your Preferences",
    paragraphs: [
      "If you want to change your mind, use the cookie settings button on the website footer or clear cookies in your browser settings.",
      "You can also disable optional cookies in the cookie notice and save the updated choice.",
      "If you disable optional cookies, the site will continue to function with essential cookies only.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Cookie Policy if our cookie usage changes, if we introduce new tools, or if legal requirements change.",
      "Any material change will be reflected in the notice before new optional cookies are set.",
    ],
  },
];
