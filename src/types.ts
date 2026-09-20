export type ModuleStatus = 'healthy' | 'monitoring' | 'warning';

export interface HistoryEvent {
  id: string;
  timestamp: string;
  type: 'diver_survey' | 'drone_scan' | 'citizen_log' | 'sensor_alert';
  title: string;
  author: string;
  notes: string;
  recordedHealth: number;
}

export interface MarineModule {
  id: string;
  codeNumber: number;
  sector: string;
  gridRow: number;
  gridCol: number;
  status: ModuleStatus;
  health: number; // 0 - 100
  lastSeen: string;
  sightings: number;
  species: string;
  speciesCommon: string;
  depth: number; // meters
  temperature: number; // Celsius
  ph: number;
  salinity: number; // ppt
  dissolvedOxygen: number; // mg/L
  substrate: string;
  coralBleachingRisk: 'Low' | 'Moderate' | 'High';
  activeAlert?: string;
  history: HistoryEvent[];
}

export interface TelemetrySummary {
  waterTemp: string;
  visibility: string;
  salinity: string;
  tideLevel: string;
  currentSpeed: string;
  networkUptime: string;
}
