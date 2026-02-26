import { useState } from "react";
import { useUsersStore } from "../usersStore";
import { useToastStore } from "../../../shared/store/useToastStore";
import type { User } from "../types";

interface Props {
  onClose: () => void;
  user?: User;
}

export const UserForm = ({ onClose, user }: Props) => {
  const addUser = useUsersStore((s) => s.addUser);
  const updateUser = useUsersStore((s) => s.updateUser);
  const showToast = useToastStore((s) => s.show);

  const isEditMode = !!user;

  const [form, setForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    age: user?.age?.toString() ?? "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ageNumber = Number(form.age);
    if (isNaN(ageNumber)) return;

    if (isEditMode && user) {
      updateUser({
        ...user,
        ...form,
        age: ageNumber,
      });

      showToast("User updated successfully ✅");
    } else {
      addUser({
        id: Date.now() + Math.random(),
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        age: ageNumber,
        username: form.firstName.toLowerCase(),
        image: "https://i.pravatar.cc/150",
      });

      showToast("User created successfully 🎉");
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-1">
      <h2 className="text-xl font-bold text-center sm:text-left">
        {isEditMode ? "Edit user" : "Add user"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First name"
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last name"
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
      </div>

      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
        {isEditMode ? "Update user" : "Save user"}
      </button>
    </form>
  );
};