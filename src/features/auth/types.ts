export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  token: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}