import React from 'react';
import { 
  Thermometer, 
  Eye, 
  Droplets, 
  Waves, 
  Compass, 
  Sparkles,
  Pin
} from 'lucide-react';
import { TelemetrySummary } from '../types';
import { marineAudio } from '../utils/audio';

interface HeaderProps {
  telemetry: TelemetrySummary;
  audioEnabled?: boolean;
  onToggleAudio?: () => void;
  sonarActive: boolean;
  onToggleSonar: () => void;
  activeCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  telemetry,
  audioEnabled,
  onToggleAudio,
  sonarActive,
  onToggleSonar,
  activeCount,
  totalCount
}) => {
  return (
    <header className="mb-8 border-b border-[#D8E3DE] pb-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        
        {/* Title & Brand Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1E5D66] font-display">
                Sharp Island Marine Project
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#6F8F5C]/15 text-[#37522B] border border-[#6F8F5C]/30">
                <span className="w-2 h-2 rounded-full bg-[#6F8F5C] animate-pulse" />
                Active Citizen Divers
              </span>
            </div>

            <p className="text-[#4E6B65] text-sm font-medium mt-1">
              Step 1: Serial Number &amp; Biodiversity Science • Hong Kong Marine Park
            </p>

            {/* Nature's Palette Strip from the Moodboard */}
            <div className="flex items-center gap-2 mt-3 text-xs text-[#52706A]">
              <span className="font-semibold text-[#1E5D66] text-[11px] uppercase tracking-wider">Nature&apos;s Palette:</span>
              <div className="flex items-center h-4 rounded-md overflow-hidden border border-[#CAD8D2] shadow-xs">
                <span className="w-8 h-full bg-[#1E5D66]" title="Primary Teal (#1E5D66)" />
                <span className="w-8 h-full bg-[#6F8F5C]" title="Moss Green (#6F8F5C)" />
                <span className="w-8 h-full bg-[#E56B1C]" title="Accent Orange (#E56B1C)" />
              </div>
              <span className="text-[11px] font-mono text-[#52706A] ml-1">
                #1E5D66 • #6F8F5C • #E56B1C
              </span>
            </div>
          </div>
        </div>

        {/* Pinned Note from Reference Image */}
        <div className="relative paper-note border border-[#D5DFD9] rounded-2xl p-4 max-w-sm w-full lg:w-auto shadow-sm transform rotate-[0.5deg] hover:rotate-0 transition-transform">
          {/* Pushpin icon */}
          <div className="absolute -top-2.5 right-6 w-5 h-5 rounded-full bg-[#1E5D66] border-2 border-white shadow-sm flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>

          <div className="text-[11px] font-bold uppercase tracking-wider text-[#1E5D66] font-display mb-0.5 flex items-center gap-1.5">
            <Pin size={12} className="text-[#E56B1C]" />
            MISSION
          </div>
          <p className="text-xs text-[#2A4441] leading-snug font-medium">
            Connect people with nature and contribute to biodiversity science. Sharp Island, HK.
          </p>
        </div>
      </div>

      {/* Environmental Field Conditions Ribbon */}
      <div className="mt-6 pt-5 border-t border-[#E1EAE5] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <StatWidget 
            icon={<Thermometer size={14} className="text-[#E56B1C]" />} 
            label="Water Temp" 
            value={telemetry.waterTemp} 
          />
          <StatWidget 
            icon={<Eye size={14} className="text-[#1E5D66]" />} 
            label="Visibility" 
            value={telemetry.visibility} 
          />
          <StatWidget 
            icon={<Droplets size={14} className="text-[#1E5D66]" />} 
            label="Salinity" 
            value={telemetry.salinity} 
          />
          <StatWidget 
            icon={<Waves size={14} className="text-[#6F8F5C]" />} 
            label="Tide Level" 
            value={telemetry.tideLevel} 
          />
          <StatWidget 
            icon={<Compass size={14} className="text-[#6F8F5C]" />} 
            label="Tidal Current" 
            value={telemetry.currentSpeed} 
          />
        </div>

        {/* Gentle Natural Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-toggle-sonar"
            onClick={() => {
              marineAudio.playClick();
              onToggleSonar();
            }}
            title={sonarActive ? "Hide Current Flow & Depth Rings" : "Show Current Flow & Depth Rings"}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 border cursor-pointer ${
              sonarActive 
                ? 'bg-[#1E5D66] text-white border-[#1E5D66] shadow-xs' 
                : 'bg-white text-[#4A6761] border-[#CAD8D2] hover:bg-[#EDF3EF]'
            }`}
          >
            <Sparkles size={13} className={sonarActive ? "text-amber-200" : "text-[#1E5D66]"} />
            <span>Tidal Flow View</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const StatWidget: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ 
  icon, 
  label, 
  value
}) => (
  <div className="flex items-center gap-2 bg-white border border-[#DCE5E0] px-3 py-1.5 rounded-xl shadow-xs">
    <div className="p-1 rounded-lg bg-[#F2F6F3]">{icon}</div>
    <div className="flex items-baseline gap-1.5">
      <span className="text-[10px] uppercase font-bold text-[#63807A] tracking-wider font-mono">{label}:</span>
      <span className="text-xs font-bold text-[#153238] font-mono">{value}</span>
    </div>
  </div>
);

