//Basic feature in react-
//react concepts-> React render all elements using the components . Components is nothing just a function.
//Uses of return -> The return keyword is used to render the elements on UI.
//Uses of export-> The Export keyword is used to export the components value to the app.js for the rendering.
//writing the js code -> The js code we writes between the function and return part.
//HTML code -> The html part we writes between the dives tag or the segments.





// Function and the class components  in react js->

//function in react
// import { useState } from "react";
// function Intro2(){
//     const [value, setValue] = useState(0);
//     return(
//         <div>
//              <h1>Jai Shri Ram</h1>
//              <button onClick = {()=>setValue(value + 1)}>click {value} </button>
//         </div>
//     )
// }
// export default Intro2;

//class components in react js -> It is the old technology but importand for the understanding.
// import React from "react";
// class Intro2 extends React.Component {
//     render(){
//            <div>
//              <h1>Jai Shri Ram</h1>
//              <button onClick = {()=>setValue(value + 1)}>click {value} </button>
//         </div>
//     }
// }

// export default Intro2;

//states in class componets->
// import React from "react";
// class Intro2 extends React.Component{
// constructor(){
//     super();
//     this.state = {count : 0}
// }

// increment = () =>{
//     this.setState({count: this.state.count+1});
// }
// render(){
//     return(
//        <>
//         <button onClick={this.increment}> click : {this.state.count}</button>
      
//        </>
//     )
// }
// }

// export default Intro2;


// props and state in react

// import { useState } from "react";
// function Intro2(){
//     const [value, setValue] = useState(0);
//     const [data , setData] = useState('Banana');
//     const handleData = () =>{
//         setData("Mango");
//     }
//     return(
//         <div>
//              <h1>{data}</h1>
//              <button className="h-10 w-30 text-white rounded-2xl bg-pink-400" onClick={handleData}>click</button>
//              <button className="h-10 w-30 text-white rounded-2xl bg-pink-400" onClick = {()=>setValue(value + 1)}>click {value} </button>
//         </div>
//     )
// }
// export default Intro2;

//Toggle in react

// import { useState } from "react";
// function Intro2(){
//     const [data, setData] = useState(true);
//     const [count , setCount] = useState(0);
//     const handleValue = () =>{
//         setData(!data)
//     }

    
//     return(
//         <div>
//           <h1>{data}</h1>
//           <button onClick={()=>{handleValue(setData)}}>click me</button>  
//           {
//            data? <h1>Jai Shri Ram</h1>:null
//           }   

//           {/* //also multiple conditions can also be used here */}
//          <br />
//          <button onClick={()=>setCount(count + 1)}>click me:{count} </button>
//         {
//             count == 5? <h1>hello everyone </h1>
//             :count == 10? <h1>My name is Manish Kumar</h1>
//             :count == 15 ? <h1>And i am from jasoi muzaffarnagar</h1>:<h1>Ram Ram ji</h1>
//         }
//         </div>
//     )
// }
// export default Intro2;

//now completed react condions , state, and make the toggle feature

//props and state -> props passes as the parameter to access the feature of the other components.
import { useState } from "react";
function Intro2(){

    return(
        <div>
            <h1>Hello everyone my name is Manish Kumar and i am from Jasoi Muzaffarnagr.</h1>
          <Intro1 name = {"Manish"} age = {21} />
        </div>
    )
}

function Intro1({name , age}){
    const [data, setData] = useState(true);
   
    return(
        <div>
           <h1>Personal information.</h1>
           <h1>name:{name}</h1>
           <h1>age:{age}</h1>
         
        </div>
    )
}
export default Intro2;