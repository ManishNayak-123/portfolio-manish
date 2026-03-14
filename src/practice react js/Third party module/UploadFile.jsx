import { useState } from "react";

//File upload -> Here we upload file in the frontend
// function UploadFile(){
//     const [file, setFile] = useState(null);
//     const handleFile = (e) =>{
//         setFile(e.target.files[0]);
//     }

//     const handleSubmit = (e) =>{
//          e.preventDefault();
//          console.log("Selected files : ", file);
//     }
//     return(
//         <div>
//           <form onSubmit={handleSubmit}>
//             <input type="file" 
//             onChange={handleFile}
//             placeholder="Enter text" />
//             <br />
//             <button type="submit">submit</button>
//           </form>
//         </div>
//     )
// }
// export default UploadFile;

//Upload files in the backend
import React from "react";
import axios from "axios";
function UploadFile(){
    const [file, setFile] = useState(null);
    const handleFile = (e) =>{
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) =>{
         e.preventDefault();
        
         const formData = new FormData();
          formData.append("file", file);

          try{
            const response  = await axios.post("http://localhost:5000/upload",
                formData,{
                    headers:{
                        'Content-Type' :"multipart/formData",
                    },
                }
            );
            console.log(response.data);
            alert("File uploaded successfully");
          }catch(error){
            console.error(error);
            alert("Uploading failed");
          }
    }
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <input type="file" 
            className="p-5 text-[20px] text-white font-semibold w-60 bg-gray-500 rounded-2xl"
            onChange={handleFile}
            placeholder="⬆️"
            />
            <br />
            <button type="submit">submit</button>
          </form>
        </div>
    )
}
export default UploadFile;