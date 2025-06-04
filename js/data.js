// Color Palettes Data
const colorPalettes = [
  {
    id: 1,
    name: "Ocean Breeze",
    colors: [
      { hex: "#001219", rgb: "0, 18, 25", cmyk: "100, 28, 0, 85" },
      { hex: "#005F73", rgb: "0, 95, 115", cmyk: "100, 17, 0, 55" },
      { hex: "#0A9396", rgb: "10, 147, 150", cmyk: "93, 2, 0, 41" },
      { hex: "#94D2BD", rgb: "148, 210, 189", cmyk: "30, 0, 10, 18" },
      { hex: "#E9D8A6", rgb: "233, 216, 166", cmyk: "0, 7, 29, 9" }
    ],
    tags: ["cool", "blue", "green", "water", "trending"]
  },
  {
    id: 2,
    name: "Sunset Glow",
    colors: [
      { hex: "#9B2226", rgb: "155, 34, 38", cmyk: "0, 78, 75, 39" },
      { hex: "#AE2012", rgb: "174, 32, 18", cmyk: "0, 82, 90, 32" },
      { hex: "#BB3E03", rgb: "187, 62, 3", cmyk: "0, 67, 98, 27" },
      { hex: "#CA6702", rgb: "202, 103, 2", cmyk: "0, 49, 99, 21" },
      { hex: "#EE9B00", rgb: "238, 155, 0", cmyk: "0, 35, 100, 7" }
    ],
    tags: ["warm", "red", "orange", "fire", "trending"]
  },
  {
    id: 3,
    name: "Spring Pastels",
    colors: [
      { hex: "#FFADAD", rgb: "255, 173, 173", cmyk: "0, 32, 32, 0" },
      { hex: "#FFD6A5", rgb: "255, 214, 165", cmyk: "0, 16, 35, 0" },
      { hex: "#FDFFB6", rgb: "253, 255, 182", cmyk: "1, 0, 29, 0" },
      { hex: "#CAFFBF", rgb: "202, 255, 191", cmyk: "21, 0, 25, 0" },
      { hex: "#9BF6FF", rgb: "155, 246, 255", cmyk: "39, 4, 0, 0" }
    ],
    tags: ["light", "pastel", "spring", "soft"]
  },
  {
    id: 4,
    name: "Forest Depths",
    colors: [
      { hex: "#D8F3DC", rgb: "216, 243, 220", cmyk: "11, 0, 9, 5" },
      { hex: "#B7E4C7", rgb: "183, 228, 199", cmyk: "20, 0, 13, 11" },
      { hex: "#95D5B2", rgb: "149, 213, 178", cmyk: "30, 0, 16, 16" },
      { hex: "#74C69D", rgb: "116, 198, 157", cmyk: "41, 0, 21, 22" },
      { hex: "#52B788", rgb: "82, 183, 136", cmyk: "55, 0, 26, 28" }
    ],
    tags: ["green", "nature", "forest", "calm"]
  },
  {
    id: 5,
    name: "Berry Smoothie",
    colors: [
      { hex: "#CDB4DB", rgb: "205, 180, 219", cmyk: "6, 18, 0, 14" },
      { hex: "#FFC8DD", rgb: "255, 200, 221", cmyk: "0, 22, 13, 0" },
      { hex: "#FFAFCC", rgb: "255, 175, 204", cmyk: "0, 31, 20, 0" },
      { hex: "#BDE0FE", rgb: "189, 224, 254", cmyk: "26, 12, 0, 0" },
      { hex: "#A2D2FF", rgb: "162, 210, 255", cmyk: "36, 18, 0, 0" }
    ],
    tags: ["pink", "purple", "blue", "sweet", "trending"]
  },
  {
    id: 6,
    name: "Dark Elegance",
    colors: [
      { hex: "#03071E", rgb: "3, 7, 30", cmyk: "90, 77, 0, 88" },
      { hex: "#370617", rgb: "55, 6, 23", cmyk: "0, 89, 58, 78" },
      { hex: "#6A040F", rgb: "106, 4, 15", cmyk: "0, 96, 86, 58" },
      { hex: "#9D0208", rgb: "157, 2, 8", cmyk: "0, 99, 95, 38" },
      { hex: "#D00000", rgb: "208, 0, 0", cmyk: "0, 100, 100, 18" }
    ],
    tags: ["dark", "red", "black", "elegant"]
  },
  {
    id: 7,
    name: "Tropical Paradise",
    colors: [
      { hex: "#264653", rgb: "38, 70, 83", cmyk: "54, 16, 0, 67" },
      { hex: "#2A9D8F", rgb: "42, 157, 143", cmyk: "73, 0, 9, 38" },
      { hex: "#E9C46A", rgb: "233, 196, 106", cmyk: "0, 16, 55, 9" },
      { hex: "#F4A261", rgb: "244, 162, 97", cmyk: "0, 34, 60, 4" },
      { hex: "#E76F51", rgb: "231, 111, 81", cmyk: "0, 52, 65, 9" }
    ],
    tags: ["beach", "summer", "warm", "trending"]
  },
  {
    id: 8,
    name: "Neon Nights",
    colors: [
      { hex: "#2B2D42", rgb: "43, 45, 66", cmyk: "35, 32, 0, 74" },
      { hex: "#8D99AE", rgb: "141, 153, 174", cmyk: "19, 12, 0, 32" },
      { hex: "#EDF2F4", rgb: "237, 242, 244", cmyk: "3, 1, 0, 4" },
      { hex: "#EF233C", rgb: "239, 35, 60", cmyk: "0, 85, 75, 6" },
      { hex: "#D90429", rgb: "217, 4, 41", cmyk: "0, 98, 81, 15" }
    ],
    tags: ["neon", "red", "contrast", "modern"]
  }
];

// Single Colors Data
const singleColors = [
  { name: "Ruby Red", hex: "#E63946", rgb: "230, 57, 70", cmyk: "0, 75, 70, 10" },
  { name: "Honeydew", hex: "#F1FAEE", rgb: "241, 250, 238", cmyk: "4, 0, 5, 2" },
  { name: "Powder Blue", hex: "#A8DADC", rgb: "168, 218, 220", cmyk: "24, 1, 0, 14" },
  { name: "Celadon Blue", hex: "#457B9D", rgb: "69, 123, 157", cmyk: "56, 22, 0, 38" },
  { name: "Prussian Blue", hex: "#1D3557", rgb: "29, 53, 87", cmyk: "67, 39, 0, 66" },
  { name: "Marigold", hex: "#FFBE0B", rgb: "255, 190, 11", cmyk: "0, 25, 96, 0" },
  { name: "Orange Peel", hex: "#FB5607", rgb: "251, 86, 7", cmyk: "0, 66, 97, 2" },
  { name: "Magenta", hex: "#FF006E", rgb: "255, 0, 110", cmyk: "0, 100, 57, 0" },
  { name: "Violet", hex: "#8338EC", rgb: "131, 56, 236", cmyk: "44, 76, 0, 7" },
  { name: "Azure", hex: "#3A86FF", rgb: "58, 134, 255", cmyk: "77, 47, 0, 0" },
  { name: "Mint", hex: "#8AC926", rgb: "138, 201, 38", cmyk: "31, 0, 81, 21" },
  { name: "Saffron", hex: "#FFD166", rgb: "255, 209, 102", cmyk: "0, 18, 60, 0" },
  { name: "Coral", hex: "#EF476F", rgb: "239, 71, 111", cmyk: "0, 70, 54, 6" },
  { name: "Turquoise", hex: "#06D6A0", rgb: "6, 214, 160", cmyk: "97, 0, 25, 16" },
  { name: "Indigo", hex: "#073B4C", rgb: "7, 59, 76", cmyk: "91, 22, 0, 70" },
  { name: "Lavender", hex: "#E0AAFF", rgb: "224, 170, 255", cmyk: "12, 33, 0, 0" },
  { name: "Plum", hex: "#9D4EDD", rgb: "157, 78, 221", cmyk: "29, 65, 0, 13" },
  { name: "Teal", hex: "#0096C7", rgb: "0, 150, 199", cmyk: "100, 25, 0, 22" },
  { name: "Amber", hex: "#FFAA00", rgb: "255, 170, 0", cmyk: "0, 33, 100, 0" },
  { name: "Crimson", hex: "#DC2F02", rgb: "220, 47, 2", cmyk: "0, 79, 99, 14" }
];

// Helper functions for color manipulation
function generateColorVariations(hex) {
  const rgb = hexToRgb(hex);
  const tints = [];
  const shades = [];
  const tones = [];
  
  // Generate tints (lighter versions)
  for (let i = 1; i <= 5; i++) {
    const tintFactor = i * 0.15;
    const r = Math.round(rgb.r + (255 - rgb.r) * tintFactor);
    const g = Math.round(rgb.g + (255 - rgb.g) * tintFactor);
    const b = Math.round(rgb.b + (255 - rgb.b) * tintFactor);
    tints.push(rgbToHex(r, g, b));
  }
  
  // Generate shades (darker versions)
  for (let i = 1; i <= 5; i++) {
    const shadeFactor = i * 0.15;
    const r = Math.round(rgb.r * (1 - shadeFactor));
    const g = Math.round(rgb.g * (1 - shadeFactor));
    const b = Math.round(rgb.b * (1 - shadeFactor));
    shades.push(rgbToHex(r, g, b));
  }
  
  // Generate tones (desaturated versions)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  for (let i = 1; i <= 5; i++) {
    const toneFactor = i * 0.15;
    const newSaturation = Math.max(0, hsl.s - hsl.s * toneFactor);
    const newRgb = hslToRgb(hsl.h / 360, newSaturation / 100, hsl.l / 100);
    tones.push(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  }
  
  return { tints, shades, tones };
}

function generateColorHarmonies(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const h = hsl.h;
  
  // Calculate harmony angles
  const complementary = (h + 180) % 360;
  const analogous1 = (h + 30) % 360;
  const analogous2 = (h + 330) % 360;
  const triadic1 = (h + 120) % 360;
  const triadic2 = (h + 240) % 360;
  const splitComplementary1 = (h + 150) % 360;
  const splitComplementary2 = (h + 210) % 360;
  
  // Convert back to RGB and then to HEX
  const complementaryRgb = hslToRgb(complementary / 360, hsl.s / 100, hsl.l / 100);
  const analogous1Rgb = hslToRgb(analogous1 / 360, hsl.s / 100, hsl.l / 100);
  const analogous2Rgb = hslToRgb(analogous2 / 360, hsl.s / 100, hsl.l / 100);
  const triadic1Rgb = hslToRgb(triadic1 / 360, hsl.s / 100, hsl.l / 100);
  const triadic2Rgb = hslToRgb(triadic2 / 360, hsl.s / 100, hsl.l / 100);
  const splitComplementary1Rgb = hslToRgb(splitComplementary1 / 360, hsl.s / 100, hsl.l / 100);
  const splitComplementary2Rgb = hslToRgb(splitComplementary2 / 360, hsl.s / 100, hsl.l / 100);
  
  return {
    complementary: rgbToHex(complementaryRgb.r, complementaryRgb.g, complementaryRgb.b),
    analogous: [
      rgbToHex(analogous1Rgb.r, analogous1Rgb.g, analogous1Rgb.b),
      rgbToHex(analogous2Rgb.r, analogous2Rgb.g, analogous2Rgb.b)
    ],
    triadic: [
      rgbToHex(triadic1Rgb.r, triadic1Rgb.g, triadic1Rgb.b),
      rgbToHex(triadic2Rgb.r, triadic2Rgb.g, triadic2Rgb.b)
    ],
    splitComplementary: [
      rgbToHex(splitComplementary1Rgb.r, splitComplementary1Rgb.g, splitComplementary1Rgb.b),
      rgbToHex(splitComplementary2Rgb.r, splitComplementary2Rgb.g, splitComplementary2Rgb.b)
    ]
  };
}

// RGB to HEX conversion
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// HEX to RGB conversion
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// RGB to HSL conversion
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

// HSL to RGB conversion
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

// RGB to CMYK conversion
function rgbToCmyk(r, g, b) {
  r = r / 255;
  g = g / 255;
  b = b / 255;
  
  const k = 1 - Math.max(r, g, b);
  const c = (1 - r - k) / (1 - k) || 0;
  const m = (1 - g - k) / (1 - k) || 0;
  const y = (1 - b - k) / (1 - k) || 0;
  
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}
