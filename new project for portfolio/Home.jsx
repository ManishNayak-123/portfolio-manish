import Portfolio from "./Portfolio";
import ManishPhoto from "./ManishPhoto.jpg";
import github from "./github.png";
import linkedin from "./linkedin.png";
import facebook from "./facebook.png";
import { TextureLoader } from "three";
import LaptopImageTwo from "./LaptopImageTwo.png";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import keyboard from "./keyboard.jpg";
import header from "./header.jpg";
import upArrow from "./upArrow.png";
import GlobeAnimation from "./GlobeAnimation";
import footer from "./footer.jpg";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Link } from "react-router";
import Footer from "./Footer";
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setIsText] = useState(false);
  //counter function
  function Counter({ end }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start >= end) {
          clearInterval(timer);
        }
      }, 20);
    }, [end]);

    return <span>{count}+</span>;
  }

  //computer animation
  function Computer() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      if (window.innerWidth < 786) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, []);
    const meshRef = useRef();
    const texture = useTexture(LaptopImageTwo);
    // Rotation animation
    // useFrame(() => {
    //   if (meshRef.current) {
    //     meshRef.current.rotation.y += 0.01;
    //     meshRef.current.rotation.x += 0.005;
    //   }
    // });

    return (
      <mesh ref={meshRef} scale={isMobile ? 1.5 : 2.3} position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  }

   const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior :"smooth"
    });
   };
  return (
    <div
      className="h-full bg-cover items-center justify-center pt-10  bg-zinc-900"  
    >
      <center>
        <div style = {{backgroundImage :`url(${header})`}}
          className="max-w mx-auto  ml-8 mr-8 pr-5 md:pr-5 border-10 rounded-2xl max-h-screen  pt-10
          border-indigo-800 mb-20 bg-cover"
        >
          <Portfolio />
          <footer className="m-5 p-1 justify-between md:justify-center md:p-10 ">
            <div className="flex justify-between mr-5 mx-auto ">
              <div className="text-left mt-3  mx-auto">
                <h1 className="text-[12px] md:text-2xl text-gray-300 font-bold animate-fadeUp">
                  Hi i am
                </h1>
                <h1 className="text-[13px]  mt-2 font-bold md:text-3xl  text-gray-300 animate-fadeUp">
                  Manish Kumar Nayak
                </h1>
                <h1
                  className="text-[15px] w-auto mt-7 mx-auto sm:text-3xl  md:text-6xl 
                      text-indigo-600 font-bold animate-fadeUp"
                >
                  A full stack Java Developer
                </h1>
                <br />
                <div className="h-120 w-80  md:hidden   justify-self-center mr-50 md:ml-10  md:justify-self-center">
                   <GlobeAnimation />
                  {/* <img
                    className="h-50 md:h-110 w-40 md:w-90  mr-[50px] md:ml-20 rounded-full p-2 pr-5 pl-5 border-2
                        border-gray-300 shadow-gray-600 shadow-2xl  "
                    src={ManishPhoto}
                    alt="image"
                  /> */}
                </div>
                <div className="flex md:hidden space-x-2 mt-[-255px] ">
                  <a href="https://github.com/ManishNayak-123">
                    <img className=" md:h-20 md:w-20 h-8 w-8 animate-fadeUp" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-522934273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img className=" md:h-20 md:w-20 h-8 w-8 animate-fadeUp" src={linkedin} />
                  </a>
                  <a href="https://www.facebook.com/share/1DnNzaxdmR/?mibextid=qi2Omg">
                    <img className=" md:h-20 md:w-20 h-8 w-8 animate-fadeUp" src={facebook} />
                  </a>
                </div>
                <div className="mt-3 md:hidden space-x-5">
                  <a href="mailto:mrmanishkumar8273@gmail.com">
                  <button className="bg-indigo-600 rounded-xl animate-fadeUp text-gray-300 p-1 text-[12px] font-semibold ">
                    Hire Me
                  </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1miY3jgyS_28vNJRqRGJmKMt8wMBMU3wp/view?usp=drivesdk">
                    <button
                      className="bg-transparent max-w-2xl animate-fadeUp rounded-xl text-gray-300 p-1 text-[12px] font-semibold border-2 
                          border-gray-300 cursor-pointer"
                    >
                      Download CV
                    </button>
                  </a>
                </div>
                <br />
                <div className="md:flex hidden space-x-2 mt-[-10px] ">
                  <a href="https://github.com/ManishNayak-123">
                    <img className=" md:h-20 animate-fadeUp md:w-20 h-12 w-12" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-522934273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <img
                      className=" md:h-20 md:w-20 h-12 w-12 animate-fadeUp"
                      src={linkedin}
                    />
                  </a>
                  <a href="https://www.facebook.com/share/1DnNzaxdmR/?mibextid=qi2Omg">
                    <img
                      className=" md:h-20 animate-fadeUp md:w-20 h-12 w-12"
                      src={facebook}
                    />
                  </a>
                </div>

                <br />

                <div className="mt-5 md:flex hidden space-x-5">
                   <a href="mailto:mrmanishkumar8273@gmail.com">
                  <button className="bg-indigo-600 rounded-xl animate-fadeUp cursor-pointer text-gray-300 p-2 text-[18px] font-semibold ">
                    Hire Me
                  </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1miY3jgyS_28vNJRqRGJmKMt8wMBMU3wp/view?usp=drivesdk">
                    <button
                      className="bg-transparent max-w-2xl rounded-xl animate-fadeUp text-gray-300 p-2 text-[18px] font-semibold border-2 
                          border-gray-300 cursor-pointer"
                    >
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
              <div className="hidden md:flex h-10 md:w-1/2 ">
                
                  <GlobeAnimation />
                    

              
                {/* <img
                  className="h-60 md:h-110 w-50 md:w-90 rounded-full p-2 pr-5  border-2
                        border-gray-300 shadow-gray-600 shadow-2xl  "
                  src={ManishPhoto}
                  alt="image"
                /> */}
              </div>
            </div>
          </footer>
        </div>
      </center>
      <footer>
        {/* page second */}

        <div className=" mt-[100px] md:mt-[-40px] p-3 overflow-hidden  md:p-5 rounded-lg text-center bg-indigo-600">
          {/* for laptop size */}
          <p className=" text-xl font-semibold hidden md:block text-gray-300 animate-marquee ">
            Welcome to the Manish Kumar Nayak portfolio || Welcome to the Manish
            Kumar Nayak portfolio
          </p>

          {/* for mobile size */}
          <p className="text-[13px] animate-fadeUp md:text-xl font-semibold block md:hidden  text-gray-300 animate-marquee">
            Welcome to the Manish Kumar Nayak portfolio
          </p>
        </div>

        <div className=" p-10 pl-10 md:pl-25 bg-cover object-contain"  style = {{backgroundImage :`url(${keyboard})`}}>
          <h1 className="md:text-5xl text-3xl font-bold animate-fadeUp text-indigo-600  ">
            More information is here-
          </h1>
          <br />
          <div className="flex p-2 justify-center md:justify-self-start animate-fadeUp">
            <div className="h-30 w-20 md:h-30 md:w-50 p-2 rounded-l-2xl font-semibold  border-4 border-indigo-800 bg-gray-400">
              Experience
              <h1 className="p-3 mt-7 md:mt-5  text-gray-800 shadow-gray-200 shadow-lg ">
                <Counter end={2} />
              </h1>
            </div>
            <div className="h-30 w-20 md:h-30 md:w-50 p-2 font-semibold border-4  border-indigo-800 bg-gray-400">
              Project done{" "}
              <h1 className="p-3 mt-1 md:mt-5  text-gray-800 shadow-gray-200 shadow-lg ">
                <Counter end={10} />
              </h1>{" "}
            </div>
            <div className="h-30 w-20 md:h-30 md:w-50 rounded-r-2xl  p-2 font-semibold  border-4 border-indigo-800 bg-gray-400">
              Happy clients{" "}
              <h1 className="p-3 mt-1 md:mt-5 text-gray-800 shadow-gray-200 shadow-lg ">
                <Counter end={20} />
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] mt-10 md:mt-0">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={1} />
              {/* <pointLight position={[15, 20, 15]} /> */}
              <Computer />
              <OrbitControls autoRotate autoRotateSpeed={3} />
            </Canvas>

            
          </div>
          
        </div>
            <footer>
                 <Footer />
            </footer>
            

      </footer>
    </div>
  );
}
export default Home;
