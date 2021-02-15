import {ADD_TODO,EDIT_TODO,COMPLETE_TODO,DELETE_TODO} from '../ActionsType/ActionsType'

export const addTodo = (payload)=>{
    return {
        type:ADD_TODO,
        payload
    }
}
export const editTodo = (payload)=>{
    return {
        type:EDIT_TODO,
        payload
    }

}

export const completeTodo = (payload)=>{
    return {
        type:COMPLETE_TODO,
        payload
    }
}
export const deleteTodo = (payload)=>{
    return {
        type:DELETE_TODO,
        payload
    }
}