//Lifecycle phase in js -> In modern jsx we donot use the class components. Instead we manage the entire lifecycle 
//using Hooks mainly: we use mainly two hooks that are ->
// useState + useEffect



//Lifecycle phase -> Still the same 3 phase but implemented differently-
// 1. Mounting -> Display on the screen.
// 2. Unmounting -> Component removed from the screen.
// 3. Updating -> Change the state/ props.

//1. mounting example
// import { useEffect } from "react"
// function Lifecycle(){
//     useEffect(()=>{
//         console.log("Mounted components.");
//     }, []);
//     return(
//         <div>
//             <h1>Hello everyone my name is  Manish Kumar.</h1>
//         </div>
//     )
// }
// export default Lifecycle;


//2. Updated example
// import { useEffect, useState } from "react"
// function Lifecycle(){
//     const [count, setCount] = useState(0);

//     useEffect(()=>{
//         console.log("Updated components.", count);
//     }, [count]);
//     return(
//         <div>
//             <button onClick={()=>setCount(count + 1)}>click me : {count}</button>
//             <h1>Hello everyone my name is Manish Kumar.</h1>
//         </div>
//     )
// }
// export default Lifecycle;


//unmounting example
import { useEffect, useState } from "react"
function Lifecycle(){
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Running.....");
        },1000);
        
    return ()=>{
        clearInterval(timer);
        console.log("The component unmounted.");
    }

    }, []);
    return <h1>The Timer is running.</h1>
}
export default Lifecycle;