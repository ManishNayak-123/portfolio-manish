// //other components
// // function College({name}){
// //     console.log(name);
// //     return(
// //         <div>
// //          <h1>college details</h1>
// //          <h1>colleges : {name[0]},</h1>
// //         </div>
// //     )
// // }
// // export default College;

// import { Route } from "lucide-react";


// //form validation in react js
// import { use, useEffect, useState, useRef } from 'react';
// import Mimage from './letter-m.png'
// function College(){
//     const [name, setName] = useState("");
    
//     const [email, setEmail] = useState("");

//     const [password, setPassword] = useState("");

//     const [address, setAddress] = useState("");

//     const [gender, setGender] = useState("");

//     const [select , setSelect] = useState("");

//     const [clear , setClear] = useState("");

//     const [time , setTime] = useState(0);
//     useEffect(()=>{
//         setInterval(()=>{
//             setTime(new Date().toLocaleTimeString());
//         },1000);
//     },[]);

//     return(
//         <>
//             <nav className="bg-pink-600 h-20 flex  justify-between sm:text-[15px] relative">
//                 <img className='h-18 w-20  pt-4 shadow-amber-100   rounded-2xl px-5' src= {Mimage} alt="image of M name" srcSet='' />
//                 <ul className="space-x-11  flex pr-[100px] py-5 justify-end ">
//                     <li className="text-[18px] font-bold text-white hover:text-red-700 cursor-pointer">Home</li>
//                     <li className="text-[18px] font-bold text-white  hover:text-red-700 cursor-pointer">About</li>
//                     <li className="text-[18px] font-bold text-white  hover:text-red-700 cursor-pointer">Help</li>
//                     <li className="text-[18px] font-bold text-white  hover:text-red-700 cursor-pointer">Contact Us</li>
//                 </ul>

//             </nav>
//             <div className='flex justify-self-center'>
//             <div className='h-145 w-110 justify-self-center my-15 shadow-2xl rounded-2xl '>
                
//                 <center><h1 className='bg-pink-600 py-3  rounded-t-2xl font-bold text-white text-2xl'>Fill the Form</h1></center>
//                  <div className='px-3'> 
//                  <label htmlFor="name" className='text-[18px]'>Name : </label> 
                              
//                 <input className='h-10 w-80 my-3 text-[18px]' onChange={(e)=>setName(e.target.value)}
//                  type="text" value={name} placeholder='Enter your name' />
                
//                 <br />
//                 <label htmlFor="name" className='text-[18px]'>Email : </label>
//                 <input  className='h-10 w-80 my-3 text-[18px]' value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='Enter your email' />
//                 <br />
//                 <label htmlFor="name" className='text-[18px]'>password : </label>  
//                 <input  className='h-10 w-80 my-3 text-[18px]' value={password} onChange={(e)=>setPassword(e.target.value)}
//                  type="password" placeholder='Enter your password' />
                 
//                 <br />
//                 <label htmlFor="name" className='text-[18px]'>Address : </label>  
//                 <input  className='h-10 w-80 my-3 text-[18px]' onChange={(e)=>setAddress(e.target.value)} type="address" placeholder='Enter your address' />
//                 <br />
//                 <h1 className='text-[18px]'>Choose Gender:</h1>
//                 <br />
//                 <input  className='text-[18px] w-5 h-5 ' onChange={(e)=>setGender(e.target.value)} value = {"male"} type="radio" name = "gender"  id = "male" />
//                 <label  className='text-[18px]' htmlFor="male"> Male</label>
//                  <br />
//                 <input  className='text-[18px] w-5 h-5' onChange={(e)=>setGender(e.target.value)}  type="radio" name = "gender" value = {"female"}  id = "female" />
//                 <label  className='text-[18px]' htmlFor="female"> Female</label>
//                 <br />
//                 <br />
//                 <h1  className='text-[18px]' >Select your city :</h1>
//                 <select  className='text-[18px]' onChange={(e)=>setSelect(e.target.value)} name="cities">
//                      <option value="Delhi">Delhi</option>
//                      <option value="Mumbai">Mumbai</option>
//                      <option value="Noida">Noida</option>
//                      <option value="Lucknow">Lucknow</option>
//                      <option value="Gurugram">Gurugram</option>
//                 </select>
//                 <br />
//                 <br />
                
//                 <center><button className='h-13 w-30 bg-pink-600 text-white text-bold rounded-2xl text-2xl '>submit</button></center>
//                </div>
//             </div>
//             <div className='h-120 w-100 bg-pink-500 my-15 mx-15 rounded-2xl  '>
//                 <center><h1 className='text-2xl'>Storage data</h1></center>
//                 <br />
//                 <h1 className='bg-white' >Name : {name}</h1>
//                 <br />
//                 <h1 className='bg-white' >Email : {email}</h1>
//                 <br />
//                 <h1 className='bg-white'>Password : {password}</h1>
//                 <br />
//                 <h1 className='bg-white'>Address : {address}</h1>
//                 <br />
//                 <h1 className='bg-white'>Gender : {gender}</h1>
//                 <br />
//                 <h1 className='bg-white'>City: {select}</h1>
//                 <br />
               
//                 <h1 className='h-10 w-50 text-2xl bg-white rounded-2xl' >Time : {time}</h1>
//                 <br />
//                 <center><button className='bg-white h-10 w-30 text-2xl font-bold rounded-2xl'
//                  onClick={()=>{setName('');setEmail(''); setPassword(''); setAddress('') ; setGender(''); setSelect('')}}>clear</button></center>
//             </div>
//             </div>
//         </>
//     )
// }
// export default College;
// import { Link } from "react-router";
// function College() {
// const UserData = [
//     {id:1, name:"Manish"},
//     {id:2, name:"Suraj"},
//     {id:3, name:"Boby"},
//     {id:4, name:"Madhav"},
//     {id:5, name:"Shiv"},
//     {id:6, name:"Vishnu"},
// ]
 
//   return(
//   <div>
//      <h1 className="text-3xl">College List -</h1>
//        {
//         UserData.map((item) =>(
//           <div>
//             <h1><Link to = {"/user/" + item.id}>{item.name}</Link></h1>
//             </div>
//         ))
//        }
//    </div>    
//   )
// }


// export default College;
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";

// function EditUser(){
//   const [name , setName] = useState('');
//   const [age , setAge] = useState('');
//   const [email , setEmail] = useState('');
//   const {id} = useParams();
//   const navigate = useNavigate();
//   console.log(id);
//   useEffect (() =>{
//     getResult();
//   },[]);

//   const getResult  = async () =>{
//     const url = "http://localhost:3000/users/"+id;
//     // console.log(url);
//     let response = await fetch(url);
//     response = await response.json();
//     // console.log(response);
//     setName(response.name);
//     setAge(response.age);
//     setEmail(response.email);
    
//   }

//   const updateUserData = async () =>{
//     const url = "http://localhost:3000/users/"+id;
//     let response = await fetch(url,{
//       method:'Put',
//       body:JSON.stringify({name, age, email})
//     });
//     response = await response.json();
//     console.log(response);

//     if(response){
//       alert("The information is updated");
//       navigate('/');
//     }
//   }
//   return(
//     <div>
//       <center><h1 className="text-2xl font-bold">Edit users details</h1></center>
//       <center><input type="text" className="border" value = {name} onChange={(e)=>setName(e.target.value)} placeholder="enter name" /></center>
//       <br />
//       <center><input type="text" className="border" value = {age}  onChange={(e)=>setAge(e.target.value)} placeholder="enter age" /></center>
//       <br />
//       <center><input type="email" className="border" value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter email" /></center>
//       <br />
//       <center><button className="border" onClick={updateUserData}>Edit User</button></center>
//     </div>
//   )
// }
// export default EditUser;

//redux in react js
import { useSelector } from "react-redux";
import CartData from "../Contact";
import {Link} from "react-router"
function College(){
    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
    return(
      <div>

        
    <header className="main-header fixed">
        <div className="bg-blue-600 flex ">
       
            <a href="#" className="text-white text-4xl font-bold px-2 py-4">Brand<span>Store</span></a>

          
            <nav>
                <ul className="flex text-[19px] text-white px-5 py-5 ml-80 space-x-20 ">
                    <li><Link to = "/">Home</Link></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            
            <div className="flex ml-90 pr-1">
                
               <Link to = "/cart">
                   <svg xmlns="http://www.w3.org/2000/svg" class="size-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
               </Link>

                <span className="bg-red-700 rounded-3xl h-5 w-5 text-center">
                    {cartSelector.length ? cartSelector.length:0}
                </span>
            </div>
        </div>
    </header>
    {/* <CartData /> */}
      </div>
        
    )
}
export default College;