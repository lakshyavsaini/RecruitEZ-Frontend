
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Job Listings', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const Logo = () => (
    <Link to="/" className="flex items-center space-x-2">
      <div className="bg-white rounded-full p-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6C14.2091 6 16 7.79086 16 10V10.5C16 11.0523 15.5523 11.5 15 11.5C14.4477 11.5 14 11.0523 14 10.5V10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10V10.5C10 11.0523 9.55228 11.5 9 11.5C8.44772 11.5 8 11.0523 8 10.5V10C8 7.79086 9.79086 6 12 6Z" fill="#1A1F2C"/>
          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z" fill="#1A1F2C"/>
          <path d="M8 14C8.55228 14 9 14.4477 9 15C9 16.1046 9.89543 17 11 17H13C14.1046 17 15 16.1046 15 15C15 14.4477 15.4477 14 16 14C16.5523 14 17 14.4477 17 15C17 17.2091 15.2091 19 13 19H11C8.79086 19 7 17.2091 7 15C7 14.4477 7.44772 14 8 14Z" fill="#1A1F2C"/>
        </svg>
      </div>
      <span className="text-lg font-bold text-recruit-primary">RecruitMe</span>
    </Link>
  );

  const NavLinks = () => (
    <div className="flex space-x-1">
      {navItems.map((item) => (
        <Link 
          key={item.path}
          to={item.path}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            location.pathname === item.path 
              ? 'bg-recruit-accent/10 text-recruit-accent' 
              : 'text-recruit-primary hover:bg-recruit-secondary'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  const MobileMenu = () => (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px]">
        <div className="flex flex-col space-y-6 py-6">
          <Logo />
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-recruit-accent/10 text-recruit-accent' 
                    : 'text-recruit-primary hover:bg-recruit-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/post-job" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full gap-2">
              <Send size={16} />
              Post Jobs
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-slate-200/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        
        {!isMobile && <NavLinks />}
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Link to="/post-job">
              <Button className="gap-2">
                <Send size={16} />
                Post Jobs
              </Button>
            </Link>
          )}
          
          {isMobile && <MobileMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
