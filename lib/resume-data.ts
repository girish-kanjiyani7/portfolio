/**
 * Single source of truth for portfolio content.
 * Master: LaTeX resume (Sep 2026). Phone number is intentionally excluded.
 * Both revamp worktrees import from here so only layout differs.
 */

export interface ContactLinks {
  readonly name: string
  readonly email: string
  readonly linkedin: string
  readonly github: string
  readonly site: string
}

export interface Role {
  readonly company: string
  readonly title: string
  readonly location: string
  readonly start: string
  readonly end: string
  readonly bullets: readonly string[]
}

export interface Project {
  readonly name: string
  readonly kind: string
  readonly href?: string
  readonly stack: readonly string[]
  readonly isOpenSource: boolean
  readonly bullets: readonly string[]
}

export interface SkillGroup {
  readonly label: string
  readonly items: readonly string[]
}

export interface Education {
  readonly school: string
  readonly degree: string
  readonly graduated: string
}

export interface Activity {
  readonly event: string
  readonly role: string
  readonly location: string
  readonly bullets: readonly string[]
}

export const CONTACT: ContactLinks = {
  name: 'Girish Kanjiyani',
  email: 'girish.kanjiyani5040@gmail.com',
  linkedin: 'https://www.linkedin.com/in/girish-kanjiyani/',
  github: 'https://github.com/girish-kanjiyani7',
  site: 'https://girish-kanjiyani7.github.io/portfolio/',
}

export const EXPERIENCE: readonly Role[] = [
  {
    company: 'GE Appliances',
    title: 'Software Engineer (Automation)',
    location: 'Louisville, KY',
    start: 'Jan 2026',
    end: 'Present',
    bullets: [
      "Identified that GitHub Copilot's MCP access was disabled company wide due to a security registry conflict, independently migrated to OpenAI Codex with MCP configured locally, and enabled Codex to visually observe live Playwright browser sessions in real time, cutting test authoring time from 90-100 minutes per feature to under 2 minutes.",
      'Developed a C/C++ library for machine vision based automated navigation and verification of smart appliance UIs, using OpenCV and Tesseract OCR for raw text extraction and image template matching.',
      'Architected and shipped a TypeScript/Playwright end-to-end test automation framework from scratch, completing functional testing prior to code review, and reducing regression testing time from 2 days to 4 minutes.',
      'Found a production Timestream query fetching all records before date filtering, causing response time to degrade with data volume; wrote and optimized a corrected SQL query, achieving a 40-60% reduction in execution time across all date ranges.',
      'Investigated a sequential PII decryption bottleneck on a core Admin API endpoint through systematic root-cause analysis, diagnosing the discrepancy and recommending a parallel processing solution that cut API response time by 60% after implementation.',
    ],
  },
  {
    company: 'Syracuse University',
    title: 'Software Engineer',
    location: 'Syracuse, NY',
    start: 'Jun 2025',
    end: 'Dec 2025',
    bullets: [
      'Built developer productivity APIs and automation tools in Flask for streamlined session management and research data workflows, improving accessibility for 10+ lab users.',
      'Improved export speed by 35% by optimizing nested loops and switching to faster JSON serialization, reducing wait times for large dataset exports.',
      'Wrote and tuned few-shot prompts for support-ticket severity classification, improving accuracy on a 200-example test set from 71% to 84%.',
    ],
  },
  {
    company: 'JMA Wireless',
    title: 'Software Development Engineer',
    location: 'Syracuse, NY',
    start: 'Mar 2025',
    end: 'May 2025',
    bullets: [
      'Architected a Python serverless ingestion pipeline on AWS Lambda and S3, processing 25K+ fan-feedback logs per month for 1M+ users while cutting projected AWS costs by 71%.',
      'Migrated an NLP sentiment classification system from Lambda to auto-scaling EC2 Docker containers, reducing insight-extraction time by 90% (from days to hours).',
      'Implemented correlation ID-based structured logging in CloudWatch Insights, reducing P95 cold-start latency by 50%.',
    ],
  },
  {
    company: 'Syracuse University — Data Engineering Lab',
    title: 'Research Assistant',
    location: 'Syracuse, NY',
    start: 'Feb 2024',
    end: 'Apr 2024',
    bullets: [
      'Built ingestion and validation pipelines processing 2.1TB of raw genomic data across millions of genetic markers, with automated quality assessment built into the pipeline to verify data integrity before downstream use.',
      'Parallelized and refactored monolithic Python scripts, boosting pipeline execution speed by 30% and accelerating research cycles for 3 interdisciplinary teams.',
    ],
  },
  {
    company: 'WaytoWeb Pvt. Ltd.',
    title: 'Software Engineer Intern',
    location: 'India',
    start: 'Dec 2022',
    end: 'May 2023',
    bullets: [
      'Developed RESTful APIs with Django and MySQL powering 5 internal dashboards, including a role-based access control (RBAC) system across 5 cross-functional teams, delivering real-time business intelligence to 30+ daily users.',
      'Cut peak API latency by 500ms+ through ORM query optimization and MySQL indexing.',
    ],
  },
]

export const PROJECTS: readonly Project[] = [
  {
    name: 'claude-mem',
    kind: 'AI agent persistent-memory plugin',
    href: 'https://github.com/girish-kanjiyani7/claude-mem',
    stack: ['TypeScript', 'MCP'],
    isOpenSource: true,
    bullets: [
      'Built the /handoff skill using a 3-layer MCP retrieval workflow (search → timeline → observations) grounded in real recorded session data to enable accurate session resumption.',
      'Diagnosed and fixed a silent data-loss bug caused by a faulty truthiness check, tightening the validation logic and adding a fallback path to prevent recurrence across all session flows.',
    ],
  },
  {
    name: 'everything-claude-code',
    kind: 'AI coding-agent tooling',
    href: 'https://github.com/girish-kanjiyani7/everything-claude-code/tree/main',
    stack: ['Claude Code', 'Cursor', 'Codex', 'Gemini'],
    isOpenSource: true,
    bullets: [
      'Added GitHub Copilot support to a multi-tool AI agent plugin, integrating multiple LLM interfaces into one workflow across 520+ lines and 10 files in a merged PR, and authored an OWASP-aligned security-review prompt used across code generation and review.',
    ],
  },
  {
    name: 'Researchr-Space',
    kind: 'Full-stack medical research platform',
    href: 'https://researchr.space',
    stack: ['React', 'Node.js', 'Supabase'],
    isOpenSource: false,
    bullets: [
      'Built a full-stack platform adopted by four medical school research teams, compressing initial release cycle from 3 months to 5 weeks through iterative development and continuous testing.',
      'Engineered rate-limited Edge Functions and secure API proxying, cutting data parsing failures by 90% and maintaining 99.9%+ uptime.',
    ],
  },
  {
    name: 'Mon Tracker',
    kind: 'Personal finance tracker',
    href: 'https://mon-tracker-nu.vercel.app/',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    isOpenSource: false,
    bullets: [
      'Built a self-hosted finance app syncing real bank transactions via the Plaid API with cursor-based incremental sync across a 12K-line TypeScript codebase backed by 149 unit tests, deployed on Vercel with Supabase as the production database.',
      'Engineered a three-step Plaid token exchange flow keeping sensitive credentials server-side, with Google OAuth single-owner auth via NextAuth v5 and route-level middleware protection.',
    ],
  },
  {
    name: 'AI-Powered Wellness Platform',
    kind: 'Claude-backed meditation recommendations',
    href: 'https://yaron-spirit.vercel.app/',
    stack: ['Claude API', 'Next.js', 'Supabase', 'n8n', 'VoxCPM'],
    isOpenSource: false,
    bullets: [
      'Engineered a Claude API integration using structured tool use, enforcing strict JSON schema output to guarantee verified, well-formed responses rather than free-form LLM text, with every interaction logged to an observability table tracking tokens, latency, and cache hits.',
      'Used n8n to build workflow automations that deliver recommendations and sync data between services, cutting inference costs with prompt caching on repeated calls.',
    ],
  },
  {
    name: 'LeetHub-3.0',
    kind: 'Chrome extension',
    stack: ['JavaScript', 'Chrome Extension APIs'],
    isOpenSource: true,
    bullets: [
      'Shipped a timestamp-based versioning feature in JavaScript and Chrome Extension APIs to 10K+ daily active users following collaborative code review with the project maintainer.',
    ],
  },
]

export const EDUCATION: readonly Education[] = [
  {
    school: 'Syracuse University',
    degree: 'Master of Science in Computer Science',
    graduated: 'May 2025',
  },
]

export const ACTIVITIES: readonly Activity[] = [
  {
    event: 'Build with Open WebUI — GE Appliances Internal Event',
    role: 'Informal Mentor (participated twice)',
    location: 'Louisville, KY',
    bullets: [
      'Invited back for a second event by the host to help attendees automate daily manual tasks with Open WebUI, after being recognized for skill shown at the first event; helped 3 non-engineering attendees build dashboards from their own spreadsheets.',
      'Built a manager a dashboard visualizing hour allocation from previously manual timesheet reports, cutting his time on that task from roughly 5 hours to about 10 minutes and saving an estimated couple thousand dollars in labor cost.',
    ],
  },
]

export const SKILLS: readonly SkillGroup[] = [
  {
    label: 'Generative AI & LLM Integration',
    items: [
      'Claude API',
      'Claude Code',
      'GitHub Copilot',
      'OpenAI Codex',
      'Agent-driven automation workflows',
      'Structured tool use',
      'JSON schema enforcement',
    ],
  },
  { label: 'Languages', items: ['Python', 'C/C++', 'TypeScript/JavaScript', 'Java', 'Go'] },
  {
    label: 'Databases & SQL',
    items: ['SQL query writing/optimization', 'MySQL', 'PostgreSQL', 'DynamoDB', 'Relational database design'],
  },
  {
    label: 'Testing & Support',
    items: ['Functional Testing', 'Playwright', 'Pytest', 'Root-Cause Analysis', 'Code Review'],
  },
  {
    label: 'Data Structures & Systems',
    items: ['Algorithms', 'Data pipelines', 'AWS', 'Docker', 'CI/CD'],
  },
  { label: 'Practices', items: ['Git', 'Agile/Scrum', 'OOP', 'TDD'] },
]
