import React from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';
import { StatusBadge } from './StatusBadge';

interface AuditCardProps {
  audit: {
    id: string;
    title: string;
    department: string;
    requestDate: string;
    dueDate: string;
    status: 'pendiente' | 'en-proceso' | 'completado' | 'rechazado';
    priority: 'baja' | 'media' | 'alta';
    description: string;
  };
}

export function AuditCard({ audit }: AuditCardProps) {
  const priorityColor = {
    baja: 'bg-green-100 text-green-800',
    media: 'bg-yellow-100 text-yellow-800',
    alta: 'bg-red-100 text-red-800',
  };

  const priorityLabels = {
    baja: 'BAJA',
    media: 'MEDIA',
    alta: 'ALTA',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{audit.title}</h3>
          <p className="text-sm text-gray-500">{audit.department}</p>
        </div>
        <StatusBadge status={audit.status} />
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{audit.description}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>Vence: {audit.dueDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>Solicitado: {audit.requestDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText className="h-4 w-4" />
          <span>ID: {audit.id}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${priorityColor[audit.priority]}`}>
          Prioridad {priorityLabels[audit.priority]}
        </span>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
          Ver Detalles →
        </button>
      </div>
    </div>
  );
}