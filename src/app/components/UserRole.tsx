import { Shield } from "lucide-react";

export function UserRole() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Rol del usuario</h2>
      
      <div className="flex items-start gap-3 mb-4">
        <Shield className="w-5 h-5 text-orange-600 mt-0.5" />
        <div>
          <div className="font-medium mb-1">Supervisor de planta</div>
          <div className="text-sm text-neutral-500">Nivel de acceso: Supervisión</div>
        </div>
      </div>

      <div className="p-4 bg-neutral-950 border border-neutral-800 rounded">
        <div className="text-sm text-neutral-400 leading-relaxed">
          Una vez activo el sistema, tendrás acceso a:
          <ul className="mt-2 space-y-1 ml-4 list-disc">
            <li>Visualización de variables en tiempo real</li>
            <li>Consulta de históricos y tendencias</li>
            <li>Recepción de alarmas y eventos</li>
            <li>Generación de reportes básicos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
