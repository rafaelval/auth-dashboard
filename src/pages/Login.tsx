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
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className=" bg-gray-500 p-6 shadow rounded">
        <h2 className="text-xl mb-4">Login</h2>

        <input
          className="border p-2 w-full mb-2 border-b-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 w-full">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
