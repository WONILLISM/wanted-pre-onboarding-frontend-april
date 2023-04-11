import React, { useEffect, useState } from "react";
import { Todo } from "../common/interfaces/todo";
import { getTodos } from "../common/api/todo";
import { getCurrentUser } from "../common/api/auth";
import AddTodo from "../components/Todo/AddTodo";
import TodoItem from "../components/Todo/TodoItem";
import styled from "styled-components";
import { TodoListCard } from "../components/Todo/TodoListCard";

const Title = styled.div`
  display: flex;
  gap: 12px;

  padding-left: 2rem;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0.2rem;

  & .todo {
    color: #199fb1;
  }
  & .list {
    color: #ff6700;
  }
`;

const Header = () => {
  return (
    <Title>
      <div className="todo">TODO</div>
      <div className="list">LIST</div>
    </Title>
  );
};

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;
`;

const RootStyle = styled.div`
  padding: 0 1.25rem;
`;

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const fetchTodos = async () => {
    const token = getCurrentUser();
    const todosResult = await getTodos(token);

    if (todosResult) {
      setTodos(todosResult);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <RootStyle>
      <Header />
      <CardWrapper>
        <TodoListCard deg={1.5}>
          <AddTodo />
          <Items>
            {todos &&
              todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
          </Items>
        </TodoListCard>
        <TodoListCard deg={-1.5} />
        <TodoListCard deg={1} />
      </CardWrapper>
    </RootStyle>
  );
};

export default TodoList;
