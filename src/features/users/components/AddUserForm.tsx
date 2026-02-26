import { useState } from "react";
import { useUsersStore } from "../usersStore";
import { useToastStore } from "../../../shared/store/useToastStore";
import type { User } from "../types";
import { useT } from "../../../context/useT";

interface Props {
  onClose: () => void;
  user?: User;
}

export const UserForm = ({ onClose, user }: Props) => {
  const addUser = useUsersStore((s) => s.addUser);
  const updateUser = useUsersStore((s) => s.updateUser);
  const showToast = useToastStore((s) => s.show);
  const t = useT()

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

      showToast(t.success);
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

      showToast(t.created);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-1">
      <h2 className="text-xl font-bold text-center sm:text-left">
        {isEditMode ? t.edit : t.add}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder={t.name}
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder={t.lastname}
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder={t.email}
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
        <input
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          placeholder={t.age}
          className="dark:bg-slate-700 border input w-full px-2"
          required
        />
      </div>

      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
        {isEditMode ? t.update : t.save}
      </button>
    </form>
  );
};