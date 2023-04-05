import { AxiosError } from "axios";
import apiClient from ".";

interface RegisterResult {
  result: "success" | "fail";
}

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<RegisterResult> => {
  try {
    const response = await apiClient.post("/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password: password,
      },
    });

    return {
      result: "success",
    };
  } catch (error) {
    return {
      result: "fail",
    };
  }
};
