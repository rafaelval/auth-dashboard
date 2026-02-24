import { useEffect } from "react";
import { api } from "../../services/api";

const Dashboard = () => {
  useEffect(() => {
    const getAuthUser = async () => {
      try {
        const { data } = await api.get("/auth/me");
        return data
      } catch (error) {
        console.error(error);
      }
    };

    getAuthUser();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;