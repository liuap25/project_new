import React from 'react';

type StatusType = 'pendiente' | 'en-proceso' | 'completado' | 'rechazado';

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyles = {
  pendiente: 'bg-yellow-100 text-yellow-800',
  'en-proceso': 'bg-blue-100 text-blue-800',
  completado: 'bg-green-100 text-green-800',
  rechazado: 'bg-red-100 text-red-800',
};

const statusLabels = {
  pendiente: 'Pendiente',
  'en-proceso': 'En Proceso',
  completado: 'Completado',
  rechazado: 'Rechazado',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}