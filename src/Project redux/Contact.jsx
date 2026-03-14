// function Exercise(){

// import { Fragment, useEffect, useState } from "react";

//   const name = "jai shri Ram";
//   function add(a ,b){
//        return a + b;
//   }

//   function calculator(a,b, op){
//     if(op == '+'){
//       return a+b;
//     }
//     else if(op == '*'){
//       return a*b;
//     }
//     else{
//       return a-b;
//     }
//   }
//   return(
//     <div>
//     <img className ="h-[10px] w-3 " src = "https://i.pinimg.com/736x/66/64/0a/66640ae41f674d4dc9029da6208d7d42.jpg" alt = "my image" />
//     <ul>
//       <li>This is the find jobs website .</li>
//       <li>IT can help to the job seekers </li>
//       <li>It provides many facilities to the job seekers </li>
//     </ul>
//       <h2>{name}</h2>
//       <h2>{add(10,20)}</h2>
//       <h1>{calculator(10, 20, "op")}</h1>
//     <button onClick={alert}>click me</button>
//     </div>
//   );
// }

// export default Exercise;

//onclick event

// function Fruite(){
//   function callFun(){
//     alert("function called");
//   }

//   function callFruite(name){
//     alert(name);
//   }

//     let fruite = "apple";

//   const handleFruite = () => {
//       fruite = "Mangoes";
//       console.log(fruite);
//   }

//   return(
//     <div>
//      <h1>list of fruites</h1>
//      <h1>{fruite}</h1>
//      <button onClick={()=>callFruite("apple")}>click me</button>
//      <button onClick={handleFruite}>change fruite name</button>
//     </div>
//   );
// }
// export default Fruite;

//use state in react

// import { useState} from "react";
// function Fruite(){
//   const [fruite, setFruite] = useState("Apple");
//   const handleFruite = () =>{
//     setFruite("Banana");
//   }

//   const [count, setCount] = useState(0);
//   const handleCount = () =>{
//     setCount(count+1);
//   }

//   const [rCount , setRCount] = useState(20);
//   const handleRCount = () =>{
//     setRCount(rCount-1);
//   }
//   return(
//     <div>
//       <h1>state in react js</h1>
//       <h1>{fruite}</h1>
//       <button onClick={handleFruite}>click me</button>
//       <h1>counter : {count}</h1>
//       <button onClick={handleCount}>click me</button>
//        <h1>counter : {rCount}</h1>
//       <button onClick={handleRCount}>click me</button>
//     </div>
//   )
// }

// import { useState } from "react";
// function Fruite(){
// const [fruite, setFruite] = useState(true);
// const handleFruite = () =>{
//   setFruite(!fruite);
// }
// return(
//   <div>
//     <h1>toggle in react js</h1>
//     <button onClick={handleFruite}>click me</button>
//     {
//       fruite? <h1>Apple is a healty fruite</h1> : null

//     }
//   </div>
// )
// }

//multiple conditions
// import { useState } from "react";
// function Fruite(){
//   const [count, setCount] = useState(0);
//   return(
//     <div>
//        <h1>{count}</h1>
//        <button onClick={()=>setCount(count+1)}>click me</button>
//        {
//         count == 0?<h1>Condition 0</h1>
//         :count == 1?<h1>Condition 1</h1>
//         :count == 2?<h1>Condition 2</h1>
//         :<h1>Other conditions</h1>
//        }
//     </div>
//   )
// }

//props in react
// function Fruite({name,age, email}){
//   console.log(name);
// return(
//   <div>
//       <h1>user component </h1>

//       <h2>name: {name}</h2>
//       <h2>age : {age}</h2>
//       <h2>email : {email}</h2>
//   </div>
// );
// }
// export default Fruite;

// function Fruite({user}){
//   console.log(user.name);
// return(
//   <div>
//       <hr />
//       <h1>user component </h1>

//       <h2>name: {user.name}</h2>
//       <h2>age : {user.age}</h2>
//       <h2>email :{user.email}</h2>
//   </div>
// );
// }

//default props
// const Fruite = ({data}) =>{
//   return(
//     <div className="px-5 py-5 h-50 w-200 rounded-2xl border-2 my-5"
//     >
//       <h1 className="text-red-600 text-2xl">name:{data.name}</h1>
//       <h1 className="text-green-600 text-2xl">Id:{data.id}</h1>
//       <h1 className="text-blue-600 text-2xl">Age:{data.age}</h1>
//       <h1 className="text-purple-600 text-2xl">Email:{data.email}</h1>
//       <br />
//     </div>
//   )
// }

// import { useEffect, useState } from "react";
// const Fruite = ({ color }) => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   }, []);

//   const colorClasses = {
//     blue: "text-blue-500",
//     black: "text-black",
//     green: "text-green-500",
//     red: "text-red-500",
//   };
//   return (
//     <div>
//       <br />
//       <h1
//         className={`${colorClasses[color]} h-15 w-50 text-2xl bg-purple-600 rounded-2xl px-8 py-3`}
//       >
//         {time}
//       </h1>
//     </div>
//   );
// };

// const Fruite = ({ college }) => {
//   console.log(college);
//   return (
//     <div>
//       <ul>
//         <li>
//           <h1>Name:{college.name}</h1>
//         </li>

//         <li>
//           <h1>City:{college.city}</h1>
//         </li>

//         <li>
//           <h1>Website:{college.website}</h1>
//         </li>

//         <li>
//           <h1>Students</h1>
//            {
//            college.students &&  college.students.map((students, idx)=>(
//                <div key={idx}>
//                 <h1>Name:{students.name}</h1>
//                </div>
//             ))
//            }
//         </li>
//         </ul>
//       <br />
//     </div>
//   );
// }
// function Fruite({count,data}){

// //for calling one time
// function handleData(){
//   console.log("handle data");
// }

// useEffect(() =>{
// console.log("mounting phase only");
// },[count])
// // handleCounter();
//   return(
//     <div>
//       <h1>counter value : {count}</h1>
//       <br />
//       <h1>Data value : {data}</h1>
//     </div>
//   )
// }

// function  Fruite(props){
//   // const name = "Manish Nayak";
//   return(
//     <div>

//     {/* <input type="text" ref = {userRef}  placeholder='Enter your name' /> */}
//     <br />
//     <br />
//     <input type="password" placeholder='Enter password' ref = {props.passwordRef} />
//     <br /><br />
//     <input type="text"  placeholder="Enter Your Name" ref = {props.userRef} />
//     <br /><br />

//     {/* <br /><br />
//     <button onClick={()=>handleAlert(name)}>click me</button> */}
//     </div>
//   )
// }
//Derived state
// function Fruite(){
//   const [users, setUsers] = useState([]);
//   const [user, setUser ]= useState('');

//    const handleUsers = () =>{
//     setUsers([...users, user]);
//    }
//    console.log(users);

//    const total = users.length;
//    const last = users[users.length - 1];
//    const unique = [...new Set(users)].length;
//   return(
//     <div>
//       <h1>Total users : {total}</h1>
//       <h1>Last users : {last}</h1>
//       <h1>Unique Total users : {unique}</h1>
//        <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter your Nmae" />
//        <button onClick={handleUsers}> Add users</button>
//          {
//       users.map((item, index) =>(
//         <h4 key = {index} >{item}</h4>
//       ))
//     }
//     </div>

//   )
// }

// function Fruite(){
//   const [data, setData] = useState(
//   ['manish','suraj','priya', 'madhav', 'pari','kavya']
//   )

//   const handleUser = (name) =>{
//     data[data.length -1 ] = name;
//     console.log(data);

//     setData([...data]);
//   }

//   const [details, setDetails] = useState([
//     {name:'Manish', age:'21', id:'1'},
//     {name:'Suraj', age:'18', id:'2'},
//     {name:'Boby', age:'22', id:'13'},
//     {name:'Madhav', age:'12', id:'4'}
//   ]
//   )

//   const handleAge = (age) =>{
//       details[details.length -1 ].age = age;
//       console.log(details);

//       setDetails([...details])
//   }

//   return(
//     <div>
//        <h1>Updation in the array</h1>

//        <input type="text" placeholder="Enter the text" onChange={(e)=>handleUser(e.target.value)} />
//       {
//         data.map((item, index) => (
//           <h1 key = {index}>{item}</h1>
//         ))
//       }
//       <hr />
//       <h1>Update age</h1>
//       <input type="text" placeholder="Enter age" onChange={(e)=>handleAge(e.target.value)} />
//       {
//         details.map((item, index)=>(
//            <h1 key = {index}>{item.name}, {item.age}, {item.id}</h1>
//         ))
//       }
//     </div>
//   )
// }

//use Action state hook
// import { useActionState } from "react";
// function Fruite(){
//   const handleSubmit = async (previousData, formData) =>{
//         let name = formData.get('name');
//         let password = formData.get('password');

//         await new Promise(res=>setTimeout(res,2000));
//         // console.log("handleSubmit called", name, password);
//         if(name&&password){
//           return {message:"Data submitted", name, password};
//         }else{
//           return {message:"Failed to submitt. Enter the proper data", name, password};
//         }

//   }
//   const  [data, action , pending] = useActionState(handleSubmit, undefined)
//       console.log(data);
// return(
//   <div>
//     <h1>Use Action State hook</h1>
//     <form action={action}>
//     <input defaultValue={data?.name} type="text" placeholder="Enter name" name = "name" />
//     <br /><br />
//     <input defaultValue={data?.password} type="Password" placeholder="Enter password" name = "password" />
//     <br />
//     <br />

//     <button disabled = {pending}>Submit</button>
//     </form>
//     <br />
//     {
//       data?.error&& <span style={{color:'red'}}>{data?.error}</span>
//     }
//      {
//       data?.message&& <span style={{color:'green'}}>{data?.message}</span>
//     }
//     <br />
//     <h2>Name : {data?.name}</h2>
//     <h2>Password : {data?.password}</h2>
//   </div>
// )
// }
// import {useId} from "react"
// function Fruite(){
//   const user = useId();

//   return(
//     <div>
//       <h1>User id </h1>
//          <form action="">
//          <label htmlFor={user + "name"}></label>
//          <input type="text" placeholder="Enter name" id = {user + "name"} />
//          <br /><br />
//          <label htmlFor={user + "dob"}></label>
//          <input type="dob" placeholder="Enter dob" id = {user + "dob"} />
//          <br />
//          <br />
//          <label htmlFor={user + "terms"}>Read terms and conditions carefully </label>
//          <input type="checkbox"  id = {user + "terms"} />
//          <br />
//          <br />
//          <input type="text" placeholder="Enter the user skills" id = {user + "skills"} />
//          <label htmlFor={user + "skills"}></label>
//          </form>
//     </div>
//   )
// }
// function Fruite(){
//   return(
//       <div>
//         <h1>Hello my name is manish</h1>
//         <h1>Hello my name is Chotu</h1>
//         <h1>Hello my name is Bheem</h1>
//       </div>
//   )
// }
// import Subject from "./toggleHeading";

// import  {useState}  from "react";
// import { useNavigate } from "react-router";
// function UserAdd(){
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const saveUserInfo = async () =>{
//     console.log(name, age, email);
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url,{
//       method:'Post',
//       body:JSON.stringify({name, email, age})
//     });

//     response = await response.json();
//     if(response){
//       alert("new user added");
//       navigate('/');
//     }

//   }
//   return(
//     <div className="center" >
//       <center><h1 className="text-2xl">Add user component</h1></center>
//        <center><input className="border " type="text" onChange={(e) =>setName(e.target.value)} placeholder="enter your name" /></center>
//         <br />
//        <center><input className="border"  type="digit" onChange={(e) =>setAge(e.target.value)} placeholder="enter your age" /></center>
//        <br />

//        <center><input className="border" type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="enter your email" /></center>
//      <br />
//      <center><button onClick={saveUserInfo} className="border">Add User</button></center>

//     </div>

//   )
// }
// export default UserAdd;

import { act, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
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

// import { AlertTriangle } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

// function Home(){
//     const [userData, setUserData] = useState([]);
//     const [loadingData, setLoadingData] = useState(false);
//     const navigate = useNavigate();
//     useEffect(()=>{
//         getUserData();
//         setLoadingData(true);
//     },[])
//      const getUserData = async () =>{
//      const url = "http://localhost:3000/users";
//      let response = await fetch(url);
//      response = await response.json();
//      console.log(response);
//      setUserData(response);
//      setLoadingData(false);
//     }

//     const deleteUser = async (id) =>{
//       const url = "http://localhost:3000/users";
//       let response = await fetch(url +'/'+id,{
//         method:'delete'
//       });
//       response = await response.json();
//       if(response){
//         alert("recored deleted");
//         getUserData();
//       }
//     }

//     const editUser = async (id) =>{
//       navigate('/edit/' + id);
//     }
//     return(
//         <div>
//            <h1>makes routes and pages for add users and user list ui</h1>
//            <table className="w-full text-left table-auto">
//              <thead>
//                     <tr>
//                     <th className="border px-4 py-2">Name</th>
//                     <th className="border px-4 py-2">Age</th>
//                     <th className="border px-4 py-2">Email</th>
//                     <th className="border px-4 py-2">Action</th>

//                     </tr>
//                 </thead>
//            </table>
//            {
//             !loadingData?
//             userData.map((user)=>(
//                <table className="w-full text-left table-auto" key={user.name}>
//                 <tbody>
//                 <tr>
//                 <td className="border px-4 py-2 ml-6">{user.name}</td>
//                  <td className="border px-4 pl-4 py-2">{user.age}</td>
//                  <td className="border px-4 py-2">{user.email}</td>
//                   <td className="border px-4 py-2"><button className="border" onClick={()=>deleteUser(user.id)}>Delete</button>
//                   <button className="border" onClick={()=>editUser(user.id)}>Edit</button></td>
//                  </tr>
//                  </tbody>
//                 </table>
//             ))
//             :<h1>Loading.....</h1>
//            }
//         </div>
//     )

// }
// export default Home;

// import { NavLink, Route,Routes } from "react-router";
// import UserAdd from "./Contact";
// import Home from "./Home";
// import EditUser from "./College";

// function App(){
//   return(
//     <div>
//        <ul className="flex justify-around">
//         <li>
//           <NavLink to = "/" className="text-blue-600 bold ">List</NavLink>
//         </li>
//         <li>
//           <NavLink to="/add" className="text-blue-600 bold ">UserAdd</NavLink>
//         </li>
//        </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//          <Route path="/add" element={<UserAdd />} />
//          <Route path="/edit/:id" element = {<EditUser />} />
//       </Routes>
//     </div>
//   )
// }
// export default App

// Sample Data
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Minimalist Watch",
    category: "Accessories",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Leather Backpack",
    category: "Bags",
    price: 89.5,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Audio",
    price: 249.0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Running Sneakers",
    category: "Footwear",
    price: 110.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Instant Camera",
    category: "Electronics",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80",
  },
];

const ProductCard = ({ product, onAddToCart }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
  return (
    <div className="mt-[10px]">
      <div className="bg-white shadow-2xl rounded-2xl  ">
        <div className=" object-cover  w-100 h-100 rounded-t-2xl px-2 py-2 transition-all duration-75 ease-in-out hover:scale-102 cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-100 h-80 "
            onError={(e) => {
              e.target.src = "https://placehold.co/400x400?text=No+Image";
            }}
          />
        </div>
        <div className="m-10 pb-10 mt-[-20px]">
          <span className="text-gray-500 mt-50 ">{product.category}</span>
          <h3 className="font-bold text-2xl">{product.name}</h3>
          <div className=" space-x-2 mt-5">
            <span className="font-bold  text-[20px]">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={() => dispatch(addItem(1))}
              className="h-11 rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-blue-900 hover:scale-105 object-cover  text-white text-[17px] font-bold w-30 bg-blue-600"
            >
              Add to Cart
            </button>



            <button
              onClick={() => dispatch(removeItem(1))}
              className="h-11 rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-red-900 hover:scale-105 object-cover  text-white text-[17px] font-bold w-30 bg-red-600"
            >
              Remove Item
            </button>
            
          </div>
        </div>
      </div>
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id} className="border-0 h-115  w-100 bg-white mt-[100px] rounded-2xl shadow-2xl">
            <div className=" object-cover rounded-t-2xl px-5 py-5 transition-all duration-75 ease-in-out hover:scale-102 cursor-pointer ">
            <center><img className="h-50 w-50" src={item.thumbnail} /></center>
            </div>
            <div className="">
              <div className="px-3 py-2 font-bold text-[20px]">{item.title}</div>
              <div className="px-3 py-1 text-gray-400 text-[15px]">{item.brand}</div>
              <div className="px-3 py-1 font-bold text-green">{item.price}</div>
              <div className="px-3 py-1 text-gray-400 text-[15px]">{item.rating}</div>
              {
                cartSelector.find(cartItem => cartItem.id === item.id) ?
               <center><button  onClick={()=>dispatch(removeItem(item))}  className="h-11  rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-red-700 hover:scale-105 object-cover  text-white text-[17px] font-bold w-40 bg-red-400
            ">Remove from Cart</button></center>
            :
             <center><button onClick={()=>dispatch(addItem(item))} className="h-11 rounded-2xl cursor-pointer transition-all 
          ease-in-out hover:bg-red-900 hover:scale-105 object-cover  text-white text-[17px] font-bold w-30 bg-red-600
            ">Add to Cart</button></center>
              
              }
            
              
            </div>
          </div>
        ))}
    </div>
  );
};

function CartData() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <main className="justify-self-center w-400 pl-32 py-5 ">
        <center>
          <h2 className="font-bold text-6xl  mt-[100px]">
            New Arrivals For Customers
          </h2>
        </center>

        <div className=" grid-cols-3  flex gap-5 space-x-10 space-y-10 py-20 flex-wrap ">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default CartData;
