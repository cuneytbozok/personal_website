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
    progression: 'Senior Developer → Lead Developer',
    summary:
      'Discovery, maturity assessments, solution architecture, and AI enablement for global enterprises across Telecom, Technology & Pharma, backed by hands-on integration delivery.',
    open: true,
    roles: [
      {
        title: 'Lead ServiceNow Developer',
        period: 'Sep 2024 – Present',
        industry: 'Telecom · Technology & Networking · Pharma',
        promo: false,
        highlights: [
          'Led discovery and future-state design across ITSM, Employee Experience, and AI; assessed CMDB/CSDM and ITSM maturity and produced a phased roadmap with executive presentation.',
          'Supported pre-sales with demos and POCs covering Now Assist, Agentic AI, App Engine/Creator Studio, Employee Center Pro, and DevOps Change Velocity.',
          'Created target-state architecture and implementation guidelines for a headless B2B telco marketplace on ServiceNow (CSM, SOM, TNI, telco orchestration), mapping TM Forum Open APIs to ServiceNow data models and REST interfaces.',
          'Defined API-driven channel-to-platform integration patterns and lifecycle/state flows across lead-to-order-to-fulfillment, documented as HLDs, sequence and state diagrams, ADRs, and API contracts.',
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
          'Designed a custom HR service portal with bespoke widgets and Angular-based header menu components.',
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

export interface ToolGroup {
  title: string;
  /* Desktop column count, so each group fills complete rows. */
  cols: 4;
  tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
  {
    title: 'Consulting & Advisory',
    cols: 4,
    tools: [
      { name: 'Discovery & Stakeholder Workshops', icon: 'people' },
      { name: 'ITSM & CMDB/CSDM Maturity Assessments', icon: 'search' },
      { name: 'Business Process Improvement', icon: 'process' },
      { name: 'Target-State Architecture', icon: 'target' },
      { name: 'Phased Transformation Roadmaps', icon: 'roadmap' },
      { name: 'Fit-to-Standard Evaluation', icon: 'check' },
      { name: 'AI Readiness & Use-Case Evaluation', icon: 'bulb' },
      { name: 'Pre-Sales Demos & Proofs of Concept', icon: 'present' },
    ],
  },
  {
    title: 'Architecture & Delivery',
    cols: 4,
    tools: [
      { name: 'ServiceNow ITSM / CSM / ITOM', icon: 'layers' },
      { name: 'CMDB / CSDM Data Foundations', icon: 'database' },
      { name: 'REST / SOAP Integrations', icon: 'api' },
      { name: 'Flow Designer & IntegrationHub', icon: 'flow' },
      { name: 'Virtual Agent & Messaging', icon: 'bot' },
      { name: 'UI Builder & Custom Applications', icon: 'app' },
      { name: 'Now Assist & Agentic AI Enablement', icon: 'spark' },
      { name: 'DevOps Change Velocity', icon: 'devops' },
    ],
  },
];

export const certMain: string[] = [
  'ITSM Professional – Suite Certification',
  'Now Assist for ITSM Pro Plus – Suite Certification',
  'Certified Application Developer',
  'Certified Implementation Specialist – ITSM',
  'CIS – Data Foundations (CMDB & CSDM)',
  'Certified System Administrator',
  'Pre-Sales Core',
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
  people:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M18 14.8c1.8.7 3 2.4 3 5.2"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>',
  roadmap:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><path d="M7 18h6a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3h-2a3 3 0 0 1-3-3v0a3 3 0 0 1 3-3h6"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M15 9.5h1.5M15 15.5h1.5"/></svg>',
  process:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5"/><path d="M20 4v4.5h-4.5"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5"/><path d="M4 20v-4.5h4.5"/></svg>',
  bulb:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z"/></svg>',
  present:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 4h18M5 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4"/><path d="M12 15v3M8 21l4-3 4 3"/><path d="m10 8 4 2.5-4 2.5z"/></svg>',
  app:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></svg>',
  devops:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>',
} as const;
