import { Todo } from "../../common/interfaces/todo";
import { deleteTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";
import UpdateTodo from "./UpdateTodo";

interface Props {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const removeTodo = async (id: number) => {
    const token = getCurrentUser();

    const result = await deleteTodo(id, token);

    if (result) {
      console.log("삭제 성공");
    }
  };

  const handleDeleteClick = (id: number) => {
    removeTodo(id);
  };

  return (
    <li>
      <label>
        <UpdateTodo data={todo} />
        <button
          data-testid="delete-button"
          type="button"
          onClick={() => handleDeleteClick(todo.id)}
        >
          delete
        </button>
      </label>
    </li>
  );
};

export default TodoItem;
