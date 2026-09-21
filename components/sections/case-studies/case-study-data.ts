/**
 * Case-study content, as data — the two real, client-supplied engagements
 * KiwiKoru has documented (source: `case studies/*.docx`). One typed record per
 * study drives BOTH the shared detail layout (case-study-detail.tsx) and the
 * index cards (case-studies-index.tsx), so the copy lives in exactly one place.
 *
 * All copy here is KiwiKoru's own, lifted from the supplied case-study documents
 * (only lightly tidied for the web — sentence case headings, a fixed typo). The
 * SECTION STRUCTURE mirrors the reference case-study pages; none of the wording
 * is taken from them.
 *
 * ⚠️ These two are REAL named clients. Do not invent additional entries here —
 * the index's extra "delivery network" material is generic PLACEHOLDER and lives
 * in case-studies-index.tsx, clearly marked, never as a named client.
 */

export type QuickFact = { label: string; value: string };
export type ArchRow = { component: string; role: string };
export type Delivered = { workstream: string; detail: string };
export type ResultRow = { metric: string; detail: string };
export type Stat = { value: string; label: string };

export type CaseStudy = {
  slug: "forkoff" | "zeroshield" | "btcwires" | "thinkverse";
  /** Full display name, incl. any suffix (e.g. "ZeroShield.ai"). */
  name: string;
  /** Glass 3D <h1> text — no "." (not in the subset font). */
  heading: string;
  /** One-line descriptor under the heading. */
  tagline: string;
  /** Index-card category chip. */
  tag: string;
  /** Index-card one-line headline stat. */
  cardStat: string;
  /** Index-card blurb. */
  cardBlurb: string;
  quickFacts: QuickFact[];
  overview: string[];
  challengeIntro: string;
  challenge: string[];
  solutionIntro: string;
  awsServices: string[];
  architecture: ArchRow[];
  delivered: Delivered[];
  /** The three headline numbers for the results band. */
  headlineStats: Stat[];
  /** The full results list (superset of headlineStats). */
  results: ResultRow[];
  /** The real architecture diagram from the case-study doc, with its intrinsic
   *  dimensions (so next/image keeps the correct aspect ratio). */
  archImage: { src: string; alt: string; width: number; height: number };
  about: string;
};

const ABOUT_FORKOFF =
  "KiwiKoru Limited is a cloud architecture and engineering consultancy helping technology companies design, build and operate scalable, resilient systems on AWS. We bring deep expertise in serverless architecture, real-time data platforms, media processing automation, and production infrastructure engineering.";

const ABOUT_ZEROSHIELD =
  "KiwiKoru Limited is a cloud architecture and engineering consultancy helping technology companies design, build and operate scalable, resilient systems on AWS. We bring deep expertise in high-availability architecture, real-time data platforms, infrastructure governance, network security, and production infrastructure engineering.";

const ABOUT_BTCWIRES =
  "KiwiKoru Limited is a cloud architecture and engineering consultancy helping technology companies design, build and operate scalable, resilient systems on AWS. We bring deep expertise in high-availability architecture, real-time data platforms, and production infrastructure engineering.";

const ABOUT_THINKVERSE =
  "KiwiKoru Limited is a cloud architecture and engineering consultancy helping technology companies design, build and operate scalable, resilient systems on AWS. We bring deep expertise in high-availability architecture, real-time data platforms, infrastructure governance, and production infrastructure engineering.";

export const FORKOFF: CaseStudy = {
  slug: "forkoff",
  name: "FORKOFF",
  heading: "FORKOFF",
  tagline: "Serverless AWS platform for a Web3 AI marketing agency",
  tag: "Serverless & Media",
  cardStat: "99.9% uptime · 10× traffic capacity",
  cardBlurb:
    "A fully serverless, cloud-native platform — elastic by design, secure by default — for an AI marketing agency serving DeFi, NFT and Web3 clients worldwide.",
  quickFacts: [
    { label: "Client", value: "FORKOFF" },
    { label: "Industry", value: "AI marketing · Web3" },
    { label: "Platform", value: "Serverless on AWS" },
    { label: "Engagement", value: "Architecture, build & handover" },
  ],
  overview: [
    "FORKOFF is an AI-powered marketing agency operating at the intersection of artificial intelligence and Web3. The agency specialises in delivering data-driven brand campaigns, on-chain analytics, and automated content pipelines for blockchain-native projects serving a fast-growing clientele of DeFi protocols, NFT platforms, and Web3 start-ups worldwide.",
    "To support its accelerating client growth, FORKOFF needed a scalable, resilient cloud platform capable of handling unpredictable traffic surges, automated media processing, and rapid iteration of its AI tooling — all without sacrificing reliability.",
  ],
  challengeIntro:
    "FORKOFF came to KiwiKoru with a set of interconnected operational pain points:",
  challenge: [
    "Unpredictable traffic spikes tied to token launches and viral campaign moments were overwhelming existing infrastructure, causing service degradation at precisely the worst times.",
    "Media processing for AI-generated content — video renders, image assets, and campaign creatives — was slow, manual, and bottlenecked by on-premise tooling.",
    "Deployment cycles were lengthy, inconsistent, and prone to human error, slowing the agency's ability to ship new AI features and respond to market opportunities.",
    "There was no unified content delivery layer, leading to high-latency asset serving for geographically distributed Web3 audiences.",
    "Operational data — campaign metrics, client usage records, and job queues — was scattered across disconnected systems with no reliable single source of truth.",
  ],
  solutionIntro:
    "KiwiKoru designed and delivered a fully serverless, cloud-native architecture tailored to FORKOFF's operational profile — elastic by design, secure by default, and built for the velocity of a modern AI agency. The solution spans compute, storage, media processing, delivery, and continuous deployment.",
  awsServices: [
    "AWS Lambda",
    "Amazon S3",
    "AWS Elemental MediaConvert",
    "Amazon CloudFront",
    "Amazon API Gateway",
    "Amazon DynamoDB",
    "AWS CodePipeline",
  ],
  architecture: [
    {
      component: "AWS Lambda & API Gateway",
      role: "Event-driven serverless compute handles all inbound API traffic for FORKOFF's AI tooling and client-facing dashboards. Functions scale instantly to absorb traffic spikes, eliminating the need to provision or manage servers.",
    },
    {
      component: "Amazon S3",
      role: "All campaign assets, AI-generated media files, and processed outputs are stored durably in S3 with lifecycle policies, versioning, and fine-grained access controls to support secure multi-client workflows.",
    },
    {
      component: "AWS Elemental MediaConvert",
      role: "Automated, serverless video transcoding pipelines convert AI-generated video content into multiple formats and resolutions on demand, triggered directly by S3 object events via Lambda.",
    },
    {
      component: "Amazon CloudFront",
      role: "A global CDN layer sits in front of all asset delivery, ensuring FORKOFF's Web3 clients receive low-latency content regardless of geographic location, with edge caching tuned per content type.",
    },
    {
      component: "Amazon DynamoDB",
      role: "A fully managed NoSQL database provides the operational backbone for campaign metadata, job-queue tracking, client usage records, and real-time status dashboards — with single-digit millisecond performance at any scale.",
    },
    {
      component: "AWS CodePipeline",
      role: "End-to-end CI/CD pipelines automate build, test, and deployment stages for all FORKOFF services. Releases are triggered on code commit, with staged approvals and automatic rollback on failure.",
    },
  ],
  delivered: [
    {
      workstream: "Serverless API platform",
      detail:
        "End-to-end serverless API platform with Lambda and API Gateway, replacing fragile monolithic endpoints — with auto-scaling, per-function IAM roles, and structured logging.",
    },
    {
      workstream: "Media processing pipeline",
      detail:
        "Automated pipeline: S3 → Lambda trigger → MediaConvert → CloudFront delivery, fully hands-off from ingest to distribution, supporting multiple output formats and resolutions on demand.",
    },
    {
      workstream: "DynamoDB data model",
      detail:
        "Data model and access patterns designed for FORKOFF's campaign management, client onboarding, and job-tracking workflows, optimised for single-digit millisecond performance at scale.",
    },
    {
      workstream: "CloudFront distribution",
      detail:
        "Global CloudFront distribution with custom cache behaviours, origin groups, and signed URLs for secure asset delivery, ensuring low-latency performance for geographically distributed Web3 audiences.",
    },
    {
      workstream: "CI/CD pipeline (CodePipeline)",
      detail:
        "Fully automated CodePipeline CI/CD workflows covering all application services, with environment-specific deployment stages, test gates, and automatic rollback on failure.",
    },
    {
      workstream: "Infrastructure as code",
      detail:
        "Infrastructure-as-code for all resources, providing a reproducible, version-controlled environment baseline — enabling consistent deployments across development, staging, and production.",
    },
    {
      workstream: "Runbooks & knowledge transfer",
      detail:
        "Operational runbooks, architecture documentation, and team knowledge-transfer sessions to ensure FORKOFF's engineering team could own and operate the platform post-handover.",
    },
  ],
  headlineStats: [
    { value: "99.9%", label: "Platform uptime since go-live" },
    { value: "60%", label: "Faster deployment cycle time" },
    { value: "10×", label: "Traffic-spike capacity, absorbed automatically" },
  ],
  results: [
    {
      metric: "99.9% platform uptime",
      detail:
        "Platform availability sustained since go-live, ensuring FORKOFF's clients experience a rock-solid, always-available platform — a competitive differentiator in the fast-moving Web3 marketing space.",
    },
    {
      metric: "60% faster deployment",
      detail:
        "The automated CI/CD pipeline through CodePipeline cut deployment cycle time by 60%, enabling the engineering team to ship updates with confidence and focus on product innovation.",
    },
    {
      metric: "10× traffic-spike capacity",
      detail:
        "Serverless autoscaling via Lambda and API Gateway absorbs 10× normal traffic volumes without manual intervention — critical during high-stakes token launch campaigns.",
    },
    {
      metric: "Zero-touch media processing",
      detail:
        "Automated media pipeline from S3 ingest through MediaConvert transcoding to CloudFront delivery — fully hands-off, reducing content processing time from hours to minutes.",
    },
    {
      metric: "Global low-latency delivery",
      detail:
        "CloudFront edge distribution ensures AI-generated media reaches Web3 clients worldwide with consistent, low-latency performance regardless of geographic location.",
    },
  ],
  archImage: {
    src: "/case-studies/forkoff-architecture.png",
    alt: "FORKOFF AWS architecture: Route 53, CloudFront, API Gateway and Cognito in front of a Lambda compute layer, an S3 → Elemental MediaConvert → CloudFront media pipeline, DynamoDB data layer, and CI/CD, observability and security services.",
    width: 1558,
    height: 1052,
  },
  about: ABOUT_FORKOFF,
};

export const ZEROSHIELD: CaseStudy = {
  slug: "zeroshield",
  name: "ZeroShield.ai",
  heading: "ZeroShield",
  tagline: "Autonomous threat defense & zero-trust infrastructure on AWS",
  tag: "Security & Zero-Trust",
  cardStat: "SOC 2 Type II · 80% faster threat response",
  cardBlurb:
    "A fully automated, zero-trust network and security architecture on AWS — multi-topology, audit-grade, and built for a cybersecurity platform's own compliance obligations.",
  quickFacts: [
    { label: "Client", value: "ZeroShield.ai" },
    { label: "Industry", value: "Cybersecurity" },
    { label: "Platform", value: "Zero-trust network on AWS" },
    { label: "Engagement", value: "Architecture, build & compliance" },
  ],
  overview: [
    "ZeroShield.ai is a cybersecurity platform built around three core pillars: Autonomous Threat Defense, Collaborative Intelligence, and Network & Connectivity. The platform delivers real-time, AI-driven threat detection and response capabilities for enterprise environments, enabling organisations to proactively identify, contain, and neutralise security incidents before they escalate.",
    "Facing a rapidly evolving threat landscape, ZeroShield.ai required cloud network infrastructure that was not only high-performance and resilient, but also verifiably secure, compliant, and operationally efficient at scale.",
  ],
  challengeIntro:
    "ZeroShield.ai needed to deploy a production-grade, secure, and compliant network infrastructure on AWS supporting multiple topology designs — including hub-and-spoke, linear, tree, and star configurations — while enforcing a strict zero-trust security posture across all workloads. Key pain points included:",
  challenge: [
    "No centralised network control plane to manage traffic routing across multiple VPCs and topology configurations.",
    "Manual security configuration processes creating inconsistency, compliance gaps, and significant operational overhead.",
    "Absence of automated threat detection and response workflows aligned to their zero-trust model.",
    "SOC 2 Type II compliance required, with continuous monitoring, auditability, and evidence collection.",
    "Lack of unified visibility into network-level threats, misconfigurations, and policy violations across environments.",
  ],
  solutionIntro:
    "KiwiKoru designed and deployed a fully automated, zero-trust network and security architecture on AWS — purpose-built to meet ZeroShield.ai's multi-topology requirements and compliance obligations.",
  awsServices: [
    "AWS Transit Gateway",
    "AWS Network Firewall",
    "AWS WAF",
    "AWS Shield Advanced",
    "Amazon GuardDuty",
    "AWS Security Hub",
    "AWS IAM",
    "AWS Config",
  ],
  architecture: [
    {
      component: "Transit Gateway hub-and-spoke",
      role: "AWS Transit Gateway as the central network hub, connecting multiple VPCs in a hub-and-spoke topology with centralised traffic routing, policy enforcement, and inter-VPC segmentation — with flexibility to extend to linear, tree, and star configurations as the platform scales.",
    },
    {
      component: "AWS Network Firewall & WAF",
      role: "Network Firewall with custom stateful and stateless rule groups inspects and controls east-west and north-south traffic. AWS WAF sits in front of public-facing services with managed and custom rules to block malicious web and application-layer threats.",
    },
    {
      component: "Shield Advanced",
      role: "AWS Shield Advanced across all public endpoints for DDoS protection, with 24/7 access to the AWS DDoS Response Team and detailed attack diagnostics, ensuring service availability during active threat events.",
    },
    {
      component: "GuardDuty & Security Hub",
      role: "Amazon GuardDuty provides continuous threat intelligence across all accounts, ingesting VPC flow logs, DNS logs, and CloudTrail events. Security Hub is the centralised findings aggregator, normalising alerts into a single prioritised view for the security operations team.",
    },
    {
      component: "IAM least-privilege controls",
      role: "A comprehensive IAM strategy using role-based access control, service control policies (SCPs), and permission boundaries — enforcing least privilege across all workloads, service accounts, and human identities.",
    },
    {
      component: "AWS Config continuous compliance",
      role: "AWS Config with managed and custom rules continuously evaluates resources against ZeroShield.ai's security baselines and SOC 2 requirements, with automated remediation for critical non-compliant findings.",
    },
  ],
  delivered: [
    {
      workstream: "Network architecture design",
      detail:
        "Hub-and-spoke VPC topology via AWS Transit Gateway with centralised routing, policy enforcement, and inter-VPC segmentation — designed to extend to linear, tree, and star configurations.",
    },
    {
      workstream: "Network Firewall deployment",
      detail:
        "Custom stateful and stateless AWS Network Firewall rule groups controlling east-west and north-south traffic flows across all VPCs.",
    },
    {
      workstream: "WAF configuration",
      detail:
        "AWS WAF deployed across all public-facing services with AWS managed rule sets and custom rules blocking malicious web traffic and application-layer attacks.",
    },
    {
      workstream: "DDoS protection",
      detail:
        "AWS Shield Advanced enabled across all internet-facing endpoints with 24/7 AWS DDoS Response Team access, attack diagnostics, and response playbooks.",
    },
    {
      workstream: "Threat detection & SIEM",
      detail:
        "Amazon GuardDuty activated across all accounts ingesting VPC flow logs, DNS logs, and CloudTrail events. Security Hub configured as the centralised findings aggregator with cross-service normalisation.",
    },
    {
      workstream: "IAM & zero-trust controls",
      detail:
        "Comprehensive IAM strategy with RBAC, service control policies (SCPs), and permission boundaries enforcing least privilege across all workloads, service accounts, and human identities.",
    },
    {
      workstream: "Compliance automation",
      detail:
        "AWS Config rules (managed and custom) continuously evaluating resources against ZeroShield.ai security baselines and SOC 2 requirements, with automated remediation for critical findings.",
    },
  ],
  headlineStats: [
    { value: "SOC 2 Type II", label: "Audit-grade environment, certification achieved" },
    { value: "90%", label: "Reduction in manual security configuration" },
    { value: "80%", label: "Improvement in threat response time" },
  ],
  results: [
    {
      metric: "SOC 2 Type II compliance achieved",
      detail:
        "The infrastructure delivered an audit-grade security environment, enabling ZeroShield.ai to achieve SOC 2 Type II certification — a foundational requirement for its enterprise customer base.",
    },
    {
      metric: "90% less manual security configuration",
      detail:
        "Replacing fragmented, manually managed security controls with an automated, policy-driven architecture eliminated the overhead that had previously made security operations slow and error-prone.",
    },
    {
      metric: "80% faster threat response",
      detail:
        "GuardDuty and Security Hub together reduced the mean time to detect and respond to threats, giving the ZeroShield.ai security team unified, real-time visibility across their entire environment.",
    },
    {
      metric: "Centralised network control",
      detail:
        "Centralised network control via Transit Gateway and automated compliance monitoring via AWS Config eliminated the manual overhead that had previously slowed security operations.",
    },
    {
      metric: "Scalable, verifiably secure platform",
      detail:
        "The result is a scalable, verifiably secure infrastructure that supports ZeroShield.ai's mission of delivering autonomous threat defense — not just for its clients, but built into the platform itself.",
    },
  ],
  archImage: {
    src: "/case-studies/zeroshield-architecture.png",
    alt: "ZeroShield.ai AWS architecture: a Transit Gateway hub-and-spoke network with Network Firewall, WAF and Shield Advanced, GuardDuty and Security Hub for threat detection, and IAM and AWS Config enforcing zero-trust and continuous compliance.",
    width: 1676,
    height: 920,
  },
  about: ABOUT_ZEROSHIELD,
};

export const BTCWIRES: CaseStudy = {
  slug: "btcwires",
  name: "BTCWires",
  heading: "BTCWires",
  tagline: "High-availability AWS platform for a crypto & blockchain media outlet",
  tag: "Media & Real-Time",
  cardStat: "99.95% uptime · 15× traffic absorbed",
  cardBlurb:
    "A cloud-native, auto-scaling AWS platform for a crypto & blockchain news outlet — absorbing 10–15× news-driven traffic spikes with sub-second market-data freshness.",
  quickFacts: [
    { label: "Client", value: "BTCWires" },
    { label: "Industry", value: "Crypto & blockchain media" },
    { label: "Platform", value: "High-availability on AWS" },
    { label: "Engagement", value: "Architecture, build & handover" },
  ],
  overview: [
    "BTCWires is a digital media platform specialising in cryptocurrency and blockchain industry coverage. The platform delivers breaking news, in-depth editorial content, live market pricing, interactive market heatmaps, and AI-generated news summaries serving a global readership that surges dramatically during periods of crypto market volatility.",
  ],
  challengeIntro:
    "BTCWires needed a production-grade cloud platform capable of operating reliably under highly unpredictable load conditions. Crypto markets never sleep, and news-driven traffic spikes can arrive with virtually no warning, routinely reaching 10–15 times normal volume within minutes of a major market event. Key requirements included:",
  challenge: [
    "A real-time data pipeline capable of ingesting, processing and surfacing live market data — prices, volumes, heatmaps — with sub-second freshness.",
    "An application tier that could scale automatically and elastically to absorb extreme traffic spikes without degraded performance or error rates.",
    "A high-availability database layer tolerant of infrastructure failures, with no single point of failure and automatic recovery.",
    "Global delivery performance: fast page loads for readers across multiple geographies.",
    "Operational simplicity: minimal manual intervention to manage scaling, patching, or failover.",
  ],
  solutionIntro:
    "KiwiKoru designed and delivered a fully cloud-native architecture that addressed each requirement directly, combining purpose-built AWS services in a cohesive, production-hardened stack. The design used defence-in-depth for availability: ECS Fargate absorbed application-tier load spikes, Redis shielded the database from read storms, Multi-AZ RDS ensured zero downtime at the data layer, and CloudFront absorbed the majority of global read traffic at the edge — keeping origin load well within capacity even during peak events.",
  awsServices: [
    "Amazon ECS (Fargate)",
    "Amazon Kinesis",
    "Amazon ElastiCache (Redis)",
    "Amazon RDS (Multi-AZ)",
    "Amazon CloudFront",
    "Amazon Route 53",
  ],
  architecture: [
    {
      component: "Amazon ECS (Fargate)",
      role: "Container-based auto-scaling for API and rendering workloads — scales out within seconds during demand spikes with zero server-management overhead.",
    },
    {
      component: "Amazon Kinesis",
      role: "Real-time ingestion of live market-data streams — price feeds, volume events, and exchange data delivered to the platform with sub-second latency.",
    },
    {
      component: "Amazon ElastiCache (Redis)",
      role: "In-memory caching layer for market heatmaps, pricing data and AI summaries — eliminates repeated database reads and sustains high-concurrency performance.",
    },
    {
      component: "Amazon RDS (Multi-AZ)",
      role: "Highly available managed relational database with a synchronous standby replica — automatic failover with no data loss during availability-zone disruptions.",
    },
    {
      component: "Amazon CloudFront",
      role: "Global CDN serving static assets and cached API responses from edge locations closest to readers — dramatically reduces latency for international audiences.",
    },
    {
      component: "Amazon Route 53",
      role: "Latency-based DNS routing with health-check failover — automatically directs traffic to the fastest healthy endpoint at all times.",
    },
  ],
  delivered: [
    {
      workstream: "Cloud architecture design",
      detail:
        "End-to-end reference architecture for a resilient, auto-scaling media platform on AWS.",
    },
    {
      workstream: "Real-time data pipeline",
      detail:
        "Kinesis-based ingest pipeline processing live crypto price feeds, market-cap movements, and exchange volume data.",
    },
    {
      workstream: "Containerised application stack",
      detail:
        "ECS Fargate task definitions, auto-scaling policies, and CI/CD pipeline integration for zero-downtime deployments.",
    },
    {
      workstream: "Caching & performance layer",
      detail:
        "Redis cluster configuration for heatmap data, AI-generated summaries, and live pricing, with TTLs tuned per data type.",
    },
    {
      workstream: "Database & failover setup",
      detail:
        "Multi-AZ RDS provisioning with parameter tuning, read-replica configuration, and backup/restore procedures.",
    },
    {
      workstream: "CDN & DNS configuration",
      detail:
        "CloudFront distribution setup with custom origins and cache behaviours, and Route 53 latency routing with health checks.",
    },
    {
      workstream: "Observability & alerting",
      detail:
        "CloudWatch dashboards, metric alarms, and runbooks covering traffic, error rates, cache-hit ratios, and database health.",
    },
  ],
  headlineStats: [
    { value: "99.95%", label: "Platform availability (rolling 90-day)" },
    { value: "< 1 sec", label: "Median global page load" },
    { value: "15×", label: "Traffic spike absorbed, zero downtime" },
  ],
  results: [
    {
      metric: "99.95% availability",
      detail:
        "Platform availability sustained across rolling 90-day periods post-launch.",
    },
    {
      metric: "< 1 sec global page load",
      detail:
        "Median page load time for article and market-data pages globally, via CloudFront edge delivery.",
    },
    {
      metric: "15× spike absorbed",
      detail:
        "Peak traffic successfully absorbed during major crypto-market volatility events — with zero downtime.",
    },
    {
      metric: "Real-time data freshness",
      detail:
        "Live pricing, market heatmaps, and AI news summaries delivered continuously with sub-second data freshness.",
    },
  ],
  archImage: {
    src: "/case-studies/btcwires-architecture.png",
    alt: "BTCWires AWS architecture: Route 53 and CloudFront in front of an ECS Fargate application tier, a Kinesis real-time market-data pipeline, an ElastiCache (Redis) cache, and a Multi-AZ RDS database, with CloudWatch observability.",
    width: 1558,
    height: 1172,
  },
  about: ABOUT_BTCWIRES,
};

export const THINKVERSE: CaseStudy = {
  slug: "thinkverse",
  name: "ThinkVerse Labs",
  heading: "ThinkVerse Labs",
  tagline:
    "Standardised multi-account AWS landing zone for a high-volume software delivery firm",
  tag: "Cloud Governance",
  cardStat: "70% faster provisioning · 40% cost cut",
  cardBlurb:
    "A standardised, multi-account AWS landing zone for a 200+ client software firm — self-service environments, enforced governance, and per-client cost visibility.",
  quickFacts: [
    { label: "Client", value: "ThinkVerse Labs" },
    { label: "Industry", value: "Software development & IT outsourcing" },
    { label: "Platform", value: "Multi-account AWS landing zone" },
    { label: "Region", value: "Noida, India" },
  ],
  overview: [
    "ThinkVerse Labs is a custom software development and IT outsourcing firm headquartered in Noida, India. Over more than a decade, the company has delivered 500+ software projects across web, mobile, blockchain, AI, and AR/VR for 200+ clients spanning multiple geographies. With project teams operating concurrently across a growing client base, ThinkVerse Labs runs a high-throughput delivery model that demands reliable, repeatable cloud infrastructure at scale.",
  ],
  challengeIntro:
    "As ThinkVerse Labs scaled its client delivery operations, managing cloud environments across hundreds of concurrent projects became operationally complex. Key pain points included:",
  challenge: [
    "Environment sprawl — each project required isolated dev, staging, and production accounts, which were provisioned manually and inconsistently.",
    "No standardisation — infrastructure configurations varied widely across teams, leading to drift, security gaps, and cost overruns.",
    "Slow onboarding — spinning up a new client environment took several days of manual effort across multiple teams.",
    "Cost visibility — with 200+ active clients across shared and dedicated accounts, tracking spend per project or client was difficult.",
    "No governance layer — there was no centralised mechanism to enforce security policies, tagging standards, or access controls at scale.",
  ],
  solutionIntro:
    "KiwiKoru designed and implemented a standardised, multi-account cloud infrastructure platform built on AWS, enabling ThinkVerse Labs to provision, govern, and manage environments across all projects from a single operational model.",
  awsServices: [
    "AWS Organizations",
    "AWS CloudFormation StackSets",
    "AWS CodePipeline",
    "AWS CodeCommit",
    "AWS IAM",
    "Amazon S3",
    "Amazon VPC",
    "AWS Config",
  ],
  architecture: [
    {
      component: "AWS Organizations",
      role: "Structured Organizational Units (OUs) for dev, staging, and production workloads. Each client project is assigned a governed account boundary with baseline policies applied automatically at provisioning.",
    },
    {
      component: "CloudFormation StackSets",
      role: "Deployed cross-account to enforce consistent IAM roles, VPC baselines, logging configurations, and security controls — eliminating manual per-account setup.",
    },
    {
      component: "Reusable template library",
      role: "A curated library of parameterised CloudFormation templates covering 5 standard project archetypes — web applications, mobile backends, blockchain nodes, and AI workload environments. Version-controlled in CodeCommit.",
    },
    {
      component: "CodePipeline (CI/CD)",
      role: "Automated deployment pipelines running cfn-lint and cfn-nag validation, executing change sets, and deploying approved stacks — removing manual intervention from the infrastructure release process.",
    },
    {
      component: "Drift detection",
      role: "Scheduled CloudFormation drift detection across all active stacks. Configuration drift triggers alerts and requires a reviewed change set before remediation — maintaining infrastructure integrity across all environments.",
    },
    {
      component: "AWS Config & tagging",
      role: "A mandatory tagging taxonomy (client ID, project code, environment, owner) enforced via AWS Config rules, enabling precise cost attribution across the full portfolio.",
    },
  ],
  delivered: [
    {
      workstream: "Multi-account landing zone",
      detail:
        "Structured AWS Organizations with dedicated OUs and baseline SCPs applied automatically at provisioning, giving every client project a governed account boundary.",
    },
    {
      workstream: "CloudFormation StackSets",
      detail:
        "Cross-account deployment of security, networking, and logging baselines — consistent configuration across all environments without manual per-account effort.",
    },
    {
      workstream: "Reusable template library",
      detail:
        "Parameterised CloudFormation stacks for 5 standard project archetypes — version-controlled in CodeCommit with changelogs maintained per release.",
    },
    {
      workstream: "Automated CI/CD pipeline",
      detail:
        "Template linting, static analysis (cfn-lint, cfn-nag), and change-set review gates integrated into CodePipeline for zero-manual-intervention infrastructure releases.",
    },
    {
      workstream: "Drift detection framework",
      detail:
        "Scheduled drift detection with alerting and remediation workflows across all active stacks — infrastructure integrity maintained proactively.",
    },
    {
      workstream: "Tagging & cost allocation",
      detail:
        "A mandatory tagging taxonomy with AWS Config enforcement — enabling per-client cloud-spend attribution and compliance reporting for the first time.",
    },
    {
      workstream: "Runbooks & handover docs",
      detail:
        "Self-service provisioning runbooks and handover documentation enabling ThinkVerse Labs teams to spin up new environments independently.",
    },
  ],
  headlineStats: [
    { value: "70%", label: "Faster environment provisioning" },
    { value: "40%", label: "Infrastructure cost reduction" },
    { value: "< 2 hrs", label: "Developer onboarding (was days)" },
  ],
  results: [
    {
      metric: "70% faster provisioning",
      detail:
        "New client environments that previously took several days of manual effort across multiple teams now complete in under two hours using the self-service workflow.",
    },
    {
      metric: "40% cost reduction",
      detail:
        "Achieved through standardised templates, mandatory tagging, and precise cost attribution — enabling the finance team to produce per-client cloud-spend reports for the first time.",
    },
    {
      metric: "< 2 hours onboarding",
      detail:
        "Developer onboarding (previously measured in days) — the self-service account-vending pipeline lets teams provision fully configured environments without infrastructure-team involvement.",
    },
    {
      metric: "Proactive drift detection",
      detail:
        "Infrastructure drift, previously undetected until incidents occurred, is now identified and resolved proactively via scheduled detection and automated alerting.",
    },
  ],
  archImage: {
    src: "/case-studies/thinkverse-architecture.png",
    alt: "ThinkVerse Labs AWS architecture: a multi-account AWS Organizations landing zone with CloudFormation StackSets, a reusable template library in CodeCommit, a CodePipeline CI/CD flow with drift detection, and AWS Config tagging for cost governance.",
    width: 1610,
    height: 782,
  },
  about: ABOUT_THINKVERSE,
};

/**
 * Size divisor for the glass 3D headings on the case-study pages, passed to
 * <PageHeader widthPerSize>. The case-study titles are far longer than the nav
 * pages' (measured width-per-size: "ThinkVerse Labs" ≈ 7.84, "Case Studies" ≈
 * 6.27, "ThinkVerse"/"ZeroShield" ≈ 5.0, "BTCWires"/"FORKOFF" ≈ 4.6, vs the nav
 * worst case "services" ≈ 3.9). Sizing off the widest of THIS set keeps all the
 * case-study headings at one consistent letter size — and off the shared default
 * so the five nav pages' headings are not shrunk to fit these. Raising this makes
 * every case-study heading smaller; it grew from 6.2 when "ThinkVerse Labs" was
 * added.
 */
export const CASE_STUDY_HEADING_WPS = 7.8;

export const CASE_STUDIES: CaseStudy[] = [
  FORKOFF,
  ZEROSHIELD,
  BTCWIRES,
  THINKVERSE,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
