const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 " style={{borderTop: "2px solid var(--sec-color)", borderBottom: "2px solid var(--sec-color)"}}></div>
    </div>
  );
};

export default LoadingSpinner;