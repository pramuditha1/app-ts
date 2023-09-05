import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    //you can make items prop optional by adding a ? before :
    return (
        <ul>
            {
                props.items.map(item => <TodoItem key={item.id} todoText={item.text}/>)
            }
        </ul>
    )
}

export default Todos