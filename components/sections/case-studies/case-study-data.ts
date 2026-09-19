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
  slug: "forkoff" | "zeroshield";
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

/**
 * Size divisor for the glass 3D headings on the case-study pages, passed to
 * <PageHeader widthPerSize>. The case-study titles are far longer than the nav
 * pages' (measured width-per-size: "Case Studies" ≈ 6.05, "ZeroShield" ≈ 5.0,
 * "FORKOFF" ≈ 4.6, vs the nav worst case "services" ≈ 3.9). Sizing off the
 * widest of THIS set (with a small safety margin) keeps all three case-study
 * headings at one consistent letter size — and, crucially, keeps them off the
 * shared default so the five nav pages' headings are not shrunk to fit these.
 */
export const CASE_STUDY_HEADING_WPS = 6.2;

export const CASE_STUDIES: CaseStudy[] = [FORKOFF, ZEROSHIELD];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
