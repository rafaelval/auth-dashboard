type LoginData = {
  email: string;
  password: string;
};

export const loginRequest = async ({ email, password }: LoginData) => {
  await new Promise((res) => setTimeout(res, 800)); // simula API

  if (email === "admin@test.com" && password === "123456") {
    return {
      id: 1,
      name: "Rafael",
      email,
      token: "fake-jwt",
    };
  }

  throw new Error("Invalid credentials");
};