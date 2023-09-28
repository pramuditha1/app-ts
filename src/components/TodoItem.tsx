import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{todoText: string}> = (props) => {
  return (
    <li className={classes.item} key={props.todoText}>{props.todoText}</li>
  )
}

export default TodoItem