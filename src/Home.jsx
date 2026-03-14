import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Home(){
    const [userData, setUserData] = useState([]);
    const [loadingData, setLoadingData] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        getUserData();
        setLoadingData(true);
    },[])
     const getUserData = async () =>{
     const url = "http://localhost:3000/users";
     let response = await fetch(url);
     response = await response.json();
     console.log(response);
     setUserData(response);
     setLoadingData(false);
    }

    const deleteUser = async (id) =>{
      const url = "http://localhost:3000/users";
      let response = await fetch(url +'/'+id,{
        method:'delete'
      });
      response = await response.json();
      if(response){
        alert("recored deleted");
        getUserData();
      }
    }

    const editUser = async (id) =>{
      navigate('/edit/' + id);
    }
    return(
        <div>
           <h1>makes routes and pages for add users and user list ui</h1>
           <table className="w-full text-left table-auto">
             <thead>
                    <tr>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Age</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Action</th>
                    
                    </tr>
                </thead>
           </table>
           {
            !loadingData?
            userData.map((user)=>(
               <table className="w-full text-left table-auto" key={user.name}>
                <tbody>
                <tr>
                <td className="border px-4 py-2 ml-6">{user.name}</td>
                 <td className="border px-4 pl-4 py-2">{user.age}</td>
                 <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2"><button className="border" onClick={()=>deleteUser(user.id)}>Delete</button>
                  <button className="border" onClick={()=>editUser(user.id)}>Edit</button></td>
                 </tr>
                 </tbody>
                </table>
            ))
            :<h1>Loading.....</h1>
           }
        </div>
    )

}
export default Home;