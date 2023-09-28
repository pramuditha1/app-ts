import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ todoText: string; todoId: string; handleRemoveToDo: () => void}> = (props) => {

  return (
    <li className={classes.item} key={props.todoText} onClick={props.handleRemoveToDo}>{props.todoText}</li>
  )
}

export default TodoItem