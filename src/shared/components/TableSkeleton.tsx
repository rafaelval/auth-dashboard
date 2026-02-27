export const TableSkeleton = () => {
  return (
    <div className="animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded mb-2" />
      ))}
    </div>
  );
};
