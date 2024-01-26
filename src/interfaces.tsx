import {
  Dispatch,
  SetStateAction,
} from "react";

type Item = {
    input: string
    complete: boolean
}

export interface ListProps {
  setToDoList?: Dispatch<SetStateAction<Item[]>>;
    toDoList?: Item[];
}
