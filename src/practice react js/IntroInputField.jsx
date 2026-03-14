//input field in react





//Handling events -> Events in js is similar to js but written in camelCase and passed as a function.
//event handling questions
// function IntoInputField(){
//     const handleClick = () =>{
//         console.log("button clicked");
//     }
//     return (
//         <div>
//         <button onClick={handleClick}>click me</button>
//         </div>
//     )
// }
// export default IntoInputField;

//change the background color when clicked
// import { useState } from "react";
// function IntoInputField(){
//    const [bg, setBg] = useState("bg-white");
//     return (
//         <div>
//             <div className={`${bg} h-30 `}></div>
//         <button onClick={()=>setBg("bg-blue-500")}>click me</button>
//         </div>
//     )
// }
// export default IntoInputField;

//show when mouse enter a div
// import { useState } from "react";
// function IntoInputField(){
//     const [mouseHover, setMouseHover] = useState(true);
//  const handleMouse = () =>{
//     setMouseHover(mouseHover);
//     alert("Mouse entered !");
//  }
//   const handleMouse1 = () =>{
//     setMouseHover(mouseHover);
   
//  }
//     return (
//         <div>
            
//             {
//                 mouseHover? <div onMouseEnter={handleMouse} className="bg-red-300 h-50">hover me</div>:
//                  <div onMouseEnter={handleMouse1}  className="bg-red-300 h-50">hover me</div>
//             }
//         </div>
//     )
// }
// export default IntoInputField;


//disable button after one clicked
// import { useState } from "react";
// function IntoInputField(){
//     const [disabled , setDisabled] = useState(false);

//     return (
//         <div>
//             <button  className="bg-red-400 rounded-2xl h-15 w-30 text-white disabled:bg-gray-400 
//             disabled:cursor-not-allowed " disabled = {disabled} onClick={()=>setDisabled(true)} >click me</button>
        
//         </div>
//     )
// }
// export default IntoInputField;

//increase button 1 by 1
// import { useState } from "react";
// function IntoInputField(){
//        const [count, setCount] = useState(0);
//     return (
//         <div>
//            <button onClick={()=>setCount(count + 1)}>click me</button>
//             <h1>Count : {count}</h1>
//         </div>
//     )
// }
// export default IntoInputField;


//Input forms and events-
// import { useState } from "react";
// function IntoInputField(){
//        const [value , setValue] = useState('Manish Kumar');
//     return (
//         <div>
//             <input className="border" value={value} onChange={(e)=>setValue(e.target.value)}
//             type = "text" placeholder="Enter your name" name = "name" />
//             <h1>{value}</h1>
//             <button onClick={()=>setValue("")}>click me</button>
//         </div>
//     )
// }
// export default IntoInputField;

//input field and its length
// import { useState } from "react";
// function IntoInputField(){
//        const [value , setValue] = useState('Manish Kumar');
//        const convertToUpperCase = () =>{
//         setValue(value.toUpperCase());
//        }
//     return (
//         <div>
//             <input className="border" value={value} onChange={(e)=>setValue(e.target.value)} type = "text" placeholder="Enter your name" name = "name" />
//             {/* <h1>{value.toUpperCase()}</h1> */}
//             <h1>{value}</h1>
//             <h1>{value.length}</h1>
//             <button onClick={convertToUpperCase}>click me</button>
//         </div>
//     )
// }
// export default IntoInputField;

//submit and print data, clear input field after submission
// import { useState } from "react";
// function IntoInputField(){
//        const [name , setName] = useState('');
//        const [email, setEmail] = useState('');
        
//        const handleForm = (e) =>{
//         e.preventDefault();
//         console.log("Name", name);
//         console.log("Email", email);
//        }
//     return (
//         <div>
//             <form onSubmit={handleForm}>
//             <input className="border" value={name} onChange={(e)=>setName(e.target.value)}
//              type = "text" placeholder="Enter your name" name = "name" />
//               <br />
//               <br />
//                <input className="border" value={email} onChange={(e)=>setEmail(e.target.value)}
//              type = "email" placeholder="Enter your name" name = "email" />
//              <br />
//             <button type="submit">submit</button>
//             </form>
//         </div>
//     )
// }
// export default IntoInputField;

//toggle text between on and off
// import { useState } from "react";
// function IntoInputField(){
//       const [data, setData] = useState(true);
//       const handleData = ()=>{
//         setData(!data);
//       }
//     return (
//         <div>
            
//          <button onClick={handleData}>click me</button> 
//          {
//             data? <h1>Hello everyone my name is Manish Nayak.</h1>:null
//          }   
//         </div>
//     )
// }
// export default IntoInputField;

//counter app for the increment and decrement in react
// import { useState } from "react";
// function IntoInputField(){
//         const [count , setCount] = useState(0);
//         const [disCount, setDisCount] = useState(0);
//     return (
//         <div>
//             <h1 className="text-3xl">Counter App</h1>
//             <h1>Increment values</h1>
//             <button onClick={()=>setCount(count+1)}>click me : {count} </button>

//             <br />
//             <br />
//             <h1>Decrement Values</h1>
//             <button onClick={()=>setDisCount(disCount-1)}>click me : {disCount} </button>
            
//         </div>
//     )
// }
// export default IntoInputField;

//change text color dynamically
// import { use, useState } from "react";
// function IntoInputField(){
//        const [color, setColor] = useState('text-black');
//        const handleColor = () =>{
//         setColor('text-red-300');
//         setColor('bg-blue-500')
//        }
//     return (
//         <div>
//             <h1 className= {`${color}`}>Jai Shri Ram</h1>
//             <button onClick={handleColor}>change color</button>         
//         </div>
//     )
// }
// export default IntoInputField;

//change button from login to logout
// import { use, useState } from "react";
// function IntoInputField(){
//     const [btn, setBtn] = useState(true);
//     const handleButton = ()=>{
//         setBtn(!btn);
//     }
//     return (
//         <div>
//              <h1>Button chage</h1>
//               {
//                 btn ?  <button className="bg-red-700 h-12 w-30 rounded-2xl" 
//                 onClick={handleButton}>Login</button>: <button  className="bg-red-700 h-12 w-30 rounded-2xl" onClick={handleButton}>Logout</button>
//               }
//         </div>
//     )
// }
// export default IntoInputField;

//pass value and display it.
// import { use, useState } from "react";
// function IntoInputField(){
//     const [data, setData] = useState(null);
   
//     const handleClick = (num) => {
//           setData(num);
//     }
//     return (
//         <div>
//             <h1>the values are : {data}</h1>
//             <button className="bg-red-600 " onClick={()=>handleClick(10)}>10</button>
//             <br /><br />
//              <button className="bg-red-600 "  onClick={()=>handleClick(20)}>20</button>
//              <br /><br />
//               <button className="bg-red-600 "  onClick={()=>handleClick(30)}>30</button>
//         </div>
//     )
// }
// export default IntoInputField;

// create button and which one was clicked
// import { use, useState } from "react";
// function IntoInputField(){
// //   const [btn1 , setBtn1] = useState('');
// //    const [btn2 , setBtn2] = useState('');
// //     const [btn3 , setBtn3] = useState('');

//   const handleBtn1 = () =>{
//    console.log("button 1 was clicked");
//   }
//     const handleBtn2 = () =>{
//     console.log("button 2 was clicked");
//   }
//     const handleBtn3 = () =>{
//     console.log("button 3 was clicked");
//   }
    
//     return (
//         <div>
            
//             <button className="bg-red-600 " onClick={handleBtn1}>10</button>
//             <br /><br />
//              <button className="bg-red-600 "  onClick={handleBtn2}>20</button>
//              <br /><br />
//               <button className="bg-red-600 "  onClick={handleBtn3}>30</button>
//         </div>
//     )
// }
// export default IntoInputField;

//pass user name and give greeting
// import { use, useState } from "react";
// function IntoInputField(){
//    const [name, setName] = useState('');

//    const handleName = (data) => {
//          setName(data);
//    }

//     return (
//         <div>
//             <h1>Good morning mr. {name}</h1>
//             <button onClick={()=>handleName("Manish Kumar")}>click me</button>
            
//         </div>
//     )
// }
// export default IntoInputField;

//create product list and show the product name
// import { use, useState } from "react";
// function IntoInputField(){
//     const productName = [
//         {id:1, name :"Labptop"},
//         {id:2, name : "Keybord"},
//         {id:3 , name : "Mouse"}
//     ]

//     const [productData, setProductData] = useState('');
     
//     const handleData = (product) =>{
//         setProductData(product);
//     }
//     return (
//         <div>
//             <h1>Product list:{productData}</h1>
//             <br />
//             {
//                 productName.map((products) =>(
//                     <button className="h-10 w-25 bg-blue-600 rounded-2xl text-white space-x-3" 
//                     key={products.id} onClick={()=>handleData(products.name)}>{products.name}</button>
//                 ))
//             }
           
//         </div>
//     )
// }
// export default IntoInputField;


//detect enter key press in input field
// import {useState } from "react";
// function IntoInputField(){
//     const [inputValue, setInputValue] = useState('');
//     const handleInputKey = (e) =>{
//         if(e.key === "Enter"){
//         console.log("The key is pressed.");
//         }
//     }
//     return (
//         <div>
//             <input type = "text" placeholder="Enter name" value={inputValue}
//             onChange={(e)=>setInputValue(e.target.value)}
//             onKeyDown = {handleInputKey}
//             className="border-1"
            
//             />
                    
//         </div>
//     )
// }
// export default IntoInputField;

//show message when user passed any key
// import {useState } from "react";
// function IntoInputField(){
//     const [inputValue, setInputValue] = useState('');
//     const handleInputKey = () =>{
//           console.log(inputValue);
//         }
    
//     return (
//         <div>
//             <input type = "text" placeholder="Enter name" value={inputValue}
//             onChange={(e)=>setInputValue(e.target.value)}
//             onKeyDown = {handleInputKey}
//             className="border-1"
            
//             />
                    
//         </div>
//     )
// }
// export default IntoInputField;


//change color on mouse hover
// import {useState } from "react";
// function IntoInputField(){


//     const [color , setColor] = useState('bg-blue-500');
 
//     return (
//         <div>
//             < div 
//             onMouseEnter ={()=>setColor('bg-green-600')}
//             onMouseLeave = {()=>setColor('bg-red-600')}
            
//             className={`${color} border-1 text-center h-30 w-50 mt-10 ml-10 rounded-2xl cursor-pointer`}
//             >hover me
//           </div>
                    
//         </div>
//     )
// }
// export default IntoInputField;

//Mouse position x and y
// import {useState } from "react";
// function IntoInputField(){
//   const [position , setPosition] = useState(
//     {x : 0, y:0}
//   );

//   const handlePosition = (e) =>{
//     setPosition({
//         x:e.clientX,

//         y:e.clientY,
//     })
//   }
//     return (
//         <div onMouseMove={handlePosition}>
//             < div className="h-50 w-80 bg-pink-700 rounded-2xl shadow-2xl ">
//                 <p className="text-lg">x:{position.x}</p>
//                 <p className="text-lg">y:{position.y}</p>
//           </div>
                    
//         </div>
//     )
// }
// export default IntoInputField;

//prevent right click
// import {useState } from "react";
// function IntoInputField(){
//     const handleRightClick = (e) =>{
//         e.preventDefault();
//         alert("The right click is disabled.");
//     }
//     return (
//         <div className="h-screen items-center justify-center bg-gray-700" onContextMenu={handleRightClick} >

//             <h1>The right click is disabled.</h1>     
//         </div>
//     )
// }
// export default IntoInputField;


//liked and unlicked button
// import {useState } from "react";
// function IntoInputField(){
//   const [liked , setLiked] = useState(true);

//     return (
//         <div>
//            <button onClick={()=>setLiked(!liked)}
//             className={`h-15 w-30 text-center rounded-2xl  text-white
//                 ${liked ? "bg-red-600" : "bg-gray-600"}
//                 `}
//             >{liked?"unliked":"like"}</button>
//         </div>
//     )
// }
// export default IntoInputField;


//Add to do items
// import {useState } from "react";
// function IntoInputField(){
//     const [toDo, setToDo] = useState("");
//     const [toDos, setToDos] = useState([]);

//     const handleTodo = () =>{
//         if(toDo.trim() === "") return;
//             setToDos([...toDos, toDo]);
//             setToDo("");
       
//     }
//     return (
//         <div>
//        <input type = "text" placeholder="Enter data"
//        value={toDo}
      //  onChange={(e)=>setToDo(e.target.value)}
//        className="border-1 h-10 w-max text-[18px] mx-10 mt-10"
//        />
//        <br />
//        <button className="h-16 w-32  mx-10 mt-10 pt-3 bg-red-600 rounded-2xl text-[19px] text-center" onClick={handleTodo}> Add Data</button>
//        <br />
//        <ul className="list-disc shadow-2xl text-[18px] ">
//         {
            // toDos.map((item, index)=>(
            //   <li key={index}>{item}</li>
             
            // ))
//         }
//        <hr />
//        </ul>
//         </div>
//     )
// }
// export default IntoInputField;

//Disable submit button if the input is empty
// import {useState } from "react";
// function IntoInputField(){
//     const [formData , setFormData] = useState({
//         name:"",
//         email:"",
//         password:"",
//     });

//      const changeData = (e) =>{
//         const {name, value} = e.target;

//         setFormData({
//             ...formData,
//             [name]:value,
//         })
//      }
 
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         console.log("Name :  ", formData.name);
//         console.log("Email :", formData.email);
//         console.log("Password : ", formData.password);

//         setFormData({
//             name:"",
//             email:"",
//             password:"",
//         })

//     }

//     const isDisabled = formData.name.trim() === "" ||
//                        formData.email.trim() === "" || 
//                        formData.password.trim() === "";
    
//     return (
//         <div>
//          <form onSubmit={handleSubmit}>
//             <h1>Name</h1>
//             <input type="text" placeholder="Enter name" value={formData.name} name = "name"
//              className="text-[16px] border"
//              onChange={changeData}
//             />
//             <br /><br />
//             <h1>Email</h1>
//             <input type="email" placeholder="Enter email"  name = "email"
//              className="text-[16px] border" value={formData.email}
//              onChange={changeData}
//             />
//             <br /><br />
//             <h1>Password</h1>
//             <input type="password" placeholder="Enter password"  name="password"
//              className="text-[16px] border" value={formData.password}
//              onChange={changeData}
//             />
//             <br />
//             <br />
//             <button type="submit" disabled = {isDisabled} 
//               className="bg-red-600 rounded-2xl h-14 w-30
//              disabled:bg-gray-300 disabled:cursor-not-allowed
//             ">submit</button>
//          </form>
//         </div>
//     )
// }
// export default IntoInputField;

//pass a click handler from parent to child components

// import {useState } from "react";
// function IntoInputField(){
//     const [name, setName] = useState("");
//     const handleBtn = (e)=>{
//         e.preventDefault();
//         console.log("The button was clicked.");
//         console.log("name:", name);
//     }
//     return (
//         <div>
//             <h1>parent components</h1>
//             <form onSubmit={handleBtn}>
//             <input type="text" placeholder="Enter your name" 
//             value={name} className="border rounded-2xl text-[16px] bg-gray-500"
//             onChange={(e)=>setName(e.target.value)}
//             />
//             <br />
//             <br />
//            <Child onButtonClick = {handleBtn} />
//            </form>

//         </div>
//     )
// }
// function Child({onButtonClick}){
//     return(
//         <div>
//             <h1>The button click</h1>
//             <button type="submit" onClick={onButtonClick} className="h-13 w-30 bg-blue-700 rounded-2xl">clic me</button>
//         </div>
//     )
// }
// export default IntoInputField;


//reusable buttons
// import {useState } from "react";
// function IntoInputField(){
//        const handleButton = () =>{
//         console.log("The button was clicked.");
//        }
//     return (
//         <div>
//            <Button text = "Login" onClick = {handleButton} />
//            <Button text = "Register" onClick = {handleButton} />
//            <Button text = "Logout" onClick = {handleButton} />
//         </div>
//     )
// }
// function Button({text, onClick}){
//     return(
//         <div>
//             <h1>The button click</h1>
//             <button onClick={onClick} className="h-13 w-30 bg-blue-700 rounded-2xl">{text}</button>
//         </div>
//     )
// }
// export default IntoInputField;


//show and hide password
// import {useState } from "react";
// function IntoInputField(){
//     const [showPassword, setShowPassword] = useState(false);

//     const handlePassword = () =>{
//         setShowPassword(!showPassword);
//     }
//     return (
//         <div>
//             {/* {
//              showPassword?<input type = {showPassword ? "text":"password"} placeholder="Enter password" className="border-1 mt-5 ml-5" />:null
//             } */}
//     <input type = {showPassword ? "text":"password"} placeholder="Enter password" className="border-1 mt-5 ml-5" />
//         <br />
//         <button onClick={handlePassword} className="h-12 w-30 rounded-2xl bg-red-500 text-[16px] mt-5 ml-5">
//             {showPassword?"show password":"hide password"}
//         </button>
//         </div>
//     )
// }

// export default IntoInputField;

//validate input field 
import {useState } from "react";
function IntoInputField(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword , setShowPassword] = useState(false);

  const isDisabled = !email || !password;

  const handleForm = (e) =>{
     e.preventDefault();
     console.log("Email:", email);
     console.log("Password:", password);
     setEmail("");
     setPassword("");
  }

    const handlePassword = () =>{
    setShowPassword(!showPassword);
  }

    return (
        <div>
           <div className="min-h-screen px-30 py-20 justify-center bg-gradient-to-r from-indigo-600 to-purple-700 ">
            <div className="bg-white justify-self-center w-full max-w-sm p-8 rounded-xl shadow-lg">
            <div className="text-2xl font-bold mb-6  text-center">
                <h1>login form</h1>

            </div>
            <form onSubmit={handleForm} className="space-y-4">


              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" placeholder="Enter your Email" 
              value={email} 
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <br />


              <label className="block text-sm font-medium mb-1">Password</label> 
              <input type = {showPassword ? "text":"password"} placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              name="password"
               className="w-65  px-4 rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

  
              <span className="mt-[-2px] rounded-lg absolute p-2.5 text-[16px] font-bold text-white cursor-pointer bg-indigo-700"
               onClick={handlePassword}>{showPassword ? "hide ":"show "}</span>            
              <br />


              <button type="submit" disabled = {isDisabled} 
              className={`w-full py-2 font-semibold rounded-lg text-white transition
                ${isDisabled?"bg-gray-300 cursor-not-allowed":"bg-indigo-600 hover:bg-indigo-800"}
                `}
              >Submit</button>

              </form>
              <p className="text-sm text-center mt-4">Don't have an Account<span className="
               text-indigo-700 font-medium cursor-pointer hover:underline ml-1
              ">Register</span></p>
              </div>
           </div>
        </div>
    )
}

export default IntoInputField;

