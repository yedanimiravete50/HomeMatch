import Link from 'next/link';
import { Home, Search, Users, MessageSquare, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import Image from 'next/image';

export function Header() {
  const navLinks = [
    { href: '/explorar', label: 'Explorar', icon: <Search className="md:hidden h-5 w-5" /> },
    { href: '/perfiles', label: 'Compañeros', icon: <Users className="md:hidden h-5 w-5" /> },
    { href: '/eventos', label: 'Eventos', icon: <PartyPopper className="md:hidden h-5 w-5" /> },
    { href: '/mensajes', label: 'Mensajes', icon: <MessageSquare className="md:hidden h-5 w-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="HomeMatch Hub Logo" width={32} height={32} />
          <span className="hidden font-bold sm:inline-block">HomeMatch</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-sm flex-grow">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              <span className="hidden md:inline">{label}</span>
              <span className="md:hidden">{icon}</span>
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link href="/auth/login">
            <Button variant="ghost">Iniciar sesión</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Crear perfil</Button>
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
