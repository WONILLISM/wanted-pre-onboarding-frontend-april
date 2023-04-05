import { AxiosError } from "axios";
import apiClient from ".";

interface LoginResult {
  result: "success" | "fail";
}

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResult> => {
  try {
    const response = await apiClient.post("/auth/signin", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password: password,
      },
    });

    localStorage.setItem("accessToken", response.data.access_token);
    return {
      result: "success",
    };
  } catch (error) {
    return {
      result: "fail",
    };
    // const { response } = error as unknown as AxiosError;

    // if (response) {
    //   throw { status: response.status, data: response.data };
    // }

    // throw error;
  }
};
