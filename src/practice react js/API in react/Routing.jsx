//Routing
import { Routes, Route , Link } from "react-router";
import JsonServer from "./JsonServer";
import AddData from "./AddData";
function Routing(){
    return(
        <div>
            <Link className="text-blue-700" to = "/">
               Table
            </Link>
            <br />
            <Link className="text-blue-700"  to = "/add">
             AddData
            </Link>
          <Routes>
            <Route path="/" element = {<JsonServer />} />
            <Route path="/add" element = {<AddData />} />
            
          </Routes>
        </div>
    )
}
export default Routing;