import { useParams } from "react-router-dom";
import { useUsersStore } from "../../features/users/usersStore";
import { PageContainer } from "../../shared/components/PageContainer";

const UserDetails = () => {
  const { id } = useParams();
  const user = useUsersStore((s) =>
    s.users.find((u) => u.id === Number(id))
  );

  if (!user) return <p>User not found</p>;

  return (
    <PageContainer title="User details">
      <div className="flex items-center gap-6">
        <img src={user.image} className="w-24 h-24 rounded-full" />

        <div>
          <h2 className="text-xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-400">@{user.username}</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default UserDetails;