import { useState } from "react";

//Update Array section in java
function UpdateArray(){
    const [data, setData] = useState(["Manish", "Suraj", "Boby", "Madhav"]);

    const handleData = (name) =>{
            data[data.length - 1] = name;
            console.log(data);
            setData([...data]);
    }

    const [detail, setDetail] = useState([
        {name:"Manish", age : 22, id:1},
        {name:"Suraj", age : 20, id:2}
    ]
    )
    const handleDetail = (age) =>{
         detail[detail.length - 1].age = age;
         console.log(detail);
         setDetail([...detail]);

    }

    return(
        <div>
            <h1>Update the arrays :</h1>
            <input type="text" placeholder="Enter name"
                   onChange={(e)=>handleData(e.target.value)} />
            {
                data.map((item , index) =>(
                    <h1 key={index}>{item}</h1>
                ))
            }
            <hr />
            <input type="text" placeholder="Enter details"
            onChange={(e)=>handleDetail(e.target.value)} />
            {
                detail.map((item, index) =>(
                    
                    
                    <h1 key={index}>{item.name},{item.age}, {item.id}</h1>
                    // <h1 key={index}>Name :{item.name}</h1>
                    // <h2 key={index }>Age :{item.age}</h2>
                    // <h3 key={index } >Id :{item.id}</h3>
                ))
            }
        </div>
    )
}
export default UpdateArray;