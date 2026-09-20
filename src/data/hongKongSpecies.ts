export interface HKSpecies {
  id: string;
  scientificName: string;
  commonName: string;
  category: SpeciesCategory;
  categoryCode: 'coral' | 'invertebrate' | 'fish' | 'algae';
}

export type SpeciesCategory = 
  | 'Hard Corals (Scleractinia)'
  | 'Invertebrates & Benthic Grazers'
  | 'Reef Fish & Conservation Targets'
  | 'Macroalgae, Microhabitats & Others';

export const SPECIES_CATEGORIES: {
  name: SpeciesCategory;
  shortName: string;
  code: 'coral' | 'invertebrate' | 'fish' | 'algae';
  color: string;
  borderColor: string;
  bgColor: string;
  count: number;
}[] = [
  {
    name: 'Hard Corals (Scleractinia)',
    shortName: 'Hard Corals',
    code: 'coral',
    color: 'text-[#1E5D66]',
    borderColor: 'border-[#1E5D66]/30',
    bgColor: 'bg-[#1E5D66]/10',
    count: 12
  },
  {
    name: 'Invertebrates & Benthic Grazers',
    shortName: 'Invertebrates',
    code: 'invertebrate',
    color: 'text-[#6F8F5C]',
    borderColor: 'border-[#6F8F5C]/30',
    bgColor: 'bg-[#6F8F5C]/10',
    count: 13
  },
  {
    name: 'Reef Fish & Conservation Targets',
    shortName: 'Reef Fish',
    code: 'fish',
    color: 'text-[#1E5D66]',
    borderColor: 'border-[#1E5D66]/30',
    bgColor: 'bg-[#1E5D66]/10',
    count: 15
  },
  {
    name: 'Macroalgae, Microhabitats & Others',
    shortName: 'Macroalgae & Others',
    code: 'algae',
    color: 'text-[#E56B1C]',
    borderColor: 'border-[#E56B1C]/30',
    bgColor: 'bg-[#E56B1C]/10',
    count: 10
  }
];

export const HONG_KONG_50_SPECIES: HKSpecies[] = [
  // 1. Hard Corals (Scleractinia) - 12 species
  {
    id: 'sp-01',
    scientificName: 'Pavona decussata',
    commonName: 'Frond/Plate Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-02',
    scientificName: 'Platygyra sinensis',
    commonName: 'Brain Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-03',
    scientificName: 'Porites lobata',
    commonName: 'Lobe Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-04',
    scientificName: 'Favites chinensis',
    commonName: 'Honeycomb Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-05',
    scientificName: 'Goniastrea favulus',
    commonName: 'Star Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-06',
    scientificName: 'Cyphastrea serailia',
    commonName: 'Knobby Star Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-07',
    scientificName: 'Montipora peltiformis',
    commonName: 'Plate Montipora',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-08',
    scientificName: 'Acropora tumida',
    commonName: 'Staghorn Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-09',
    scientificName: 'Hydnophora exesa',
    commonName: 'Monticular Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-10',
    scientificName: 'Dipsastraea speciosa',
    commonName: 'Large-polyp Brain Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-11',
    scientificName: 'Turbinaria peltata',
    commonName: 'Cup Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },
  {
    id: 'sp-12',
    scientificName: 'Psammocora contigua',
    commonName: 'Rugose Coral',
    category: 'Hard Corals (Scleractinia)',
    categoryCode: 'coral'
  },

  // 2. Invertebrates & Benthic Grazers - 13 species
  {
    id: 'sp-13',
    scientificName: 'Anthocidaris crassispina',
    commonName: 'Black Sea Urchin',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-14',
    scientificName: 'Diadema setosum',
    commonName: 'Long-spined Sea Urchin',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-15',
    scientificName: 'Tripneustes gratilla',
    commonName: 'Collector Urchin',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-16',
    scientificName: 'Pinna bicolor',
    commonName: 'Bicolor Pen Shell',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-17',
    scientificName: 'Lithophaga spp.',
    commonName: 'Boring Bivalves',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-18',
    scientificName: 'Saccostrea cucullata',
    commonName: 'Hooded Oyster',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-19',
    scientificName: 'Chiton spp.',
    commonName: 'Coat-of-Mail Shells',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-20',
    scientificName: 'Protula bispiralis',
    commonName: 'Spiraling Tube Worm',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-21',
    scientificName: 'Sabellastarte indica',
    commonName: 'Feather Duster Worm',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-22',
    scientificName: 'Eucidaris metularia',
    commonName: 'Slate-pencil Urchin',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-23',
    scientificName: 'Holothuria leucospilota',
    commonName: 'Black Sea Cucumber',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-24',
    scientificName: 'Gonodactylaceus falcatus',
    commonName: 'Mantis Shrimp',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },
  {
    id: 'sp-25',
    scientificName: 'Dardanus megistos',
    commonName: 'Whitespotted Hermit Crab',
    category: 'Invertebrates & Benthic Grazers',
    categoryCode: 'invertebrate'
  },

  // 3. Reef Fish & Conservation Targets - 15 species
  {
    id: 'sp-26',
    scientificName: 'Epinephelus lanceolatus',
    commonName: 'Longtooth / Giant Grouper',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-27',
    scientificName: 'Acanthopagrus berda',
    commonName: 'Yellowfin / Threadfin Porgy',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-28',
    scientificName: 'Abudefduf vaigiensis',
    commonName: 'Indo-Pacific Sergeant Damselfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-29',
    scientificName: 'Pomacentrus coelestis',
    commonName: 'Neon Damselfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-30',
    scientificName: 'Chromis fumea',
    commonName: 'Smoky Chromis',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-31',
    scientificName: 'Halichoeres nigrescens',
    commonName: 'Bubblefin Wrasse',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-32',
    scientificName: 'Thalassoma lunare',
    commonName: 'Moon Wrasse',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-33',
    scientificName: 'Scaridae',
    commonName: 'Parrotfish - unspecified/general',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-34',
    scientificName: 'Chaetodon wiebeli',
    commonName: 'Black-headed Butterflyfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-35',
    scientificName: 'Heniochus acuminatus',
    commonName: 'Longfin Bannerfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-36',
    scientificName: 'Siganus fuscescens',
    commonName: 'Mottled Spinefoot / Rabbitfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-37',
    scientificName: 'Ambassis spp.',
    commonName: 'Glassfish / Pygmy Sweeper',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-38',
    scientificName: 'Apogon spp.',
    commonName: 'Cardinalfish',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-39',
    scientificName: 'Ecsenius bicolor',
    commonName: 'Bicolor Blenny',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },
  {
    id: 'sp-40',
    scientificName: 'Plectorhinchus cinctus',
    commonName: 'Crescent Sweetlips',
    category: 'Reef Fish & Conservation Targets',
    categoryCode: 'fish'
  },

  // 4. Macroalgae, Microhabitats & Others - 10 species
  {
    id: 'sp-41',
    scientificName: 'Hippocampus kuda',
    commonName: 'Yellow Seahorse',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-42',
    scientificName: 'Crustose Coralline Algae (CCA)',
    commonName: 'Encrusting pink algae',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-43',
    scientificName: 'Sargassum spp.',
    commonName: 'Brown Macroalgae / Sargassum beds',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-44',
    scientificName: 'Padina minor',
    commonName: 'Blade-like Brown Alga',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-45',
    scientificName: 'Halimeda macroloba',
    commonName: 'Calcified Green Alga',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-46',
    scientificName: 'Ulva lactuca',
    commonName: 'Sea Lettuce',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-47',
    scientificName: 'Dictyota dichotoma',
    commonName: 'Forked Brown Alga',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-48',
    scientificName: 'Codium spp.',
    commonName: "Dead Man's Fingers Alga",
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-49',
    scientificName: 'Gorgonian Sea Fans',
    commonName: 'Alcyonacea / Soft Corals',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  },
  {
    id: 'sp-50',
    scientificName: 'Zoanthus spp.',
    commonName: 'Colonial Zoanthids',
    category: 'Macroalgae, Microhabitats & Others',
    categoryCode: 'algae'
  }
];
