import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  X, 
  Droplets, 
  Thermometer, 
  Layers, 
  PlusCircle, 
  AlertTriangle,
  FileText,
  Compass,
  Sparkles,
  Heart
} from 'lucide-react';
import { MarineModule, ModuleStatus } from '../types';
import { marineAudio } from '../utils/audio';

interface ModuleDetailPanelProps {
  selectedModule: MarineModule | null;
  onClose: () => void;
  onViewHistory: () => void;
  onLogSighting: () => void;
}

export const ModuleDetailPanel: React.FC<ModuleDetailPanelProps> = ({
  selectedModule,
  onClose,
  onViewHistory,
  onLogSighting
}) => {
  const [pingEffect, setPingEffect] = useState(false);

  const handlePing = () => {
    marineAudio.playSonarPing();
    setPingEffect(true);
    setTimeout(() => setPingEffect(false), 1200);
  };

  if (!selectedModule) {
    return (
      <div className="h-full min-h-[380px] flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-[#D5DFD9] rounded-3xl text-[#52706A] bg-white/60 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#EAF2EE] flex items-center justify-center text-[#1E5D66] mb-3">
          <Sparkles size={28} />
        </div>
        <h4 className="text-base font-bold text-[#153238] font-display mb-1">Select a Reef Tile</h4>
        <p className="text-xs text-[#52706A] max-w-xs leading-relaxed">
          Click any restoration hexagon on the Sharp Island map to inspect species biodiversity, substrate composition, and diver logs.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-[#D5E1DB] p-5 sm:p-6 rounded-3xl shadow-sm flex flex-col text-[#153238]">
      <div>
        {/* Header with Tile Serial & Close */}
        <div className="flex justify-between items-start mb-5 border-b border-[#E3ECE7] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${getStatusDot(selectedModule.status)} shrink-0`} />
              <h2 className="text-2xl font-bold font-mono text-[#1E5D66] tracking-tight">
                {selectedModule.id}
              </h2>
            </div>
            <p className="text-xs text-[#52706A] font-medium mt-0.5">
              {selectedModule.sector}
            </p>
          </div>
          <button 
            id="btn-close-details"
            onClick={() => {
              marineAudio.playClick();
              onClose();
            }} 
            className="p-1.5 text-slate-400 hover:text-[#153238] hover:bg-[#EEF5F1] rounded-full transition-colors cursor-pointer"
            title="Deselect Tile"
          >
            <X size={18}/>
          </button>
        </div>

        <div className="space-y-4">
          {/* Health Score Card */}
          <div className="p-4 bg-[#F5F8F6] border border-[#DCE5E0] rounded-2xl relative overflow-hidden">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-2.5 rounded-xl ${getStatusBg(selectedModule.status)} text-white shadow-xs shrink-0`}>
                  {selectedModule.status === 'warning' ? (
                    <ShieldAlert size={20} />
                  ) : (
                    <ShieldCheck size={20} />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase text-[#52706A] font-bold tracking-wider font-mono">
                    Ecological Health Index
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-[#153238] flex items-baseline gap-1.5">
                    {selectedModule.health}%
                    <span className="text-xs font-semibold text-[#52706A] capitalize">
                      ({selectedModule.status})
                    </span>
                  </div>
                </div>
              </div>

              {/* Bleaching Risk Badge */}
              <div className="shrink-0">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg uppercase whitespace-nowrap inline-flex items-center gap-1.5 border ${
                  selectedModule.coralBleachingRisk === 'High' 
                    ? 'bg-[#E56B1C]/15 text-[#9C4104] border-[#E56B1C]/30' 
                    : 'bg-[#6F8F5C]/15 text-[#37522B] border-[#6F8F5C]/30'
                }`}>
                  Bleach Risk: {selectedModule.coralBleachingRisk}
                </span>
              </div>
            </div>
          </div>

          {/* Warning Alert Banner (if applicable) */}
          {selectedModule.activeAlert && (
            <div className="p-3 bg-[#E56B1C]/10 border border-[#E56B1C]/30 rounded-2xl text-[#9C4104] flex items-start gap-2.5 text-xs">
              <AlertTriangle size={16} className="shrink-0 mt-0.5 text-[#E56B1C]" />
              <div>
                <strong className="block uppercase text-[10px] tracking-wider text-[#9C4104] font-bold">
                  Field Action Recommendation
                </strong>
                <p className="text-[11px] text-[#9C4104] leading-snug mt-0.5 font-medium">
                  {selectedModule.activeAlert}
                </p>
              </div>
            </div>
          )}

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <DetailBox label="Citizen Sightings" value={`${selectedModule.sightings} Logs`} />
            <DetailBox label="Latest Survey" value={selectedModule.lastSeen} />
            <DetailBox label="Reef Depth" value={`${selectedModule.depth} meters`} />
            <DetailBox label="Water Temp" value={`${selectedModule.temperature}°C`} />
          </div>

          {/* Target Community Species Card */}
          <div className="p-3.5 bg-[#EAF2EE] border border-[#CAD8D2] rounded-2xl">
            <div className="text-[10px] uppercase text-[#1E5D66] font-bold mb-1 tracking-wider font-mono">
              Surveyed Community Species
            </div>
            <div className="text-[#1E5D66] font-bold text-sm italic">
              {selectedModule.species}
            </div>
            <div className="text-xs text-[#3E5C56] font-medium mt-0.5">
              Common name: {selectedModule.speciesCommon}
            </div>
          </div>

          {/* Natural Environmental Properties */}
          <div className="p-3.5 bg-[#F8FAF9] border border-[#DCE5E0] rounded-2xl space-y-2 text-xs">
            <div className="flex justify-between items-center text-[#52706A] text-[11px]">
              <span className="flex items-center gap-1.5"><Droplets size={13} className="text-[#1E5D66]"/> Salinity:</span>
              <span className="font-mono text-[#153238] font-bold">{selectedModule.salinity} ppt</span>
            </div>
            <div className="flex justify-between items-center text-[#52706A] text-[11px]">
              <span className="flex items-center gap-1.5"><Heart size={13} className="text-[#6F8F5C]"/> Seawater pH:</span>
              <span className="font-mono text-[#153238] font-bold">{selectedModule.ph}</span>
            </div>
            <div className="flex justify-between items-start text-[#52706A] text-[11px] gap-2 pt-0.5">
              <span className="flex items-center gap-1.5 shrink-0"><Layers size={13} className="text-[#E56B1C]"/> Substrate:</span>
              <span className="font-sans text-[#153238] font-medium text-right leading-tight">
                {selectedModule.substrate}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons using Accent Orange #E56B1C and Primary Teal #1E5D66 */}
      <div className="space-y-2.5 mt-5">
        <button 
          id="btn-log-sighting"
          onClick={() => {
            marineAudio.playClick();
            onLogSighting();
          }}
          className="w-full py-3.5 px-4 bg-[#E56B1C] text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-[#D45E12] transition-all shadow-sm active:scale-[0.99] cursor-pointer text-sm"
        >
          <PlusCircle size={16} /> 
          <span>Log Observation Entry ({selectedModule.id})</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            id="btn-view-history"
            onClick={() => {
              marineAudio.playClick();
              onViewHistory();
            }}
            className="py-2.5 px-3 bg-white hover:bg-[#F2F7F4] text-[#1E5D66] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#CAD8D2] cursor-pointer whitespace-nowrap shadow-xs"
          >
            <FileText size={14} className="text-[#1E5D66]" />
            <span>Audit History</span>
          </button>

          <button
            id="btn-sonar-ping"
            onClick={handlePing}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all border cursor-pointer whitespace-nowrap shadow-xs ${
              pingEffect 
                ? 'bg-[#1E5D66] text-white border-[#1E5D66]' 
                : 'bg-white hover:bg-[#F2F7F4] text-[#4E6D66] border-[#CAD8D2]'
            }`}
          >
            <Sparkles size={14} className={pingEffect ? "animate-spin text-amber-200" : "text-[#1E5D66]"} />
            <span>{pingEffect ? 'Harmonic Chime...' : 'Acoustic Ping'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailBox: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="bg-[#F8FAF9] p-2.5 sm:p-3 rounded-xl border border-[#DCE5E0]">
    <div className="text-[10px] uppercase text-[#63807A] font-bold mb-0.5 tracking-wider font-mono whitespace-nowrap">
      {label}
    </div>
    <div className="text-xs sm:text-sm font-bold text-[#153238] font-mono">{value}</div>
  </div>
);

const getStatusBg = (status: ModuleStatus) => {
  switch(status) {
    case 'healthy': return 'bg-[#1E5D66]';
    case 'monitoring': return 'bg-[#6F8F5C]';
    case 'warning': return 'bg-[#E56B1C]';
    default: return 'bg-slate-500';
  }
};

const getStatusDot = (status: ModuleStatus) => {
  switch(status) {
    case 'healthy': return 'bg-[#1E5D66]';
    case 'monitoring': return 'bg-[#6F8F5C]';
    case 'warning': return 'bg-[#E56B1C]';
    default: return 'bg-slate-400';
  }
};
