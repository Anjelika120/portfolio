export const portfolio = {
  person: {
    name: "Anjelika Tan",
    title: "Product Manager",
    intro:
      "I turn complex client workflows into safe, operable product capabilities.",
    heroLines: [
      "With a Computer Science background, I work across B2B2C SaaS products where APIs, integrations, workflows, commerce, identity, AI-enabled product operations and live client delivery meet.",
      "I am most useful when a client request exposes a wider platform problem. I clarify the contract, make the trade-offs visible and follow the work through engineering, QA, release and live operation."
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
        label: "Production",
        value: "Correct statuses returned for nearly 3,000 historical Store purchases"
      },
      {
        label: "QA/test",
        value: "300k-record list; 50k multi-field update under 15 minutes"
      }
    ],
    workbenchArtifacts: [
      {
        label: "API",
        lane: "Inputs",
        description: "Contracts and client data"
      },
      {
        label: "Webhooks",
        lane: "Inputs",
        description: "Events and delivery states"
      },
      {
        label: "Workflows",
        lane: "Logic",
        description: "Execution and recovery"
      },
      {
        label: "Store",
        lane: "Logic",
        description: "Eligibility and redemption"
      },
      {
        label: "Gamification",
        lane: "Output",
        description: "Rules and rewards"
      },
      {
        label: "AI Automation",
        lane: "Output",
        description: "Product memory and grounded delivery"
      }
    ],
    workbenchStories: [
      {
        id: "api",
        label: "API",
        title: "External contracts that do not guess",
        preview: "I turn client payloads and operating needs into deterministic platform APIs.",
        body:
          "I work with platform APIs from both sides: reading client documentation and payloads, then defining how our own endpoints should validate, fail and expose data. That includes permissions, type-specific date and time formats, bulk operations and product flows where an ambiguous contract can create incorrect rewards or account state.",
        points: [
          "Client payloads mapped into product behaviour",
          "Deterministic validation and failure states",
          "A PM-led Store API review covering 100 checks"
        ]
      },
      {
        id: "webhooks",
        label: "Webhooks",
        title: "Events designed for delivery and investigation",
        preview: "I define event contracts, failure isolation and the logs needed to support them.",
        body:
          "Incoming events and outgoing callbacks only become product capability when teams can trust and investigate them. I scope payloads, authentication and one-way versus response-processing behaviour, then define what happens on timeout, duplicate delivery or failure. I also bring delivery logs and run identifiers into scope so support has evidence before escalating to engineering.",
        points: [
          "Incoming and outgoing event contracts",
          "Non-blocking callback and failure semantics",
          "Delivery history, run IDs and inspectable payloads"
        ]
      },
      {
        id: "workflows",
        label: "Workflows",
        title: "Workflow automation that can be operated after launch",
        preview: "I helped stage a workflow product from actions into an inspectable execution system.",
        body:
          "I shaped Custom and Data Workflows across triggers, actions, transformations, concurrency, branching, retries, stop-on-error behaviour, idempotent ingestion and run history. Production exposure showed why the execution contract mattered: missed and duplicate triggers made observability and recovery part of the product, not follow-up engineering work.",
        points: [
          "Progressive platform scope instead of one large release",
          "Test, retry, stop-on-error and idempotency decisions",
          "Named-client use with reliability limits kept visible"
        ]
      },
      {
        id: "store",
        label: "Store",
        title: "A redemption system built around rules, not one fulfilment path",
        preview: "I shaped eligibility, redemption, status and integration contracts across the Store.",
        body:
          "The Store grew from voucher redemption into a configurable product system spanning eligibility checks, product fields, permissions, refunds, order states, SDK callbacks and external fulfilment. One production correction made API responses return the intended custom statuses for nearly 3,000 historical purchases without manually rewriting each order.",
        points: [
          "Reusable eligibility and redemption methods",
          "Configurable status, permission and refund logic",
          "Historical correctness plus future-write consistency"
        ]
      },
      {
        id: "gamification",
        label: "Gamification",
        title: "Reward mechanics backed by explicit rules",
        preview: "I work on the conditions, integrity and operations behind engagement features.",
        body:
          "Milestones, referrals, social actions and prediction campaigns sit on top of user state that affects rewards, roles and access. I define condition wording, reset and revocation behaviour, duplicate safeguards, approval flows and the operational path when a result cannot be verified automatically.",
        points: [
          "Reward, role and permission conditions",
          "Reset, revocation and duplicate safeguards",
          "Hybrid automation and human review flows"
        ]
      },
      {
        id: "ai-automation",
        label: "AI Automation",
        title: "AI-enabled product work grounded in durable context",
        preview: "I build product memory that keeps AI useful without hiding uncertainty.",
        body:
          "I built an AI-ready product memory from feature intent, decisions, trade-offs, known gaps and evidence boundaries. It supports PRDs, tickets, QA, research, onboarding and handover, while keeping source confidence, human review, attribution and secret exclusion explicit. A YAML PRD generator was one supporting workflow, not the whole story.",
        points: [
          "Source-qualified context before generation",
          "Human review, visible assumptions and attribution",
          "Safe reuse across delivery and handover"
        ]
      }
    ]
  },
  whatIWorkOn: {
    description:
      "The product problems where my technical and operational context is most useful.",
    intro:
      "I work across the boundary between a client need and the platform contract required to support it safely.",
    areas: [
      {
        label: "Platform product design",
        description:
          "Reusable rules, permissions, states and contracts that can serve more than one client workflow.",
        transformation: "client request -> reusable platform rule"
      },
      {
        label: "APIs and integrations",
        description:
          "Client payloads, SDKs, webhooks, CRM and data systems translated into product behaviour.",
        transformation: "external data -> deterministic product behaviour"
      },
      {
        label: "Workflow automation",
        description:
          "Execution models that include testing, visibility, failure handling and recovery from the start.",
        transformation: "manual operation -> inspectable workflow"
      },
      {
        label: "Commerce and redemption",
        description:
          "Eligibility, fulfilment, refunds and order states for reward and account-credit use cases.",
        transformation: "reward request -> validated redemption"
      },
      {
        label: "Scale and operability",
        description:
          "Bulk operations, exports, logging and support tools that keep large systems usable after release.",
        transformation: "large job -> observable operation"
      },
      {
        label: "Quality and release",
        description:
          "Acceptance criteria, failure states and QA collaboration tied back to the intended product contract.",
        transformation: "written intent -> verified behaviour"
      }
    ]
  },
  productMemory: {
    label: "How I work with AI",
    title: "Building product memory that humans and AI can actually use",
    description:
      "AI is useful in product work when it can retrieve the decision behind a feature, distinguish evidence from inference and show where human judgment is still required. I built a product memory system around those needs rather than treating a prompt or generator as the product.",
    problem:
      "Important context was scattered across tickets, chats, PRDs, QA notes, designs and production follow-up. That made it easy for both people and AI tools to repeat an old assumption, miss a trade-off or present test evidence as a production outcome.",
    memoryLayers: [
      {
        label: "Intent and decisions",
        detail:
          "Feature purpose, user and operator needs, included and excluded scope, decision history, trade-offs and known gaps."
      },
      {
        label: "Evidence and confidence",
        detail:
          "Clear source-confidence categories, production evidence versus QA or test evidence, and explicit notes where adoption or business impact was not measured."
      },
      {
        label: "Delivery context",
        detail:
          "Engineering, UX, QA and support handoffs, acceptance criteria, failure states, operational history and the source links needed to verify a claim."
      },
      {
        label: "Safe AI use",
        detail:
          "Human review, attribution, uncertainty labels and secret exclusion before context is reused in a PRD, ticket, test plan, research task or handover."
      }
    ],
    uses: [
      "PRDs and engineering tickets",
      "QA plans and acceptance checks",
      "Research and evidence audits",
      "New-starter and successor handover",
      "Client and support context without secrets"
    ],
    yamlStory: {
      title: "One supporting workflow: YAML PRDs",
      body:
        "Rob introduced the concept. Thuta built the generator. I adopted, operationalised, tested and refined the AI-assisted workflow on live product work. No measured time, quality or defect improvement is claimed. The useful lesson was narrower: generated requirements became safer when the workflow retrieved product, repository, schema and design-system context first, then required a person to review the result."
    },
    evidenceLimit:
      "This is evidence of a working product-operations practice and durable handover, not proof that AI improved delivery speed, defect rates or team adoption."
  },
  experience: {
    description:
      "Product experience across B2B2C platform systems, client integrations and operational delivery.",
    roles: [
      {
        company: "Returning AI Pte Ltd",
        role: "Product Manager",
        period: "May 2024 to Present",
        summary:
          "First and sole Product Manager for a configurable B2B2C loyalty platform, working across client integrations, administrative tooling and member reward experiences. I introduced clearer acceptance criteria, operational visibility and durable product context alongside delivery."
      },
      {
        company: "Great Eastern",
        role: "Financial Advisor",
        period: "Dec 2021 to Jan 2024",
        summary:
          "Built client communication and decision-making discipline in a regulated environment, including a scenario-based financial planning tool."
      }
    ]
  },
  platforms: {
    title: "Product surfaces and systems",
    description:
      "Technology I have worked with as a product manager across integrations, data, engagement and commerce.",
    groups: [
      {
        title: "CRM and data",
        description: "Customer records, trading data, segmentation and workflow inputs.",
        items: ["HubSpot", "Salesforce", "Snowflake"]
      },
      {
        title: "Channels and social",
        description: "OAuth, verification, rewards and platform-specific API constraints.",
        items: ["Meta", "Instagram", "LinkedIn", "X", "YouTube"]
      },
      {
        title: "Commerce and trust",
        description: "Store logic, external catalogue experiments and governed review flows.",
        items: ["Stripe", "WooCommerce", "Trustpilot"]
      }
    ]
  },
  additionalWork: {
    title: "Supporting product decisions",
    description:
      "Smaller examples that show how I handle identity, quality, client operations and external constraints.",
    groups: [
      {
        title: "Safety, contracts and quality",
        items: [
          "Split a client identifier need into a fail-closed authentication bridge and a separate indexed, community-scoped model",
          "Required exact date and time formats in an external API rather than guessing local or server time",
          "Ran a 100-check Store API review across permissions, invalid inputs and success and failure paths",
          "Used QA rejection and re-test loops to keep delivered behaviour tied to acceptance criteria"
        ]
      },
      {
        title: "Client and operational delivery",
        items: [
          "Isolated a broker client's widget failure to Store and Socials while other widgets worked with the same token, then routed the boundary to the right engineers and QA",
          "Supported repeated production bulk jobs with queue-aware retry and cancellation while keeping in-progress and idempotency limits visible",
          "Supported live operation of a prediction campaign with 63 participants and 552 attempts; the figures show usage, not measured engagement lift",
          "Designed logs and histories around the operator question: what happened to this user, job or delivery?"
        ]
      }
    ]
  },
  selectedWork: [
    {
      id: "multi-region-loyalty-programme",
      label: "Client platform and live operations",
      featured: true,
      detailLayout: "feature",
      title: "Multi-region brokerage loyalty programme",
      summary:
        "Led the product and integration workstream for a multi-region brokerage loyalty programme, translating client goals into embedded experiences, data contracts, campaign mechanics, operational tooling and automated fulfilment.",
      caseTitle: "Building and operating a multi-region brokerage loyalty programme",
      problemLine:
        "One client programme crossed data integration, identity, embedded widgets, Store fulfilment, campaigns, regional experiences and live support, with different teams owning each technical boundary.",
      decisionLine:
        "Treat the account as one product lifecycle: make the data and business rules explicit, connect each team through testable contracts, and design monitoring and recovery into the operating model.",
      outcomeLine:
        "The programme reached live multi-region operation across embedded reward experiences and automated trading-credit fulfilment, with reconciliation and incident evidence used to tighten the product after launch.",
      tags: ["B2B2C platform", "Client integrations", "Live operations"],
      railTags: ["Account lifecycle", "Multi-region delivery", "Shared authorship"],
      scope: "Data integration, embedded experiences, automated fulfilment and programme operation",
      impactLabel: "Evidence",
      impactLine:
        "In one reconciliation window, 66 trading-credit orders had 66 matching success messages with no missing message or duplicate in that comparison. A later 19-order gap exposed the limit and triggered further investigation.",
      railNoteLabel: "My role",
      railNote:
        "Client-facing product and integration coordination across stakeholders, engineering, QA, portal, data and operations teams",
      bullets: [
        "Translated programme goals into data mappings, authenticated widgets, campaign rules and fulfilment contracts",
        "Coordinated regional, device and language variants across client and internal teams",
        "Defined eligibility, failure, duplicate-risk, monitoring and support paths for trading-credit automation",
        "Stayed involved through launch, reconciliation, recurring incidents and product correction"
      ],
      detail:
        "This case shows account-level product work rather than a single feature. The programme only worked when client goals, platform rules, portal behaviour, source data, fulfilment automation and support operations stayed connected.",
      evolutionPhases: [
        {
          phase: "01",
          title: "Foundation",
          detailTitle: "Make the data and identity risks visible",
          description:
            "The programme depended on client trading data, member identity and regional configuration. Before launch, field mapping and data-quality gaps had to be treated as product constraints rather than hidden integration details.",
          changes: [
            "Snowflake approach validation and field mapping",
            "Identity and duplicate-data risks surfaced before launch",
            "Loyalty, redemption and outstanding-liability reporting needs",
            "Client discovery on catalogue, permissions and support workflows"
          ],
          decision:
            "Keep uncertain or incomplete source data visible in the launch plan instead of designing the member experience around an assumed clean feed.",
          shaped:
            "I worked directly with client, data and engineering stakeholders to turn field-level questions into product rules, blockers and follow-up decisions."
        },
        {
          phase: "02",
          title: "Experience",
          detailTitle: "Join the embedded member journey across regions",
          description:
            "The loyalty programme appeared inside the client's authenticated portal across global and China experiences, desktop and mobile layouts, and multilingual navigation.",
          changes: [
            "Store, Milestone and Currency Overview widgets",
            "Quest, rewards-log, leaderboard and mini-game experiences",
            "Global and China configuration variants",
            "Permissions, navigation and responsive portal handoffs"
          ],
          decision:
            "Use conditional product variants when a shared widget depended on capabilities that were not enabled in every community.",
          shaped:
            "I connected client expectations to UX, portal and platform teams, clarified incomplete handoffs and followed defects through QA and release."
        },
        {
          phase: "03",
          title: "Automation",
          detailTitle: "Move trading-credit fulfilment into a monitored flow",
          description:
            "Trading-credit rewards needed more than a success action. The flow covered eligibility, pre-credit checks, order states, failure handling, duplicate-credit risk, review and support guidance.",
          changes: [
            "Eligibility and account checks before fulfilment",
            "Success, failure and review states",
            "Duplicate-risk safeguards and monitoring",
            "Phased rollout with a client-service operating guide"
          ],
          decision:
            "Treat reconciliation and failure recovery as launch requirements, because a completed Store order did not by itself prove that downstream credit had succeeded.",
          shaped:
            "I led the product and integration workstream while engineering built the automation and client teams supplied source-system evidence."
        },
        {
          phase: "04",
          title: "Operation",
          detailTitle: "Use live evidence without overstating reliability",
          description:
            "Launch created real reconciliation and incident evidence. One 82-redemption window contained 66 trading-credit orders and 66 corresponding success messages with no missing message or duplicate in the Slack-to-Slack check. A later report found all 19 trading-credit orders absent from the automation channel.",
          changes: [
            "Daily order and message reconciliation",
            "Regional order views, refunds and status tooling",
            "Campaign rankings, winners and entitlement recovery",
            "Recurring incident triage across client and internal teams"
          ],
          decision:
            "Present the 66-to-66 comparison as a bounded operational check, not as full API-to-broker proof or sustained reliability.",
          shaped:
            "I gathered evidence, coordinated recovery and carried recurring gaps back into product decisions. Too many recoveries still depended on my direct intervention."
        }
      ],
      detailSections: [
        {
          heading: "Context",
          items: [],
          layout: "default",
          body:
            "The client ran a brokerage loyalty programme across multiple regions. Members used embedded rewards, Store, milestones, campaigns and games, while client teams needed data integration, fulfilment, reporting, permissions and support controls behind those experiences."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I was the practical client-facing Platform PM and product operator for the programme. I translated goals and incidents into product rules, coordinated client stakeholders with engineering, QA, portal, data and operations teams, and followed the work from discovery into launch and live recovery. I did not own the engineering implementation alone."
        },
        {
          heading: "Campaign and operational scope",
          items: [
            "Defined campaign instrument scope, deposit eligibility, counting boundaries, timezone rules, privacy and widget permissions.",
            "Supported weekly ranking and winner operations alongside refunds, status correction and entitlement restoration.",
            "Used client discovery to clarify coin expiry, currency liability, catalogue APIs, permissions and support needs.",
            "Kept regional and language differences visible instead of treating one portal configuration as universal."
          ],
          layout: "compact-bullets",
          body:
            "The breadth matters because each surface depended on the same member identity, reward rules and operating evidence."
        },
        {
          heading: "Evidence and limits",
          items: [
            "Authenticated Store, Milestone, Currency Overview, quest, rewards-log, leaderboard and mini-game experiences reached live multi-region use.",
            "Trading-credit automation reached live launch and was reconciled through order and message evidence, but the 66-to-66 window was not full downstream broker proof.",
            "A later 19-order failure and recurring fixture issues show that reliability was not yet repeatable.",
            "The portfolio does not claim measured retention, revenue, conversion or sustained automation success."
          ],
          layout: "compact-bullets",
          body:
            "Client and internal names are generalised. Any screenshots, direct quotes or identifiable operational records require permission and redaction before publication."
        },
        {
          heading: "What I would change now",
          items: [
            "Set clearer work-in-progress limits and assign durable operational owners before launch.",
            "Consolidate fragmented handoffs into one versioned programme contract and evidence dashboard.",
            "Add earlier rule reviews for exclusions, naming and campaign fixtures.",
            "Define outcome and reliability measures with the client before rollout."
          ],
          layout: "compact-bullets",
          body:
            "A campaign handoff ran two days late, an early rule missed a demo-account exclusion, I confused two similarly named boosters before correcting them, and some fixture issues recurred. The lesson is not that broad ownership is heroic. It is that the operating model needed more repeatability and less dependence on personal recovery."
        }
      ]
    },
    {
      id: "store-redemption-platform",
      label: "Commerce and platform systems",
      featured: true,
      detailLayout: "feature",
      title: "Store and redemption platform",
      summary:
        "Shaped a voucher Store into a configurable redemption platform spanning eligibility, permissions, order states, refunds, SDK and API contracts, and operational investigation.",
      caseTitle: "Making Store logic reusable without hiding historical errors",
      problemLine:
        "A simple voucher flow had become a shared foundation for different reward types, client systems and fulfilment models.",
      decisionLine:
        "Separate reusable eligibility, redemption and status contracts from client-specific integration logic, then preserve both future and historical correctness.",
      outcomeLine:
        "Production work made historical API responses return the intended statuses for nearly 3,000 purchases without manually rewriting every order.",
      tags: ["Commerce", "API and SDK", "Operational systems"],
      railTags: ["B2B2C Store", "Platform contracts", "Production outcome"],
      scope: "Store, redemption and integration product work",
      impactLabel: "Evidence",
      impactLine:
        "Correct historical status responses for nearly 3,000 Store purchases in production, followed by positive client feedback.",
      railNoteLabel: "My role",
      railNote:
        "Product contracts, scope, state behaviour, migration choices, supportability and QA follow-through",
      bullets: [
        "Turned new client needs into reusable eligibility and redemption capability",
        "Defined permissions, statuses, refunds, migration behaviour and failure states",
        "Connected admin, storefront, API, SDK and support requirements",
        "Kept shipped callback fields separate from an unverified follow-on callback runtime"
      ],
      detail:
        "This case is about the product contracts around a transaction: who can see an item, what information is required, whether a user is eligible, what state is written and how an operator investigates the result.",
      evolutionPhases: [
        {
          phase: "01",
          title: "Voucher",
          detailTitle: "A narrow redemption flow",
          description:
            "The Store began with coin-funded voucher redemption. The early model was useful, but category-first access and a fixed claim path became limiting as more clients and reward types arrived.",
          changes: [
            "Voucher products and platform currency",
            "Category-led visibility and simple purchase history",
            "A straightforward code fulfilment path"
          ],
          shaped:
            "I worked from the first version and used that history to distinguish what could be extended from what needed a new product contract."
        },
        {
          phase: "02",
          title: "Eligibility",
          detailTitle: "External data inside the purchase decision",
          description:
            "Account-credit and other client use cases needed fields and eligibility decisions that ReturningAI did not own. Manual acknowledgement created refund and support risk.",
          changes: [
            "Configurable information collection and Product Fields",
            "API-backed account and eligibility checks",
            "Pass, fail and diagnostic states before purchase"
          ],
          decision:
            "Replace a user acknowledgement with API-based validation when the redemption depended on account state.",
          shaped:
            "I defined the user and admin states, what data had to be visible for investigation, and where client-specific code stopped and reusable Store behaviour began."
        },
        {
          phase: "03",
          title: "Contracts",
          detailTitle: "Reusable redemption and SDK behaviour",
          description:
            "The Store needed to collect or resolve client-owned information without embedding a bespoke flow into every product.",
          changes: [
            "Inherited redemption configuration and reusable Product Fields",
            "Signed and typed callback-field behaviour across admin, storefront and SDK",
            "Loading, success, empty and failure states",
            "One-way follow-on callback scope kept non-blocking"
          ],
          decision:
            "Keep purchase notification one-way and non-blocking rather than turning it into a general workflow or response-processing system.",
          shaped:
            "I framed the contracts and scope, carried client and support needs into the requirements, and worked with Saw, Hein, Wunna, QA, UX and technical leadership through delivery."
        },
        {
          phase: "04",
          title: "History",
          detailTitle: "Correct future writes and historical reads",
          description:
            "A production API returned every custom order status as completed, which made nearly 3,000 historical purchases misleading to one client.",
          changes: [
            "Correct status values written for future purchases",
            "Historical status joined at read time",
            "Old purchases verified without manual record-by-record updates"
          ],
          decision:
            "Reject a manual rewrite of every order and require a solution that fixed future source data while returning correct history.",
          shaped:
            "I held the product requirement for historical correctness, accepted the combined engineering approach, verified old purchases and carried the result back to the client."
        }
      ],
      detailSections: [
        {
          heading: "Context",
          items: [],
          layout: "default",
          body:
            "ReturningAI serves businesses that configure loyalty experiences for their own members. Store purchases can depend on platform currency, broker account state, client-owned identifiers, regional access, external fulfilment and support workflows. The product had to serve those differences without becoming a collection of one-off implementations."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I owned product decisions across eligibility, redemption methods, product fields, permissions, status precedence, refunds, migration defaults, SDK and API behaviour, and operational visibility. Engineers owned the implementation architecture; QA and UX challenged the behaviour through delivery."
        },
        {
          heading: "Evidence and limits",
          items: [
            "Multiple Store components and SDK callback fields reached production; the callback-field SDK release was version 1.5.0.",
            "The historical status correction reached production and made API responses return the intended result for nearly 3,000 purchases.",
            "Purchase-success callback types and staging work existed, but production client use and populated callback logs were not verified.",
            "Revenue, conversion and broad Store adoption were not measured in the available evidence."
          ],
          layout: "compact-bullets",
          body:
            "The strongest proof is the decision and production outcome, not a claim that every Store capability had broad adoption."
        },
        {
          heading: "What this demonstrates",
          items: [],
          layout: "default",
          body:
            "Technical product work is often the choice between a quick client patch and a contract the platform can keep supporting. This system required both: narrow scope where reuse was not justified, and deliberate platform capability where the same problem would recur."
        }
      ]
    },
    {
      id: "custom-workflows-platform",
      label: "Workflow automation",
      featured: true,
      detailLayout: "feature",
      title: "Custom Workflows",
      summary:
        "Helped evolve a visual workflow builder into an operable execution platform with triggers, actions, transformations, concurrency, test and retry behaviour, branching, bulk operations and run history.",
      caseTitle: "Designing workflow automation for what happens after deployment",
      problemLine:
        "Client automations were moving into the product, but an action builder without execution controls or investigation tools would create a new support dependency.",
      decisionLine:
        "Stage the platform around an explicit execution contract: state, concurrency, failure handling, idempotency, testing and inspectable history.",
      outcomeLine:
        "Workflow paths reached production use and exposed real missed and duplicate-trigger cases that sharpened the observability and recovery model.",
      tags: ["Workflow automation", "Reliability", "Platform strategy"],
      railTags: ["Execution model", "Progressive delivery", "Operational exposure"],
      scope: "Custom and Data Workflow product development",
      impactLabel: "Evidence",
      impactLine:
        "Production use was internally confirmed for client workflows; volume, sustained reliability and external acceptance remain unmeasured.",
      railNoteLabel: "My role",
      railNote:
        "Product sequencing, execution semantics, review, client context and release follow-through",
      bullets: [
        "Sequenced the platform from actions into branching, bulk and event-driven use cases",
        "Defined test, retry, stop-on-error, concurrency and idempotency behaviour",
        "Returned incorrect execution behaviour for fixes and verified the correction",
        "Kept production failures and verification limits visible"
      ],
      detail:
        "The product challenge was not drawing boxes and arrows. It was defining what each run means, how errors change the state, and what an operator can do when production behaviour differs from the design.",
      evolutionPhases: [
        {
          phase: "01",
          title: "Actions",
          detailTitle: "Triggers, HTTP and webhook actions",
          description:
            "The first useful layer let teams configure external triggers and actions instead of moving every automation into another tool or engineering script.",
          changes: [
            "HTTP and webhook actions",
            "Currency and user-data operations",
            "Transformations and reusable data selection"
          ],
          shaped:
            "I helped define the user jobs, action boundaries and product sequence so the builder could grow without pretending to support every automation at once."
        },
        {
          phase: "02",
          title: "Execution",
          detailTitle: "A contract for each run",
          description:
            "As workflows handled real product state, the system needed explicit queued and running states, concurrency rules and predictable behaviour after an error.",
          changes: [
            "Queued execution and concurrency control",
            "Test Workflow and full-flow testing",
            "Retry and stop-on-error behaviour",
            "Task and run history with duration and state"
          ],
          decision:
            "When a test continued after an error despite the specified stop behaviour, I returned it for fixes and later verified the correction.",
          shaped:
            "I connected the written execution semantics to review and QA instead of treating delivery status as proof that the contract worked."
        },
        {
          phase: "03",
          title: "Platform",
          detailTitle: "Branching, bulk work and reusable events",
          description:
            "Later releases added conditional paths, bulk actions and event-driven product triggers, which made coupling and duplicate execution more consequential.",
          changes: [
            "Conditional branching",
            "Bulk actions and idempotent event ingestion",
            "Named milestone completion events rather than direct state queries",
            "Store Purchase and data-event triggers"
          ],
          decision:
            "Challenge direct workflow coupling to milestone state and frame reusable named completion events as the product boundary.",
          shaped:
            "Thuta proposed the trigger flow, Rui Tong specified the experience, Denny and Thuta implemented the foundation and integration, and QA verified the available boundary. My role was the architecture question and product contract."
        },
        {
          phase: "04",
          title: "Operation",
          detailTitle: "Production made the gaps measurable",
          description:
            "Named-client workflows reached production exposure. One Store Purchase path missed triggers; another condition path required a production correction and exposed two histories for one update.",
          changes: [
            "Production correction followed by trigger verification",
            "Missed-trigger and duplicate-history investigation",
            "Internal confirmation of deposit events entering a client Data Workflow",
            "Run histories used as an operator surface"
          ],
          decision:
            "Treat deployment as the start of the reliability requirement, not the end of the feature story.",
          shaped:
            "I carried client context, failure evidence and investigation needs back into product and engineering discussions while keeping the missing volume and acceptance evidence explicit."
        }
      ],
      detailSections: [
        {
          heading: "Context",
          items: [],
          layout: "default",
          body:
            "ReturningAI receives events from client systems and uses them to update member data, rewards, Store eligibility and engagement experiences. Bringing that automation into the platform gave clients more control, but also made execution state and recovery part of the customer experience."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I shaped product scope and sequencing, execution and failure semantics, data selection, reusable event boundaries, acceptance criteria and production follow-through. Engineering and design collaborators owned implementation and detailed interaction work; my role was to keep the system coherent and operable."
        },
        {
          heading: "Evidence and limits",
          items: [
            "Internal platform inspection showed deployed and draft workflows plus successful run histories.",
            "Named-client production use was confirmed internally for Store Purchase and deposit-event paths.",
            "The archive also contains missed and duplicate-trigger evidence; the final reliability outcome was not fully recovered.",
            "Execution volume, stable-operation rate and external client acceptance were not measured."
          ],
          layout: "compact-bullets",
          body:
            "The case demonstrates platform judgment and operational ownership. It does not claim a mature automation product with proven broad adoption."
        },
        {
          heading: "What this demonstrates",
          items: [],
          layout: "default",
          body:
            "A workflow product is a runtime as much as a builder. The PM decisions that mattered most were the ones that made execution predictable, inspectable and recoverable when real client events arrived."
        }
      ]
    },
    {
      id: "large-community-operations",
      label: "Scale and operability",
      featured: true,
      detailLayout: "feature",
      title: "Large-community operations",
      summary:
        "Turned a failing large-user list into a wider operability programme across normalized state, queued imports and updates, cancellation, API Logs, background export and export history.",
      caseTitle: "Making large community operations observable and controllable",
      problemLine:
        "In QA/test with a 200,000-record community, the admin experience consumed heavy memory, repeated requests, became unresponsive and could spend more than 40 minutes on an export that did not complete.",
      decisionLine:
        "Treat the problem as more than page rendering: redesign client state and move large jobs into queued, inspectable operations with explicit limits.",
      outcomeLine:
        "QA loaded a 300,000-record list and completed a 50,000-record multi-field update in under 15 minutes; production use is proven at smaller batch sizes.",
      tags: ["Scale", "Bulk operations", "Product operations"],
      railTags: ["300k QA validation", "Background jobs", "Honest limits"],
      scope: "User management, bulk operations and exports",
      impactLabel: "Evidence",
      impactLine:
        "A test environment showed about 360 MB of duplicated Redux state at 200,000 records; later QA exercised 200,000 to 300,000-record scenarios.",
      railNoteLabel: "My role",
      railNote:
        "Problem framing, requirements, QA scope, operational controls and client-use follow-through",
      bullets: [
        "Expanded a performance ticket into an operability programme",
        "Separated UI, state, queue, export and idempotency concerns",
        "Used QA evidence instead of converting test scale into a production claim",
        "Documented cancellation, restart and duplicate-effect limits"
      ],
      detail:
        "The original symptom was a slow user list. The product problem was that large reads and writes had no safe operating model for admins, support or client data jobs.",
      evolutionPhases: [
        {
          phase: "01",
          title: "Failure",
          detailTitle: "The page stopped being an admin tool",
          description:
            "Large-community testing exposed an unresponsive list, slow search, repeated API calls, missing profile and online state, incorrect counts and a synchronous export that exceeded 40 minutes.",
          changes: [
            "About 1.4 GB browser memory after refresh in one test",
            "About 2.5 GB during export",
            "More than 40 minutes without a completed download",
            "Repeated requests and broken state on core admin paths"
          ],
          shaped:
            "I wrote the product problem around the admin workflows that had failed, not only a generic request to make the page faster."
        },
        {
          phase: "02",
          title: "State",
          detailTitle: "Normalize the client-side model",
          description:
            "In testing, the Redux store duplicated user records across five to seven indexes and consumed about 360 MB at 200,000 records. Engineering moved the state toward normalized records and references.",
          changes: [
            "Normalized user records instead of repeated copies",
            "Fast list loading and working username and email search in QA",
            "Restored profile and online-state behaviour",
            "One remaining count-label defect preserved after sign-off"
          ],
          decision:
            "Do not calculate a memory-reduction percentage because the available baseline and later browser observations measured different layers.",
          shaped:
            "I kept the user and operator behaviours in scope while engineering owned the Redux implementation and QA validated the affected surfaces."
        },
        {
          phase: "03",
          title: "Jobs",
          detailTitle: "Queue and inspect bulk work",
          description:
            "Imports and multi-field updates became background jobs with validation, run state, API Logs and cancellation while queued.",
          changes: [
            "CSV and JSON validation with row-level outcomes",
            "Internal batches up to 5,000 rows",
            "API Logs with input and output inspection",
            "Queued cancellation and email side-effect queueing"
          ],
          decision:
            "Describe cancellation precisely: it could remove queued work, but it could not stop or roll back rows already processing.",
          shaped:
            "I defined the operating states and failure visibility, then followed repeated client batches, retries and queue-aware support use."
        },
        {
          phase: "04",
          title: "Exports",
          detailTitle: "Move synchronous export out of the page",
          description:
            "Large export became a background workflow with history and later download, allowing admins to continue working while the file was prepared.",
          changes: [
            "Asynchronous export and Export History",
            "Completed internal/test exports around 10,000 users",
            "A recorded gamification-log export of 91,715 rows",
            "All Users was the supported scope at QA sign-off"
          ],
          decision:
            "Separate shipped background export from an unproven 200,000 or 300,000-record export runtime.",
          shaped:
            "I treated export as a product operation with state and retrieval, not a button that blocked the browser until success or failure."
        }
      ],
      detailSections: [
        {
          heading: "Context",
          items: [],
          layout: "default",
          body:
            "Client demand reached communities and migration plans in the hundreds of thousands of records. Admins still needed to search, update, import and export users without freezing the application or relying on engineering to inspect every job."
        },
        {
          heading: "What I owned",
          items: [],
          layout: "default",
          body:
            "I framed the affected workflows, created and sequenced product requirements, worked with engineering on the operational model, and used QA and later client jobs to keep failure states and unsafe assumptions visible. Engineering owned the state and queue implementations."
        },
        {
          heading: "Evidence and limits",
          items: [
            "QA loaded a 300,000-record list and completed a 50,000-record multi-field update in under 15 minutes.",
            "Production operation is proven for repeated 5,000-record batches, recurring automation and a bounded 10,000-record import test.",
            "A restart edge produced duplicate effects for 60 users and triggered an idempotency investigation.",
            "There is no proof of 300,000 active production users, a completed 746,000-user migration or safe rollback of in-progress work."
          ],
          layout: "compact-bullets",
          body:
            "Every number is labelled by where it came from. Test scale demonstrates validation; smaller production jobs demonstrate operation."
        },
        {
          heading: "What this demonstrates",
          items: [],
          layout: "default",
          body:
            "Performance work became product work once admins needed job state, cancellation, evidence and recovery. Scaling the interface without scaling the operating model would have moved the failure rather than solved it."
        }
      ]
    }
  ],
  seo: {
    title: "Anjelika Tan | Product Manager for B2B2C Platforms",
    description:
      "Portfolio of Anjelika Tan, a Product Manager working across B2B2C SaaS platforms, APIs, integrations, workflows, commerce, identity, AI-enabled product operations and live delivery.",
    siteUrl: "https://portfolio-black-tau-27.vercel.app",
    socialImage: "/me2.png"
  }
} as const;

export type Portfolio = typeof portfolio;
