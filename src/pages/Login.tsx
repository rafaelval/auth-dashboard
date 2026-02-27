import { useEffect, useState } from "react";
import { useAuthStore } from "../features/auth/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[linear-gradient(140deg,rgba(218,221,224,1)_0%,rgba(27,51,66,1)_91%)]">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 p-6 shadow rounded w-80"
      >
        <h2 className="text-xl mb-4 text-white text-shadow-lg/50">Login</h2>

        <input
          className="border p-2 w-full mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 w-full disabled:opacity-50 shadow-lg/50 rounded-md"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
