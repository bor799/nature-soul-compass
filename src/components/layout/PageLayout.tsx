interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-full mx-auto max-w-full sm:max-w-2xl lg:max-w-3xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {children}
    </div>
  );
}
