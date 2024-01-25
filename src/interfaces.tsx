import {
  Dispatch,
  SetStateAction,
} from "react";

export interface ListProps {
  setToDoList?: Dispatch<SetStateAction<string[]>>;
  toDoList?: string[];
}
