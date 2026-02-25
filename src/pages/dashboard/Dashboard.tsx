import { useAuth } from "../../features/auth/useAuth";


const Dashboard = () => {
  const { user } = useAuth();

  return <div>Bienvenido {user?.firstName}</div>;
};

export default Dashboard;
