import React from 'react'

const TodoItem: React.FC<{ todoText: string; todoId: string; handleRemoveToDo: () => void}> = (props) => {

  return (
    <li key={props.todoText} onClick={props.handleRemoveToDo}>{props.todoText}</li>
  )
}

export default TodoItem