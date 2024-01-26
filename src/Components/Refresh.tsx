import { ListProps } from "../interfaces";

const Refresh = (props: ListProps) => {
    const { setToDoList } = props;
    
    const resetList = (): void => {
        if (setToDoList) {
        setToDoList([{ input: "", complete: false }]);}
    }
    return (
        <button onClick={resetList}>Reset List</button>
    )
};

export default Refresh