//Hooks and its types -> Hooks are the speical functions introduced in react 16.8 version. In old version
//of react we used to use class component.
// In this new version 16.8 we get new features like life cycle, states and share longic inside the functional component.
// Types of hooks -> useState, useEffect, useContext(basic hooks)
//additional hooks -> useRef, useMemo, useCallback, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue

import { Divide } from "lucide-react";
import { useActionState, useId, useMemo, useState } from "react";


// import { useEffect, useRef, useState } from "react"


//before the hooks feature we used the class component feature.
// import React , {Component} from "react";
// class Hooks extends Component{
//     render() {
//         return <h1>Welcome to old feature of react.</h1>
     
//     }
// }
// export default Hooks;

//useRef hook -> it used to handle the side effects in the functional componets.
//side effect includes -> Api calls , data fetching, dom manupulation, Timers, event listeners, subscriptions.
//it also prevents the extra rendering of components on states.

// function Hooks(){
//     const [count, setCount] = useState(0);
//     const [data, setData] = useState(0);

   
//     return(
//         <div>
//              <button onClick={()=>setCount(count + 1)}>value is: {count}</button>
//              <br />
//              <button onClick={()=>setData(data + 1)}>data is: {data}</button>
//              <br />
//              <Hooks1 count = {count} data = {data} />
//         </div>
//     )
// }

// function Hooks1({count, data}){
//     function callOnce(){
//         console.log("The function is called");
//     }
//     useEffect(()=>{
//         callOnce();
//     },[count ,data])
//     return(
//         <div>
//           <h1>The count is : {count}</h1>
//           <br />
//           <h1>The data is : {data}</h1>
//         </div>
//     )
// }
// export default Hooks;


//useRef -> It is the important feature in modern react.
// Access the DOM elements directly and store the mutable values that do not trigger the rerendering.
//changing useRef value that does not cause of re-rendering.


//1. Accessing the dom elements.
// function Hooks(){
//     const Ref = useRef(null);

//     useEffect(()=>{
//         Ref.current.focus();
//         Ref.current.style.color = "red";
//     },[])
//     return(
//         <div>
//             <input ref = {Ref} type="text" placeholder="Enter Your Name" />
//         </div>
//     )
// } 
// export default Hooks;

//useRef and useState
// function Hooks(){
//     const [count , setCount] = useState(0);

//     const countRef = useRef(0);

//     return(
//         <div>
//             <button onClick={()=>countRef.current++}>count Ref : {countRef.current}</button>
//             <br />
//             <button onClick={()=>setCount(count + 1)}>count : {count}</button>
//         </div>
//     )
// }
// export default Hooks;

//storing previous state value
// function Hooks(){
//     const [count , setCount] = useState(null);
//     const prevCount = useRef(null);

//     useEffect(()=>{
//         prevCount.current  = count;
//     }, [count]);

//     return(
//         <div>
//              <p>count : {count}</p>
//              <br />
//              <p>prevCount : {prevCount.current}</p>
//              <br />
//             <button onClick={()=>setCount(count + 1)}>click me</button>
//         </div>
//     )
// }
// export default Hooks;

// useRef for the Timers
// function Hooks(){
//      const timersRef = useRef(null);
//      const start = () =>{
//         timersRef.current = setInterval(()=>{
//             console.log("Timer is running....");
//         },1000);

//         const stop = () =>{
//             clearInterval(timersRef.current);
//         }
//      }
//     return(
//         <div>
//             <button onClick={start}>start</button>
//             <br />
//             <button onClick={stop}>Stop</button>
//         </div>
//     )
// }
// export default Hooks;

//4.Forward ref ->forward ref forward a ref from parent to child components
//becuase without the forward ref hook we could not pass the props form the parent to child so this problem resoleve
// by the forward ref.

//Example of passing the props from parent to child befor the forward ref hook
// import { useEffect, useRef } from "react";
// function Hooks(){
//     const inputRef = useRef(null);
    
//     const handleColor = () =>{
//         console.log(inputRef.current.style.color = "red");
//     }
//     return(
//         <div>
//             <h1>Hello everyone</h1>
//             <Child ref = {inputRef} />
//         </div>
//     )
// }

// function Child({inputRef}){
//     return(
//         <div>
//             <h1 ref={inputRef}>My name is Manish Nayak.</h1>
//         </div>
//     )
// }
// export default Hooks;


//example of forward ref hook
// import React from "react";
// import { useEffect, useRef } from "react";
// function Hooks(){
//     const inputRef = useRef(null);
    
//     // const handleColor = () =>{
//     //     inputRef.current.style.color = "red"
//     // }
//     useEffect(()=>{
//         inputRef.current.style.color = 'red';
//     },[])
//     return(
//         <div>
//             <h1 ref = {inputRef}>Hello everyone</h1>
//             {/* <button onClick={handleColor}>click me</button> */}
//             <Child ref = {inputRef} />
//         </div>
//     )
// }

// const Child = React.forwardRef((props, ref) => {
  
//     return(
//         <div>
//             <h1 ref={ref}>My name is Manish Nayak.</h1>
//         </div>
//     )
// });
// export default Hooks;

//useFormStatus in react ->it is generally used in react forms and server actions.
//This hooks is espicially use for disabling buttons, loaders and preventing double submissions.
//it helps us to track the submission state of a form without using the state.
// import { useFormStatus } from "react-dom";
// function Hooks(){    
//     const formHandler = async () =>{
//     await new Promise(res =>
//         setTimeout(res, 2000)
//     )
//     console.log("submit");
// }
//     return(
//         <div>
//             <form action={formHandler}>
//                 <input type="email"
//                  placeholder="Enter email"
//                  name="email"
//                  className="mx-3 my-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//                  />
//                  <br /><br />
//                  <input type="password"
//                  placeholder="Enter password"
//                  name="password"
//                  className="rounded-md mx-3 my-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
//                  />
//                  <br />
//                  <br />
//                 <SubmitButton />
//             </form>
//         </div>
//     )
// }
// function SubmitButton(){
//     const {pending} = useFormStatus();
//     console.log(pending);
//     return(
//         <div>
//              <button disabled = {pending}
//                  className={`h-10 w-26 text-[18px] mx-4 text-white rounded-2xl bg-gray-500 font-semibold
//                     // ${pending? "bg-gray-300 cursor-not-allowed" :"bg-gray-400 hover:bg-gray-600"}

//                     `}
                    
//                  >{pending ? 'submitting...' : 'submit'}</button>
//         </div>
//     )
// }

// export default Hooks;

//useTransitions hook in react-> it is used to mark non urgent state update so our UI stays fast and responsive.
// urgent state -> clicking, typing;
//non-urgent state-> Heavy rendering/filtering/navigation
//without useTransition , heavy updates can freez UI, Lag typing, make app feel slow.
//useform status we can use only in forms but useTransitions hook we can use without form .

// import { useTransition } from "react"
// function Hooks(){
//     const [pending , startTransition] = useTransition();

//     const handleButton = () =>{
//         startTransition(async () =>{
//           await  new Promise (res =>{
//                 setTimeout(res,5000);
//                 console.log("submit");
//             })
//         })
//     }
//     return(
//         <div>
//             <h1>Use transitions hook for the Loading without form.</h1>
//              {
//                 pending ? <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" />:null
//              }
//             <button disabled = {pending}
//              onClick={handleButton}
//              className={`h-10 w-28 rounded-2xl text-white text-[18px] 
//                  ${pending ? "bg-blue-200": "bg-blue-600"}
//                 `}
//              >
//                 submit 
//             </button>
//         </div>
//     )
// }
// export default Hooks;



//useAction state hook in react ->it is a modern react hook used to manage the state returned from the
//server Action.
//it helps us -> handle form submission result
//               handler error
//               handle data
//               Avoid manual useState + fetch

// function Hooks(){
  
//         const handleSubmit = async (prevData, formData) =>{
//            let email = formData.get('email');
//            let password = formData.get('password');
         
//            await new Promise(res =>setTimeout(res,2000));
//            console.log(email, password);

//            if(email && password){
//             return {message:"Form submitted .", email, password}
//            }else{
//             return {message : "Enter again the proper data .", email, password}
//            }
//         }
    
//      const [data,action,pending]=useActionState(handleSubmit,undefined);
//      console.log(data);
//     return(
//         <div>
//             <h1>Use Action state hook. </h1>
//             <form action={action}>
//                 <input  type="email"
//                  defaultValue={data?.email}
//                  placeholder="Enter email" 
//                  name="email"
//                  />
//                  <br />
//                  <input type="password"
//                  defaultValue={data?.password}
//                  placeholder = "Enter password"
//                  name="password"
//                  />
//                  <br />
//                  <button disabled = {pending}
//                  className={`h-10 w-30 rounded-xl font-semibold text-[18px] shadow-2xl my-5 text-white
//                     cursor-pointer
//                      ${pending ?"bg-gray-500 cursor-not-allowed"
//                     :"bg-blue-600 hover:bg-blue-800"
//                  }`}
//                  >{pending?"submitting..." : "submitted"}</button>
//             </form>
//             <br />
//             {
//             data?.error && <span>{data?.error}</span>
//             }
//             {
//                 data?.message && <span>{data?.message}</span>
//             }
//             <br />
//             <br />
//             <h1>Email : {data?.email}</h1>
//             <br />
//             <h1>Password : {data?.password}</h1>
//         </div>
//     )
// }
// export default Hooks;


//useMemo hooks -> it is used for the optimization in react.
// it memoizes(remember ) the result of the calculation so that the react does not need to recompute it
//on every render unless its dependencies change.

//example without memo
// function Hooks(){
//     const [count, setCount] = useState(0);
//     const [text , setText] = useState("");

//     const square = count * count;
//     return(
//         <div>
//             <h1>Square : {square}</h1>
//             <button onClick={()=>setCount(count+1)}>click me</button>
//             <br />
//             <input type="text"
//             placeholder="Enter Text"
//             value={text}
//             onChange={(e)=>setText(e.target.value)}
//             />
//         </div>
//     )
// }
// export default Hooks;

// function Hooks(){
//     const [count, setCount] = useState(0);
//     const [text , setText] = useState("");

//     const square = useMemo((e)=>{
//         console.log("calculating square...");
//         return count*count;
//     }, [count])
//     return(
//         <div>
//             <h1>Square : {square}</h1>
//             <button onClick={()=>setCount(count+1)}>click me</button>
//             <br />
//             <input type="text"
//             placeholder="Enter Text"
//             value={text}
//             onChange={(e)=>setText(e.target.value)}
//             />
//         </div>
//     )
// }
// export default Hooks;

//useId hook in react-> useId is a buildin react hook used to genenrate the unique , stable IDs;
//it mainly used for accessiblity and form elements.
// -> why do we need useId-
//1.<label> must be connected with input.
//2.IDs must be unique.
//3.react components can render multiple theams.
//These all three problems solved by the useId

// function UserData(){
//     const name = useId();
//     const dob = useId();
//     const password = useId();
//     console.log(name, dob, password);
//     return(
//         <div>
//             <label htmlFor= {name}> :Name</label>
//             <br />
//             <input type="text" 
//                    placeholder="Enter name"
//                    id={name}
//             />
//             <br />
//              <label htmlFor= {dob}> :DOB</label>
//              <br />
//              <input type="dob" 
//                    placeholder="Enter DOB"
//                    id={dob}
//             />
//             <br />
//              <label htmlFor= {password}>Password</label>
//              <br />
//              <input type="password" 
//                    placeholder="Enter password"
//                    id={password} />
//         </div>
//     )
// }
// function Hooks(){
//     return(
//         <div>
//            <UserData /> 
         
//         </div>
//     )
// }
// export default Hooks;


//custom hook in react -> It is a javascript function and it starts with use and it allows us to extract and reuse
// the components across the components.
// To reuse logic.
// To keep components clean and focused.
// To share logic between components.

const useToggle  = (defaultValue) =>{
    const [value, setValue] = useState(defaultValue);
    function toggleValue(val){
          if(typeof val != Boolean){
            setValue(!value);
          }
          else{
            setValue(val);
          }
    }
    return [value , toggleValue];
}

function Hooks(){
    const [value, toggleValue] = useToggle(false);
    console.log(value);
    return(
        <div>
            <button className="h-12 w-30 bg-red-700 text-[18px] p-1 rounded-2xl text-white" onClick={toggleValue}>Toggle Heading</button>
            <br />
            <button className="h-12 w-30 bg-blue-700 text-[18px] p-1 rounded-2xl text-white" onClick={()=>toggleValue(true)}>Show heading</button>
            <br />
            <button className="h-12 w-30 bg-green-700 text-[18px] p-1 rounded-2xl text-white" onClick={()=>toggleValue(false)}>Hide Heading</button>
            <br />
          {
            value ? <h1>Toggle heading</h1> :null
          }
        </div>
    )
}
export default Hooks;