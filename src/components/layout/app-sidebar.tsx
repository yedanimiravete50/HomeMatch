'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Building2, PartyPopper, Users, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';

export function AppSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio', icon: <Home /> },
    { href: '/explorar', label: 'Propiedades', icon: <Building2 /> },
    { href: '/eventos', label: 'Experiencias', icon: <PartyPopper /> },
    { href: '/perfiles', label: 'Perfiles', icon: <Users /> },
    { href: '/mensajes', label: 'Mensajes', icon: <MessageSquare /> },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center group-data-[collapsible=icon]:justify-center">
            <Link href="/" className="flex items-center gap-2 group/logo" aria-label='Home page'>
                <Image src="/logo.png" alt="HomeMatch Hub Logo" width={40} height={40} />
                <span className="text-lg font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                    HomeMatch
                </span>
            </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map(({ href, label, icon }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton
                asChild
                isActive={pathname === href}
                icon={icon}
                tooltip={{ children: label }}
              >
                <Link href={href}>{label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='group-data-[collapsible=icon]:gap-2'>
        <div className="flex items-center justify-center gap-1 group-data-[collapsible=icon]:flex-col">
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
        <Link href="/auth/signup" className='w-full group-data-[collapsible=icon]:w-auto'>
            <Button className='w-full' >Crear perfil</Button>
        </Link>
        <div className="hidden group-data-[collapsible=icon]:block">
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
