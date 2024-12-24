import { useState, useEffect } from 'react';
import { ExpandMore } from '@mui/icons-material'; // Import ExpandMore icon

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#about"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900"
            >
              About
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
                  className={`ml-1 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
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
                className={`ml-1 transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-180' : 'rotate-0'
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
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] relative flex items-center justify-center shadow-[0px_10px_10px_rgba(0,0,0,0.1)]"
>
  {/* Text Wrapper */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-10 px-4">
    <h1 className="text-2xl md:text-[100px] font-inter font-bold text-gray-800 mr-[200px] md:mr-[650px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
      Shain<br/><span className="block mt-1 md:mt-[100px]">Sahagun</span>
    </h1>
  </div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-10 px-4">
    <h1 className="text-1xl md:text-[20px] font-inter font-bold text-gray-800 ml-[100px] md:ml-[600px] ">
      ABOUT ME
    </h1>
    <h1 className="text-1xl md:text-[20px] font-inter text-gray-800 ml-[100px] md:ml-[600px] ">
      I'm an aspiring multidisciplinary Software & AI/ML Engineer, based in the Philippines.
    </h1>
  </div>

  {/* Image at the bottom */}
  <img
    src="/images/2x2.png"
    alt="About Section"
    className="absolute bottom-0 translate-x-[-50%] left-1/2 w-[28rem] md:w-[45rem] z-0"
  />
</section>

{/* Projects Section */}
<section
  id="projects"
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
>
  <h2 className="text-xl md:text-3xl font-bold text-gray-800">
    Projects
  </h2>
  <p className="text-sm md:text-base text-gray-600 mt-4 max-w-3xl text-center">
    This is the Projects section. Add your content here.
  </p>
</section>

{/* Licenses/Certifications Section */}
<section
  id="licenses"
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
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
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
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
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
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
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#faf9f6] flex flex-col items-center justify-center"
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
  className="h-[400px] md:min-h-[calc(100vh-5rem)] bg-[#f9f9f6] flex flex-col items-center justify-center"
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
