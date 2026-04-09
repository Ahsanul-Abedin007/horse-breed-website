import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Breeds', path: '/breeds' },
  { name: 'Marketplace', path: '/marketplace' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-ink" />
          <span className="font-serif text-2xl font-bold tracking-tight text-ink">EquineElite</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs font-medium uppercase tracking-widest transition-colors hover:text-ink",
                location.pathname === item.path ? "text-ink underline underline-offset-8" : "text-ink/60"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="border-ink text-ink hover:bg-ink hover:text-paper">
            List a Horse
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-ink">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper p-0">
              <div className="flex flex-col gap-8 p-8">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Trophy className="h-8 w-8 text-ink" />
                    <span className="font-serif text-2xl font-bold text-ink">EquineElite</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium uppercase tracking-widest text-ink/60 transition-colors hover:text-ink",
                        location.pathname === item.path && "text-ink"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-ink text-paper hover:bg-ink/90">
                    List a Horse
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
