import { useAuth } from "../../features/auth/useAuth";
import { PageContainer } from "../../shared/components/PageContainer";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <PageContainer>
      <p className="text-gray-600">
        Bienvenido {user?.firstName}
      </p>
    </PageContainer>
  );
};

export default Dashboard;