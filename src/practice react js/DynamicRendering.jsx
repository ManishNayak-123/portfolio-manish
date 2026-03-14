//Dynamic rendering in react js-
//Dynamic data rendering -> Dynamic data rendering means showing data that changes automatically when state/data change.

import { useState } from "react";

//How does react render data dynamically-> React render data dynamically in react using the jsx expressions.

//Static and dynamic rendering in react -> static-> which data we write within the html tag , we called that satic rendering.
// dynamic rendering -> Where we writes data in the curley braces.

//why key is important->
//key in react helps to identify what to add, delete and edit. It improves the performance and prevents UI bugs.


//what happens without key ->
//  Rerenders unnecessarily

//Key as index or Id->
// As Index -> Not recommanded 
//An Id -> Recommanded
// const data  = ["Manish", "Boby","Suraj", "Madhav"];
// function DynamicRendering(){
    
//     console.log(data);
//     return (
//         <div>
//           {
//             data.map((name, index) =>(
//                 <p key = {index}>Name:{data.name}</p>
//             ))
//           }
//         </div>
//     )
// }
// export default DynamicRendering;

//why use of {} -> In order to write the js code.
// function DynamicRendering(){
//     const name = "Manish Kumar Nayak";
//     console.log(name);
//     return (
//         <div>
//           <h1>Name: {name}</h1>
//         </div>
//     )
// }
// export default DynamicRendering;

//How to render a list of items in react -> 
//   const data = ["Apple", "Mango", "Banana", "Grapes", "Pich","fig", "papaya", "Pomigrant",
//      "Orange","chikoo", "plum", "Date", "Guava", "black berry"]
// function DynamicRendering(){
 
//     return (
//         <div>
//           <h1>Fruits Name</h1>
//           {
//             data.map((fruite , index) =>(
//              <p key={index}>{fruite}</p>
//             ))
//           }
//         </div>
//     )
// }
// export default DynamicRendering;

//table rendering in react js-
// function DynamicRendering(){
//    const [formData, setFormData] = useState({
//     id : "",
//     name: "",
//     email: "",
//     age : ""
//    })

//    const [data, setData] = useState([]);
//     const handleChange = (e) =>{
//     setFormData({ ...formData , [e.target.name] : e.target.value}); 
//    }

//    const handleData = (e) =>{
//     e.preventDefault();
//        if(!formData.id || !formData.name || !formData.email || !formData.age ) return;

//        setData([...data, formData]);
//        setFormData({id : "" , name:"", email : "", age:""});
//    }  
//    console.log(data);

//     return (
//         <div className="min-h-screen flex px-5 items-center bg-gray-100 justify-center p-4">
//             <div className=" max-w-2xl  rounded-xl shadow-md p-6">
//             <h1>Add Data</h1>
//             <br />
//             <input type="number"
//              onChange={handleChange}
//              className="focus:outline-none focus:ring-2 rounded-lg focus:ring-indigo-500"
//              placeholder="Enter id" 
//              value={formData.id}
//              name="id"
//              />
//             <br /><br />
//             <input type="text"
//              onChange={handleChange}
//              className="focus:outline-none focus:ring-2 rounded-lg focus:ring-indigo-500"
//              placeholder="Enter name" 
//              value={formData.name}
//              name="name"
//              />
//             <br /><br />
//             <input type="email"
//              className="focus:outline-none focus:ring-2 rounded-lg focus:ring-indigo-500"
//              placeholder="Enter email"
//              value={formData.email}
//              name="email"
//              onChange={handleChange}
//             />
//             <br /><br />
//             <input type = "number" 
//             className="focus:outline-none focus:ring-2 rounded-lg focus:ring-indigo-500" 
//             placeholder="Enter age"
//             value={formData.age}
//             name="age"
//             onChange={handleChange}
//             />
//             <br /><br />
//             <button type="button" className="h-13 w-60 rounded-lg text-[16px] bg-red-600 text-white" onClick={handleData}>Add Data</button>
//             </div>
//           <div className="w-full max-w-4xl rounded-xl shadow-md p-6">
//             <h1 className="text-2xl text-center font-semibold mb-6 ">Users List</h1>
//             <div className="overflow-x-auto justify-self-center rounded-2xl">
//                 <table className="w-full border border-gray-300 p-2">
//                     <thead className="bg-gray-800 text-white">
//                         <tr>
//                             <th className="px-4 py-3 text-left">Id</th>
//                             <th className="px-4 py-3 text-left">Name</th>
//                             <th className="px-4 py-3 text-left">Email</th>
//                             <th className="px-4 py-3 text-left">Age</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         { data.length === 0 ? (
//                           <tr >
//                             <td className="text-center" colSpan= "4">No Data</td>
//                           </tr>
                        
//                         ):(
//                             data.map((data, index) =>{
//                                 <tr key={index}>
//                                     <td className="border p-1">{data.id}</td>
//                                     <td className="border p-1">{data.name}</td>
//                                     <td className="border p-1">{data.email}</td>
//                                     <td className="border p-1">{data.age}</td>
//                                 </tr>
//                             })
//                         )}
//                     </tbody>
//                 </table>
//             </div>
            
//           </div>
      
//         </div>
//     )
// }
// export default DynamicRendering;


//checkboxes and radio button

function DynamicRendering(){
    const [skill, setSkill] = useState([]);
    const [gender, setGender] = useState('');

    const handleGender = (e) =>{
       setGender(e.target.value);
    }
    const handleSkill = (e) =>{
       if(e.target.value){
        setSkill([...skill, e.target.value]);
       }
       else{
        setSkill([...skill.filter((item) => e.target.value)]);
       }
    }
    return(
        <div>
            <h1>Data rendering </h1>
            <h1>Checkboxes</h1>
            <input onChange={handleSkill} className="size-10" type="checkbox" id= "js" value= "JS" />
            <label className="text-3xl" htmlFor="JS">Js</label>
            <h1>Skill is : {skill}</h1>

            <br /><br />
            <h1>Radio buttons</h1>
            <input onChange={handleGender} type="radio" id= "male" value= {"male"} name="gender"/>
            <label htmlFor="male">Male</label>
            <br /><br />
             <input onChange={handleGender}  type="radio" id="female" value= {"female"}  name="gender"/>
            <label htmlFor="female">Female</label>
            <br />
            <h1>Selected gender: {gender}</h1>
        </div>
    )
}
export default DynamicRendering;