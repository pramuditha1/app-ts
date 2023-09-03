import React from 'react'

const TodoItem: React.FC<{todoText: string}> = (props) => {
  return (
    <li key={props.todoText}>{props.todoText}</li>
  )
}

export default TodoItem