// Color Palettes Data
const colorPalettes = [
  // Palette 1 - Maya Blue, Prussian Blue, Celadon
  {
    id: 1,
    name: "Ocean Depths",
    colors: [
      { hex: "#55C1FF", rgb: "85, 193, 255", cmyk: "67, 24, 0, 0" },
      { hex: "#102E4A", rgb: "16, 46, 74", cmyk: "78, 38, 0, 71" },
      { hex: "#AFE3C0", rgb: "175, 227, 192", cmyk: "23, 0, 15, 11" }
    ],
    tags: ["blue", "cool", "tranquil"]
  },
  // Palette 2 - Maize, Atomic Tangerine, Blush
  {
    id: 2,
    name: "Sunset Glow",
    colors: [
      { hex: "#FEE440", rgb: "254, 228, 64", cmyk: "0, 10, 75, 0" },
      { hex: "#FCA17D", rgb: "252, 161, 125", cmyk: "0, 36, 50, 1" },
      { hex: "#DA627D", rgb: "218, 98, 125", cmyk: "0, 55, 43, 15" }
    ],
    tags: ["warm", "vibrant", "sunset"]
  },
  // Palette 3 - Plum, Celadon, Tiffany Blue
  {
    id: 3,
    name: "Spring Garden",
    colors: [
      { hex: "#9A348E", rgb: "154, 52, 142", cmyk: "0, 66, 8, 40" },
      { hex: "#AFE3C0", rgb: "175, 227, 192", cmyk: "23, 0, 15, 11" },
      { hex: "#97EAD2", rgb: "151, 234, 210", cmyk: "36, 0, 10, 8" }
    ],
    tags: ["contrast", "fresh", "spring"]
  },
  // Palette 4 - Indigo, Rusty Red, Sunglow
  {
    id: 4,
    name: "Bold Contrast",
    colors: [
      { hex: "#540D6E", rgb: "84, 13, 110", cmyk: "24, 88, 0, 57" },
      { hex: "#DC2E3F", rgb: "220, 46, 63", cmyk: "0, 79, 71, 14" },
      { hex: "#FFD23F", rgb: "255, 210, 63", cmyk: "0, 18, 75, 0" }
    ],
    tags: ["bold", "vibrant", "contrast"]
  },
  // Palette 5 - Lavender Blush, Tiffany Blue, Indigo Dye
  {
    id: 5,
    name: "Pastel Dreams",
    colors: [
      { hex: "#F6E8EA", rgb: "246, 232, 234", cmyk: "0, 6, 5, 4" },
      { hex: "#97EAD2", rgb: "151, 234, 210", cmyk: "36, 0, 10, 8" },
      { hex: "#08415C", rgb: "8, 65, 92", cmyk: "91, 29, 0, 64" }
    ],
    tags: ["pastel", "contrast", "serene"]
  },
  // Palette 6 - Cherry Blossom Pink, Light Coral, Thulian Pink
  {
    id: 6,
    name: "Pink Paradise",
    colors: [
      { hex: "#F7B2B7", rgb: "247, 178, 183", cmyk: "0, 28, 26, 3" },
      { hex: "#F7717D", rgb: "247, 113, 125", cmyk: "0, 54, 49, 3" },
      { hex: "#DE639A", rgb: "222, 99, 154", cmyk: "0, 55, 31, 13" }
    ],
    tags: ["pink", "feminine", "soft"]
  },
  // Palette 7 - Mardi Gras, Dark Purple, Indigo Dye
  {
    id: 7,
    name: "Royal Depth",
    colors: [
      { hex: "#7F2982", rgb: "127, 41, 130", cmyk: "2, 68, 0, 49" },
      { hex: "#16001E", rgb: "22, 0, 30", cmyk: "27, 100, 0, 88" },
      { hex: "#08415C", rgb: "8, 65, 92", cmyk: "91, 29, 0, 64" }
    ],
    tags: ["dark", "royal", "deep"]
  },
  // Palette 8 - Blue Munsell, Aquamarine, Lavender Web
  {
    id: 8,
    name: "Ocean Breeze",
    colors: [
      { hex: "#388697", rgb: "56, 134, 151", cmyk: "63, 11, 0, 41" },
      { hex: "#B5FFE1", rgb: "181, 255, 225", cmyk: "29, 0, 12, 0" },
      { hex: "#DAD4EF", rgb: "218, 212, 239", cmyk: "9, 11, 0, 6" }
    ],
    tags: ["blue", "aqua", "calming"]
  },
  // Palette 9 - Bright Pink, Aquamarine, Blue Munsell
  {
    id: 9,
    name: "Tropical Splash",
    colors: [
      { hex: "#FC6471", rgb: "252, 100, 113", cmyk: "0, 60, 55, 1" },
      { hex: "#B5FFE1", rgb: "181, 255, 225", cmyk: "29, 0, 12, 0" },
      { hex: "#388697", rgb: "56, 134, 151", cmyk: "63, 11, 0, 41" }
    ],
    tags: ["tropical", "vibrant", "fresh"]
  },
  // Palette 10 - Mocha Mousse, Sage Green, Cream
  {
    id: 10,
    name: "Earthy Comfort",
    colors: [
      { hex: "#3C280D", rgb: "60, 40, 13", cmyk: "0, 33, 78, 76" },
      { hex: "#7D8C6D", rgb: "125, 140, 109", cmyk: "11, 0, 22, 45" },
      { hex: "#F9F5E3", rgb: "249, 245, 227", cmyk: "0, 2, 9, 2" }
    ],
    tags: ["earthy", "natural", "warm"]
  },
  // Palette 11 - Dusty Rose, Cherry Red, Butter Yellow
  {
    id: 11,
    name: "Elegant Contrast",
    colors: [
      { hex: "#C9ADA7", rgb: "201, 173, 167", cmyk: "0, 14, 17, 21" },
      { hex: "#A22522", rgb: "162, 37, 34", cmyk: "0, 77, 79, 36" },
      { hex: "#F3DE8A", rgb: "243, 222, 138", cmyk: "0, 9, 43, 5" }
    ],
    tags: ["elegant", "contrast", "sophisticated"]
  },
  // Palette 12 - Khaki, Pale Blue, White
  {
    id: 12,
    name: "Coastal Calm",
    colors: [
      { hex: "#BFB48F", rgb: "191, 180, 143", cmyk: "0, 6, 25, 25" },
      { hex: "#A4C2F4", rgb: "164, 194, 244", cmyk: "33, 20, 0, 4" },
      { hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" }
    ],
    tags: ["coastal", "calm", "light"]
  }
];

// Single Colors Data
const singleColors = [
  { name: "Maya Blue", hex: "#55C1FF", rgb: "85, 193, 255", cmyk: "67, 24, 0, 0" },
  { name: "Prussian Blue", hex: "#102E4A", rgb: "16, 46, 74", cmyk: "78, 38, 0, 71" },
  { name: "Celadon", hex: "#AFE3C0", rgb: "175, 227, 192", cmyk: "23, 0, 15, 11" },
  { name: "Maize", hex: "#FEE440", rgb: "254, 228, 64", cmyk: "0, 10, 75, 0" },
  { name: "Atomic Tangerine", hex: "#FCA17D", rgb: "252, 161, 125", cmyk: "0, 36, 50, 1" },
  { name: "Blush", hex: "#DA627D", rgb: "218, 98, 125", cmyk: "0, 55, 43, 15" },
  { name: "Plum", hex: "#9A348E", rgb: "154, 52, 142", cmyk: "0, 66, 8, 40" },
  { name: "Tiffany Blue", hex: "#97EAD2", rgb: "151, 234, 210", cmyk: "36, 0, 10, 8" },
  { name: "Indigo", hex: "#540D6E", rgb: "84, 13, 110", cmyk: "24, 88, 0, 57" },
  { name: "Rusty Red", hex: "#DC2E3F", rgb: "220, 46, 63", cmyk: "0, 79, 71, 14" },
  { name: "Sunglow", hex: "#FFD23F", rgb: "255, 210, 63", cmyk: "0, 18, 75, 0" },
  { name: "Lavender Blush", hex: "#F6E8EA", rgb: "246, 232, 234", cmyk: "0, 6, 5, 4" },
  { name: "Indigo Dye", hex: "#08415C", rgb: "8, 65, 92", cmyk: "91, 29, 0, 64" },
  { name: "Cherry Blossom Pink", hex: "#F7B2B7", rgb: "247, 178, 183", cmyk: "0, 28, 26, 3" },
  { name: "Light Coral", hex: "#F7717D", rgb: "247, 113, 125", cmyk: "0, 54, 49, 3" },
  { name: "Thulian Pink", hex: "#DE639A", rgb: "222, 99, 154", cmyk: "0, 55, 31, 13" },
  { name: "Mardi Gras", hex: "#7F2982", rgb: "127, 41, 130", cmyk: "2, 68, 0, 49" },
  { name: "Dark Purple", hex: "#16001E", rgb: "22, 0, 30", cmyk: "27, 100, 0, 88" },
  { name: "Blue Munsell", hex: "#388697", rgb: "56, 134, 151", cmyk: "63, 11, 0, 41" },
  { name: "Aquamarine", hex: "#B5FFE1", rgb: "181, 255, 225", cmyk: "29, 0, 12, 0" },
  { name: "Lavender Web", hex: "#DAD4EF", rgb: "218, 212, 239", cmyk: "9, 11, 0, 6" },
  { name: "Bright Pink", hex: "#FC6471", rgb: "252, 100, 113", cmyk: "0, 60, 55, 1" },
  { name: "Mocha", hex: "#3C280D", rgb: "60, 40, 13", cmyk: "0, 33, 78, 76" },
  { name: "Sage Green", hex: "#7D8C6D", rgb: "125, 140, 109", cmyk: "11, 0, 22, 45" },
  { name: "Cream", hex: "#F9F5E3", rgb: "249, 245, 227", cmyk: "0, 2, 9, 2" },
  { name: "Dusty Rose", hex: "#C9ADA7", rgb: "201, 173, 167", cmyk: "0, 14, 17, 21" },
  { name: "Cherry Red", hex: "#A22522", rgb: "162, 37, 34", cmyk: "0, 77, 79, 36" },
  { name: "Butter Yellow", hex: "#F3DE8A", rgb: "243, 222, 138", cmyk: "0, 9, 43, 5" },
  { name: "Khaki", hex: "#BFB48F", rgb: "191, 180, 143", cmyk: "0, 6, 25, 25" },
  { name: "Pale Blue", hex: "#A4C2F4", rgb: "164, 194, 244", cmyk: "33, 20, 0, 4" },
  { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
  { name: "Black", hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" }
];

// Helper function to convert HEX to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Helper function to convert RGB to HEX
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Helper function to convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Helper function to convert RGB to CMYK
function rgbToCmyk(r, g, b) {
  let c = 1 - (r / 255);
  let m = 1 - (g / 255);
  let y = 1 - (b / 255);
  let k = Math.min(c, m, y);

  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  c = Math.round(((c - k) / (1 - k)) * 100);
  m = Math.round(((m - k) / (1 - k)) * 100);
  y = Math.round(((y - k) / (1 - k)) * 100);
  k = Math.round(k * 100);

  return { c, m, y, k };
}

// Generate color variations (tints, shades, tones)
function generateColorVariations(hex) {
  const rgb = hexToRgb(hex);
  const variations = {
    tints: [],
    shades: [],
    tones: []
  };

  // Generate tints (lighter versions)
  for (let i = 1; i <= 5; i++) {
    const factor = i * 0.15;
    const r = Math.round(rgb.r + (255 - rgb.r) * factor);
    const g = Math.round(rgb.g + (255 - rgb.g) * factor);
    const b = Math.round(rgb.b + (255 - rgb.b) * factor);
    variations.tints.push(rgbToHex(r, g, b));
  }

  // Generate shades (darker versions)
  for (let i = 1; i <= 5; i++) {
    const factor = i * 0.15;
    const r = Math.round(rgb.r * (1 - factor));
    const g = Math.round(rgb.g * (1 - factor));
    const b = Math.round(rgb.b * (1 - factor));
    variations.shades.push(rgbToHex(r, g, b));
  }

  // Generate tones (desaturated versions)
  for (let i = 1; i <= 5; i++) {
    const factor = i * 0.15;
    const gray = (rgb.r + rgb.g + rgb.b) / 3;
    const r = Math.round(rgb.r + (gray - rgb.r) * factor);
    const g = Math.round(rgb.g + (gray - rgb.g) * factor);
    const b = Math.round(rgb.b + (gray - rgb.b) * factor);
    variations.tones.push(rgbToHex(r, g, b));
  }

  return variations;
}

// Generate color harmonies
function generateColorHarmonies(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const harmonies = {};

  // Complementary (opposite on the color wheel)
  const complementaryH = (hsl.h + 180) % 360;
  harmonies.complementary = hslToHex(complementaryH, hsl.s, hsl.l);

  // Analogous (adjacent on the color wheel)
  const analogous1H = (hsl.h + 30) % 360;
  const analogous2H = (hsl.h + 330) % 360;
  harmonies.analogous = [
    hslToHex(analogous1H, hsl.s, hsl.l),
    hslToHex(analogous2H, hsl.s, hsl.l)
  ];

  // Triadic (three colors evenly spaced)
  const triadic1H = (hsl.h + 120) % 360;
  const triadic2H = (hsl.h + 240) % 360;
  harmonies.triadic = [
    hslToHex(triadic1H, hsl.s, hsl.l),
    hslToHex(triadic2H, hsl.s, hsl.l)
  ];

  // Split Complementary
  const splitComp1H = (hsl.h + 150) % 360;
  const splitComp2H = (hsl.h + 210) % 360;
  harmonies.splitComplementary = [
    hslToHex(splitComp1H, hsl.s, hsl.l),
    hslToHex(splitComp2H, hsl.s, hsl.l)
  ];

  return harmonies;
}

// Helper function to convert HSL to HEX
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
}
