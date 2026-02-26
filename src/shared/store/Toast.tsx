import { useEffect } from "react";
import { useToastStore } from "../store/useToastStore";

export const Toast = () => {
  const { message, hide } = useToastStore();

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(hide, 3000);
    return () => clearTimeout(timer);
  }, [message, hide]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  );
};