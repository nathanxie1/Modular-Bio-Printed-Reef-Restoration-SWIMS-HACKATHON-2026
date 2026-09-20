import React, { useState, useEffect } from 'react';
import { 
  X, 
  PlusCircle, 
  Send, 
  CheckCircle2, 
  User, 
  FileText, 
  AlertTriangle 
} from 'lucide-react';
import { MarineModule } from '../types';
import { marineAudio } from '../utils/audio';
import { SpeciesSelector } from './SpeciesSelector';
import { HKSpecies, HONG_KONG_50_SPECIES } from '../data/hongKongSpecies';

interface LogSightingModalProps {
  module: MarineModule | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveSighting: (moduleId: string, sightingData: {
    author: string;
    title: string;
    notes: string;
    species?: string;
    healthAdjustment: number;
  }) => void;
}

export const LogSightingModal: React.FC<LogSightingModalProps> = ({
  module,
  isOpen,
  onClose,
  onSaveSighting
}) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<HKSpecies>(HONG_KONG_50_SPECIES[0]);
  const [healthScore, setHealthScore] = useState<number>(module ? module.health : 85);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (module) {
      setHealthScore(module.health);
      if (module.species) {
        const found = HONG_KONG_50_SPECIES.find(
          s => s.scientificName.toLowerCase() === module.species.toLowerCase()
        );
        if (found) {
          setSelectedSpecies(found);
        }
      }
    }
  }, [module]);

  if (!isOpen || !module) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !notes.trim()) return;

    marineAudio.playSonarPing();
    onSaveSighting(module.id, {
      author: author.trim() || 'Citizen Diver (Sai Kung)',
      title: title.trim(),
      notes: notes.trim(),
      species: `${selectedSpecies.scientificName} (${selectedSpecies.commonName})`,
      healthAdjustment: healthScore
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setTitle('');
      setNotes('');
      setAuthor('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-[#CAD8D2] rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto custom-scrollbar shadow-2xl text-[#153238]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E3ECE7] bg-[#F5F8F6] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E56B1C]/10 border border-[#E56B1C]/20 text-[#E56B1C]">
              <PlusCircle size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1E5D66] font-display">
                Log Sighting Observation
              </h3>
              <p className="text-xs text-[#52706A] font-mono">
                Tile ID: {module.id} • {module.speciesCommon}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
              Observer / Diver Name
            </label>
            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Elena Kwan (Sai Kung Coral Survey)"
              className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3.5 py-2.5 text-xs text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white"
            />
          </div>

          {/* Searchable 50 Species Selector */}
          <div>
            <SpeciesSelector
              selectedScientificName={selectedSpecies.scientificName}
              onSelectSpecies={(sp) => {
                setSelectedSpecies(sp);
                if (!title) {
                  setTitle(`${sp.commonName} Colony / Sighting`);
                }
              }}
              label="Observed Species (Search 50 Species)"
              idPrefix="modal-species"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
              Observation Heading
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Coral Recruit Emergence / Grazer Count"
              className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3.5 py-2.5 text-xs text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase text-[#52706A] mb-1 font-mono">
              Survey Field Notes
            </label>
            <textarea
              required
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Detail coral polyp coloration, presence of damselfish or urchins, water clarity, or any signs of algal encroachment..."
              className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl px-3.5 py-2.5 text-xs text-[#153238] focus:outline-none focus:border-[#1E5D66] focus:bg-white resize-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[11px] font-bold uppercase text-[#52706A] font-mono">
                Assessed Health Score
              </label>
              <span className="font-mono text-sm font-bold text-[#1E5D66]">
                {healthScore}%
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={healthScore}
              onChange={(e) => setHealthScore(parseInt(e.target.value))}
              className="w-full accent-[#1E5D66] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#6A8780] font-mono mt-0.5">
              <span>Severe Stress (20%)</span>
              <span>Moderate (60%)</span>
              <span>Optimal Growth (100%)</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSuccess}
              className="w-full py-3 px-4 bg-[#E56B1C] hover:bg-[#D45E12] text-white font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {isSuccess ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Observation Recorded!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Submit Field Observation</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
