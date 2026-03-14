//Json server ->Json server is a node js based tool that allows the developers to quickly make the restful apis
// For the json server we use the command -> npx json-server db.json
// API methods in react -> There are mainly four methods which we used=
//1.GET method -> It is used to print data on the screen.
//2.POST method -> It is used to add data to the existing data.
//3.DELETE method ->It is used to delete the data.
//4.PUT/PATCH method -> It is used for the updation.
import { useEffect, useState } from "react";
import {Routes, Route, Link, Navigate} from "react-router";
import AddData from "./AddData";

// and it useful for the developers testing.
function JsonServer(){
    const [data, setData] = useState([]);
     const [user , setUser] = useState({
        id:"",
        name:"",
        age:"",
        email:""
    });

    useEffect(()=>{
          getData();
    },[]);

    const getData = async ()=>{
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
            response = await response.json();
            console.log(response);
            setData(response);
    }
    //Delete data 

    const handleDelete = async (id) =>{
        const url = "http://localhost:3000/users";
            let response = await fetch(url);
            response = await response.json();
            
            response.forEach(element => {
                element.id?.trim() && element.name?.trim() && !element.age?.trim() && !element.email?.trim()
            
           fetch(`${url}/${element.id}`, {
                method : "DELETE",
            });
            });
             setData(data.filter(user =>{
                user.id?.trim() && user.name?.trim() && user.email?.trim() && user.age?.trim()
             }))
    };
        
    return(
       <div>
        {/* <button className="bg-red-500 h-15  w-50 rounded-xl p-2 text-2xl font-semibold cursor-pointer">Delete</button>
        <button className="bg-blue-600 h-15 w-50 rounded-xl p-2 text-2xl font-semibold cursor-pointer">Update</button> */}
        <h1 className="text-2xl underline-offset-2 font-bold ml-15 text-black-600">Add new User</h1>
       
     
        
        {/* <button onClick={()=>Navigate("/")} className="bg-indigo-600 mt-10 h-10 w-100 rounded-xl p-1 text-2xl font-semibold cursor-pointer">Add</button>   */}
        
         <Link to = "/add">
        <button className="bg-indigo-600 mt-10 h-10 w-100 rounded-xl p-1 text-2xl font-semibold cursor-pointer">Add</button> 
        </Link>
         
        
    
          <div className="w-full max-w justify-self-center rounded-xl shadow-md p-6 mt-30 ml-20">
            <h1 className="text-2xl text-center font-semibold mb-6 ">Users List</h1>
           <div className="overflow-x-auto justify-self-center rounded-2xl">
            <table  className="w-full border rounded-lg p-2" >
                    <thead>
                        <tr className="bg-gray-500" >
                        <th className="px-8 ">Id</th>
                        <th className="px-8">Name</th>
                        <th className="px-8">Age</th>
                        <th className="px-8">Email</th>
                        <th className="px-8">Delete</th>
                        <th className="px-8">Edit</th>
                        
                        </tr>
                    </thead>
            <tbody className="px-40">
            {
                data.map((user, index)=>(
                    <tr key={index}>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">{user.id}</td>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">{user.name}</td>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">{user.age}</td>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">{user.email}</td>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">
                        <button
                         onClick={()=>handleDelete(user.id)}
                         className="bg-red-500 h-10 w-30 rounded-xl p-1 text-[18px] font-semibold cursor-pointer"
                         >Delete</button></td>
                        <td className="px-15 p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">
                        <button
                         onClick={()=>handleDelete(user.id)}
                         className="bg-green-600 h-10 w-30 rounded-xl p-1 text-[18px] font-semibold cursor-pointer"
                         >Edit</button></td>
                    </tr>
                ))
            }
            </tbody>
            </table>
            </div>
           </div>
           </div>
        
    )
} 
export default JsonServer;