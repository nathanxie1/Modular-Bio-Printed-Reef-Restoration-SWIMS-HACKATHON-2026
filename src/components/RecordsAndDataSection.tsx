import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  TrendingUp, 
  Database, 
  User, 
  Calendar, 
  Hash, 
  FileText 
} from 'lucide-react';
import { MarineModule } from '../types';
import { marineAudio } from '../utils/audio';
import { SpeciesSelector } from './SpeciesSelector';
import { HKSpecies, HONG_KONG_50_SPECIES } from '../data/hongKongSpecies';

interface RecordsAndDataSectionProps {
  selectedModule: MarineModule | null;
  onSaveObservation: (moduleId: string, log: {
    author: string;
    title: string;
    notes: string;
    species: string;
    count: number;
  }) => void;
  recentLogs: Array<{
    id: string;
    serial: string;
    species: string;
    diver: string;
    dateTime: string;
  }>;
}

export const RecordsAndDataSection: React.FC<RecordsAndDataSectionProps> = ({
  selectedModule,
  onSaveObservation,
  recentLogs
}) => {
  const [serialNumber, setSerialNumber] = useState<string>(selectedModule?.id || 'SI-HEX-001');
  const [selectedSpecies, setSelectedSpecies] = useState<HKSpecies>(HONG_KONG_50_SPECIES[0]);
  const [count, setCount] = useState<number>(4);
  const [diverName, setDiverName] = useState<string>('Alex Wong (Sai Kung Eco)');
  const [notes, setNotes] = useState<string>('Active healthy polyps, juvenile shelter observed around terracotta crevices.');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync serial number if selected module changes
  useEffect(() => {
    if (selectedModule) {
      setSerialNumber(selectedModule.id);
      if (selectedModule.species) {
        const found = HONG_KONG_50_SPECIES.find(
          s => s.scientificName.toLowerCase() === selectedModule.species.toLowerCase()
        );
        if (found) {
          setSelectedSpecies(found);
        }
      }
    }
  }, [selectedModule]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialNumber.trim()) return;

    onSaveObservation(serialNumber, {
      author: diverName.trim() || 'Citizen Diver',
      title: `${selectedSpecies.scientificName} Survey (${count} counted)`,
      notes: notes.trim() || 'Citizen observation logged.',
      species: `${selectedSpecies.scientificName} (${selectedSpecies.commonName})`,
      count
    });

    marineAudio.playSonarPing();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNotes('');
    }, 2000);
  };

  return (
    <section className="mt-8 pt-8 border-t border-[#D5E1DB]">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E5D66] font-display">
          RECORDS &amp; DATA
        </h2>
        <p className="text-xs text-[#52706A] font-medium">
          (Citizen Science Observation Entry • Live Community Biodiversity Feed)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Card: Citizen Science Log-in / Observation Entry Form */}
        <div className="lg:col-span-4 bg-white border border-[#CAD8D2] rounded-3xl p-5 sm:p-6 shadow-xs relative">
          <div className="flex items-center gap-2 text-sm font-bold text-[#1E5D66] font-display mb-1">
            <User size={16} className="text-[#E56B1C]" />
            <h3>Citizen Science Log-in</h3>
          </div>
          <p className="text-xs text-[#52706A] mb-4">
            Record individuals seen, behaviors, and reef health
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs text-[#153238]">
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
                Serial Number
              </label>
              <div className="relative">
                <input 
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  placeholder="e.g. SI-HEX-001"
                  required
                  className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3 py-2 text-xs font-mono font-bold text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white"
                />
              </div>
            </div>

            {/* Comprehensive Searchable Species Selector (50 Species with Search Bar & 4 Categories) */}
            <div>
              <SpeciesSelector
                selectedScientificName={selectedSpecies.scientificName}
                onSelectSpecies={(sp) => setSelectedSpecies(sp)}
                label="Species Selection"
                idPrefix="citizen-form-species"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
                  Count
                </label>
                <input 
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                  className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3 py-2 text-xs font-mono font-bold text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
                  Diver Name
                </label>
                <input 
                  type="text"
                  value={diverName}
                  onChange={(e) => setDiverName(e.target.value)}
                  className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3 py-2 text-xs font-medium text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
                Observation Entry
              </label>
              <textarea 
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Count of individuals, health status, bleaching, shelter usage..."
                className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3 py-2 text-xs text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-[#E56B1C] hover:bg-[#D45E12] text-white font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={15} />
                  <span>Observation Submitted!</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Submit Observation</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Section: Live Community Feed & Pinned Total Species Logged Chart */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Live Community Feed Table */}
          <div className="bg-white border border-[#CAD8D2] rounded-3xl p-5 shadow-xs overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E5D66] font-display">
                <Database size={16} className="text-[#6F8F5C]" />
                <h3>Live Community Feed</h3>
              </div>
              <span className="text-[11px] font-mono text-[#52706A] font-semibold">
                Biodiversity Database • Sharp Island
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#153238]">
                <thead>
                  <tr className="border-b border-[#E1EBE6] text-[#52706A] text-[11px] uppercase font-mono font-bold">
                    <th className="py-2.5 px-3">Serial Number</th>
                    <th className="py-2.5 px-3">Species</th>
                    <th className="py-2.5 px-3">Diver</th>
                    <th className="py-2.5 px-3">Date / Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDF3EF]">
                  {recentLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-[#F8FAF9] transition-colors">
                      <td className="py-2.5 px-3 font-mono font-bold text-[#1E5D66]">
                        {log.serial}
                      </td>
                      <td className="py-2.5 px-3 italic font-semibold">
                        {log.species}
                      </td>
                      <td className="py-2.5 px-3 text-[#52706A]">
                        {log.diver}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-[#6A8780] text-[11px]">
                        {log.dateTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pinned Mini Chart: Total Species Logged */}
          <div className="relative paper-note border border-[#CAD8D2] rounded-3xl p-5 shadow-xs bg-[#FBFDFB]">
            {/* Pushpin at top */}
            <div className="absolute -top-3 right-8 w-6 h-6 rounded-full bg-[#1E5D66] border-2 border-white shadow-md flex items-center justify-center pin-shadow">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-[#1E5D66]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E5D66] font-display">
                  Total Species Logged (Biodiversity Recovery Trend)
                </h4>
              </div>
              <span className="text-xs font-bold font-mono text-[#E56B1C] bg-[#E56B1C]/10 px-2 py-0.5 rounded-md">
                +42% Species Growth
              </span>
            </div>

            {/* Stylized Bar & Curve Chart matching the moodboard pinned sketch */}
            <div className="h-28 w-full flex items-end gap-2 sm:gap-3 pt-3 px-2 border-b border-[#D5DFD9]">
              {[
                { month: 'May', count: 18 },
                { month: 'Jun', count: 24 },
                { month: 'Jul', count: 32 },
                { month: 'Aug', count: 45 },
                { month: 'Sep', count: 58 },
                { month: 'Oct', count: 72 },
                { month: 'Nov', count: 88 },
                { month: 'Dec', count: 104 },
                { month: 'Jan', count: 120 },
                { month: 'Feb', count: 142 },
                { month: 'Mar', count: 168 }
              ].map((item, idx) => {
                const heightPercent = Math.round((item.count / 180) * 100);
                return (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-1 group">
                    <div className="w-full bg-[#EBF1ED] rounded-t-md relative flex items-end h-20 overflow-hidden">
                      <div 
                        className={`w-full transition-all duration-500 rounded-t-md ${
                          idx >= 8 ? 'bg-[#1E5D66]' : 'bg-[#6F8F5C]'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-[#6A8780]">{item.month}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#6A8780] font-mono mt-2">
              <span>Baseline Tile Deployment (May)</span>
              <span>Active Citizen Diver Observations (March • Peak Biodiversity)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
