'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard',    label: '📊 Dashboard' },
  { href: '/categorias',   label: '🏷️ Categorías' },
  { href: '/freelancers',  label: '👨‍💻 Freelancers' },
  { href: '/clientes',     label: '🧑‍💼 Clientes' },
  { href: '/servicios',    label: '💼 Servicios' },
  { href: '/solicitudes',  label: '📋 Solicitudes' },
  { href: '/proyectos',    label: '🚀 Proyectos' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-sm font-bold text-indigo-700 uppercase tracking-wider">
          Marketplace Freelance
        </h2>
        <p className="text-xs text-gray-400 mt-1">Programación Web 2026A</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-400">
        CORHUILA — Sprint 1-3
      </div>
    </aside>
  );
}
