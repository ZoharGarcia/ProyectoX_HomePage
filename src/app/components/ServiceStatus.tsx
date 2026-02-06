import { Clock } from "lucide-react";

export function ServiceStatus() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">Estado del servicio</h1>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-lg text-orange-600 font-medium">
                En implementación
              </span>
            </div>
          </div>

          {/* Status Description */}
          <p className="text-neutral-400 mb-4 max-w-3xl">
            El sistema se encuentra en fase de implementación. Se está esperando la validación final 
            de las variables de proceso y la configuración de alarmas críticas antes de pasar a modo operativo.
          </p>

          {/* Estimated Activation Date */}
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <Clock className="w-4 h-4" />
            <span>Fecha estimada de activación: 20 de febrero, 2026</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="hidden lg:flex flex-col items-end gap-2">
          <div className="px-4 py-2 bg-orange-600/10 border border-orange-600/30 rounded text-orange-600 text-sm font-medium">
            Implementación
          </div>
        </div>
      </div>
    </div>
  );
}
