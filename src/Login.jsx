//subject.jsx in cpp
// import { useContext } from "react";
// import { SubjectContext } from "./ContextData";
// function Subject() { 
//     const subject = useContext(SubjectContext);
//   return(
//   <div style={{backgroundColor:"red", padding:"10px"}}>
//      <h1>Subject is : {subject}</h1>
//    </div>    
//   )
// }

import { useReducer } from "react";




// export default Subject;

// import { useState } from "react";
// const useToggle = (defaultVal) =>{
// const [value, setValue] = useState(defaultVal);

// function toggleValue(val){
//    console.log(val);
//    if(typeof val != 'boolean'){
//     setValue(!value);
//    }
//    else{
//     setValue(val);
//    }
// }
// return [value, toggleValue];
// }

// export default useToggle;
// import { NavLink } from "react-router";
// import { useActionState, useState } from "react";
// function Login(){
//   const handleLogin = (prevData, formData) =>{
//     let name = formData.get('name');
//     let email = formData.get('email');
//     let password = formData.get('password');
//     let regex = /^[A-Z0-9]+$/i;
//     console.log(name, email, password);

//     if(!name  || name.length >15){
//       return {error : 'Name cannot be empty or Name must not contain more than 15 characters. ', name, email, password};
//     }
//     else if(email.length >20){
//       return {error: 'Email must not contain more than 20 characters. ', name, email, password};
//     }
//     else if(!regex.test(password)){
//       return {error : 'Passowrd must not contain alphabet and numbers , and also contain more than 6 charcters. ', name, email, password};
//     }
//     else{
//       return {message : 'singup is successful', name, email, password};
//     }
//   }
//    const [data, action, pending] = useActionState(handleLogin);
//    console.log(data);
//    return(
//       <div>
//          <center><h1 className="text-2xl font-bold">Sign Up form</h1></center>
//              {
//                 data?.message && <span className="border-b-emerald-700 rounded-1.5xl text-2xl 
//                  text-white bg-green-500 font-bold">{data?.message}</span>
//              }
//               {
//                 data?.error && <span className="border text-2xl text-white bg-red-600 font-bold">{data?.error}</span>
//              }

//       <center><div className="bg-blue-400 h-70 w-50 mt-10 rounded-2xl">   
//          <form action={action}>
//       <input type="text" name="name" defaultValue={data?.name}
//        style={{border:'1px solid black', marginTop:'40px'}} placeholder="enter name" />

//       <br /><br />
//       <input type="email" name= "email" defaultValue={data?.email} style={{border:'1px solid black', marginTop:'10px'}}  placeholder="enter email" />
//       <br /><br />
//       <input type="password" defaultValue={data?.password} name = "password" style={{border:'1px solid black', marginTop:'10px'}}  placeholder="enter password" />
//       <br /><br />
//       <button className="border bg-fuchsia-800 rounded-2xl font-bold h-10 w-20" disabled = {data?.error} >submit</button>
//      </form> 
//       </div></center>
//       </div>
//    )
// }
// export default Login;

//useReducer hook in react.js
// It is the alernative of the use state hook in react
// const emptyData = {
//   name:'',
//   password:'',
//   email:'',
//   address:''
// }

// const reducer = (data,action) => {
//   return {...data, [action.type]: action.val}
// // console.log(data, action);
// }
// function Login(){
//   const [state, dispatch] = useReducer(reducer, emptyData);
//   console.log(state);
//   return(
//     <div>
//       <h1 className="text-2xl font-bold" >Use Reducer hook</h1>
//       <input className="border" onChange={(e) =>dispatch({val:e.target.value, type:'name'})} type="text" placeholder="enter your name" />
//       <br /><br />
//       <input  className="border" onChange={(e) =>dispatch({val:e.target.value, type:'password'})}  type="password" placeholder="enter your password" />
//       <br /><br />
    

//       <input  className="border" onChange={(e) =>dispatch({val:e.target.value, type:'email'})}  type="email" placeholder="enter your email" />
//       <br /><br />
//       <input className="border" onChange={(e) =>dispatch({val:e.target.value, type:'address'})}   type="text" placeholder="enter your address" />
//       <br /><br />
//       <button className="border" onClick={() =>console.log(state)} >submit</button>
//       <br />
//       <br />
//       <br />
//       <h1>View Data in real</h1>
//       <ul>
//         <li>Name:{state.name}</li>
//          <li>Password:{state.password}</li>
//           <li>Email:{state.email}</li>
//            <li>Address:{state.address}</li>
           
//       </ul>
//     </div>
//   )
// }

function Login(){
  return(
    <div>
      <h1>Hello this the lazy trial</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi molestias nesciunt. 
        Nisi ipsum maxime eius obcaecati rerum! 
        Libero ullam similique quam necessitatibus reprehenderit, dolorem voluptate harum nulla. 
        Quia, voluptate?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptas asperiores itaque error,
         obcaecati voluptate deserunt amet dignissimos
         expedita impedit dolor molestiae reprehenderit voluptates tempora iusto! Nulla a suscipit atque!
        </p>
    </div>
  )
}
export default Login;