import { Info } from "lucide-react";

export function SystemMessage() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-3">
        <Info className="w-5 h-5 text-orange-600 mt-0.5" />
        <h2 className="text-lg font-semibold">Acerca del sistema</h2>
      </div>
      
      <div className="text-sm text-neutral-400 leading-relaxed space-y-3">
        <p>
          Proyecto X es una plataforma de <strong className="text-white">supervisión y análisis</strong> que 
          permite monitorear variables de proceso, gestionar alarmas y acceder a datos históricos.
        </p>
        <p>
          El <strong className="text-white">control de proceso permanece en los PLCs</strong> locales. 
          Esta plataforma proporciona visibilidad y herramientas de análisis sin interferir en el control operativo.
        </p>
        <p>
          Comunicación <strong className="text-white">unidireccional de lectura</strong> desde el nivel de campo 
          hacia la plataforma, asegurando la separación OT/IT.
        </p>
      </div>
    </div>
  );
}
