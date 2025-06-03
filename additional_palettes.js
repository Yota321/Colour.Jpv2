// Additional color palettes to expand the collection
const additionalPalettes = [
  // Palette 101 - Cyberpunk Neon
  {
    id: 101,
    name: "Cyberpunk Neon",
    colors: [
      { hex: "#00FFFF", rgb: "0, 255, 255", cmyk: "100, 0, 0, 0" },
      { hex: "#FF00FF", rgb: "255, 0, 255", cmyk: "0, 100, 0, 0" },
      { hex: "#121212", rgb: "18, 18, 18", cmyk: "0, 0, 0, 93" }
    ],
    tags: ["cyberpunk", "neon", "futuristic"]
  },
  // Palette 102 - Sunset Boulevard
  {
    id: 102,
    name: "Sunset Boulevard",
    colors: [
      { hex: "#FF7B00", rgb: "255, 123, 0", cmyk: "0, 52, 100, 0" },
      { hex: "#FF006E", rgb: "255, 0, 110", cmyk: "0, 100, 57, 0" },
      { hex: "#8338EC", rgb: "131, 56, 236", cmyk: "44, 76, 0, 7" }
    ],
    tags: ["sunset", "vibrant", "gradient"]
  },
  // Palette 103 - Arctic Frost
  {
    id: 103,
    name: "Arctic Frost",
    colors: [
      { hex: "#E3F6F5", rgb: "227, 246, 245", cmyk: "8, 0, 0, 4" },
      { hex: "#BAE8E8", rgb: "186, 232, 232", cmyk: "20, 0, 0, 9" },
      { hex: "#2C3E50", rgb: "44, 62, 80", cmyk: "45, 23, 0, 69" }
    ],
    tags: ["cold", "winter", "minimal"]
  },
  // Palette 104 - Digital Forest
  {
    id: 104,
    name: "Digital Forest",
    colors: [
      { hex: "#3A5A40", rgb: "58, 90, 64", cmyk: "36, 0, 29, 65" },
      { hex: "#588157", rgb: "88, 129, 87", cmyk: "32, 0, 33, 49" },
      { hex: "#A3B18A", rgb: "163, 177, 138", cmyk: "8, 0, 22, 31" }
    ],
    tags: ["forest", "natural", "digital"]
  },
  // Palette 105 - Retro Wave
  {
    id: 105,
    name: "Retro Wave",
    colors: [
      { hex: "#F72585", rgb: "247, 37, 133", cmyk: "0, 85, 46, 3" },
      { hex: "#7209B7", rgb: "114, 9, 183", cmyk: "38, 95, 0, 28" },
      { hex: "#3A0CA3", rgb: "58, 12, 163", cmyk: "64, 93, 0, 36" }
    ],
    tags: ["retro", "vibrant", "80s"]
  },
  // Palette 106 - Desert Mirage
  {
    id: 106,
    name: "Desert Mirage",
    colors: [
      { hex: "#E9C46A", rgb: "233, 196, 106", cmyk: "0, 16, 55, 9" },
      { hex: "#F4A261", rgb: "244, 162, 97", cmyk: "0, 34, 60, 4" },
      { hex: "#E76F51", rgb: "231, 111, 81", cmyk: "0, 52, 65, 9" }
    ],
    tags: ["desert", "warm", "earthy"]
  },
  // Palette 107 - Midnight Cosmos
  {
    id: 107,
    name: "Midnight Cosmos",
    colors: [
      { hex: "#0B090A", rgb: "11, 9, 10", cmyk: "0, 18, 9, 96" },
      { hex: "#161A1D", rgb: "22, 26, 29", cmyk: "24, 10, 0, 89" },
      { hex: "#660708", rgb: "102, 7, 8", cmyk: "0, 93, 92, 60" }
    ],
    tags: ["dark", "space", "mysterious"]
  },
  // Palette 108 - Electric Dreams
  {
    id: 108,
    name: "Electric Dreams",
    colors: [
      { hex: "#390099", rgb: "57, 0, 153", cmyk: "63, 100, 0, 40" },
      { hex: "#9E0059", rgb: "158, 0, 89", cmyk: "0, 100, 44, 38" },
      { hex: "#FF0054", rgb: "255, 0, 84", cmyk: "0, 100, 67, 0" }
    ],
    tags: ["electric", "vibrant", "neon"]
  },
  // Palette 109 - Zen Garden
  {
    id: 109,
    name: "Zen Garden",
    colors: [
      { hex: "#D8E2DC", rgb: "216, 226, 220", cmyk: "4, 0, 3, 11" },
      { hex: "#FFE5D9", rgb: "255, 229, 217", cmyk: "0, 10, 15, 0" },
      { hex: "#FFCAD4", rgb: "255, 202, 212", cmyk: "0, 21, 17, 0" }
    ],
    tags: ["pastel", "calm", "zen"]
  },
  // Palette 110 - Urban Jungle
  {
    id: 110,
    name: "Urban Jungle",
    colors: [
      { hex: "#2D6A4F", rgb: "45, 106, 79", cmyk: "58, 0, 25, 58" },
      { hex: "#52B788", rgb: "82, 183, 136", cmyk: "55, 0, 26, 28" },
      { hex: "#95D5B2", rgb: "149, 213, 178", cmyk: "30, 0, 16, 16" }
    ],
    tags: ["urban", "jungle", "green"]
  },
  // Palette 111 - Coral Reef
  {
    id: 111,
    name: "Coral Reef",
    colors: [
      { hex: "#E63946", rgb: "230, 57, 70", cmyk: "0, 75, 70, 10" },
      { hex: "#F1FAEE", rgb: "241, 250, 238", cmyk: "4, 0, 5, 2" },
      { hex: "#A8DADC", rgb: "168, 218, 220", cmyk: "24, 1, 0, 14" }
    ],
    tags: ["coral", "ocean", "fresh"]
  },
  // Palette 112 - Volcanic Ash
  {
    id: 112,
    name: "Volcanic Ash",
    colors: [
      { hex: "#463F3A", rgb: "70, 63, 58", cmyk: "0, 10, 17, 73" },
      { hex: "#8A817C", rgb: "138, 129, 124", cmyk: "0, 7, 10, 46" },
      { hex: "#BCB8B1", rgb: "188, 184, 177", cmyk: "0, 2, 6, 26" }
    ],
    tags: ["volcanic", "ash", "neutral"]
  },
  // Palette 113 - Neon Tokyo
  {
    id: 113,
    name: "Neon Tokyo",
    colors: [
      { hex: "#03071E", rgb: "3, 7, 30", cmyk: "90, 77, 0, 88" },
      { hex: "#DC2F02", rgb: "220, 47, 2", cmyk: "0, 79, 99, 14" },
      { hex: "#F48C06", rgb: "244, 140, 6", cmyk: "0, 43, 98, 4" }
    ],
    tags: ["neon", "tokyo", "night"]
  },
  // Palette 114 - Lavender Fields
  {
    id: 114,
    name: "Lavender Fields",
    colors: [
      { hex: "#7209B7", rgb: "114, 9, 183", cmyk: "38, 95, 0, 28" },
      { hex: "#B5179E", rgb: "181, 23, 158", cmyk: "0, 87, 13, 29" },
      { hex: "#F72585", rgb: "247, 37, 133", cmyk: "0, 85, 46, 3" }
    ],
    tags: ["lavender", "purple", "vibrant"]
  },
  // Palette 115 - Emerald City
  {
    id: 115,
    name: "Emerald City",
    colors: [
      { hex: "#004B23", rgb: "0, 75, 35", cmyk: "100, 0, 53, 71" },
      { hex: "#006400", rgb: "0, 100, 0", cmyk: "100, 0, 100, 61" },
      { hex: "#007200", rgb: "0, 114, 0", cmyk: "100, 0, 100, 55" }
    ],
    tags: ["emerald", "green", "city"]
  },
  // Palette 116 - Frozen Lake
  {
    id: 116,
    name: "Frozen Lake",
    colors: [
      { hex: "#CAF0F8", rgb: "202, 240, 248", cmyk: "19, 3, 0, 3" },
      { hex: "#90E0EF", rgb: "144, 224, 239", cmyk: "40, 6, 0, 6" },
      { hex: "#00B4D8", rgb: "0, 180, 216", cmyk: "100, 17, 0, 15" }
    ],
    tags: ["frozen", "lake", "winter"]
  },
  // Palette 117 - Autumn Harvest
  {
    id: 117,
    name: "Autumn Harvest",
    colors: [
      { hex: "#E9C46A", rgb: "233, 196, 106", cmyk: "0, 16, 55, 9" },
      { hex: "#F4A261", rgb: "244, 162, 97", cmyk: "0, 34, 60, 4" },
      { hex: "#E76F51", rgb: "231, 111, 81", cmyk: "0, 52, 65, 9" }
    ],
    tags: ["autumn", "harvest", "warm"]
  },
  // Palette 118 - Midnight Oil
  {
    id: 118,
    name: "Midnight Oil",
    colors: [
      { hex: "#10002B", rgb: "16, 0, 43", cmyk: "63, 100, 0, 83" },
      { hex: "#240046", rgb: "36, 0, 70", cmyk: "49, 100, 0, 73" },
      { hex: "#3C096C", rgb: "60, 9, 108", cmyk: "44, 92, 0, 58" }
    ],
    tags: ["midnight", "dark", "mysterious"]
  },
  // Palette 119 - Candy Shop
  {
    id: 119,
    name: "Candy Shop",
    colors: [
      { hex: "#FFADAD", rgb: "255, 173, 173", cmyk: "0, 32, 32, 0" },
      { hex: "#FFD6A5", rgb: "255, 214, 165", cmyk: "0, 16, 35, 0" },
      { hex: "#FDFFB6", rgb: "253, 255, 182", cmyk: "1, 0, 29, 0" }
    ],
    tags: ["candy", "sweet", "pastel"]
  },
  // Palette 120 - Deep Ocean
  {
    id: 120,
    name: "Deep Ocean",
    colors: [
      { hex: "#03045E", rgb: "3, 4, 94", cmyk: "97, 96, 0, 63" },
      { hex: "#023E8A", rgb: "2, 62, 138", cmyk: "99, 55, 0, 46" },
      { hex: "#0077B6", rgb: "0, 119, 182", cmyk: "100, 35, 0, 29" }
    ],
    tags: ["ocean", "deep", "blue"]
  },
  // Palette 121 - Terracotta Dream
  {
    id: 121,
    name: "Terracotta Dream",
    colors: [
      { hex: "#6F1D1B", rgb: "111, 29, 27", cmyk: "0, 74, 76, 56" },
      { hex: "#BB9457", rgb: "187, 148, 87", cmyk: "0, 21, 53, 27" },
      { hex: "#432818", rgb: "67, 40, 24", cmyk: "0, 40, 64, 74" }
    ],
    tags: ["terracotta", "earthy", "warm"]
  },
  // Palette 122 - Mint Chocolate
  {
    id: 122,
    name: "Mint Chocolate",
    colors: [
      { hex: "#D8F3DC", rgb: "216, 243, 220", cmyk: "11, 0, 9, 5" },
      { hex: "#95D5B2", rgb: "149, 213, 178", cmyk: "30, 0, 16, 16" },
      { hex: "#40916C", rgb: "64, 145, 108", cmyk: "56, 0, 26, 43" }
    ],
    tags: ["mint", "chocolate", "fresh"]
  },
  // Palette 123 - Berry Smoothie
  {
    id: 123,
    name: "Berry Smoothie",
    colors: [
      { hex: "#590D22", rgb: "89, 13, 34", cmyk: "0, 85, 62, 65" },
      { hex: "#800F2F", rgb: "128, 15, 47", cmyk: "0, 88, 63, 50" },
      { hex: "#A4133C", rgb: "164, 19, 60", cmyk: "0, 88, 63, 36" }
    ],
    tags: ["berry", "smoothie", "red"]
  },
  // Palette 124 - Golden Hour
  {
    id: 124,
    name: "Golden Hour",
    colors: [
      { hex: "#FFBE0B", rgb: "255, 190, 11", cmyk: "0, 25, 96, 0" },
      { hex: "#FB5607", rgb: "251, 86, 7", cmyk: "0, 66, 97, 2" },
      { hex: "#FF006E", rgb: "255, 0, 110", cmyk: "0, 100, 57, 0" }
    ],
    tags: ["golden", "sunset", "warm"]
  },
  // Palette 125 - Misty Morning
  {
    id: 125,
    name: "Misty Morning",
    colors: [
      { hex: "#EDEDE9", rgb: "237, 237, 233", cmyk: "0, 0, 2, 7" },
      { hex: "#D6CCC2", rgb: "214, 204, 194", cmyk: "0, 5, 9, 16" },
      { hex: "#F5EBE0", rgb: "245, 235, 224", cmyk: "0, 4, 9, 4" }
    ],
    tags: ["misty", "morning", "neutral"]
  },
  // Palette 126 - Electric Violet
  {
    id: 126,
    name: "Electric Violet",
    colors: [
      { hex: "#240046", rgb: "36, 0, 70", cmyk: "49, 100, 0, 73" },
      { hex: "#5A189A", rgb: "90, 24, 154", cmyk: "42, 84, 0, 40" },
      { hex: "#9D4EDD", rgb: "157, 78, 221", cmyk: "29, 65, 0, 13" }
    ],
    tags: ["electric", "violet", "vibrant"]
  },
  // Palette 127 - Sage and Rust
  {
    id: 127,
    name: "Sage and Rust",
    colors: [
      { hex: "#606C38", rgb: "96, 108, 56", cmyk: "11, 0, 48, 58" },
      { hex: "#283618", rgb: "40, 54, 24", cmyk: "26, 0, 56, 79" },
      { hex: "#DDA15E", rgb: "221, 161, 94", cmyk: "0, 27, 57, 13" }
    ],
    tags: ["sage", "rust", "earthy"]
  },
  // Palette 128 - Cosmic Latte
  {
    id: 128,
    name: "Cosmic Latte",
    colors: [
      { hex: "#FFF8E6", rgb: "255, 248, 230", cmyk: "0, 3, 10, 0" },
      { hex: "#F1DEDE", rgb: "241, 222, 222", cmyk: "0, 8, 8, 5" },
      { hex: "#D9D9D9", rgb: "217, 217, 217", cmyk: "0, 0, 0, 15" }
    ],
    tags: ["cosmic", "latte", "neutral"]
  },
  // Palette 129 - Tropical Paradise
  {
    id: 129,
    name: "Tropical Paradise",
    colors: [
      { hex: "#264653", rgb: "38, 70, 83", cmyk: "54, 16, 0, 67" },
      { hex: "#2A9D8F", rgb: "42, 157, 143", cmyk: "73, 0, 9, 38" },
      { hex: "#E9C46A", rgb: "233, 196, 106", cmyk: "0, 16, 55, 9" }
    ],
    tags: ["tropical", "paradise", "beach"]
  },
  // Palette 130 - Cherry Blossom
  {
    id: 130,
    name: "Cherry Blossom",
    colors: [
      { hex: "#FFCCD5", rgb: "255, 204, 213", cmyk: "0, 20, 16, 0" },
      { hex: "#FFACC7", rgb: "255, 172, 199", cmyk: "0, 33, 22, 0" },
      { hex: "#FF8FAB", rgb: "255, 143, 171", cmyk: "0, 44, 33, 0" }
    ],
    tags: ["cherry", "blossom", "pink"]
  },
  // Palette 131 - Stormy Sea
  {
    id: 131,
    name: "Stormy Sea",
    colors: [
      { hex: "#2B2D42", rgb: "43, 45, 66", cmyk: "35, 32, 0, 74" },
      { hex: "#8D99AE", rgb: "141, 153, 174", cmyk: "19, 12, 0, 32" },
      { hex: "#EDF2F4", rgb: "237, 242, 244", cmyk: "3, 1, 0, 4" }
    ],
    tags: ["stormy", "sea", "cool"]
  },
  // Palette 132 - Rustic Charm
  {
    id: 132,
    name: "Rustic Charm",
    colors: [
      { hex: "#582F0E", rgb: "88, 47, 14", cmyk: "0, 47, 84, 65" },
      { hex: "#7F4F24", rgb: "127, 79, 36", cmyk: "0, 38, 72, 50" },
      { hex: "#936639", rgb: "147, 102, 57", cmyk: "0, 31, 61, 42" }
    ],
    tags: ["rustic", "charm", "brown"]
  },
  // Palette 133 - Icy Mint
  {
    id: 133,
    name: "Icy Mint",
    colors: [
      { hex: "#E0FBFC", rgb: "224, 251, 252", cmyk: "11, 0, 0, 1" },
      { hex: "#98C1D9", rgb: "152, 193, 217", cmyk: "30, 11, 0, 15" },
      { hex: "#3D5A80", rgb: "61, 90, 128", cmyk: "52, 30, 0, 50" }
    ],
    tags: ["icy", "mint", "cool"]
  },
  // Palette 134 - Spicy Mustard
  {
    id: 134,
    name: "Spicy Mustard",
    colors: [
      { hex: "#FFD60A", rgb: "255, 214, 10", cmyk: "0, 16, 96, 0" },
      { hex: "#FFC300", rgb: "255, 195, 0", cmyk: "0, 24, 100, 0" },
      { hex: "#C1121F", rgb: "193, 18, 31", cmyk: "0, 91, 84, 24" }
    ],
    tags: ["spicy", "mustard", "yellow"]
  },
  // Palette 135 - Moonlight Shadow
  {
    id: 135,
    name: "Moonlight Shadow",
    colors: [
      { hex: "#22223B", rgb: "34, 34, 59", cmyk: "42, 42, 0, 77" },
      { hex: "#4A4E69", rgb: "74, 78, 105", cmyk: "30, 26, 0, 59" },
      { hex: "#9A8C98", rgb: "154, 140, 152", cmyk: "0, 9, 1, 40" }
    ],
    tags: ["moonlight", "shadow", "night"]
  },
  // Palette 136 - Succulent Garden
  {
    id: 136,
    name: "Succulent Garden",
    colors: [
      { hex: "#84A59D", rgb: "132, 165, 157", cmyk: "20, 0, 5, 35" },
      { hex: "#F28482", rgb: "242, 132, 130", cmyk: "0, 45, 46, 5" },
      { hex: "#F5CAC3", rgb: "245, 202, 195", cmyk: "0, 18, 20, 4" }
    ],
    tags: ["succulent", "garden", "pastel"]
  },
  // Palette 137 - Vintage Film
  {
    id: 137,
    name: "Vintage Film",
    colors: [
      { hex: "#FDE2E4", rgb: "253, 226, 228", cmyk: "0, 11, 10, 1" },
      { hex: "#FAD2E1", rgb: "250, 210, 225", cmyk: "0, 16, 10, 2" },
      { hex: "#C5DEDD", rgb: "197, 222, 221", cmyk: "11, 0, 0, 13" }
    ],
    tags: ["vintage", "film", "pastel"]
  },
  // Palette 138 - Urban Concrete
  {
    id: 138,
    name: "Urban Concrete",
    colors: [
      { hex: "#495057", rgb: "73, 80, 87", cmyk: "16, 8, 0, 66" },
      { hex: "#6C757D", rgb: "108, 117, 125", cmyk: "14, 6, 0, 51" },
      { hex: "#ADB5BD", rgb: "173, 181, 189", cmyk: "9, 4, 0, 26" }
    ],
    tags: ["urban", "concrete", "gray"]
  },
  // Palette 139 - Sunset Gradient
  {
    id: 139,
    name: "Sunset Gradient",
    colors: [
      { hex: "#F94144", rgb: "249, 65, 68", cmyk: "0, 74, 73, 2" },
      { hex: "#F3722C", rgb: "243, 114, 44", cmyk: "0, 53, 82, 5" },
      { hex: "#F8961E", rgb: "248, 150, 30", cmyk: "0, 40, 88, 3" }
    ],
    tags: ["sunset", "gradient", "warm"]
  },
  // Palette 140 - Forest Whisper
  {
    id: 140,
    name: "Forest Whisper",
    colors: [
      { hex: "#344E41", rgb: "52, 78, 65", cmyk: "33, 0, 17, 69" },
      { hex: "#3A5A40", rgb: "58, 90, 64", cmyk: "36, 0, 29, 65" },
      { hex: "#588157", rgb: "88, 129, 87", cmyk: "32, 0, 33, 49" }
    ],
    tags: ["forest", "whisper", "green"]
  },
  // Palette 141 - Blueberry Cream
  {
    id: 141,
    name: "Blueberry Cream",
    colors: [
      { hex: "#CDB4DB", rgb: "205, 180, 219", cmyk: "6, 18, 0, 14" },
      { hex: "#FFC8DD", rgb: "255, 200, 221", cmyk: "0, 22, 13, 0" },
      { hex: "#FFAFCC", rgb: "255, 175, 204", cmyk: "0, 31, 20, 0" }
    ],
    tags: ["blueberry", "cream", "pastel"]
  },
  // Palette 142 - Crimson Gold
  {
    id: 142,
    name: "Crimson Gold",
    colors: [
      { hex: "#641220", rgb: "100, 18, 32", cmyk: "0, 82, 68, 61" },
      { hex: "#6E1423", rgb: "110, 20, 35", cmyk: "0, 82, 68, 57" },
      { hex: "#D6AD60", rgb: "214, 173, 96", cmyk: "0, 19, 55, 16" }
    ],
    tags: ["crimson", "gold", "rich"]
  },
  // Palette 143 - Teal Elegance
  {
    id: 143,
    name: "Teal Elegance",
    colors: [
      { hex: "#006D77", rgb: "0, 109, 119", cmyk: "100, 8, 0, 53" },
      { hex: "#83C5BE", rgb: "131, 197, 190", cmyk: "33, 0, 4, 23" },
      { hex: "#EDF6F9", rgb: "237, 246, 249", cmyk: "5, 1, 0, 2" }
    ],
    tags: ["teal", "elegance", "calm"]
  },
  // Palette 144 - Raspberry Sorbet
  {
    id: 144,
    name: "Raspberry Sorbet",
    colors: [
      { hex: "#FFCCD5", rgb: "255, 204, 213", cmyk: "0, 20, 16, 0" },
      { hex: "#FFACC7", rgb: "255, 172, 199", cmyk: "0, 33, 22, 0" },
      { hex: "#FF8FAB", rgb: "255, 143, 171", cmyk: "0, 44, 33, 0" }
    ],
    tags: ["raspberry", "sorbet", "pink"]
  },
  // Palette 145 - Midnight Blue
  {
    id: 145,
    name: "Midnight Blue",
    colors: [
      { hex: "#03045E", rgb: "3, 4, 94", cmyk: "97, 96, 0, 63" },
      { hex: "#0077B6", rgb: "0, 119, 182", cmyk: "100, 35, 0, 29" },
      { hex: "#00B4D8", rgb: "0, 180, 216", cmyk: "100, 17, 0, 15" }
    ],
    tags: ["midnight", "blue", "deep"]
  },
  // Palette 146 - Olive Garden
  {
    id: 146,
    name: "Olive Garden",
    colors: [
      { hex: "#606C38", rgb: "96, 108, 56", cmyk: "11, 0, 48, 58" },
      { hex: "#283618", rgb: "40, 54, 24", cmyk: "26, 0, 56, 79" },
      { hex: "#FEFAE0", rgb: "254, 250, 224", cmyk: "0, 2, 12, 0" }
    ],
    tags: ["olive", "garden", "natural"]
  },
  // Palette 147 - Dusty Rose
  {
    id: 147,
    name: "Dusty Rose",
    colors: [
      { hex: "#9E7777", rgb: "158, 119, 119", cmyk: "0, 25, 25, 38" },
      { hex: "#E5CEDC", rgb: "229, 206, 220", cmyk: "0, 10, 4, 10" },
      { hex: "#F4F1DE", rgb: "244, 241, 222", cmyk: "0, 1, 9, 4" }
    ],
    tags: ["dusty", "rose", "vintage"]
  },
  // Palette 148 - Cosmic Purple
  {
    id: 148,
    name: "Cosmic Purple",
    colors: [
      { hex: "#240046", rgb: "36, 0, 70", cmyk: "49, 100, 0, 73" },
      { hex: "#3C096C", rgb: "60, 9, 108", cmyk: "44, 92, 0, 58" },
      { hex: "#5A189A", rgb: "90, 24, 154", cmyk: "42, 84, 0, 40" }
    ],
    tags: ["cosmic", "purple", "deep"]
  },
  // Palette 149 - Lemon Lime
  {
    id: 149,
    name: "Lemon Lime",
    colors: [
      { hex: "#FFFF3F", rgb: "255, 255, 63", cmyk: "0, 0, 75, 0" },
      { hex: "#7FFF00", rgb: "127, 255, 0", cmyk: "50, 0, 100, 0" },
      { hex: "#00FF7F", rgb: "0, 255, 127", cmyk: "100, 0, 50, 0" }
    ],
    tags: ["lemon", "lime", "bright"]
  },
  // Palette 150 - Smoky Quartz
  {
    id: 150,
    name: "Smoky Quartz",
    colors: [
      { hex: "#774936", rgb: "119, 73, 54", cmyk: "0, 39, 55, 53" },
      { hex: "#B08968", rgb: "176, 137, 104", cmyk: "0, 22, 41, 31" },
      { hex: "#D7C0AE", rgb: "215, 192, 174", cmyk: "0, 11, 19, 16" }
    ],
    tags: ["smoky", "quartz", "neutral"]
  }
];
