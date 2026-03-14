// portfolio project using react js
import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router"
function Portfolio(){
    const [isOpen , setIsOpen] = useState(false);
    const [isLogo, setIsLogo] = useState(false);

    return(
        // <div className="h-screen bg-[url('https://static.vecteezy.com/system/resources/thumbnails/056/181/694/small/dimension-abstract-background-black-photo.jpg')]
        //  bg-cover items-center justify-center pt-10
        // ">
        //  <center><div className="max-w ml-10 mr-10  border-10 rounded-2xl max-h-screen bg-zinc-900 pt-10
        //   border-gray-400 mb-20 bg-cover">
               <header className=" shadow-md shadow-gray-800">
                <nav className="flex  justify-between items-center mx-auto ">
                {/* /*Logo */ }
                <a onClick={()=>setIsLogo(!isLogo)}
                 className="m-5  mt-[-10px] bg-indigo-900 text-gray-300 border-gray-400
                 text-2xl md:text-4xl font-bold border-5 rounded-2xl p-2">{isOpen? "M.N" : "Portfolio"}</a>
               
                <ul className=" md:flex hidden space-x-8 text-gray-300 font-semibold mt-[-20px] mr-[29px]">
                    {/* <div className="ml-100 flex space-x-15"> */}
                    <li className="border-b-2 cursor-pointer hover:bg-indigo-800 p-2 border-transparent rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/">Home</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:bg-indigo-800 p-2 rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/about">About</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:bg-indigo-800 p-2 rounded-xl hover:border-gray-400 transition duration-300  ">
                    <Link to = "/skills">Skills</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:bg-indigo-800 p-2 rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/project">Project</Link>
                    </li>
                    {/* </div>  */}
                </ul>

                {/* Hamburger button */}
                <button onClick={()=>setIsOpen(!isOpen)}
                 className="md:hidden cursor-pointer ">
                  {/* <img className="h-15 w-15 font-bold mt-[-15px]" src="https://cdn-icons-png.flaticon.com/512/9451/9451364.png" /> */}
                  {isOpen ? <FaTimes className="absolute top-15 right-16 h-8 w-8 bg-indigo-600 rounded-4xl border-2 p-2 " /> :
                   <FaBars className="mt-[-18px]  border-2 md:mr-5 ml-[-12px] bg-indigo-600 font-bold rounded-4xl p-2  border-gray-300 h-10 w-10 " />}
                </button>
                {
                    isOpen && (
                        <ul className="flex absolute right-0 mr-12 bg-zinc-900  flex-col mt-25 text-gray-300 space-x-4 md:hidden ml-[-10px]">
                    <li className=" cursor-pointer border-b-2 hover:bg-indigo-800 p-2 border-transparent rounded-xl
                     hover:border-gray-400 transition duration-300 ">
                    <Link to = "/">Home</Link>
                    </li>
                    <li className="border-b-2  cursor-pointer border-transparent hover:bg-indigo-800 p-2
                     rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/about">About</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:bg-indigo-800 p-2 rounded-xl
                     hover:border-gray-400 transition duration-300  ">
                    <Link to = "/skills">Skills</Link>
                    </li>
                    <li className="border-b-2 cursor-pointer border-transparent hover:bg-indigo-800 p-2 
                    rounded-xl hover:border-gray-400 transition duration-300 ">
                    <Link to = "/project">Project</Link>
                    </li>
                        </ul>
                    )
                }
                </nav>
                </header> 
             
        //  </div></center>
        // </div>
    )
}
export default Portfolio;