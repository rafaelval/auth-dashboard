import { useState } from "react";
import { useUsersStore } from "../usersStore";
import type { User } from "../types";

interface Props {
  onClose: () => void;
}

export const AddUserForm = ({ onClose }: Props) => {
  const addUser = useUsersStore((s) => s.addUser);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      id: Date.now(),
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      age: 0,
      username: form.firstName.toLowerCase(),
      image: "https://i.pravatar.cc/150",
    };

    addUser(newUser);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Add user</h2>

      <input name="firstName" placeholder="First name" onChange={handleChange} className="input" />
      <input name="lastName" placeholder="Last name" onChange={handleChange} className="input" />
      <input name="email" placeholder="Email" onChange={handleChange} className="input" />

      <button className="bg-blue-600 text-white w-full py-2 rounded">
        Save
      </button>
    </form>
  );
};