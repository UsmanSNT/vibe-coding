import { NextResponse } from "next/server";

// Portfolio API - Abdujalilov Avrangzeb haqida ma'lumot
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") || "uz";
  const section = searchParams.get("section"); // optional: filter by section

  const portfolioData = {
    uz: {
      meta: {
        title: "Abdujalilov Avrangzeb - Portfolio API",
        description: "Tarmoq va Axborot xavfsizligi bo'yicha portfolio ma'lumotlari",
        version: "1.0.0",
        lastUpdated: new Date().toISOString(),
      },
      personal: {
        name: "Abdujalilov Avrangzeb",
        title: "Axborot Xavfsizligi & Tarmoq Mutaxassisi",
        location: "Jeonju, Janubiy Koreya 🇰🇷",
        email: "avrangzeb@example.com",
        phone: "+998 90 123 45 67",
        bio: "Janubiy Koreya, Woosuk Universiteti (Jeonju filiali) Axborot xavfsizligi yo'nalishi bitiruvchi kursi talabasi. Zamonaviy texnologiyalar asosida tarmoq va AI integratsiyasida mutaxassis bo'lishni maqsad qilgan.",
        social: {
          telegram: "@avrangzeb",
          linkedin: "linkedin.com/in/avrangzeb",
          github: "github.com/avrangzeb",
        },
      },
      education: {
        university: "Woosuk Universiteti (우석대학교)",
        faculty: "Axborot xavfsizligi yo'nalishi",
        location: "Jeonju, Janubiy Koreya",
        status: "Bitiruvchi kurs",
        degree: "Bakalavr",
      },
      goal: "Zamonaviy texnologiyalar asosida tarmoq va AI integratsiyasida mutaxassis bo'lish",
      skills: {
        technical: [
          { name: "Cisco Networking", level: 85 },
          { name: "Linux Server", level: 80 },
          { name: "Windows Server", level: 75 },
          { name: "Kiberxavfsizlik", level: 70 },
          { name: "Cloud Computing", level: 65 },
          { name: "Python Scripting", level: 60 },
        ],
        technologies: [
          "TCP/IP", "DNS", "DHCP", "Active Directory", "VMware", "Docker",
          "Ansible", "Git", "Bash", "PowerShell", "Wireshark", "Nmap",
          "pfSense", "MikroTik", "Ubiquiti", "AWS", "Azure"
        ],
      },
      certifications: {
        status: "Tayyorlanmoqda",
        list: [
          {
            name: "네트워크 관리사 2급 (Network Administrator Level 2)",
            status: "preparing",
            description: "Koreys tarmoq administratori sertifikati",
          },
          {
            name: "CCNA - Cisco Certified Network Associate",
            status: "preparing",
            description: "Cisco tarmoq texnologiyalari sertifikati",
          },
          {
            name: "CompTIA Network+",
            status: "preparing",
            description: "Xalqaro tarmoq mutaxassisi sertifikati",
          },
          {
            name: "Linux Professional Institute (LPIC-1)",
            status: "preparing",
            description: "Linux tizim administratori sertifikati",
          },
        ],
      },
      goals: [
        {
          title: "Network Administrator 2-daraja sertifikati",
          description: "Tarmoq administratori sertifikatini olish va professional darajada tarmoqlarni boshqarish ko'nikmalarini egallash.",
          status: "in_progress",
          tags: ["Network", "Certification", "2024"],
        },
        {
          title: "CCNA sertifikatini olish",
          description: "Cisco Certified Network Associate sertifikatini olish orqali tarmoq texnologiyalarida chuqur bilim olish.",
          status: "in_progress",
          tags: ["Cisco", "CCNA", "Routing"],
        },
        {
          title: "AI va Tarmoq integratsiyasi",
          description: "Sun'iy intellekt texnologiyalarini tarmoq xavfsizligi va boshqaruviga qo'llash bo'yicha mutaxassis bo'lish.",
          status: "in_progress",
          tags: ["AI", "Security", "Innovation"],
        },
        {
          title: "Xalqaro IT kompaniyasida ishlash",
          description: "O'rganilgan bilimlarni amalda qo'llash uchun xalqaro IT kompaniyasida tajriba orttirish.",
          status: "in_progress",
          tags: ["Career", "Global", "Experience"],
        },
      ],
      stats: {
        goals: 4,
        certificationsInProgress: 4,
        experience: "Boshlanish",
      },
    },
    en: {
      meta: {
        title: "Abdujalilov Avrangzeb - Portfolio API",
        description: "Portfolio information about Network and Information Security",
        version: "1.0.0",
        lastUpdated: new Date().toISOString(),
      },
      personal: {
        name: "Abdujalilov Avrangzeb",
        title: "Information Security & Network Specialist",
        location: "Jeonju, South Korea 🇰🇷",
        email: "avrangzeb@example.com",
        phone: "+998 90 123 45 67",
        bio: "Senior student at Woosuk University (Jeonju campus), South Korea, majoring in Information Security. Aiming to become a specialist in network and AI integration based on modern technologies.",
        social: {
          telegram: "@avrangzeb",
          linkedin: "linkedin.com/in/avrangzeb",
          github: "github.com/avrangzeb",
        },
      },
      education: {
        university: "Woosuk University (우석대학교)",
        faculty: "Information Security Major",
        location: "Jeonju, South Korea",
        status: "Senior Year",
        degree: "Bachelor's",
      },
      goal: "To become a specialist in network and AI integration based on modern technologies",
      skills: {
        technical: [
          { name: "Cisco Networking", level: 85 },
          { name: "Linux Server", level: 80 },
          { name: "Windows Server", level: 75 },
          { name: "Cybersecurity", level: 70 },
          { name: "Cloud Computing", level: 65 },
          { name: "Python Scripting", level: 60 },
        ],
        technologies: [
          "TCP/IP", "DNS", "DHCP", "Active Directory", "VMware", "Docker",
          "Ansible", "Git", "Bash", "PowerShell", "Wireshark", "Nmap",
          "pfSense", "MikroTik", "Ubiquiti", "AWS", "Azure"
        ],
      },
      certifications: {
        status: "In Progress",
        list: [
          {
            name: "네트워크 관리사 2급 (Network Administrator Level 2)",
            status: "preparing",
            description: "Korean Network Administrator Certification",
          },
          {
            name: "CCNA - Cisco Certified Network Associate",
            status: "preparing",
            description: "Cisco Network Technologies Certification",
          },
          {
            name: "CompTIA Network+",
            status: "preparing",
            description: "International Network Professional Certification",
          },
          {
            name: "Linux Professional Institute (LPIC-1)",
            status: "preparing",
            description: "Linux System Administrator Certification",
          },
        ],
      },
      goals: [
        {
          title: "Network Administrator Level 2 Certification",
          description: "Obtain the Network Administrator certification and master professional network management skills.",
          status: "in_progress",
          tags: ["Network", "Certification", "2024"],
        },
        {
          title: "Obtain CCNA Certification",
          description: "Gain deep knowledge in network technologies through Cisco Certified Network Associate certification.",
          status: "in_progress",
          tags: ["Cisco", "CCNA", "Routing"],
        },
        {
          title: "AI and Network Integration",
          description: "Become a specialist in applying artificial intelligence technologies to network security and management.",
          status: "in_progress",
          tags: ["AI", "Security", "Innovation"],
        },
        {
          title: "Work at International IT Company",
          description: "Gain experience at an international IT company to apply learned knowledge in practice.",
          status: "in_progress",
          tags: ["Career", "Global", "Experience"],
        },
      ],
      stats: {
        goals: 4,
        certificationsInProgress: 4,
        experience: "Starting",
      },
    },
    ko: {
      meta: {
        title: "압두잘릴로프 아브랑제브 - 포트폴리오 API",
        description: "네트워크 및 정보보안 포트폴리오 정보",
        version: "1.0.0",
        lastUpdated: new Date().toISOString(),
      },
      personal: {
        name: "압두잘릴로프 아브랑제브",
        title: "정보보안 & 네트워크 전문가",
        location: "전주, 대한민국 🇰🇷",
        email: "avrangzeb@example.com",
        phone: "+998 90 123 45 67",
        bio: "대한민국 전주 우석대학교 정보보안학과 졸업예정 학생입니다. 현대 기술을 기반으로 네트워크와 AI 통합 분야의 전문가가 되는 것을 목표로 합니다.",
        social: {
          telegram: "@avrangzeb",
          linkedin: "linkedin.com/in/avrangzeb",
          github: "github.com/avrangzeb",
        },
      },
      education: {
        university: "우석대학교 (Woosuk University)",
        faculty: "정보보안학과",
        location: "전주, 대한민국",
        status: "졸업예정",
        degree: "학사",
      },
      goal: "현대 기술을 기반으로 네트워크와 AI 통합 분야의 전문가가 되는 것",
      skills: {
        technical: [
          { name: "Cisco Networking", level: 85 },
          { name: "Linux Server", level: 80 },
          { name: "Windows Server", level: 75 },
          { name: "사이버 보안", level: 70 },
          { name: "Cloud Computing", level: 65 },
          { name: "Python Scripting", level: 60 },
        ],
        technologies: [
          "TCP/IP", "DNS", "DHCP", "Active Directory", "VMware", "Docker",
          "Ansible", "Git", "Bash", "PowerShell", "Wireshark", "Nmap",
          "pfSense", "MikroTik", "Ubiquiti", "AWS", "Azure"
        ],
      },
      certifications: {
        status: "준비 중",
        list: [
          {
            name: "네트워크 관리사 2급",
            status: "preparing",
            description: "한국 네트워크 관리사 자격증",
          },
          {
            name: "CCNA - Cisco Certified Network Associate",
            status: "preparing",
            description: "시스코 네트워크 기술 자격증",
          },
          {
            name: "CompTIA Network+",
            status: "preparing",
            description: "국제 네트워크 전문가 자격증",
          },
          {
            name: "Linux Professional Institute (LPIC-1)",
            status: "preparing",
            description: "리눅스 시스템 관리자 자격증",
          },
        ],
      },
      goals: [
        {
          title: "네트워크 관리사 2급 자격증",
          description: "네트워크 관리사 자격증을 취득하고 전문적인 네트워크 관리 기술을 습득합니다.",
          status: "in_progress",
          tags: ["Network", "Certification", "2024"],
        },
        {
          title: "CCNA 자격증 취득",
          description: "Cisco Certified Network Associate 자격증을 통해 네트워크 기술에 대한 깊은 지식을 습득합니다.",
          status: "in_progress",
          tags: ["Cisco", "CCNA", "Routing"],
        },
        {
          title: "AI와 네트워크 통합",
          description: "인공지능 기술을 네트워크 보안 및 관리에 적용하는 전문가가 됩니다.",
          status: "in_progress",
          tags: ["AI", "Security", "Innovation"],
        },
        {
          title: "글로벌 IT 기업 취업",
          description: "배운 지식을 실무에 적용하기 위해 글로벌 IT 기업에서 경험을 쌓습니다.",
          status: "in_progress",
          tags: ["Career", "Global", "Experience"],
        },
      ],
      stats: {
        goals: 4,
        certificationsInProgress: 4,
        experience: "시작",
      },
    },
  };

  // Get data for requested language
  const data = portfolioData[lang as keyof typeof portfolioData] || portfolioData.uz;

  // If section is specified, return only that section
  if (section && section in data) {
    return NextResponse.json({
      success: true,
      language: lang,
      section: section,
      data: data[section as keyof typeof data],
    });
  }

  // Return all data
  return NextResponse.json({
    success: true,
    language: lang,
    availableLanguages: ["uz", "en", "ko"],
    availableSections: Object.keys(data),
    data: data,
  });
}

// API haqida ma'lumot
export async function OPTIONS() {
  return NextResponse.json({
    name: "Abdujalilov Avrangzeb Portfolio API",
    version: "1.0.0",
    description: "Portfolio ma'lumotlarini olish uchun API",
    endpoints: {
      "GET /api/portfolio": {
        description: "Barcha portfolio ma'lumotlarini olish",
        parameters: {
          lang: {
            type: "string",
            required: false,
            default: "uz",
            options: ["uz", "en", "ko"],
            description: "Til tanlash (O'zbek, English, 한국어)",
          },
          section: {
            type: "string",
            required: false,
            options: ["meta", "personal", "education", "goal", "skills", "certifications", "goals", "stats"],
            description: "Faqat bitta bo'limni olish",
          },
        },
        examples: [
          "GET /api/portfolio",
          "GET /api/portfolio?lang=en",
          "GET /api/portfolio?lang=ko&section=skills",
          "GET /api/portfolio?section=personal",
        ],
      },
    },
    author: {
      name: "Abdujalilov Avrangzeb",
      university: "Woosuk University, South Korea",
      major: "Information Security",
    },
  });
}

