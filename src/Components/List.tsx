import { ListProps } from "../interfaces"

const List = ({ toDoList }: ListProps) => {
    if(toDoList){
    return (
        toDoList.map((item, index) => {
            return <p key={index}>{item}</p>
        })
    )
}
}

export default List