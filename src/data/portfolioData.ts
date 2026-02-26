// ============================================
// PORTFOLIO DATA CONFIGURATION - MULTI LANGUAGE
// ============================================

const portfolioData = {
  // Default language
  defaultLanguage: "id",

  // Available languages
  languages: {
    id: "Bahasa Indonesia",
    en: "English",
  },

  // INFORMASI PERSONAL
  personal: {
    name: "Raja Capybara",
    shortName: "RC",
    profileImage: "/images/optimized/profile-medium.webp",
    title: {
      id: "Capybara yang Berbudi Luhur",
      en: "The Virtuous Capybara ",
    },
    greeting: {
      id: "Salam damai, diri ini",
      en: "Peace be upon you, I'm",
    },
    description: {
      id: "seorang penjaga harmoni digital yang tenang namun presisi. Fokus membangun sistem dari 'Zero to One' dengan semangat budi luhur: andal, aman, dan bermanfaat bagi sesama.",
      en: "a calm yet precise guardian of digital harmony. Focused on building systems from 'Zero to One' with a virtuous spirit: reliable, secure, and beneficial to others.",
    },
    location: "Jakarta, Indonesia",
    email: "rajacapybara275@gmail.com",
    phone: "+62 851 5772 5864",

    social: {
      github: "https://github.com/pengikut-raja-capybara",
      linkedin: "https://www.linkedin.com/in/rajacapybara/",
      instagram: "https://instagram.com/rajacapybara",
    },
  },

  // EXPERIENCE SECTION
  experience: {
    enabled: true,
    title: {
      id: "Jejak Pengabdian",
      en: "Service Journey",
    },
    subtitle: {
      id: "Perjalanan profesional dalam menjaga ekosistem siber tetap tenang dan aman.",
      en: "Professional journey in keeping the cyber ecosystem calm and secure.",
    },

    categories: [
      {
        type: "education",
        title: {
          id: "Pendidikan",
          en: "Education",
        },
        icon: "🎓",
        items: [
          {
            title: {
              id: "Sarjana Sistem Informasi",
              en: "Bachelor of Information Systems",
            },
            organization: "Universitas Siber Asia",
            date: "2024 - 2028 (Expected)",
            description: {
              id: "Mahasiswa biasa dengan minat pada Cybersecurity dan Software Engineering.",
              en: "Regular student with interest in Cybersecurity and Software Engineering.",
            },
            skills: ["Information Systems", "Cybersecurity", "Software Engineering"],
          },
        ],
      },

      {
        type: "research",
        title: {
          id: "Riset Keamanan",
          en: "Security Research",
        },
        icon: "🛡️",
        items: [
          {
            title: {
              id: "Peneliti Keamanan Independen",
              en: "Independent Security Researcher",
            },
            organization: "Bug Bounty / Disclosure",
            date: "2021 - Present",
            description: {
              id: "Menemukan kerentanan kritis (Financial Logic, PII Leakage, ATO) pada platform besar. Melaporkan temuan secara bertanggung jawab dan berkontribusi pada peningkatan keamanan sistem mereka.",
              en: "Discovered critical vulnerabilities (Financial Logic, PII Leakage, ATO) on major platforms. Responsibly reported findings and contributed to improving their system security.",
            },
            skills: ["Vulnerability Assessment", "Burp Suite", "OWASP Top 10"],
          },

          {
            title: "Capture The Flag (CTF)",
            organization: {
              id: "Berbagai Platform & Event",
              en: "Various Platforms & Events",
            },
            date: "2025 - Present",
            description: {
              id: "Mengikuti CTF sebagai sarana belajar dan mengasah kemampuan di berbagai sub-bidang IT Security seperti Web Exploitation, Binary Exploitation, Reverse Engineering, Cryptography, Forensics, dan OSINT.",
              en: "Participating in CTF as a learning medium to sharpen skills in various IT Security sub-fields such as Web Exploitation, Binary Exploitation, Reverse Engineering, Cryptography, Forensics, and OSINT.",
            },
            skills: ["Web Exploitation", "Binary Exploitation", "Reverse Engineering", "Cryptography", "Forensics", "OSINT"],
          },
        ],
      },
      {
        type: "volunteering",
        title: {
          id: "Kegiatan Sukarela",
          en: "Volunteering",
        },
        icon: "🤝",
        items: [
          {
            title: {
              id: "Kontributor Open Source",
              en: "Open Source Contributor",
            },
            organization: "GitHub Community",
            date: "2022 - Present",
            description: {
              id: "Berkontribusi pada proyek open source dan membantu developer lain dalam troubleshooting issue di komunitas.",
              en: "Contributing to open source projects and helping other developers troubleshoot issues in the community.",
            },
            skills: ["Open Source", "Code Review", "Documentation"],
          },
        ],
      },
    ],
  },

  // ABOUT SECTION
  about: {
paragraphs: {
      id: [
        "Capybara dikenal sebagai hewan paling tenang di dunia, dan begitulah cara diri ini menghadapi tantangan teknis: dengan kepala dingin dan hati yang berbudi luhur. Bagi diri ini, keamanan siber bukan soal perang, melainkan soal menjaga harmoni antara inovasi dan perlindungan.",
        "Saat ini, diri ini fokus mendedikasikan keahlian untuk memberdayakan sektor-sektor yang membutuhkan fondasi digital yang kuat. Diri ini percaya bahwa teknologi harus menjadi alat inklusif yang membantu siapa saja untuk tumbuh secara mandiri dan aman di ruang siber.",
        "Sebagai seorang pembelajar seumur hidup di bidang sistem informasi, diri ini terus mengasah ketajaman analisis melalui berbagai riset independen dan keterlibatan di kancah global. Bagi diri ini, setiap tantangan adalah ruang untuk memvalidasi kearifan teknis sekaligus memperluas wawasan keamanan siber.",
        "Setiap solusi yang diri ini bangun selalu didasari pada prinsip keamanan yang fundamental. Memahami cara kerja kerentanan membantu diri ini membangun sistem yang lebih kokoh, tenang, dan tentunya, memberikan rasa aman bagi setiap jiwa yang berinteraksi di dalamnya."
      ],
      en: [
        "The Capybara is known as the world's most chill animal, and that's how I approach technical challenges: with a cool head and a virtuous heart. To me, cybersecurity isn't about war, but about maintaining harmony between innovation and protection.",
        "Currently, I am focused on dedicating my expertise to empowering sectors that need a strong digital foundation. I believe that technology should be an inclusive tool that helps anyone grow independently and securely in cyberspace.",
        "As a lifelong learner in information systems, I continue to sharpen my analytical skills through various independent research and global engagements. To me, every challenge is a space to validate technical wisdom while expanding cybersecurity insights.",
        "Every solution I build is always based on fundamental security principles. Understanding how vulnerabilities work helps me build systems that are more robust, serene, and ultimately, provide a sense of security for every soul who interacts with them."
      ],
    },

    stats: [
      {
        number: "7+",
        label: { id: "Tahun Pengalaman", en: "Years of Experience" },
      },
      {
        number: "20+",
        label: { id: "Proyek Selesai", en: "Projects Delivered" },
      },
      {
        number: "15+",
        label: { id: "Laporan Bug Bounty", en: "Bug Bounty Reports" },
      },
    ],

    services: [
      {
        icon: "💻",
        title: {
          id: "Full Stack Development",
          en: "Full Stack Development",
        },
        description: {
          id: "Pengembangan aplikasi Web & Mobile menggunakan Node.js, React, dan React Native.",
          en: "Web & Mobile application development using Node.js, React, and React Native.",
        },
      },
      {
        icon: "🔒",
        title: {
          id: "Security Testing",
          en: "Security Testing",
        },
        description: {
          id: "Vulnerability assessment dan penetration testing untuk aplikasi web.",
          en: "Vulnerability assessment and penetration testing for web applications.",
        },
      },
      {
        icon: "🌐",
        title: {
          id: "Jaringan & IoT",
          en: "Network & IoT",
        },
        description: {
          id: "Instalasi jaringan, konfigurasi perangkat, dan integrasi sistem IoT.",
          en: "Network installation, device configuration, and IoT system integration.",
        },
      },
    ],
  },

  // PROJECTS SECTION
  projects: {
    enabled: false, // Hide projects for now
    title: {
      id: "Proyek",
      en: "Projects",
    },
    subtitle: {
      id: "Beberapa proyek yang telah saya kerjakan",
      en: "Some projects I have worked on",
    },
    filterLabels: {
      all: { id: "Semua", en: "All" },
      featured: { id: "Unggulan", en: "Featured" },
      security: { id: "Keamanan", en: "Security" },
      fullstack: { id: "Full Stack", en: "Full Stack" },
      iot: { id: "IoT", en: "IoT" },
      research: { id: "Riset", en: "Research" },
    },
    items: [
      {
        id: 1,
        title: "[REDACTED] Vulnerability Reports",
        description: {
          id: "Temuan celah keamanan kritis (Account Takeover, PII Leakage) yang telah dilaporkan dan diperbaiki.",
          en: "Critical security vulnerability findings (Account Takeover, PII Leakage) that have been reported and fixed.",
        },
        image: "🐛",
        category: "security",
        technologies: ["Burp Suite", "BOLA/IDOR Analysis"],
        github: null,
        demo: null,
        featured: true,
      },
    ],
  },

  // SKILLS SECTION
  skills: {
    title: {
      id: "Keahlian & Teknologi",
      en: "Skills & Technologies",
    },
    subtitle: {
      id: "Teknologi dan tools yang saya gunakan untuk mewujudkan ide",
      en: "Technologies and tools I use to bring ideas to life",
    },
    categories: [
      {
        title: {
          id: "Frontend & Mobile",
          en: "Frontend & Mobile",
        },
        icon: "📱",
        skills: ["React.js", "React Native", "tailwindcss", "Chakra UI", "WebSockets / Socket.io", "Leaflet.js", "Responsive Design"],
      },
      {
        title: {
          id: "Backend",
          en: "Backend",
        },
        icon: "⚙️",
        skills: ["Node.js / Express", "TypeScript / Bun", "REST API", "MongoDB / Firebase", "MySQL / PostgreSQL"],
      },
      {
        title: {
          id: "Keamanan Siber",
          en: "Cybersecurity",
        },
        icon: "🔒",
        skills: ["Vulnerability Assessment", "Burp Suite", "API Security (OWASP)", "Reverse Engineering", "Cryptography"],
      },
      {
        title: {
          id: "DevOps & Infrastruktur",
          en: "DevOps & Infrastructure",
        },
        icon: "🐳",
        skills: ["Docker / Containerization", "Linux Administration", "CI/CD Pipelines", "Git / Version Control"],
      },
      {
        title: {
          id: "Jaringan & Hardware",
          en: "Network & Hardware",
        },
        icon: "🌐",
        skills: ["SD-WAN / Fiber Optic", "CCTV / IP Camera", "Hardware Troubleshooting", "Network Configuration", "Server Rack Assembly"],
      },
      {
        title: {
          id: "Bahasa & Tools Lain",
          en: "Other Languages & Tools",
        },
        icon: "🛠️",
        skills: ["PHP", "Python", "C++ / C#", "Raspberry Pi / IoT", "Photoshop", "Illustrator"],
      },
    ],
  },

  // CONTACT SECTION
  contact: {
    title: {
      id: "Hubungi Saya",
      en: "Contact Me",
    },
    subtitle: {
      id: "Tertarik berkolaborasi untuk proyek aman dan skalabel?",
      en: "Interested in collaborating on secure and scalable projects?",
    },
    introText: {
      id: "Saya terbuka untuk diskusi mengenai pengembangan software enterprise, konsultasi keamanan, atau riset teknologi.",
      en: "I'm open to discussions about enterprise software development, security consulting, or technology research.",
    },
    successMessage: {
      id: "✓ Pesan terkirim! Saya akan membalas secepatnya.",
      en: "✓ Message sent! I'll reply as soon as possible.",
    },
    connectTitle: { id: "Mari Terhubung", en: "Let's Connect" },
    form: {
      nameLabel: { id: "Nama", en: "Name" },
      namePlaceholder: { id: "Nama Anda", en: "Your Name" },
      emailLabel: { id: "Email", en: "Email" },
      emailPlaceholder: { id: "email@anda.com", en: "your@email.com" },
      subjectLabel: { id: "Subjek", en: "Subject" },
      subjectPlaceholder: { id: "Perihal", en: "Subject" },
      messageLabel: { id: "Pesan", en: "Message" },
      messagePlaceholder: { id: "Tulis pesan Anda di sini...", en: "Write your message here..." },
      submitButton: { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },
    },
    labels: {
      location: { id: "Lokasi", en: "Location" },
      email: { id: "Email", en: "Email" },
      phone: { id: "Telepon", en: "Phone" },
    },
  },

  // FOOTER
  footer: {
    tagline: {
      id: "Mengamankan dunia digital, membangun sistem yang kokoh.",
      en: "Securing the digital world, building robust systems.",
    },
    quickLinksTitle: { id: "Tautan Cepat", en: "Quick Links" },
    connectTitle: { id: "Terhubung", en: "Connect" },
    copyright: {
      id: "Open Source dengan ❤️",
      en: "Open Source with ❤️",
    },
    builtWith: {
      id: "Dibuat dengan React & TypeScript",
      en: "Built with React & TypeScript",
    },
  },

  // NAVIGATION MENU
  navigation: {
    links: [
      { id: "home", label: { id: "Beranda", en: "Home" } },
      { id: "about", label: { id: "Tentang", en: "About" } },
      { id: "experience", label: { id: "Pengalaman", en: "Experience" } },
      { id: "projects", label: { id: "Proyek", en: "Projects" } },
      { id: "skills", label: { id: "Keahlian", en: "Skills" } },
      { id: "contact", label: { id: "Kontak", en: "Contact" } },
    ],
  },
};

export default portfolioData;
