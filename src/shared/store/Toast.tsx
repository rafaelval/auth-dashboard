import { useEffect } from "react";
import { useToastStore } from "../store/useToastStore";

export const Toast = () => {
  const { message, hide } = useToastStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        hide();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message, hide]);

  if (!message) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg animate-toast"
      onAnimationEnd={hide}
    >
      {message}
    </div>
  );
};