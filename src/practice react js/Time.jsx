import { useEffect, useState } from "react";

// timer using jsx
function Time(){
    const [time, setTime] = useState(0);

    useEffect(() =>{
        setInterval(() =>{
            setTime(new Date().toLocaleTimeString());
        })
    })
    return (
        <div>
           <h1>{time}</h1>
        </div>
    )
}
export default Time;