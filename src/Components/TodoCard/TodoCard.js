import React from 'react'
import EditTodo from '../EditTodo/EditTodo'
import { useDispatch } from "react-redux";
import { completeTodo,deleteTodo} from "../JS/Actions/Actions";

const TodoCard = ({todo}) => {
    const dispatch = useDispatch();
    return (

                   <li>
                                    <div class="form-check"> 
                                          <label class="form-check-label" style={{ textDecoration: todo.isDone ? "line-through" : "none" }}> 
                                               <input class="checkbox" type="checkbox" 
                                                 onClick={() => dispatch(completeTodo(todo))}/> 
                                               {todo.text} 
                                               <i class="input-helper"></i>
                                            </label>
                                     </div> <i class="remove mdi mdi-close-circle-outline"  onClick={() => dispatch(deleteTodo(todo))}></i><button><EditTodo todo={todo}/></button>
                    </li>
    
    )
}

export default TodoCard
