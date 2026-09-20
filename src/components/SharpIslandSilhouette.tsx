import React from 'react';

/**
 * Exact geographical silhouette and low-poly topographical facets of
 * Sharp Island (Kiu Tsui Chau, 橋咀洲), including the Kiu Tsui Tombolo,
 * Kiu Tau Islet, and Tai Tsan Chau, precisely matching the natural coastline asset.
 */
export const SharpIslandSilhouette: React.FC = () => {
  return (
    <g id="sharp-island-landmass">
      <defs>
        {/* Exact coastline clip path matching natural geography of Sharp Island */}
        <clipPath id="sharpIslandClip">
          <path d="M 338,56 L 348,62 L 358,74 L 372,86 L 378,102 L 374,115 L 364,124 L 362,135 L 374,142 L 388,154 L 382,168 L 368,174 L 358,186 L 365,202 L 378,218 L 396,234 L 418,252 L 428,272 L 426,296 L 415,318 L 402,338 L 395,358 L 388,382 L 385,410 L 388,435 L 382,458 L 388,478 L 400,498 L 406,518 L 408,538 L 402,548 L 388,552 L 374,546 L 364,532 L 356,512 L 350,488 L 354,468 L 344,452 L 334,424 L 330,388 L 326,352 L 318,322 L 298,294 L 268,274 L 235,260 L 198,248 L 175,236 L 196,218 L 224,196 L 248,176 L 262,158 L 266,142 L 278,126 L 294,108 L 312,88 L 324,70 Z" />
        </clipPath>

        {/* Tombolo Sandbar gradient */}
        <linearGradient id="tomboloGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E3CEAA" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D1B88D" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="islandStrokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A7545" />
          <stop offset="100%" stopColor="#3B6337" />
        </linearGradient>
      </defs>

      {/* Eastern Channel Nautical / Boundary Line from image_f58586.png */}
      <path
        d="M 500,240 C 492,340 472,440 455,540"
        fill="none"
        stroke="#42A8B8"
        strokeWidth="1.8"
        strokeDasharray="6 7"
        opacity="0.85"
      />

      {/* Outer Coral Reef Flat Zone & Nursery Contour Buffer */}
      <path
        d="M 338,38 L 362,48 L 382,66 L 398,88 L 402,110 L 390,130 L 425,135 L 435,160 L 418,178 L 392,192 L 385,208 L 405,226 L 434,246 L 448,272 L 444,304 L 432,330 L 418,352 L 410,380 L 404,410 L 408,438 L 400,462 L 408,484 L 422,506 L 426,532 L 420,560 L 398,570 L 370,564 L 350,546 L 338,520 L 330,492 L 336,466 L 326,446 L 314,418 L 310,382 L 306,346 L 296,316 L 274,288 L 240,268 L 206,254 L 166,242 L 145,230 L 178,204 L 208,182 L 234,162 L 248,144 L 250,128 L 264,112 L 280,94 L 300,74 L 318,52 Z"
        fill="#D6E8DF"
        stroke="#AECFC1"
        strokeWidth="1.5"
        strokeDasharray="4 5"
        opacity="0.75"
      />

      {/* Kiu Tsui Tombolo Sandbar (connecting the western triangular promontory to Kiu Tau islet) */}
      <path
        d="M 175,236 C 145,248 115,260 70,275 L 68,285 C 115,270 148,258 178,245 Z"
        fill="url(#tomboloGradient)"
        stroke="#B89B6C"
        strokeWidth="1.2"
      />
      <path
        d="M 175,240 C 140,254 105,268 70,280"
        fill="none"
        stroke="#8C6328"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />

      {/* Detached Northeast Islet: Tai Tsan Chau (大鏟洲) from image_f58586.png */}
      <g id="tai-tsan-chau-islet">
        <polygon
          points="390,130 415,142 422,158 398,150"
          fill="#B5E1BE"
          stroke="#4A7545"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <polygon
          points="390,130 415,142 398,150"
          fill="#C8EACE"
        />
      </g>

      {/* Western Islet: Kiu Tau Islet (橋頭島) connected via tombolo */}
      <g id="kiu-tau-islet">
        <path
          d="M 52,260 C 66,252 74,270 70,298 C 66,312 50,310 46,290 C 43,276 46,266 52,260 Z"
          fill="#A5DAB0"
          stroke="#4A7545"
          strokeWidth="1.4"
        />
        <path
          d="M 52,260 C 66,252 68,280 48,290 Z"
          fill="#C2E8CB"
        />
      </g>

      {/* Main Sharp Island Body with Topographical Low-Poly Facets */}
      <g id="sharp-island-body">
        {/* Base fill behind facets */}
        <path
          d="M 338,56 L 348,62 L 358,74 L 372,86 L 378,102 L 374,115 L 364,124 L 362,135 L 374,142 L 388,154 L 382,168 L 368,174 L 358,186 L 365,202 L 378,218 L 396,234 L 418,252 L 428,272 L 426,296 L 415,318 L 402,338 L 395,358 L 388,382 L 385,410 L 388,435 L 382,458 L 388,478 L 400,498 L 406,518 L 408,538 L 402,548 L 388,552 L 374,546 L 364,532 L 356,512 L 350,488 L 354,468 L 344,452 L 334,424 L 330,388 L 326,352 L 318,322 L 298,294 L 268,274 L 235,260 L 198,248 L 175,236 L 196,218 L 224,196 L 248,176 L 262,158 L 266,142 L 278,126 L 294,108 L 312,88 L 324,70 Z"
          fill="#86C394"
        />

        {/* Clipped low-poly faceted terrain relief matching image_f58586.png */}
        <g clipPath="url(#sharpIslandClip)">
            <polygon points="338,56 372,86 345,95" fill="#C8EACE" stroke="#C8EACE" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="338,56 345,95 312,88" fill="#BCE3C4" stroke="#BCE3C4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="312,88 345,95 294,108" fill="#AEE0B7" stroke="#AEE0B7" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="345,95 372,86 378,102 356,120" fill="#C3E8CB" stroke="#C3E8CB" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="294,108 345,95 356,120 322,135" fill="#9BD7A6" stroke="#9BD7A6" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="294,108 322,135 278,126" fill="#8ECF9A" stroke="#8ECF9A" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="356,120 378,102 362,135 350,148" fill="#B1E1BB" stroke="#B1E1BB" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="362,135 388,154 382,168 350,148" fill="#A0D8AC" stroke="#A0D8AC" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="350,148 382,168 358,186 340,175" fill="#88CB96" stroke="#88CB96" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="278,126 322,135 340,175 266,142" fill="#7EC78D" stroke="#7EC78D" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="266,142 340,175 305,190 248,176" fill="#72BD82" stroke="#72BD82" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="248,176 305,190 224,196" fill="#67B377" stroke="#67B377" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="224,196 305,190 270,225 196,218" fill="#81C68F" stroke="#81C68F" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="196,218 270,225 220,240 175,236" fill="#A8DEB4" stroke="#A8DEB4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="175,236 220,240 198,248" fill="#C2E8CB" stroke="#C2E8CB" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="198,248 220,240 235,260" fill="#A2DBAF" stroke="#A2DBAF" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="235,260 220,240 270,225 268,274" fill="#90D09E" stroke="#90D09E" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="305,190 340,175 358,186 365,202 345,220" fill="#99D4A6" stroke="#99D4A6" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="305,190 345,220 270,225" fill="#88CB97" stroke="#88CB97" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="345,220 365,202 378,218 360,245" fill="#A7DCB4" stroke="#A7DCB4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="270,225 345,220 360,245 320,265" fill="#7ABA89" stroke="#7ABA89" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="270,225 320,265 268,274" fill="#6EAF7E" stroke="#6EAF7E" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="365,202 378,218 396,234 375,255" fill="#BCE3C4" stroke="#BCE3C4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="378,218 418,252 428,272 375,255" fill="#C9EACF" stroke="#C9EACF" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="375,255 428,272 426,296 370,290" fill="#AEE0B7" stroke="#AEE0B7" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="360,245 375,255 370,290 320,265" fill="#94CF9F" stroke="#94CF9F" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="268,274 320,265 370,290 298,294" fill="#7EBC8D" stroke="#7EBC8D" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="298,294 370,290 415,318 350,325" fill="#90CD9E" stroke="#90CD9E" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="298,294 350,325 318,322" fill="#76B485" stroke="#76B485" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="350,325 415,318 402,338 365,355" fill="#9FD5AC" stroke="#9FD5AC" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="318,322 350,325 365,355 326,352" fill="#6FA87D" stroke="#6FA87D" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="326,352 365,355 395,358 355,385" fill="#81BD8F" stroke="#81BD8F" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="326,352 355,385 330,388" fill="#68A578" stroke="#68A578" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="355,385 395,358 388,382 385,410" fill="#93CFA2" stroke="#93CFA2" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="330,388 355,385 385,410 334,424" fill="#76B385" stroke="#76B385" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="334,424 385,410 388,435 350,440" fill="#86C394" stroke="#86C394" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="334,424 350,440 344,452" fill="#6EA87C" stroke="#6EA87C" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="350,440 388,435 382,458 365,470" fill="#9FD5AC" stroke="#9FD5AC" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="344,452 350,440 365,470 354,468" fill="#7CB98B" stroke="#7CB98B" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="354,468 365,470 388,478 350,488" fill="#89C598" stroke="#89C598" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="365,470 382,458 388,478 400,498 375,505" fill="#A8DEB4" stroke="#A8DEB4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="350,488 365,470 375,505 356,512" fill="#73B082" stroke="#73B082" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="375,505 400,498 406,518 385,530" fill="#BCE3C4" stroke="#BCE3C4" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="356,512 375,505 385,530 364,532" fill="#8ECF9D" stroke="#8ECF9D" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="385,530 406,518 408,538 402,548 388,552" fill="#C9EACF" stroke="#C9EACF" strokeWidth="0.8" strokeLinejoin="round" />
            <polygon points="364,532 385,530 388,552 374,546" fill="#97D2A4" stroke="#97D2A4" strokeWidth="0.8" strokeLinejoin="round" />
        </g>

        {/* Exact Natural Coastline Contour Edge */}
        <path
          d="M 338,56 L 348,62 L 358,74 L 372,86 L 378,102 L 374,115 L 364,124 L 362,135 L 374,142 L 388,154 L 382,168 L 368,174 L 358,186 L 365,202 L 378,218 L 396,234 L 418,252 L 428,272 L 426,296 L 415,318 L 402,338 L 395,358 L 388,382 L 385,410 L 388,435 L 382,458 L 388,478 L 400,498 L 406,518 L 408,538 L 402,548 L 388,552 L 374,546 L 364,532 L 356,512 L 350,488 L 354,468 L 344,452 L 334,424 L 330,388 L 326,352 L 318,322 L 298,294 L 268,274 L 235,260 L 198,248 L 175,236 L 196,218 L 224,196 L 248,176 L 262,158 L 266,142 L 278,126 L 294,108 L 312,88 L 324,70 Z"
          fill="none"
          stroke="url(#islandStrokeGradient)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </g>

      {/* Natural Field Labels */}
      <text x="35" y="248" fill="#3D5A47" fontSize="9.5" fontWeight="bold" letterSpacing="0.5">
        KIU TAU
      </text>
      <text x="75" y="252" fill="#8C6328" fontSize="8.5" fontWeight="600">
        Tombolo Sandbar (Low Tide)
      </text>

      <text x="424" y="148" fill="#3D5A47" fontSize="8.5" fontWeight="600">
        Tai Tsan Chau
      </text>

      <text 
        x="315" 
        y="315" 
        textAnchor="middle" 
        fill="#FFFFFF" 
        fontSize="13" 
        fontWeight="bold" 
        letterSpacing="1"
        style={{ filter: 'drop-shadow(0px 1px 2px rgba(20, 45, 35, 0.6))' }}
      >
        SHARP ISLAND
      </text>
      <text 
        x="315" 
        y="333" 
        textAnchor="middle" 
        fill="#E8F4EE" 
        fontSize="9.5" 
        fontWeight="600"
        style={{ filter: 'drop-shadow(0px 1px 2px rgba(20, 45, 35, 0.5))' }}
      >
        Kiu Tsui Chau Core Sanctuary
      </text>

      <text x="362" y="176" fill="#244E45" fontSize="9" fontWeight="600">
        • Pineapple Bun Geosite
      </text>
    </g>
  );
};
