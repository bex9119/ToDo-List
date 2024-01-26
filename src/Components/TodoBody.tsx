import { useState} from "react"
import Input from "./Input"
import List from "./List"
import Refresh from "./Refresh"

const TodoBody = () => {
    const [toDoList, setToDoList] = useState<string[]>([''])


    return (
      <>
        <List toDoList={toDoList} />
        <Input setToDoList={setToDoList} />
        <Refresh setToDoList={setToDoList} />
      </>
    );
}
export default TodoBody