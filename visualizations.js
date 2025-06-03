// Visualization Modes Implementation
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements for Visualization
  const vizOptions = document.querySelectorAll('.viz-option');
  const downloadVizButton = document.getElementById('download-viz');
  
  // Current active visualization mode
  let currentVizMode = 'fluid-waves';
  
  // Switch visualization mode
  vizOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Update active state in UI
      vizOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      
      // Set current visualization mode
      currentVizMode = option.getAttribute('data-viz');
      
      // If a palette is currently being viewed, update its visualization
      if (currentDetailPalette) {
        updateVisualization(currentDetailPalette);
      }
    });
  });
  
  // Function to update visualization based on palette and mode
  function updateVisualization(palette) {
    const container = document.querySelector('#palette-detail .visualization-container');
    if (!container) return;
    
    // Clear previous visualization
    container.innerHTML = '';
    
    // Create visualization based on current mode
    switch (currentVizMode) {
      case 'fluid-waves':
        createFluidWavesViz(container, palette);
        break;
      case 'glass-morphism':
        createGlassMorphismViz(container, palette);
        break;
      case 'gradient-blend':
        createGradientBlendViz(container, palette);
        break;
      case 'neon-glow':
        createNeonGlowViz(container, palette);
        break;
      default:
        createFluidWavesViz(container, palette);
    }
  }
  
  // Fluid Waves Visualization
  function createFluidWavesViz(container, palette) {
    const fluidWaves = document.createElement('div');
    fluidWaves.classList.add('fluid-waves');
    
    // Create waves for each color
    palette.colors.forEach((color, index) => {
      const wave = document.createElement('div');
      wave.classList.add('wave');
      wave.style.background = `linear-gradient(45deg, ${color.hex} 0%, transparent 70%)`;
      wave.style.top = `${index * 30}%`;
      wave.style.animationDelay = `${index * -2}s`;
      fluidWaves.appendChild(wave);
    });
    
    container.appendChild(fluidWaves);
  }
  
  // Glass Morphism Visualization
  function createGlassMorphismViz(container, palette) {
    const glassMorphism = document.createElement('div');
    glassMorphism.classList.add('glass-morphism');
    
    // Set background gradient using palette colors
    const gradientColors = palette.colors.map(c => c.hex).join(', ');
    glassMorphism.style.background = `linear-gradient(135deg, ${gradientColors})`;
    
    // Create glass shapes
    palette.colors.forEach((color, index) => {
      const shape = document.createElement('div');
      shape.classList.add('glass-shape');
      shape.style.borderColor = color.hex;
      shape.style.boxShadow = `0 0 20px ${color.hex}40`;
      glassMorphism.appendChild(shape);
    });
    
    container.appendChild(glassMorphism);
  }
  
  // Gradient Blend Visualization
  function createGradientBlendViz(container, palette) {
    const gradientBlend = document.createElement('div');
    gradientBlend.classList.add('gradient-blend');
    
    // Set background
    gradientBlend.style.background = palette.colors[0].hex;
    
    // Create gradient overlays
    palette.colors.forEach((color, index) => {
      if (index === 0) return; // Skip first color as it's the background
      
      const overlay = document.createElement('div');
      overlay.classList.add('gradient-overlay');
      overlay.style.background = `radial-gradient(circle at ${50 + (index * 10)}% ${50 - (index * 10)}%, ${color.hex} 0%, transparent 70%)`;
      overlay.style.animationDelay = `${index * -3}s`;
      gradientBlend.appendChild(overlay);
    });
    
    container.appendChild(gradientBlend);
  }
  
  // Neon Glow Visualization
  function createNeonGlowViz(container, palette) {
    const neonGlow = document.createElement('div');
    neonGlow.classList.add('neon-glow');
    
    // Create neon lines for each color
    palette.colors.forEach((color, index) => {
      const line = document.createElement('div');
      line.classList.add('neon-line');
      line.style.top = `${20 + (index * 20)}%`;
      line.style.backgroundColor = color.hex;
      line.style.color = color.hex;
      line.style.animationDelay = `${index * 0.3}s`;
      neonGlow.appendChild(line);
    });
    
    container.appendChild(neonGlow);
  }
  
  // Download Visualization as SVG
  downloadVizButton.addEventListener('click', () => {
    if (!currentDetailPalette) return;
    
    // Create SVG content based on current visualization mode
    let svgContent = '';
    const colors = currentDetailPalette.colors.map(c => c.hex);
    
    switch (currentVizMode) {
      case 'fluid-waves':
        svgContent = createFluidWavesSVG(colors);
        break;
      case 'glass-morphism':
        svgContent = createGlassMorphismSVG(colors);
        break;
      case 'gradient-blend':
        svgContent = createGradientBlendSVG(colors);
        break;
      case 'neon-glow':
        svgContent = createNeonGlowSVG(colors);
        break;
      default:
        svgContent = createFluidWavesSVG(colors);
    }
    
    // Create download link
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentDetailPalette.name.replace(/\s+/g, '_')}_${currentVizMode}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  
  // SVG Generation Functions
  function createFluidWavesSVG(colors) {
    let paths = '';
    colors.forEach((color, i) => {
      const yOffset = i * 30;
      paths += `
        <path fill="${color}" opacity="0.5" d="
          M0,${60 + yOffset} 
          C150,${20 + yOffset} 350,${100 + yOffset} 500,${60 + yOffset}
          V200 H0 Z">
          <animate attributeName="d" 
            values="
              M0,${60 + yOffset} C150,${20 + yOffset} 350,${100 + yOffset} 500,${60 + yOffset} V200 H0 Z;
              M0,${80 + yOffset} C120,${40 + yOffset} 380,${80 + yOffset} 500,${40 + yOffset} V200 H0 Z;
              M0,${60 + yOffset} C150,${20 + yOffset} 350,${100 + yOffset} 500,${60 + yOffset} V200 H0 Z"
            dur="10s" repeatCount="indefinite" />
        </path>
      `;
    });
    
    return `
      <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="200" fill="#121212" />
        ${paths}
      </svg>
    `;
  }
  
  function createGlassMorphismSVG(colors) {
    const gradientDefs = `
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          ${colors.map((color, i) => 
            `<stop offset="${i * (100 / (colors.length - 1))}%" stop-color="${color}" />`
          ).join('')}
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
    `;
    
    let circles = '';
    colors.forEach((color, i) => {
      circles += `
        <circle cx="${100 + i * 80}" cy="${100 - i * 20}" r="${40 - i * 5}" 
          fill="${color}" opacity="0.3" filter="url(#blur)" />
      `;
    });
    
    return `
      <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        ${gradientDefs}
        <rect width="500" height="200" fill="url(#bgGradient)" />
        ${circles}
      </svg>
    `;
  }
  
  function createGradientBlendSVG(colors) {
    const gradientDefs = colors.map((color, i) => `
      <radialGradient id="gradient${i}" cx="${50 + i * 10}%" cy="${50 - i * 10}%" r="70%" fx="${50 + i * 10}%" fy="${50 - i * 10}%">
        <stop offset="0%" stop-color="${color}" />
        <stop offset="100%" stop-color="transparent" />
      </radialGradient>
    `).join('');
    
    let layers = '';
    colors.forEach((_, i) => {
      if (i === 0) return; // Skip first color as it's the background
      layers += `
        <rect width="500" height="200" fill="url(#gradient${i})" style="mix-blend-mode: overlay" />
      `;
    });
    
    return `
      <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>${gradientDefs}</defs>
        <rect width="500" height="200" fill="${colors[0]}" />
        ${layers}
      </svg>
    `;
  }
  
  function createNeonGlowSVG(colors) {
    const filterDefs = `
      <defs>
        ${colors.map((color, i) => `
          <filter id="neon${i}" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" />
            <feComposite operator="out" in="SourceGraphic" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="5" intercept="0" />
              <feFuncG type="linear" slope="5" intercept="0" />
              <feFuncB type="linear" slope="5" intercept="0" />
            </feComponentTransfer>
            <feBlend mode="screen" in2="SourceGraphic" />
          </filter>
        `).join('')}
      </defs>
    `;
    
    let lines = '';
    colors.forEach((color, i) => {
      lines += `
        <line x1="0" y1="${40 + i * 40}" x2="500" y2="${40 + i * 40}" 
          stroke="${color}" stroke-width="2" filter="url(#neon${i})" />
      `;
    });
    
    return `
      <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg">
        ${filterDefs}
        <rect width="500" height="200" fill="#000000" />
        ${lines}
      </svg>
    `;
  }
  
  // Expose functions to global scope for use in other scripts
  window.updateVisualization = updateVisualization;
});
