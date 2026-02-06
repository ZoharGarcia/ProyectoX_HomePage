import { CheckCircle2, Clock, Circle } from "lucide-react";

type ChecklistStatus = 'complete' | 'in-progress' | 'pending';

interface ChecklistItem {
  label: string;
  status: ChecklistStatus;
}

const checklistItems: ChecklistItem[] = [
  { label: "Contrato activo", status: "complete" },
  { label: "Gateway instalado", status: "complete" },
  { label: "Comunicación configurada", status: "complete" },
  { label: "Variables validadas", status: "in-progress" },
  { label: "Alarmas configuradas", status: "pending" },
];

function getStatusIcon(status: ChecklistStatus) {
  switch (status) {
    case 'complete':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'in-progress':
      return <Clock className="w-5 h-5 text-orange-600" />;
    case 'pending':
      return <Circle className="w-5 h-5 text-neutral-600" />;
  }
}

function getStatusText(status: ChecklistStatus) {
  switch (status) {
    case 'complete':
      return <span className="text-sm text-green-500">Completo</span>;
    case 'in-progress':
      return <span className="text-sm text-orange-600">En proceso</span>;
    case 'pending':
      return <span className="text-sm text-neutral-500">Pendiente</span>;
  }
}

export function ImplementationChecklist() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Checklist de implementación</h2>
      
      <div className="space-y-3">
        {checklistItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded"
          >
            <div className="flex items-center gap-3">
              {getStatusIcon(item.status)}
              <span className="font-medium">{item.label}</span>
            </div>
            {getStatusText(item.status)}
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-neutral-400">Progreso general</span>
          <span className="text-white font-medium">60%</span>
        </div>
        <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-orange-600" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
}
