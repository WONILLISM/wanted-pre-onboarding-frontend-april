import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodo = () => {
  const state = useContext(TodoContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
};
