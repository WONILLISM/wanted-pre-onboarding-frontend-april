import { Todo } from "../../common/interfaces/todo";
import { deleteTodo } from "../../common/api/todo";
import { getCurrentUser } from "../../common/api/auth";
import UpdateTodo from "./UpdateTodo";
import styled from "styled-components";

import { MdDelete as MdDeleteIcon } from "react-icons/md";
import IconButton from "../IconButton";
import { useTodo } from "../../common/hooks/useTodo";

const Item = styled.li`
  display: flex;
  align-items: center;
  color: #0d5c75;
`;

interface Props {
  todo: Todo;
}
const TodoItem = ({ todo }: Props) => {
  const { removeTodo } = useTodo();

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
