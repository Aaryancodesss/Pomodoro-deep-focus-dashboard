const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-4 animate-pulse">
      <div className="w-full aspect-[4/5] bg-dark-800 rounded-sm"></div>
      <div className="flex justify-between">
        <div className="w-2/3 h-5 bg-dark-800 rounded-sm"></div>
        <div className="w-1/4 h-5 bg-dark-800 rounded-sm"></div>
      </div>
      <div className="w-1/2 h-4 bg-dark-800 rounded-sm"></div>
    </div>
  );
};

export default SkeletonLoader;
