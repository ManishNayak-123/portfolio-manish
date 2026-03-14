import footer from "./footer.jpg";
import facebook from "./facebook.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import upArrow from "./upArrow.png";
import { Link } from "react-router";
function Footer(){
      const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior :"smooth"
    });
   };
    return(
        <div>
            <div className="p-8 bg-zinc-900 h-max md:h-160 ">
           <div className="max-w mt-[30px] md:mt-[-15px] mx-auto p-5 justify-center
             pl-[-20px] object-contain  border-10 rounded-2xl max-h-screen  border-indigo-800 mb-20 bg-cover"
              style = {{backgroundImage :`url(${footer})`}}>
                {/* div box */}
                
                <div className="md:p-10  p-2 object-contain justify-between"   >
                <span className="p-2 text-2xl border-4 border-gray-400 rounded-xl md:text-3xl font-bold bg-indigo-600
                  text-gray-300">Portfolio</span>
                <br />
                <div className="flex justify-between mt-10">
                <div className="max-w-lg md:p-5 p-2 ">
                <p className="font-semibold animate-fadeUp  text-[12px] md:text-xl text-indigo-600">
                    This is my portfolio for my detailed information.
                    It can also help to others how to represent
                     ourself in our portfolio website.
                </p>

                {/* social media */}
                  <div className="md:flex hidden mt-10  space-x-2">
                  <a href="https://github.com/ManishNayak-123">
                    <img className=" border-2 bg-white animate-fadeUp border-gray-400  rounded-4xl md:h-20 md:w-20 h-8 w-8" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-522934273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img className=" md:h-20 animate-fadeUp md:w-20 h-8 w-8" src={linkedin} />
                  </a>
                  <a href="https://www.facebook.com/share/1DnNzaxdmR/?mibextid=qi2Omg">
                    <img className=" md:h-20 animate-fadeUp md:w-20 h-8 w-8" src={facebook} />
                  </a>
                </div>
                {/* button for scroll back on top */}
                <button
                 onClick={scrollToTop}
                 className=" md:flex hidden border-2 bg-transparent cursor-pointer gap-2 rounded-xl  text-gray-300 mt-10 md:p-2 md:text-xl font-semibold">
                  <img className="md:h-10 animate-fadeUp md:w-10 md:rounded-xl bg-gray-300" src={upArrow} />
                  Back to Top
                </button>

                <div className="md:hidden justify-center flex gap-5 p-5">
                  <ul className="text-gray-300 text-[12px] animate-fadeUp  ">
                    <li className="text-[15px] font-bold text-indigo-700">Site map</li>
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/">Home</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/about">About</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300  ">
                    <Link to = "/skills">Skills</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/project">Project</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent
                     text-gray-300 rounded-xl hover:border-gray-400 transition duration-300 ">
                      <Link to = "/contact">Contact</Link>
                      
                      </li>
                  </ul>
                  <ul className="text-gray-300 text-[12px] animate-fadeUp mt-5">
                   
                     <li className="text-[15px] font-bold text-indigo-800">Legal</li>
                     
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent text-gray-300
                    rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/legal">
                     Privacy policy
                      </Link>
                    </li>
                    <li className="border-b-2 cursor-pointer hover:text-gray-300 hover:bg-indigo-800 p-2 border-transparent text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/legal">
                      Terms of Services
                      </Link>
                    </li>
                    {/* <li></li> */}
                  </ul>
                   </div>
                    <div className="flex md:hidden md:mt-5 space-x-2">
                  <a href="https://github.com/ManishNayak-123">
                    <img className=" animate-fadeUp border-2 border-gray-400 rounded-4xl md:h-20 md:w-20 h-8 w-8" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-522934273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img className=" animate-fadeUp md:h-20 md:w-20 h-8 w-8" src={linkedin} />
                  </a>
                  <a href="https://www.facebook.com/share/1DnNzaxdmR/?mibextid=qi2Omg">
                    <img className=" animate-fadeUp md:h-20 md:w-20 h-8 w-8" src={facebook} />
                  </a>
                </div>
                <button
                 onClick={scrollToTop}
                 className=" flex md:hidden border-2 bg-transparent cursor-pointer gap-2 rounded-xl  text-gray-300 mt-10 p-1 md:text-[12px] font-semibold">
                  <img className="h-5 w-5 animate-fadeUp rounded-md mt-1 bg-gray-300" src={upArrow} />
                  Back to Top
                </button>
                  </div>
                  
                {/* second div */}
                 <div className=" md:flex hidden  md:gap-50 p-5">
                  <ul className="text-gray-300 md:text-xl  animate-fadeUp ">
                    <li className="md:text-2xl font-bold text-indigo-700">Site map</li>
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/">Home</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/about">About</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300  ">
                    <Link to = "/skills">Skills</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:text-gray-300 hover:bg-indigo-800 p-2 text-gray-300
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/project">Project</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent
                     text-gray-300 rounded-xl hover:border-gray-400 transition duration-300 ">
                      <Link to = "/contact">Contact</Link>
                      
                      </li>
                  </ul>
                  <ul className="text-gray-300 md:text-xl md:mt-2 animate-fadeUp ">
                   
                     <li className="md:text-2xl font-bold text-center text-indigo-800">Legal</li>
                     
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 hover:text-gray-300 p-2 border-transparent  md:text-gray-400
                    rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/legal">
                     Privacy policy
                      </Link>
                    </li>
                    <li className="border-b-2 cursor-pointer hover:text-gray-300 hover:bg-indigo-800 p-2 border-transparent md:text-gray-400
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/legal">
                      Terms of Services
                      </Link>
                    </li>
                    {/* <li></li> */}
                  </ul>
                   
                   </div>
                  
                 </div>
                </div>
                  <div className="bg-indigo-800 animate-fadeUp text-gray-300 text-[10px] md:text-lg rounded-lg font-semibold p-1 md:p-2 w-full  text-center mt-[-10px]">
                      Copyright © 2026 Portfolio, All rights reserved.
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Footer;