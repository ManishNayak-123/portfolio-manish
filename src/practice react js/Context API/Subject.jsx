import { useContext } from "react";
import { SubjectContext } from "./ContextData";


//subject jsx
function Subject(){
    const subject = useContext(SubjectContext);
    return(
        <div>
             <h1 className="bg-green-600 text-4xl font-bold p-10">Subjects : {subject}</h1>
        </div>
    )
}
export default Subject;