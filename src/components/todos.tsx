import React, { FC } from 'react'
import Todo from '../models/todo';
import { TodoItem } from './TodoItem';

const Todos: FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {
                props.items.map((item) => (
                    <TodoItem text={item.text}></TodoItem>
                ))
            }
        </ul>
    )
}

export default Todos;
