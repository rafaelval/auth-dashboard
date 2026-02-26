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
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm">
      {(title || actions) && (
        <div className="flex items-center justify-between mb-6">
          <div>
            {title && (
              <h1 className="text-gray-800 dark:text-gray-100">{title}</h1>
            )}
            {subtitle && (
              <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
            )}
          </div>

          {actions && <div>{actions}</div>}
        </div>
      )}

      {children}
    </div>
  );
};