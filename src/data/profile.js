const profile = {
  hero: {
    name: 'Ishaan Singh',
    tagline: 'Code. Create. Disrupt.',
    roles: ['Software Developer', 'Data Enthusiast', 'Innovator']
  },
  about: {
    summary: `I’m a software developer passionate about building scalable, efficient, and creative solutions. From AI assistants to full-stack web apps, I combine engineering with innovation to push tech beyond convention.`
  },
  experience: [
    {
      company: 'AppGallop',
      role: 'Software Intern',
      details: [
        'Developed and optimized AI-driven solutions using Python, LangChain, and Large Language Models (LLMs).',
        'Created modular frameworks for chatbot orchestration, integrating with third-party APIs.',
        'Built pipelines to handle complex query processing and multi-step reasoning with OpenAI & ollama.',
        'Designed reusable frontends for internal AI apps using TypeScript & TailwindCSS.',
        'Worked in a team simulating real-world SaaS product cycles—testing, debugging, deploying.'
      ]
    },
    {
      company: 'EaseToLearn',
      role: 'Product Developer Intern',
      details: [
        'Developed AI-powered tools for education technology.',
        'Built features for adaptive learning & personalized recommendations.',
        'Improved frontend experience for learning dashboards.'
      ]
    },
    {
      company: 'CSIR - Central Scientific Instruments Organisation',
      role: 'Intern',
      details: [
        'Created a student management system using ReactJS & MySQL.',
        'Integrated IoT sensors with backend systems for data management.'
      ]
    },
    {
      company: 'Bolt IoT',
      role: 'Student Intern',
      details: [
        'Worked on IoT and ML-based projects for real-time automation.',
        'Implemented microcontroller data processing and robotics integrations.'
      ]
    }
  ],
  education: [
    {
      institution: 'Pusa Institute of Technology',
      degree: 'Diploma in Electronics and Communications Engineering',
      years: '2019–2023'
    },
    {
      institution: 'Summeral Jain Public School',
      degree: 'High School (Science)'
    }
  ],
  skills: {
    languages: ['Python', 'TypeScript', 'Java', 'JavaScript', 'SQL'],
    frameworks: ['React', 'Next.js', 'FastAPI', 'TailwindCSS'],
    ai_ml: ['LangChain', 'LLMs', 'ollama', 'Machine Learning (Regression, Classification)'],
    databases: ['MySQL', 'PostgreSQL'],
    other: ['IoT', 'Embedded Systems', 'Cloud (AWS basics)']
  },
  certifications: [
    'Supervised Machine Learning: Regression and Classification – Stanford University (Coursera)',
    'HTML, CSS, and JavaScript for Web Developers – Johns Hopkins University (Coursera)'
  ],
  projects: [
    {
      name: 'FullStackKbSearch',
      visibility: 'Public (forked)',
      stack: 'Python (FastAPI) + React',
      purpose: 'Full-stack knowledge base search engine (indexing, search, document serving).',
    thumbnail: '/fullstackkbsearch.png'
    },
    {
      name: 'Neural-Ai-Bot',
      visibility: 'Private',
      stack: 'Python (ML) + Node/TypeScript wrapper',
      purpose: 'AI chatbot / conversational assistant using neural models.',
    thumbnail: '/neural ai.png'
    },
    {
      name: 'CloudCraftrdev',
      visibility: 'Private (forked)',
      stack: 'React + TypeScript (Firebase/AWS backend)',
      purpose: 'Cloud deployment and developer tooling for infrastructure workflows.',
    thumbnail: '/cloudcraftr.png'
    },
    {
      name: 'uiappg',
      visibility: 'Private',
      stack: 'TypeScript + React',
      purpose: 'Frontend UI for AppGBot and related interfaces.',
    thumbnail: '/ui for appgbot.png'
    },
    {
      name: 'aiassistant',
      visibility: 'Private',
      stack: 'TypeScript (frontend) + Python (AI backend)',
      purpose: 'AI-driven assistant application integrating models and UI.',
    thumbnail: '/ai assistant app.png'
    },
    {
      name: 'appgtesting-master',
      visibility: 'Private',
      stack: 'Python (pytest + test harness)',
      purpose: 'Testing suite and automation for AppGBot workflows.',
    thumbnail: '/appgbot testing framework.png'
    },
    {
      name: 'chatbot',
      visibility: 'Public',
      stack: 'Python (Flask or similar) / Node.js',
      purpose: 'Basic chatbot project demonstrating NLP and conversational flows.',
    thumbnail: '/simple chatbot .png'
    },
    {
      name: 'cloudcraftr',
      visibility: 'Private',
      stack: 'TypeScript (React + Node)',
      purpose: 'Cloud automation SaaS project for provisioning and infra tasks.',
    thumbnail: '/cloudcraftr.png'
    },
    {
      name: 'dietarywellness',
      visibility: 'Public',
      stack: 'TypeScript + React (Express/Firebase backend)',
      purpose: 'Health and diet tracking wellness app.',
    thumbnail: '/dietary welness.png'
    },
    {
      name: 'chatbot_project',
      visibility: 'Private',
      stack: 'Python (NLP/ML backend)',
      purpose: 'Structured chatbot experiments and models.',
    thumbnail: '/chatbot project.png'
    },
    {
      name: 'student-management-java',
      visibility: 'Public',
      stack: 'Java (Spring Boot or similar)',
      purpose: 'CRUD student management system (backend and admin UI).',
    thumbnail: '/student managment java.png'
    },
    {
      name: 'chatbot_support',
      visibility: 'Private (MSP app)',
      stack: 'TypeScript + React + Node',
      purpose: 'Customer support chatbot integration and UI.',
    thumbnail: '/customer support chatbot.png'
    },
    {
      name: 'birdaiclone',
      visibility: 'Private',
      stack: 'TypeScript + Next.js',
      purpose: 'Clone/experiment inspired by BirdAI / AI SaaS features.',
    thumbnail: '/birdaiclone.png'
    },
    {
      name: 'WebDevDynamics',
      visibility: 'Public',
      stack: 'TypeScript + React',
      purpose: 'Web development experiments and dynamic components.',
    thumbnail: '/webdevdynamics.png'
    },
    {
      name: 'AiSaasStarter',
      visibility: 'Private',
      stack: 'TypeScript + React + Node.js',
      purpose: 'Boilerplate starter for AI SaaS products.',
    thumbnail: '/aisaasstarter.png'
    },
    {
      name: 'appgtesting',
      visibility: 'Private',
      stack: 'TypeScript (frontend testing app)',
      purpose: 'UI test harness and experiments for AppGBot.',
    thumbnail: '/appgtesting.png'
    }
  ],
  volunteering: [
    { org: 'Pusa Institute of Technology', role: 'Coordinator of Volunteers', desc: 'Organized events & guided students in IEEE-based social projects.' }
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/ishaan-singh-c007/',
    github: 'https://github.com/ishaandev07',
    location: {
      city: 'New Delhi, India',
      coordinates: { lat: 28.6139, lon: 77.2090 }
    }
  }
}


export default profile
