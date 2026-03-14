//Local storage in react -> Local storage is the browser storage .
//                          Stores data in key and values
//                          Never expires untill manually cleared
//                          capacity -> 5 to 10 mb

import { useEffect, useState } from "react";

// There are build in function in react ->
//                                  1.localStorage.setItem();
//                                  2.localStorage.getItem();
//                                  3.localStorage.removeItem();

// function LocalStorage(){
//     useEffect(()=>{
//         localStorage.setItem("user", "Manish");
//         localStorage.removeItem("user");
//     },[]);

//     const user = localStorage.getItem("user");
//     console.log(user);

//     // const deleteData = localStorage.removeItem("user");
//     // console.log(deleteData);
//     return(
//         <div>
//             <h1>Local Storage in react</h1>
//             <h1>User : {user}</h1>
//         </div>
//     )
// }
// export default LocalStorage;

//Object in json format in local storage
// function LocalStorage(){
//     const user = {
//         name:"Manish Nayak",
//         profession:"Java Developer"
//     }
// //    const data = localStorage.setItem("user", JSON.stringify(user));
//   const data = localStorage.setItem("user", JSON.stringify(user));
//    console.log(data);

//     localStorage.removeItem("user");
//     return(
//         <div>
//             <h1>Local Storage in react</h1>
//             <h1>User : {data}</h1>
//         </div>
//     )
// }
// export default LocalStorage;

//Real life example of local storage in react
function LocalStorage(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [user , setUser] = useState([]);

    useEffect(()=>{
       const user =  localStorage.getItem("user");
       setUser("");
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userData = {
            name , password , email
        }
         localStorage.setItem("user", JSON.stringify(userData));
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
export default LocalStorage;