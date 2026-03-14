import { useState } from "react"

//Derived state -> Derived state is a value that is calculated from props and state.
function DerivedState(){
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleUsers = () =>{
        setUsers([...users, user]);
    }
    console.log(user);
    const total = users.length;
    const lastName = users[users.length - 1];
    const unique = [...new Set(users)].length;
    return(
        <div>
            <h1>Total users : {total}</h1>
            <br />
            <h1>Last users : {lastName}</h1>
            <br />
            <h1>unique users : {unique}</h1>
            <br />
            <input type="text" placeholder="Enter the names" name="name"
            onChange={(e)=>setUser(e.target.value)}
            />
            <br />
            <button onClick={handleUsers}>Add users</button>
            <br />
            {
                users.map((item , index) =>(
                    <h1 key={index}>{item}</h1>
                ))
            }
        </div>
    )
}
export default DerivedState;