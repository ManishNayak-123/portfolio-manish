// import { useState } from "react";

// import { useMemo, useState } from "react";

// // // Search in jsx -> Here we make the search bar .

// const jobsData = [
//     {id:1, title:"Java Developer"}, 
//     {id:2, title : "Pythod Developer"},
//     {id:3, title:"Node.js Developer"},
//     {id:4, title: "React.js Developer"},
//     {id:5, title: "MERN stack Developer"}
// ];
// function Search(){
//     const [searchTerms, setSearchTerms] = useState('');
//     const [showResult , setShowResult] = useState(true);
//     const filteredJobs = jobsData.filter((job)=>
//           job.title.toLowerCase().includes(searchTerms.toLowerCase())
// );
    

//     const handleSelect = (title) =>{
//         setSearchTerms(title);
//         setShowResult(false);
//     }
//      const handleSearch = () =>{

//      }
//     return(
//         <div className=" flex-col flex items-center mt-50 min-h-screen ">
      
//            <h1 className="font-semibold text-8xl "><span className="text-blue-600 "><i>N</i></span>
//            <span className="text-red-600 " >a</span>
//            <span className="text-yellow-600">y</span>
//            <span className="text-green-600">a</span>
//            <span className="text-red-600">k</span></h1>
           
//            <input type="text"
             
//             placeholder={`🔍 Search Nayak or type URL                                   `}
//             className="w-full max-w-3xl p-2  text-[20px] rounded-2xl mt-15 
//             focus:ring-2 focus:outline-none focus:ring-indigo-400 border-gray-400 shadow-lg 
//             border-t 
//             "
//             onChange={(e)=> {setSearchTerms(e.target.value);
//                       setShowResult(true);
//             }}
//            />
         
//           {showResult && searchTerms && (
//            <div className=" mt-1  w-full max-w-3xl rounded-2xl">
//                 {filteredJobs.length > 0 ?(
//                     filteredJobs.map((job, index)=>(
//                       <div key={index}
//                       onClick={()=>handleSelect(job.title)}
//                       className="bg-white p-3  shadow-2xl focus:shadow-lg hover:shadow-lg transition duration-300 hover:bg-gray-200
//                       hover:rounded-4xl
//                       "
//                       >
//                         <p className="text-lg font-medium text-gray-900">{job.title}</p>
                        
//                       </div>
//                     ))
//                 ):(
//                     <p className="text-gray-700 text-center">No jobs found</p>
//                 )}
//            </div>
//            )}
//         </div>
//     )
// }
// export default Search;


// Search bar using api
//api key ->AIzaSyB6MpFNFFviZptK5dDqP6vjnEw7Ui83bQA
//373176149958-c4dlr7lr8g749o2nbjnue7h85mut5mk2.apps.googleusercontent.com
//c2527c150f6c34bb8

// import React, { useState, useEffect } from 'react';

// Replace these with your actual keys (Keep them in a .env file for security!)
// const API_KEY = "AIzaSyB6MpFNFFviZptK5dDqP6vjnEw7Ui83bQA";
// const SEARCH_ENGINE_ID = "c2527c150f6c34bb8";

// const API_KEY = "AIzaSyXXXX";
// const SEARCH_ENGINE_ID = "1234567890abcdef";
// function Search() {
//     const [searchTerms, setSearchTerms] = useState('');
//     const [results, setResults] = useState([]);
//     const [showResult, setShowResult] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // Debounce: Wait 500ms after user stops typing to call API
//         const timer = setTimeout(() => {
//             if (searchTerms.trim()) {
//                 fetchGoogleData(searchTerms);
//             } else {
//                 setResults([]);
//             }
//         }, 500);

//         return () => clearTimeout(timer);
//     }, [searchTerms]);

//     const fetchGoogleData = async (query) => {
//         setLoading(true);
//         try {
//             const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${query}`;
//             const response = await axisos.get(url);
//             const data = await response.json();
//             console.log(data);
            
//             // Google returns an 'items' array containing the search results
//             setResults(data.items || []);
//             setShowResult(true);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex-col flex items-center mt-20 min-h-screen">
//             <h1 className="font-semibold text-8xl">
//                 <span className="text-blue-600">N</span>
//                 <span className="text-red-600">a</span>
//                 <span className="text-yellow-600">y</span>
//                 <span className="text-green-600">a</span>
//                 <span className="text-red-600">k</span>
//             </h1>

//             <div className="w-full max-w-3xl mt-10 relative">
//                 <input 
//                     type="text"
//                     placeholder="Search Nayak or type URL"
//                     className="w-full p-4 text-xl rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     value={searchTerms}
//                     onChange={(e) => setSearchTerms(e.target.value)}
//                 />

//                 {loading && <p className="text-center mt-2 text-blue-500">Searching...</p>}

//                 {showResult && searchTerms && (
//                     <div className="mt-4 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
//                         {results.length > 0 ? (
//                             results.map((item, index) => (
//                                 <a 
//                                     key={index} 
//                                     href={item.link} 
//                                     target="_blank" 
//                                     rel="noreferrer"
//                                     className="block p-4 hover:bg-gray-100 border-b border-gray-50 last:border-0"
//                                 >
//                                     <h3 className="text-blue-700 font-medium hover:underline">{item.title}</h3>
//                                     <p className="text-green-700 text-sm">{item.displayLink}</p>
//                                     <p className="text-gray-600 text-sm line-clamp-2">{item.snippet}</p>
//                                 </a>
//                             ))
//                         ) : (
//                             !loading && <p className="p-4 text-center text-gray-500">No results found.</p>
//                         )}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Search;


// <script async src="https://cse.google.com/cse.js?cx=c2527c150f6c34bb8">
// </script>
// <div class="gcse-search"></div>
