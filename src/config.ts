export const siteConfig = {
  name: 'Cüneyt Bozok',
  // Diacritic-free variant so search/AI engines resolve both spellings to the same entity.
  alternateName: 'Cuneyt Bozok',
  tagline: 'Technology Consulting & Solution Architecture | Lead ServiceNow Developer | ITSM, CSM/SOM, CMDB/CSDM, Integrations, AI Enablement | CSA · CIS-ITSM · CAD',
  // SEO
  siteUrl: 'https://cuneytbozok.com',
  seoTitle: 'Cüneyt Bozok — Technology Consulting & ServiceNow Solution Architecture',
  seoDescription:
    'Technology consulting and solution architecture grounded in ServiceNow delivery since 2017 — discovery, maturity assessments, roadmaps, integrations and AI enablement.',
  email: 'cuneyt@cuneytbozok.com',
  // Official title, as on LinkedIn. Architecture/consulting is described as scope, not as a title.
  jobTitle: 'Lead ServiceNow Developer',
  worksFor: 'EPAM Systems',
  location: { city: 'Istanbul', country: 'Türkiye', countryCode: 'TR' },
  knowsLanguage: ['en', 'tr'],
  intro: 'Lead ServiceNow Developer working across solution architecture and consulting since 2017, delivering ITSM/CSM, CMDB/CSDM alignment, Virtual Agent experiences, and API integrations—strong in discovery, target-state architecture, and fit-to-standard decisions.',
  currentFocus: 'AI-powered automation, Virtual Agent design, Now Assist, Agentic AI, and platform architecture—integrating ServiceNow with SAP, UiPath, Microsoft Teams, and third-party platforms.',

  navLinks: [
    { name: 'About', url: '/#about', number: '01' },
    { name: 'Experience', url: '/#experience', number: '02' },
    { name: 'Capabilities', url: '/#toolbox', number: '03' },
    { name: 'Certifications', url: '/#certifications', number: '04' },
    { name: 'FAQ', url: '/#faq', number: '05' },
    { name: 'Contact', url: '/#contact', number: '06' },
  ],

  socialMedia: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cuneytbozok/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/cuneytbozok', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/cuneytbozokk', icon: 'instagram' },
  ],
};

export type SiteConfig = typeof siteConfig;
