export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  summary: string;
  result: string;
  tags: string[];
  role: string;
  timeline: string;
  sector: string;
  focus: string;
  challenge: string;
  constraints: string[];
  architecture: { label: string; detail: string }[];
  delivery: { title: string; description: string }[];
  outcomes: { title: string; description: string }[];
  lessons: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aws-genai-support-platform",
    category: "AWS / GenAI Platform",
    title: "Secure GenAI Member Support on AWS",
    tagline:
      "An end-to-end AWS platform for conversational AI and AI-assisted support in a regulated environment.",
    summary:
      "Built and operated the cloud foundation for GenAI-enabled member support workflows, connecting Amazon Connect, event-driven services, container workloads, data stores, and operational guardrails.",
    result: "Production-ready AI support workflows",
    tags: ["AWS", "Amazon Connect", "Lambda", "ECS", "Terraform"],
    role: "Senior Cloud / DevOps Engineer",
    timeline: "Enterprise cloud and GenAI delivery",
    sector: "Regulated healthcare",
    focus: "GenAI enablement and platform reliability",
    challenge:
      "Member-facing support teams needed faster, more intelligent service experiences without weakening security, auditability, or availability. The platform had to support real-time conversations, AI-assisted workflows, and multiple integration paths while still meeting the controls required in a regulated healthcare environment.",
    constraints: [
      "AI-enabled services required governance, approval, and audit alignment.",
      "Conversational support needed secure integrations with enterprise systems.",
      "The workload ran across multiple environments and needed repeatable releases.",
      "Operations had to cover cloud and on-premises dependencies.",
      "Manual server lifecycle work could not keep up with the platform.",
    ],
    architecture: [
      {
        label: "Engagement",
        detail:
          "Amazon Connect routes member conversations and exposes real-time agent metrics.",
      },
      {
        label: "Orchestration",
        detail:
          "Lambda and messaging services coordinate AI-assisted workflows and backend integrations.",
      },
      {
        label: "AI runtime",
        detail:
          "Container services on ECS and Kubernetes host conversational and support workloads.",
      },
      {
        label: "Data flow",
        detail:
          "S3, EFS, RDS, Kinesis, SQS, and SNS move content, state, and events between services.",
      },
      {
        label: "Controls",
        detail:
          "IAM, secrets management, audit logging, CloudWatch, Prometheus, and Grafana protect and observe the platform.",
      },
    ],
    delivery: [
      {
        title: "Standardized AWS foundations",
        description:
          "Provisioned VPC, IAM, compute, storage, and database patterns with Terraform, CloudFormation, and Ansible across multiple environments.",
      },
      {
        title: "Event-driven AI integration",
        description:
          "Connected service workflows with Lambda, Kinesis, SQS, and SNS so support events could move without tight coupling.",
      },
      {
        title: "Container delivery",
        description:
          "Packaged services with Docker and delivered them through Jenkins, ECS, Kubernetes, and CodeDeploy with controlled release paths.",
      },
      {
        title: "Responsible AI guardrails",
        description:
          "Built environment standards for secrets, logging, IAM boundaries, approvals, and auditability before AI workloads reached production.",
      },
      {
        title: "Reliability engineering",
        description:
          "Automated server lifecycle and recovery, applied patching, and used CloudWatch, Prometheus, Grafana, and Kafka metrics to find issues early.",
      },
    ],
    outcomes: [
      {
        title: "AI support ready",
        description:
          "Created a secure platform foundation for conversational AI and AI-assisted member service workflows.",
      },
      {
        title: "Governance built in",
        description:
          "Aligned infrastructure and releases with enterprise approval, governance, and audit expectations.",
      },
      {
        title: "Less manual work",
        description:
          "Automated infrastructure creation, server rehydration, deployment, and recovery with IaC and configuration management.",
      },
      {
        title: "Clear operations",
        description:
          "Connected platform metrics, application events, and dashboards so teams could trace health and upstream and downstream traffic.",
      },
    ],
    lessons: [
      "AI platforms need the same operational discipline as any regulated production system.",
      "Security and audit guardrails work best when they are part of the platform baseline.",
      "Automating recovery and server lifecycle removes a major source of operational risk.",
      "Observability has to connect application behavior with the cloud and network layer.",
    ],
    stack: [
      "AWS VPC",
      "EC2",
      "ECS",
      "ECR",
      "Lambda",
      "S3",
      "EFS",
      "RDS",
      "Kinesis",
      "SQS",
      "SNS",
      "CloudWatch",
      "IAM",
      "Amazon Connect",
      "Terraform",
      "CloudFormation",
      "Ansible",
      "Python",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "Kafka",
    ],
  },
  {
    slug: "gcp-genai-platform",
    category: "GCP / GenAI Enablement",
    title: "GCP Platform for Conversational AI and GenAI Workloads",
    tagline:
      "A secure, automated Google Cloud delivery platform for conversational AI, analytics, and microservices.",
    summary:
      "Designed GCP infrastructure and delivery patterns using GKE, Cloud Run, Pub/Sub, and BigQuery while hardening IAM, secrets, audit logging, and environment controls.",
    result: "40% faster infrastructure delivery",
    tags: ["GCP", "GKE", "Cloud Run", "BigQuery", "Terraform"],
    role: "Senior Cloud Engineer",
    timeline: "Cloud migration and AI platform delivery",
    sector: "Enterprise technology and AI workloads",
    focus: "Secure delivery, analytics, and scalable AI services",
    challenge:
      "The platform needed to support conversational AI and microservices on Google Cloud while keeping networking, data flow, deployment, and security predictable across teams. Application groups also needed a faster path from code commit to a controlled production release.",
    constraints: [
      "Teams needed a repeatable platform instead of project-specific infrastructure.",
      "AI and microservice workloads required secure service-to-service access.",
      "Data had to move between operational services and analytics.",
      "Release processes needed automation without losing review and approval controls.",
      "Monitoring had to cover platform health, resource usage, and abnormal behavior.",
    ],
    architecture: [
      {
        label: "AI runtime",
        detail:
          "GKE and Cloud Run host containerized conversational AI and microservice workloads.",
      },
      {
        label: "Event backbone",
        detail:
          "Pub/Sub decouples services and supports asynchronous AI and data workflows.",
      },
      {
        label: "Data layer",
        detail:
          "Cloud SQL and Cloud Storage provide managed relational and object storage.",
      },
      {
        label: "Analytics",
        detail:
          "BigQuery supports data exploration, operational reporting, and platform insight.",
      },
      {
        label: "Security",
        detail:
          "IAM hardening, secret management, audit logging, and environment guardrails protect the platform.",
      },
      {
        label: "Delivery",
        detail:
          "Jenkins, Terraform, Google Deployment Manager, Docker, and Helm automate releases.",
      },
    ],
    delivery: [
      {
        title: "GCP foundation as code",
        description:
          "Designed and deployed Compute Engine, Cloud Storage, Cloud SQL, and VPC networking with Terraform and Google Deployment Manager.",
      },
      {
        title: "Kubernetes and serverless delivery",
        description:
          "Ran microservices on GKE and Cloud Run, using Docker images and Helm charts for repeatable deployments.",
      },
      {
        title: "Event and analytics integration",
        description:
          "Used Pub/Sub and BigQuery to connect service events with data pipelines and operational reporting.",
      },
      {
        title: "Security and environment controls",
        description:
          "Implemented IAM hardening, secret management, audit logging, and environment-level guardrails for AI services.",
      },
      {
        title: "Intelligent operations",
        description:
          "Applied predictive scaling, intelligent alerting, and anomaly detection patterns with Prometheus and Grafana visibility.",
      },
    ],
    outcomes: [
      {
        title: "40% faster delivery",
        description:
          "Automated infrastructure provisioning and CI/CD workflows reduced deployment time by 40%.",
      },
      {
        title: "Standard GKE path",
        description:
          "Created a repeatable way to deploy and scale containerized services on Google Cloud.",
      },
      {
        title: "Secure AI platform",
        description:
          "Added IAM, secret, audit, and environment controls for conversational AI workloads.",
      },
      {
        title: "Proactive operations",
        description:
          "Improved visibility into resource usage, scaling behavior, and service anomalies.",
      },
    ],
    lessons: [
      "A cloud platform succeeds when runtime, network, secrets, and delivery are designed together.",
      "Event-driven patterns make AI workloads easier to scale and operate.",
      "Analytics and operational data should not live in separate worlds.",
      "Security automation is a delivery feature, not a review step at the end.",
    ],
    stack: [
      "Compute Engine",
      "Cloud Storage",
      "Cloud SQL",
      "VPC",
      "GKE",
      "Cloud Run",
      "Pub/Sub",
      "BigQuery",
      "IAM",
      "Google Deployment Manager",
      "Terraform",
      "Jenkins",
      "Docker",
      "Helm",
      "Prometheus",
      "Grafana",
      "Python",
    ],
  },
  {
    slug: "azure-ai-services-platform",
    category: "Azure / Cloud Platform",
    title: "Azure Foundation for AI-Enabled Enterprise Services",
    tagline:
      "A compact Azure platform pattern for secure identity, messaging, secrets, APIs, and managed data services.",
    summary:
      "Built cloud-native Azure foundations using Azure AD, Key Vault, Functions, Service Bus, API Management, AKS, and managed data services to support secure enterprise integrations.",
    result: "Secure Azure integration foundation",
    tags: ["Azure", "AKS", "Key Vault", "Service Bus", "Functions"],
    role: "Senior Cloud Engineer",
    timeline: "Multi-cloud platform delivery",
    sector: "Enterprise technology",
    focus: "Identity, messaging, secrets, and managed data",
    challenge:
      "Application teams needed a secure Azure path for service-to-service messaging, API access, secrets, identity, and managed data without creating a new operational model for every project.",
    constraints: [
      "Identity and secrets needed consistent controls across services.",
      "Messaging and APIs needed secure integration boundaries.",
      "Data services had to support both relational and document workloads.",
      "AKS workloads needed a repeatable deployment path.",
    ],
    architecture: [
      {
        label: "Identity",
        detail:
          "Azure AD and Key Vault establish access boundaries and secret handling.",
      },
      {
        label: "Integration",
        detail:
          "Azure Functions, Service Bus, and API Management connect applications and events.",
      },
      {
        label: "Data",
        detail:
          "Azure SQL, Cosmos DB, Blob Storage, and Azure Files support managed data workloads.",
      },
      {
        label: "Runtime",
        detail:
          "AKS provides a container platform for cloud-native services.",
      },
      {
        label: "Operations",
        detail:
          "Azure Monitor, Log Analytics, and Application Insights provide visibility and troubleshooting.",
      },
    ],
    delivery: [
      {
        title: "Identity and secrets baseline",
        description:
          "Standardized Azure AD access patterns and Key Vault usage for service credentials and configuration.",
      },
      {
        title: "Messaging and API integration",
        description:
          "Connected event and request flows with Functions, Service Bus, and API Management.",
      },
      {
        title: "Managed data services",
        description:
          "Used Azure SQL, Cosmos DB, Blob Storage, and Azure Files for different persistence needs.",
      },
      {
        title: "Container delivery on AKS",
        description:
          "Packaged cloud-native services with Docker and Kubernetes for repeatable deployment and scaling.",
      },
    ],
    outcomes: [
      {
        title: "Secure integration",
        description:
          "Created a clearer path for identity, secrets, messaging, and API connectivity.",
      },
      {
        title: "Managed data choices",
        description:
          "Matched relational, document, file, and object workloads to the right Azure services.",
      },
      {
        title: "Repeatable runtime",
        description:
          "Established AKS as a consistent platform for containerized services.",
      },
      {
        title: "Better visibility",
        description:
          "Used Azure monitoring tools to improve service health and troubleshooting.",
      },
    ],
    lessons: [
      "Identity and secrets should be standardized before service integration grows.",
      "Messaging and API patterns become easier when teams share the same platform model.",
      "Container platforms are more useful when deployment and observability are part of the design.",
    ],
    stack: [
      "Azure AD",
      "Key Vault",
      "Azure Functions",
      "Service Bus",
      "API Management",
      "Blob Storage",
      "Azure Files",
      "Azure SQL",
      "Cosmos DB",
      "AKS",
      "Azure Monitor",
      "Log Analytics",
      "Application Insights",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    slug: "on-prem-fastapi-ai-platform",
    category: "On-Prem / AI Integration",
    title: "FastAPI Delivery on Hydra / EPaaS with Vault and Self-Service Promotion",
    tagline:
      "An on-premises delivery pattern for FastAPI services, Vault-backed secrets, AI API calls, and use case team-owned artifact and config promotion.",
    summary:
      "Built a Hydra / EPaaS delivery workflow for FastAPI services using Vault for runtime secrets, upstream AI application and API integration, and self-service promotion of the same artifact and environment config into production.",
    result: "Use case teams promote their own artifacts and config",
    tags: ["FastAPI", "Hydra", "EPaaS", "Vault", "Self-Service"],
    role: "Cloud / DevOps Engineer",
    timeline: "On-prem platform delivery",
    sector: "Internal enterprise platform",
    focus: "Vault-backed delivery, team-owned promotion, and AI API integration",
    challenge:
      "Use case teams needed to deploy and promote their own FastAPI artifacts and environment config, including project log streams and metrics, without waiting on the platform team for every release. Runtime secrets needed to come from Vault, and the service still had to call upstream AI applications and APIs safely.",
    constraints: [
      "Vault was the approved source for runtime secrets.",
      "Use case teams needed to promote their own artifacts from lower environments to production.",
      "The same immutable artifact needed to move through the promotion path.",
      "Environment config included project log streams and metrics.",
      "AI API calls needed timeouts, retries, and clear failure handling.",
      "Production promotion needed guardrails, traceability, and rollback options.",
    ],
    architecture: [
      {
        label: "Build",
        detail:
          "The FastAPI service is packaged as a versioned container image and stored in the artifact registry.",
      },
      {
        label: "Vault",
        detail:
          "Runtime secrets are pulled from Vault instead of source code, deployment config, or image layers.",
      },
      {
        label: "Hydra",
        detail:
          "Hydra deployment manifests define how the FastAPI service starts in each environment.",
      },
      {
        label: "EPaaS",
        detail:
          "The EPaaS runtime hosts the service and provides the on-prem execution environment.",
      },
      {
        label: "Team promotion",
        detail:
          "Use case teams promote their own artifact and environment config from lower environments to production.",
      },
      {
        label: "Config",
        detail:
          "Project log streams and metrics settings move with the release as controlled environment config.",
      },
      {
        label: "AI integration",
        detail:
          "FastAPI calls upstream AI applications and APIs with controlled timeouts and failure handling.",
      },
    ],
    delivery: [
      {
        title: "Immutable FastAPI artifact",
        description:
          "Containerized the service with Docker and stored a versioned image so every environment received the same tested build.",
      },
      {
        title: "Vault-backed secrets",
        description:
          "Connected FastAPI to Vault for runtime secret retrieval and removed credentials and API keys from source control and images.",
      },
      {
        title: "Hydra / EPaaS deployment",
        description:
          "Created deployment configuration for Hydra and the EPaaS runtime with environment-specific settings kept outside the application.",
      },
      {
        title: "Self-service artifact promotion",
        description:
          "Defined a release flow where use case teams promoted the same image from development and testing into production with review gates.",
      },
      {
        title: "Project config promotion",
        description:
          "Included project log streams and metrics configuration in the promotion path so observability settings followed the release.",
      },
      {
        title: "AI application integration",
        description:
          "Connected FastAPI endpoints to AI applications and APIs using timeouts, retries, and clear error responses.",
      },
    ],
    outcomes: [
      {
        title: "Secrets stored in Vault",
        description:
          "Runtime secret retrieval moved API keys and credentials into the approved Vault path.",
      },
      {
        title: "Teams own promotion",
        description:
          "Use case teams could promote their own artifacts instead of depending on the platform team for every release.",
      },
      {
        title: "Config moves with release",
        description:
          "Project log streams and metrics settings were promoted as controlled environment configuration.",
      },
      {
        title: "One artifact to production",
        description:
          "Promoted the same container image across environments, reducing build drift and release risk.",
      },
      {
        title: "Reliable AI calls",
        description:
          "Added controlled timeout and retry behavior around upstream AI applications and APIs.",
      },
      {
        title: "Controlled releases",
        description:
          "Used deployment checks, traceability, and rollback options before production promotion.",
      },
    ],
    lessons: [
      "Runtime secrets should come from Vault, never from source code or image layers.",
      "Promoting one immutable artifact is safer than rebuilding code for every environment.",
      "Use case teams move faster when they own promotion with clear platform guardrails.",
      "Project log streams and metrics should be treated as part of the release config.",
      "AI integrations need the same resilience controls as any other external dependency.",
    ],
    stack: [
      "FastAPI",
      "Python",
      "Docker",
      "Hydra",
      "EPaaS",
      "Vault",
      "Artifact Registry",
      "Project Log Streams",
      "Metrics Configuration",
      "CI/CD Pipeline",
      "Prometheus",
      "Grafana",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}