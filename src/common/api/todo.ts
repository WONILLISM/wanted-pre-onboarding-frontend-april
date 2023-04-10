import apiClient from ".";
import { Todo } from "../interfaces/todo";

export const getTodos = async (
  token: string | null
): Promise<Todo[] | null> => {
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

export const postTodo = async (todo: string, token: string | null) => {
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
