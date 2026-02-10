interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-full flex justify-center items-center px-4 sm:px-6 py-6 sm:py-8">
      <div className="w-full max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
}
