import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useNavigate } from "react-router";

//Adddata
function AddData(){
    const navigate = useNavigate();
    const [user , setUser] = useState({
        id:"",
        name:"",
        age:"",
        email:""
    });
    // const {pending} = useFormStatus();
    // console.log(pending);

    const handleSubmit = async (e) =>{
        // e.preventDefault();
        await new Promise((res)=>{
             setTimeout(res, 2000);
             console.log("Form submit.");
        });
        if(!user.id.trim() || !user.name.trim() || !user.age.trim() || !user.name.trim()){
            alert("All fields are required.")
        }
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
            response = await response.json();

            await fetch(url ,{
                method :"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            })
    } 
    
    return(
        <div>
            <div className="w-full max-w-4xl shadow-2xl rounded-xl bg-gray-200 justify-self-center p-5">
          <h1 className="text-2xl font-semibold text-center bg-gray-600 rounded-t-xl">Add Data</h1>
          <form action={handleSubmit}>
            <input type="digit" 
                   className="focus:ring-indigo-600  font-semibold text-[18px] p-2 focus:outline-none
                   mt-5 focus:ring-2 w-full  rounded-xl
                   "
                   name = "id"
                   value={user.id}
                   placeholder="Enter id"
                   onChange={(e)=>setUser({...user, id:e.target.value})}                   
            />
            <br />
            <input type="text"
                   name = "name"
                  className="focus:ring-indigo-600  font-semibold text-[18px] p-2 focus:outline-none
                   mt-5 focus:ring-2 w-full  rounded-xl
                   "
                   value={user.name}
                   placeholder="Enter your name"
                   onChange={(e)=>setUser({...user, name:e.target.value})}
            />
            <br />
             <input type="digit"
                   name="age"
                  className="focus:ring-indigo-600  font-semibold text-[18px] p-2 focus:outline-none
                   mt-5 focus:ring-2 w-full  rounded-xl
                   "
                   value={user.age}
                   placeholder="Enter your age"
                   onChange={(e)=>setUser({...user, age:e.target.value})}
            />
            <br />
            <input type="email"
                   name="email"
                   className="focus:ring-indigo-600  font-semibold text-[18px] p-2 focus:outline-none
                   mt-5 focus:ring-2 w-full rounded-xl
                   "
                   value={user.email}
                   placeholder="Enter your email"
                   onChange={(e)=>setUser({...user, email:e.target.value})}
            />
           <SubmitButton />
        
        
          </form>
          </div>
        </div>
    )
}

function SubmitButton(){
      const {pending} = useFormStatus();
    console.log(pending)

  
    return(
        <div>
         <button 
          disabled = {pending}
          className={`w-full font-semibold ${pending ? "bg-indigo-300 cursor-not-allowed " : "bg-indigo-600"} 
          rounded-xl p-2 mt-5 text-2xl text-white cursor-pointer`}
          >
             {
                pending ? <img className="h-40 w-40" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />:"Add"
             }
             </button>
          <button
          className="w-full font-semibold bg-red-700 rounded-xl p-2 mt-5 text-2xl text-white"
          onClick={()=>navigate("/")}>Cancel</button>
        </div>
    )
}
export default AddData;