import { Server, Clock, Wifi } from "lucide-react";

export function ConnectivityStatus() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Estado de conectividad</h2>
      
      <div className="space-y-4">
        {/* Gateway Status */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded">
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-orange-600" />
            <div>
              <div className="font-medium">Gateway industrial</div>
              <div className="text-sm text-neutral-500">Edge Gateway - Línea de producción 1</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-500 font-medium">Online</span>
          </div>
        </div>

        {/* Last Communication */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-neutral-500" />
            <div>
              <div className="font-medium">Última comunicación</div>
              <div className="text-sm text-neutral-500">Hace 3 minutos</div>
            </div>
          </div>
          <div className="text-sm text-neutral-400">
            06/02/2026 14:37:22
          </div>
        </div>

        {/* Connection Type */}
        <div className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded">
          <div className="flex items-center gap-3">
            <Wifi className="w-5 h-5 text-neutral-500" />
            <div>
              <div className="font-medium">Protocolo de enlace</div>
              <div className="text-sm text-neutral-500">HTTPS - Comunicación segura</div>
            </div>
          </div>
          <div className="px-3 py-1 bg-neutral-800 rounded text-xs text-neutral-400">
            TLS 1.3
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-neutral-800">
        <p className="text-sm text-neutral-500">
          Datos provenientes de Edge Gateway vía HTTP(S) desde el nivel de campo
        </p>
      </div>
    </div>
  );
}
