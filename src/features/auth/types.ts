export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  username: string;
  image: string;
  password?:string;
  token?:string;
}

export type NewUser = Omit<User, 'password' | 'token'>;

export interface AuthState {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}