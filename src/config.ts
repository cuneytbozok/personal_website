export const siteConfig = {
  name: 'Cüneyt Bozok',
  tagline: 'ServiceNow Solution Architect | Lead Engineer | ITSM, CSM/SOM, CMDB/CSDM, Integrations, AI Enablement | CSA · CIS-ITSM · CAD',
  // SEO
  siteUrl: 'https://cuneytbozok.com',
  seoTitle: 'Cüneyt Bozok — ServiceNow Solution Architect',
  seoDescription:
    'ServiceNow Solution Architect — 8+ years across ITSM, CSM, ITOM, CMDB/CSDM, Virtual Agent and API integrations, from discovery to rollout and AI enablement.',
  email: 'cuneyt@cuneytbozok.com',
  jobTitle: 'ServiceNow Solution Architect',
  worksFor: 'EPAM Systems',
  location: { city: 'Istanbul', country: 'Türkiye', countryCode: 'TR' },
  knowsLanguage: ['en', 'tr'],
  intro: 'ServiceNow Solution Architect & Lead Engineer with 8+ years delivering ITSM/CSM, CMDB/CSDM alignment, Virtual Agent experiences, and API integrations—strong in discovery, target-state architecture, and fit-to-standard decisions.',
  currentFocus: 'AI-powered automation, Virtual Agent design, Now Assist, Agentic AI, and platform architecture—integrating ServiceNow with SAP, UiPath, Microsoft Teams, and third-party platforms.',

  navLinks: [
    { name: 'About', url: '/#about', number: '01' },
    { name: 'Experience', url: '/#experience', number: '02' },
    { name: 'Toolbox', url: '/#toolbox', number: '03' },
    { name: 'Certifications', url: '/#certifications', number: '04' },
    { name: 'Contact', url: '/#contact', number: '05' },
  ],

  socialMedia: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cuneytbozok/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/cuneytbozok', icon: 'github' },
    { name: 'Instagram', url: 'https://www.instagram.com/cuneytbozokk', icon: 'instagram' },
  ],
};

export type SiteConfig = typeof siteConfig;
