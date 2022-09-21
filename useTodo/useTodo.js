import { useEffect ,useReducer} from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];
    
const init =() => {
    return JSON.parse( localStorage.getItem('todos'))|| [];
}

export const useTodo = () => {

 
    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
    
        localStorage.setItem('todos',JSON.stringify(todos))
    
    
    }, [todos])
    
    
    const handleNewTodo = (todo) =>{
        const action= {
            type:'Add todo item',
            payload:todo
        }
       dispatch(action);
    };
    
    const handleDeleteTodo = (id) =>{
        dispatch({type:'Remove todo item',payload:id})
    }
    
    const handleToggleTodo =(id) =>{
        dispatch({type:'Toggle todo item',payload:id})
    }
    
    const pendings = () =>{
      let array= todos.filter(todo =>todo.done ==false)
      let cantidad=array.length
     return cantidad

    }

    


  return ({
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo,
    pendings,
    todosCount:todos.length
  }
  )
}
