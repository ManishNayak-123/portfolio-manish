// import { Routes , Route, Router} from "react-router";
// import Project from "./Project";
// function App(){
//   return(
//     <div>
//         <Project />    
//     </div>
//   )
// }
// export default App;











//Activity in reactjs


// import { Route,Routes } from "react-router";
// import College from "./College";
// import CartList from "./CartList";
// import CartData  from "./Contact";
// function App(){
     

//     return(
//         <div>
//             <College />
//            <Routes>
//              <Route path="/" element = {<CartData />}></Route>
        
//             <Route path="/cart" element = {<CartList />}></Route>     
//             </Routes>     
//         </div>
//     )
// }
// export default App;


// import FirstProps from './practice react js/introProps data/FirstProps';

// import IntroInputField from "./practice react js/IntroInputField";
// // import Spread from "./practice react js/Spread";
// import ControlledAndUnControlled from "./practice react js/ControlledAndUnControlled";
// import ContextAPI from "./practice react js/Context API/ContextApi";
// import Hooks from "./practice react js/Hooks";
// import API from "./practice react js/API in react/API";
// import JsonServer from "./practice react js/API in react/JsonServer";
// import Routing from "./practice react js/Routing in react/Routing";
// import Lifecycle from "./practice react js/LifeCycle";
// import Time from "./practice react js/Time";
// import DynamicRendering from "./practice react js/DynamicRendering";
// import DerivedState from "./practice react js/DerivedState";
// import Parent from "./practice react js/LiftingState.jsx/Parent";
// import UpdateArray from "./practice react js/UpdateArray";
// import Project from "./Project";
// import PureAndImpureComp from "./practice react js/PureAndImpureComp";
// import Routing from "./practice react js/API in react/Routing";
// import CookiesStorage from "./practice react js/Storage in react/CookiesStorage";
// import Cookies from "./practice react js/Storage in react/CookiesStorage";
// import LocalStorage from "./practice react js/Storage in react/LocalStorage";
// import SessionStorage from "./practice react js/Storage in react/SessionStorage";
// import Pagination from "./practice react js/Third party module/Pagination";
// import SocialLogin from "./practice react js/Third party module/SocialLogin";
// import Search from "./practice react js/Third party module/Search";
// import NayakSearch from "./practice react js/Third party module/NayakSearch";
// import AddTodo from "./practice react js/Features/AddTodo";
// import Todos from "./practice react js/Features/Todos";
import {Route, Routes } from "react-router";
import About from "../new project for portfolio/About";
import Home from "../new project for portfolio/Home";
import Portfolio from "../new project for portfolio/Portfolio";
import Skills from "../new project for portfolio/Skills";
import Project from "../new project for portfolio/Project";
// import Project from "./Project";

// import UploadFile from "./practice react js/Third party module/UploadFile";
function App(){
    return (
        <div >
             {/* <DynamicRendering /> */}
             {/* <IntroInputField /> */}
             {/* <Time /> */}
             {/* <Hooks /> */}
             {/* <Lifecycle /> */}
             {/* <ControlledAndUnControlled />  */}
             {/* <PureAndImpureComp /> */}
              {/* <DerivedState /> */}
              {/* <Parent /> */}
              {/* <Project /> */}
              {/* <UpdateArray /> */}
              {/* <ContextAPI /> */}
              {/* <Routing /> */}
              {/* <API /> */}
              {/* <JsonServer /> */}
              {/* <Routing /> */}
              {/* <CookiesStorage /> */}
              {/* <LocalStorage /> */}
              {/* <SessionStorage /> */}
              {/* <SocialLogin /> */}
              {/* <Pagination /> */}
              {/* <Search /> */}
              {/* <NayakSearch /> */}
              {/* <UploadFile /> */}
              {/* <AddTodo />
              <Todos /> */}
              {/* <Project /> */}
              {/* <Portfolio /> */}
              <Routes>
               <Route  path = "/" element = {<Home /> } />
             <Route path = "/about" element = {<About />} />
             <Route path = "/skills" element = {<Skills />} />
             <Route path = "/project" element  = {<Project />} />
             </Routes>
              {/* <About /> */}
        </div>
    )
}
export default App;