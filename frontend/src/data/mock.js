export const mockData = {
  personalInfo: {
    name: "Parth Vasave",
    title: "Final Year Computer Science Student",
    email: "mailparthvasave@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "Mumbai, India",
    github: "https://github.com/parth-vasave",
    linkedin: "https://linkedin.com/in/parth-vasave",
    resumeUrl: "Images/Parth Resume Aug 2025.pdf"
  },

  about: {
    bio: "Passionate Computer Science student with a strong foundation in software development, algorithms, and system design. I love creating innovative solutions and have experience in full-stack development, machine learning, and mobile applications. Always seeking software engineering opportunities where I can contribute to meaningful projects and continue growing as a developer.",
    interests: ["Full-Stack Development", "Machine Learning", "Artificial Intelligence", "Data Science"],
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science (Data Science)",
        university: "University of Mumbai, India",
        graduation: "Expected June 2026",
        relevantCourses: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Database Systems",
          "Machine Learning",
          "Software Engineering",
          "Computer Networks"
        ]
      },
      {
        degree: "Diploma in Computer Engineering",
        university: "Maharashtra State Board of Technical Education",
        graduation: "June 2022",
        relevantCourses: [
          "Data Structures",
          "Web Development",
          "Mobile Application Development",
          "Python Programming",
          "C++ Programming"
        ]
      }

    ]
  },

  skills: {
    programming: ["JavaScript", "Python", "C++", "TypeScript"],
    web: ["React", "Node.js", "Express", "Next.js", "RESTful APIs"],
    databases: ["MongoDB", "MySQL", "Redis"],
    tools: ["Git", "Docker", "AWS", "Linux"],
    frameworks: ["Spring Boot", "React Native"]
  },

  projects: [
    {
      id: 1,
      title: "Stegano - Steganography Tool",
      description: "A steganography tool that hides and extracts secret messages within images using LSB techniques with a modern web interface.",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN UI"],
      github: "https://github.com/Parth-Vasave/Stegano",
      demo: "https://stegano-dusky.vercel.app",
      image: "Images/SteganoScreenShot.png",
      category: "Security & Cryptography"
    },
    {
      id: 2,
      title: "Inventory Management System",
      description: "A modern inventory management system with real-time tracking, supplier management, and automated reporting dashboard.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
      github: "https://github.com/Parth-Vasave/InventoryManagementSystem",
      image: "Images/Inventory.png",
      category: "Web Application"
    },
    {
      id: 3,
      title: "FileForge - File Management Tool",
      description: "A file management tool for organizing and searching digital files with advanced filtering and batch operations.",
      tech: ["Next.js", "React.js", "TypeScript", "CanvasAPI"],
      github: "https://github.com/Parth-Vasave/FileForge",
      demo: "https://file-forge-rho.vercel.app",
      image: "Images/FileForge.png",
      category: "Web Application"
    },
    {
      id: 4,
      title: "NoTrace - Privacy Protection Tool",
      description: "A privacy protection tool that helps users maintain anonymity online with secure browsing and trace removal features.",
      tech: ["React.js", "Next.js", "CSS"],
      github: "https://github.com/Parth-Vasave/NoTrace",
      demo: "https://no-trace-ruddy.vercel.app",
      image: "Images/NoTrace.png",
      category: "Security & Privacy"
    },
    {
      id: 5,
      title: "AlgoView - Algorithm Visualizer",
      description: "An interactive algorithm visualizer for sorting, searching, and graph algorithms with step-by-step execution.",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      github: "https://github.com/Parth-Vasave/AlgoView",
      demo: "https://algo-view-omega.vercel.app",
      image: "Images/algoview.png",
      category: "Educational Tool"
    },
    {
      id: 6,
      title: "Video Game Sales Forecast",
      description: "A machine learning project that predicts video game sales using regression models and time series analysis.",
      tech: ["Python", "Prophet", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
      github: "https://github.com/Parth-Vasave/VideoGameSalesForecast",
      image: "Images/VideoGameSales.png",
      category: "Machine Learning"
    }
  ],

  experience: [
    {
      id: 1,
      title: "Freelance Developer",
      company: "Various Clients",
      location: "Remote, India",
      duration: "June 2022 - Present",
      description: "Developed various Websites and worked with Python for model training for freelance clients.",
      achievements: [
        "Worked with 7+ industry-level codebases",
        "Led weekly discussion sections after college hours",
        "Had ontime deliverables for 93% of tasks"
      ]
    },
    {
      id: 2,
      title: "Android Developer Intern",
      company: "As Part of Diploma Program",
      location: "Mumbai, India",
      duration: "Oct 2021 - Feb 2022",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
      achievements: [
        "Improved application performance by 30% through code optimization",
        "Implemented various design changes",
        "Contributed to 15+ pull requests and code reviews"
      ]
    }
  ],

  achievements: [
    "Dean's List - Fall 2023, Spring 2024",
    "ACM Programming Contest - Regional Finalist 2024",
    "Google Code Jam - Round 2 Qualifier 2024",
    "Hackathon Winner - Cal Hacks 10.0 (Best Social Impact Award)"
  ]
};