import { ArrowRight } from "lucide-react";

export function AccessButton() {
  return (
    <div className="mb-8">
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1">Acceso al sistema</h3>
            <p className="text-sm text-neutral-500">
              El sistema estará disponible una vez completada la configuración
            </p>
          </div>
          <button 
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <span>Acceder al sistema</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
