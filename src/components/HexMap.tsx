import React, { useState } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MapPin, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { MarineModule, ModuleStatus } from '../types';
import { marineAudio } from '../utils/audio';

interface HexMapProps {
  modules: MarineModule[];
  selectedModule: MarineModule | null;
  onSelectModule: (module: MarineModule) => void;
  filterStatus: ModuleStatus | 'all';
  sonarActive: boolean;
}

export const HexMap: React.FC<HexMapProps> = ({
  modules,
  selectedModule,
  onSelectModule,
  filterStatus,
  sonarActive
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showBathymetry, setShowBathymetry] = useState<boolean>(true);
  const [hoveredModule, setHoveredModule] = useState<MarineModule | null>(null);

  const handleZoomIn = () => {
    marineAudio.playClick();
    setZoomLevel(prev => Math.min(prev + 0.15, 1.4));
  };

  const handleZoomOut = () => {
    marineAudio.playClick();
    setZoomLevel(prev => Math.max(prev - 0.15, 0.85));
  };

  const handleResetZoom = () => {
    marineAudio.playClick();
    setZoomLevel(1);
  };

  return (
    <div className="relative w-full h-full min-h-[520px] bg-[#EAF2EE] border border-[#D5E1DB] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center group shadow-xs select-none">
      {/* Top Map Header & Controls */}
      <div className="absolute top-4 left-5 right-5 z-20 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#1E5D66] bg-white/90 px-3.5 py-1.5 rounded-full border border-[#CAD8D2] shadow-xs backdrop-blur-sm pointer-events-auto">
          <MapPin size={13} className="text-[#E56B1C]" />
          <span>Sharp Island Restoration Grid • Kiu Tsui Chau</span>
        </div>

        {/* Map Control Tools */}
        <div className="flex items-center gap-1 bg-white/90 border border-[#CAD8D2] p-1 rounded-xl shadow-xs backdrop-blur-sm pointer-events-auto">
          <button
            onClick={() => {
              marineAudio.playClick();
              setShowBathymetry(!showBathymetry);
            }}
            title="Toggle Depth Contours"
            className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
              showBathymetry ? 'text-[#1E5D66] bg-[#1E5D66]/10 font-bold' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            <Layers size={14} />
          </button>
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1.5 rounded-lg text-slate-500 hover:text-[#1E5D66] hover:bg-[#F2F7F4] transition-colors cursor-pointer"
          >
            <ZoomIn size={14} />
          </button>
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1.5 rounded-lg text-slate-500 hover:text-[#1E5D66] hover:bg-[#F2F7F4] transition-colors cursor-pointer"
          >
            <ZoomOut size={14} />
          </button>
          <button
            onClick={handleResetZoom}
            title="Reset Scale"
            className="p-1.5 rounded-lg text-slate-500 hover:text-[#1E5D66] hover:bg-[#F2F7F4] transition-colors cursor-pointer"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Interactive Map Canvas Wrapper */}
      <div 
        className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {/* Coastal Waters & Marine Sanctuary SVG */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 600 600"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gentle Sea Gradient */}
            <radialGradient id="seaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D9ECE7" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E4EFEA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EEF6F2" stopOpacity="0.3" />
            </radialGradient>

            {/* Island Landmass: Moss Green */}
            <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E9F6A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#638251" stopOpacity="0.9" />
            </linearGradient>

            {/* Tombolo Sandbar Gradient: Sandy Ochre */}
            <linearGradient id="tomboloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E3CEAA" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#D1B88D" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Background Ambient Sea Wash */}
          <circle cx="300" cy="300" r="290" fill="url(#seaGlow)" />

          {/* Depth Contours (Natural Field Style) */}
          {showBathymetry && (
            <g opacity="0.65">
              <ellipse cx="300" cy="300" rx="275" ry="260" fill="none" stroke="#B8D0C7" strokeWidth="1.2" strokeDasharray="6 8" />
              <ellipse cx="300" cy="300" rx="220" ry="210" fill="none" stroke="#ADC7BE" strokeWidth="1" strokeDasharray="5 7" />
              <ellipse cx="300" cy="300" rx="165" ry="155" fill="none" stroke="#A2BEB5" strokeWidth="1" strokeDasharray="4 6" />
              <text x="310" y="50" fill="#4B7067" fontSize="10" fontFamily="sans-serif" fontWeight="500">15m Marine Depth</text>
              <text x="310" y="100" fill="#4B7067" fontSize="10" fontFamily="sans-serif" fontWeight="500">10m Coral Reef Flat</text>
              <text x="310" y="155" fill="#4B7067" fontSize="10" fontFamily="sans-serif" fontWeight="500">5m Shallow Nursery</text>
            </g>
          )}

          {/* Sharp Island (Kiu Tsui Chau) Landmass */}
          <g>
            {/* Outer Reef Flat Zone */}
            <path
              d="M 230,80 
                 C 320,60 410,130 420,220 
                 C 430,300 450,380 390,470 
                 C 340,540 230,520 180,440 
                 C 140,380 160,290 190,210 
                 Z"
              fill="#D6E7E0"
              stroke="#B3CDC2"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              opacity="0.8"
            />

            {/* Main Sharp Island Body */}
            <path
              d="M 260,110 
                 C 340,90 390,150 400,220 
                 C 410,290 415,360 370,440 
                 C 320,500 230,480 200,410 
                 C 170,350 180,280 210,200 
                 Z"
              fill="url(#islandGradient)"
              stroke="#4E6D3E"
              strokeWidth="2"
            />

            {/* Kiu Tsui Tombolo Sandbar */}
            <path
              d="M 200,250 
                 C 150,240 100,230 70,220 
                 C 65,225 65,230 75,238 
                 C 110,255 160,265 195,270 
                 Z"
              fill="url(#tomboloGradient)"
              stroke="#B89B6C"
              strokeWidth="1.5"
            />

            {/* Kiu Tau Islet */}
            <ellipse
              cx="50"
              cy="215"
              rx="28"
              ry="22"
              fill="url(#islandGradient)"
              stroke="#4E6D3E"
              strokeWidth="1.5"
            />

            {/* Natural Field Labels */}
            <text x="35" y="180" fill="#3D5A47" fontSize="10" fontWeight="bold" letterSpacing="0.5">
              KIU TAU ISLET
            </text>
            <text x="80" y="275" fill="#8C6328" fontSize="9" fontWeight="600">
              Tombolo Sandbar (Low Tide)
            </text>
            <text x="245" y="315" fill="#FFFFFF" fontSize="13" fontWeight="bold" letterSpacing="1">
              SHARP ISLAND
            </text>
            <text x="250" y="333" fill="#E8F2EC" fontSize="10">
              Kiu Tsui Chau Core Sanctuary
            </text>
            <text x="340" y="175" fill="#244E45" fontSize="9" fontWeight="600">
              • Pineapple Bun Geosite
            </text>
          </g>

          {/* Gentle Tidal Flow Vector Waves */}
          {sonarActive && (
            <g opacity="0.35">
              <path d="M 120,100 Q 180,120 240,100 T 360,100" fill="none" stroke="#1E5D66" strokeWidth="1.5" strokeDasharray="6 6" />
              <path d="M 100,380 Q 180,410 260,390 T 400,390" fill="none" stroke="#1E5D66" strokeWidth="1.5" strokeDasharray="6 6" />
              <path d="M 280,490 Q 360,520 440,500 T 520,500" fill="none" stroke="#1E5D66" strokeWidth="1.5" strokeDasharray="6 6" />
            </g>
          )}

          {/* Field Compass Rose */}
          <g transform="translate(545, 60)" opacity="0.85">
            <circle cx="0" cy="0" r="20" fill="#FFFFFF" stroke="#CAD8D2" strokeWidth="1.2" />
            <line x1="0" y1="-18" x2="0" y2="18" stroke="#CAD8D2" strokeWidth="1" />
            <line x1="-18" y1="0" x2="18" y2="0" stroke="#CAD8D2" strokeWidth="1" />
            <polygon points="0,-16 3,-5 -3,-5" fill="#1E5D66" />
            <polygon points="0,16 3,5 -3,5" fill="#8DA69E" />
            <text x="-3.5" y="-7" fill="#1E5D66" fontSize="9" fontWeight="bold" fontFamily="sans-serif">N</text>
          </g>
        </svg>

        {/* 24 Hexagonal Restoration Tiles Overlay */}
        <div className="relative z-10 p-6 md:p-10">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5">
            {modules.map((module) => {
              const isSelected = selectedModule?.id === module.id;
              const isDimmed = filterStatus !== 'all' && filterStatus !== module.status;
              const statusColor = module.status;

              return (
                <div key={module.id} className="relative group/hex flex items-center justify-center">
                  <button
                    id={`hex-node-${module.codeNumber}`}
                    onClick={() => {
                      if (module.status === 'warning') {
                        marineAudio.playAlert();
                      } else {
                        marineAudio.playClick();
                      }
                      onSelectModule(module);
                    }}
                    onMouseEnter={() => setHoveredModule(module)}
                    onMouseLeave={() => setHoveredModule(null)}
                    aria-label={`Select node ${module.id}, status ${module.status}`}
                    className={`
                      relative w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 transition-all duration-300 
                      hover:scale-110 active:scale-95 focus:outline-none flex items-center justify-center cursor-pointer
                      ${isDimmed ? 'opacity-25 hover:opacity-100 grayscale' : 'opacity-100'}
                      ${statusColor === 'healthy' ? 'text-[#1E5D66]' : ''}
                      ${statusColor === 'monitoring' ? 'text-[#6F8F5C]' : ''}
                      ${statusColor === 'warning' ? 'text-[#E56B1C]' : ''}
                    `}
                  >
                    <HexShape status={statusColor} isSelected={isSelected} />
                    
                    {/* Inner Tile Identifier & Health % */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className={`text-[11px] sm:text-xs font-extrabold font-mono ${
                        isSelected ? 'text-white' : 'text-[#153238]'
                      }`}>
                        {module.codeNumber}
                      </span>
                      <span className={`text-[8px] font-bold uppercase tracking-tight font-mono ${
                        isSelected ? 'text-white/90' : 'text-[#48635E]'
                      }`}>
                        {module.health}%
                      </span>
                    </div>

                    {/* Active Selected Marker */}
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-full border-2 border-[#1E5D66] animate-ping pointer-events-none opacity-40" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Hover Field Card */}
      {hoveredModule && (
        <div className="absolute bottom-12 left-5 z-30 pointer-events-none hidden sm:flex items-center gap-3 bg-white border border-[#CAD8D2] px-4 py-2.5 rounded-2xl shadow-md animate-in fade-in duration-150">
          <div className={`w-3 h-3 rounded-full ${getStatusDotColor(hoveredModule.status)}`} />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#1E5D66]">{hoveredModule.id}</span>
              <span className="text-[10px] uppercase font-bold text-[#56746E]">• {hoveredModule.status}</span>
            </div>
            <div className="text-xs text-[#153238] font-semibold italic">
              {hoveredModule.species} <span className="not-italic font-normal text-slate-500">({hoveredModule.speciesCommon})</span>
            </div>
          </div>
          <div className="border-l border-[#DCE5E0] pl-3 text-right">
            <div className="text-[9px] text-slate-400 uppercase font-mono">Health</div>
            <div className="text-xs font-bold text-[#1E5D66] font-mono">{hoveredModule.health}%</div>
          </div>
        </div>
      )}

      {/* Bottom Sector Coordinates Footer */}
      <div className="absolute bottom-3 left-5 right-5 z-20 flex justify-between items-center text-[10px] text-[#55736D] font-medium pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1E5D66]" />
          <span>Kiu Tsui Chau / Sharp Island Marine Ecological Reserve</span>
        </div>
        <div className="hidden sm:block text-[#68857E]">
          Hong Kong UNESCO Global Geopark Zone
        </div>
      </div>
    </div>
  );
};

// Subcomponent: Hexagonal Shape SVG with Nature's Palette
export const HexShape: React.FC<{ status: ModuleStatus; isSelected: boolean }> = ({ 
  status, 
  isSelected 
}) => {
  let fill = '#1E5D66';
  let stroke = '#1E5D66';
  let opacity = 0.22;

  if (status === 'healthy') {
    fill = isSelected ? '#1E5D66' : '#1E5D66';
    stroke = '#1E5D66';
    opacity = isSelected ? 0.95 : 0.25;
  } else if (status === 'monitoring') {
    fill = isSelected ? '#6F8F5C' : '#6F8F5C';
    stroke = '#6F8F5C';
    opacity = isSelected ? 0.95 : 0.25;
  } else if (status === 'warning') {
    fill = isSelected ? '#E56B1C' : '#E56B1C';
    stroke = '#E56B1C';
    opacity = isSelected ? 0.95 : 0.3;
  }

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`w-full h-full transition-transform duration-300 ${isSelected ? 'scale-115' : ''}`}
    >
      <path 
        d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
        fill={fill}
        fillOpacity={opacity}
        stroke={stroke}
        strokeWidth={isSelected ? "4" : "2.2"}
        className="transition-all"
      />
    </svg>
  );
};

const getStatusDotColor = (status: ModuleStatus) => {
  switch (status) {
    case 'healthy': return 'bg-[#1E5D66]';
    case 'monitoring': return 'bg-[#6F8F5C]';
    case 'warning': return 'bg-[#E56B1C]';
    default: return 'bg-slate-400';
  }
};
