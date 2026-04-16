export default function DashboardPage() {
  const cards = [
    { label: 'Categorías',  href: '/categorias',  emoji: '🏷️',  desc: 'Gestiona las categorías de servicios' },
    { label: 'Freelancers', href: '/freelancers',  emoji: '👨‍💻', desc: 'Registro de profesionales independientes' },
    { label: 'Clientes',    href: '/clientes',     emoji: '🧑‍💼', desc: 'Registro de clientes de la plataforma' },
    { label: 'Servicios',   href: '/servicios',    emoji: '💼',  desc: 'Servicios publicados por freelancers' },
    { label: 'Solicitudes', href: '/solicitudes',  emoji: '📋',  desc: 'Solicitudes de contratación' },
    { label: 'Proyectos',   href: '/proyectos',    emoji: '🚀',  desc: 'Seguimiento de proyectos activos' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Marketplace de Servicios Freelance</h1>
        <p className="text-gray-500 mt-1">Sprint 1 – 3 · NestJS · Next.js · PostgreSQL · Docker · Prisma</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-indigo-300 transition-all group"
          >
            <div className="text-4xl mb-3">{card.emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700">
              {card.label}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
