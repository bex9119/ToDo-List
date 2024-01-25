import { useState} from "react"
import Input from "./Input"
import List from "./List"

const TodoBody = () => {
    const [toDoList, setToDoList] = useState<string[]>(['test'])


    return (
      <>
        <List toDoList={toDoList} />
        <Input setToDoList={setToDoList} />
      </>
    );
}
export default TodoBody