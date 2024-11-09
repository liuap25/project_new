import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { AuditCard } from '../components/AuditCard';
import { ChevronDown, Filter, Plus } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

const mockAudits = [
  {
    id: 'AUD-2024-001',
    title: 'Revisión Financiera Anual',
    department: 'Departamento de Finanzas',
    requestDate: '01/03/2024',
    dueDate: '15/03/2024',
    status: 'en-proceso',
    priority: 'alta',
    description: 'Revisión integral de estados financieros y controles internos para el año fiscal 2023.',
  },
  {
    id: 'AUD-2024-002',
    title: 'Evaluación de Seguridad IT',
    department: 'Departamento de TI',
    requestDate: '28/02/2024',
    dueDate: '20/03/2024',
    status: 'pendiente',
    priority: 'media',
    description: 'Evaluación de protocolos de seguridad actuales y cumplimiento con estándares de la industria.',
  },
  {
    id: 'AUD-2024-003',
    title: 'Cumplimiento de Políticas RH',
    department: 'Recursos Humanos',
    requestDate: '25/02/2024',
    dueDate: '10/03/2024',
    status: 'completado',
    priority: 'baja',
    description: 'Revisión de políticas y procedimientos de RRHH para cumplimiento con regulaciones actualizadas.',
  },
] as const;

const stats = [
  { label: 'Total Solicitudes', value: '24' },
  { label: 'En Proceso', value: '8' },
  { label: 'Completadas', value: '12' },
  { label: 'Pendientes', value: '4' },
];

export function Dashboard({ onLogout }: DashboardProps) {
  return (
    <DashboardLayout onLogout={onLogout}>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Solicitudes de Auditoría</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Filtros
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            <Plus className="h-4 w-4" />
            Nueva Solicitud
          </button>
        </div>
      </div>

      {/* Audit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAudits.map((audit) => (
          <AuditCard key={audit.id} audit={audit} />
        ))}
      </div>
    </DashboardLayout>
  );
}