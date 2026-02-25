import type { ReactNode } from "react";

interface PageContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export const PageContainer = ({
  title,
  subtitle,
  children,
  actions,
}: PageContainerProps) => {
  return (
    <div className="bg-white rounded shadow p-6 w-full">
      {(title || actions) && (
        <div className="flex items-center justify-between mb-6">
          <div>
            {title && (
              <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
            )}
            {subtitle && (
              <p className="text-sm text-gray-400">{subtitle}</p>
            )}
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      {children}
    </div>
  );
};