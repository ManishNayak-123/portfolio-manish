//Context API -> It is the powerfull feature in react because it is used to pass information from one components
// to another without pass the props .
// it has the three components.
//1.createContext -> To initialize the context API
//2.provider -> To render the data.
//3.useContext -> get data from context API.
import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";
function ContextAPI(){
    const [subjects, setSubjects] = useState("");
    return(
        <div className="bg-gray-500">
           <SubjectContext.Provider  value = {subjects}>
                <select className="bg-violet-600 mt-2 mx-2 text-2xl" onChange={(e)=>setSubjects(e.target.value)} defaultValue={subjects}>
                    <option value= "Math">Math</option>
                    <option value="Physics">Physics</option>
                    <option value="Computer">Computer</option>
                </select>
                <br />
                <button className="bg-indigo-700 mt-2 mx-2 rounded-2xl text-[18px] p-2 font-semibold text-white h-12 w-30 " onClick={()=>setSubjects("")}>select me</button>
                <h1 className="bg-pink-600 text-4xl font-bold p-10">Context API</h1>
                <College />
           </SubjectContext.Provider>
        </div>
    )
}
export default ContextAPI;