import { useTranslation } from "react-i18next";
import { useAuth } from "../../features/auth/useAuth";
import { PageContainer } from "../../shared/components/PageContainer";

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  return (
    <PageContainer>
      {!user ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-200">
          {t("wellcome")} {user.firstName}
        </p>
      )}
    </PageContainer>
  );
};

export default Dashboard;
