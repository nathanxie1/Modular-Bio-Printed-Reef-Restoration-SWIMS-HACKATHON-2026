import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GlobalStatsPanel } from './components/GlobalStatsPanel';
import { HexMap } from './components/HexMap';
import { ModuleDetailPanel } from './components/ModuleDetailPanel';
import { RecordsAndDataSection } from './components/RecordsAndDataSection';
import { HistoryModal } from './components/HistoryModal';
import { LogSightingModal } from './components/LogSightingModal';
import { MODULE_DATA, INITIAL_TELEMETRY } from './data/marineData';
import { MarineModule, ModuleStatus } from './types';
import { marineAudio } from './utils/audio';

export default function App() {
  const [modules, setModules] = useState<MarineModule[]>(MODULE_DATA);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>('SI-HEX-001');
  const [filterStatus, setFilterStatus] = useState<ModuleStatus | 'all'>('all');
  const [sonarActive, setSonarActive] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [telemetry, setTelemetry] = useState(INITIAL_TELEMETRY);

  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [logSightingModalOpen, setLogSightingModalOpen] = useState(false);

  // Live community biodiversity feed records
  const [recentLogs, setRecentLogs] = useState([
    { id: '1', serial: 'SI-HEX-001', species: 'Pavona decussata', diver: 'Alex Wong (Eco Diver)', dateTime: '10 mins ago' },
    { id: '2', serial: 'SI-HEX-004', species: 'Epinephelus lanceolatus', diver: 'Sarah Chen (HK Reef)', dateTime: '42 mins ago' },
    { id: '3', serial: 'SI-HEX-007', species: 'Diadema setosum', diver: 'K.C. Tam (Citizen Scuba)', dateTime: '2 hours ago' },
    { id: '4', serial: 'SI-HEX-012', species: 'Platygyra sinensis', diver: 'Dr. Michael Lam', dateTime: '3 hours ago' },
    { id: '5', serial: 'SI-HEX-019', species: 'Pomacentrus coelestis', diver: 'Jessie Ho (Sai Kung)', dateTime: 'Yesterday' },
  ]);

  // Sync audio helper state
  useEffect(() => {
    marineAudio.enabled = audioEnabled;
  }, [audioEnabled]);

  // Find currently selected module
  const currentSelectedModule = modules.find(m => m.id === selectedModuleId) || null;

  // Handler to select module
  const handleSelectModule = (module: MarineModule) => {
    setSelectedModuleId(module.id);
  };

  // Handler to save new citizen sighting from modal or bottom form
  const handleSaveSighting = (
    moduleId: string, 
    newLog: {
      author: string;
      title: string;
      notes: string;
      species?: string;
      count?: number;
      statusUpdate?: ModuleStatus;
      newHealth?: number;
    }
  ) => {
    const targetModule = modules.find(m => m.id === moduleId);

    setModules(prevModules => 
      prevModules.map(m => {
        if (m.id === moduleId) {
          const updatedHistory = [
            {
              id: `LOG-${Date.now()}`,
              timestamp: 'Just now',
              type: (newLog.statusUpdate === 'warning' ? 'sensor_alert' : 'citizen_log') as any,
              title: newLog.title,
              author: newLog.author,
              notes: newLog.notes,
              recordedHealth: newLog.newHealth !== undefined ? newLog.newHealth : m.health
            },
            ...m.history
          ];

          return {
            ...m,
            sightings: m.sightings + (newLog.count || 1),
            lastSeen: 'Just now',
            status: newLog.statusUpdate || m.status,
            health: newLog.newHealth !== undefined ? newLog.newHealth : m.health,
            history: updatedHistory
          };
        }
        return m;
      })
    );

    // Also add to the Live Community Feed
    setRecentLogs(prev => [
      {
        id: String(Date.now()),
        serial: moduleId,
        species: newLog.species || targetModule?.species || 'Pavona decussata',
        diver: newLog.author,
        dateTime: 'Just now'
      },
      ...prev.slice(0, 7)
    ]);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-[#153238] p-4 md:p-6 lg:p-8 font-sans selection:bg-[#1E5D66]/20 selection:text-[#1E5D66]">
      {/* Background Ambience: warm nature tones, no white grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 10%, rgba(30, 93, 102, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 85% 65%, rgba(111, 143, 92, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 15% 90%, rgba(229, 107, 28, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 max-w-[1640px] mx-auto">
        {/* Header Section */}
        <Header 
          telemetry={telemetry}
          audioEnabled={audioEnabled}
          onToggleAudio={() => setAudioEnabled(!audioEnabled)}
          sonarActive={sonarActive}
          onToggleSonar={() => setSonarActive(!sonarActive)}
          activeCount={modules.length}
          totalCount={modules.length}
        />

        {/* 3-Column Nature Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Panel: Global Stats & Biodiversity */}
          <div className="lg:col-span-3 xl:col-span-3 order-2 lg:order-1">
            <GlobalStatsPanel 
              modules={modules}
              filterStatus={filterStatus}
              onSelectFilter={setFilterStatus}
              onSelectModule={handleSelectModule}
            />
          </div>

          {/* Center Panel: Interactive Hex-Grid Map of Sharp Island */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2">
            <HexMap 
              modules={modules}
              selectedModule={currentSelectedModule}
              onSelectModule={handleSelectModule}
              filterStatus={filterStatus}
              sonarActive={sonarActive}
            />
          </div>

          {/* Right Panel: Selected Module Details & Telemetry (Fully extended bubble, no scrollbars) */}
          <div className="lg:col-span-4 xl:col-span-4 order-3">
            <ModuleDetailPanel 
              selectedModule={currentSelectedModule}
              onClose={() => setSelectedModuleId(null)}
              onViewHistory={() => setHistoryModalOpen(true)}
              onLogSighting={() => setLogSightingModalOpen(true)}
            />
          </div>
        </div>

        {/* RECORDS & DATA Section: Citizen Science Log-in & Live Community Feed */}
        <RecordsAndDataSection 
          selectedModule={currentSelectedModule}
          onSaveObservation={(moduleId, data) => handleSaveSighting(moduleId, data)}
          recentLogs={recentLogs}
        />

        {/* Field Journal Footer */}
        <footer className="mt-12 pt-6 pb-8 border-t border-[#D5E1DB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52706A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E5D66]" />
            <span className="font-semibold text-[#1E5D66]">Sharp Island Marine Project</span>
            <span>• Terracotta Reef Restoration &amp; Citizen Science Consortium</span>
          </div>
          <div className="font-mono text-[11px] text-[#6A8780]">
            Kiu Tsui Chau, Sai Kung • UNESCO Global Geopark
          </div>
        </footer>
      </div>

      {/* Full History Inspection Modal */}
      <HistoryModal 
        module={currentSelectedModule}
        isOpen={historyModalOpen}
        onClose={() => setHistoryModalOpen(false)}
        onOpenLogSighting={() => setLogSightingModalOpen(true)}
      />

      {/* Citizen Science / Diver Observation Log Modal */}
      <LogSightingModal 
        module={currentSelectedModule}
        isOpen={logSightingModalOpen}
        onClose={() => setLogSightingModalOpen(false)}
        onSaveSighting={handleSaveSighting}
      />
    </div>
  );
}
