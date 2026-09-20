import { MarineModule, TelemetrySummary } from '../types';

export const INITIAL_TELEMETRY: TelemetrySummary = {
  waterTemp: '26.4°C',
  visibility: '8.5m',
  salinity: '33ppt',
  tideLevel: '+1.4m Rising',
  currentSpeed: '0.4 kts NE',
  networkUptime: '99.98%'
};

export const MODULE_DATA: MarineModule[] = [
  {
    id: 'SI-HEX-001',
    codeNumber: 1,
    sector: 'North Shingle Reef (A-1)',
    gridRow: 0,
    gridCol: 0,
    status: 'healthy',
    health: 94,
    lastSeen: '18m ago',
    sightings: 19,
    species: 'Pavona decussata',
    speciesCommon: 'Cactus Coral',
    depth: 4.2,
    temperature: 26.2,
    ph: 8.18,
    salinity: 33.1,
    dissolvedOxygen: 6.9,
    substrate: '3D-Printed Terracotta Tile Substrate',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-01',
        timestamp: 'Today, 09:30',
        type: 'diver_survey',
        title: 'Reef Health Inspection',
        author: 'Marine Park Scientific Team',
        notes: 'New vertical polyp extensions observed; strong encrusting perimeter on terracotta base.',
        recordedHealth: 94
      },
      {
        id: 'H-02',
        timestamp: 'Yesterday, 14:15',
        type: 'citizen_log',
        title: 'Volunteer Snorkel Log',
        author: 'Eco-Diver Sai Kung',
        notes: 'Juvenile butterflyfish hovering around the northern crest.',
        recordedHealth: 92
      }
    ]
  },
  {
    id: 'SI-HEX-002',
    codeNumber: 2,
    sector: 'North Shingle Reef (A-2)',
    gridRow: 0,
    gridCol: 1,
    status: 'monitoring',
    health: 78,
    lastSeen: '1h ago',
    sightings: 12,
    species: 'Pomacentrus coelestis',
    speciesCommon: 'Neon Damselfish',
    depth: 5.1,
    temperature: 26.4,
    ph: 8.14,
    salinity: 33.2,
    dissolvedOxygen: 6.7,
    substrate: 'Natural Granite Boulders',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-03',
        timestamp: 'Today, 08:45',
        type: 'drone_scan',
        title: 'Acoustic Sonar Scan',
        author: 'Telemetry Drone Echo-3',
        notes: 'Moderate fish aggregation around natural crevice; water clarity stable.',
        recordedHealth: 78
      }
    ]
  },
  {
    id: 'SI-HEX-003',
    codeNumber: 3,
    sector: 'Kiu Tsui Tombolo North (A-3)',
    gridRow: 0,
    gridCol: 2,
    status: 'warning',
    health: 42,
    lastSeen: '45m ago',
    sightings: 24,
    species: 'Dictyota dichotoma',
    speciesCommon: 'Brown Macro-algae Bloom',
    depth: 3.8,
    temperature: 27.6,
    ph: 8.01,
    salinity: 32.8,
    dissolvedOxygen: 5.4,
    substrate: 'Shallow Sandbar Margin',
    coralBleachingRisk: 'High',
    activeAlert: 'Elevated thermal surface runoff; localized macroalgae overgrowth suppressing coral recruit attachment.',
    history: [
      {
        id: 'H-04',
        timestamp: 'Today, 07:12',
        type: 'sensor_alert',
        title: 'High Thermal & Algal Spike',
        author: 'Sensor SI-T-003',
        notes: 'Temperature elevated +1.2°C above baseline; algal bloom envelope expanding 1.5m south.',
        recordedHealth: 42
      },
      {
        id: 'H-05',
        timestamp: '2 days ago',
        type: 'diver_survey',
        title: 'Manual Weed Clearing',
        author: 'WWF Reef Team',
        notes: 'Cleared 3kg of competing macroalgae around target nursery frames.',
        recordedHealth: 48
      }
    ]
  },
  {
    id: 'SI-HEX-004',
    codeNumber: 4,
    sector: 'Tombolo Sandbar Shelf (A-4)',
    gridRow: 0,
    gridCol: 3,
    status: 'healthy',
    health: 89,
    lastSeen: '12m ago',
    sightings: 8,
    species: 'Platygyra acuta',
    speciesCommon: 'Brain Coral Recruits',
    depth: 4.8,
    temperature: 26.3,
    ph: 8.16,
    salinity: 33.0,
    dissolvedOxygen: 6.8,
    substrate: 'Hexagonal Bio-Rock Nursery',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-06',
        timestamp: 'Today, 10:04',
        type: 'citizen_log',
        title: 'Healthy Coral Buds Logged',
        author: 'Sai Kung Marine Watch',
        notes: 'Counted 14 distinct budding colonies on the restoration frame.',
        recordedHealth: 89
      }
    ]
  },
  {
    id: 'SI-HEX-005',
    codeNumber: 5,
    sector: 'Kiu Tau Islet Passage (A-5)',
    gridRow: 0,
    gridCol: 4,
    status: 'monitoring',
    health: 65,
    lastSeen: '2h ago',
    sightings: 16,
    species: 'Diadema setosum',
    speciesCommon: 'Long-spined Sea Urchin',
    depth: 6.5,
    temperature: 26.1,
    ph: 8.12,
    salinity: 33.3,
    dissolvedOxygen: 6.5,
    substrate: 'Rubble Field & Basalt Reef',
    coralBleachingRisk: 'Moderate',
    activeAlert: 'Urchin grazing density elevated; monitoring for bio-erosion of young coral frags.',
    history: [
      {
        id: 'H-07',
        timestamp: 'Yesterday, 16:30',
        type: 'diver_survey',
        title: 'Herbivore Population Census',
        author: 'CUHK Marine Science Lab',
        notes: 'Urchin count at 6 individuals/m²; balances algae but requires surveillance.',
        recordedHealth: 65
      }
    ]
  },
  {
    id: 'SI-HEX-006',
    codeNumber: 6,
    sector: 'Kiu Tau North Channel (A-6)',
    gridRow: 0,
    gridCol: 5,
    status: 'healthy',
    health: 91,
    lastSeen: '30m ago',
    sightings: 11,
    species: 'Turbinaria peltata',
    speciesCommon: 'Cup Coral Colony',
    depth: 7.2,
    temperature: 25.9,
    ph: 8.19,
    salinity: 33.4,
    dissolvedOxygen: 7.0,
    substrate: 'Volcanic Breccia Bedrock',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-08',
        timestamp: 'Today, 06:50',
        type: 'drone_scan',
        title: 'Current Velocity & Turbidity Pass',
        author: 'AUV Nautilus-2',
        notes: 'Strong nutrient flushing current, optimal zooxanthellae photosynthetic activity.',
        recordedHealth: 91
      }
    ]
  },
  {
    id: 'SI-HEX-007',
    codeNumber: 7,
    sector: 'West Beach Coral Fringe (B-1)',
    gridRow: 1,
    gridCol: 0,
    status: 'healthy',
    health: 96,
    lastSeen: '5m ago',
    sightings: 28,
    species: 'Lithophyllon undulatum',
    speciesCommon: 'Stone Leaf Coral',
    depth: 3.5,
    temperature: 26.3,
    ph: 8.21,
    salinity: 33.1,
    dissolvedOxygen: 7.1,
    substrate: 'Protected Sandy Lagoon Frame',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-09',
        timestamp: 'Today, 11:20',
        type: 'citizen_log',
        title: 'High Biodiversity Sighting',
        author: 'Reef Check Volunteer',
        notes: 'Vibrant green pigments under sunlight; 3 cuttlefish resting nearby.',
        recordedHealth: 96
      }
    ]
  },
  {
    id: 'SI-HEX-008',
    codeNumber: 8,
    sector: 'West Beach Nursery (B-2)',
    gridRow: 1,
    gridCol: 1,
    status: 'healthy',
    health: 87,
    lastSeen: '40m ago',
    sightings: 15,
    species: 'Acropora tumida',
    speciesCommon: 'Table Coral Micro-frag',
    depth: 5.0,
    temperature: 26.2,
    ph: 8.17,
    salinity: 33.2,
    dissolvedOxygen: 6.8,
    substrate: '3D Ceramic Hex Grid',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-10',
        timestamp: 'Today, 09:10',
        type: 'diver_survey',
        title: 'Fragment Growth Measurement',
        author: 'HK Coral Restoration Project',
        notes: 'Radial expansion measured at +4.2mm over the last 30 days.',
        recordedHealth: 87
      }
    ]
  },
  {
    id: 'SI-HEX-009',
    codeNumber: 9,
    sector: 'Central Bathymetry Drop (B-3)',
    gridRow: 1,
    gridCol: 2,
    status: 'monitoring',
    health: 72,
    lastSeen: '3h ago',
    sightings: 9,
    species: 'Amphiprion ocellaris',
    speciesCommon: 'Clownfish in Bubble Anemone',
    depth: 8.4,
    temperature: 25.8,
    ph: 8.11,
    salinity: 33.5,
    dissolvedOxygen: 6.4,
    substrate: 'Deep Benthic Slope',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-11',
        timestamp: 'Yesterday, 11:00',
        type: 'citizen_log',
        title: 'Anemone Host Verified',
        author: 'Diving Club Hong Kong',
        notes: 'Clownfish pair actively defending clutch on south-facing boulder.',
        recordedHealth: 72
      }
    ]
  },
  {
    id: 'SI-HEX-010',
    codeNumber: 10,
    sector: 'Reef Core Sanctuary (B-4)',
    gridRow: 1,
    gridCol: 3,
    status: 'healthy',
    health: 95,
    lastSeen: '22m ago',
    sightings: 34,
    species: 'Favites pentagona',
    speciesCommon: 'Honeycomb Star Coral',
    depth: 5.6,
    temperature: 26.4,
    ph: 8.20,
    salinity: 33.0,
    dissolvedOxygen: 7.2,
    substrate: 'Old Growth Ancient Coral Matrix',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-12',
        timestamp: 'Today, 08:30',
        type: 'diver_survey',
        title: 'Sanctuary Baseline Audit',
        author: 'Agriculture, Fisheries & Conservation Dept',
        notes: 'Exemplary density of macro-benthos; zero bleaching signs.',
        recordedHealth: 95
      }
    ]
  },
  {
    id: 'SI-HEX-011',
    codeNumber: 11,
    sector: 'Eastern Tidal Ridge (B-5)',
    gridRow: 1,
    gridCol: 4,
    status: 'warning',
    health: 46,
    lastSeen: '1h ago',
    sightings: 18,
    species: 'Acanthaster planci',
    speciesCommon: 'Crown-of-Thorns Starfish (COTS)',
    depth: 6.2,
    temperature: 26.8,
    ph: 8.08,
    salinity: 33.1,
    dissolvedOxygen: 5.9,
    substrate: 'Fringing Reef Edge',
    coralBleachingRisk: 'Moderate',
    activeAlert: 'Active predator predation: 2 mature COTS spotted feeding on Porites boulder corals.',
    history: [
      {
        id: 'H-13',
        timestamp: 'Today, 10:15',
        type: 'sensor_alert',
        title: 'Predation Scar Detected',
        author: 'Vision Drone Orca-1',
        notes: 'Fresh white feeding scars observed on adjacent boulder coral colonies.',
        recordedHealth: 46
      },
      {
        id: 'H-14',
        timestamp: 'Yesterday, 15:40',
        type: 'diver_survey',
        title: 'Culling Protocol Prepared',
        author: 'Marine Response Unit',
        notes: 'Targeted vinegar injection intervention planned for next high tide slack water.',
        recordedHealth: 50
      }
    ]
  },
  {
    id: 'SI-HEX-012',
    codeNumber: 12,
    sector: 'Pineapple Bun Rock Trench (B-6)',
    gridRow: 1,
    gridCol: 5,
    status: 'healthy',
    health: 88,
    lastSeen: '15m ago',
    sightings: 14,
    species: 'Plesiastrea versipora',
    speciesCommon: 'Small Knob Coral',
    depth: 4.4,
    temperature: 26.3,
    ph: 8.16,
    salinity: 33.2,
    dissolvedOxygen: 6.8,
    substrate: 'Weathered Quartz Monzonite',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-15',
        timestamp: 'Today, 09:00',
        type: 'citizen_log',
        title: 'Pineapple Rock Geosite Survey',
        author: 'HK Geopark Ambassador',
        notes: 'Underwater extension of cracked quartz boulder supports healthy encrusting sponges and corals.',
        recordedHealth: 88
      }
    ]
  },
  {
    id: 'SI-HEX-013',
    codeNumber: 13,
    sector: 'South Shoal Nursery (C-1)',
    gridRow: 2,
    gridCol: 0,
    status: 'monitoring',
    health: 76,
    lastSeen: '4h ago',
    sightings: 10,
    species: 'Chaetodon octofasciatus',
    speciesCommon: 'Eight-banded Butterflyfish',
    depth: 4.9,
    temperature: 26.5,
    ph: 8.13,
    salinity: 33.0,
    dissolvedOxygen: 6.6,
    substrate: 'Restoration Frame Alpha',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-16',
        timestamp: 'Yesterday, 17:15',
        type: 'diver_survey',
        title: 'Grazer & Corallivore Survey',
        author: 'HKUST Coastal Institute',
        notes: 'Butterflyfish pairs actively foraging; indicator of healthy polyp density.',
        recordedHealth: 76
      }
    ]
  },
  {
    id: 'SI-HEX-014',
    codeNumber: 14,
    sector: 'Inner Bay Reef Flat (C-2)',
    gridRow: 2,
    gridCol: 1,
    status: 'healthy',
    health: 93,
    lastSeen: '25m ago',
    sightings: 22,
    species: 'Goniopora columna',
    speciesCommon: 'Flowerpot Coral',
    depth: 3.9,
    temperature: 26.3,
    ph: 8.18,
    salinity: 33.1,
    dissolvedOxygen: 7.0,
    substrate: 'Lagoon Terracotta Array',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-17',
        timestamp: 'Today, 10:45',
        type: 'citizen_log',
        title: 'Polyp Extension Optimal',
        author: 'Marine Bio Volunteer',
        notes: 'Long tentacular daisy polyps waving in gentle tidal current.',
        recordedHealth: 93
      }
    ]
  },
  {
    id: 'SI-HEX-015',
    codeNumber: 15,
    sector: 'Deep Passage Point (C-3)',
    gridRow: 2,
    gridCol: 2,
    status: 'healthy',
    health: 86,
    lastSeen: '1h ago',
    sightings: 17,
    species: 'Holothuria leucospilota',
    speciesCommon: 'Black Sea Cucumber',
    depth: 9.1,
    temperature: 25.6,
    ph: 8.15,
    salinity: 33.6,
    dissolvedOxygen: 6.7,
    substrate: 'Coarse Shell Sand & Gravel',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-18',
        timestamp: 'Today, 07:40',
        type: 'drone_scan',
        title: 'Benthic Sieve Assessment',
        author: 'AUV Nautilus-1',
        notes: 'Benthic detritivore count at 4/m²; sand oxygenation excellent.',
        recordedHealth: 86
      }
    ]
  },
  {
    id: 'SI-HEX-016',
    codeNumber: 16,
    sector: 'Kiu Tau South Tip (C-4)',
    gridRow: 2,
    gridCol: 3,
    status: 'warning',
    health: 49,
    lastSeen: '50m ago',
    sightings: 13,
    species: 'Drupella rugosa',
    speciesCommon: 'Coral-eating Muricid Snail',
    depth: 5.8,
    temperature: 26.9,
    ph: 8.07,
    salinity: 33.2,
    dissolvedOxygen: 5.7,
    substrate: 'South Promontory Reef',
    coralBleachingRisk: 'Moderate',
    activeAlert: 'Localized snail infestation on Montipora frags; manual removal team alerted.',
    history: [
      {
        id: 'H-19',
        timestamp: 'Today, 09:55',
        type: 'diver_survey',
        title: 'Pest Density Alert',
        author: 'Volunteer Patrol Unit',
        notes: 'Collected 38 Drupella snails along a 10m transect.',
        recordedHealth: 49
      }
    ]
  },
  {
    id: 'SI-HEX-017',
    codeNumber: 17,
    sector: 'Eastern Outer Shoal (C-5)',
    gridRow: 2,
    gridCol: 4,
    status: 'monitoring',
    health: 79,
    lastSeen: '2h ago',
    sightings: 11,
    species: 'Pocillopora damicornis',
    speciesCommon: 'Cauliflower Coral',
    depth: 6.8,
    temperature: 26.1,
    ph: 8.14,
    salinity: 33.4,
    dissolvedOxygen: 6.8,
    substrate: 'Submerged Granite Pinnacle',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-20',
        timestamp: 'Yesterday, 13:20',
        type: 'citizen_log',
        title: 'Pinnacle Fish School',
        author: 'Sai Kung Scuba Club',
        notes: 'School of yellowtail fusiliers circling pinnacle; coral tip branching intact.',
        recordedHealth: 79
      }
    ]
  },
  {
    id: 'SI-HEX-018',
    codeNumber: 18,
    sector: 'Outer East Deep (C-6)',
    gridRow: 2,
    gridCol: 5,
    status: 'healthy',
    health: 92,
    lastSeen: '10m ago',
    sightings: 16,
    species: 'Porites lutea',
    speciesCommon: 'Massive Porites Coral',
    depth: 8.0,
    temperature: 25.9,
    ph: 8.19,
    salinity: 33.5,
    dissolvedOxygen: 7.0,
    substrate: 'Monolithic Boulder Substrate',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-21',
        timestamp: 'Today, 11:05',
        type: 'diver_survey',
        title: 'Core Colony Radiometry',
        author: 'HK Marine Science Lab',
        notes: 'Massive colony (>2.4m diameter) showing robust skeletal density.',
        recordedHealth: 92
      }
    ]
  },
  {
    id: 'SI-HEX-019',
    codeNumber: 19,
    sector: 'Southwest Shoal (D-1)',
    gridRow: 3,
    gridCol: 0,
    status: 'healthy',
    health: 90,
    lastSeen: '35m ago',
    sightings: 19,
    species: 'Chelonia mydas',
    speciesCommon: 'Green Sea Turtle (Visiting)',
    depth: 5.2,
    temperature: 26.3,
    ph: 8.18,
    salinity: 33.1,
    dissolvedOxygen: 6.9,
    substrate: 'Seagrass & Coral Mosaic',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-22',
        timestamp: 'Today, 10:20',
        type: 'citizen_log',
        title: 'Megafauna Encounter',
        author: 'Kayak Patrol HK',
        notes: 'Juvenile green sea turtle observed grazing in Halophila seagrass zone.',
        recordedHealth: 90
      }
    ]
  },
  {
    id: 'SI-HEX-020',
    codeNumber: 20,
    sector: 'South Cove Nursery (D-2)',
    gridRow: 3,
    gridCol: 1,
    status: 'monitoring',
    health: 74,
    lastSeen: '3h ago',
    sightings: 14,
    species: 'Turbinaria mesenterina',
    speciesCommon: 'Pagoda Coral',
    depth: 6.1,
    temperature: 26.2,
    ph: 8.13,
    salinity: 33.3,
    dissolvedOxygen: 6.5,
    substrate: 'Ceramic Artificial Reef Units',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-23',
        timestamp: 'Yesterday, 15:00',
        type: 'diver_survey',
        title: 'Tier-2 Tile Audit',
        author: 'HK Restoration Initiative',
        notes: 'Moderate sediment accumulation cleared using hand water jet pump.',
        recordedHealth: 74
      }
    ]
  },
  {
    id: 'SI-HEX-021',
    codeNumber: 21,
    sector: 'South Outpost Barrier (D-3)',
    gridRow: 3,
    gridCol: 2,
    status: 'healthy',
    health: 89,
    lastSeen: '14m ago',
    sightings: 21,
    species: 'Coscinaraea columna',
    speciesCommon: 'Pillar Coral',
    depth: 7.5,
    temperature: 26.0,
    ph: 8.17,
    salinity: 33.4,
    dissolvedOxygen: 6.9,
    substrate: 'Natural Basalt Ledge',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-24',
        timestamp: 'Today, 08:15',
        type: 'drone_scan',
        title: 'Telemetry Wave Action Readout',
        author: 'AUV Nautilus-1',
        notes: 'High water movement maintains clear substrate surface.',
        recordedHealth: 89
      }
    ]
  },
  {
    id: 'SI-HEX-022',
    codeNumber: 22,
    sector: 'South Channel Edge (D-4)',
    gridRow: 3,
    gridCol: 3,
    status: 'healthy',
    health: 93,
    lastSeen: '28m ago',
    sightings: 17,
    species: 'Leptastrea purpurea',
    speciesCommon: 'Crust Coral',
    depth: 6.7,
    temperature: 26.1,
    ph: 8.18,
    salinity: 33.3,
    dissolvedOxygen: 7.0,
    substrate: 'Solid Granite Outcrop',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-25',
        timestamp: 'Today, 09:40',
        type: 'diver_survey',
        title: 'Encrusting Rate Census',
        author: 'Marine Park Scientific Team',
        notes: 'Complete coverage of base rock by encrusting colonies.',
        recordedHealth: 93
      }
    ]
  },
  {
    id: 'SI-HEX-023',
    codeNumber: 23,
    sector: 'Southeast Deep Slope (D-5)',
    gridRow: 3,
    gridCol: 4,
    status: 'warning',
    health: 53,
    lastSeen: '1h ago',
    sightings: 15,
    species: 'Montipora peltiformis',
    speciesCommon: 'Velvet Coral',
    depth: 8.9,
    temperature: 27.2,
    ph: 8.06,
    salinity: 32.9,
    dissolvedOxygen: 5.8,
    substrate: 'Deep Rubble Transition',
    coralBleachingRisk: 'High',
    activeAlert: 'Early thermal paleing detected on upper plate margins.',
    history: [
      {
        id: 'H-26',
        timestamp: 'Today, 10:30',
        type: 'sensor_alert',
        title: 'Thermal Paleing Photometry',
        author: 'Spectral Sensor SI-S-023',
        notes: 'Chlorophyll-a fluorescence down 22%; early intervention shade mesh recommended if heat persists.',
        recordedHealth: 53
      }
    ]
  },
  {
    id: 'SI-HEX-024',
    codeNumber: 24,
    sector: 'Sharp Island South Lighthouse (D-6)',
    gridRow: 3,
    gridCol: 5,
    status: 'healthy',
    health: 91,
    lastSeen: '8m ago',
    sightings: 25,
    species: 'Aetobatus ocellatus',
    speciesCommon: 'Spotted Eagle Ray',
    depth: 9.8,
    temperature: 25.7,
    ph: 8.19,
    salinity: 33.6,
    dissolvedOxygen: 7.1,
    substrate: 'Outer Oceanic Gateway Boulders',
    coralBleachingRisk: 'Low',
    history: [
      {
        id: 'H-27',
        timestamp: 'Today, 11:35',
        type: 'citizen_log',
        title: 'Eagle Ray Gliding Pass',
        author: 'Dive Master Kenji',
        notes: 'Magnificent 1.8m wingspan eagle ray cruising along the south drop-off contour.',
        recordedHealth: 91
      }
    ]
  }
];
