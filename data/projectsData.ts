import { StaticImageData } from 'next/image';

// Project Images
import luxuryPresenceImg from "../public/images/luxury_presence.webp";
import aquacultureImg from "../public/images/aquaculture_system.webp";
import aquacultureIpoImg from "../public/images/aquaculture_IPO.webp";
import robocarInterfaceImg from "../public/images/robocar_interface.webp";
import birdDetectionIpoImg from "../public/images/bird_detection_IPO.webp";
import click2permitImg from "../public/images/click2permit.webp";
import click2permitTestImg from "../public/images/click2permit_test.webp";
import sitebuiltDashboardImg from "../public/images/sitebuilt_dashboard.webp";

export interface ProjectData {
    id: string;
    slug: string;
    title: string;
    year: string;
    category: string;
    role: string;
    type: string;
    icon: string;
    image: StaticImageData | null;
    video?: string;

    // Case study content
    overview: string;
    problem: string;
    solution: string;
    solutionPoints: string[];
    outcome: string;

    // Media
    figures?: {
        caption: string;
        section: 'problem' | 'solution' | 'outcome';
        icon: string;
        image?: StaticImageData;
        video?: string;
        fit?: 'cover' | 'contain';
    }[];

    // Resources
    resources?: {
        demo?: string;
        github?: string;
        figma?: string;
        files?: string;
    };
}

export const projects: ProjectData[] = [
    {
        id: '01',
        slug: 'portfolio-v2',
        title: 'PORTFOLIO V2',
        year: '2026',
        category: 'WEB DEVELOPMENT',
        role: 'Full Stack Developer',
        type: 'Personal Project',
        icon: 'terminal',
        image: luxuryPresenceImg, // Using luxuryPresence as a placeholder
        video: '/images/portfolio_v2.mp4',
        overview: 'A modern, brutalist portfolio website showcasing selected works with a focus on clean typography, smooth animations, and optimal user experience. Built with Next.js 14, TypeScript, and Tailwind CSS.',
        problem: 'The previous portfolio lacked visual impact and failed to effectively communicate the breadth of technical expertise. The interface needed to be both aesthetically striking and functionally efficient, while maintaining fast load times and accessibility standards.',
        solution: 'Adopted a brutalist design philosophy with monochromatic aesthetics, custom text morph animations, and a modular component architecture. Implemented server-side rendering for optimal performance and SEO.',
        solutionPoints: [
            'Custom TextMorph Animation System',
            'Brutalist Design Language',
            'Responsive Grid Architecture',
            'Optimized Image Loading'
        ],
        outcome: 'Coming Soon',
        figures: [],
        resources: {
            demo: '#',
            github: '#',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '02',
        slug: 'luxury-presence',
        title: 'LUXURY PRESENCE',
        year: '2024',
        category: 'WEB DESIGN',
        role: 'Web Builder / Frontend Developer',
        type: 'Real Estate Platform',
        icon: 'apartment',
        image: luxuryPresenceImg,
        video: '/images/luxury_presence.mp4',
        overview: 'This project was a Web Builder assignment designed to test aptitude, comprehension, resourcefulness, and creativity. The challenge was to revamp the "Home" page of a real estate website within 3 days, ensuring the result was simple, elegant, and professional.',
        problem: 'The goal was to improve the design of the current website rather than just copying it, while using all existing content and images. Given the nature of the real estate market, the design approach focused on "Premium Elegance" to create a user interface that feels luxurious and trustworthy.',
        solution: 'The webpage was built as a single-page application utilizing GSAP and Motion.dev for advanced animations and parallax designs. I implemented custom CSS for sophisticated styling effects and ensured the structure was semantic and accessible.',
        solutionPoints: [
            'Visual Polish: Clean typography and generous whitespace',
            'User Experience: Seamless and responsive layout',
            'Creativity: Modern reimagining of the reference material',
            'Advanced Animations: GSAP and Motion.dev integration'
        ],
        outcome: 'The submitted work demonstrates technical proficiency, design sensibility, and the ability to deliver a high-quality product under time constraints. The outcome of this assignment is currently pending review.',
        figures: [
            { caption: 'Hero Section Design', section: 'solution', icon: 'photo_camera', image: luxuryPresenceImg }
        ],
        resources: {
            demo: 'https://luxury-presence-test.vercel.app/',
            github: 'https://github.com/Joro281/luxury-presence.git',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '03',
        slug: 'sitebuilt',
        title: 'SITEBUILT',
        year: '2025',
        category: 'CONSTRUCTION TECH',
        role: 'Frontend Developer',
        type: 'SaaS Platform',
        icon: 'architecture',
        image: sitebuiltDashboardImg,
        video: '/images/sitebuilt.mp4',
        overview: 'SiteBuilt is an intelligent construction-documentation platform that transforms everyday site photos into photo-verified, accurate As-Built drawings — automatically, and in minutes. It replaces the slow, manual process of marking up floor plans and linking photos.',
        problem: 'Construction projects face significant delays due to manual permit reviews and disconnected communication channels. Field Engineers and BIM Teams historically struggle with the manual labor required to anchor site reality to digital documentation.',
        solution: 'Developed an automated system that bridges the gap between site photos and digital drawings. Featuring an intuitive upload interface, an interactive pinning canvas for precise photo placement, and a dynamic dashboard for instant report generation.',
        solutionPoints: [
            'Intuitive Upload: Seamless drag-and-drop for large floor plans',
            'Interactive Pinning: Canvas-based mapping with real-time updates',
            'Dynamic Dashboard: Interactive reports with PDF/DXF export',
            'React & Next.js: Component-based scalable architecture'
        ],
        outcome: 'Spearheaded the frontend architecture, designing the user interface and successfully integrating the project\'s functional APIs. While the broader platform remains an active work-in-progress, the core frontend features—including the interactive pinning canvas and data-driven dashboard—are fully operational and synchronized with the backend services.',
        figures: [
            { caption: 'Intelligent Platform Dashboard', section: 'solution', icon: 'dashboard', image: sitebuiltDashboardImg }
        ],
        resources: {
            demo: 'https://sitebuilt.vercel.app/',
            github: '#',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '04',
        slug: 'mase',
        title: 'MASE',
        year: '2025',
        category: 'HEALTHCARE SYSTEM',
        role: 'Full Stack Developer',
        type: 'Medical Platform',
        icon: 'medical_services',
        image: null,
        video: '/images/mase.mp4',
        overview: 'Mase is a multi-modular Hospital Management System. While the platform covers a broad range of healthcare operations, my contribution focused on building the robust Recruitment/Job Posting engine and the comprehensive Quality Assurance infrastructure.',
        problem: 'The agency needed a scalable way to manage staff recruitment and ensure the stability of a complex healthcare platform with multiple user roles and sensitive data.',
        solution: 'Implemented a dynamic Job Posting and Recruitment module to streamline hiring. Simultaneously, I developed an automated Quality Assurance (QA) suite to verify system integrity, API reliability, and role-based accessibility across the entire platform.',
        solutionPoints: [
            'Recruitment Engine: Streamlined job posting and applicant tracking',
            'QA Infrastructure: Automated testing for system-wide stability',
            'API Integration: Secure and verified data synchronization via Supabase',
            'Real-time Verification: Ensuring role-specific access and HIPAA compliance'
        ],
        outcome: 'Successfully delivered the Recruitment and QA modules, which are currently operational and working as intended. These core components provide the foundation for the agency\'s staff expansion while ensuring the underlying system remains robust and error-free.',
        figures: [
            { caption: 'Automated Quality Assurance Testing', section: 'solution', icon: 'fact_check', video: '/images/mase_qa.mp4' }
        ],
        resources: {
            demo: 'https://mase-ai-intaligence.vercel.app/',
            github: '#',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '05',
        slug: 'bengals',
        title: 'BENGALS',
        year: '2025',
        category: 'E-COMMERCE',
        role: 'Web Developer & UI/UX Designer',
        type: 'Online Store',
        icon: 'store',
        image: null,
        video: '/images/bengals.mp4',
        overview: "Bengals is a premium seafood delivery business that carries the ocean's best — freshly caught fish, shrimp, crabs, and other premium seafood — straight from General Santos City. Each catch is carefully handled and delivered to partners in Cagayan de Oro.",
        problem: 'Developing a modern digital presence to showcase their business and facilitate an intuitive online ordering system for business partners who value unmatched freshness and quality.',
        solution: 'Developed a high-performance website using Next.js and React, featuring a modern, seafood-themed design. The platform includes a detailed product catalog with high-quality imagery and a user-friendly interface optimized for both desktop and mobile field usage.',
        solutionPoints: [
            'Online Ordering System: Intuitive flow for business partners',
            'Premium Product Catalog: High-quality seafood showcases',
            'Seafood-Themed UX: Modern design reflecting brand quality',
            'Responsive Optimization: Seamless access across all devices'
        ],
        outcome: 'Successfully created a digital bridge between General Santos fishing fleets and Cagayan de Oro businesses. The platform simplifies customer inquiries and ensures a professional brand image that reflects the premium nature of the catch.',
        figures: [
            { caption: 'Intuitive E-commerce Ordering Workflow', section: 'solution', icon: 'shopping_cart', video: '/images/bengals_order.mp4' }
        ],
        resources: {
            demo: 'https://bengals.vercel.app',
            github: 'https://github.com/Joro281/Bengals.git',
            figma: 'https://www.figma.com/design/bengals-design',
            files: '#'
        }
    },
    {
        id: '06',
        slug: 'mindbloom',
        title: 'MINDBLOOM',
        year: '2025',
        category: 'HEALTH & WELLNESS',
        role: 'Full Stack Developer & UI/UX Designer',
        type: 'Mental Health App',
        icon: 'psychology',
        image: null,
        video: '/images/mindbloom.mp4',
        overview: 'MindBloom was developed to provide a comprehensive platform for mental health support, featuring mood tracking, meditation guides, journaling capabilities, and professional resources. The platform aims to make mental health resources accessible and user-friendly for people of all ages.',
        problem: 'Mental health awareness systems are crucial in today\'s fast-paced world, yet many tools feel clinical or inaccessible. There was a need for an intuitive, welcoming platform that encourages consistent mood tracking and mindfulness.',
        solution: 'Built a comprehensive wellness platform using Next.js and React with a focus on a calming UI/UX and accessibility. Implemented secure journaling systems, guided meditation flows, and interactive mood analytics to prioritize a supportive user experience.',
        solutionPoints: [
            'Calming UI/UX: Accessibility-first design with a soothing palette',
            'Mood Analytics: Intuitive tracking and data visualization',
            'Secure Journaling: Privacy-focused personal logging system',
            'Guided Mindfulness: Interactive meditation and resource integration'
        ],
        outcome: 'Developed a high-fidelity frontend application demonstrating modern UI/UX principles for mental wellness. The platform effectively makes clinical resources feel approachable, fostering better user engagement with mental health practices.',
        figures: [],
        resources: {
            demo: 'https://mind-bloom-ph.vercel.app',
            github: 'https://github.com/Joro281/MindBloom.git',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '07',
        slug: 'portfolio-v1',
        title: 'PORTFOLIO V1',
        year: '2025',
        category: 'WEB DEVELOPMENT',
        role: 'Full Stack Developer',
        type: 'Personal Project',
        icon: 'folder_open',
        image: null,
        video: '/images/portfolio_v1.mp4',
        overview: 'A comprehensive personal portfolio website developed using modern web technologies to showcase technical skills, academic achievements, and professional projects. The platform serves as a centralized hub for cross-device technical demonstrations.',
        problem: 'Needed a professional online presence that effectively reflects technical capabilities through a modern, interactive user experience. The previous lack of a centralized platform made it difficult to display a cohesive narrative of growth and expertise.',
        solution: 'Leveraged Next.js 15 for server-side rendering and React 19 for a maintainable component architecture. Implemented rapid styling with Tailwind CSS and ensured full type safety with TypeScript, following an iterative design process from wireframing to user testing.',
        solutionPoints: [
            'Next.js 15: Optimal performance and SSR',
            'React 19: Modern component architecture',
            'Tailwind CSS: Rapid, consistent design patterns',
            'TypeScript: Comprehensive type safety'
        ],
        outcome: 'Successfully established a robust digital brand that achieves fast loading times and optimal SEO performance. The site functions as a live demonstration of proficiency in modern frontend frameworks and responsive design principles.',
        figures: [
            { caption: 'Interactive Project Showcase Layout', section: 'solution', icon: 'web', video: '/images/portfoli_v1_projects.mp4' }
        ],
        resources: {
            demo: 'https://joro-portfolio.vercel.app/',
            github: 'https://github.com/Joro281/Portfolio.git',
            figma: '#',
            files: '#'
        }
    },
    {
        id: '08',
        slug: 'aquaculture',
        title: 'AQUACULTURE',
        year: '2025',
        category: 'IOT & AUTOMATION',
        role: 'Full Stack Developer',
        type: 'Smart IoT',
        icon: 'water_drop',
        image: aquacultureImg,
        overview: 'A Chlorella Algae (Chlorella vulgaris) chamber system designed for indoor aquaculture. It features automated water quality management with algae biofiltration to regulate pH and ammonia levels in real-time.',
        problem: 'Maintaining optimal water quality in indoor aquaculture systems is challenging, particularly regarding pH stability and ammonia management. Manual monitoring is time-consuming and prone to delayed detection of harmful levels.',
        solution: 'Developed an automated system integrating pH and water level sensors with an ESP32 microcontroller. The system uses a two-stage biofiltration chamber with Chlorella vulgaris to naturally absorb excess ammonia and stabilize pH, with all data accessible via a custom web dashboard.',
        solutionPoints: [
            'IoT Monitoring: Real-time pH and water level sensor array',
            'Algae Biofiltration: Automated Chlorella vulgaris treatment chambers',
            'ESP32 Infrastructure: Integrated microcontroller for local actuator control',
            'Web Dashboard: Real-time monitoring and historical data logging'
        ],
        outcome: 'Successfully automated pH stabilization (7.4–7.6) and identified 10–20% algae density as the most efficient for small-scale aquaculture. The system provides 24/7 visibility and reduces mortality risks through proactive water quality management.',
        figures: [
            { caption: 'Input-Process-Output (IPO) Logic', section: 'solution', icon: 'account_tree', image: aquacultureIpoImg }
        ],
        resources: {
            demo: '#',
            github: 'https://github.com/Joro281/Aquaculture-System.git',
            figma: '#',
            files: 'https://drive.google.com/drive/folders/1k9P1Q20JSa-ulaAmW_tcc6AbThz18JkD?usp=drive_link'
        }
    },
    {
        id: '09',
        slug: 'fuel-request',
        title: 'FUEL REQUEST',
        year: '2025',
        category: 'GOVERNMENT TECH',
        role: 'Backend Developer',
        type: 'Fleet Management',
        icon: 'local_gas_station',
        image: null,
        video: '/images/fuel_request.mp4',
        overview: 'Developed for the Provincial Engineering Office of Misamis Oriental, this system digitizes fuel and service requests for government vehicles, replacing manual, paper-based processes with an efficient online workflow.',
        problem: 'Inefficiencies in managing service and fuel requests due to manual tracking led to bottlenecks and a lack of accountability. The paper-based system made real-time monitoring of fuel allocation and vehicle maintenance nearly impossible.',
        solution: 'Built a robust management platform using PHP/Node.js and MySQL with role-based access for employees and admins. Implemented automated request workflows, real-time inventory tracking for fuel and supplies, and comprehensive dashboard analytics for consumption trends.',
        solutionPoints: [
            'Automated Workflows: Digital submission and approval loops',
            'Real-Time Inventory: Live tracking of fuel and spare parts',
            'Role-Based Security: Granular employee and admin permissions',
            'Dashboard Analytics: Visual consumption and trend reporting'
        ],
        outcome: 'Reduced request processing time by 70%, cutting typical turnarounds from 2 days to just 2 hours. The system significantly improved transparency, eliminated manual follow-ups, and reduced resource wastage across the Provincial Engineering Office.',
        figures: [],
        resources: {
            demo: '#',
            github: 'https://github.com/CompEngOJT/CapitolRequest2.git',
            figma: 'https://www.figma.com/design/SdAJN2bBluX5Xqlk5ga0XE/Fuel-Request-System?node-id=0-1&t=8f9E1VrmBALohMKV-1',
            files: 'https://drive.google.com/drive/folders/1JIPnqd6sytqoG5645SxsaIuYb7hE_wC_?usp=sharing'
        }
    },
    {
        id: '10',
        slug: 'robocar',
        title: 'ROBOCAR',
        year: '2024',
        category: 'ROBOTICS & SURVEILLANCE',
        role: 'Backend Developer',
        type: 'IoT Vehicle',
        icon: 'smart_toy',
        image: null,
        video: '/images/robocar.mp4',
        overview: 'RoboCar is a real-time RC surveillance vehicle designed for hazardous gas detection in industrial and mining environments. Built with Raspberry Pi, it enables safe remote inspection through live video and multi-sensor gas monitoring.',
        problem: 'Traditional air quality monitoring systems are often static and expensive, failing to provide mobile coverage in high-risk zones. Workers are frequently exposed to hazardous gases like LPG and methane during manual site inspections.',
        solution: 'Developed a mobile monitoring platform featuring MQ-series sensors (MQ2, MQ3, MQ6) integrated with Raspberry Pi 4B and ESP32. Implemented a Python-based processing engine for real-time gas concentration analysis and a web dashboard for live video streaming and remote navigation control.',
        solutionPoints: [
            'Raspberry Pi 4B: Centralized hardware processing and video',
            'MQ Sensor Array: Detection for LPG, methane, alcohol, and smoke',
            'Dual Control Modes: Web-based remote server and Bluetooth app',
            'Real-Time Web UI: Live sensor data and color-coded safety alerts'
        ],
        outcome: 'Successfully automated hazardous gas detection with 90% precision and sub-2-second data latency. The system effectively reduces human exposure to toxic environments by providing a reliable, low-cost remote inspection alternative.',
        figures: [
            { caption: 'Web Interface', section: 'solution', icon: 'desktop_windows', image: robocarInterfaceImg }
        ],
        resources: {
            demo: '#',
            github: 'https://github.com/jorodotexe/robocar-surveillance',
            figma: '#',
            files: 'https://drive.google.com/drive/folders/1qXWy2OVxVGTRCMXttlytIf6LakqRMVLH?usp=drive_link'
        }
    },
    {
        id: '11',
        slug: 'bird-detection',
        title: 'BIRD DETECTION',
        year: '2024',
        category: 'IOT & AGRI-TECH',
        role: 'Full Stack Developer',
        type: 'Agri-Tech',
        icon: 'sensors',
        image: null,
        video: '/images/bird_detection.mp4',
        overview: 'An Automated Bird Detection and Repeller System developed using the ESP32 microcontroller, PIR motion sensors, and predator sound emitters. Designed to protect rice fields from crop damage caused by birds like the Maya bird.',
        problem: 'Traditional methods for bird-scaring in agriculture are labor-intensive and inefficient. Farmers manually shout or use noisy objects, which fails to provide consistent 24/7 protection against substantial crop losses.',
        solution: 'Developed a smart IoT solution using ESP32 and PIR motion sensors (5m–12m range). The system triggers an MP3 module to emit amplified predator sounds (e.g., eagle calls) through a 15W speaker. Integrated Firebase for real-time detection logging and Blynk for remote monitoring.',
        solutionPoints: [
            'Smart Detection: PIR-based motion tracking system',
            'Acoustic Deterrent: Predator-sound randomizer with audio amplification',
            'Real-Time Logging: Firebase integration for activation tracking',
            'Remote Monitoring: Blynk app interface for agricultural site management'
        ],
        outcome: 'The system successfully detects motion and triggers deterrent responses, though field trials identified that PIR sensors can also be triggered by non-avian movement, such as tall foliage (leaves) reaching the sensor height. As a result, the system is most effective in open environments where sensor sightlines are clear of ground-level obstructions.',
        figures: [
            { caption: 'IPO', section: 'solution', icon: 'account_tree', image: birdDetectionIpoImg, fit: 'contain' }
        ],
        resources: {
            demo: '#',
            github: 'https://github.com/Joro281/Automated-Bird-Detection-and-Repeller-System.git',
            figma: '#',
            files: 'https://drive.google.com/drive/folders/1yRw3re5c1ggU9TWQXYy7pZrzfddCoPHo?usp=sharing'
        }
    },
    {
        id: '12',
        slug: 'click2permit',
        title: 'CLICK2PERMIT',
        year: '2023',
        category: 'GOVERNMENT TECH',
        role: 'Full Stack Developer',
        type: 'HR Management',
        icon: 'verified',
        image: click2permitImg,
        overview: 'Developed for the Human Resource Management Office (HRMO) of Cagayan de Oro City, Click2Permit is a digital transformation platform that automates document requests, approvals, and tracking for government employees.',
        problem: 'The HRMO struggled with massive inefficiencies due to manual, paper-based workflows for document requests like COE and Leave Credits. This led to long processing times, lack of transparency, and physical bottlenecks at the city hall.',
        solution: 'Created a comprehensive web-based portal using PHP and MySQL. Implemented a responsive digital request system with real-time status tracking, automated notification loops, and an admin dashboard for HRMO staff to manage approvals and pickup schedules efficiently.',
        solutionPoints: [
            'Digital Transformation: Automated COE and Leave Credit requests',
            'Real-Time Tracking: Transparent "Ready for Pickup" status updates',
            'HRMO Dashboard: Centralized approval and schedule management',
            'Proven Usability: Achieved high SUS score of 89.06/100'
        ],
        outcome: 'Successfully digitized HR document workflows, significantly boosting organizational transparency and user satisfaction. Testing showed a 100% success rate for core features, with employees praising the elimination of physical lines at the HR office.',
        figures: [
            { caption: 'User Testing', section: 'solution', icon: 'quiz', image: click2permitTestImg }
        ],
        resources: {
            demo: '#',
            github: 'https://github.com/Joro281/Click2Permit.git',
            figma: '#',
            files: 'https://drive.google.com/drive/folders/1k9P1Q20JSa-ulaAmW_tcc6AbThz18JkD?usp=drive_link'
        }
    }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
    return projects.find(project => project.slug === slug);
}

export function getNextProject(currentSlug: string): ProjectData {
    const currentIndex = projects.findIndex(p => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
}
