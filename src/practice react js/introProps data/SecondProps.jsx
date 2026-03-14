// import { useState } from "react";
// import IntroProps1 from "./IntroProps1";
// //props with arrays

import FirstProps from "./FirstProps";
function IntroProps(){
   //   const users = ["Manish", "Suraj", "Boby", "Madhav"];
   //     console.log(users);


     const students = {
        name:"Manish",
        class:"Btech",
        branch:"cse",
        year:2022
     };
     console.log(students);
     
    return(
        <div>
         <h1>Hello</h1>
          <IntroProps1 students = {students} />
         {/* {
            users.map((name, index) =>(
                  <IntroProps1 key = {index}  name = {name} />
            ))
         }
           */}
         
        </div>
    )
}
export default IntroProps;

// very useful props in react

// function SecondProps({data}){
 
//    return(
//       <div>
//          <h1>Now we will pass the object</h1>
//          <h1>name : {data.name}</h1>
//          <h1>class: {data.class}</h1>
//          <h1>rollNo: {data.rollNo}</h1>
//          <h1>branch :{data.branch}</h1>
//          <h1>college :{data.college}</h1>

//       </div>
//    )
// }
// export default SecondProps;

//props children

// function SecondProps(){
//    return(
//       <div>
//        <h1>Hello everyone my name is Manish Kumar</h1>
//       </div>
//    )
// }
// export default SecondProps;
