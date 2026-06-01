/* Portfolio content — experience, toolbox, certifications.
   Extracted from the original site and the redesign data set. */

export interface Role {
  title: string;
  period: string;
  industry: string;
  promo: boolean;
  highlights: string[];
}

export interface ExperienceEntry {
  company: string;
  period: string;
  progression: string;
  summary: string;
  open: boolean;
  roles: Role[];
}

export interface Tool {
  name: string;
  icon: keyof typeof toolIcons;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'EPAM Systems',
    period: '2022 – Present',
    progression: 'Senior Developer → Lead Developer → Solution Architect',
    summary:
      'Leading ServiceNow architecture, integrations, and AI enablement initiatives for global enterprises across Telecom, Technology & Pharma.',
    open: true,
    roles: [
      {
        title: 'Solution Architect / Lead ServiceNow Developer',
        period: 'Sep 2024 – Present',
        industry: 'Telecom · Technology & Networking · Pharma',
        promo: false,
        highlights: [
          'Created target-state architecture and implementation guidelines for a headless B2B telco marketplace on ServiceNow (CSM, SOM, TNI, telco orchestration), mapping TM Forum Open APIs to ServiceNow data models and REST interfaces.',
          'Defined API-driven channel-to-platform integration patterns, responsibility boundaries, and lifecycle/state flows across lead-to-order-to-fulfillment.',
          'Produced delivery-ready architecture artifacts — HLDs, sequence diagrams, domain model/state diagrams, ADRs, and API contracts — to align teams and vendors.',
          'Led discovery and future-state design across ITSM, Employee Experience, and AI; assessed CMDB/CSDM and ITSM maturity and produced a phased roadmap with executive presentation.',
          'Delivered demos and POCs covering Now Assist, Agentic AI, App Engine/Creator Studio, Employee Center Pro, and DevOps Change Velocity.',
        ],
      },
      {
        title: 'Senior ServiceNow Developer',
        period: 'Sep 2022 – Sep 2024',
        industry: 'Wellness & Meditation · Enterprise Software',
        promo: true,
        highlights: [
          'Integrated third-party tools via REST and delivered workforce optimization solutions including shift planning and recurring-event management.',
          'Customized workspaces with UI Builder and delivered CSM/Universal Request enhancements using Script Includes, Business Rules, and Flow Designer.',
          'Configured Virtual Agent Bot to integrate with Microsoft Teams using VA API and REST methods.',
        ],
      },
    ],
  },
  {
    company: 'Softtech',
    period: '2018 – 2022',
    progression: 'Consultant → Senior Consultant → Architect',
    summary:
      'Owned enterprise ServiceNow instances; delivered multi-system integrations, Virtual Agent experiences, and custom service portals.',
    open: false,
    roles: [
      {
        title: 'ServiceNow Architect',
        period: 'Apr 2022 – Sep 2022',
        industry: 'E-Commerce · Manufacturing',
        promo: true,
        highlights: [
          'Owned development and maintenance of enterprise ServiceNow instances; delivered multi-system integrations (SAP, third-party ITSM tools) and event management integrations (Netbrain/Nagios/SCOM).',
          'Activated Slack Integration and Virtual Agent plugins; designed and delivered a custom Virtual Agent tailored to client-specific usage scenarios.',
          'Designed robust ITSM data model templates with assignment rules, business services, and user criteria.',
        ],
      },
      {
        title: 'Senior ServiceNow Consultant',
        period: 'Nov 2020 – Apr 2022',
        industry: 'Manufacturing · Food Production · ITSM Platforms',
        promo: true,
        highlights: [
          'Deployed MID Servers; integrated Azure SSO/LDAP; implemented custom inbound actions for event sources without APIs.',
          'Designed custom HR Service Delivery Portal with bespoke widgets and Angular-based header menu components.',
          'Delivered portal/workflow implementations for ITSM and HR use cases across multiple clients.',
        ],
      },
      {
        title: 'ServiceNow Consultant',
        period: 'Nov 2018 – Nov 2020',
        industry: 'B2B E-Commerce · Enterprise',
        promo: false,
        highlights: [
          'Created a public ServiceNow portal with company registration, OOB approval workflows, and integrated online payment system.',
          'Built asset and model pipelines using Asset Management; designed portal as an e-commerce experience.',
          'Implemented SEO for ServiceNow and custom URL configuration for the instance.',
        ],
      },
    ],
  },
  {
    company: 'Deloitte Turkey',
    period: '2017 – 2018',
    progression: 'Specialist → Consultant',
    summary:
      'Improved CMDB health and delivered custom ITSM workflows for banking, food, and consumer-goods clients.',
    open: false,
    roles: [
      {
        title: 'ServiceNow Consultant',
        period: 'Jun 2018 – Nov 2018',
        industry: 'Banking & Financial Services',
        promo: true,
        highlights: [
          'Improved CMDB health using Discovery Module and CMDB Health Jobs; created a CMDB Maintenance lifecycle for duplicate, orphan, and stale CIs.',
          'Developed custom ITSM workflows and a bespoke Business Impact Analysis form and widget.',
        ],
      },
      {
        title: 'ServiceNow Specialist',
        period: 'Nov 2017 – Jun 2018',
        industry: 'Food & Consumer Goods',
        promo: false,
        highlights: [
          'Implemented ITSM workflows (Request, Incident, Change) and designed ServiceNow portal according to customer branding guidelines.',
          'Configured ServiceNow Mobile Classic App and created custom reports, widgets, and portal pages.',
        ],
      },
    ],
  },
];

export const tools: Tool[] = [
  { name: 'ServiceNow ITSM / ITOM / CSM', icon: 'layers' },
  { name: 'CMDB / CSDM Alignment', icon: 'database' },
  { name: 'Virtual Agent & Messaging', icon: 'bot' },
  { name: 'API Integration (REST / SOAP)', icon: 'api' },
  { name: 'Flow Designer & IntegrationHub', icon: 'flow' },
  { name: 'Discovery & Assessment', icon: 'search' },
  { name: 'AI / GenAI · Now Assist', icon: 'spark' },
  { name: 'DevOps & Change Velocity', icon: 'devops' },
];

export const certMain: string[] = [
  'ITSM Professional – Suite Certification',
  'Now Assist for ITSM Pro Plus – Suite Certification',
  'Certified Application Developer',
  'Certified Implementation Specialist – ITSM',
  'CIS – Data Foundations (CMDB & CSDM)',
  'Certified System Administrator',
];

export const certMicro: string[] = [
  'Agentic AI Executive',
  'Now Assist Executive',
  'Flow Designer',
  'Service Portal',
  'IntegrationHub',
  'Performance Analytics',
  'Predictive Intelligence',
  'Virtual Agent',
];

/* Inline SVG icon set for the toolbox grid. */
export const toolIcons = {
  layers:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  database:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  bot:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4M9 13h.01M15 13h.01"/><path d="M2 13h2M20 13h2"/></svg>',
  api:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M12 13.5v2"/></svg>',
  flow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="2.5"/></svg>',
  devops:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>',
} as const;
