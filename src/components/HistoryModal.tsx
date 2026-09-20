import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  FileText, 
  User, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Download,
  Plus
} from 'lucide-react';
import { MarineModule, HistoryEvent } from '../types';
import { marineAudio } from '../utils/audio';

interface HistoryModalProps {
  module: MarineModule | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLogSighting: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  module,
  isOpen,
  onClose,
  onOpenLogSighting
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !module) return null;

  const handleExport = () => {
    marineAudio.playClick();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(module, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${module.id}_sharp_island_audit_log.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#CAD8D2] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-[#153238]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E3ECE7] bg-[#F5F8F6]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#1E5D66]/10 border border-[#1E5D66]/20 text-[#1E5D66]">
              <FileText size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-mono text-[#1E5D66]">
                  {module.id} — Ecological History &amp; Survey Audit
                </h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                  module.status === 'healthy' 
                    ? 'bg-[#1E5D66]/15 text-[#1E5D66] border border-[#1E5D66]/30' 
                    : module.status === 'monitoring'
                    ? 'bg-[#6F8F5C]/15 text-[#37522B] border border-[#6F8F5C]/30'
                    : 'bg-[#E56B1C]/15 text-[#9C4104] border border-[#E56B1C]/30'
                }`}>
                  {module.status}
                </span>
              </div>
              <p className="text-xs text-[#52706A] mt-0.5 font-medium">
                {module.sector} • Depth: {module.depth}m • Substrate: {module.substrate}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              marineAudio.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-[#153238] hover:bg-[#EBF1ED] rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 flex-1 text-[#153238]">
          {/* Summary Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8FAF9] p-4 rounded-2xl border border-[#DCE5E0]">
            <div>
              <span className="text-[10px] text-[#52706A] font-mono uppercase block">Health Score</span>
              <span className="text-xl font-extrabold font-mono text-[#1E5D66]">{module.health}%</span>
            </div>
            <div>
              <span className="text-[10px] text-[#52706A] font-mono uppercase block">Total Sightings</span>
              <span className="text-xl font-extrabold font-mono text-[#153238]">{module.sightings}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#52706A] font-mono uppercase block">Water Temp</span>
              <span className="text-xl font-extrabold font-mono text-[#E56B1C]">{module.temperature}°C</span>
            </div>
            <div>
              <span className="text-[10px] text-[#52706A] font-mono uppercase block">Salinity</span>
              <span className="text-xl font-extrabold font-mono text-[#6F8F5C]">{module.salinity} ppt</span>
            </div>
          </div>

          {/* Timeline Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-bold text-[#1E5D66] uppercase tracking-wider font-display flex items-center gap-2">
                <Clock size={14} className="text-[#1E5D66]" /> Observation &amp; Survey Timeline
              </h4>
              <button
                onClick={() => {
                  marineAudio.playClick();
                  onClose();
                  onOpenLogSighting();
                }}
                className="text-xs font-semibold text-[#E56B1C] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus size={14} /> Add Observation
              </button>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#DCE5E0]">
              {module.history.map((event: HistoryEvent) => {
                const icon = getEventIcon(event.type);
                return (
                  <div key={event.id} className="relative flex items-start gap-4 pl-1">
                    <div className="z-10 p-1.5 rounded-full bg-white border-2 border-[#1E5D66] shadow-xs">
                      {icon}
                    </div>
                    <div className="flex-1 bg-[#F9FAF9] p-4 rounded-2xl border border-[#DCE5E0] hover:border-[#CAD8D2] transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#153238]">
                            {event.title}
                          </span>
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-md bg-[#EBF1EE] text-[#47665F] font-semibold">
                            {event.type.replace('_', ' ')}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#6A8780]">
                          {event.timestamp}
                        </span>
                      </div>
                      <p className="text-xs text-[#324C46] leading-relaxed mb-3">
                        {event.notes}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-[#E1EBE6] text-[11px] text-[#52706A]">
                        <span className="flex items-center gap-1.5">
                          <User size={13} className="text-[#6F8F5C]" /> {event.author}
                        </span>
                        <span className="font-mono font-bold text-[#1E5D66]">
                          Health Recorded: {event.recordedHealth}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#E3ECE7] bg-[#F5F8F6] flex justify-between items-center">
          <button
            onClick={handleExport}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#1E5D66] border border-[#CAD8D2] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Download size={14} />
            <span>{downloaded ? 'Audit Log Exported!' : 'Export JSON Audit'}</span>
          </button>
          <button
            onClick={() => {
              marineAudio.playClick();
              onClose();
            }}
            className="px-5 py-2 bg-[#1E5D66] hover:bg-[#16474E] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};

const getEventIcon = (type: string) => {
  switch (type) {
    case 'diver_survey':
      return <User size={12} className="text-[#1E5D66]" />;
    case 'sensor_alert':
      return <AlertTriangle size={12} className="text-[#E56B1C]" />;
    case 'citizen_log':
      return <CheckCircle2 size={12} className="text-[#6F8F5C]" />;
    default:
      return <Activity size={12} className="text-[#1E5D66]" />;
  }
};
