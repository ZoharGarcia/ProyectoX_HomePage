import { Header } from "./components/Header";
import { ServiceStatus } from "./components/ServiceStatus";
import { ProjectInfo } from "./components/ProjectInfo";
import { ConnectivityStatus } from "./components/ConnectivityStatus";
import { ImplementationChecklist } from "./components/ImplementationChecklist";
import { UserRole } from "./components/UserRole";
import { SystemMessage } from "./components/SystemMessage";
import { Support } from "./components/Support";
import { SecurityFooter } from "./components/SecurityFooter";
import { AccessButton } from "./components/AccessButton";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Status Section */}
        <div className="mb-8">
          <ServiceStatus />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProjectInfo />
            <ConnectivityStatus />
            <ImplementationChecklist />
          </div>

          {/* Right Column - Secondary Content */}
          <div className="space-y-6">
            <UserRole />
            <SystemMessage />
            <Support />
          </div>
        </div>

        {/* Access Button */}
        <AccessButton />

        {/* Security Footer */}
        <SecurityFooter />
      </main>
    </div>
  );
}
