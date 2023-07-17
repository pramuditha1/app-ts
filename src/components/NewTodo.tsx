import { FC,  useRef  } from 'react'

interface IProps {
    text: string
}

export const NewTodo:FC<IProps> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const text = todoTextInputRef.current!.value;

        if(text.trim().length === 0) {
            //throw new Error
            return;
        }
    }

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id='text' placeholder="Todo text" ref={todoTextInputRef}/>
        <button>Add todo</button>
    </form>
   )
 }
