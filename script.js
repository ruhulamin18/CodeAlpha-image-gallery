/**
 * LUMINA PHOTO ARCHIVE - JAVASCRIPT CORE
 * Pure Vanilla ES6+ Application Engine
 * Zero Framework Dependencies
 */

/* ==========================================================================
   1. Photographic Dataset & Technical EXIF Metadata
   ========================================================================== */
const BASE_GALLERY_DATA = [
  {
    id: 1,
    title: "Alpine Glaciers & Dawn Light",
    category: "nature",
    location: "Zermatt, Swiss Alps",
    photographer: "Luca Zanon",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000 (4K UHD)",
    likes: 342,
    tags: ["mountains", "sunset", "nature", "snow"],
    exif: {
      camera: "Sony Alpha A7R V",
      lens: "FE 24-70mm F2.8 GM II",
      aperture: "f/2.8",
      shutter: "1/800s",
      iso: "100",
      focal: "35mm"
    },
    palette: ["#1b2735", "#3a4a58", "#9cb2c9", "#e2dedb", "#f9b282"]
  },
  {
    id: 2,
    title: "Kyoto Torii Path at Dawn",
    category: "travel",
    location: "Fushimi Inari, Kyoto, Japan",
    photographer: "Kenji Sato",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=70",
    resolution: "5800 × 3867",
    likes: 489,
    tags: ["ancient", "travel", "japan", "heritage"],
    exif: {
      camera: "Fujifilm X-T5",
      lens: "XF 16-55mm f/2.8 R LM",
      aperture: "f/4.0",
      shutter: "1/250s",
      iso: "200",
      focal: "23mm"
    },
    palette: ["#191516", "#d34327", "#f38a58", "#5c5652", "#e8ded2"]
  },
  {
    id: 3,
    title: "Minimalist Concrete Cantilever",
    category: "architecture",
    location: "Rotterdam, Netherlands",
    photographer: "Elena Rostova",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=70",
    resolution: "5472 × 3648",
    likes: 215,
    tags: ["minimal", "urban", "architecture", "concrete"],
    exif: {
      camera: "Canon EOS R5",
      lens: "RF 15-35mm F2.8L IS",
      aperture: "f/8.0",
      shutter: "1/500s",
      iso: "100",
      focal: "18mm"
    },
    palette: ["#121316", "#3f4247", "#84878e", "#cbd0d8", "#f4f6fa"]
  },
  {
    id: 4,
    title: "Elder Artisan in Studio",
    category: "people",
    location: "Fez Medina, Morocco",
    photographer: "Tariq Mansoor",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 620,
    tags: ["portrait", "people", "artisan", "morocco"],
    exif: {
      camera: "Leica SL2-S",
      lens: "Summilux-SL 50mm f/1.4",
      aperture: "f/1.4",
      shutter: "1/160s",
      iso: "400",
      focal: "50mm"
    },
    palette: ["#231713", "#5c3c2b", "#a97852", "#d8b08c", "#f3e1ce"]
  },
  {
    id: 5,
    title: "Emerald Lake & Pine Reflections",
    category: "nature",
    location: "Banff National Park, Canada",
    photographer: "Liam Vance",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=70",
    resolution: "6240 × 4160",
    likes: 512,
    tags: ["mountains", "nature", "coastal", "reflections"],
    exif: {
      camera: "Nikon Z7 II",
      lens: "NIKKOR Z 24-70mm f/2.8 S",
      aperture: "f/5.6",
      shutter: "1/320s",
      iso: "64",
      focal: "28mm"
    },
    palette: ["#0f2427", "#1d4b4a", "#3b7a70", "#89aba1", "#dfedea"]
  },
  {
    id: 6,
    title: "Santorini Cliffside Sunburst",
    category: "travel",
    location: "Oia, Cyclades, Greece",
    photographer: "Sofia Karas",
    src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=70",
    resolution: "5760 × 3840",
    likes: 740,
    tags: ["coastal", "sunset", "travel", "greece"],
    exif: {
      camera: "Sony Alpha A7 IV",
      lens: "FE 16-35mm F2.8 GM",
      aperture: "f/8.0",
      shutter: "1/640s",
      iso: "100",
      focal: "21mm"
    },
    palette: ["#142850", "#27496d", "#0c7b93", "#00a8cc", "#f4f9f9"]
  },
  {
    id: 7,
    title: "Curvilinear Glass & Steel Atrium",
    category: "architecture",
    location: "Baku, Azerbaijan",
    photographer: "Zaid Al-Hassan",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 318,
    tags: ["urban", "architecture", "minimal", "glass"],
    exif: {
      camera: "Hasselblad X2D 100C",
      lens: "XCD 21mm f/4",
      aperture: "f/11.0",
      shutter: "1/125s",
      iso: "64",
      focal: "21mm"
    },
    palette: ["#0b132b", "#1c2541", "#3a506b", "#5bc0be", "#f0f8ff"]
  },
  {
    id: 8,
    title: "Street Musician in Rain",
    category: "people",
    location: "Montmartre, Paris, France",
    photographer: "Camille Dubois",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=70",
    resolution: "5400 × 3600",
    likes: 580,
    tags: ["portrait", "people", "urban", "paris"],
    exif: {
      camera: "Fujifilm GFX 100S",
      lens: "GF 110mm f/2 R LM WR",
      aperture: "f/2.0",
      shutter: "1/200s",
      iso: "800",
      focal: "110mm"
    },
    palette: ["#1a1a1a", "#4a4238", "#8c7a6b", "#cbbdb0", "#f5f0eb"]
  },
  {
    id: 9,
    title: "Misty Redwoods Cathedral",
    category: "nature",
    location: "Muir Woods, California, USA",
    photographer: "Sierra Brooks",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=70",
    resolution: "6144 × 4096",
    likes: 425,
    tags: ["nature", "minimal", "ancient", "forest"],
    exif: {
      camera: "Sony Alpha 1",
      lens: "FE 70-200mm F2.8 GM II",
      aperture: "f/4.0",
      shutter: "1/60s",
      iso: "400",
      focal: "85mm"
    },
    palette: ["#0f1c14", "#283e2e", "#4d6b52", "#98b29d", "#e3ece5"]
  },
  {
    id: 10,
    title: "Cappadocia Hot Air Sunrise",
    category: "travel",
    location: "Goreme Valley, Turkey",
    photographer: "Emre Kaya",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 890,
    tags: ["sunset", "travel", "ancient", "aerial"],
    exif: {
      camera: "Canon EOS R6 Mark II",
      lens: "RF 24-105mm F4L IS",
      aperture: "f/5.6",
      shutter: "1/1000s",
      iso: "200",
      focal: "50mm"
    },
    palette: ["#2d1d16", "#73432b", "#bf6b3b", "#e0a36e", "#fce4c8"]
  },
  {
    id: 11,
    title: "Spiral Concrete Staircase",
    category: "architecture",
    location: "Vatican Museums, Rome, Italy",
    photographer: "Marco Rossi",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=70",
    resolution: "5500 × 3667",
    likes: 410,
    tags: ["minimal", "architecture", "heritage", "spiral"],
    exif: {
      camera: "Nikon Z9",
      lens: "NIKKOR Z 14-24mm f/2.8 S",
      aperture: "f/6.3",
      shutter: "1/40s",
      iso: "800",
      focal: "14mm"
    },
    palette: ["#141414", "#38332c", "#786d5e", "#b8ab97", "#f0eae1"]
  },
  {
    id: 12,
    title: "Fisherman on Inle Lake",
    category: "people",
    location: "Shan Hills, Myanmar",
    photographer: "Aung Min",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70",
    resolution: "5800 × 3867",
    likes: 670,
    tags: ["portrait", "people", "sunset", "coastal"],
    exif: {
      camera: "Sony Alpha A7S III",
      lens: "FE 85mm F1.4 GM",
      aperture: "f/2.2",
      shutter: "1/1600s",
      iso: "100",
      focal: "85mm"
    },
    palette: ["#1b1a24", "#40394f", "#80708f", "#d2a88e", "#ffd7b5"]
  },
  {
    id: 13,
    title: "Reynisdrangar Basalt Columns",
    category: "nature",
    location: "Vik, South Coast, Iceland",
    photographer: "Astrid Lindholm",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 530,
    tags: ["coastal", "nature", "ancient", "iceland"],
    exif: {
      camera: "Canon EOS R5",
      lens: "RF 24-70mm F2.8L IS",
      aperture: "f/11.0",
      shutter: "2.5s (ND Filter)",
      iso: "50",
      focal: "24mm"
    },
    palette: ["#090c0e", "#1b252c", "#41515d", "#7c92a2", "#dbe5ec"]
  },
  {
    id: 14,
    title: "Amalfi Coastal Cliff Village",
    category: "travel",
    location: "Positano, Amalfi Coast, Italy",
    photographer: "Matteo Bianchi",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 810,
    tags: ["coastal", "travel", "sunset", "italy"],
    exif: {
      camera: "Fujifilm X-T5",
      lens: "XF 33mm f/1.4 R LM WR",
      aperture: "f/5.6",
      shutter: "1/500s",
      iso: "125",
      focal: "33mm"
    },
    palette: ["#162447", "#1f4068", "#e43f5a", "#ff9a3c", "#f3f4f6"]
  },
  {
    id: 15,
    title: "Futuristic Glass Pavilion",
    category: "architecture",
    location: "Copenhagen, Denmark",
    photographer: "Jens Thorne",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=70",
    resolution: "5600 × 3733",
    likes: 290,
    tags: ["minimal", "urban", "architecture", "denmark"],
    exif: {
      camera: "Sony Alpha A7R IV",
      lens: "FE 20mm F1.8 G",
      aperture: "f/7.1",
      shutter: "1/320s",
      iso: "100",
      focal: "20mm"
    },
    palette: ["#0f172a", "#1e293b", "#475569", "#94a3b8", "#f1f5f9"]
  },
  {
    id: 16,
    title: "Berber Weaver in Atlas",
    category: "people",
    location: "High Atlas Mountains, Morocco",
    photographer: "Rachid Benali",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 470,
    tags: ["portrait", "people", "artisan", "heritage"],
    exif: {
      camera: "Leica M11",
      lens: "APO-Summicron-M 50mm f/2 ASPH",
      aperture: "f/2.0",
      shutter: "1/250s",
      iso: "200",
      focal: "50mm"
    },
    palette: ["#2a1810", "#633820", "#b26839", "#e49f6a", "#f9e0c7"]
  },
  {
    id: 17,
    title: "Sahara Golden Dunes at Dusk",
    category: "nature",
    location: "Erg Chebbi, Merzouga, Morocco",
    photographer: "Youssef Alaoui",
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 640,
    tags: ["sunset", "nature", "minimal", "desert"],
    exif: {
      camera: "Nikon Z8",
      lens: "NIKKOR Z 70-200mm f/2.8 VR S",
      aperture: "f/8.0",
      shutter: "1/400s",
      iso: "100",
      focal: "135mm"
    },
    palette: ["#2d170b", "#703512", "#c46c26", "#e8a758", "#fde0a2"]
  },
  {
    id: 18,
    title: "Taj Mahal in Morning Mist",
    category: "travel",
    location: "Agra, Uttar Pradesh, India",
    photographer: "Ananya Sharma",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=300&q=70",
    resolution: "5900 × 3933",
    likes: 930,
    tags: ["ancient", "travel", "heritage", "india"],
    exif: {
      camera: "Sony Alpha A7R V",
      lens: "FE 24-105mm F4 G OSS",
      aperture: "f/5.6",
      shutter: "1/640s",
      iso: "100",
      focal: "45mm"
    },
    palette: ["#1e2024", "#484d56", "#8a929e", "#c5ccd6", "#f0f3f7"]
  },
  {
    id: 19,
    title: "Neo-Gothic Vault & Oculus",
    category: "architecture",
    location: "Barcelona, Catalonia, Spain",
    photographer: "Nuria Marti",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=70",
    resolution: "6000 × 4000",
    likes: 380,
    tags: ["ancient", "architecture", "heritage", "minimal"],
    exif: {
      camera: "Canon EOS R3",
      lens: "RF 15-35mm F2.8L IS USM",
      aperture: "f/4.0",
      shutter: "1/80s",
      iso: "1600",
      focal: "15mm"
    },
    palette: ["#1a1614", "#463931", "#846f5e", "#c0ab98", "#f3ebe2"]
  },
  {
    id: 20,
    title: "Traditional Geisha in Gion",
    category: "people",
    location: "Gion District, Kyoto, Japan",
    photographer: "Daiki Tanaka",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=70",
    resolution: "6144 × 4096",
    likes: 710,
    tags: ["portrait", "people", "japan", "heritage"],
    exif: {
      camera: "Fujifilm X-H2",
      lens: "XF 56mm f/1.2 R WR",
      aperture: "f/1.2",
      shutter: "1/400s",
      iso: "160",
      focal: "56mm"
    },
    palette: ["#141013", "#3d222a", "#8c2e42", "#cf8897", "#faedf0"]
  }
];

function buildExpandedGalleryData() {
  const categoryNames = ["nature", "travel", "architecture", "people"];
  const titleSets = {
    nature: [
      "Silver Ridge Morning", "Echo Valley", "Glacial Drift", "Fernline Path", "Cinder Peak",
      "Moonlit Marsh", "Autumn River Run", "Highland Silence", "Coastal Dune Drift", "Forest Ember",
      "Snowline Passage", "Valley of Pines", "Crimson Tide", "Quiet Foothill", "Blue Horizon",
      "Moss Veil", "Wildwater Memory", "Nightfall Basin", "Amber Cedar", "Stone Reservoir"
    ],
    travel: [
      "Cultural Threads", "Lantern Alley", "Harbor Light Run", "Rooftop Horizon", "Golden Courtyard",
      "Coastal Reverie", "Old City Echo", "Desert Route", "Seaside Passage", "Village Horizon",
      "Terracotta Morning", "Windward Avenue", "Sunlit Market", "Street of Echoes", "Temple Daybreak",
      "Azure Window", "Lantern District", "Midnight Arcades", "Harbor Drift", "Canyon Walk"
    ],
    architecture: [
      "Concrete Geometry", "Glass Horizon", "Monolith Form", "Modern Arc Line", "Quiet Atrium",
      "Steel Reflection", "Facade Study", "Vaulted Silence", "Brick Lines", "Urban Rhythm",
      "Shadow Grid", "Atrium Light", "Tower Geometry", "Courtyard Frame", "Minimal Volume",
      "Civic Echo", "Lightwell Detail", "Northern Facade", "Curved Silence", "Structure in Bloom"
    ],
    people: [
      "Portrait in Motion", "Studio Quiet", "Morning Ritual", "Urban Presence", "Everyday Grace",
      "Street Story", "The Quiet Look", "Thread of Memory", "Portrayal of Light", "After the Rain",
      "Charcoal Frame", "Warm Studio Light", "Field Notes", "Slope of Light", "Market Day",
      "Window Portrait", "The Day Shift", "Time in the Frame", "Golden Hour Story", "Passing Through"
    ]
  };

  const locationSets = {
    nature: [
      "Patagonia, Argentina", "Lake Como, Italy", "Banff, Canada", "Kashmir Valley, India", "Hokkaido, Japan",
      "Iceland Highlands", "Yosemite, USA", "Dolomites, Italy", "Queenstown, New Zealand", "Bavarian Alps, Germany",
      "Scottish Highlands", "Lofoten, Norway", "Zion National Park, USA", "Kyoto Forests, Japan", "Lake Louise, Canada",
      "Algarve Coast, Portugal", "Aoraki, New Zealand", "Lake Tahoe, USA", "Cotswolds, UK", "Glacier National Park, USA"
    ],
    travel: [
      "Chefchaouen, Morocco", "Hanoi, Vietnam", "Lisbon, Portugal", "Marrakech, Morocco", "Hvar, Croatia",
      "Seoul, South Korea", "Nairobi, Kenya", "Cusco, Peru", "Amman, Jordan", "Old Havana, Cuba",
      "Tbilisi, Georgia", "Milan, Italy", "Kotor, Montenegro", "Bali, Indonesia", "Mendoza, Argentina",
      "Istanbul, Turkey", "Kyiv, Ukraine", "Vernazza, Italy", "Cappadocia, Turkey", "Zagreb, Croatia"
    ],
    architecture: [
      "Dubai, UAE", "Berlin, Germany", "Shanghai, China", "Oslo, Norway", "Mexico City, Mexico",
      "Brussels, Belgium", "Melbourne, Australia", "São Paulo, Brazil", "Prague, Czechia", "Seville, Spain",
      "Helsinki, Finland", "Manhattan, USA", "Milan, Italy", "Copenhagen, Denmark", "Doha, Qatar",
      "Lyon, France", "Zurich, Switzerland", "Valencia, Spain", "Warsaw, Poland", "Hong Kong, China"
    ],
    people: [
      "Cairo, Egypt", "Salzburg, Austria", "Lagos, Nigeria", "Paris, France", "Havana, Cuba",
      "Lima, Peru", "Buenos Aires, Argentina", "Seoul, South Korea", "Milan, Italy", "Jakarta, Indonesia",
      "Florence, Italy", "Oslo, Norway", "Mexico City, Mexico", "Dublin, Ireland", "Ho Chi Minh City, Vietnam",
      "Porto, Portugal", "Santiago, Chile", "Nairobi, Kenya", "Copenhagen, Denmark", "New York, USA"
    ]
  };

  const photographers = [
    "Ava Moore", "Noah Bell", "Mila Torres", "Ethan Ross", "Sofia Park", "Leo Hart", "Iris Cole",
    "Mateo Quinn", "Nora James", "Arlo Stone", "Mina Shah", "Theo Brooks", "Clara Kim", "Daniel Reed",
    "Anya Singh", "Isaac West", "Rina Patel", "Elio Cruz", "Lena Frost", "Kenji Mori", "Eva Lane",
    "Lucas Green", "Nadia Hall", "Julian Frost", "Maya Tan", "Sebastian Hale", "Ari Davis", "Luca Morel"
  ];

  const photoSeeds = Array.from({ length: 120 }, (_, index) => `framecraft-expanded-${index + 1}`);

  const basePalette = {
    nature: ["#0f172a", "#335c67", "#7aa3a6", "#d8e3dc", "#f7d7a4"],
    travel: ["#1d3557", "#457b9d", "#f4a261", "#e9c46a", "#f1faee"],
    architecture: ["#111827", "#475569", "#a6b4c7", "#dfe7f0", "#f8fafc"],
    people: ["#2b120e", "#8a5a44", "#dba77d", "#f2d7be", "#f8f1ee"]
  };

  const tagsByCategory = {
    nature: ["nature", "landscape", "mountains", "travel", "serene"],
    travel: ["travel", "culture", "coastal", "heritage", "light"],
    architecture: ["architecture", "minimal", "urban", "design", "structure"],
    people: ["people", "portrait", "story", "documentary", "street"]
  };

  const dataset = [];

  for (let i = 0; i < 120; i += 1) {
    const category = categoryNames[i % categoryNames.length];
    const titleSeed = titleSets[category][i % titleSets[category].length];
    const location = locationSets[category][i % locationSets[category].length];
    const photographer = photographers[i % photographers.length];
    const seed = photoSeeds[i];
    const id = 21 + i;

    dataset.push({
      id,
      title: titleSeed,
      category,
      location,
      photographer,
      src: `https://picsum.photos/seed/${seed}/1600/1200`,
      thumb: `https://picsum.photos/seed/${seed}-thumb/400/300`,
      resolution: `6000 × 4000`,
      likes: 180 + ((id * 17) % 820),
      tags: tagsByCategory[category],
      exif: {
        camera: category === "architecture" ? "Canon EOS R8" : category === "people" ? "Sony Alpha A7 IV" : category === "travel" ? "Fujifilm X-T5" : "Nikon Z7 II",
        lens: category === "architecture" ? "RF 20mm f/2.8" : category === "people" ? "FE 50mm f/1.4" : category === "travel" ? "XF 23mm f/1.4" : "NIKKOR Z 24-70mm f/2.8",
        aperture: ["f/1.8", "f/2.8", "f/4.0", "f/5.6", "f/8.0"][i % 5],
        shutter: ["1/200s", "1/400s", "1/800s", "1/1200s", "2.5s"][i % 5],
        iso: ["100", "200", "400", "800", "1600"][i % 5],
        focal: ["20mm", "28mm", "35mm", "50mm", "85mm"][i % 5]
      },
      palette: basePalette[category]
    });
  }

  return dataset;
}

BASE_GALLERY_DATA.forEach((item) => {
  const seed = `framecraft-base-${item.id}`;
  item.src = `https://picsum.photos/seed/${seed}/1600/1200`;
  item.thumb = `https://picsum.photos/seed/${seed}-thumb/400/300`;
});

const GALLERY_DATA = [...BASE_GALLERY_DATA, ...buildExpandedGalleryData()];

/* ==========================================================================
   2. State Management Architecture
   ========================================================================== */
const AppState = {
  // Filtering & Sorting
  activeCategory: "all",
  activeTag: "all",
  searchQuery: "",
  sortBy: "featured",
  viewDensity: "grid", // 'grid' | 'editorial' | 'compact'
  
  // Persistence
  favorites: new Set(),
  likesOverrides: new Map(),

  // Current filtered dataset
  filteredImages: [...GALLERY_DATA],

  // Lightbox & Viewer
  isLightboxOpen: false,
  lightboxIndex: 0,
  isExifDrawerOpen: false,
  isSlideshowActive: false,
  slideshowIntervalId: null,
  slideshowProgressId: null,
  slideshowDuration: 4000, // 4 seconds per slide
  
  // Lightbox Zoom & Pan
  zoomLevel: 1, // 1 to 3
  isDragging: false,
  panX: 0,
  panY: 0,
  startX: 0,
  startY: 0,

  // Touch Swipe for Mobile
  touchStartX: 0,
  touchStartY: 0,
  touchEndX: 0,
  touchEndY: 0
};

/* ==========================================================================
   3. DOM Elements Cache
   ========================================================================== */
const DOM = {
  html: document.documentElement,
  shortcutsBtn: document.getElementById("shortcuts-btn"),
  shortcutsModal: document.getElementById("shortcuts-modal"),
  closeShortcutsBtn: document.getElementById("close-shortcuts-btn"),
  
  // Hero stats
  statTotalCount: document.getElementById("stat-total-count"),
  statFavoritesCount: document.getElementById("stat-favorites-count"),
  
  // Filter tabs & counts
  categoryFilterList: document.getElementById("category-filter-list"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  countAll: document.getElementById("count-all"),
  countNature: document.getElementById("count-nature"),
  countTravel: document.getElementById("count-travel"),
  countArchitecture: document.getElementById("count-architecture"),
  countPeople: document.getElementById("count-people"),
  countFavorites: document.getElementById("count-favorites"),
  navFavCount: document.getElementById("nav-fav-count"),
  
  // Search & tags
  searchInput: document.getElementById("gallery-search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  tagsList: document.getElementById("tags-list"),
  tagChips: document.querySelectorAll(".tag-chip"),
  
  // Sort & view controls
  sortSelect: document.getElementById("gallery-sort-select"),
  viewGridBtn: document.getElementById("view-grid-btn"),
  viewEditorialBtn: document.getElementById("view-editorial-btn"),
  viewCompactBtn: document.getElementById("view-compact-btn"),
  viewBtns: document.querySelectorAll(".view-btn"),
  
  // Gallery Grid
  galleryGrid: document.getElementById("gallery-grid"),
  emptyState: document.getElementById("empty-state"),
  resetFilterBtn: document.getElementById("reset-filter-btn"),
  visibleCountDisplay: document.getElementById("visible-count-display"),
  currentCategoryName: document.getElementById("current-category-name"),
  startSlideshowBtn: document.getElementById("start-slideshow-btn"),

  // Spotlight triggers
  spotlightNatureBtn: document.getElementById("spotlight-nature-btn"),
  spotlightArchBtn: document.getElementById("spotlight-arch-btn"),

  // Lightbox Modal
  lightboxModal: document.getElementById("lightbox-modal"),
  lightboxOverlay: document.getElementById("lightbox-overlay"),
  lightboxCategory: document.getElementById("lightbox-category"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxRes: document.getElementById("lightbox-res"),
  lightboxCounter: document.getElementById("lightbox-counter"),
  lightboxFavBtn: document.getElementById("lightbox-fav-btn"),
  lightboxSlideshowBtn: document.getElementById("lightbox-slideshow-btn"),
  lightboxInfoBtn: document.getElementById("lightbox-info-btn"),
  lightboxDownloadBtn: document.getElementById("lightbox-download-btn"),
  lightboxShareBtn: document.getElementById("lightbox-share-btn"),
  lightboxFullscreenBtn: document.getElementById("lightbox-fullscreen-btn"),
  lightboxCloseBtn: document.getElementById("lightbox-close-btn"),
  
  // Lightbox Slideshow Progress Bar
  slideshowProgressBar: document.getElementById("slideshow-progress-bar"),
  slideshowProgressFill: document.getElementById("slideshow-progress-fill"),

  // Lightbox Stage & Zoom
  lightboxStage: document.getElementById("lightbox-stage"),
  lightboxPrevBtn: document.getElementById("lightbox-prev-btn"),
  lightboxNextBtn: document.getElementById("lightbox-next-btn"),
  lightboxImageContainer: document.getElementById("lightbox-image-container"),
  lightboxZoomViewport: document.getElementById("lightbox-zoom-viewport"),
  lightboxSpinner: document.getElementById("lightbox-spinner"),
  lightboxImg: document.getElementById("lightbox-img"),
  zoomInBtn: document.getElementById("zoom-in-btn"),
  zoomOutBtn: document.getElementById("zoom-out-btn"),
  zoomResetBtn: document.getElementById("zoom-reset-btn"),
  zoomLevelText: document.getElementById("zoom-level-text"),

  // EXIF Drawer
  lightboxExifDrawer: document.getElementById("lightbox-exif-drawer"),
  exifCloseBtn: document.getElementById("exif-close-btn"),
  exifLocation: document.getElementById("exif-location"),
  exifPhotographer: document.getElementById("exif-photographer"),
  exifCamera: document.getElementById("exif-camera"),
  exifLens: document.getElementById("exif-lens"),
  exifAperture: document.getElementById("exif-aperture"),
  exifShutter: document.getElementById("exif-shutter"),
  exifIso: document.getElementById("exif-iso"),
  exifFocal: document.getElementById("exif-focal"),
  exifPalette: document.getElementById("exif-palette"),
  exifTags: document.getElementById("exif-tags"),

  // Lightbox Footer
  lightboxLocationText: document.getElementById("lightbox-location-text"),
  lightboxPhotographerText: document.getElementById("lightbox-photographer-text"),
  lightboxThumbsTrack: document.getElementById("lightbox-thumbs-track"),

  // Toast & Back-to-Top
  toastContainer: document.getElementById("toast-container"),
  backToTopBtn: document.getElementById("back-to-top-btn"),
  scrollProgressRing: document.getElementById("scroll-progress-ring"),
  copyrightYear: document.getElementById("copyright-year")
};

/* ==========================================================================
   4. LocalStorage & Persistence Engine
   ========================================================================== */
function initStorage() {
  try {
    const savedFavs = localStorage.getItem("lumina_favorites");
    if (savedFavs) {
      AppState.favorites = new Set(JSON.parse(savedFavs));
    }
  } catch (err) {
    console.warn("LocalStorage unavailable, defaulting to memory state:", err);
  }
}

function saveFavorites() {
  try {
    localStorage.setItem("lumina_favorites", JSON.stringify([...AppState.favorites]));
  } catch (err) {
    console.warn("Failed to persist favorites:", err);
  }
}

function toggleFavorite(photoId, sourceEvent) {
  if (sourceEvent) sourceEvent.stopPropagation();
  const idNum = Number(photoId);

  if (AppState.favorites.has(idNum)) {
    AppState.favorites.delete(idNum);
    showToast("Removed from saved favorites");
  } else {
    AppState.favorites.add(idNum);
    showToast("Saved to your favorites archive");
  }

  saveFavorites();
  updateCategoryCounts();
  updateCardFavoriteStates();
  updateLightboxFavState();

  // If currently filtering by favorites, re-apply
  if (AppState.activeCategory === "favorites") {
    applyFilters();
  }
}

/* ==========================================================================
   5. Toast Notification Component
   ========================================================================== */
function showToast(message) {
  if (!DOM.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-exit");
    toast.addEventListener("animationend", () => toast.remove());
  }, 2400);
}

// Global hook for HTML event handlers
window.ruyaShowToast = showToast;

/* ==========================================================================
   6. Filtering, Tagging & Sorting Engine
   ========================================================================== */
function applyFilters() {
  const { activeCategory, activeTag, searchQuery, sortBy, favorites } = AppState;

  let results = GALLERY_DATA.filter(item => {
    // 1. Category Filter
    if (activeCategory === "favorites") {
      if (!favorites.has(item.id)) return false;
    } else if (activeCategory !== "all" && item.category !== activeCategory) {
      return false;
    }

    // 2. Tag Filter
    if (activeTag !== "all" && !item.tags.includes(activeTag)) {
      return false;
    }

    // 3. Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchLocation = item.location.toLowerCase().includes(q);
      const matchArtist = item.photographer.toLowerCase().includes(q);
      const matchCamera = item.exif.camera.toLowerCase().includes(q);
      const matchTag = item.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchLocation && !matchArtist && !matchCamera && !matchTag) {
        return false;
      }
    }

    return true;
  });

  // 4. Sorting
  results = sortItems(results, sortBy);

  AppState.filteredImages = results;
  renderGalleryGrid(results);
  updateStatusFeedback(results.length);
}

function sortItems(items, sortKey) {
  const cloned = [...items];
  switch (sortKey) {
    case "popular":
      return cloned.sort((a, b) => (b.likes + (AppState.likesOverrides.get(b.id) || 0)) - (a.likes + (AppState.likesOverrides.get(a.id) || 0)));
    case "title-asc":
      return cloned.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return cloned.sort((a, b) => b.title.localeCompare(a.title));
    case "photographer":
      return cloned.sort((a, b) => a.photographer.localeCompare(b.photographer));
    case "featured":
    default:
      return cloned.sort((a, b) => a.id - b.id);
  }
}

function updateCategoryCounts() {
  const total = GALLERY_DATA.length;
  const natureCount = GALLERY_DATA.filter(i => i.category === "nature").length;
  const travelCount = GALLERY_DATA.filter(i => i.category === "travel").length;
  const archCount = GALLERY_DATA.filter(i => i.category === "architecture").length;
  const peopleCount = GALLERY_DATA.filter(i => i.category === "people").length;
  const favsCount = AppState.favorites.size;

  if (DOM.countAll) DOM.countAll.textContent = total;
  if (DOM.countNature) DOM.countNature.textContent = natureCount;
  if (DOM.countTravel) DOM.countTravel.textContent = travelCount;
  if (DOM.countArchitecture) DOM.countArchitecture.textContent = archCount;
  if (DOM.countPeople) DOM.countPeople.textContent = peopleCount;
  if (DOM.countFavorites) DOM.countFavorites.textContent = favsCount;
  if (DOM.navFavCount) DOM.navFavCount.textContent = favsCount;
  if (DOM.statTotalCount) DOM.statTotalCount.textContent = total;
  if (DOM.statFavoritesCount) DOM.statFavoritesCount.textContent = favsCount;
}

function updateStatusFeedback(count) {
  if (DOM.visibleCountDisplay) DOM.visibleCountDisplay.textContent = count;
  if (DOM.currentCategoryName) {
    const names = {
      all: "All Works",
      nature: "Nature & Landscapes",
      travel: "World Travel",
      architecture: "Modern Architecture",
      people: "Human Narratives",
      favorites: "My Favorites"
    };
    DOM.currentCategoryName.textContent = names[AppState.activeCategory] || "Curated Collection";
  }
}

/* ==========================================================================
   7. Gallery Card Rendering & Performance
   ========================================================================== */
function renderGalleryGrid(items) {
  if (!DOM.galleryGrid) return;
  DOM.galleryGrid.innerHTML = "";

  if (items.length === 0) {
    DOM.galleryGrid.hidden = true;
    DOM.emptyState.hidden = false;
    return;
  }

  DOM.galleryGrid.hidden = false;
  DOM.emptyState.hidden = true;

  const fragment = document.createDocumentFragment();

  items.forEach((item, index) => {
    const isFav = AppState.favorites.has(item.id);
    const card = document.createElement("article");
    card.className = "gallery-card card-enter";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View photograph: ${item.title} by ${item.photographer}`);
    card.setAttribute("data-id", item.id);
    card.setAttribute("id", `gallery-card-${item.id}`);
    card.style.animationDelay = `${Math.min(index * 0.04, 0.4)}s`;

    card.innerHTML = `
      <div class="card-image-wrap">
        <div class="card-skeleton"></div>
        <img 
          src="${item.thumb}" 
          data-src="${item.src}" 
          alt="${item.title}" 
          class="card-image"
          loading="lazy"
          decoding="async"
        >
      </div>

      <div class="card-overlay">
        <div class="card-overlay-top">
          <span class="card-category-badge">${item.category}</span>
          <div class="card-actions-top">
            <button 
              class="card-fav-btn ${isFav ? 'favorited' : ''}" 
              data-fav-id="${item.id}"
              aria-label="${isFav ? 'Remove from favorites' : 'Save to favorites'}"
              title="Toggle Favorite"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <button class="card-view-btn" title="View Full Image" aria-label="Expand photo">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 3 21 3 21 9"/>
                <polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/>
                <line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="card-overlay-bottom">
          <h3 class="card-title">${item.title}</h3>
          <div class="card-meta-row">
            <span class="card-location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${item.location}
            </span>
            <span class="card-exif-pill">${item.exif.lens.split(' ')[0]} ${item.exif.aperture}</span>
          </div>
        </div>
      </div>
    `;

    // Progressive Image Loader & Skeleton Removal
    const imgEl = card.querySelector(".card-image");
    const skeleton = card.querySelector(".card-skeleton");

    if (imgEl.complete) {
      imgEl.classList.add("loaded");
      if (skeleton) skeleton.style.display = "none";
    } else {
      imgEl.addEventListener("load", () => {
        imgEl.classList.add("loaded");
        if (skeleton) skeleton.style.display = "none";
      }, { once: true });
    }

    // Favorite Button Handler
    const favBtn = card.querySelector(".card-fav-btn");
    favBtn.addEventListener("click", (e) => {
      toggleFavorite(item.id, e);
    });

    // Card Open Lightbox Handler
    card.addEventListener("click", () => {
      openLightboxById(item.id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightboxById(item.id);
      }
    });

    fragment.appendChild(card);
  });

  DOM.galleryGrid.appendChild(fragment);
}

function updateCardFavoriteStates() {
  document.querySelectorAll(".card-fav-btn").forEach(btn => {
    const id = Number(btn.getAttribute("data-fav-id"));
    const isFav = AppState.favorites.has(id);
    btn.classList.toggle("favorited", isFav);
    const svg = btn.querySelector("svg");
    if (svg) svg.setAttribute("fill", isFav ? "currentColor" : "none");
  });
}

/* ==========================================================================
   8. Lightbox Engine & EXIF Inspector
   ========================================================================== */
function openLightboxById(photoId) {
  const index = AppState.filteredImages.findIndex(img => img.id === photoId);
  if (index !== -1) {
    openLightboxAtIndex(index);
  }
}

function openLightboxAtIndex(index) {
  if (index < 0 || index >= AppState.filteredImages.length) return;

  AppState.isLightboxOpen = true;
  AppState.lightboxIndex = index;
  resetZoomAndPan();

  if (DOM.lightboxModal) {
    DOM.lightboxModal.classList.add("active");
    DOM.lightboxModal.setAttribute("aria-hidden", "false");
    DOM.lightboxModal.focus();
  }
  document.body.classList.add("no-scroll");

  renderLightboxContent();
  renderLightboxThumbs();
}

function closeLightbox() {
  AppState.isLightboxOpen = false;
  stopSlideshow();
  resetZoomAndPan();

  if (DOM.lightboxModal) {
    DOM.lightboxModal.classList.remove("active");
    DOM.lightboxModal.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("no-scroll");
}

function navigateLightbox(direction) {
  if (!AppState.isLightboxOpen || AppState.filteredImages.length <= 1) return;

  resetZoomAndPan();
  const total = AppState.filteredImages.length;
  AppState.lightboxIndex = (AppState.lightboxIndex + direction + total) % total;

  renderLightboxContent();
  updateLightboxThumbActive();
}

function renderLightboxContent() {
  const current = AppState.filteredImages[AppState.lightboxIndex];
  if (!current) return;

  // Header Data
  if (DOM.lightboxCategory) DOM.lightboxCategory.textContent = current.category;
  if (DOM.lightboxTitle) DOM.lightboxTitle.textContent = current.title;
  if (DOM.lightboxRes) DOM.lightboxRes.textContent = current.resolution;
  if (DOM.lightboxCounter) DOM.lightboxCounter.textContent = `${AppState.lightboxIndex + 1} / ${AppState.filteredImages.length}`;

  // Favorite button
  updateLightboxFavState();

  // Image Loading with Spinner
  if (DOM.lightboxSpinner) DOM.lightboxSpinner.classList.add("active");
  if (DOM.lightboxImg) DOM.lightboxImg.classList.remove("loaded");

  const tempImg = new Image();
  tempImg.src = current.src;
  tempImg.onload = () => {
    if (DOM.lightboxImg) {
      DOM.lightboxImg.src = current.src;
      DOM.lightboxImg.alt = current.title;
      DOM.lightboxImg.classList.add("loaded");
    }
    if (DOM.lightboxSpinner) DOM.lightboxSpinner.classList.remove("active");
  };

  // Details
  if (DOM.lightboxLocationText) DOM.lightboxLocationText.textContent = current.location;
  if (DOM.lightboxPhotographerText) DOM.lightboxPhotographerText.textContent = current.photographer;

  // Populate EXIF Drawer
  if (DOM.exifLocation) DOM.exifLocation.textContent = current.location;
  if (DOM.exifPhotographer) DOM.exifPhotographer.textContent = current.photographer;
  if (DOM.exifCamera) DOM.exifCamera.textContent = current.exif.camera;
  if (DOM.exifLens) DOM.exifLens.textContent = current.exif.lens;
  if (DOM.exifAperture) DOM.exifAperture.textContent = current.exif.aperture;
  if (DOM.exifShutter) DOM.exifShutter.textContent = current.exif.shutter;
  if (DOM.exifIso) DOM.exifIso.textContent = current.exif.iso;
  if (DOM.exifFocal) DOM.exifFocal.textContent = current.exif.focal;

  // Color Swatches
  if (DOM.exifPalette) {
    DOM.exifPalette.innerHTML = current.palette
      .map(c => `<div class="swatch-color" style="background-color: ${c}" title="${c}"></div>`)
      .join("");
  }

  // Tags
  if (DOM.exifTags) {
    DOM.exifTags.innerHTML = current.tags
      .map(t => `<span class="exif-tag-pill">#${t}</span>`)
      .join("");
  }
}

function updateLightboxFavState() {
  const current = AppState.filteredImages[AppState.lightboxIndex];
  if (!current || !DOM.lightboxFavBtn) return;

  const isFav = AppState.favorites.has(current.id);
  DOM.lightboxFavBtn.classList.toggle("favorited", isFav);
  const heartSvg = DOM.lightboxFavBtn.querySelector("svg");
  if (heartSvg) heartSvg.setAttribute("fill", isFav ? "currentColor" : "none");
}

function renderLightboxThumbs() {
  if (!DOM.lightboxThumbsTrack) return;
  DOM.lightboxThumbsTrack.innerHTML = "";

  AppState.filteredImages.forEach((item, idx) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.className = `lightbox-thumb ${idx === AppState.lightboxIndex ? 'active' : ''}`;
    thumbBtn.setAttribute("aria-label", `Go to slide ${idx + 1}: ${item.title}`);
    thumbBtn.innerHTML = `<img src="${item.thumb}" alt="${item.title}">`;
    thumbBtn.addEventListener("click", () => {
      AppState.lightboxIndex = idx;
      resetZoomAndPan();
      renderLightboxContent();
      updateLightboxThumbActive();
    });
    DOM.lightboxThumbsTrack.appendChild(thumbBtn);
  });
}

function updateLightboxThumbActive() {
  const thumbs = DOM.lightboxThumbsTrack.querySelectorAll(".lightbox-thumb");
  thumbs.forEach((t, idx) => {
    const isActive = idx === AppState.lightboxIndex;
    t.classList.toggle("active", isActive);
    if (isActive) {
      t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  });
}

/* ==========================================================================
   9. Lightbox Zoom & Pan Controls
   ========================================================================== */
function setZoom(level) {
  AppState.zoomLevel = Math.max(1, Math.min(3, level));
  DOM.zoomLevelText.textContent = `${Math.round(AppState.zoomLevel * 100)}%`;

  if (AppState.zoomLevel === 1) {
    AppState.panX = 0;
    AppState.panY = 0;
    DOM.lightboxZoomViewport.classList.remove("zoomed");
  } else {
    DOM.lightboxZoomViewport.classList.add("zoomed");
  }

  applyTransform();
}

function resetZoomAndPan() {
  AppState.zoomLevel = 1;
  AppState.panX = 0;
  AppState.panY = 0;
  DOM.zoomLevelText.textContent = "100%";
  DOM.lightboxZoomViewport.classList.remove("zoomed", "dragging");
  applyTransform();
}

function applyTransform() {
  DOM.lightboxZoomViewport.style.transform = `scale(${AppState.zoomLevel}) translate(${AppState.panX}px, ${AppState.panY}px)`;
}

/* ==========================================================================
   10. Slideshow Autoplay Engine
   ========================================================================== */
function toggleSlideshow() {
  if (AppState.isSlideshowActive) {
    stopSlideshow();
    showToast("Slideshow paused");
  } else {
    startSlideshow();
    showToast("Slideshow started");
  }
}

function startSlideshow() {
  if (!AppState.isLightboxOpen) {
    openLightboxAtIndex(0);
  }

  AppState.isSlideshowActive = true;
  DOM.slideshowProgressBar.classList.add("active");
  DOM.lightboxSlideshowBtn.classList.add("active");
  
  const playIcon = DOM.lightboxSlideshowBtn.querySelector(".play-icon");
  const pauseIcon = DOM.lightboxSlideshowBtn.querySelector(".pause-icon");
  if (playIcon) playIcon.hidden = true;
  if (pauseIcon) pauseIcon.hidden = false;

  triggerSlideProgress();
}

function stopSlideshow() {
  AppState.isSlideshowActive = false;
  clearInterval(AppState.slideshowIntervalId);
  clearInterval(AppState.slideshowProgressId);

  DOM.slideshowProgressBar.classList.remove("active");
  DOM.slideshowProgressFill.style.width = "0%";
  DOM.lightboxSlideshowBtn.classList.remove("active");

  const playIcon = DOM.lightboxSlideshowBtn.querySelector(".play-icon");
  const pauseIcon = DOM.lightboxSlideshowBtn.querySelector(".pause-icon");
  if (playIcon) playIcon.hidden = false;
  if (pauseIcon) pauseIcon.hidden = true;
}

function triggerSlideProgress() {
  clearInterval(AppState.slideshowIntervalId);
  clearInterval(AppState.slideshowProgressId);

  let elapsed = 0;
  const interval = 50;
  const total = AppState.slideshowDuration;

  DOM.slideshowProgressFill.style.width = "0%";

  AppState.slideshowProgressId = setInterval(() => {
    elapsed += interval;
    const pct = Math.min(100, (elapsed / total) * 100);
    DOM.slideshowProgressFill.style.width = `${pct}%`;
    if (elapsed >= total) {
      clearInterval(AppState.slideshowProgressId);
    }
  }, interval);

  AppState.slideshowIntervalId = setInterval(() => {
    navigateLightbox(1);
    triggerSlideProgress();
  }, total);
}

/* ==========================================================================
   11. Fullscreen & Share & Download Actions
   ========================================================================== */
function toggleFullscreen() {
  const expandIcon = DOM.lightboxFullscreenBtn.querySelector(".icon-expand");
  const compressIcon = DOM.lightboxFullscreenBtn.querySelector(".icon-compress");

  if (!document.fullscreenElement) {
    DOM.lightboxModal.requestFullscreen().catch(err => {
      console.warn("Fullscreen request error:", err);
    });
    if (expandIcon) expandIcon.hidden = true;
    if (compressIcon) compressIcon.hidden = false;
  } else {
    document.exitFullscreen().catch(err => console.warn(err));
    if (expandIcon) expandIcon.hidden = false;
    if (compressIcon) compressIcon.hidden = true;
  }
}

function downloadCurrentImage() {
  const current = AppState.filteredImages[AppState.lightboxIndex];
  if (!current) return;

  showToast(`Initiating download for "${current.title}"`);

  // Direct fetch download trigger
  fetch(current.src)
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `lumina-${current.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch(() => {
      // Fallback
      window.open(current.src, "_blank");
    });
}

function shareCurrentImage() {
  const current = AppState.filteredImages[AppState.lightboxIndex];
  if (!current) return;

  const shareData = {
    title: current.title,
    text: `View "${current.title}" photographed by ${current.photographer} on Lumina Archive.`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast("Gallery link copied to clipboard!");
  }
}

/* ==========================================================================
   12. Keyboard Navigation, Gestures & Global Events
   ========================================================================== */
function setupEventListeners() {
  // Shortcuts Modal
  if (DOM.shortcutsBtn && DOM.shortcutsModal) {
    DOM.shortcutsBtn.addEventListener("click", () => {
      DOM.shortcutsModal.hidden = false;
    });
  }
  if (DOM.closeShortcutsBtn && DOM.shortcutsModal) {
    DOM.closeShortcutsBtn.addEventListener("click", () => {
      DOM.shortcutsModal.hidden = true;
    });
  }
  if (DOM.shortcutsModal) {
    DOM.shortcutsModal.addEventListener("click", (e) => {
      if (e.target === DOM.shortcutsModal) DOM.shortcutsModal.hidden = true;
    });
  }

  // Category Filter Tabs
  if (DOM.filterBtns) {
    DOM.filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        DOM.filterBtns.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        AppState.activeCategory = btn.getAttribute("data-category");
        applyFilters();
      });
    });
  }

  // Tag Chips
  if (DOM.tagChips) {
    DOM.tagChips.forEach(chip => {
      chip.addEventListener("click", () => {
        DOM.tagChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        AppState.activeTag = chip.getAttribute("data-tag");
        applyFilters();
      });
    });
  }

  // Search Input
  if (DOM.searchInput) {
    DOM.searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (DOM.clearSearchBtn) {
        DOM.clearSearchBtn.hidden = AppState.searchQuery.length === 0;
      }
      applyFilters();
    });
  }

  if (DOM.clearSearchBtn && DOM.searchInput) {
    DOM.clearSearchBtn.addEventListener("click", () => {
      DOM.searchInput.value = "";
      AppState.searchQuery = "";
      DOM.clearSearchBtn.hidden = true;
      applyFilters();
      DOM.searchInput.focus();
    });
  }

  // Sort Select
  if (DOM.sortSelect) {
    DOM.sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      applyFilters();
    });
  }

  // View Switchers
  if (DOM.viewBtns && DOM.galleryGrid) {
    DOM.viewBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        DOM.viewBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const view = btn.getAttribute("data-view");
        AppState.viewDensity = view;
        
        DOM.galleryGrid.classList.remove("layout-grid", "layout-editorial", "layout-compact");
        DOM.galleryGrid.classList.add(`layout-${view}`);
      });
    });
  }

  // Empty State Reset Button
  if (DOM.resetFilterBtn) {
    DOM.resetFilterBtn.addEventListener("click", () => {
      AppState.activeCategory = "all";
      AppState.activeTag = "all";
      AppState.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      if (DOM.clearSearchBtn) DOM.clearSearchBtn.hidden = true;

      if (DOM.filterBtns) {
        DOM.filterBtns.forEach(b => {
          const isAll = b.getAttribute("data-category") === "all";
          b.classList.toggle("active", isAll);
          b.setAttribute("aria-selected", isAll ? "true" : "false");
        });
      }
      if (DOM.tagChips) {
        DOM.tagChips.forEach(c => c.classList.toggle("active", c.getAttribute("data-tag") === "all"));
      }

      applyFilters();
    });
  }

  // Spotlight Banner Actions (if present)
  if (DOM.spotlightNatureBtn) {
    DOM.spotlightNatureBtn.addEventListener("click", () => {
      const natureBtn = document.getElementById("filter-nature");
      if (natureBtn) natureBtn.click();
      const gal = document.getElementById("gallery-section");
      if (gal) gal.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (DOM.spotlightArchBtn) {
    DOM.spotlightArchBtn.addEventListener("click", () => {
      const archBtn = document.getElementById("filter-architecture");
      if (archBtn) archBtn.click();
      const gal = document.getElementById("gallery-section");
      if (gal) gal.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Tell Me More Modal
  const tellMoreBtn = document.getElementById("tell-more-btn");
  const infoModal = document.getElementById("info-modal");
  const closeInfoBtn = document.getElementById("close-info-btn");
  if (tellMoreBtn && infoModal) {
    tellMoreBtn.addEventListener("click", () => {
      infoModal.hidden = false;
    });
  }
  if (closeInfoBtn && infoModal) {
    closeInfoBtn.addEventListener("click", () => {
      infoModal.hidden = true;
    });
  }
  if (infoModal) {
    infoModal.addEventListener("click", (e) => {
      if (e.target === infoModal) infoModal.hidden = true;
    });
  }

  // Footer Category Links
  document.querySelectorAll("[data-nav-category]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetCat = link.getAttribute("data-nav-category");
      const targetBtn = document.getElementById(`filter-${targetCat}`);
      if (targetBtn) targetBtn.click();
      const gallerySec = document.getElementById("gallery-section");
      if (gallerySec) gallerySec.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Lightbox Navigation Controls
  if (DOM.lightboxPrevBtn) DOM.lightboxPrevBtn.addEventListener("click", () => navigateLightbox(-1));
  if (DOM.lightboxNextBtn) DOM.lightboxNextBtn.addEventListener("click", () => navigateLightbox(1));
  if (DOM.lightboxCloseBtn) DOM.lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (DOM.lightboxOverlay) DOM.lightboxOverlay.addEventListener("click", closeLightbox);

  // Lightbox Favorite Toggle
  if (DOM.lightboxFavBtn) {
    DOM.lightboxFavBtn.addEventListener("click", () => {
      const current = AppState.filteredImages[AppState.lightboxIndex];
      if (current) toggleFavorite(current.id);
    });
  }

  // Slideshow & Info & Actions
  if (DOM.startSlideshowBtn) DOM.startSlideshowBtn.addEventListener("click", startSlideshow);
  if (DOM.lightboxSlideshowBtn) DOM.lightboxSlideshowBtn.addEventListener("click", toggleSlideshow);
  if (DOM.lightboxInfoBtn && DOM.lightboxExifDrawer) {
    DOM.lightboxInfoBtn.addEventListener("click", () => {
      DOM.lightboxExifDrawer.classList.toggle("open");
    });
  }
  if (DOM.exifCloseBtn && DOM.lightboxExifDrawer) {
    DOM.exifCloseBtn.addEventListener("click", () => {
      DOM.lightboxExifDrawer.classList.remove("open");
    });
  }
  if (DOM.lightboxFullscreenBtn) DOM.lightboxFullscreenBtn.addEventListener("click", toggleFullscreen);
  if (DOM.lightboxDownloadBtn) DOM.lightboxDownloadBtn.addEventListener("click", downloadCurrentImage);
  if (DOM.lightboxShareBtn) DOM.lightboxShareBtn.addEventListener("click", shareCurrentImage);

  // Zoom Controls
  if (DOM.zoomInBtn) DOM.zoomInBtn.addEventListener("click", () => setZoom(AppState.zoomLevel + 0.4));
  if (DOM.zoomOutBtn) DOM.zoomOutBtn.addEventListener("click", () => setZoom(AppState.zoomLevel - 0.4));
  if (DOM.zoomResetBtn) DOM.zoomResetBtn.addEventListener("click", resetZoomAndPan);

  // Mouse Dragging Pan when Zoomed
  if (DOM.lightboxZoomViewport) {
    DOM.lightboxZoomViewport.addEventListener("mousedown", (e) => {
      if (AppState.zoomLevel <= 1) return;
      AppState.isDragging = true;
      AppState.startX = e.clientX - AppState.panX;
      AppState.startY = e.clientY - AppState.panY;
      DOM.lightboxZoomViewport.classList.add("dragging");
    });
  }

  window.addEventListener("mousemove", (e) => {
    if (!AppState.isDragging || AppState.zoomLevel <= 1) return;
    AppState.panX = e.clientX - AppState.startX;
    AppState.panY = e.clientY - AppState.startY;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    AppState.isDragging = false;
    if (DOM.lightboxZoomViewport) DOM.lightboxZoomViewport.classList.remove("dragging");
  });

  // Touch Swiping on Lightbox Image Container
  if (DOM.lightboxImageContainer) {
    DOM.lightboxImageContainer.addEventListener("touchstart", (e) => {
      if (AppState.zoomLevel > 1) return;
      AppState.touchStartX = e.changedTouches[0].screenX;
      AppState.touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    DOM.lightboxImageContainer.addEventListener("touchend", (e) => {
      if (AppState.zoomLevel > 1) return;
      AppState.touchEndX = e.changedTouches[0].screenX;
      AppState.touchEndY = e.changedTouches[0].screenY;
      handleTouchSwipe();
    }, { passive: true });
  }

  // Global Keyboard Shortcuts
  window.addEventListener("keydown", handleGlobalKeydown);

  // Scroll Progress & Back-to-Top Button
  window.addEventListener("scroll", handleWindowScroll, { passive: true });
  if (DOM.backToTopBtn) {
    DOM.backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Update Copyright Year
  if (DOM.copyrightYear) {
    DOM.copyrightYear.textContent = new Date().getFullYear();
  }
}

function handleTouchSwipe() {
  const diffX = AppState.touchEndX - AppState.touchStartX;
  const diffY = AppState.touchEndY - AppState.touchStartY;
  
  // Horizontal swipe threshold
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      navigateLightbox(1); // Swipe left -> Next
    } else {
      navigateLightbox(-1); // Swipe right -> Prev
    }
  }
}

function handleGlobalKeydown(e) {
  // If user is typing in search input, don't trigger shortcuts
  if (document.activeElement === DOM.searchInput && e.key !== "Escape") {
    return;
  }

  if (e.key === "?") {
    DOM.shortcutsModal.hidden = !DOM.shortcutsModal.hidden;
    return;
  }

  if (!AppState.isLightboxOpen) {
    if (e.key === "Escape" && !DOM.shortcutsModal.hidden) {
      DOM.shortcutsModal.hidden = true;
    }
    return;
  }

  switch (e.key) {
    case "ArrowRight":
    case "l":
    case "L":
      navigateLightbox(1);
      break;
    case "ArrowLeft":
    case "h":
    case "H":
      navigateLightbox(-1);
      break;
    case "Escape":
      closeLightbox();
      break;
    case " ":
      e.preventDefault();
      toggleSlideshow();
      break;
    case "i":
    case "I":
      DOM.lightboxExifDrawer.classList.toggle("open");
      break;
    case "k":
    case "K":
      const cur = AppState.filteredImages[AppState.lightboxIndex];
      if (cur) toggleFavorite(cur.id);
      break;
    case "f":
    case "F":
      toggleFullscreen();
      break;
    case "+":
    case "=":
      setZoom(AppState.zoomLevel + 0.4);
      break;
    case "-":
    case "_":
      setZoom(AppState.zoomLevel - 0.4);
      break;
    case "0":
      resetZoomAndPan();
      break;
  }
}

function handleWindowScroll() {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;

  // Back to top visibility
  if (scrollY > 400) {
    DOM.backToTopBtn.classList.add("visible");
  } else {
    DOM.backToTopBtn.classList.remove("visible");
  }

  // Circular progress ring dash offset
  if (DOM.scrollProgressRing) {
    const totalCircumference = 2 * Math.PI * 18; // r=18 => ~113.1
    const offset = totalCircumference - (scrollPercent * totalCircumference);
    DOM.scrollProgressRing.style.strokeDashoffset = `${offset}`;
  }
}

/* ==========================================================================
   13. Application Initialization
   ========================================================================== */
function init() {
  initStorage();
  updateCategoryCounts();
  applyFilters();
  setupEventListeners();
  console.log("LUMINA Gallery Application Engine initialized successfully.");
}

// Kick off when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
