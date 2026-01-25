import React from "react";

const Loader = ({ isLoading }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 20); // 100 steps * 20ms = 2000ms
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div
      id="loader"
      className={
        !isLoading
          ? "hidden"
          : "fixed inset-0 bg-[#0a0b10] z-9999 flex flex-col items-center justify-center transition-opacity duration-500"
      }
    >
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-white transition-all ease-out duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-white font-mono text-sm">{progress}%</div>
    </div>
  );
};

export default Loader;
