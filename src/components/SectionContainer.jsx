const SectionContainer = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{title}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
