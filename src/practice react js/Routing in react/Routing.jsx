//Routing -> Showing the different pages or components based on url wihout reloading the page.
// React is a single page application because it change the component not the page.

//Link -> The link component is used to navigate b/w the pages without reloading.
//NavLink -> It is like the Link , but it knows which link route is active.
//Dynamic routing->
import { Routes , Route , Link, NavLink} from "react-router";
import Home from "./Home";
import About from "./About";
import UserList from "./UserList";

function Routing(){
    return(
        <div>
            <NavLink to = "/" className="text-blue-500">Home</NavLink>
            <br />
            <NavLink to = "/about" className="text-blue-500">About</NavLink>
            <br />
            <NavLink to = "/user"  className="text-blue-500" >User</NavLink>
                <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/user" element = {<UserList />} />
                </Routes>
        </div>
    )
}
export default Routing;