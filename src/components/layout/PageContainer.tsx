const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
      {children}
    </div>
  );
};

export default PageContainer;