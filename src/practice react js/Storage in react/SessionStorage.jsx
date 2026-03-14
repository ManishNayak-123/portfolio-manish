// Session storage in react -> Session storage is often less use than the local storage because in this data 
// stored till then , until we do not switch to another page. Means after after going to another page , its 
// data get remove.

import { useState } from "react";

//all functions are same as the local storage .

// storage in session
function SessionStorage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [user, setUser] = useState([]);

     const handleSubmit = (e) =>{
        e.preventDefault();

        const userData = {
            name, email, password
        }
        sessionStorage.setItem("user", JSON.stringify(userData));
     }
    return(
        <div>
            
             <form onSubmit={handleSubmit}>
                <h1>data : {user}</h1>
                <br />
                 <label htmlFor="Name">Name :
                    <input type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e)=>setName(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="Email">Email :
                    <input type="email"
                    placeholder="Enter your Email"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label> Password :
                    <input type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <br />
       
                <button type="submit">Login</button>
               
            </form>
        </div>
    )
}
export default SessionStorage;