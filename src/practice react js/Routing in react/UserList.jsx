//Dynamic routing -> it allows us to creating routes that can change dynamically parameters - usually to display
//that depends on id, name and other variables.
//Dynamic routing -> it allows us to define routes with parameters.
import { Link } from "react-router";
function UserList(){
    const userData = [
        {id:1, name:"Manish"},
        {id:2, name:"Suraj"},
        {id:3, name:"Boby"},
        {id:4, name:"Madhav"}
    ];
    console.log(userData)
    return(
        <div>
           <h1>User data list</h1>
           {
            userData.map((item , index)=>(
                <Link key={index} to = {"/user/" +item.id}>{item.id} : {item.name}</Link>
                
            ))
           }
        </div>
    )
}
export default UserList;