import { Building2, Briefcase, Settings, User } from "lucide-react";

export function ProjectInfo() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Información del proyecto</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Client/Plant Name */}
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-neutral-500 mt-0.5" />
          <div>
            <div className="text-xs text-neutral-500 mb-1">Cliente / Planta</div>
            <div className="text-white">Planta Industrial Norte</div>
          </div>
        </div>

        {/* Project Assignment */}
        <div className="flex items-start gap-3">
          <Briefcase className="w-5 h-5 text-neutral-500 mt-0.5" />
          <div>
            <div className="text-xs text-neutral-500 mb-1">Proyecto asignado</div>
            <div className="text-white">Proyecto X - Supervisión SCADA</div>
          </div>
        </div>

        {/* Service Type */}
        <div className="flex items-start gap-3">
          <Settings className="w-5 h-5 text-neutral-500 mt-0.5" />
          <div>
            <div className="text-xs text-neutral-500 mb-1">Tipo de servicio</div>
            <div className="text-white">Monitoreo y análisis de proceso</div>
          </div>
        </div>

        {/* Technical Responsible */}
        <div className="flex items-start gap-3">
          <User className="w-5 h-5 text-neutral-500 mt-0.5" />
          <div>
            <div className="text-xs text-neutral-500 mb-1">Responsable técnico</div>
            <div className="text-white">Ing. Edward Mora - iProcess Ind</div>
          </div>
        </div>
      </div>
    </div>
  );
}
