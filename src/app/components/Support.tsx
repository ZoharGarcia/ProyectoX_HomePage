import { MessageSquare, AlertCircle } from "lucide-react";

export function Support() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Soporte iProcess Ind</h2>
      
      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-700 rounded hover:bg-neutral-800 transition-colors text-left">
          <MessageSquare className="w-5 h-5 text-neutral-400" />
          <div>
            <div className="font-medium text-sm">Contactar soporte</div>
            <div className="text-xs text-neutral-500">Consultas generales</div>
          </div>
        </button>

        <button className="w-full flex items-center gap-3 p-3 bg-neutral-950 border border-neutral-700 rounded hover:bg-neutral-800 transition-colors text-left">
          <AlertCircle className="w-5 h-5 text-neutral-400" />
          <div>
            <div className="font-medium text-sm">Reportar incidencia</div>
            <div className="text-xs text-neutral-500">Problemas técnicos</div>
          </div>
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-neutral-800 text-xs text-neutral-500">
        <div>Email: soporte.tecnico@iprocess-ind.com</div>
        <div className="mt-1">Tel: +505 8403 8777</div>
      </div>
    </div>
  );
}
