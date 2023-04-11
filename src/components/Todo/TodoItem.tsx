import { Todo } from "../../common/interfaces/todo";
import { deleteTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";
import UpdateTodo from "./UpdateTodo";
import styled from "styled-components";

import { MdDelete as MdDeleteIcon } from "react-icons/md";
import IconButton from "../IconButton";

const Item = styled.li`
  display: flex;
  align-items: center;
  color: #0d5c75;
`;

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
    <Item>
      <UpdateTodo data={todo} />
      <IconButton
        data-testid="delete-button"
        type="button"
        onClick={() => handleDeleteClick(todo.id)}
        icon={<MdDeleteIcon color="#0d5c75" />}
      />
    </Item>
  );
};

export default TodoItem;
