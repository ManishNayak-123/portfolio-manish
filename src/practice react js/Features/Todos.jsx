//todos 
import { useSelector , useDispatch} from "react-redux";
import { removeTodo } from "../Features/todo/todoSlice";
function Todos(){
   const todos =  useSelector(state => state.todos);
   const dispatch = useDispatch();
    return(
        <div>
          {
            todos.map((todo,index) =>(
                <li key={index}>{todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}
                >X</button>
                </li>
                
            ))
          }
        </div>
    )
}
export default Todos;