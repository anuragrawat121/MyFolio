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
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <div className={`loader ${isLoading ? "" : "is-done"}`} aria-hidden={!isLoading}>
      <div className="loader-mark">
        Anurag <em>Rawat</em>
      </div>
      <div className="loader-track">
        <div className="loader-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loader-meta">
        <span>Loading</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default Loader;
