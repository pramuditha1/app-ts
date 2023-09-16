import React from 'react'
import Todo from '../models/Todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[], handleRemoveToDo: (id: string) => void }> = (props) => {
    //you can make items prop optional by adding a ? before :
    return (
        <ul>
            {
                props.items.map(item => <TodoItem 
                    key={item.id}
                    todoId={item.id}
                    todoText={item.text}
                    handleRemoveToDo={props.handleRemoveToDo.bind(null, item.id)}
                    />)
            }
        </ul>
    )
}

export default Todos