// Three-color combinations for enhanced palette variety
const threeColorCombinations = [
  // Vibrant Combinations
  {
    id: 201,
    name: "Electric Pulse",
    colors: [
      { hex: "#00FFFF", rgb: "0, 255, 255", cmyk: "100, 0, 0, 0" },
      { hex: "#FF00FF", rgb: "255, 0, 255", cmyk: "0, 100, 0, 0" },
      { hex: "#FFFF00", rgb: "255, 255, 0", cmyk: "0, 0, 100, 0" }
    ],
    tags: ["vibrant", "electric", "neon"]
  },
  {
    id: 202,
    name: "Digital Sunset",
    colors: [
      { hex: "#FF5F6D", rgb: "255, 95, 109", cmyk: "0, 63, 57, 0" },
      { hex: "#FFC371", rgb: "255, 195, 113", cmyk: "0, 24, 56, 0" },
      { hex: "#6E48AA", rgb: "110, 72, 170", cmyk: "35, 58, 0, 33" }
    ],
    tags: ["sunset", "gradient", "warm"]
  },
  {
    id: 203,
    name: "Futuristic Glow",
    colors: [
      { hex: "#08F7FE", rgb: "8, 247, 254", cmyk: "97, 3, 0, 0" },
      { hex: "#FE53BB", rgb: "254, 83, 187", cmyk: "0, 67, 26, 0" },
      { hex: "#09FBD3", rgb: "9, 251, 211", cmyk: "96, 0, 16, 2" }
    ],
    tags: ["futuristic", "glow", "cyberpunk"]
  },
  {
    id: 204,
    name: "Neon Nights",
    colors: [
      { hex: "#F72585", rgb: "247, 37, 133", cmyk: "0, 85, 46, 3" },
      { hex: "#4CC9F0", rgb: "76, 201, 240", cmyk: "68, 16, 0, 6" },
      { hex: "#4361EE", rgb: "67, 97, 238", cmyk: "72, 59, 0, 7" }
    ],
    tags: ["neon", "night", "vibrant"]
  },
  {
    id: 205,
    name: "Holographic Dream",
    colors: [
      { hex: "#B5179E", rgb: "181, 23, 158", cmyk: "0, 87, 13, 29" },
      { hex: "#7209B7", rgb: "114, 9, 183", cmyk: "38, 95, 0, 28" },
      { hex: "#560BAD", rgb: "86, 11, 173", cmyk: "50, 94, 0, 32" }
    ],
    tags: ["holographic", "dream", "purple"]
  },
  
  // Pastel Combinations
  {
    id: 206,
    name: "Cotton Candy",
    colors: [
      { hex: "#FFC8DD", rgb: "255, 200, 221", cmyk: "0, 22, 13, 0" },
      { hex: "#FFAFCC", rgb: "255, 175, 204", cmyk: "0, 31, 20, 0" },
      { hex: "#BDE0FE", rgb: "189, 224, 254", cmyk: "26, 12, 0, 0" }
    ],
    tags: ["pastel", "cotton candy", "soft"]
  },
  {
    id: 207,
    name: "Soft Horizon",
    colors: [
      { hex: "#D8E2DC", rgb: "216, 226, 220", cmyk: "4, 0, 3, 11" },
      { hex: "#FFE5D9", rgb: "255, 229, 217", cmyk: "0, 10, 15, 0" },
      { hex: "#FFCAD4", rgb: "255, 202, 212", cmyk: "0, 21, 17, 0" }
    ],
    tags: ["soft", "horizon", "pastel"]
  },
  {
    id: 208,
    name: "Dreamy Pastels",
    colors: [
      { hex: "#CDB4DB", rgb: "205, 180, 219", cmyk: "6, 18, 0, 14" },
      { hex: "#A2D2FF", rgb: "162, 210, 255", cmyk: "36, 18, 0, 0" },
      { hex: "#FFC8DD", rgb: "255, 200, 221", cmyk: "0, 22, 13, 0" }
    ],
    tags: ["dreamy", "pastel", "soft"]
  },
  {
    id: 209,
    name: "Sorbet Delight",
    colors: [
      { hex: "#FAD2E1", rgb: "250, 210, 225", cmyk: "0, 16, 10, 2" },
      { hex: "#FDE2E4", rgb: "253, 226, 228", cmyk: "0, 11, 10, 1" },
      { hex: "#E2ECE9", rgb: "226, 236, 233", cmyk: "4, 0, 1, 7" }
    ],
    tags: ["sorbet", "delight", "pastel"]
  },
  {
    id: 210,
    name: "Watercolor Sky",
    colors: [
      { hex: "#BDE0FE", rgb: "189, 224, 254", cmyk: "26, 12, 0, 0" },
      { hex: "#A2D2FF", rgb: "162, 210, 255", cmyk: "36, 18, 0, 0" },
      { hex: "#CDB4DB", rgb: "205, 180, 219", cmyk: "6, 18, 0, 14" }
    ],
    tags: ["watercolor", "sky", "pastel"]
  },
  
  // Earth Tones
  {
    id: 211,
    name: "Desert Sand",
    colors: [
      { hex: "#CB997E", rgb: "203, 153, 126", cmyk: "0, 25, 38, 20" },
      { hex: "#DDBEA9", rgb: "221, 190, 169", cmyk: "0, 14, 24, 13" },
      { hex: "#FFE8D6", rgb: "255, 232, 214", cmyk: "0, 9, 16, 0" }
    ],
    tags: ["desert", "sand", "earth"]
  },
  {
    id: 212,
    name: "Forest Floor",
    colors: [
      { hex: "#606C38", rgb: "96, 108, 56", cmyk: "11, 0, 48, 58" },
      { hex: "#283618", rgb: "40, 54, 24", cmyk: "26, 0, 56, 79" },
      { hex: "#DDA15E", rgb: "221, 161, 94", cmyk: "0, 27, 57, 13" }
    ],
    tags: ["forest", "floor", "earth"]
  },
  {
    id: 213,
    name: "Terracotta",
    colors: [
      { hex: "#BC6C25", rgb: "188, 108, 37", cmyk: "0, 43, 80, 26" },
      { hex: "#DDA15E", rgb: "221, 161, 94", cmyk: "0, 27, 57, 13" },
      { hex: "#FEFAE0", rgb: "254, 250, 224", cmyk: "0, 2, 12, 0" }
    ],
    tags: ["terracotta", "earth", "warm"]
  },
  {
    id: 214,
    name: "Clay and Moss",
    colors: [
      { hex: "#A98467", rgb: "169, 132, 103", cmyk: "0, 22, 39, 34" },
      { hex: "#6C584C", rgb: "108, 88, 76", cmyk: "0, 19, 30, 58" },
      { hex: "#ADC178", rgb: "173, 193, 120", cmyk: "10, 0, 38, 24" }
    ],
    tags: ["clay", "moss", "earth"]
  },
  {
    id: 215,
    name: "Autumn Leaves",
    colors: [
      { hex: "#D4A373", rgb: "212, 163, 115", cmyk: "0, 23, 46, 17" },
      { hex: "#FAEDCD", rgb: "250, 237, 205", cmyk: "0, 5, 18, 2" },
      { hex: "#E9EDC9", rgb: "233, 237, 201", cmyk: "2, 0, 15, 7" }
    ],
    tags: ["autumn", "leaves", "earth"]
  },
  
  // Monochromatic
  {
    id: 216,
    name: "Blue Depths",
    colors: [
      { hex: "#03045E", rgb: "3, 4, 94", cmyk: "97, 96, 0, 63" },
      { hex: "#0077B6", rgb: "0, 119, 182", cmyk: "100, 35, 0, 29" },
      { hex: "#90E0EF", rgb: "144, 224, 239", cmyk: "40, 6, 0, 6" }
    ],
    tags: ["blue", "depths", "monochromatic"]
  },
  {
    id: 217,
    name: "Green Harmony",
    colors: [
      { hex: "#2D6A4F", rgb: "45, 106, 79", cmyk: "58, 0, 25, 58" },
      { hex: "#40916C", rgb: "64, 145, 108", cmyk: "56, 0, 26, 43" },
      { hex: "#52B788", rgb: "82, 183, 136", cmyk: "55, 0, 26, 28" }
    ],
    tags: ["green", "harmony", "monochromatic"]
  },
  {
    id: 218,
    name: "Purple Gradient",
    colors: [
      { hex: "#240046", rgb: "36, 0, 70", cmyk: "49, 100, 0, 73" },
      { hex: "#5A189A", rgb: "90, 24, 154", cmyk: "42, 84, 0, 40" },
      { hex: "#9D4EDD", rgb: "157, 78, 221", cmyk: "29, 65, 0, 13" }
    ],
    tags: ["purple", "gradient", "monochromatic"]
  },
  {
    id: 219,
    name: "Red Spectrum",
    colors: [
      { hex: "#641220", rgb: "100, 18, 32", cmyk: "0, 82, 68, 61" },
      { hex: "#85182A", rgb: "133, 24, 42", cmyk: "0, 82, 68, 48" },
      { hex: "#A71E34", rgb: "167, 30, 52", cmyk: "0, 82, 69, 35" }
    ],
    tags: ["red", "spectrum", "monochromatic"]
  },
  {
    id: 220,
    name: "Gray Scale",
    colors: [
      { hex: "#212529", rgb: "33, 37, 41", cmyk: "20, 10, 0, 84" },
      { hex: "#495057", rgb: "73, 80, 87", cmyk: "16, 8, 0, 66" },
      { hex: "#6C757D", rgb: "108, 117, 125", cmyk: "14, 6, 0, 51" }
    ],
    tags: ["gray", "scale", "monochromatic"]
  },
  
  // Complementary
  {
    id: 221,
    name: "Orange and Blue",
    colors: [
      { hex: "#FB8500", rgb: "251, 133, 0", cmyk: "0, 47, 100, 2" },
      { hex: "#023E8A", rgb: "2, 62, 138", cmyk: "99, 55, 0, 46" },
      { hex: "#0077B6", rgb: "0, 119, 182", cmyk: "100, 35, 0, 29" }
    ],
    tags: ["orange", "blue", "complementary"]
  },
  {
    id: 222,
    name: "Purple and Yellow",
    colors: [
      { hex: "#7209B7", rgb: "114, 9, 183", cmyk: "38, 95, 0, 28" },
      { hex: "#F9C74F", rgb: "249, 199, 79", cmyk: "0, 20, 68, 2" },
      { hex: "#F8961E", rgb: "248, 150, 30", cmyk: "0, 40, 88, 3" }
    ],
    tags: ["purple", "yellow", "complementary"]
  },
  {
    id: 223,
    name: "Red and Green",
    colors: [
      { hex: "#D90429", rgb: "217, 4, 41", cmyk: "0, 98, 81, 15" },
      { hex: "#2B9348", rgb: "43, 147, 72", cmyk: "71, 0, 51, 42" },
      { hex: "#55A630", rgb: "85, 166, 48", cmyk: "49, 0, 71, 35" }
    ],
    tags: ["red", "green", "complementary"]
  },
  {
    id: 224,
    name: "Pink and Teal",
    colors: [
      { hex: "#FF5A5F", rgb: "255, 90, 95", cmyk: "0, 65, 63, 0" },
      { hex: "#3CCFCF", rgb: "60, 207, 207", cmyk: "71, 0, 0, 19" },
      { hex: "#00B4D8", rgb: "0, 180, 216", cmyk: "100, 17, 0, 15" }
    ],
    tags: ["pink", "teal", "complementary"]
  },
  {
    id: 225,
    name: "Violet and Gold",
    colors: [
      { hex: "#5F0F40", rgb: "95, 15, 64", cmyk: "0, 84, 33, 63" },
      { hex: "#FFD60A", rgb: "255, 214, 10", cmyk: "0, 16, 96, 0" },
      { hex: "#FFC300", rgb: "255, 195, 0", cmyk: "0, 24, 100, 0" }
    ],
    tags: ["violet", "gold", "complementary"]
  },
  
  // Analogous
  {
    id: 226,
    name: "Ocean Blues",
    colors: [
      { hex: "#48CAE4", rgb: "72, 202, 228", cmyk: "68, 11, 0, 11" },
      { hex: "#00B4D8", rgb: "0, 180, 216", cmyk: "100, 17, 0, 15" },
      { hex: "#0096C7", rgb: "0, 150, 199", cmyk: "100, 25, 0, 22" }
    ],
    tags: ["ocean", "blues", "analogous"]
  },
  {
    id: 227,
    name: "Sunset Hues",
    colors: [
      { hex: "#FF9E00", rgb: "255, 158, 0", cmyk: "0, 38, 100, 0" },
      { hex: "#FF7A00", rgb: "255, 122, 0", cmyk: "0, 52, 100, 0" },
      { hex: "#FF5400", rgb: "255, 84, 0", cmyk: "0, 67, 100, 0" }
    ],
    tags: ["sunset", "hues", "analogous"]
  },
  {
    id: 228,
    name: "Spring Greens",
    colors: [
      { hex: "#80B918", rgb: "128, 185, 24", cmyk: "31, 0, 87, 27" },
      { hex: "#55A630", rgb: "85, 166, 48", cmyk: "49, 0, 71, 35" },
      { hex: "#2B9348", rgb: "43, 147, 72", cmyk: "71, 0, 51, 42" }
    ],
    tags: ["spring", "greens", "analogous"]
  },
  {
    id: 229,
    name: "Berry Tones",
    colors: [
      { hex: "#9D0208", rgb: "157, 2, 8", cmyk: "0, 99, 95, 38" },
      { hex: "#D00000", rgb: "208, 0, 0", cmyk: "0, 100, 100, 18" },
      { hex: "#DC2F02", rgb: "220, 47, 2", cmyk: "0, 79, 99, 14" }
    ],
    tags: ["berry", "tones", "analogous"]
  },
  {
    id: 230,
    name: "Lavender Fields",
    colors: [
      { hex: "#7400B8", rgb: "116, 0, 184", cmyk: "37, 100, 0, 28" },
      { hex: "#6930C3", rgb: "105, 48, 195", cmyk: "46, 75, 0, 24" },
      { hex: "#5E60CE", rgb: "94, 96, 206", cmyk: "54, 53, 0, 19" }
    ],
    tags: ["lavender", "fields", "analogous"]
  },
  
  // Triadic
  {
    id: 231,
    name: "Primary Balance",
    colors: [
      { hex: "#EF476F", rgb: "239, 71, 111", cmyk: "0, 70, 54, 6" },
      { hex: "#FFD166", rgb: "255, 209, 102", cmyk: "0, 18, 60, 0" },
      { hex: "#06D6A0", rgb: "6, 214, 160", cmyk: "97, 0, 25, 16" }
    ],
    tags: ["primary", "balance", "triadic"]
  },
  {
    id: 232,
    name: "Jewel Tones",
    colors: [
      { hex: "#1A535C", rgb: "26, 83, 92", cmyk: "72, 10, 0, 64" },
      { hex: "#F7B267", rgb: "247, 178, 103", cmyk: "0, 28, 58, 3" },
      { hex: "#D62828", rgb: "214, 40, 40", cmyk: "0, 81, 81, 16" }
    ],
    tags: ["jewel", "tones", "triadic"]
  },
  {
    id: 233,
    name: "Vibrant Triad",
    colors: [
      { hex: "#FF0075", rgb: "255, 0, 117", cmyk: "0, 100, 54, 0" },
      { hex: "#172A3A", rgb: "23, 42, 58", cmyk: "60, 28, 0, 77" },
      { hex: "#09BC8A", rgb: "9, 188, 138", cmyk: "95, 0, 27, 26" }
    ],
    tags: ["vibrant", "triad", "triadic"]
  },
  {
    id: 234,
    name: "Bold Contrast",
    colors: [
      { hex: "#FF595E", rgb: "255, 89, 94", cmyk: "0, 65, 63, 0" },
      { hex: "#FFCA3A", rgb: "255, 202, 58", cmyk: "0, 21, 77, 0" },
      { hex: "#8AC926", rgb: "138, 201, 38", cmyk: "31, 0, 81, 21" }
    ],
    tags: ["bold", "contrast", "triadic"]
  },
  {
    id: 235,
    name: "Soft Triad",
    colors: [
      { hex: "#FFADAD", rgb: "255, 173, 173", cmyk: "0, 32, 32, 0" },
      { hex: "#A0C4FF", rgb: "160, 196, 255", cmyk: "37, 23, 0, 0" },
      { hex: "#BDB2FF", rgb: "189, 178, 255", cmyk: "26, 30, 0, 0" }
    ],
    tags: ["soft", "triad", "triadic"]
  },
  
  // Split Complementary
  {
    id: 236,
    name: "Twilight Sky",
    colors: [
      { hex: "#335C67", rgb: "51, 92, 103", cmyk: "51, 11, 0, 60" },
      { hex: "#E09F3E", rgb: "224, 159, 62", cmyk: "0, 29, 72, 12" },
      { hex: "#9E2A2B", rgb: "158, 42, 43", cmyk: "0, 73, 73, 38" }
    ],
    tags: ["twilight", "sky", "split complementary"]
  },
  {
    id: 237,
    name: "Vintage Charm",
    colors: [
      { hex: "#540B0E", rgb: "84, 11, 14", cmyk: "0, 87, 83, 67" },
      { hex: "#9E2A2B", rgb: "158, 42, 43", cmyk: "0, 73, 73, 38" },
      { hex: "#E09F3E", rgb: "224, 159, 62", cmyk: "0, 29, 72, 12" }
    ],
    tags: ["vintage", "charm", "split complementary"]
  },
  {
    id: 238,
    name: "Fresh Contrast",
    colors: [
      { hex: "#FF7B00", rgb: "255, 123, 0", cmyk: "0, 52, 100, 0" },
      { hex: "#006D77", rgb: "0, 109, 119", cmyk: "100, 8, 0, 53" },
      { hex: "#83C5BE", rgb: "131, 197, 190", cmyk: "33, 0, 4, 23" }
    ],
    tags: ["fresh", "contrast", "split complementary"]
  },
  {
    id: 239,
    name: "Regal Palette",
    colors: [
      { hex: "#5F0F40", rgb: "95, 15, 64", cmyk: "0, 84, 33, 63" },
      { hex: "#0F4C5C", rgb: "15, 76, 92", cmyk: "84, 17, 0, 64" },
      { hex: "#E36414", rgb: "227, 100, 20", cmyk: "0, 56, 91, 11" }
    ],
    tags: ["regal", "palette", "split complementary"]
  },
  {
    id: 240,
    name: "Natural Balance",
    colors: [
      { hex: "#588157", rgb: "88, 129, 87", cmyk: "32, 0, 33, 49" },
      { hex: "#A3B18A", rgb: "163, 177, 138", cmyk: "8, 0, 22, 31" },
      { hex: "#FFC300", rgb: "255, 195, 0", cmyk: "0, 24, 100, 0" }
    ],
    tags: ["natural", "balance", "split complementary"]
  },
  
  // Tetradic
  {
    id: 241,
    name: "Color Wheel",
    colors: [
      { hex: "#FF0000", rgb: "255, 0, 0", cmyk: "0, 100, 100, 0" },
      { hex: "#00FF00", rgb: "0, 255, 0", cmyk: "100, 0, 100, 0" },
      { hex: "#0000FF", rgb: "0, 0, 255", cmyk: "100, 100, 0, 0" }
    ],
    tags: ["color", "wheel", "tetradic"]
  },
  {
    id: 242,
    name: "Seasonal Mix",
    colors: [
      { hex: "#E63946", rgb: "230, 57, 70", cmyk: "0, 75, 70, 10" },
      { hex: "#F1FAEE", rgb: "241, 250, 238", cmyk: "4, 0, 5, 2" },
      { hex: "#A8DADC", rgb: "168, 218, 220", cmyk: "24, 1, 0, 14" }
    ],
    tags: ["seasonal", "mix", "tetradic"]
  },
  {
    id: 243,
    name: "Urban Palette",
    colors: [
      { hex: "#2B2D42", rgb: "43, 45, 66", cmyk: "35, 32, 0, 74" },
      { hex: "#8D99AE", rgb: "141, 153, 174", cmyk: "19, 12, 0, 32" },
      { hex: "#EF233C", rgb: "239, 35, 60", cmyk: "0, 85, 75, 6" }
    ],
    tags: ["urban", "palette", "tetradic"]
  },
  {
    id: 244,
    name: "Balanced Contrast",
    colors: [
      { hex: "#05668D", rgb: "5, 102, 141", cmyk: "96, 28, 0, 45" },
      { hex: "#028090", rgb: "2, 128, 144", cmyk: "99, 11, 0, 44" },
      { hex: "#00A896", rgb: "0, 168, 150", cmyk: "100, 0, 11, 34" }
    ],
    tags: ["balanced", "contrast", "tetradic"]
  },
  {
    id: 245,
    name: "Modern Quad",
    colors: [
      { hex: "#390099", rgb: "57, 0, 153", cmyk: "63, 100, 0, 40" },
      { hex: "#9E0059", rgb: "158, 0, 89", cmyk: "0, 100, 44, 38" },
      { hex: "#FF0054", rgb: "255, 0, 84", cmyk: "0, 100, 67, 0" }
    ],
    tags: ["modern", "quad", "tetradic"]
  },
  
  // Neutral with Pop
  {
    id: 246,
    name: "Gray with Pop",
    colors: [
      { hex: "#343A40", rgb: "52, 58, 64", cmyk: "19, 9, 0, 75" },
      { hex: "#6C757D", rgb: "108, 117, 125", cmyk: "14, 6, 0, 51" },
      { hex: "#FF3366", rgb: "255, 51, 102", cmyk: "0, 80, 60, 0" }
    ],
    tags: ["gray", "pop", "neutral"]
  },
  {
    id: 247,
    name: "Beige Accent",
    colors: [
      { hex: "#F5F5F5", rgb: "245, 245, 245", cmyk: "0, 0, 0, 4" },
      { hex: "#E5E5E5", rgb: "229, 229, 229", cmyk: "0, 0, 0, 10" },
      { hex: "#007BFF", rgb: "0, 123, 255", cmyk: "100, 52, 0, 0" }
    ],
    tags: ["beige", "accent", "neutral"]
  },
  {
    id: 248,
    name: "Cream and Teal",
    colors: [
      { hex: "#F8F9FA", rgb: "248, 249, 250", cmyk: "1, 0, 0, 2" },
      { hex: "#E9ECEF", rgb: "233, 236, 239", cmyk: "3, 1, 0, 6" },
      { hex: "#20C997", rgb: "32, 201, 151", cmyk: "84, 0, 25, 21" }
    ],
    tags: ["cream", "teal", "neutral"]
  },
  {
    id: 249,
    name: "Charcoal Pop",
    colors: [
      { hex: "#212529", rgb: "33, 37, 41", cmyk: "20, 10, 0, 84" },
      { hex: "#495057", rgb: "73, 80, 87", cmyk: "16, 8, 0, 66" },
      { hex: "#FFC107", rgb: "255, 193, 7", cmyk: "0, 24, 97, 0" }
    ],
    tags: ["charcoal", "pop", "neutral"]
  },
  {
    id: 250,
    name: "Ivory and Rose",
    colors: [
      { hex: "#F8F9FA", rgb: "248, 249, 250", cmyk: "1, 0, 0, 2" },
      { hex: "#DEE2E6", rgb: "222, 226, 230", cmyk: "3, 2, 0, 10" },
      { hex: "#FF6B6B", rgb: "255, 107, 107", cmyk: "0, 58, 58, 0" }
    ],
    tags: ["ivory", "rose", "neutral"]
  }
];
