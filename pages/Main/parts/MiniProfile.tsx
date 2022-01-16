const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-9">
      <img src="https://via.placeholder.com/56" alt="" className="w-14 h-14 rounded-full" />
      <div className="mr-auto ml-5">
        <h2 className="text-sm font-bold">jaemu shim</h2>
        <p className="text-sm text-gray-400">심재무</p>
      </div>
      <button className="text-xs text-blue-400 font-semibold">전환</button>
    </div>
  );
};

export default MiniProfile;
