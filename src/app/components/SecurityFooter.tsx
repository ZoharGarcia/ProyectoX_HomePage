import { Lock, ShieldCheck, FileCheck } from "lucide-react";

export function SecurityFooter() {
  return (
    <div className="pt-6 border-t border-neutral-800">
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5" />
          <span>Comunicación segura TLS</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Separación OT / IT</span>
        </div>
        <div className="flex items-center gap-2">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Accesos auditados</span>
        </div>
      </div>
      <div className="text-center mt-4 text-xs text-neutral-600">
        © 2026 iProcess Ind - Sistema de supervisión industrial
      </div>
    </div>
  );
}
