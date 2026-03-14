import header from "./header.jpg";
import Portfolio from "./Portfolio";
import ManishPhoto from "./ManishPhoto.jpg";

import Footer from "./Footer";
function About() {
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
            {/* below content */}
            <footer className="p-1 md:p-5 md:justify-center">
              <div className="flex justify-between">
                <div className="p-2 md:p-5 md:w-170   ">
                  <h1 className="text-left text-xl md:text-5xl text-indigo-700 font-semibold  animate-fadeUp ">
                    About my Portfolio-
                  </h1>
                  <p
                    className=" w-full font-semibold text-[10px] bg-indigo-800  md:p-2 p-1 border-4 rounded-2xl
               border-indigo-700 md:text-lg md:text-[15px] animate-fadeUp text-gray-300 text-left md:text-left
                md:mt-5 mt-[1px]"
                  >
                    Hi, I'm **Manish Kumar Nayak**, a BTech Computer Science
                    student with a strong interest in web development. I enjoy
                    building modern and responsive websites using technologies
                    like **HTML, CSS, JavaScript, React, and Tailwind CSS**.
                    Currently, I am focusing on becoming a **Java Full Stack
                    Developer** and improving my skills by creating real-world
                    projects such as portfolio websites and web applications. I
                    am passionate about learning new technologies, solving
                    problems, and building user-friendly digital experiences. My
                    goal is to work as a professional developer and contribute
                    to innovative and impactful projects.
                  </p>
                 
                  <div className="flex md:hidden justify-center  p-4 w-auto h-auto mt-[-10px]">
                    <img
                      className="h-45 w-70 bg-transparent border-4  border-indigo-700 rounded-full"
                      src={ManishPhoto}
                    />
                  </div>
                  {/* address and infromation */}
                  <div className="md:flex hidden pt-5   ">
                <div className="bg-indigo-800  w-70  animate-fadeUp font-semibold text-gray-300 text-left p-2 rounded-2xl 
                text-[15px] border-4 border-indigo-700 ">
                  <h1 className="text-center font-bold text-black">Full details:</h1>
                    <p>Name : Manish Kumar</p>
                    <p>Father's name : Sahendra Kumar</p>
                    <p>Mother's name : Soniya</p>
                  </div>
                <div className="bg-indigo-800 w-80 font-semibold md:ml-90 md:mt-10 animate-fadeUp rounded-2xl 
                  text-gray-300 p-1  ml-[-10px]
                text-[15px] border-4 mt-[-20px] border-indigo-700">
                 <h1 className="text-center font-bold text-black">Address:</h1>
                 <p className="text-left">I am a cityzen of India and lives in the state of Uttar Prades's district's Muzaffarnagars's village Jasoi.</p>
                 </div>
                
                
              </div>
                </div>
                {/* second div */}
                <div className="md:flex hidden md:p-10  w-auto h-auto border-2 ">
                  <img
                    className="md:h-90 md:w-80  border-4 rounded-full border-indigo-700 bg-transparent"
                    src={ManishPhoto}
                  />
                </div>
                
              </div>

             
            </footer>
            
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
        <div className="h-screen bg-cover bg-zinc-900 " >
                <div className="flex md:hidden pt-5 gap-3 p-2 ">
                <div className="bg-indigo-800  w-40 justify-self-center md:w-70 animate-fadeUp md:justify-self-start text-gray-300
                 text-left p-1 md:p-2 rounded-2xl text-[12px] md:text-lg border-4 border-indigo-700 ">
                 <h1 className="text-black font-bold text-center">Full details:</h1>
                    <p>Name:Manish Kumar</p>
                    <p>Father's name: Sahendra Kumar</p>
                    <p>Mother's name: Soniya</p>
                  </div>
                <div className="bg-indigo-800 justify-self-center w-40 md:w-80 rounded-2xl animate-fadeUp md:justify-self-end  text-gray-300 p-2 
                md:text-lg text-[12px] border-4 mt-[30px] md:mt-[-20px] border-indigo-700">
                 <h1 className="text-black font-bold text-center">Address:</h1>
                 <p>I am a cityzen of India and lives in the state of Uttar Prades's district's Muzaffarnagars's village Jasoi.</p>
                 </div>    
              </div>
              <div className=" p-20 ">
                <div className="bg-indigo-800 w-60 md:w-100 animate-fadeUp md:justify-self-start
                 md:mt-5 text-gray-300 p-2 mt-[-70px] justify-self-center
                 md:text-lg text-[12px] border-4 border-indigo-700 rounded-2xl">
                  <h1 className="text-black font-bold text-center">Educational Background:</h1>
                  <p>I have completed 12th class with the science(PCM) stream and got 78 percentage. After that 
                    i took addmission in B.Tech computer science in the Shri Ram Group Of Colleges Muzaffarnagar.
                    I get average CGPA in B.Tech 8.2.
                  </p>
                  </div>
                <div className="bg-indigo-800 animate-fadeUp w-50 md:w-100 justify-self-center mt-3 md:justify-self-end text-gray-300
                 p-2 text-[12px] md:text-lg border-4 rounded-2xl border-indigo-700"
                ><h1 className="text-black font-bold text-center">Hobbies:</h1>
                 <p>My Hobbies are to watching cricket , Wishpering the songs , Curious about learn new Technologies and reading books.</p>
                </div>
                <div className="bg-indigo-800 w-78 md:w-150 animate-fadeUp justify-self-center md:justify-self-start text-gray-300 p-2 md:text-lg
                 border-4 text-[12px] rounded-2xl mt-10 border-indigo-700">
                  <h1 className="text-black font-bold text-center">Purpose of This website.</h1>
                  <p>The purpose of this website is to showcase my skills, projects, and experience as a web developer.
                     It serves as a platform where recruiters, collaborators, and visitors can explore my work, learn
                      about my technical abilities, and connect with me for opportunities.</p>
                </div>
              </div>
              </div>
        </footer>
               <footer>
                <Footer />
               </footer>
          </div>
         
       
    </div>
  );
}
export default About;
