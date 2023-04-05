import apiClient from ".";

interface LoginResult {
  result: "success" | "fail";
}

interface RegisterResult {
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
    const response = await apiClient.post(
      "/auth/signin",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.setItem("accessToken", response.data.access_token);
    return {
      result: "success",
    };
  } catch (error) {
    console.log(error);
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

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<RegisterResult> => {
  try {
    const response = await apiClient.post(
      "/auth/signup",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return {
      result: "success",
    };
  } catch (error) {
    console.log(error);
    return {
      result: "fail",
    };
  }
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("accessToken");

  if (token) return true;
  return false;
};
