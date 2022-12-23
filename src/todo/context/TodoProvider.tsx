import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = { //CONTROL . para meter todas las propiedades
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Barrer',
            completed: false
        },
        {
            id: '2',
            desc: 'Limpiar',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [ todoState, dispatch ] = useReducer(todoReducer, INITIAL_STATE );

    return (
        <TodoContext.Provider value={{
            todoState
        }} >
            {children}
        </TodoContext.Provider>
    )
}
