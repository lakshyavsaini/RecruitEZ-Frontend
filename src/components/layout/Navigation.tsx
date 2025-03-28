
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Send } from 'lucide-react';
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
      <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
        <img 
          src="/lovable-uploads/3fd684a9-bb15-4cd2-959e-f56c66687bcc.png" 
          alt="Google Logo" 
          className="w-6 h-6"
        />
      </div>
      <span className="text-lg font-bold text-white">RecruitMe</span>
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
              ? 'bg-indigo-600/30 text-white' 
              : 'text-white/80 hover:bg-white/10'
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
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-[#1e1d45]/90 backdrop-blur-xl border-white/10">
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
                    ? 'bg-indigo-600/30 text-white' 
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/post-job" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
              <Send size={16} />
              Post Jobs
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#1e1d45]/70 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        
        {!isMobile && <NavLinks />}
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Link to="/post-job">
              <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
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
