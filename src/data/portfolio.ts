export const portfolio = {
  person: {
    name: "Anjelika Tan",
    title: "Product & Platform Generalist | Integrations, Workflows, AI Tools",
    intro:
      "Product generalist working across integrations, internal tooling, AI-assisted workflows, and platform systems in B2B SaaS.",
    heroLines: [
      "Product & Platform Generalist with a Computer Science background, building across integrations, workflows, internal tools, and AI-assisted product systems in a B2B SaaS environment.",
      "I work best in startup settings where the pace is fast, the problems are messy, and clear systems make the biggest difference."
    ],
    portrait: {
      src: "/me2.png",
      alt: "Portrait of Anjelika Tan"
    },
    email: "anjelikatan99@gmail.com",
    linkedin: "https://www.linkedin.com/in/anjelika-tan-219522148/",
    resumeHref: "/resume.pdf",
    glance: [
      {
        label: "Current role",
        value: "Product Manager at Returning AI Pte Ltd"
      },
      {
        label: "Focus",
        value: "Product, platform, and workflow systems"
      },
      {
        label: "Domain",
        value: "B2B SaaS | fintech-adjacent"
      }
    ]
  },
  whatIWorkOn: {
    description:
      "The kinds of product and operational problems I am most useful in.",
    intro:
      "I am strongest in work that sits between product definition, system logic, and day-to-day operations, especially when the goal is to make something clearer, more reusable, and easier to run.",
    areas: [
      {
        label: "Product systems",
        description:
          "I shape product logic across flows, rules, permissions, and edge cases, especially in systems that need to scale beyond one-off requests."
      },
      {
        label: "Integrations",
        description:
          "I work across APIs, webhooks, CRM/data systems, and platform connections to turn external requirements into usable product workflows."
      },
      {
        label: "Workflow design",
        description:
          "I think through how teams and users actually move through a process, then simplify or structure it so the system is easier to operate."
      },
      {
        label: "Automation",
        description:
          "I build and improve repeatable processes that reduce manual work, improve consistency, and make operations easier to manage."
      },
      {
        label: "Internal tooling",
        description:
          "I create tools that help teams work faster, resolve issues more easily, and avoid unnecessary dependency on engineering."
      },
      {
        label: "AI-assisted product work",
        description:
          "I use AI tools to improve specs, planning, prototyping, and workflow quality, especially where they help bridge communication gaps."
      },
      {
        label: "API and platform capability design",
        description:
          "I work backwards from real product and operational use cases to define workflow and integration APIs, including bulk-update capability design."
      },
      {
        label: "E-Commerce & redemption logic",
        description:
          "I have worked on store, transaction, eligibility, and redemption systems where business rules and real-time checks matter."
      },
      {
        label: "Customer and operational context",
        description:
          "My background includes client-facing and advisory work, which helps me stay grounded in real user and business needs."
      }
    ]
  },
  experience: {
    description:
      "A short career anchor for context. Full role scope and detail live in the resume.",
    roles: [
      {
        company: "Returning AI Pte Ltd",
        role: "Product Manager",
        period: "May 2024 to Present",
        summary:
          "Working across platform features, integrations, internal tools, and AI-assisted workflows in a B2B SaaS environment."
      },
      {
        company: "Great Eastern",
        role: "Financial Advisor",
        period: "Dec 2021 to Jan 2024",
        summary:
          "Built client-facing judgment, communication, and ownership in a regulated, trust-based environment."
      }
    ]
  },
  platforms: {
    title: "Platforms and ecosystems I’ve worked across",
    description:
      "A quick-glance view of the systems, channels, and platforms I have worked with across product, integrations, and operations.",
    groups: [
      {
        title: "CRM & data",
        items: ["HubSpot", "Salesforce", "Snowflake"]
      },
      {
        title: "Channels & social",
        items: ["Meta", "Instagram", "LinkedIn", "X", "YouTube"]
      },
      {
        title: "Commerce & trust",
        items: ["Stripe", "WooCommerce", "Trustpilot"]
      }
    ]
  },
  additionalWork: {
    title: "Additional work",
    description:
      "Broader work across product, integrations, and operations that supports the featured case studies above.",
    groups: [
      {
        title: "Integrations",
        items: [
          "HubSpot, Salesforce, and Snowflake integrations",
          "Social integrations across Meta, Instagram, LinkedIn, X, and YouTube",
          "Trustpilot integration",
          "Webhook workflow improvements"
        ]
      },
      {
        title: "Operations and infrastructure",
        items: [
          "Widget deployment methods for restricted client environments",
          "Translation workflow improvements for dynamic fields and token savings",
          "Bulk-update infrastructure for trade-data sync and rewards workflows",
          "Internal CS / transaction tooling"
        ]
      }
    ]
  },
  selectedWork: [
    {
      id: "ai-prd-workflow",
      label: "Workflow design",
      featured: false,
      detailLayout: "feature",
      title: "AI-assisted PRD workflow for UX-to-dev handoff",
      summary:
        "Built an internal AI-assisted PRD workflow grounded in codebase, schema, and design-system context, reducing PM bottlenecks and improving logic quality before engineering handoff.",
      tags: [
        "Cross-functional handoff",
        "Grounded AI workflow",
        "Logic-heavy features"
      ],
      railTags: [
        "Cross-functional handoff",
        "Grounded AI workflow",
        "Logic-heavy features"
      ],
      scope: "Internal workflow design",
      impactLabel: "Impact",
      impactLine: "Used on logic-heavy features; one implementation moved from a one-week estimate to three days.",
      railNoteLabel: "",
      railNote: "",
      bullets: [
        "Grounded in repo, schema, and design-system context",
        "Reduced PM bottlenecks in logic-heavy handoff",
        "Asked logic questions before drafting",
        "Improved engineering starting quality"
      ],
      detail:
        "Built an internal AI-assisted PRD workflow that improved cross-functional handoff by grounding requirements in real product context before engineering work began.",
      evolutionPhases: [],
      detailSections: [
        {
          heading: "Overview",
          items: [],
          layout: "default",
          body:
            "As product work scaled, handoff depended heavily on me translating between leadership, UX, and engineering. Once I also took on more client and operational responsibilities, that became a bottleneck. Direct UX-to-dev handoff looked faster, but business logic and edge cases were often lost, creating rework and too much dependency on PM review before implementation."
        },
        {
          heading: "What I built",
          items: [],
          layout: "default",
          body:
            "I helped build an internal AI-assisted PRD workflow for the UX team. It was grounded in our GitHub repo, feature-directory notes, AWS schema references, and design-system guidance, and it was designed to ask logic questions first before generating the PRD."
        },
        {
          heading: "AI workflow design",
          body: "",
          items: [
            "Prompt engineering and iteration",
            "Grounded context from repo, schema, and internal docs",
            "Retrieval-style setup across internal references",
            "Human review before PRD generation",
            "Structured markdown output for implementation"
          ],
          layout: "compact-bullets"
        },
        {
          heading: "Key decisions",
          body: "",
          items: [
            "Grounded the workflow in repo, schema, and design-system context instead of generic prompting",
            "Used markdown PRDs because they worked better downstream",
            "Added a preview layer so non-engineers could review output more easily"
          ],
          layout: "compact-bullets"
        },
        {
          heading: "Outcome",
          items: [],
          layout: "default",
          body:
            "The workflow is now used for logic-heavy features. It helped UX validate logic earlier without always waiting on PM availability, improved component reuse, and gave engineering a stronger starting point for AI-assisted implementation."
        },
        {
          heading: "Proof points",
          body: "",
          items: [
            "In a milestone-reset use case, it surfaced a flaw in start-date logic that delayed rewards while still evaluating all-time data, exposing a design issue early.",
            "I also used the same workflow to design, spec, code, and ship a Trustpilot integration to production."
          ],
          layout: "compact-bullets"
        }
      ]
    },
    {
      id: "store-redemption-eligibility",
      label: "Core platform system",
      featured: true,
      detailLayout: "feature",
      title: "E-commerce store",
      summary:
        "Evolved a simple voucher store into the platform’s most-used feature, supporting coin-based redemption, external commerce handoff, API-based eligibility checks, configurable permissions, and fulfilment-aware order logic.",
      tags: ["E-Commerce logic", "Permissions", "Operational systems"],
      railTags: ["Most-used feature", "Commerce logic", "Platform systems"],
      scope: "Coin-based reward redemption",
      impactLabel: "Proof",
      impactLine: "High daily redemption volume across clients",
      railNoteLabel: "What I shaped",
      railNote:
        "Permissions, redemption methods, statuses, refunds, and supporting workflows",
      bullets: [
        "Owned logic across products, permissions, redemption methods, and catalogue structure",
        "Designed real-time eligibility checks for fintech-related use cases",
        "Considered future fulfilment workflows, even though fulfilment was handled externally",
        "Built supporting transaction tooling for better operational management"
      ],
      detail:
        "What began as a simple voucher page became a configurable redemption system shaped around access, eligibility, order states, and operational handling.",
      evolutionPhases: [
        {
          phase: "01",
          title: "Voucher",
          detailTitle: "Voucher redemption",
          description:
            "The store started as a simple voucher redemption flow, mainly for prop trading firms, where users spent platform-earned coins on voucher rewards.",
          changes: [
            "Products were initially voucher-based",
            "Access followed a category-first visibility model",
            "Users needed category permission before they could see products under it",
            "The redemption experience was straightforward, with users receiving voucher codes after purchase"
          ],
          shaped:
            "I joined from the first iteration, which gave me a strong view of where the original structure worked well and where it would later become limiting as client needs grew."
        },
        {
          phase: "02",
          title: "Commerce",
          detailTitle: "Commerce handoff",
          description:
            "The system later expanded to support Stripe and WooCommerce-backed purchase flows, while product and payment management stayed on those external systems.",
          changes: [
            "Added Stripe-backed purchase flows",
            "Supported both one-time and recurring purchase setups",
            "Added WooCommerce-backed purchase flows",
            "Kept product management and payment handling outside the platform, while our product handled access and redemption flow"
          ],
          shaped:
            "This phase clarified that the harder product work was not payment itself, but how store logic connected external commerce systems with internal reward and redemption flows."
        },
        {
          phase: "03",
          title: "Redemption",
          detailTitle: "Redemption methods",
          description:
            "As client needs expanded beyond vouchers, the store had to support more complex redemption types such as account credit and physical reward claims.",
          changes: [
            "Added configurable redemption fields based on claim type",
            "Allowed different fields depending on reward type",
            "Supported CRM-linked values, such as account selection, during redemption",
            "Expanded the system to support account credit and physical delivery flows"
          ],
          decision:
            "For account-credit redemption, I initially supported a manual acknowledgement step where users confirmed they held equal value in their account balance. That proved unreliable and created refund and support issues, so I replaced it with API-based validation before the claim could move forward.",
          shaped:
            "This phase pushed the store beyond basic redemption and into more operationally sensitive flows where validation and claim handling mattered much more."
        },
        {
          phase: "04",
          title: "Permissions",
          detailTitle: "Permissions",
          description:
            "As clients requested more granular regional access, the original category-parent permission model became difficult to manage across many roles and edge cases.",
          changes: [
            "Reworked the original category-parent permission structure",
            "Allowed product-level rules to override category-level access",
            "Introduced explicit access states: no access, view only, and full access",
            "Added purchase limits on top of access rules",
            "Designed precedence rules for overlapping roles"
          ],
          decision:
            "One of the hardest tradeoffs was deciding how precedence should work when users held conflicting roles. I chose full access to take priority over view only and no access, and simplified default behavior so the system stayed manageable without becoming overly complex.",
          shaped:
            "This was one of the biggest logic redesigns in the system and a strong example of turning a client-specific pain point into reusable platform logic."
        },
        {
          phase: "05",
          title: "Operations",
          detailTitle: "Statuses, refunds, and operations",
          description:
            "As the store matured, it needed to support more flexible operational handling across different client workflows and future fulfilment partners.",
          changes: [
            "Structured order flow into four broad status categories: Purchase, In Progress, Completed, and Refunded",
            "Allowed products to define a starting status",
            "Allowed redemption methods to override that starting status, with redemption method taking highest priority",
            "Kept status changes manual or API-driven rather than hardcoding one fulfilment flow",
            "Added refund rules, including request-based or automatic refund flows",
            "Built supporting order history and transaction tooling for teams managing redemption activity"
          ],
          decision:
            "I designed statuses as configurable categories rather than a fixed lifecycle, so the same system could support different fulfilment and refund models across clients.",
          shaped:
            "I also knew we would eventually need to work with fulfilment partners, so I helped shape the status model early and later worked with a fulfilment company around those flows. On the operational side, I also built additional transaction tooling when the default history workflow was too rigid for clients managing activity across regions."
        }
      ],
      detailSections: [
        {
          heading: "Overview",
          items: [],
          layout: "default",
          body:
            "The store began as a simple voucher redemption feature inside the platform, where users earned client-specific coins through actions, CRM-linked events, milestones, social quests, and bulk updates. As client needs expanded, the real challenge became turning a basic voucher flow into reusable product capability instead of letting every new requirement become one-off custom logic."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I was involved from the first version and later owned major logic decisions across Stripe, WooCommerce, redemption methods, permissions, statuses, refunds, and supporting workflows. A big part of the role was deciding when a client request should stay custom and when it needed to become reusable platform capability."
        },
        {
          heading: "Outcome",
          items: [],
          layout: "default",
          body:
            "Over time, the store became the platform’s most-used feature. What started as a simple voucher page grew into a configurable redemption system that could support different reward types, access patterns, eligibility checks, refund rules, and fulfilment-aware workflows on the same foundation."
        },
        {
          heading: "What I learned",
          items: [],
          layout: "default",
          body:
            "This project taught me that commerce features become much more interesting when the hard part is not payment, but the logic around access, redemption, eligibility, and operations."
        }
      ]
    },
    {
      id: "milestone-gamification-engine",
      label: "Platform thinking",
      featured: true,
      detailLayout: "feature",
      title: "Milestone",
      summary:
        "Built out milestone from a simple reward flow into a flexible backend engine for coins, XP, roles, approvals, hidden permissions, recurring campaigns, and integration-driven logic.",
      tags: ["Rules engine", "Permissions", "Backend systems"],
      railTags: ["Rules engine", "Permissions", "Backend systems"],
      scope: "",
      impactLabel: "Impact",
      impactLine: "",
      railNoteLabel: "",
      railNote: "",
      bullets: [
        "Evolved from simple rewards into a flexible rules engine",
        "Powered roles, permissions, approvals, and backend control",
        "Supported recurring campaigns and integration-driven logic"
      ],
      detail:
        "Milestone evolved from a simple reward mechanic into a reusable backend system for progression, permissions, approvals, and structured business logic.",
      evolutionPhases: [],
      detailSections: [
        {
          heading: "Overview",
          items: [],
          layout: "default",
          body:
            "Milestone started as a simple gamification flow for awarding coins and XP when users met certain conditions. Over time, it became much more than a reward feature. As the platform gained access to richer data through integrations, webhooks, bulk updates, and CRM systems, milestone evolved into a flexible rules engine for progression, role assignment, submissions, approvals, resets, and repeatable engagement logic. Importantly, milestone was not always a visible user-facing feature. In many cases, it operated in the background to assign roles, control permissions, and trigger access changes elsewhere in the product."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I was involved in milestone from the beginning and shaped it across its full evolution. That included core condition logic, reward behavior, role assignment, progression models, approval flows, user-facing rule phrasing, resets, start dates, and newer urgency mechanics such as limited redemption windows. It was one of the systems that came most directly out of my hands."
        },
        {
          heading: "Core capabilities",
          items: [],
          layout: "default",
          body:
            "Milestone became useful because it could combine product rules, external data, hidden backend logic, and user-facing progression in the same system."
        },
        {
          heading: "Data-driven conditions",
          items: [
            "Used custom fields and external system data as milestone conditions",
            "Enabled reward logic from CRM, webhook, and bulk-update data",
            "Supported use cases where users were rewarded when tracked business events occurred"
          ],
          layout: "compact-bullets",
          body:
            "As integrations expanded, milestone stopped depending on in-platform actions alone and became a broader rules layer that could react to external signals."
        },
        {
          heading: "Rewards and role logic",
          items: [
            "Awarded coins and XP when conditions were met",
            "Added role assignment, removal, and overwrite behavior",
            "Enabled hidden milestones that ran purely as backend permission logic"
          ],
          layout: "compact-bullets",
          body:
            "Milestone eventually supported tiers, access changes, and backend control, not just visible reward mechanics. I also used hidden milestone logic to award regional roles that determined access to the store."
        },
        {
          heading: "Progression models",
          items: [
            "Added progressive logic where later stages stayed locked until earlier ones were cleared",
            "Added non-progressive logic where tasks could be completed independently",
            "Supported more flexible campaign structures such as multi-platform review actions"
          ],
          layout: "compact-bullets",
          body:
            "Different campaigns needed different progression behavior, so milestone had to support both sequential and independent completion models without assuming one default structure."
        },
        {
          heading: "Submission and approval workflows",
          items: [
            "Added support for text and image submissions",
            "Allowed required fields and admin-configured submission instructions",
            "Added approval and rejection workflows for actions that could not be validated automatically",
            "Introduced custom conditions around review-based milestone handling"
          ],
          layout: "compact-bullets",
          body:
            "This pushed milestone beyond automated tracking and into hybrid workflows where platform logic and operational review had to work together."
        },
        {
          heading: "Recurring and urgency mechanics",
          items: [
            "Improved user-facing condition phrasing without changing admin setup logic",
            "Added start-date and reset logic for recurring milestone use cases",
            "Added limited-redemption windows to create urgency and support repeatable engagement loops",
            "Used milestone as the basis for the Trustpilot review flow once completion conditions were met"
          ],
          layout: "compact-bullets",
          body:
            "As milestone grew more complex, it also had to become easier to understand and more reusable over time, especially for recurring engagement and time-based reward behavior."
        },
        {
          heading: "Outcome",
          items: [],
          layout: "default",
          body:
            "Milestone grew from a simple reward mechanic into one of the platform’s most flexible backend systems. It powered coins, XP, role assignment, approvals, hidden access control, recurring campaigns, and integration-driven rewards. In practice, it became just as important as the store and, in some ways, more widely used because it controlled the logic behind how progression, access, and reward behavior worked across the product."
        },
        {
          heading: "What I learned",
          items: [],
          layout: "default",
          body:
            "This project taught me that gamification becomes much more powerful when it stops being about points alone and starts acting as a reusable system for progression, permissions, behavior, and structured business logic."
        }
      ]
    }
  ],
  seo: {
    title: "Anjelika Tan | Product & Platform Generalist",
    description:
      "Portfolio of Anjelika Tan, a product and platform generalist focused on integrations, workflows, internal tools, and AI-assisted systems in B2B SaaS.",
    siteUrl: "https://example.com",
    socialImage: "/me2.png"
  }
} as const;

export type Portfolio = typeof portfolio;
