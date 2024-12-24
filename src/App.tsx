import { useState, useEffect } from 'react';
import { ExpandMore, ArrowOutward } from '@mui/icons-material'; // Import ExpandMore icon

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Explicitly typing 'section' as one of the allowed categories
  const toggleDropdown = (section: "Web Development" | "Mobile Development" | "AI/ML") => {
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-10 px-4 hidden md:block">
            <h1 className="text-2xl md:text-[90px] font-inter font-semibold text-gray-800 mr-[200px] md:mr-[620px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
              Shain<br/><span className="block mt-1 md:mt-[70px]">Sahagun.</span>
            </h1>
            {/* Rectangle */}
            <div className="w-[38px] h-[10px] md:w-[150px] md:h-[30px] bg-gray-800 mt-[10px] md:mt-[60px] md:ml-[6.5px] mb-[20px]"></div>
            {/* Socials Section */}
            <div className="flex items-center space-x-7 mt-[10px] md:mt-[40px] md:ml-[6.5px] mb-[20px]">
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
            <div className="bg-white/90 p-6 rounded-lg shadow-lg mt-4 md:ml-[600px] md:w-[530px] absolute top-[140px]">
              <h1 className="text-1xl md:text-[15px] font-inter font-bold text-gray-800/80">
                ABOUT ME
              </h1>
              <p className="text-1xl md:text-[20px] font-inter font-bold text-gray-800 mt-2">
                An aspiring multidisciplinary Software & AI/ML Engineer, based in the Philippines.
              </p>
              <h1 className="text-1xl md:text-[15px] font-inter font-bold text-gray-800/80 mt-5">
                FOCUS
              </h1>
              <p className="text-1xl md:text-[14px] font-inter text-gray-800 mt-2">
                - Frontend & Backend Development (Cross-platform Mobile & Web apps)
                <br/>- AI/ML (Machine Perception: Computer Vision, NLP)
                <br/>- Integration of Cloud Technologies into Mobile & Web apps
              </p>
              <p className="text-1xl md:text-[15px] font-inter font-bold text-gray-800 mt-4">
                "I build software solutions that utilize AI & Cloud technologies."
              </p>
            </div>
          </div>

          {/* Image */}
          <img
            src="/images/2x2.png"
            alt="About Section"
            className="absolute bottom-0 right-2 md:right-auto md:left-1/2 md:translate-x-[-55%] w-[18rem] md:w-[48rem] z-0"
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
  <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
    Projects
  </h2>
  <div className="w-full max-w-6xl px-4">
    {["Web Development", "Mobile Development", "AI/ML"].map((category) => (
      <div key={category} className="mb-4">
        <button
          onClick={() =>
            toggleDropdown(
              category as "Web Development" | "Mobile Development" | "AI/ML"
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
            activeDropdown === category ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4">
            {[1, 2, 3].map((item) => {
              // Custom logic for AI/ML Project 1
              if (category === "AI/ML" && item === 1) {
                return (
                  <div
                    key={item}
                    className="p-4 bg-gray-100 shadow-md rounded-lg flex flex-col justify-center"
                  >
                    {/* Image Placeholder */}
                    <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Image Placeholder</span>
                    </div>
                    {/* Project Header */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-left">
                      Pneumonia Image Classification with Lightweight CNN Models
                    </h3>
                    {/* Project Description */}
                    <p className="text-sm text-gray-600 text-left mb-4">
                      This is a project focused on identifying the presence of pneumonia
                      in chest X-ray images. Each image can be classified into one of
                      three categories: Bacterial Pneumonia, Viral Pneumonia, or Normal.
                    </p>
                    {/* View Project Button */}
                    <a
                      href="https://github.com/m3mentomor1/Pneumonia_Detection_with_Lightweight-CNN-Models"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm font-semibold flex items-center hover:text-blue-800 transition-colors"
                    >
                      View Project
                      <span className="ml-1">
                        <ArrowOutward fontSize="small" />
                      </span>
                    </a>


                  </div>
                );
              }
              // Default rendering for other cards
              return (
                <div
                  key={item}
                  className="p-4 bg-gray-100 shadow-md rounded-lg flex flex-col justify-center"
                >
                  {/* Image Placeholder */}
                  <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                  {/* Project Header */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 text-left">
                    {category} Project {item}
                  </h3>
                  {/* Project Description */}
                  <p className="text-sm text-gray-600 text-left mb-4">
                    Description of {category} Project {item}.
                  </p>
                  {/* View Project Button */}
                  <button className="text-blue-600 text-sm font-semibold flex items-center hover:text-blue-800 transition-colors">
                    View Project
                    <span className="ml-1">
                      <ArrowOutward fontSize="small" />
                    </span>
                  </button>

                </div>
              );
            })}
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
