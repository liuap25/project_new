import React from 'react';
import { LayoutGrid, Bell, User, LogOut, Search } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export function DashboardLayout({ children, onLogout }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-30">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
          <LayoutGrid className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl text-gray-900">AuditFlow</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              'Panel Principal',
              'Solicitudes',
              'Reportes',
              'Configuración'
            ].map((item) => (
              <li key={item}>
                <button className={`w-full px-4 py-2 rounded-lg text-left ${
                  item === 'Solicitudes' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar solicitudes..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <span className="font-medium">Juan Pérez</span>
            </button>
            <button 
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}