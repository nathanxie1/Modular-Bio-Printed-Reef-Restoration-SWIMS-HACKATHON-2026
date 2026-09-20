import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, 
  X, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Sparkles,
  Layers,
  Fish,
  Anchor,
  Leaf
} from 'lucide-react';
import { 
  HKSpecies, 
  HONG_KONG_50_SPECIES, 
  SPECIES_CATEGORIES, 
  SpeciesCategory 
} from '../data/hongKongSpecies';
import { marineAudio } from '../utils/audio';

interface SpeciesSelectorProps {
  selectedScientificName: string;
  onSelectSpecies: (species: HKSpecies) => void;
  label?: string;
  idPrefix?: string;
}

export const SpeciesSelector: React.FC<SpeciesSelectorProps> = ({
  selectedScientificName,
  onSelectSpecies,
  label = "Species Selection",
  idPrefix = "species-picker"
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<SpeciesCategory | 'All'>('All');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Identify current selected species object
  const currentSpecies = useMemo(() => {
    return (
      HONG_KONG_50_SPECIES.find(
        s => s.scientificName.toLowerCase() === selectedScientificName.toLowerCase()
      ) || HONG_KONG_50_SPECIES[0]
    );
  }, [selectedScientificName]);

  // Filter species based on category and search query
  const filteredSpecies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return HONG_KONG_50_SPECIES.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;
      const matchScientific = item.scientificName.toLowerCase().includes(query);
      const matchCommon = item.commonName.toLowerCase().includes(query);
      return matchScientific || matchCommon;
    });
  }, [searchQuery, activeCategory]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const handleSelect = (species: HKSpecies) => {
    marineAudio.playClick();
    onSelectSpecies(species);
    setIsOpen(false);
  };

  const getCategoryIcon = (categoryCode: string) => {
    switch (categoryCode) {
      case 'coral':
        return <Layers size={13} className="text-[#1E5D66]" />;
      case 'invertebrate':
        return <Anchor size={13} className="text-[#6F8F5C]" />;
      case 'fish':
        return <Fish size={13} className="text-[#1E5D66]" />;
      case 'algae':
        return <Leaf size={13} className="text-[#E56B1C]" />;
      default:
        return <Tag size={13} />;
    }
  };

  const getCategoryBadgeClass = (categoryCode: string) => {
    switch (categoryCode) {
      case 'coral':
        return 'bg-[#1E5D66]/10 text-[#1E5D66] border-[#1E5D66]/25';
      case 'invertebrate':
        return 'bg-[#6F8F5C]/15 text-[#385429] border-[#6F8F5C]/30';
      case 'fish':
        return 'bg-[#1E5D66]/10 text-[#1E5D66] border-[#1E5D66]/25';
      case 'algae':
        return 'bg-[#E56B1C]/10 text-[#9C4104] border-[#E56B1C]/25';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="relative w-full text-xs text-[#153238]" ref={containerRef}>
      {/* Label and Helper */}
      <div className="flex items-center justify-between mb-1.5">
        <label 
          htmlFor={`${idPrefix}-button`}
          className="block text-[11px] font-bold uppercase text-[#52706A] font-mono tracking-wide"
        >
          {label}
        </label>
        <span className="text-[10px] font-mono text-[#6A8780] font-medium">
          50 Local HK &amp; Sharp Island Species
        </span>
      </div>

      {/* Main Trigger Button / Current Selection Display */}
      <button
        type="button"
        id={`${idPrefix}-button`}
        onClick={() => {
          marineAudio.playClick();
          setIsOpen(!isOpen);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full min-h-[50px] p-3 rounded-2xl bg-[#F8FAF9] hover:bg-white border transition-all text-left flex items-center justify-between gap-3 shadow-xs cursor-pointer ${
          isOpen 
            ? 'border-[#1E5D66] ring-2 ring-[#1E5D66]/15 bg-white' 
            : 'border-[#CAD8D2] hover:border-[#1E5D66]/60'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-white border border-[#D5E1DB] flex items-center justify-center shrink-0 shadow-2xs">
            {getCategoryIcon(currentSpecies.categoryCode)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[#1E5D66] italic font-display truncate">
                {currentSpecies.scientificName}
              </span>
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md border font-mono ${getCategoryBadgeClass(currentSpecies.categoryCode)}`}>
                {currentSpecies.category.split(' ')[0]}
              </span>
            </div>
            <div className="text-[11px] text-[#4A6660] font-medium truncate mt-0.5">
              {currentSpecies.commonName}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[#52706A] shrink-0">
          <span className="text-[10px] font-mono uppercase hidden sm:inline-block font-semibold">
            {isOpen ? 'Close' : 'Browse'}
          </span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Dropdown / Floating Search Panel */}
      {isOpen && (
        <div 
          className="absolute z-50 left-0 right-0 top-full mt-2 bg-white border border-[#CAD8D2] rounded-3xl shadow-xl p-3 sm:p-4 animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col max-h-[460px] min-w-[300px]"
          role="listbox"
        >
          {/* Search Bar */}
          <div className="relative mb-3">
            <Search 
              size={15} 
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#52706A]" 
            />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 50 species by common or scientific name..."
              className="w-full bg-[#F4F7F5] border border-[#CAD8D2] rounded-xl pl-9 pr-8 py-2.5 text-xs text-[#153238] font-medium placeholder:text-[#7B948E] focus:outline-none focus:border-[#1E5D66] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7B948E] hover:text-[#153238] rounded-full"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* 4 Clean Category Filter Tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 custom-scrollbar no-scrollbar select-none">
            <button
              type="button"
              onClick={() => {
                marineAudio.playClick();
                setActiveCategory('All');
              }}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold font-mono transition-all cursor-pointer border ${
                activeCategory === 'All'
                  ? 'bg-[#1E5D66] text-white border-[#1E5D66] shadow-xs'
                  : 'bg-[#F4F7F5] text-[#52706A] border-[#DCE5E0] hover:bg-white hover:text-[#153238]'
              }`}
            >
              All (50)
            </button>

            {SPECIES_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                type="button"
                onClick={() => {
                  marineAudio.playClick();
                  setActiveCategory(cat.name);
                }}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold font-mono transition-all cursor-pointer border ${
                  activeCategory === cat.name
                    ? `${cat.bgColor} ${cat.color} ${cat.borderColor} ring-1 ring-current shadow-xs`
                    : 'bg-[#F4F7F5] text-[#52706A] border-[#DCE5E0] hover:bg-white hover:text-[#153238]'
                }`}
              >
                {cat.shortName} ({cat.count})
              </button>
            ))}
          </div>

          {/* Species Counter Status */}
          <div className="flex items-center justify-between px-1 py-1 mb-1 text-[10px] text-[#6A8780] font-mono border-b border-[#EDF3EF]">
            <span>Showing {filteredSpecies.length} of 50 species</span>
            {activeCategory !== 'All' && (
              <span className="font-semibold text-[#1E5D66] truncate max-w-[180px]">
                {activeCategory}
              </span>
            )}
          </div>

          {/* Scrollable Species Results List (Mobile-Optimized Touch Targets ≥44px) */}
          <div className="overflow-y-auto custom-scrollbar flex-1 space-y-1.5 pr-1 max-h-[280px]">
            {filteredSpecies.length === 0 ? (
              <div className="py-8 text-center text-[#6A8780]">
                <p className="text-xs font-semibold mb-1">No species found matching &ldquo;{searchQuery}&rdquo;</p>
                <p className="text-[11px] text-[#7B948E]">
                  Try searching by genus (e.g. <em>Pavona</em>, <em>Platygyra</em>) or common name (e.g. <em>Urchin</em>, <em>Grouper</em>).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                  className="mt-3 px-3 py-1.5 bg-[#F4F7F5] text-[#1E5D66] font-bold rounded-lg border border-[#CAD8D2] hover:bg-white text-xs cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredSpecies.map(sp => {
                const isSelected = sp.scientificName.toLowerCase() === currentSpecies.scientificName.toLowerCase();

                return (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => handleSelect(sp)}
                    className={`w-full min-h-[44px] p-2.5 rounded-xl text-left transition-all flex items-center justify-between gap-2.5 cursor-pointer ${
                      isSelected 
                        ? 'bg-[#EAF2EE] border border-[#1E5D66]/40 shadow-xs' 
                        : 'hover:bg-[#F4F7F5] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6 h-6 rounded-lg bg-white border border-[#D5E1DB] flex items-center justify-center shrink-0">
                        {getCategoryIcon(sp.categoryCode)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold italic font-display ${
                            isSelected ? 'text-[#1E5D66]' : 'text-[#153238]'
                          }`}>
                            {sp.scientificName}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#4A6660] font-medium leading-tight mt-0.5">
                          {sp.commonName}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border hidden sm:inline-block ${getCategoryBadgeClass(sp.categoryCode)}`}>
                        {sp.categoryCode}
                      </span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#1E5D66] text-white flex items-center justify-center shadow-xs">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Quick Footer */}
          <div className="mt-2 pt-2 border-t border-[#EDF3EF] flex items-center justify-between text-[10px] text-[#6A8780] font-mono">
            <span>Click any species to select</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-[#1E5D66] font-bold hover:underline cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
