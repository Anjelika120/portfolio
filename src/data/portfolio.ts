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
        "Permissions, statuses, eligibility, refunds, and supporting workflows",
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
            "The store started as a simple voucher redemption flow, where users spent platform-earned coins on voucher rewards.",
          changes: [
            "Products were mainly voucher-based",
            "Access followed a category-first visibility model",
            "Users redeemed rewards using in-platform currency",
            "The system was designed for a much simpler redemption flow than what it later became"
          ],
          shaped:
            "I was involved from the earliest version of the store and saw first-hand where the original structure would become limiting as new client needs emerged."
        },
        {
          phase: "02",
          title: "Commerce",
          detailTitle: "Commerce handoff",
          description:
            "The system later expanded to support Stripe and WooCommerce-backed purchase flows. Product and payment management stayed on those external systems, while our platform focused on purchase access and redemption flow.",
          changes: [
            "Added Stripe-backed purchase flows",
            "Added WooCommerce-backed purchase flows",
            "Supported both one-time and recurring product setups",
            "Kept product management and payment handling outside the platform instead of rebuilding those capabilities internally"
          ],
          shaped:
            "This phase clarified that the harder product work was not payment itself, but how store logic connected external commerce systems with internal reward and redemption flows."
        },
        {
          phase: "03",
          title: "Redemption",
          detailTitle: "Redemption methods",
          description:
            "As client needs expanded beyond vouchers, the store had to support more complex redemption methods such as account credit and physical reward claims. This introduced more operational and validation logic.",
          changes: [
            "Expanded beyond voucher-code rewards into account credit and physical delivery",
            "Added configurable redemption fields based on claim type",
            "Allowed CRM-linked fields, such as account selection, to be used during redemption",
            "Introduced API-based checks for more sensitive claims"
          ],
          shaped:
            "One important shift here was moving away from manual user acknowledgement and toward API validation, after the original flow caused refund and support issues."
        },
        {
          phase: "04",
          title: "Permissions",
          detailTitle: "Permissions",
          description:
            "As clients grew more complex, the original category-parent permission model became difficult to manage, especially when clients needed regional access control across many roles. This led to a full rethink of how store access should work.",
          changes: [
            "Reworked the original category-parent permission structure",
            "Allowed product-level permissions to override category-level access",
            "Introduced explicit access states: no access, view only, and full access",
            "Defined precedence rules for overlapping roles so the system stayed manageable across many regional roles"
          ],
          shaped:
            "This was one of the biggest logic redesigns in the system and a strong example of turning a client-specific pain point into reusable platform logic."
        },
        {
          phase: "05",
          title: "Operations",
          detailTitle: "Statuses, refunds, and operations",
          description:
            "As the store matured, it needed to support more operationally flexible workflows. I helped shape a more configurable status and refund system so the product could support different client processes and future fulfilment partners.",
          changes: [
            "Structured order flow into four broad status categories: Purchase, In Progress, Completed, and Refunded",
            "Allowed products and redemption methods to override the first status shown after purchase",
            "Supported manual or API-driven status updates instead of hardcoding automatic fulfilment behavior",
            "Added refund rules, including request-based or automatic refund flows",
            "Built supporting transaction tooling to help teams manage redemption activity more effectively"
          ],
          shaped:
            "I also worked with fulfilment-related workflows and built supporting transaction tooling when the default order history was not flexible enough for clients managing activity across regions."
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
          heading: "Key decisions",
          body:
            "The hardest area was permissions. The original category-parent model became difficult to manage once clients needed granular regional access across many roles.",
          items: [
            "Redesigned access so products could override category rules with clear precedence across no access, view only, and full access states.",
            "Expanded order handling into Purchase, In Progress, Completed, and Refunded, while allowing redemption methods to override the first status shown."
          ],
          layout: "compact-bullets"
        },
        {
          heading: "Eligibility and operations",
          items: [],
          layout: "default",
          body:
            "For account-credit redemption, I replaced a manual acknowledgement step with API-based validation after it proved unreliable and created refund and support issues. I also worked on order history and transaction tooling to support teams managing redemption activity where clients needed more flexibility than the default workflow provided."
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
      featured: false,
      detailLayout: "default",
      title: "Milestone gamification engine",
      summary:
        "A repeatable reward framework shaped around milestone tracking, product rules, and engagement design.",
      tags: ["Reward rules", "Trading data", "Reusable campaigns"],
      railTags: ["Reward rules", "Trading data", "Reusable campaigns"],
      scope: "",
      impactLabel: "Impact",
      impactLine: "",
      railNoteLabel: "",
      railNote: "",
      bullets: [
        "Integrated custom fields and external trading data",
        "Involved product rules, reward logic, and engagement design",
        "Designed for repeatable platform-wide use cases"
      ],
      detail:
        "The milestone engine combined product mechanics with platform reuse. It connected external trading data and internal custom fields to a rule system that could support repeated campaigns, while keeping the logic adaptable enough for future milestones, reward types, and engagement flows.",
      evolutionPhases: [],
      detailSections: []
    }
  ],
  seo: {
    title: "Anjelika Tan | Product & Platform Generalist",
    description:
      "Portfolio of Anjelika Tan, a product and platform generalist focused on integrations, workflows, internal tools, and AI-assisted systems in B2B SaaS.",
    siteUrl: "https://example.com",
    socialImage: "/opengraph-image"
  }
} as const;

export type Portfolio = typeof portfolio;
