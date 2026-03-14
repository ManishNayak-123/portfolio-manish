//Lifting state up -> It means sometimes we want to change the state of two components simultaneously , to do 
//it we use the Lifting up state . In this we remove the states from the components and pass it to the closest
// parent and pass the values through props.
import { useState } from "react";
import AddUsers from "./AddUsers";
import DisplayUsers from "./DisplayUsers";
function Parent(){
    const [users, setUsers] = useState('');
    return(
        <div>
           <AddUsers setUsers = {setUsers} />
           <DisplayUsers users={users}/>
        </div>
    )
}
export default Parent;