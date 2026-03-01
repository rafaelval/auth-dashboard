export const TableSkeleton = () => {
  // Creamos un array del 1 al 6 para usar como keys en lugar del índice del map
  const skeletonRows = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="animate-pulse">
      {skeletonRows.map((row) => (
        <div 
          key={row}
          className="h-12 bg-gray-200 rounded mb-2" 
        />
      ))}
    </div>
  );
};