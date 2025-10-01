"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Projetos', href: '/projects' },
  { label: 'Fornecedores', href: '/suppliers' },
  { label: 'Renda Extra', href: '/extra-income' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 z-40 w-full border-b">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Cantinho Macramê da Juju
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className={cn("fixed inset-0 top-20 z-40 grid grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden")}>
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex w-full items-center rounded-md p-3 text-lg font-medium hover:bg-accent"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
