import { useState, useEffect } from 'react';
import { ExpandMore, ArrowOutward } from '@mui/icons-material'; // Import ExpandMore icon

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Explicitly typing 'section' as one of the allowed categories
  const toggleDropdown = (section: "UI/UX" | "Web Development" | "Mobile Development" | "AI/ML" | "Data Projects" | "Other Projects") => {
    setActiveDropdown(activeDropdown === section ? null : section);
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
          isScrolled ? 'bg-[#ffffff]/50 shadow-lg backdrop-blur' : 'bg-transparent'
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
              className="text-sm md:text-base text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#education"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900"
            >
              Education
            </a>
            <a
              href="#stack"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900"
            >
              My Personal Stack
            </a>
            <a
              href="#projects"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900"
            >
              Projects
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm md:text-base text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                More
                <ExpandMore
                  className={`ml-1 transition-transform ${
                    isDropdownOpen ? 'animate-rotateIn' : 'animate-rotateOut'
                  }`}
                />
              </button>
              <div
                className={`absolute top-14 right-0 bg-white shadow-md rounded-lg p-4 md:w-48 origin-top transition-transform duration-300 ${
                  isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
              >
                <a
                  href="#licenses"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Licenses/Certifications
                </a>
                <a
                  href="#competitions"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Competitions
                </a>
                <a
                  href="#leadership"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Leadership Experience
                </a>
                <a
                  href="#volunteering"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Volunteering
                </a>
                <a
                  href="#contact"
                  className="block py-2 text-sm text-gray-600 hover:text-gray-900"
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
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
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
            isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <a
            href="#education"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Education
          </a>
          <a
            href="#stack"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            My Personal Stack
          </a>
          <a
            href="#projects"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Projects
          </a>
          <a
            href="#licenses"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Licenses/Certifications
          </a>
          <a
            href="#competitions"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Competitions
          </a>
          <a
            href="#leadership"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Leadership Experience
          </a>
          <a
            href="#volunteering"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Volunteering
          </a>
          <a
            href="#contact"
            className="block py-2 text-sm text-gray-600 hover:text-gray-900"
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
                Shain<br /><span className="block mt-1 md:mt-[60px]">Sahagun.</span>
              </h1>
              {/* Rectangle */}
              <div className="w-[38px] h-[10px] md:w-[150px] md:h-[30px] bg-gray-800 mt-[10px] md:mt-[50px] md:ml-[6.5px] mb-[20px]"></div>
              {/* Socials Section */}
              <div className="flex items-center space-x-7 mt-[10px] md:mt-[30px] md:ml-[6.5px] mb-[20px]">
                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/shain-sahagun/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/images/LinkedIn-icon-black.png"
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
                    src="/images/GitHub-icon-black.png"
                    alt="GitHub"
                    className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                  />
                </a>
              </div>

              {/* ABOUT ME Text */}
              <div className="bg-white/90 p-6 rounded-lg shadow-lg mt-4 md:ml-[600px] md:w-[530px]">
                <h1 className="text-1xl md:text-[15px] font-inter font-bold text-gray-800/80">
                  ABOUT ME
                </h1>
                <p className="text-1xl md:text-[20px] font-inter font-bold text-gray-800 mt-1">
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
            src="/images/2x2.png"
            alt="About Section"
            className="absolute bottom-0 right-2 md:right-auto md:left-1/2 md:translate-x-[-60%] w-[18rem] md:w-[48rem] z-0"
          />

          {/* Text for Mobile */}
          <div className="block md:hidden mt-4 px-4 text-center z-20">
            <h1 className="text-lg font-inter font-bold text-gray-800 mt-20">
              ABOUT ME
            </h1>
            <p className="text-sm text-gray-800 mt-1">
              I'm an aspiring multidisciplinary Software & AI/ML Engineer, based in the Philippines.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Education
          </h2>
        </section>


        {/* Personal Stack Section */}
        <section
          id="stack"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Personal Stack
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            This is the Personal Stack section. Add your content here.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">
            Projects
          </h2>
          {/* Add container with same limits as navbar */}
          <div className="max-w-6xl mx-auto px-4 w-full">
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
                          image: "/images/weather-app-redesign.png",
                        },
                        {
                          header: "Threat Modeling App",
                          description: "Design mockups for a project called SafeBoxx., an automated threat-modeling mobile app designed to identify potential privacy and security threats and vulnerabilities in social media applications, including a list of countermeasures to mitigate these identified risks.",
                          link: "https://github.com/m3mentomor1/SafeBoxx.-Design",
                          image: "/images/ecommerce-personas.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
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
                          header: "Portfolio Website",
                          description: "Created a personal portfolio website showcasing creative designs and projects.",
                          link: "https://example.com/portfolio",
                          image: "/images/portfolio-website.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
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
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
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
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
                        </div>
                      ))}

                    {category === "Data Projects" &&
                      [
                        {
                          header: "Data Dashboard",
                          description: "Built an interactive dashboard for data visualization and analysis.",
                          link: "https://example.com/data-dashboard",
                          image: "/images/data-dashboard.png",
                        },
                        {
                          header: "Near-Earth Object Data Retrieval & Visualization",
                          description: "Visualizing Near-Earth Object (NEO) data from NASA's JPL API, showcasing their close-approach distances and trajectories using Matplotlib.",
                          link: "https://github.com/m3mentomor1/Near-Earth_Object_Data_Retrieval_and_Visualization",
                          image: "/Card-Preview-Images/NEO-Data-Screenshot1.gif",
                        },
                        {
                          header: "Recommendation System",
                          description: "Created a recommendation system for an e-commerce platform using collaborative filtering.",
                          link: "https://example.com/recommendation-system",
                          image: "/images/recommendation-system.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
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
                          header: "Game Development",
                          description: "Created a 2D platformer game using Unity and C#.",
                          link: "https://example.com/game-development",
                          image: "/images/game-development.png",
                        },
                        {
                          header: "Automation Scripts",
                          description: "Developed automation scripts to streamline repetitive tasks using Python.",
                          link: "https://example.com/automation-scripts",
                          image: "/images/automation-scripts.png",
                        },
                      ].map((project, index) => (
                        <div
                          key={index}
                          className="p-7 bg-gray-100 [box-shadow:0px_4px_4px_rgba(0,0,0,0.25)] rounded-lg flex flex-col justify-center mx-5 mb-2"
                        >
                          {/* Image Placeholder */}
                          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={project.image}
                              alt={`${project.header} Preview`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Project Header */}
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {project.header}
                          </h3>
                          {/* Project Description */}
                          <p className="text-sm text-gray-600 mb-4">
                            {project.description.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project.description}
                          </p>
                          {/* View Project Link */}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Licenses/Certifications Section */}
        <section
          id="licenses"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Licenses & Certifications
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            Showcase your licenses and certifications here.
          </p>
        </section>

        {/* Competitions Section */}
        <section
          id="competitions"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Competitions
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            List your competitions and achievements here.
          </p>
        </section>

        {/* Leadership Experience Section */}
        <section
          id="leadership"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Leadership Experience
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            Highlight your leadership roles and accomplishments here.
          </p>
        </section>

        {/* Volunteering Section */}
        <section
          id="volunteering"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Volunteering
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            Highlight your volunteering contributions here.
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="h-[300px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Contact
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
            Provide your contact information here.
          </p>
        </section>

      </div>

    </div>
  );
}

export default App;
