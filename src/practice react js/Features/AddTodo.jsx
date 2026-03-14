import { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../Features/tool/todoSlice';

// form for data in react
function AddTodo(){
    const [input , setInput] = useState('');
      const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
         e.preventDefault();
         dispatch(addTodo(input))
         setInput('');
    }
  
    return(
        <div>
            <form onSubmit={addTodoHandler}>
            <input type="text"
             placeholder="Enter data"
             
             />
            <br />
            <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AddTodo;