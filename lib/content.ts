import {
  Code2,
  Cpu,
  Database,
  Network,
  Server,
  ShieldCheck,
  Trophy
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LinkItem = {
  label: string;
  href: string;
};

export type MediaItem = {
  src: string;
  alt: string;
  group: string;
  sourceFolder: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  role: string;
  summary: string;
  impact: string[];
  stackLogos: StackLogo[];
  tags: string[];
  links: LinkItem[];
  media: MediaItem[];
};

export type StackLogo = {
  label: string;
  icon: string;
  wordmark?: boolean;
};

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  outcome: string;
  details: string;
  media: MediaItem[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type GalleryGroup = {
  id: string;
  title: string;
  sourceFolder: string;
  description: string;
  media: MediaItem[];
};

const resume = "/assets/resume";

const item = (
  group: string,
  file: string,
  alt: string,
  sourceFolder: string
): MediaItem => ({
  src: `${resume}/${group}/${file}`,
  alt,
  group,
  sourceFolder
});

const buildGroup = (
  id: string,
  title: string,
  sourceFolder: string,
  description: string,
  files: string[],
  altBase: string
): GalleryGroup => ({
  id,
  title,
  sourceFolder,
  description,
  media: files.map((file, index) =>
    item(id, file, `${altBase}, image ${index + 1}`, sourceFolder)
  )
});

const smartVoting = buildGroup(
  "smart-voting-machine",
  "Smart Voting Machine",
  "SmartVotingMachine",
  "Embedded voting hardware, dashboard, wiring, and prototype evidence.",
  [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
    "07.jpeg",
    "08.jpeg",
    "09.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg"
  ],
  "Smart Voting Machine prototype"
);

const networkTrack = buildGroup(
  "network-track",
  "Huawei ICT Network Track",
  "Network Track",
  "Official Huawei ICT Competition national final result document.",
  ["01.jpeg"],
  "Huawei ICT Competition Network Track result"
);

const ceNetOps = buildGroup(
  "ce-group1-netops",
  "CE-Group1-NetOps",
  "CE-Group1-NetOps",
  "Physical network, rack hardware, Cisco equipment, monitoring, and SOC infrastructure evidence.",
  [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
    "07.jpeg",
    "08.jpeg",
    "09.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg"
  ],
  "CE-Group1-NetOps infrastructure"
);

const biaArchive = buildGroup(
  "bia-archive",
  "Archives BIA",
  "BIA-archive",
  "Screenshots from the live Buddhadasa Indapanno Archives platform.",
  [
    "01.jpeg",
    "02.png",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.jpeg",
    "08.png",
    "09.png"
  ],
  "Archives BIA interface"
);

const icpc2024 = buildGroup(
  "icpc-2024",
  "ICPC Thailand National Round 2024",
  "ICPC Thailand National Round 2024",
  "Contest media from ICPC Thailand National Round 2024.",
  ["01.jpeg", "02.jpeg", "03.jpeg"],
  "ICPC Thailand National Round 2024"
);

const cyberTopTalent = buildGroup(
  "thailand-cyber-top-talent-2025",
  "Thailand Cyber Top Talent 2025",
  "Thailand Cyber Top Talent 2025",
  "Final-round CTF proof, team media, scoreboard, and venue photos.",
  ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"],
  "Thailand Cyber Top Talent 2025"
);

const icpc2025 = buildGroup(
  "icpc-2025",
  "ICPC Thailand National Round 2025",
  "ICPC Thailand National Round 2025",
  "Contest media from ICPC Thailand National Round 2025.",
  ["01.jpeg", "02.jpeg"],
  "ICPC Thailand National Round 2025"
);

const ctfBootCamp = buildGroup(
  "ctf-boot-camp-2025",
  "CTF Boot Camp 2025",
  "Cybersecurity Training",
  "Hands-on CTF training media from NCSA cybersecurity boot camp.",
  ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg"],
  "CTF Boot Camp 2025"
);

const barcamp = buildGroup(
  "barcamp-songkhla",
  "Barcamp Songkhla 9 and 10",
  "Event Organizer - Barcamp Songkhla 9 & 10",
  "Event organizer activity proof from Barcamp Songkhla.",
  [
    "01.jpeg",
    "02.jpeg",
    "03.jpeg",
    "04.jpeg",
    "05.jpeg",
    "06.jpeg",
    "07.jpeg"
  ],
  "Barcamp Songkhla organizer activity"
);

const psuOpenApi = buildGroup(
  "psu-open-api-contest",
  "PSU Open API Contest",
  "PSU Open API Contest",
  "Presentation and award media for PSU Calendar.",
  ["01.jpeg", "02.jpeg", "03.jpeg"],
  "PSU Open API Contest presentation"
);

const wise = buildGroup(
  "wise",
  "Wise Review Platform",
  "wise",
  "Screenshots from the Wise review and gallery platform.",
  ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png"],
  "Wise Review Platform interface"
);

const ivory = buildGroup(
  "ivory-blockchain",
  "IVORY Blockchain",
  "IVORY blockchain",
  "Web3 archive platform screenshots for Sui, Walrus, wallet auth, and dashboard work.",
  ["01.png", "02.jpg", "03.png"],
  "IVORY blockchain interface"
);

const certifications = buildGroup(
  "certifications",
  "Certifications",
  "cert",
  "Certification proof from Cisco, Huawei, Alibaba Cloud, NCSA, and CTF programs.",
  [
    "ctf-boot-camp.jpeg",
    "swu-capture-the-flag-2025.jpeg",
    "thailand-cyber-talent-2025.jpeg",
    "huawei-development-basic-cloud-computing.jpeg",
    "basic-cybersecurity.jpeg",
    "huawei-principles-cloud-computing.jpeg",
    "networking-essentials.jpeg",
    "huawei-cloud-basics-cra.jpeg",
    "fundamentals-cloud-computing.jpeg",
    "alibaba-cloud-certified-associate.jpeg",
    "huawei-next-generation-cyber-security.jpeg"
  ],
  "Certification"
);

export const galleryGroups: GalleryGroup[] = [
  biaArchive,
  wise,
  psuOpenApi,
  smartVoting,
  ceNetOps,
  ivory,
  networkTrack,
  cyberTopTalent,
  ctfBootCamp,
  icpc2025,
  icpc2024,
  certifications,
  barcamp
];

export const allMedia = galleryGroups.flatMap((group) => group.media);

export const profile = {
  name: "Phodcharaphon Sukonsakun",
  role: "Full-stack engineering intern",
  school: "Computer Engineering, Prince of Songkla University",
  gpa: "GPA 3.66",
  email: "patt502090@hotmail.com",
  github: "https://github.com/patt502090",
  linkedin: "https://www.linkedin.com/in/patt502090/",
  resume: "/assets/documents/resume-phodcharaphon-sukonsakun.pdf",
  summary:
    "I build production web systems, typed APIs, and hardware-backed software. My strongest work sits where full-stack engineering meets backend architecture, infrastructure, cybersecurity, and embedded devices."
};

export const proofPoints = [
  "Led backend work on Archives BIA, a live public archive platform.",
  "Built typed full-stack products with Next.js, NestJS, PostgreSQL, Redis, and tRPC.",
  "Placed Top 5 in Huawei ICT Competition Network Track national final.",
  "Placed 6th in Thailand Cyber Top Talent 2025 final round and 1st in Southern region."
];

export const projects: Project[] = [
  {
    slug: "archives-bia",
    title: "Enterprise Digital Archive Platform, Archives BIA",
    kicker: "Production archive system",
    period: "Aug 2025 to present",
    role: "Backend lead and full-stack contributor",
    summary:
      "A live digital archive for Buddhadasa Indapanno Archives, built for document ingestion, archival metadata, public discovery, and internal operations.",
    impact: [
      "Coordinated backend architecture decisions, codebase conventions, and task delegation across the engineering team.",
      "Built an asynchronous ingestion pipeline with BullMQ and Redis to avoid gateway timeouts while supporting continuous uploads into an archive totaling over 500,000 files.",
      "Designed REST APIs, ISAD-G metadata models, PostgreSQL queries, and materialized views for recursive archive trees."
    ],
    stackLogos: [
      { label: "NestJS", icon: "/assets/stack/nestjs.svg" },
      { label: "PostgreSQL", icon: "/assets/stack/postgresql.svg" },
      { label: "Redis", icon: "/assets/stack/redis.svg" },
      { label: "MinIO", icon: "/assets/stack/minio.svg" }
    ],
    tags: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "MinIO",
      "REST APIs",
      "Materialized views"
    ],
    links: [
      {
        label: "Open live site",
        href: "https://bia-archive.psu.ac.th/"
      }
    ],
    media: biaArchive.media
  },
  {
    slug: "wise-review-platform",
    title: "Wise Review Platform",
    kicker: "Image review and gallery web app",
    period: "Feb 2025 to Oct 2025",
    role: "Full-stack developer",
    summary:
      "A review and gallery platform for Suvarnabhumi Knowledge Base, focused on image browsing, detail views, and smooth content discovery.",
    impact: [
      "Built a masonry-style gallery with lazy loading and skeleton states for large visual datasets.",
      "Implemented image preview modals and detail transitions with Framer Motion.",
      "Integrated tRPC for type-safe client and server API communication."
    ],
    stackLogos: [
      { label: "Next.js", icon: "/assets/stack/nextdotjs.svg" },
      { label: "React", icon: "/assets/stack/react.svg" },
      { label: "TypeScript", icon: "/assets/stack/typescript.svg" },
      { label: "tRPC", icon: "/assets/stack/trpc.svg" },
      { label: "Framer Motion", icon: "/assets/stack/framer.svg" }
    ],
    tags: ["Next.js", "React", "TypeScript", "tRPC", "Framer Motion", "Gallery UX"],
    links: [
      {
        label: "Open live site",
        href: "https://trip.psu.ac.th/review/en"
      }
    ],
    media: wise.media
  },
  {
    slug: "psu-calendar",
    title: "PSU Calendar",
    kicker: "University calendar and API integration",
    period: "Jun 2024",
    role: "Team apup, 1st runner-up",
    summary:
      "A university scheduling application built for the PSU Open API Contest, connecting university data, events, OAuth login, and Google Calendar workflows.",
    impact: [
      "Delivered a working calendar product under contest time constraints.",
      "Built a Next.js client with calendar views and a NestJS service layer for event and schedule data.",
      "Presented the system as a centralized scheduling workflow for university users."
    ],
    stackLogos: [
      { label: "Next.js", icon: "/assets/stack/nextdotjs.svg" },
      { label: "NestJS", icon: "/assets/stack/nestjs.svg" },
      { label: "TypeScript", icon: "/assets/stack/typescript.svg" },
      { label: "Google Calendar", icon: "/assets/stack/googlecalendar.svg" },
      { label: "SQLite", icon: "/assets/stack/sqlite.svg" }
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "OAuth", "Google Calendar", "SQLite"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/patt502090/PSUCalendar"
      }
    ],
    media: [psuOpenApi.media[2], psuOpenApi.media[0], psuOpenApi.media[1]]
  },
  {
    slug: "smart-voting-machine",
    title: "Smart Voting Machine",
    kicker: "Embedded system with live dashboard",
    period: "2025",
    role: "Embedded and backend contributor",
    summary:
      "An electronic voting system using RFID, fingerprint verification, ESP32, Arduino, ODROID C4 backend services, and a real-time web dashboard.",
    impact: [
      "Implemented two-factor voter verification with RFID and fingerprint modules.",
      "Connected ESP32, Arduino UNO, peripherals, and ODROID backend through UART, Wi-Fi, HTTP APIs, and GPIO.",
      "Built admin and results workflows with real-time vote display, SQLite storage, and AI camera wake detection."
    ],
    stackLogos: [
      { label: "ESP32", icon: "/assets/stack/espressif.svg" },
      { label: "Arduino", icon: "/assets/stack/arduino.svg" },
      { label: "Python", icon: "/assets/stack/python.svg" },
      { label: "FastAPI", icon: "/assets/stack/fastapi.svg" },
      { label: "SQLite", icon: "/assets/stack/sqlite.svg" }
    ],
    tags: ["ESP32", "Arduino", "ODROID C4", "Python", "FastAPI", "SQLite", "RFID"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/patt502090/SmartVotingMachine"
      }
    ],
    media: smartVoting.media
  },
  {
    slug: "ce-group1-netops",
    title: "Enterprise Network & Security Infrastructure",
    kicker: "Cisco network and security operations platform",
    period: "2026",
    role: "Network and security infrastructure contributor",
    summary:
      "A multi-zone enterprise network and security infrastructure built with Cisco Catalyst switching, Firepower FTD, 802.1X identity access, Samba4 AD, FreeRADIUS, Oxidized, Grafana, and Wazuh.",
    impact: [
      "Architected 6-VLAN segmentation for Server, User, Staff Wi-Fi, Guest, Management, and DMZ zones, enforcing least-privilege access across traffic zones.",
      "Deployed Catalyst L3 inter-VLAN routing, Firepower FTD zone-based firewall policies, dynamic NAT/PAT, and LACP EtherChannel for redundant uplinks.",
      "Integrated 802.1X EAP-PEAP/MSCHAPv2 with FreeRADIUS and Samba4 AD, plus Oxidized Git-backed config versioning and SNMPv3/Grafana/Wazuh monitoring."
    ],
    stackLogos: [
      { label: "Cisco", icon: "/assets/stack/cisco.svg" },
      { label: "Wazuh", icon: "/assets/stack/wazuh.svg", wordmark: true },
      { label: "Grafana", icon: "/assets/stack/grafana.svg" }
    ],
    tags: [
      "Cisco C9200L",
      "C3750X",
      "FPR-2110 FTD",
      "802.1X",
      "Samba4 AD",
      "FreeRADIUS",
      "Oxidized",
      "Grafana",
      "Wazuh"
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/patt502090/CE-Group1-NetOps"
      }
    ],
    media: ceNetOps.media
  },
  {
    slug: "ivory-web3-archive-platform",
    title: "Web3 Archive Platform, IVORY",
    kicker: "Sui and Walrus archive platform",
    period: "Nov 2024 to Jan 2025",
    role: "Frontend and Web3 contributor",
    summary:
      "A Web3 archive platform for deploying static sites and managing blockchain-backed archive workflows with wallet authentication.",
    impact: [
      "Developed wallet auth and SuiNS domain management with Sui SDK and dapp-kit.",
      "Built dashboard surfaces for blockchain state, deployment status, and Walrus blob data.",
      "Standardized shared UI components with Radix UI and Tailwind CSS across a 3-person frontend team."
    ],
    stackLogos: [
      { label: "Sui", icon: "/assets/stack/sui.svg" },
      { label: "Walrus", icon: "/assets/stack/walrus.webp" },
      { label: "React", icon: "/assets/stack/react.svg" },
      { label: "Tailwind CSS", icon: "/assets/stack/tailwindcss.svg" },
      { label: "Radix UI", icon: "/assets/stack/radixui.svg" }
    ],
    tags: ["Sui", "Walrus", "dapp-kit", "React", "Tailwind CSS", "Radix UI"],
    links: [],
    media: ivory.media
  }
];

export const heroMedia = [
  biaArchive.media[1],
  wise.media[0],
  ceNetOps.media[0],
  smartVoting.media[0],
  cyberTopTalent.media[1],
  psuOpenApi.media[0]
];

export const achievements: Achievement[] = [
  {
    title: "Top 5, Huawei ICT Competition 2025-2026",
    issuer: "Huawei ICT Academy",
    date: "Nov 2025",
    outcome: "National Final, Network Track, Team HackPTNongBao",
    details:
      "Solved timed networking tasks covering configuration, troubleshooting, and infrastructure analysis. Official result lists the PSU team in the Top 5 with total score 1444.",
    media: [networkTrack.media[0]]
  },
  {
    title: "ICPC Thailand National Round 2025",
    issuer: "ICPC Foundation",
    date: "Sep 2025",
    outcome: "Team PSU-CoE-01",
    details:
      "Competed on time-critical algorithmic problems involving data structures, optimization, logic, and team coordination.",
    media: icpc2025.media
  },
  {
    title: "6th Place, Thailand Cyber Top Talent 2025",
    issuer: "NCSA Thailand",
    date: "Aug 2025",
    outcome: "Final Round, Red Team role, 1st in Southern region",
    details:
      "Ranked 6th in the national final and 1st in Southern region. Worked through CTF-style scenarios requiring system analysis, weakness discovery, exploitation, and network/server troubleshooting.",
    media: cyberTopTalent.media
  },
  {
    title: "CTF Boot Camp 2025",
    issuer: "National Cyber Security Agency",
    date: "Jun 2025",
    outcome: "Cybersecurity training",
    details:
      "Completed hands-on attack and defense training with CTF exercises, vulnerability analysis, and practical exploitation fundamentals.",
    media: ctfBootCamp.media
  },
  {
    title: "ICPC Thailand National Round 2024",
    issuer: "ICPC Foundation",
    date: "Sep 2024",
    outcome: "Team PSU-CoE-01",
    details:
      "Competed in algorithmic problem solving under strict time constraints, focusing on efficient solution design and teamwork.",
    media: icpc2024.media
  },
  {
    title: "1st Runner-Up, PSU Open API Contest 2024",
    issuer: "Digital Innovation and Intelligent Systems Office, PSU",
    date: "Jun 2024",
    outcome: "Team apup",
    details:
      "Built PSU Calendar, an application that integrates university data through APIs for centralized scheduling and event management.",
    media: psuOpenApi.media
  },
  {
    title: "Event Organizer, Barcamp Songkhla 9 and 10",
    issuer: "Barcamp Songkhla",
    date: "2024 to 2025",
    outcome: "Organizer activity",
    details:
      "Supported community technology events through planning, coordination, and on-site execution.",
    media: barcamp.media
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "REST APIs", "tRPC", "BullMQ", "Redis"]
  },
  {
    title: "Data",
    icon: Database,
    skills: ["PostgreSQL", "SQLite", "Materialized views", "S3-compatible storage"]
  },
  {
    title: "Infrastructure",
    icon: Network,
    skills: ["Docker", "MinIO", "Google Cloud", "NetBox", "Grafana", "Loki"]
  },
  {
    title: "Security and network",
    icon: ShieldCheck,
    skills: ["Cisco", "Wazuh SIEM", "802.1X", "VLAN", "ACL", "Honeypot"]
  },
  {
    title: "Embedded",
    icon: Cpu,
    skills: ["ESP32", "Arduino", "RFID", "Fingerprint", "ODROID C4", "GPIO"]
  }
];

export const certificationsList = [
  "Cisco Networking Essentials",
  "CTF Boot Camp 2025",
  "Thailand Cyber Talent 2025",
  "Alibaba Cloud Certified Associate",
  "Huawei Cloud Basics",
  "Huawei Next-Generation Cyber Security",
  "Basic Cybersecurity",
  "SWU Capture the Flag Competition 2025"
];

export const spotlight = [
  {
    label: "Production systems",
    value: "BIA, Wise, PSU Calendar",
    icon: Server
  },
  {
    label: "Competition proof",
    value: "Huawei Top 5, Cyber 6th, ICPC",
    icon: Trophy
  },
  {
    label: "Hardware depth",
    value: "ESP32, Arduino, ODROID, Cisco",
    icon: Cpu
  }
];
