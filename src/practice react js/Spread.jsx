//spread operator -> The spread operator is used to expand elements of an array, objects and string into individual values.
// It helps in copying , merging and updating data.
//copy data

// function Spread(){
//     const nums = [1,2,3];
//     const copy = [...nums]
//     console.log(copy);
//     return(
//         <div>
//            <h1>Hello everyone : {copy}</h1>
//         </div>
//     )
// }
// export default Spread;

//merging data
// function Spread(){
//     const nums = [1,2,3];
//     const copy = [4,5,6];
//    const data = [...nums, ...copy];
//     return(
//         <div>
//            <h1>Hello everyone : , {data } ,</h1>
//         </div>
//     )
// }
// export default Spread;

//Add new elements
// function Spread(){
//     const nums = [1,2,3];
//     const copy = [...nums, 4,5,6]
//     console.log(copy);
//     return(
//         <div>
//            <h1>Hello everyone : {copy}</h1>
//         </div>
//     )
// }
// export default Spread;


//spread operator with objects
//copy an object and update object propery
// function Spread(){
//     const nums = {firstName:"Manish", lastName:"Kumar"};
//     const data = {...nums, lastName:"Nayak"}
//     console.log(data)
//     return(
//         <div>
//            <h1>Hello everyone :{data.firstName + data.lastName}</h1>
//         </div>
//     )
// }
// export default Spread;

//spread operator with string 
function Spread(){
    const name = "ManishNayak";
    const letters = [...name];
    console.log(letters);

    return(
        <div>
           <h1>Hello everyone :{letters}</h1>
        </div>
    )
}
export default Spread;