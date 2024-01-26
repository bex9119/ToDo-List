import { UIEvent } from "react";
import { ListProps } from "../interfaces"

const List = ({ toDoList }: ListProps) => {

    const changeClass = (event: UIEvent) => {
        if (event.currentTarget.className === "notComplete") {
          event.currentTarget.className = "complete";
        } else {
          event.currentTarget.className = "notComplete";
        }
    }
    if(toDoList){
        return (
        <ul>
                {toDoList.map((item, index) => {
            if (item.input.length > 0){
            return (
              <li key={index}>
                <button
                  className={item.complete ? "complete" : "notComplete"}
                  onClick={changeClass}
                >
                  {item.input}
                </button>
              </li>
            )};
        })}
                </ul>
    )
}
}

export default List