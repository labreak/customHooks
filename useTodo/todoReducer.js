

export const todoReducer = (initialState=[],action) => {

switch (action.type) {
    case 'Add todo item':        
        return [...initialState, action.payload];

    case 'Remove todo item':
        return initialState.filter(todo => todo.id !== action.payload);

    case 'Toggle todo item':
        return initialState.map(todo =>{
            if ( todo.id === action.payload ){
             return {
                ...todo,
                done:!todo.done
             }

            }
            return todo
        });
      
    default:
       return initialState


}



}