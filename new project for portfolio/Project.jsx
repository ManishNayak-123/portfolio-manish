import Portfolio from "./Portfolio";
import header from "./header.jpg";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";

function Project() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 215;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 215;
  };
  return (
    <div>
      <div className="h-full bg-cover items-center justify-center pt-10  bg-zinc-900">
        <center>
          <div
            style={{ backgroundImage: `url(${header})` }}
            className="max-w mx-auto  ml-8 mr-8 pr-5 md:pr-5 border-10 rounded-2xl max-h-screen pt-10
                                 border-indigo-800 mb-20 bg-cover"
          >
            <Portfolio />
            <div>
              <section className="w-full py-16 bg-transparent relative">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl text-indigo-800 animate-fadeUp font-bold text-center mb-10">
                  My Projects
                </h2>

                {/* Left Arrow */}
                <button
                  onClick={scrollLeft}
                  className="z-10 absolute left-4 ml-5 md:left-6 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-lg"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Project Row */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-hidden scroll-smooth px-10 md:px-20"
                >
                  <div className="min-w-[160px] animate-fadeUp  md:min-w-[300px]  lg:min-w-[350px] h-[350px] bg-indigo-800 border-4 border-indigo-700 rounded-xl flex items-center justify-center">
                    <a href="https://manishnayak-123.github.io/klc-repo/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-80 md:h-80 h-40 w-40 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="4" y="2" width="16" height="20" rx="2" />
                        <rect x="7" y="5" width="10" height="3" />
                        <circle cx="8" cy="12" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="16" cy="12" r="1" />
                        <circle cx="8" cy="16" r="1" />
                        <circle cx="12" cy="16" r="1" />
                        <circle cx="16" cy="16" r="1" />
                      </svg>
                      <h1 className="text-black font-semibold">Calculator</h1>
                    </a>
                  </div>

                  <div className="min-w-[160px] animate-fadeUp  md:min-w-[300px]  lg:min-w-[350px] h-[350px] bg-indigo-800 border-4 border-indigo-700  rounded-xl flex items-center justify-center">
                    <a href="https://manishnayak-123.github.io/responsive-game/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-80 md:h-80 h-40 w-40 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="6" cy="12" r="2" />
                        <rect x="10" y="9" width="4" height="6" rx="1" />
                        <circle cx="18" cy="10" r="1.5" />
                        <circle cx="18" cy="14" r="1.5" />
                        <line x1="16.5" y1="10.5" x2="14" y2="12" />
                        <line x1="16.5" y1="13.5" x2="14" y2="12" />
                      </svg>
                      <h1 className="font-semibold">Rock Paper Scissor Game</h1>
                    </a>
                  </div>

                  <div className="min-w-[160px] animate-fadeUp  md:min-w-[300px]  lg:min-w-[350px] h-[350px]  bg-indigo-800 border-4 border-indigo-700  rounded-xl flex items-center justify-center">
                    <a href="https://manishnayak-123.github.io/currency-converter/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-80 md:h-80 w-40 h-40 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="7" cy="12" r="4" />
                        <text x="5.5" y="13.5" fontSize="4" fill="currentColor">
                          $
                        </text>

                        <circle cx="17" cy="12" r="4" />
                        <text
                          x="15.5"
                          y="13.5"
                          fontSize="4"
                          fill="currentColor"
                        >
                          €
                        </text>

                        <path d="M10 6h5l-1.8-1.8M15 6l-1.8 1.8" />
                        <path d="M14 18H9l1.8 1.8M9 18l1.8-1.8" />
                      </svg>
                      <h1 className="font-semibold">Currency Converter</h1>
                    </a>
                  </div>

                  <div className="min-w-[160px] animate-fadeUp  md:min-w-[300px] lg:min-w-[350px] h-[350px]  bg-indigo-800 border-4 border-indigo-700  rounded-xl flex items-center justify-center">
                    <a href="https://manishnayak-123.github.io/srgc-project/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-80 md:h-80 h-40 w-40 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 10l10-5 10 5-10 5-10-5z" />
                        <path d="M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" />
                        <line x1="22" y1="10" x2="22" y2="14" />
                      </svg>
                      <h1 className="font-semibold">SRGC Website</h1>
                    </a>
                  </div>

                  <div className="min-w-[160px] animate-fadeUp  md:min-w-[300px] lg:min-w-[350px] h-[350px]  bg-indigo-800 border-4 border-indigo-700  rounded-xl flex items-center justify-center">
                    <a href="http://manishnayak-123.github.io/online-job-portal/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:w-80 md:h-80 h-40 w-40 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="3" y="7" width="18" height="12" rx="2" />
                        <path d="M9 7V5h6v2" />
                        <line x1="3" y1="13" x2="21" y2="13" />
                      </svg>
                      <h1 className="font-semibold">Job Portal</h1>
                    </a>
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute right-2 z-10 md:right-6 top-1/2 -translate-y-1/2 bg-white text-black p-2 md:p-3 rounded-full shadow-lg"
                >
                  <ChevronRight size={28} />
                </button>
              </section>
            </div>
          </div>
        </center>
        <footer>
          <div className=" mt-[-50px] md:mt-[-40px] p-3 overflow-hidden  md:p-5 rounded-lg text-center bg-indigo-600">
          {/* for laptop size */}
          <p className=" text-xl font-semibold hidden md:block text-gray-300 animate-marquee">
            Welcome to the Manish Kumar Nayak portfolio || Welcome to the Manish
            Kumar Nayak portfolio
          </p>

          {/* for mobile size */}
          <p className="text-[13px]   md:text-xl font-semibold block md:hidden  text-gray-300 animate-marquee">
            Welcome to the Manish Kumar Nayak portfolio
          </p>
          
        </div>
        <Footer />
        </footer>
      </div>
    </div>
  );
}
export default Project;
