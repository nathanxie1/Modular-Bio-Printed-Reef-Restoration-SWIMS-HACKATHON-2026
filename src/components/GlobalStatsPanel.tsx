import React from 'react';
import { 
  BarChart3, 
  ShieldAlert, 
  Filter, 
  MapPin, 
  ChevronRight,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MarineModule, ModuleStatus } from '../types';
import { marineAudio } from '../utils/audio';

interface GlobalStatsPanelProps {
  modules: MarineModule[];
  filterStatus: ModuleStatus | 'all';
  onSelectFilter: (status: ModuleStatus | 'all') => void;
  onSelectModule: (module: MarineModule) => void;
}

export const GlobalStatsPanel: React.FC<GlobalStatsPanelProps> = ({
  modules,
  filterStatus,
  onSelectFilter,
  onSelectModule
}) => {
  const healthyCount = modules.filter(m => m.status === 'healthy').length;
  const monitoringCount = modules.filter(m => m.status === 'monitoring').length;
  const warningCount = modules.filter(m => m.status === 'warning').length;

  const warningModules = modules.filter(m => m.status === 'warning');

  const averageHealth = Math.round(
    modules.reduce((acc, curr) => acc + curr.health, 0) / (modules.length || 1)
  );

  return (
    <div className="space-y-5 text-[#153238]">
      {/* Network Overview Card */}
      <section className="bg-white border border-[#D5E1DB] p-5 rounded-3xl shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-[#1E5D66] uppercase tracking-wider flex items-center gap-2 font-display">
            <BarChart3 size={15} className="text-[#1E5D66]" /> Biodiversity Index
          </h3>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-[#1E5D66]/10 text-[#1E5D66] border border-[#1E5D66]/20">
            Avg {averageHealth}% Health
          </span>
        </div>

        <div className="space-y-3.5">
          <ProgressBar label="Hard Coral Cover" value={68} color="bg-[#1E5D66]" metric="68%" />
          <ProgressBar label="Target Fish Density" value={82} color="bg-[#6F8F5C]" metric="82%" />
          <ProgressBar label="Grazer Urchin Balance" value={74} color="bg-[#1E5D66]" metric="74%" />
          <ProgressBar label="Bleaching Resilience" value={77} color="bg-[#6F8F5C]" metric="77%" />
        </div>
      </section>

      {/* Interactive Status Filters */}
      <section className="bg-white border border-[#D5E1DB] p-5 rounded-3xl shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#1E5D66] uppercase tracking-wider flex items-center gap-2 font-display">
            <Filter size={14} className="text-[#1E5D66]" /> Reef Tiles Filter
          </h3>
          {filterStatus !== 'all' && (
            <button
              onClick={() => {
                marineAudio.playClick();
                onSelectFilter('all');
              }}
              className="text-xs text-[#E56B1C] hover:underline font-semibold cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        <div className="space-y-2">
          <FilterOption
            isActive={filterStatus === 'all'}
            onClick={() => {
              marineAudio.playClick();
              onSelectFilter('all');
            }}
            indicator="bg-[#1E5D66]"
            label="All Restoration Tiles"
            desc="24 Monitored Hexagons"
            count={modules.length}
          />
          <FilterOption
            isActive={filterStatus === 'healthy'}
            onClick={() => {
              marineAudio.playClick();
              onSelectFilter('healthy');
            }}
            indicator="bg-[#1E5D66]"
            label="Optimum Coral Health"
            desc="Active growth & high cover"
            count={healthyCount}
          />
          <FilterOption
            isActive={filterStatus === 'monitoring'}
            onClick={() => {
              marineAudio.playClick();
              onSelectFilter('monitoring');
            }}
            indicator="bg-[#6F8F5C]"
            label="Active Field Monitoring"
            desc="Nursery tiles & sightings"
            count={monitoringCount}
          />
          <FilterOption
            isActive={filterStatus === 'warning'}
            onClick={() => {
              marineAudio.playAlert();
              onSelectFilter('warning');
            }}
            indicator="bg-[#E56B1C]"
            label="Intervention Needed"
            desc="Algae bloom / heat stress"
            count={warningCount}
          />
        </div>
      </section>

      {/* Active Field Alerts Feed */}
      {warningModules.length > 0 && (
        <section className="bg-[#FFF8F3] border border-[#E56B1C]/30 p-4 rounded-3xl shadow-xs">
          <div className="flex items-center gap-2 text-[#9C4104] text-xs font-bold uppercase tracking-wider mb-2.5 font-display">
            <ShieldAlert size={16} className="text-[#E56B1C]" />
            <span>Priority Field Alerts ({warningModules.length})</span>
          </div>
          <div className="space-y-2">
            {warningModules.map(wm => (
              <div 
                key={wm.id}
                onClick={() => {
                  marineAudio.playClick();
                  onSelectModule(wm);
                }}
                className="group cursor-pointer p-3 rounded-2xl bg-white border border-[#F2D7C5] hover:border-[#E56B1C] transition-all flex items-center justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E56B1C]">{wm.id}</span>
                    <span className="text-[11px] text-[#52706A]">({wm.speciesCommon})</span>
                  </div>
                  <p className="text-xs text-[#2A4441] line-clamp-1 mt-0.5 font-medium">
                    {wm.activeAlert || 'Inspection recommended'}
                  </p>
                </div>
                <ChevronRight size={15} className="text-[#E56B1C] group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Field Location Card */}
      <div className="p-4 rounded-3xl bg-white border border-[#D5E1DB] text-xs text-[#52706A] space-y-1.5 shadow-xs">
        <div className="flex items-center gap-2 text-[#1E5D66] font-bold uppercase tracking-wider text-[10px] font-display">
          <MapPin size={13} className="text-[#E56B1C]" /> Geographic Sanctuary
        </div>
        <p className="text-[#324C46] leading-relaxed">
          Kiu Tsui Chau (Sharp Island) Marine Reserve, Sai Kung, Hong Kong. Coordinates: 22°21&apos;48&quot;N 114°17&apos;32&quot;E.
        </p>
      </div>
    </div>
  );
};

const ProgressBar: React.FC<{ label: string; value: number; color: string; metric: string }> = ({ 
  label, 
  value, 
  color, 
  metric 
}) => (
  <div>
    <div className="flex justify-between text-xs mb-1 font-semibold">
      <span className="text-[#52706A]">{label}</span>
      <span className="text-[#153238] font-mono font-bold">{metric}</span>
    </div>
    <div className="h-2 w-full bg-[#EBF1ED] rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} rounded-full transition-all duration-700`} 
        style={{ width: `${value}%` }} 
      />
    </div>
  </div>
);

const FilterOption: React.FC<{
  isActive: boolean;
  onClick: () => void;
  indicator: string;
  label: string;
  desc: string;
  count: number;
}> = ({ isActive, onClick, indicator, label, desc, count }) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
      isActive 
        ? 'bg-[#EAF2EE] border-[#1E5D66]/40 shadow-xs' 
        : 'bg-[#F9FAF9] border-transparent hover:bg-[#F0F5F2] hover:border-[#DCE5E0]'
    }`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-2.5 h-8 rounded-full ${indicator}`} />
      <div>
        <div className="text-xs font-bold text-[#153238] leading-tight">{label}</div>
        <div className="text-[11px] text-[#52706A] leading-tight mt-0.5">{desc}</div>
      </div>
    </div>
    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg bg-white border border-[#D5E1DB] text-[#1E5D66]">
      {count}
    </span>
  </button>
);
