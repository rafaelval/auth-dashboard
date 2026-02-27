import { api } from "../../services/api";
import type { User } from "./types";

interface UsersResponse {
  users: User[];
}

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get<UsersResponse>("/users");
  return data.users;
};
