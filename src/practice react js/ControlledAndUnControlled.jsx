//controlled and uncontrolled components-
//controlled components -> Controlled components are the form elements and react controll the form using the state.

// import { useState } from "react"
// function ControlledAndUnControlled(){
//     const [name, setName] = useState('');
//     const handleName = (e) =>{
//         setName(e.target.value);
//     }
//     const handleSubmit = (e) =>{
//          e.preventDefault();
//          console.log("Name : ", name);
//     }
//     return(
//         <div>
//             <h1>Enter your name</h1>
//             <form onSubmit={handleSubmit}>
//             <input type="text"
//             placeholder="Enter name"
//             // value={name}
//             name="name"
//             onChange={handleName}
//             />
//             <button type="submit">submit</button>
//             </form>
//         </div>
//     )
// }
// export default ControlledAndUnControlled;



//Uncontrolled components ->Dom itself manage the forms
// it does not uses the state and input valueand data accessed when only needed
import { useRef, useState } from "react"
function ControlledAndUnControlled(){
      const nameRef = useRef(null);

      const handleSubmit = (e) =>{
          e.preventDefault();
          console.log("name :", nameRef.current.value);
      }
    return(
        <div>
            <h1>Enter your name</h1>
            <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter name"
            // value={name}
            name="name"
            ref={nameRef}
            />
            <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default ControlledAndUnControlled;