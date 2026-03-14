//Cookies in react -> Cookies are the small string of data directly stored in the browser.
// Cookies are set by the web server using the set-cookie http header and next time when the request 
// sent to the same domain then browser sends the cookies using the cookies http header.
//Thats why the server knows who send the request.

import React, { useEffect, useState } from "react";

//eg-> For example we go to the web like www.google.com and this we suggested to us that accept cookies and if
// you accept the cookie then these cookies will be directly stored in the browser and set by the we servers.
// Next time when you come to the same domain then the server already know that who sent this request.

// Common use of cookies =>
//                        1.Use in the authentication
//                        2.User preferences
//                        3.Session tracking

//Set cookies in react ->
// import React , { useEffect } from "react";
// import Cookies from "js-cookie";
// function CookiesStorage(){
//     useEffect(()=>{
//          Cookies.set("user", "Manish", {expires : 7});
//     },[]);
//     return(
//         <div>
//             <h1>Set cookies in react</h1>
           
//         </div>
//     )
// }
// export default CookiesStorage;

//getCookies and remove cookies  in react
// import React , { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// function CookiesStorage(){

//      const [user , setUser] = useState("");
//       useEffect(() =>{
//              Cookies.set("user", "Manish", {expires : 7});
//              setUser(Cookies.get(user) || "");
//       },[]);

//           const getCookie = () =>{
//             setUser(Cookies.get("user") || "");
//           }
        
//           const removeCookie = () =>{
//             Cookies.remove("user");
//             setUser("");
//           }
//         // const user = Cookies.get(user);
//         // console.log(user);
 
//     return(
//         <div>
//             <h1>Set cookies in react</h1>
//              <h1>User cookies : {user || "(not set)"}</h1>
//              <button onClick={getCookie}>Get cookie</button>
//              <br />
//              <button onClick={removeCookie}>Remove cookies</button>
//         </div>
//     )
// }
// export default CookiesStorage;

//Login form using the cookies
import Cookies from "js-cookie";
import { Cookie } from "lucide-react";
function CookiesStorage(){
    const [user , setUser] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        const cookieUser = Cookies.get('user');
        if(cookieUser) setUser(cookieUser);
        
    })
    // let key = prompt("Enter the key");
    // let value = prompt("Enter the value");

    document.cookie =  `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
    console.log(document.cookie);
    const handleSubmit = (e) =>{
           e.preventDefault();
           if(!email.trim() || !name.trim() || !password){
            alert("Enter the Email , name and Password");
            return;
           }

           Cookies.set("user",name, email, {expires :7,sameSite:'Lax'});
           setUser(email);
           setName('');
           setEmail('');
           setPassword('');
    }
    const deleteCookie = () =>{
        Cookies.remove("user");
        setUser("");
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
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
             <button onClick={deleteCookie}>remove</button>
        </div>
    )
}
export default CookiesStorage;