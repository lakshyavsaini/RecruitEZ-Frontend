
import { ReactNode } from 'react';
import Navigation from './Navigation';

type PageLayoutProps = {
  children: ReactNode;
  containerClass?: string;
};

const PageLayout = ({ children, containerClass = 'container py-8 px-4 md:px-6' }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1e1d45] via-[#2a2a5a] to-[#1e1d45]">
      <Navigation />
      <main className={containerClass}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
