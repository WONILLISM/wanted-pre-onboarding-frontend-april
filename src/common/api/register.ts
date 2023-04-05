import { AxiosError } from "axios";
import apiClient from ".";

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await await apiClient.post("/auth/signup", {
      email: email,
      password: password,
    });

    return response;
  } catch (error) {
    const { response } = error as unknown as AxiosError;

    if (response) {
      throw { status: response.status, data: response.data };
    }

    throw error;
  }
};
