import { LogIn } from "lucide-react";
import logo from "../../img/Logo.png";

export function Header() {
  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and System Name */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo de la empresa"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">
                  iProcess Ind
                </div>
                <div className="text-lg font-semibold">
                  Proyecto X
                </div>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded hover:bg-neutral-900 transition-colors">
            <LogIn className="w-4 h-4" />
            <span>Iniciar sesión</span>
          </button>
        </div>
      </div>
    </header>
  );
}
