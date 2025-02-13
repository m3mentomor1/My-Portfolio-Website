import { useState, useEffect } from 'react';
import React from "react";
import { ExpandMore, ArrowOutward, ArrowForward, NavigateBefore, NavigateNext } from '@mui/icons-material'; // Import ExpandMore icon

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [stackActiveDropdown, setStackActiveDropdown] = useState<string | null>(null);
  const [currentCompeIndex, setCurrentCompeIndex] = useState(0);
  const [currentL, setCurrentL] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);

  const leadershipData = [
    {
      logo: "/Leadership/Campus DEVCON.png",
      title: "Campus DEVCON",
      institution: "DEVCON Philippines",
      position: "Campus DEVCON Ambassador",
      duration: "January 2024 - December 2024",
      images: [
        "/Leadership/CDA_TN.jpeg",
        "/Leadership/.png",
        "/mnt/data/image3.png",
      ],
      bgColor: "linear-gradient(135deg, #fffa69, #ffa245, #bb88f7, #5cff6c)", // Yellow, Orange, Purple, Green Gradient
      isGradient: true, // Indicate this card uses a gradient
    },
    {
      logo: "/Leadership/MLSA_Logo.png",
      title: "Microsoft Learn Student Ambassadors",
      institution: "Technological Institute of the Philippines - Quezon City",
      position: "Microsoft Learn Student Ambassador (Alpha)",
      duration: "January 2024 - October 2024",
      images: [
        "/Leadership/MLSA_Cert.png",
        "/mnt/data/image2.png",
        "/mnt/data/image3.png",
      ],
      bgColor: "#D6EAF8", // Light Blue
      isGradient: false,
    },
    {
      logo: "/Leadership/MSC_Logo.png",
      title: "Microsoft Student Community",
      institution: "Technological Institute of the Philippines - Quezon City",
      position: "Founder/President, Creatives Committee Head",
      duration: "August 2023 - May 2024",
      images: [
        "/Leadership/MSC-RSO_Cert.jpeg",
        "/Leadership/MSC-SLF.png",
        "/Leadership/MSC-SLO.png",
      ],
      bgColor: "#FAD7A0", // Light Orange
      isGradient: false,
    },
    {
      logo: "/Leadership/MSC_TIPM.png",
      title: "Microsoft Student Community",
      institution: "Technological Institute of the Philippines - Manila",
      position: "Research Committee Member",
      duration: "November 2022 - May 2023",
      images: [
        "/mnt/data/image1.png",
        "/mnt/data/image2.png",
        "/mnt/data/image3.png",
      ],
      bgColor: "#FAD7A0", // Light Orange
      isGradient: false,
    },
  ];

  const volunteeringData = [
    {
      eventName: "Campus DEVCON Summit 2024: Tech Nexus",
      organizer: "Campus DEVCON Ambassadors",
      location: "University of Batangas - Lipa Campus",
      role: "Registration Team Member",
      contributions: "Campus DEVCON Ambassador",
      date: "December 7, 2024",
      images: [
        "/Volunteering/CDS-ID.jpg",
        "/Volunteering/CDA_TN.jpeg",
        "/Volunteering/CDS_AP.jpg",
        "/Volunteering/CDS_ASP.jpg",
        "/Volunteering/CDS_CP.jpg",
      ],
    },
    {
      eventName: "Cre-AI-tivity: AIdea-Driven Innovations in Tech and Play",
      organizer: "Campus DEVCON Ambassadors • Microsoft Learn Student Ambassadors • T.I.P. QC Computer Engineering Department",
      location: "Technological Institute of the Philippines (T.I.P.) - Quezon City",
      role: "Core & Creatives Team Lead",
      contributions: "Campus DEVCON Ambassador",
      date: "October 4-5, 2024",
      images: [
        "/Volunteering/CAT-Start.jpg",
        "/Volunteering/CAT-D1S1CP.jpg",
        "/Volunteering/CAT-D1S2CP.jpg",
        "/Volunteering/CAT-D2S1SP.jpg",
        "/Volunteering/CAT-D2S2CP.jpg",
      ],
    },
    {
      eventName: "No-code AI: Automated Model Training Using Azure Machine Learning Studio",
      organizer: "Microsoft Learn Student Ambassadors",
      location: "Microsoft Teams",
      role: "Organizer, Speaker",
      contributions: "Organizer, Speaker",
      date: "September 13, 2024",
      images: [
        "/Volunteering/NCAI-1.png",
        "/Volunteering/NCAI-2.png",
        "/Volunteering/NCAI-3.png",
        "/Volunteering/NCAI-4.png",
        "/Volunteering/NCAI-5.png",
      ],
    },
    {
      eventName: "General Assembly: Ignite Your Inner Curiosity!",
      organizer: "Microsoft Student Community - T.I.P. QC",
      location: "Microsoft Teams",
      role: "Core Team Lead, Speaker",
      contributions: "Organizer, Speaker",
      date: "November 18, 2023",
      images: [
        "/Volunteering/MSCGA-1.png",
        "/Volunteering/MSCGA-2.png",
        "/Volunteering/MSCGA-3.png",
        "/Volunteering/MSCGA-4.png",
        "/Volunteering/MSCGA-5.png",
      ],
    },
    {
      eventName: "RETROTECH: Crack the Code, Seize the Flag!! (Capture The Flag 2023)",
      organizer: "Microsoft Student Community - T.I.P. QC",
      location: "Technological Institute of the Philippines (T.I.P.) - Quezon City",
      role: "Game Master",
      contributions: "Campus DEVCON Ambassador",
      date: "November 17 & 25, 2023",
      images: [
        "/Volunteering/RT-1.png",
        "/Volunteering/RT-2.png",
        "/Volunteering/RT-3.png",
        "/Volunteering/RT-4.png",
        "/Volunteering/RT-5.png",
        "/Volunteering/RT-6.png",
      ],
    },
    {
      eventName: "Building Bridges: Celebrating Student Leadership and Technical Excellence",
      organizer: "Microsoft Student Community - T.I.P. Manila",
      location: "Technological Institute of the Philippines (T.I.P.) - Manila",
      role: "Technical Team Member",
      contributions: "As a member of the technical team, I managed the coordination of visual aids, including PowerPoint slides and videos. Additionally, I was also one of the facilitators in its networking games.",
      date: "Mar 25, 2023",
      images: [
        "/Volunteering/BB-ID.png",
        "/Volunteering/BB-Start.jpg",
        "/Volunteering/BB-Talk.jpg",
        "/Volunteering/BB-Organizers.jpg",
        "/Volunteering/BB-ComPic.jpg",
      ],
    },
  ];

  const handleNextL = () => {
    setCurrentL((prev) => (prev + 1) % leadershipData.length);
  };

  const handlePrevL = () => {
    setCurrentL((prev) => (prev - 1 + leadershipData.length) % leadershipData.length);
  };

  const handleNextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % volunteeringData.length);
  };
  
  const handlePrevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + volunteeringData.length) % volunteeringData.length);
  };

  const sections = [
    {
      title: "Course, Test, & Exam Completion",
      items: [
        {
          name: "Machine Learning Pipelines with Azure ML Studio",
          issuer: "Coursera Project Network",
          date: "Feb 2025",
          image: "/Certifications/ML Pipelines.png",
        },
        {
          name: "DevNet Associate",
          issuer: "Cisco Networking Academy",
          date: "Jan 2025",
          image: "/Certifications/DevNet_Associate.png",
        },
        {
          name: "EF Standard English Test (EF SET)",
          issuer: "EF Standard English Test (EF SET) ",
          date: "Aug 2024",
          image: "/Certifications/EF Standard English Test (SET).png",
        },
        {
          name: "CCNA: Switching, Routing, and Wireless Essentials",
          issuer: "Cisco Networking Academy",
          date: "Jan 2024",
          image: "/Certifications/Switching, Routing, and Wireless Essentials.png",
        },
        {
          name: "Microsoft Learn AI Skills Challenge",
          issuer: "Microsoft Learn",
          date: "August 2023",
          image: "/Certifications/Microsoft Learn AI Skills Challenge.png",
        },
        {
          name: "Foundations of Project Management",
          issuer: "Coursera (Google)",
          date: "July 2023",
          image: "/Certifications/Foundations of Project Management.png",
        },
        {
          name: "CCNA: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          date: "June 2023",
          image: "/Certifications/Introduction to Networks.jpg",
        },
        {
          name: "Python Essentials 2",
          issuer: "Cisco Networking Academy",
          date: "Dec 2022",
          image: "/Certifications/Python Essentials 2.png",
        },
        {
          name: "Python Essentials 1",
          issuer: "Cisco Networking Academy",
          date: "Aug 2022",
          image: "/Certifications/Python Essentials 1.png",
        },
        {
          name: "Job Ready - 21st Century Core Employability Skills",
          issuer: "Wadhwani Foundation",
          date: "May 2022",
          image: "/Certifications/Job Ready.png",
        },
        {
          name: "IT Essentials",
          issuer: "Cisco Networking Academy",
          date: "Jan 2022",
          image: "/Certifications/IT Essentials.png",
        },
      ],
    },
    {
      title: "Seminars, Workshops, & Event Participation",
      items: [
        {
          name: "Overview on Current Trends in Technology",
          issuer: "Technological Institute of the Philippines, Career Center • Data Plus IT Solutions, Inc",
          date: "April 2023",
          image: "/Certifications/Overview on Current Trends in Technology.jpg",
        },
        {
          name: "UI/UX Mastery: Unlocking the Power of User-Centered Design",
          issuer: "Institute of Computer Engineers of the Philippines Student Edition - T.I.P. Quezon City Chapter",
          date: "Mar 2023",
          image: "/Certifications/UIUX Mastery.jpg",
        },
        {
          name: "ULead: A Leader with the Right Mindset",
          issuer: "University of the East - Manila College Y Club",
          date: "Nov 2022",
          image: "/Certifications/ULead.jpg",
        },
        {
          name: "Build a website to Showcase your Resume with GitHub",
          issuer: "Microsoft Student Community - T.I.P. Manila",
          date: "Oct 2022",
          image: "/Certifications/Build a website.jpeg",
        },
        {
          name: "Designing Creative Presentations using Microsoft PowerPoint",
          issuer: "Microsoft Student Community - T.I.P. Manila",
          date: "Oct 2022",
          image: "/Certifications/Designing Creative PPT.jpeg",
        },
        {
          name: "Into The Cyverse: Exceeding Visions in the Realm of Technological Opportunities",
          issuer: "Microsoft Student Community - T.I.P. Manila • Open Society - T.I.P. Manila • Information & Computing Organization of Networked Students - T.I.P. Manila",
          date: "April 2022",
          image: "/Certifications/Into the Cyverse.jpeg",
        },
        {
          name: "Into the Cryptoverse",
          issuer: "Institute of Computer Engineers of the Philippines - Student Edition",
          date: "Mar 2022",
          image: "/Certifications/Into the Cryptoverse.jpeg",
        },
        {
          name: "Mobile Application Development using React Native",
          issuer: "Institute of Computer Engineers of the Philippines Student Edition - T.I.P. Quezon City Chapter",
          date: "Jan 2022",
          image: "/Certifications/Mobile App Dev.jpeg",
        },
        {
          name: "Build an AI: An Introduction to Artificial Intelligence",
          issuer: "Institute of Computer Engineers of the Philippines Student Edition - T.I.P. Quezon City Chapter",
          date: "Oct 2021",
          image: "/Certifications/Build an AI.jpeg",
        },
      ],
    },
    {
      title: "Honors & Awards",
      items: [
        {
          name: "GAWAD T.I.P. Award",
          issuer: "Technological Institute of the Philippines - Quezon City",
          date: "May 2024",
          image: "/Certifications/GAWAD.jpeg",
        },
        {
          name: "Dean's Lister (1st-Year, 2nd Semester)",
          issuer: "Technological Institute of the Philippines - Quezon City",
          date: "Aug 2022",
          image: "/Certifications/Deans.png",
        },
        {
          name: "VPAA's Lister (1st-Year, 1st Semester)",
          issuer: "Technological Institute of the Philippines - Quezon City",
          date: "Jan 2022",
          image: "/Certifications/VPAAs.png",
        },
      ],
    },
  ];

  const [selectedSection, setSelectedSection] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = sections[selectedSection].items.length;
  let startX = 0;
  let isDragging = false;

  const handleSwipe = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalItems - 1;
      if (newIndex >= totalItems) newIndex = 0;
      return newIndex;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;
    if (diff > 20) handleSwipe(1);
    if (diff < -20) handleSwipe(-1);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX = e.clientX;
    isDragging = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    let endX = e.clientX;
    let diff = startX - endX;
    if (diff > 50) handleSwipe(1);
    if (diff < -50) handleSwipe(-1);
    isDragging = false;
  };


  const competitions = [
    {
      title: 'Meralco IDOL Hackathon',
      place: "Finalist 🏅",
      by: "Meralco Power Academy",
      description:
        "Task was to suggest changes to the existing user interface of the respective website/app, provided in the problem statement.",
      images: [
        "/Competitions/Meralco IDOL Hackathon/1.jpg",
        "/Competitions/Meralco IDOL Hackathon/2.jpg",
        "/Competitions/Meralco IDOL Hackathon/3.jpg",
        "/Competitions/Meralco IDOL Hackathon/4.jpg",
        "/Competitions/Meralco IDOL Hackathon/5.jpg",
        "/Competitions/Meralco IDOL Hackathon/6.jpg",
      ],
      },
    {
      title: 'International Symposium on Education and AI Convergence - ISEAC 2023',
      place: "2nd Place Winner 🥈",
      by: "University of the Philippines Open University (UPOU)",
      description:
        "The Problem Statement was given, and the team needs to submit it within the given time period.",
      images: [
        "/Competitions/ISEAC 2023/1.jpg",
        "/Competitions/ISEAC 2023/2.jpeg",
        "/Competitions/ISEAC 2023/3.jpeg",
        "/Competitions/ISEAC 2023/4.jpg",
        "/Competitions/ISEAC 2023/5.jpg",
        "/Competitions/ISEAC 2023/6.jpg",
        "/Competitions/ISEAC 2023/6.jpg",
      ],
      },
    {
      title: 'Imagine Cup 2023: Phillippine National Finals',
      place: "National Finalist 🏆",
      by: "Microsoft",
      description:
        "A case-based round on a real-life problem statement of an NGO or startup.",
      images: [
        "/Competitions/Imagine Cup 2023/1.jpg",
        "/Competitions/Imagine Cup 2023/2.jpg",
        "/Competitions/Imagine Cup 2023/3.png",
        "/Competitions/Imagine Cup 2023/4.jpeg",
        "/Competitions/Imagine Cup 2023/5.jpeg",
        "/Competitions/Imagine Cup 2023/6.jpeg",
        "/Competitions/Imagine Cup 2023/7.jpg",
        "/Competitions/Imagine Cup 2023/8.jpg",
      ],
      },
  ];

  interface EducationItem {
    degree: string;
    specialization: string;
    institution: string;
    date: string;
  }
  
  interface ExperienceItem {
    position: string;
    company: string;
    location: string;
    date: string;
    description: string;
    employmentType: string;
  }

  const education_experience_items: { title: string; items: EducationItem[] | ExperienceItem[] }[] = [
    {
      title: "Education",
      items: [
        {
          degree: "Bachelor of Science - BS, Computer Engineering",
          specialization: "Specializing in Intelligent Systems",
          institution: "College • Technological Institute of the Philippines - Quezon City",
          date: "2021 – Present",
        },
        {
          degree: "Information and Communication Technology - ICT, Strand",
          specialization: "Technical-Vocational Livelihood - TVL, Track",
          institution: "Senior High School • Colegio De San Jose Del Monte Inc.",
          date: "2019 – 2021",
        },
      ] as EducationItem[],
    },
    {
      title: "Experience",
      items: [
        {
          position: "IT Director (Trainee)",
          company: "SOLHAUS Limited (so/ul)",
          location: "Remote",
          date: "July 2024 – July 2024",
          employmentType: "Part-time",
          description: "Worked on developing and optimizing front-end applications using React and TypeScript. Assisted in API integration and database management."
        },
        {
          position: "Web Development Intern",
          company: "ChatGenie.PH",
          location: "Remote",
          date: "Mar 2024 – April 2023",
          employmentType: "Internship",
          description: "Designed and developed responsive websites for small businesses using React, Next.js, and Tailwind CSS."
        },
        {
          position: "Customer Experience Agent",
          company: "Alorica",
          location: "On-site",
          date: "Mar 2024 – Mar 2024",
          employmentType: "Part-time",
          description: "Designed and developed responsive websites for small businesses using React, Next.js, and Tailwind CSS."
        }
      ] as ExperienceItem[],
    }
  ];
  

  const handleNext = () => {
    setCurrentCompeIndex((prevIndex) =>
      prevIndex === competitions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentCompeIndex((prevIndex) =>
      prevIndex === 0 ? competitions.length - 1 : prevIndex - 1
    );
  };  

  // Explicitly typing 'section' as one of the allowed categories
  const toggleDropdown = (section: "UI/UX" | "Web Development" | "Mobile Development" | "AI/ML" | "Data Projects" | "Other Projects") => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const stackToggleDropdown = (
    section: "UI/UX" | "Frontend" | "Backend" | "AI/ML" | "DevOps" |"Other Tools"
  ) => {
    setStackActiveDropdown(stackActiveDropdown === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#faf9f6]/50 backdrop-blur' : 'bg-transparent'
        } h-20`}
      >
        <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo/Name */}
          <h1 className="text-base md:text-lg font-bold text-gray-800">
            Shain Sahagun
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-sm md:text-base text-gray-600 hover:text-gray-800"
            >
              About
            </a>
            <a
              href="#education"
              className="text-sm md:text-base text-gray-600 hover:text-gray-800"
            >
              Education & Industry Experience
            </a>
            <a
              href="#stack"
              className="text-sm md:text-base text-gray-600 hover:text-gray-800"
            >
              My Personal Stack
            </a>
            <a
              href="#projects"
              className="text-sm md:text-base text-gray-600 hover:text-gray-800"
            >
              Projects
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm md:text-base text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                More
                <ExpandMore
                  className={`ml-1 transition-transform ${
                    isDropdownOpen ? 'animate-rotateIn' : 'animate-rotateOut'
                  }`}
                />
              </button>
              <div
                className={`absolute top-14 right-0 bg-white shadow-md rounded-lg p-4 md:w-[240px] origin-top transition-transform duration-300 ${
                  isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-100'
                }`}
              >
                <a
                  href="#licenses"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Licenses, Certifications, & Awards
                </a>
                <a
                  href="#competitions"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Competitions
                </a>
                <a
                  href="#leadership"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Leadership Background
                </a>
                <a
                  href="#volunteering"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Volunteering
                </a>
                <a
                  href="#contact"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="#about"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              About
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              More
              <ExpandMore
                className={`ml-1 transition-transform ${
                  isMobileMenuOpen ? 'animate-rotateIn' : 'animate-rotateOut'
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white shadow-md rounded-lg p-4 origin-top transition-transform duration-300 ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-100'
          }`}
        >
          <a
            href="#education"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Education & Work Experience
          </a>
          <a
            href="#stack"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            My Personal Stack
          </a>
          <a
            href="#projects"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Projects
          </a>
          <a
            href="#licenses"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Licenses, Certifications, & Awards
          </a>
          <a
            href="#competitions"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Competitions
          </a>
          <a
            href="#leadership"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Leadership Experience
          </a>
          <a
            href="#volunteering"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Volunteering
          </a>
          <a
            href="#contact"
            className="block py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Content Sections */}
      <div className="pt-20"> {/* Matches header height */}
        {/* About Section */}
        <section
          id="about"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] relative flex items-center justify-center shadow-[0px_10px_10px_rgba(0,0,0,0.1)]"
        >
          {/* Text Wrapper for Desktop */}
          <div className="max-w-6xl mx-auto px-4 w-full relative z-10 hidden md:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left">
              <h1 className="text-2xl md:text-[80px] font-inter font-semibold text-gray-800 mr-[200px] md:mr-[620px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
                Shain<br/><span className="block mt-1 md:mt-[60px]">Sahagun.</span>
              </h1>
              {/* Rectangle */}
              <div className="w-[38px] h-[10px] md:w-[240px] md:h-[20px] bg-gray-800 mt-[10px] md:mt-[50px] md:ml-[6.5px] mb-[20px]"></div>
              {/* Socials Section */}
              <div className="flex items-center space-x-7 mt-[10px] md:mt-[30px] md:ml-[6.5px] mb-[20px]">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/shain-sahagun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/LinkedIn-icon-black.png`}
                    alt="LinkedIn"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                  />
                </a>
                {/* GitHub Button */}
                <a
                  href="https://github.com/m3mentomor1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/GitHub-icon-black.png`}
                    alt="GitHub"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                  />
                </a>

                {/* Behance Button */}
                <a
                  href="https://www.behance.net/shainsahagun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Behance.png`}
                    alt="Behance"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                  />
                </a>
              </div>

              {/* ABOUT ME Text */}
              <div className="bg-white/90 p-6 rounded-lg shadow-lg mt-4 md:ml-[600px] md:w-[530px]">
                <h1 className="text-1xl md:text-[15px] font-inter font-bold text-gray-800/80">
                  ABOUT ME
                </h1>
                <p className="text-1xl md:text-[18px] font-inter font-bold text-gray-800 mt-1">
                  An aspiring multidisciplinary Software & AI/ML Engineer, based in the Philippines.
                </p>
                <h1 className="text-1xl md:text-[15px] font-inter font-bold text-gray-800/80 mt-5">
                  FOCUS
                </h1>
                <p className="text-1xl md:text-[14px] font-inter text-gray-800 mt-1">
                  - Frontend & Backend Development (Cross-platform Mobile & Web apps)
                  <br />- AI/ML (Machine Perception: Computer Vision, NLP)
                  <br />- Integration of Cloud Technologies into Mobile & Web apps
                </p>
                <p className="text-1xl md:text-[15px] font-inter font-bold text-gray-800 mt-5">
                  "I build software solutions that utilize AI & Cloud technologies."
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src={`${process.env.PUBLIC_URL}/images/2x2.png`}
            alt="About"
            className="absolute bottom-0 right-2 md:right-auto md:left-1/2 md:translate-x-[-60%] w-[18rem] md:w-[48rem] z-0"
          />

          {/* Text for Mobile */}
          <div className="block md:hidden mt-4 px-4 text-center z-20">
            <h1 className="text-lg font-inter font-bold text-gray-800 mt-20">
              ABOUT ME
            </h1>
            <p className="text-s text-gray-800 mt-1">
              I'm an aspiring multidisciplinary Software & AI/ML Engineer, based in the Philippines.
            </p>
          </div>
        </section>
        
        {/* Education Section */}
        <section
        id="education"
        className="h-[480px] md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center px-4 md:px-10"
      >
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
            {(education_experience_items[0].items as EducationItem[]).map((edu, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 relative mb-4">
                <p className="text-sm text-gray-600">{edu.date}</p>
                <h3 className="text-[17px] font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-600 font-semibold">{edu.specialization}</p>
                <p className="mt-2 text-sm text-gray-600">{edu.institution}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
            {(education_experience_items[1].items as ExperienceItem[]).map((exp, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 relative mb-4">
                <h3 className="text-[17px] font-bold text-gray-800">{exp.position}</h3>
                <p className="text-sm text-gray-600 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.location}</p>

                {/* Aligning date & employment type to the right */}
                <div className="absolute top-4 right-4 text-right">
                  <p className="text-sm text-gray-600">{exp.date}</p>
                  <p className="text-sm text-gray-600 mt-1">{exp.employmentType}</p>
                </div>

                {/* Create a flex container to push the button to the right */}
                <div className="flex justify-between items-center mt-1">
                  <div></div> {/* Empty div to push the button to the right */}
                  <button className="text-gray-800 text-sm flex items-center hover:text-gray-500 transition-all">
                    See more <ArrowForward className="ml-[4px]" style={{ fontSize: "18px" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Personal Stack Section */}
        <section
          id="stack"
          className="min-h-[450px] md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center px-4 md:px-10"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-[60px]">
            Personal Stack
          </h2>

          {/* Dropdown Menus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[150px] w-full max-w-[1120px]">
            {[
              {
                category: "UI/UX",
                items: [
                  { name: "Figma", image: "/Stack-Images/Figma.png" },
                  { name: "Canva", image: "/Stack-Images/Canva.png" },
                  { name: "Photopea", image: "/Stack-Images/Photopea.png" },
                  { name: "Material Design", image: "/Stack-Images/MaterialDesign.png" },
                ],
                pluginsAndFiles: [
                  { name: "Material Symbols (By Google Fonts)", image: "/Stack-Images/FigmaMD.png" },
                  { name: "Material Design Icons (By Google Fonts)", image: "/Stack-Images/FigmaMD.png" },
                ],
              },
              {
                category: "Frontend",
                isSpecial: true, // Mark Frontend as a special category
              },
              {
                category: "Backend",
                isSpecial: true, // Mark Backend as a special category
              },
              {
                category: "AI/ML",
                items: [
                  { name: "Python", image: "/Stack-Images/Python.png" },
                  { name: "OpenCV", image: "/Stack-Images/OpenCV.png" },
                  { name: "PyTorch", image: "/Stack-Images/Pytorch.png" },
                  { name: "TensorFlow", image: "/Stack-Images/Tensorflow.png" },
                  { name: "scikit-learn", image: "/Stack-Images/Scikit.png" },
                  { name: "Azure ML Studio", image: "/Stack-Images/AzureML.png" },
                  { name: "Streamlit", image: "/Stack-Images/Streamlit.png" },
                ],
              },
              {
                category: "DevOps",
                items: [
                  { name: "Git", image: "/Stack-Images/Git.png" },
                  { name: "GitHub", image: "/Stack-Images/Github.png" },
                  { name: "GitHub Actions", image: "/Stack-Images/GithubActions.png" },
                  { name: "Azure Static Web Apps", image: "/Stack-Images/AzureStatic.png" },                  
                  { name: "Docker", image: "/Stack-Images/Docker.png" },
                  { name: "Azure App Service", image: "/Stack-Images/AppService.png" },
                ],
              },
              {
                category: "Other Tools",
                items: [
                  { name: "Postman", image: "/Stack-Images/Postman.png" },
                  { name: "Azure Data Studio", image: "/Stack-Images/AzureDataStudio.png" },
                ],
              },
            ].map(({ category, items, pluginsAndFiles, isSpecial }) => (
              <div key={category} className="relative">
                {isSpecial ? (
                  <>
                    <button
                      onClick={() =>
                        stackToggleDropdown(category as "Frontend" | "Backend")
                      }
                      className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-lg text-gray-800 font-semibold focus:outline-none hover:bg-gray-100 transition"
                    >
                      {category}
                      <ExpandMore
                        className={`ml-2 transition-transform duration-300 ${
                          stackActiveDropdown === category ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        stackActiveDropdown === category ? "max-h-auto" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 mt-2 rounded-b-lg shadow-md">
                        {/* Web Section */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Web</h3>
                          <div className="grid grid-cols-4 gap-4">
                            {(category === "Frontend" && "Backend"
                              ? [
                                  { name: "TypeScript", image: "/Stack-Images/Typescript_Logo.png" },
                                  { name: "HTML", image: "/Stack-Images/HTML.png" },
                                  { name: "CSS", image: "/Stack-Images/CSS.png" },
                                  { name: "React", image: "/Stack-Images/React.png" },                          
                                  { name: "Tailwind CSS", image: "/Stack-Images/Tailwind.png" },
                                  { name: "Material UI", image: "/Stack-Images/MaterialUI.png" },
                                ]
                              : [
                                  { name: "FastAPI", image: "/Stack-Images/FastAPI.png" },
                                  { name: "Azure DB for PostgreSQL", image: "/Stack-Images/AzureDB.png" },
                                  { name: "Azure Blob Storage", image: "/Stack-Images/AzureBlob.png" },
                                  { name: "Supabase DB", image: "/Stack-Images/SupabaseDB.png" },
                                  { name: "Supabase Storage", image: "/Stack-Images/SupabaseStorage.png" },
                                  { name: "Supabase Auth", image: "/Stack-Images/SupabaseAuth.png" },
                                ]
                            ).map((tool) => (
                              <div key={tool.name} className="flex flex-col items-center">
                                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={`${process.env.PUBLIC_URL}${tool.image}`}
                                    alt={tool.name}
                                    className="w-11 h-11 object-contain"
                                  />
                                </div>
                                <p className="mt-2 text-center text-sm text-gray-700 font-medium">{tool.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Mobile Section */}
                        <div className="mt-8">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Mobile</h3>
                          <div className="grid grid-cols-4 gap-4">
                            {(category === "Frontend" && "Backend"
                              ? [
                                  { name: "TypeScript", image: "/Stack-Images/Typescript_Logo.png" },
                                  { name: "React Native", image: "/Stack-Images/ReactNative.png" },                         
                                  { name: "Expo", image: "/Stack-Images/Expo.png" },
                                ]
                              : [
                                  { name: "FastAPI", image: "/Stack-Images/FastAPI.png" },
                                  { name: "SQLite", image: "/Stack-Images/Sqlite.png" },
                                  { name: "Azure DB for PostgreSQL", image: "/Stack-Images/AzureDB.png" },
                                  { name: "Azure Blob Storage", image: "/Stack-Images/AzureBlob.png" },
                                  { name: "Supabase DB", image: "/Stack-Images/SupabaseDB.png" },
                                  { name: "Supabase Storage", image: "/Stack-Images/SupabaseStorage.png" },
                                  { name: "Supabase Auth", image: "/Stack-Images/SupabaseAuth.png" },
                                ]
                            ).map((tool) => (
                              <div key={tool.name} className="flex flex-col items-center">
                                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={`${process.env.PUBLIC_URL}${tool.image}`}
                                    alt={tool.name}
                                    className="w-11 h-11 object-contain"
                                  />
                                </div>
                                <p className="mt-2 text-center text-sm text-gray-700 font-medium">{tool.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        stackToggleDropdown(category as "UI/UX" | "AI/ML" | "Other Tools")
                      }
                      className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-lg text-gray-800 font-semibold focus:outline-none hover:bg-gray-100 transition"
                    >
                      {category}
                      <ExpandMore
                        className={`ml-2 transition-transform duration-300 ${
                          stackActiveDropdown === category ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        stackActiveDropdown === category ? "max-h-auto" : "max-h-0"
                      }`}
                    >
                      <div className="p-4 mt-2 rounded-b-lg shadow-md">
                        <div className="grid grid-cols-4 gap-4">
                          {items?.map((tool) => (
                            <div key={tool.name} className="flex flex-col items-center">
                              <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                <img
                                  src={`${process.env.PUBLIC_URL}${tool.image}`}
                                  alt={tool.name}
                                  className="w-11 h-11 object-contain"
                                />
                              </div>
                              <p className="mt-2 text-center text-sm text-gray-700 font-medium">{tool.name}</p>
                            </div>
                          ))}
                        </div>

                        {/* Figma Plugins & Design Files */}
                        {pluginsAndFiles && (
                          <>
                            <h3 className="mt-8 mb-4 text-lg font-semibold text-gray-800">
                              Figma Plugins & Design Files
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                              {pluginsAndFiles.map((plugin) => (
                                <div key={plugin.name} className="flex flex-col items-center">
                                  <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                                    <img
                                      src={`${process.env.PUBLIC_URL}${plugin.image}`}
                                      alt={plugin.name}
                                      className="w-11 h-11 object-contain"
                                    />
                                  </div>
                                  <p className="mt-2 text-center text-sm text-gray-700 font-medium">
                                    {plugin.name}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-[580px] md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-[60px]">
            Projects
          </h2>
          {/* Add container with same limits as navbar */}
          <div className="max-w-6xl mx-auto px-4 w-full mb-[50px]">
            {["UI/UX", "Web Development", "Mobile Development", "AI/ML", "Data Projects", "Other Projects"].map((category) => (
              <div key={category} className="mb-4">
                <button
                  onClick={() =>
                    toggleDropdown(
                      category as "Web Development" | "Mobile Development" | "AI/ML" | "Data Projects" | "Other Projects"
                    )
                  }
                  className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-lg text-gray-800 font-semibold focus:outline-none hover:bg-gray-100 transition"
                >
                  {category}
                  <ExpandMore
                    className={`ml-2 transition-transform duration-300 ${
                      activeDropdown === category ? "animate-rotateIn" : "animate-rotateOut"
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeDropdown === category ? "max-h-auto" : "max-h-0"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Define specific projects */}
                    {category === "UI/UX" &&
                      [
                        {
                          header: "Habit Tracker App",
                          description: `Design mockups for a project called RockeTasks, a habit tracker mobile app that utilizes gamification to help users improve their habits and achieve their goals.`,
                          link: "https://github.com/m3mentomor1/RockeTasks-Design",
                          image: "/Card-Preview-Images/RockeTasks-Screenshot.png",
                        },
                        {
                          header: "Online Proctoring Software",
                          description: "Design mockups for a project called Proctoria, an AI-powered desktop app for proctoring & administering online exams, including preventing & detecting instances of cheating.",
                          link: "https://github.com/m3mentomor1/Proctoria-Design",
                          image: "/Card-Preview-Images/Proctoria-Screenshot.png",
                        },
                        {
                          header: "Threat Modeling App",
                          description: "Design mockups for a project called SafeBoxx., an automated threat-modeling mobile app designed to identify potential privacy and security threats and vulnerabilities in social media applications, including a list of countermeasures to mitigate these identified risks.",
                          link: "https://github.com/m3mentomor1/SafeBoxx.-Design",
                          image: "/Card-Preview-Images/SafeBoxx-Screenshot.png",
                        },
                        {
                          header: "Locker Reservation App",
                          description: "Design mockups for a project called SecureSpot, a mobile app that allows users to find and reserve lockers near parking lots & parking spaces.",
                          link: "https://github.com/m3mentomor1/SecureSpot-Design",
                          image: "/Card-Preview-Images/SecureSpot-Screenshot.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}

                    {category === "Web Development" &&
                      [
                        {
                          header: "Dating Web App",
                          description: `This is a dating web app project called "OneSwipe" that mimics how Tinder works, with a few modifications.`,
                          link: "https://github.com/m3mentomor1/OneSwipe",
                          image: "/Card-Preview-Images/OneSwipe-Screenshot.png",
                        },
                        {
                          header: "CMS Platform",
                          description: "Developed a content management system using React and Node.js.",
                          link: "https://example.com/cms",
                          image: "/images/cms-platform.png",
                        },
                        {
                          header: "The Tell-Tale Heart Narrative Webpage",
                          description: "This is a simple static webpage using only HTML & CSS.",
                          link: "https://github.com/m3mentomor1/The_Tell-Tale_Heart_Narrative_Webpage",
                          image: "/Card-Preview-Images/TellTale-Screenshot.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}

                    {category === "Mobile Development" &&
                      [
                        {
                          header: "Fitness Tracker",
                          description: "A mobile app for tracking fitness goals and progress.",
                          link: "https://example.com/fitness-tracker",
                          image: "/images/fitness-tracker.png",
                        },
                        {
                          header: "Chat Application",
                          description: "Developed a real-time chat app using Flutter.",
                          link: "https://example.com/chat-app",
                          image: "/images/chat-application.png",
                        },
                        {
                          header: "Budget Manager",
                          description: "An intuitive mobile app for managing personal finances.",
                          link: "https://example.com/budget-manager",
                          image: "/images/budget-manager.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}

                    {category === "AI/ML" &&
                      [
                        {
                          header: "Pneumonia Image Classification with Lightweight CNN Models",
                          description: "This project evaluates the effectiveness of 3 lightweight CNN models in detecting pneumonia in chest X-ray images, considering both performance & computational efficiency. The images are categorized into three classes: Bacterial Pneumonia, Viral Pneumonia, or Normal.",
                          link: "https://github.com/m3mentomor1/Pneumonia_Detection_with_Lightweight-CNN-Models",
                          image: "/Card-Preview-Images/Pneumonia-Screenshot.png",
                        },
                        {
                          header: "Flower Image Classification with InceptionV3",
                          description: "This is a deep learning project for flower image classification using the InceptionV3 CNN architecture. The project leverages transfer learning on the InceptionV3 pre-trained model, fine-tuning it on a specific dataset of flower images.",
                          link: "https://github.com/m3mentomor1/Flower-Image-Classification-with-InceptionV3",
                          image: "/Card-Preview-Images/Flower-Screenshot.jpg",
                        },
                        {
                          header: "Breast Cancer Image Classification with DenseNet121",
                          description: "This is a deep learning project for classifying breast ultrasound images into three categories: benign, malignant, or normal, thus determining the presence of breast cancer.",
                          link: "https://github.com/m3mentomor1/Breast-Cancer-Image-Classification-with-DenseNet121",
                          image: "/Card-Preview-Images/BreastCancer-Screenshot.png",
                        },
                        {
                          header: "Raised Finger Counter using MediaPipe",
                          description: "This is a computer vision-based raised finger counter program that utilizes the MediaPipe library to identify hand landmarks and extract relevant information to count the number of raised fingers in a live webcam feed.",
                          link: "https://github.com/m3mentomor1/Raised-Finger-Counter-With-MediaPipe",
                          image: "/Card-Preview-Images/Raised-Screenshot.png",
                        },
                        {
                          header: "Automated Model Training with Azure ML Studio",
                          description: "This is a no-code tutorial project that involves training a model using Automated ML/AutoML in Azure Machine Learning Studio.",
                          link: "https://github.com/m3mentomor1/Automated-Model-Training_with_Azure-ML-Studio",
                          image: "/Card-Preview-Images/AzureAutoML-Screenshot.png",
                        },
                        {
                          header: "Live-Camera Object Detection using YOLOv8",
                          description: "This is a simple object detection program that uses the YOLO (You Only Look Once) model to detect and identify objects in real-time through a webcam.",
                          link: "https://github.com/m3mentomor1/Object-Detection-Using-YOLOv8",
                          image: "/Card-Preview-Images/Object-Screenshot.png",
                        },
                        {
                          header: "Speech-to-Text Transcriber",
                          description: "This is a simple speech-to-text program that uses the SpeechRecognition library to capture spoken words from a microphone for 5 seconds and then converts the captured words into readable text.",
                          link: "https://github.com/m3mentomor1/Speech-to-Text-Transcriber",
                          image: "/Card-Preview-Images/Speech-Screenshot.jpg",
                        },
                        {
                          header: "Speech & Text Sentiment Analyzer using VADER",
                          description: "A Speech and Text Sentiment Analyzer leveraging the VADER model for sentiment analysis. It processes both spoken and written inputs to determine their sentiment (Positive, Neutral, or Negative) along with detailed sentiment scores.",
                          link: "https://github.com/m3mentomor1/Sentiment_Analyzer_using_VADER",
                          image: "/Card-Preview-Images/Sentiment-Screenshot.png",
                        },
                        {
                          header: "Text Summarizer using spaCy",
                          description: "An extractive text summarization tool using the SpaCy NLP library. This project processes input text to identify the most important sentences based on word frequency analysis, providing a concise summary in just a few steps.",
                          link: "https://github.com/m3mentomor1/Text_Summarizer_using_spaCy",
                          image: "/Card-Preview-Images/TextSummarize-Screenshot.png",
                        },
                        {
                          header: "Text-to-Speech Coverter using gTTS",
                          description: "This is a simple text-to-speech program that utilizes the gTTS (Google Text-to-Speech) library to convert any text input into spoken language.",
                          link: "https://github.com/m3mentomor1/Text-to-Speech_Coverter_Using_gTTS",
                          image: "/Card-Preview-Images/GTTS-Screenshot.jpeg",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}

                    {category === "Data Projects" &&
                      [
                        {
                          header: "Near-Earth Object Data Retrieval & Visualization",
                          description: "Visualizing Near-Earth Object (NEO) data from NASA's JPL API, showcasing their close-approach distances and trajectories using Matplotlib.",
                          link: "https://github.com/m3mentomor1/Near-Earth_Object_Data_Retrieval_and_Visualization",
                          image: "/Card-Preview-Images/NEO-Data-Screenshot1.gif",
                        },
                        {
                          header: "BBC News Headline Scraper",
                          description: "A simple web scraper that uses the Beautiful Soup library to retrieve the latest news headlines from the BBC News website and then saves the retrieved data to a CSV file for later use.",
                          link: "https://github.com/m3mentomor1/BBC_News_Headline_Scraper",
                          image: "/Card-Preview-Images/BBCWebScraper-Screenshot.png",
                        },
                        {
                          header: "Relational Database for a Hotel Room Booking System",
                          description: "A PostgreSQL-based relational database for managing hotel room booking operations. The database includes essential entities such as customers, rooms, bookings, and payments.",
                          link: "https://github.com/m3mentomor1/Relational-DB_for-Hotel-Room-Booking",
                          image: "/Card-Preview-Images/HotelBooking-ERD.png",
                        },
                        {
                          header: "Relational Database for a Note Taking App",
                          description: "A SQLite-based local relational database for managing data operations on note taking mobile app. The database includes essential entities such as notes, tags, and note tags.",
                          link: "https://github.com/m3mentomor1/Relational-DB_for-Note-Taking-App",
                          image: "/Card-Preview-Images/NoteTaking-ERD.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}

                    {category === "Other Projects" &&
                      [
                        {
                          header: "Open Source Contribution",
                          description: "Contributed to an open-source library for enhancing accessibility in web applications.",
                          link: "https://example.com/open-source",
                          image: "/images/open-source.png",
                        },
                        {
                          header: "Pattern-Based File Remover",
                          description: "This is a simple pattern-based file remover that provides an efficient way to clean up files in a specified directory based on a user-defined naming pattern.",
                          link: "https://github.com/m3mentomor1/Pattern-Based-File-Remover",
                          image: "/images/game-development.png",
                        },
                        {
                          header: "Image File Folder Splitter",
                          description: "Allows users to split a folder containing image files into two separate folders by moving half of the images to a destination folder.",
                          link: "https://github.com/m3mentomor1/Image-Folder-Splitter",
                          image: "/Card-Preview-Images/File-Screenshot.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="mt-2 bg-white hover:bg-gray-200 [box-shadow:0px_10px_10px_rgba(0,0,0,0.25)] rounded-lg justify-center mx-5 mb-5 overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-52 overflow-hidden">
                            <img
                              src={`${process.env.PUBLIC_URL}${project.image}`}
                              alt={`${project.header}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="pt-5 px-5 text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="px-5 text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <div className="px-5 pb-5">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-7 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500 transition"
                            >
                              <span>View Project</span>
                              <ArrowOutward fontSize="small" />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="licenses" className="min-h-screen md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-[60px]">
            Licenses, Certifications, & Awards
          </h2>
          <div className="flex space-x-6 mb-6 border-b text-md">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => { setSelectedSection(index); setCurrentIndex(0); }}
                className={`px-4 py-1 ${selectedSection === index ? "text-gray-800 font-inter font-semibold border-b-2 border-gray-800" : "text-gray-600"}`}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div
            className="relative w-full max-w-7xl h-[450px] flex justify-center items-center overflow-x-hidden cursor-grab"
            onTouchStart={handleTouchStart} onMouseDown={handleMouseDown}
            onTouchEnd={handleTouchEnd} onMouseUp={handleMouseUp}
          >
{sections[selectedSection].items.map((cert, index) => {
  const distanceFromCenter = (index - currentIndex + totalItems) % totalItems;
  let position = 130 * distanceFromCenter - distanceFromCenter * 50;
  let scale = 1 - Math.abs(distanceFromCenter) * 0.1;
  let opacity = 1 - Math.abs(distanceFromCenter) * 0.2;
  let zIndex = 10 - Math.abs(distanceFromCenter);

  return (
    <div
      key={index}
      className={`absolute bg-white shadow-lg rounded-lg flex flex-col items-center transition-all duration-300 w-[334px] h-[360px] px-6 py-7`}
      style={{
        transform: `translateX(${position}px) scale(${scale}) translateY(0px)`, // Fixed Y alignment
        opacity: opacity,
        zIndex: zIndex,
      }}
      
      onMouseEnter={(e) => {
        if (distanceFromCenter === 0) {
          e.currentTarget.style.transform = `translateX(${position}px) scale(${scale + 0.05}) translateY(-15px)`;
          e.currentTarget.style.boxShadow = "0px 15px 30px rgba(0,0,0,0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (distanceFromCenter === 0) {
          e.currentTarget.style.transform = `translateX(${position}px) scale(${scale}) translateY(0px)`;
          e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.15)";
        }
      }}
    >
      {/* Image Container */}
      <div className="w-[280px] h-[180px] bg-gray-200 rounded-lg mb-4 overflow-hidden flex justify-center items-center">
        <img src={`${process.env.PUBLIC_URL}${cert.image}`} alt={cert.name} className="w-[280px] h-[180px] object-contain" />
      </div>

      {/* Text Container */}
      <div className="w-[280px] flex flex-col">
        <h4 className="text-md font-semibold text-gray-800">{cert.name}</h4>
        <p className="text-xs text-gray-600 mt-2">Issued by: {cert.issuer}</p>
        <p className="text-xs text-gray-600 mt-1">Date: {cert.date}</p>
        <button className="text-blue-600 underline text-xs font-semibold mt-3 text-left w-fit">
          Learn More
        </button>
      </div>
    </div>
  );
})}

          </div>
        </section>


        {/* Competitions Section */}
        <section
          id="competitions"
          className="h-[500px] md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-[60px]">Competitions</h2>
          <div className="w-full max-w-5xl flex items-center">
            {/* Back Button */}
            <button
              className="text-gray-800 hover:text-gray-600"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <NavigateBefore fontSize="large" />
            </button>

            {/* Competition Card */}
            <div className="flex-1 flex justify-center">
              <div className="w-[500px] h-[450px] bg-white shadow-md rounded-lg p-10 flex flex-col justify-center items-start text-left">
                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-1 w-full mb-6">
                  {/* First Image - Spans across the first two columns */}
                  {competitions[currentCompeIndex].images.slice(0, 1).map((image, index) => (
                    <div
                      key={index}
                      className="col-span-2 w-full h-[196px] overflow-hidden"
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}${image}`}
                        alt={`${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}

                  {/* Second and Third Image - In the right column */}
                  <div className="col-span-1 flex flex-col gap-1 h-full">
                    {/* Second Image */}
                    {competitions[currentCompeIndex].images.slice(1, 2).map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-24 overflow-hidden"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${image}`}
                          alt={`${index + 2}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}

                    {/* Third Image with +X Overlay */}
                    {competitions[currentCompeIndex].images.slice(2, 3).map((image, index) => (
                      <div
                        key={index}
                        className="relative w-full h-24 overflow-hidden"
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}${image}`}
                          alt={`${index + 3}`}
                          className="object-cover w-full h-full"
                        />
                        {/* Overlay for +X if there are more images */}
                        {competitions[currentCompeIndex].images.length > 3 && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm font-semibold">
                            +{competitions[currentCompeIndex].images.length - 3}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-semibold">{competitions[currentCompeIndex].title}</h3>
                <p className="text-sm text-gray-600 mt-3">
                  {competitions[currentCompeIndex].place}
                </p>                
                <p className="text-sm font-semibold text-gray-600">
                  {competitions[currentCompeIndex].by}
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  {competitions[currentCompeIndex].description}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              className="text-gray-800 hover:text-gray-600"
              onClick={handleNext}
              aria-label="Next"
            >
              <NavigateNext fontSize="large" />
            </button>
          </div>
        </section>

        {/* Leadership Experience Section */}
        <section
          id="leadership"
          className="h-[300px] md:min-h-[800px] bg-[#f9f9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Leadership Background
          </h2>

          <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          className="absolute left-4 z-10 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition"
          onClick={handlePrevL}
        >
          <NavigateBefore fontSize="large" />
        </button>

        {/* Carousel Cards */}
        <div className="relative w-full flex justify-center items-center">
          {leadershipData.map((data, index) => {
            const offset = (index - currentL + leadershipData.length) % leadershipData.length;

            let scale, opacity, translateX, display;
            if (offset === 0) {
              scale = 1;
              opacity = 1;
              translateX = 0;
              display = "flex";
            } else if (offset === 1) {
              scale = 0.9;
              opacity = 0.7;
              translateX = 150;
              display = "flex";
            } else if (offset === -1 || offset === leadershipData.length - 1) {
              scale = 0.9;
              opacity = 0.7;
              translateX = -150;
              display = "flex";
            } else {
              display = "none";
            }

            return (
              <div
                key={index}
                className="absolute w-[700px] h-[350px] bg-white shadow-lg rounded-lg flex transition-all duration-500 overflow-hidden"
                style={{
                  display: display,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                  boxShadow:
                    offset === 0
                      ? "0px 10px 30px rgba(0,0,0,0.2)"
                      : "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >
                {/* Left Side - Text & Logo (Custom Background Per Card) */}
                <div
                  className="w-2/5 flex flex-col justify-center items-center p-6 text-center"
                  style={{
                    background: data.isGradient ? data.bgColor : data.bgColor,
                  }} // Gradient for Campus DEVCON, Solid for Others
                >
                  <img
                    src={`${process.env.PUBLIC_URL}${data.logo}`}
                    alt="Leadership"
                    className="w-[100px] h-[100px] object-contain"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 w-full">
                    {data.title}
                  </h3>
                  <p className="text-sm text-gray-600 w-full">{data.institution}</p>
                  <p className="text-gray-700 text-sm font-semibold w-full">
                    {data.position}
                  </p>
                  <p className="text-gray-600 text-sm w-full">{data.duration}</p>
                </div>

                {/* Right Side - Image Grid (Fully Occupying Space, No Borders) */}
                <div className="w-3/5 grid grid-rows-2 grid-cols-2 h-full">
                  {/* First two images take equal space on top */}
                  <div className="w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[0]}`}
                      alt="li1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[1]}`}
                      alt="li2"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom image spans full width */}
                  <div className="col-span-2 w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[2]}`}
                      alt="li3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute right-4 z-10 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition"
          onClick={handleNextL}
        >
          <NavigateNext fontSize="large" />
        </button>
      </div>
        </section>

        {/* Volunteering Section */}
        <section
          id="volunteering"
          className="h-[300px] md:min-h-[800px] bg-[#faf9f6] flex flex-col items-center justify-center overflow-x-hidden"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-[60px]">
            Volunteering
          </h2>
          <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          className="absolute left-4 z-10 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition"
          onClick={handlePrevEvent}
        >
          <NavigateBefore fontSize="large" />
        </button>

        {/* Carousel Cards */}
        <div className="relative w-full flex justify-center items-center">
          {volunteeringData.map((data, index) => {
            const offset = (index - currentEvent + volunteeringData.length) % volunteeringData.length;

            let scale, opacity, translateX, display;
            if (offset === 0) {
              scale = 0.95;
              opacity = 1;
              translateX = 0;
              display = "flex";
            } else if (offset === 1) {
              scale = 0.5;
              opacity = 0.5;
              translateX = 495;
              display = "flex";
            } else if (offset === 2) {
              scale = 0.5;
              opacity = 0.5;
              translateX = 844;
              display = "flex";            
            } else if (offset === -1 || offset === volunteeringData.length - 1) {
              scale = 0.5;
              opacity = 0.5;
              translateX = -495;
              display = "flex";
            } else if (offset === -1 || offset === volunteeringData.length - 2) {
              scale = 0.5;
              opacity = 0.5;
              translateX = -844;
              display = "flex";
            } else {
              display = "none";
            }

            return (
              <div
                key={index}
                className="absolute w-[650px] h-[500px] bg-white shadow-lg rounded-lg flex transition-all duration-500 overflow-hidden"
                style={{
                  display: display,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                  boxShadow:
                    offset === 0
                      ? "0px 10px 30px rgba(0,0,0,0.2)"
                      : "0px 5px 15px rgba(0,0,0,0.1)",
                }}
              >


              <div 
                className="absolute w-[500px] inset-0 opacity-90 z-20"
                style={{
                  background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.9), rgba(0,0,0,0.8), rgba(0,0,0,0.7), rgba(0,0,0,0.6), rgba(0,0,0,0.5), rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(0,0,0,0.1), rgba(0,0,0,0))",
                }}
              >
                {/* Text Content Overlay */}
                <div className="absolute left-6 w-[70%] h-full z-30 text-white flex flex-col justify-center">
                  <p className="text-sm mb-5">{data.date}</p>
                  <h3 className="text-lg font-semibold mb-5">{data.eventName}</h3>
                  <p className="text-xs font-semibold">{data.organizer}</p>
                  <p className="text-xs mb-5">📍 {data.location}</p>
                  <p className="text-sm font-semibold">Role: <span className='text-sm font-normal'>{data.role}</span></p>                                {/* Clickable "Learn More" Button */}
                  <button
                    className="text-blue-300 underline text-sm font-semibold text-left hover:text-blue-100 transition"
                    onClick={() => {}}
                  >
                    Learn More
                  </button>
                </div>
              </div>

                
                {/* Image Grid (Fully Occupying Space, No Borders) */}
                <div className="w-full grid grid-rows-2 grid-cols-3 h-full pointer-events-none">
                  {/* First two images take equal space on top */}
                  <div className="w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[0]}`}
                      alt="vp1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[1]}`}
                      alt="vp2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full">
                    <img
                      src={`${process.env.PUBLIC_URL}${data.images[2]}`}
                      alt="vp3"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom row: Two equal images, properly aligned */}
                  <div className="col-span-3 w-full h-full grid grid-cols-2">
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={`${process.env.PUBLIC_URL}${data.images[3]}`}
                        alt="vp4"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Last image with +X overlay if there are more images */}
                    <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
                      <img
                        src={`${process.env.PUBLIC_URL}${data.images[4]}`}
                        alt="vp5"
                        className="w-full h-full object-cover"
                      />
                      {data.images.length > 5 && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-bold">
                          +{data.images.length - 5}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute right-4 z-10 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-600 transition"
          onClick={handleNextEvent}
        >
          <NavigateNext fontSize="large" />
        </button>
      </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="h-[300px] md:min-h-[800px] bg-[#f9f9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-[60px]">
            Contact
          </h2>
        </section>

      </div>

    </div>
  );
}

export default App;

