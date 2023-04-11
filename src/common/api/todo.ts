import apiClient from ".";
import { Todo } from "../interfaces/todo";
import { getCurrentUser } from "./auth";

type GetTodosResult = Todo[] | null;
type PostTodoResult = Todo | null;
type PutTodoResult = Todo | null;
type DeleteTodoResult = "success" | "fail";

export const getTodos = async (): Promise<GetTodosResult> => {
  const token = getCurrentUser();

  try {
    const response = await apiClient.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postTodo = async (todo: string): Promise<PostTodoResult> => {
  const token = getCurrentUser();

  try {
    const response = await apiClient.post(
      "/todos",
      {
        todo: todo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const putTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<PutTodoResult> => {
  try {
    const token = getCurrentUser();

    const response = await apiClient.put(
      `/todos/${id}`,
      {
        todo: todo,
        isCompleted: isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteTodo = async (id: number): Promise<DeleteTodoResult> => {
  try {
    const token = getCurrentUser();

    const response = await apiClient.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return "success";
  } catch (error) {
    console.log(error);
    return "fail";
  }
};
