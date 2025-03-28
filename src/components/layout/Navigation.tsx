
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
      <div className="bg-white rounded-full p-2 border border-[#c1b6a6]/30">
        <img 
          src="/lovable-uploads/3fd684a9-bb15-4cd2-959e-f56c66687bcc.png" 
          alt="Logo" 
          className="w-6 h-6"
        />
      </div>
      <span className="text-lg font-bold text-gray-800">RecruitMe</span>
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
              ? 'bg-gray-100 text-gray-800' 
              : 'text-gray-600 hover:bg-gray-50'
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
        <Button variant="ghost" size="icon" className="md:hidden text-gray-800">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-white border-l border-[#c1b6a6]/50">
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
                    ? 'bg-gray-100 text-gray-800' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link to="/post-job" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-800">
              <Send size={16} />
              Post Jobs
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#c1b6a6]/30 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        
        {!isMobile && <NavLinks />}
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <Link to="/post-job">
              <Button className="gap-2 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-800">
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
