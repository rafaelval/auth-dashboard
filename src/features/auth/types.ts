export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  token: string;
}

export interface AuthState {
  user: AuthUser | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}