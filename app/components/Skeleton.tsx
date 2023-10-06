const Skeleton = () => {
  return (
    <div className="p-4 rounded shadow-md w-full animate-pulse bg-gray-50">
      <div className="flex mb-2">
        <div className=" w-full h-40 rounded-md bg-gray-300"></div>
      </div>
      <div className="py-2 flex flex-col gap-2 ">
        <div className="w-full h-4 rounded bg-gray-300"></div>
        <div className="w-full h-4 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};
export default Skeleton;
