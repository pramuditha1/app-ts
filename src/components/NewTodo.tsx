import React, { useRef } from 'react'

const NewTodo: React.FC<{ onAddTodo: (TodoText?: string) => void }> = (props) => {
    // define the type os onAddTodo function: it accepts string parameter and return type is void
    const inputElementRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredTodoText = inputElementRef.current?.value;

        if (enteredTodoText?.trim().length === 0) { return; }
        props.onAddTodo(enteredTodoText)
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Todo</label>
            <input type="text" id='text' ref={inputElementRef} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo