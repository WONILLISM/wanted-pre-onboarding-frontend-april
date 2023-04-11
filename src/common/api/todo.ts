import apiClient from ".";
import { Todo } from "../interfaces/todo";
import { getCurrentUser } from "./auth";

export const getTodos = async (): Promise<Todo[] | null> => {
  const token = getCurrentUser();

  try {
    const response = await apiClient.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const postTodo = async (todo: string) => {
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
  } catch (error) {}
};

export const putTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
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
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const token = getCurrentUser();

    const response = await apiClient.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};
