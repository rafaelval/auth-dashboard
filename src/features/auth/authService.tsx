import { api } from "../../services/api";
import type { User } from "./types";

interface LoginCredentials {
  username: string;
  password: string;
}

export const loginRequest = async ({
  username,
  password,
}: LoginCredentials): Promise<User> => {
  const { data } = await api.post("/auth/login", {
    username,
    password,
    expiresInMins: 30,
  });

  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    image: data.image,
    token: data.accessToken,
  };
};