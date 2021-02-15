import { ADD_TODO ,EDIT_TODO,COMPLETE_TODO,DELETE_TODO} from "../ActionsType/ActionsType";

const initialState = {
    todoList: [
        
        {
            text:"My first Todo",
            id:0,
            isDone: false

        },
        {
            text:"My second Todo",
            id:1,
            isDone: false

        },
        {
            text:"My third Todo",
            id:2,
            isDone: false
        }

    ]
}


const todoReducer =(state=initialState,{type,payload})=>{
    switch (type){
case ADD_TODO :
    return { 

        ...state, 
        todoList:[...state.todoList,payload]
    }
case EDIT_TODO :
    return { 

        ...state, 
        todoList:state.todoList.map(
            (todo)=>todo.id === payload.id ?
            {...todo,text:payload.text}: todo

            )
    }
case COMPLETE_TODO :
    return { 

        ...state, 
        todoList:state.todoList.map(
            (todo)=>todo.id === payload.id ?
            {...todo,isDone:!todo.isDone}: todo

            )
    }
case DELETE_TODO :
    return { 

        ...state, 
        todoList:state.todoList.filter(
            (todo)=>todo.id != payload.id 

            )
    }


        default : 
        return state;
    }
}
 export default todoReducer;