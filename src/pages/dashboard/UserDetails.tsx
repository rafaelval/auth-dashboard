import { useParams } from "react-router-dom";
import { useUsersStore } from "../../features/users/usersStore";
import { PageContainer } from "../../shared/components/PageContainer";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useUsersStore((state) =>
    state.users.find((u) => u.id === Number(id)),
  );

  if (!user) return <p>User not found</p>;

  return (
    <PageContainer title="User details">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <div className="bg-white p-6 rounded shadow max-w-xl">
        <div className="flex items-center gap-4 mb-6">
          <img src={user.image} className="w-20 h-20 rounded-full" />
          <div>
            <h2 className="text-xl font-bold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-500">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-2 text-gray-600">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default UserDetails;
