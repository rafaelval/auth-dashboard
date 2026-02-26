import { useT } from "../../../context/useT";
import type { User } from "../types";

interface Props {
  user: User | null;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}


export const ConfirmDeleteModal = ({ user, onClose, onConfirm, loading }: Props) => {
  const t =useT()
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center animate-fadeIn">
      <div className="bg-white p-6 rounded-xl w-400px shadow-lg animate-scaleIn">
        <h2 className="text-lg font-semibold mb-2">{t.delete}</h2>

        <p className="text-sm text-gray-600 mb-6">
          {t.confirmDel}{" "}
          <span className="font-medium">
            {user.firstName} {user.lastName}
          </span>
          ?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            {t.cancel}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
          >
            {loading ? "Deleting..." : t.del}
          </button>
        </div>
      </div>
    </div>
  );
};
