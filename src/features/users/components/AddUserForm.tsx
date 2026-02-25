import { useState } from "react";
import { useUsersStore } from "../usersStore";
import type { User } from "../types";

interface Props {
  onClose: () => void;
  user?: User;
}

export const UserForm = ({ onClose, user }: Props) => {
  const addUser = useUsersStore((s) => s.addUser);
  const updateUser = useUsersStore((s) => s.updateUser);

  const [form, setForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    age: user?.age?.toString() ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      updateUser({
        ...user,
        ...form,
        age: Number(form.age),
      });
    } else {
      addUser({
        id: Date.now(),
        ...form,
        age: Number(form.age),
        username: form.firstName.toLowerCase(),
        image: "https://i.pravatar.cc/150",
      });
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">
        {user ? "Edit user" : "Add user"}
      </h2>

      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First name"
        className="input"
      />

      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last name"
        className="input"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="input"
      />

      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
        className="input"
      />

      <button className="bg-blue-600 text-white w-full py-2 rounded">
        {user ? "Update" : "Save"}
      </button>
    </form>
  );
};