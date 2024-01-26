import { useState, ChangeEvent, FormEvent } from "react";
import { ListProps } from "../interfaces";

const Input = (props: ListProps,) => {
    const { setToDoList } = props

    const [input, setInput] = useState('')
    const updateInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value)
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if(setToDoList){
        setToDoList((currToDoList) => {
            return [...currToDoList, {input: input, complete: false}]
        })
        }
        setInput('')
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>To Remember:
          <input type='text' placeholder="add an item" onChange={updateInput} value={input}/>
            </label>
            <button>+</button>
      </form>
    );
}

export default Input