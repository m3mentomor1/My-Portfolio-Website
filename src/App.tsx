import { useState, useEffect } from 'react';
import { ExpandMore, ArrowOutward } from '@mui/icons-material'; // Import ExpandMore icon

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [stackActiveDropdown, setStackActiveDropdown] = useState<string | null>(null);

  // Explicitly typing 'section' as one of the allowed categories
  const toggleDropdown = (section: "UI/UX" | "Web Development" | "Mobile Development" | "AI/ML" | "Data Projects" | "Other Projects") => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const stackToggleDropdown = (
    section: "UI/UX" | "Frontend" | "Backend" | "AI/ML" | "Other Tools"
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
          className="h-[480px] md:min-h-[500px] bg-[#faf9f6] flex flex-col items-center justify-center px-4 md:px-10"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-8">
            Education
          </h2>
          <div className="max-w-5xl w-full space-y-8">
            {/* Education Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green-600 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="bg-white shadow-md rounded-lg p-4 relative">
                  {/* New Heading for Program Type */}
                  <p className="text-sm text-gray-600">College (Specializing in Intelligent Systems)</p>
                  <h3 className="text-lg font-bold text-gray-800">
                    Bachelor of Science - BS, Computer Engineering
                  </h3>
                  <p className="text-sm text-gray-600">
                    Technological Institute of the Philippines | Quezon City, Metro Manila
                  </p>
                  {/* Position the Date to the Right */}
                  <p className="text-sm text-gray-600 absolute top-4 right-4">
                    Aug 2021 – Present
                  </p>
                </div>
              </div>
            </div>
            {/* Education Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green-600 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="bg-white shadow-md rounded-lg p-4 relative">
                  {/* New Heading for Program Type */}
                  <p className="text-sm text-gray-600">Senior High School (Technical-Vocational Livelihood - TVL, Track)</p>
                  <h3 className="text-lg font-bold text-gray-800">
                    Information and Communication Technology - ICT, Strand
                  </h3>
                  <p className="text-sm text-gray-600">
                    Colegio De San Jose Del Monte Inc. | San Jose del Monte, Bulacan
                  </p>
                  {/* Position the Date to the Right */}
                  <p className="text-sm text-gray-600 absolute top-4 right-4">
                    2019 – 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Stack Section */}
        <section
          id="stack"
          className="min-h-[450px] md:min-h-[350px] bg-[#faf9f6] flex flex-col items-center justify-center px-4 md:px-10"
        >
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Personal Stack
          </h2>

          {/* Dropdown Menus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 w-full max-w-[1120px]">
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
                category: "Other Tools",
                items: [
                  { name: "Git", image: "/Stack-Images/Git.png" },
                  { name: "GitHub", image: "/Stack-Images/Github.png" },
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
                                  { name: "TypeScript", image: "/Stack-Images/TypeScript.png" },
                                  { name: "HTML", image: "/Stack-Images/HTML.png" },
                                  { name: "CSS", image: "/Stack-Images/CSS.png" },
                                  { name: "React", image: "/Stack-Images/React.png" },                          
                                  { name: "Tailwind CSS", image: "/Stack-Images/Tailwind.png" },
                                  { name: "Material UI", image: "/Stack-Images/MaterialUI.png" },
                                  { name: "GitHub Actions", image: "/Stack-Images/GithubActions.png" },
                                  { name: "Azure Static Web Apps", image: "/Stack-Images/AzureStatic.png" },
                                ]
                              : [
                                  { name: "NestJS", image: "/Stack-Images/NestJS.png" },
                                  { name: "Docker", image: "/Stack-Images/Docker.png" },
                                  { name: "GitHub Actions", image: "/Stack-Images/GithubActions.png" },
                                  { name: "Azure App Service", image: "/Stack-Images/AppService.png" },
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
                                    src={tool.image}
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
                                  { name: "TypeScript", image: "/Stack-Images/TypeScript.png" },
                                  { name: "React Native", image: "/Stack-Images/ReactNative.png" },                         
                                  { name: "Expo", image: "/Stack-Images/Expo.png" },
                                ]
                              : [
                                  { name: "NestJS", image: "/Stack-Images/NestJS.png" },
                                  { name: "Docker", image: "/Stack-Images/Docker.png" },
                                  { name: "GitHub Actions", image: "/Stack-Images/GithubActions.png" },
                                  { name: "Azure App Service", image: "/Stack-Images/AppService.png" },
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
                                    src={tool.image}
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
                                  src={tool.image}
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
                                      src={plugin.image}
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
          className="min-h-[580px] bg-[#faf9f6] flex flex-col items-center justify-center"
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
                        {
                          header: "Locker Reservation App for Nearby Parking Lots",
                          description: "Design mockups for a project called SecureSpot, a mobile app that allows users to find and reserve lockers near parking lots & parking spaces.",
                          link: "https://github.com/m3mentomor1/SecureSpot-Design",
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
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
                          header: "The Tell-Tale Heart Narrative Webpage",
                          description: "This is a simple static webpage using only HTML & CSS.",
                          link: "https://github.com/m3mentomor1/The_Tell-Tale_Heart_Narrative_Webpage",
                          image: "/Card-Preview-Images/TellTale-Screenshot.png",
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
                          >
                            <span>View Project</span>
                            <ArrowOutward fontSize="small" />
                          </a>
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
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
                            className="w-full bg-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
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
