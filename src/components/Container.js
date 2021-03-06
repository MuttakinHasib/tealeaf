const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-6 lg:px-8 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
