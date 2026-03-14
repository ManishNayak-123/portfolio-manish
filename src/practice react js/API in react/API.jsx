//API -> Application programming interface.
//Before api we need data to connect with database.
//So we make api to connect with database.

import { useEffect, useState } from "react"

function API(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";
        let response = await fetch(url);
            response = await response.json();
            console.log(response);
            setData(response);
    }
    return(
        <div>
         <h1>Fetch API in react.</h1>
         {
           data.map((img)=>(
            // <h1>{img.url}</h1>
            <div className="flex">
            <img className="h-120 w-150 " src= {img.url} 
            
            alt="api-img"
            />
            </div>
           ))
         }
        </div>
    )
}

export default API;