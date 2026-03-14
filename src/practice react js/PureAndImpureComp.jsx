//pure components -> A pure components gives the same output for the same props and state and does not change
//anything outside of the state.
// function PureAndImpureComp(){
//     return(
//         <div>
//              <h1>pure componets values</h1>
//              <Counter count = {1} />
//              <Counter count = {2} />
//              <Counter count = {3} />
//              <Counter count = {4} />
//         </div>
//     )
// }

// function Counter({count}){
//     count = count + 1;
//     return(
//         <div>
//             <h1>count : {count}</h1>
//         </div>
//     )
// }
// export default PureAndImpureComp;

//Impure Components -> An impure components gives the different output for the same input outside of the 
// components.
let count = 0;
function PureAndImpureComp(){
    return(
        <div>
             <h1>pure componets values</h1>
             <Counter />
             <Counter  />
             <Counter />
             <Counter  />
        </div>
    )
}

function Counter(){
    count = count + 1;
    return(
        <div>
            <h1>count : {count}</h1>
        </div>
    )
}
export default PureAndImpureComp;