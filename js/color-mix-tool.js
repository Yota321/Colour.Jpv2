// Color Mix Tool Implementation
document.addEventListener('DOMContentLoaded', () => {
  // Check if color-mix-view exists in the DOM
  const colorMixView = document.querySelector('.color-mix-view');
  if (!colorMixView) return;

  // Create the color mix tool structure
  const colorMixContainer = document.createElement('div');
  colorMixContainer.classList.add('color-mix-container');

  // Add header
  const header = document.createElement('div');
  header.classList.add('color-mix-header', 'glass');
  header.innerHTML = `
    <h2>Color Mix Tool</h2>
    <p>Create and customize your own color palettes</p>
  `;
  colorMixContainer.appendChild(header);

  // Create the tool layout
  const colorMixTool = document.createElement('div');
  colorMixTool.classList.add('color-mix-tool');

  // Color picker section
  const colorPickerSection = document.createElement('div');
  colorPickerSection.classList.add('color-picker-section');
  colorPickerSection.innerHTML = `
    <div class="color-picker-header">
      <h3>Color Picker</h3>
      <button id="add-to-palette" class="palette-action-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Add to Palette
      </button>
    </div>
    <div class="color-preview" id="color-preview"></div>
    <div class="color-picker-controls">
      <div class="color-slider">
        <label>R</label>
        <input type="range" id="red-slider" min="0" max="255" value="128">
        <input type="number" id="red-value" min="0" max="255" value="128">
      </div>
      <div class="color-slider">
        <label>G</label>
        <input type="range" id="green-slider" min="0" max="255" value="128">
        <input type="number" id="green-value" min="0" max="255" value="128">
      </div>
      <div class="color-slider">
        <label>B</label>
        <input type="range" id="blue-slider" min="0" max="255" value="128">
        <input type="number" id="blue-value" min="0" max="255" value="128">
      </div>
      <div class="color-value-display">
        <span>HEX: </span>
        <input type="text" id="hex-value" value="#808080">
      </div>
    </div>
  `;

  // Palette preview section
  const palettePreviewSection = document.createElement('div');
  palettePreviewSection.classList.add('palette-preview-section');
  palettePreviewSection.innerHTML = `
    <div class="palette-preview-header">
      <h3>Your Palette</h3>
      <button id="clear-palette" class="palette-action-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        Clear
      </button>
    </div>
    <div class="palette-colors" id="palette-colors">
      <!-- Palette colors will be added here -->
    </div>
    <div class="palette-actions">
      <button id="save-palette" class="palette-action-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
          <polyline points="17 21 17 13 7 13 7 21"></polyline>
          <polyline points="7 3 7 8 15 8"></polyline>
        </svg>
        Save Palette
      </button>
      <button id="download-palette" class="palette-action-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download
      </button>
      <button id="visualize-palette" class="palette-action-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        </svg>
        Visualize
      </button>
    </div>
  `;

  // Add sections to the tool
  colorMixTool.appendChild(colorPickerSection);
  colorMixTool.appendChild(palettePreviewSection);
  colorMixContainer.appendChild(colorMixTool);

  // Add visualization preview section
  const visualizationSection = document.createElement('div');
  visualizationSection.classList.add('visualization-section', 'glass');
  visualizationSection.innerHTML = `
    <div class="visualization-header">
      <h3>Visualization Preview</h3>
      <div class="visualization-mode-selector">
        <button class="viz-mode-btn active" data-viz="fluid-waves">Fluid Waves</button>
        <button class="viz-mode-btn" data-viz="glass-morphism">Glass Morphism</button>
        <button class="viz-mode-btn" data-viz="gradient-blend">Gradient Blend</button>
        <button class="viz-mode-btn" data-viz="neon-glow">Neon Glow</button>
      </div>
    </div>
    <div class="visualization-container" id="mix-visualization-container">
      <!-- Visualization will be shown here -->
    </div>
  `;
  colorMixContainer.appendChild(visualizationSection);

  // Add the container to the view
  colorMixView.appendChild(colorMixContainer);

  // --- Color Mix Tool Functionality ---
  const redSlider = document.getElementById('red-slider');
  const greenSlider = document.getElementById('green-slider');
  const blueSlider = document.getElementById('blue-slider');
  const redValue = document.getElementById('red-value');
  const greenValue = document.getElementById('green-value');
  const blueValue = document.getElementById('blue-value');
  const hexValue = document.getElementById('hex-value');
  const colorPreview = document.getElementById('color-preview');
  const addToPaletteBtn = document.getElementById('add-to-palette');
  const paletteColorsContainer = document.getElementById('palette-colors');
  const clearPaletteBtn = document.getElementById('clear-palette');
  const savePaletteBtn = document.getElementById('save-palette');
  const downloadPaletteBtn = document.getElementById('download-palette');
  const visualizePaletteBtn = document.getElementById('visualize-palette');
  const vizModeButtons = document.querySelectorAll('.viz-mode-btn');
  const mixVisualizationContainer = document.getElementById('mix-visualization-container');

  // Current palette colors
  let currentPaletteColors = [];
  let currentMixVizMode = 'fluid-waves';

  // Update color preview
  function updateColorPreview() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);
    const hex = rgbToHex(r, g, b);
    
    colorPreview.style.backgroundColor = hex;
    hexValue.value = hex;
    
    // Update number inputs
    redValue.value = r;
    greenValue.value = g;
    blueValue.value = b;
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

  // Event listeners for sliders
  redSlider.addEventListener('input', updateColorPreview);
  greenSlider.addEventListener('input', updateColorPreview);
  blueSlider.addEventListener('input', updateColorPreview);

  // Event listeners for number inputs
  redValue.addEventListener('change', () => {
    redSlider.value = redValue.value;
    updateColorPreview();
  });

  greenValue.addEventListener('change', () => {
    greenSlider.value = greenValue.value;
    updateColorPreview();
  });

  blueValue.addEventListener('change', () => {
    blueSlider.value = blueValue.value;
    updateColorPreview();
  });

  // Event listener for hex input
  hexValue.addEventListener('change', () => {
    const rgb = hexToRgb(hexValue.value);
    if (rgb) {
      redSlider.value = rgb.r;
      greenSlider.value = rgb.g;
      blueSlider.value = rgb.b;
      redValue.value = rgb.r;
      greenValue.value = rgb.g;
      blueValue.value = rgb.b;
      colorPreview.style.backgroundColor = hexValue.value;
    }
  });

  // Add color to palette
  addToPaletteBtn.addEventListener('click', () => {
    const hex = hexValue.value;
    if (currentPaletteColors.length < 5) { // Limit to 5 colors
      currentPaletteColors.push(hex);
      updatePaletteDisplay();
      updateMixVisualization();
    } else {
      alert('Maximum 5 colors allowed in a palette. Remove a color first.');
    }
  });

  // Update palette display
  function updatePaletteDisplay() {
    paletteColorsContainer.innerHTML = '';
    currentPaletteColors.forEach((color, index) => {
      const colorElement = document.createElement('div');
      colorElement.classList.add('palette-color');
      colorElement.style.backgroundColor = color;
      colorElement.title = color;
      
      // Add remove button
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-color-btn');
      removeBtn.innerHTML = '×';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentPaletteColors.splice(index, 1);
        updatePaletteDisplay();
        updateMixVisualization();
      });
      
      colorElement.appendChild(removeBtn);
      paletteColorsContainer.appendChild(colorElement);
    });
  }

  // Clear palette
  clearPaletteBtn.addEventListener('click', () => {
    currentPaletteColors = [];
    updatePaletteDisplay();
    updateMixVisualization();
  });

  // Save palette
  savePaletteBtn.addEventListener('click', () => {
    if (currentPaletteColors.length < 3) {
      alert('Please add at least 3 colors to your palette.');
      return;
    }
    
    const paletteName = prompt('Enter a name for your palette:');
    if (paletteName) {
      // Create a new palette object
      const newPalette = {
        id: colorPalettes.length + 1,
        name: paletteName,
        colors: currentPaletteColors.map(hex => {
          const rgb = hexToRgb(hex);
          const rgbString = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
          const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
          const cmykString = `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`;
          return { hex, rgb: rgbString, cmyk: cmykString };
        }),
        tags: ['custom', 'user-created']
      };
      
      // Add to palettes array
      colorPalettes.push(newPalette);
      
      // Save to local storage
      localStorage.setItem('customPalettes', JSON.stringify(
        colorPalettes.filter(p => p.tags.includes('custom'))
      ));
      
      alert(`Palette "${paletteName}" saved successfully!`);
    }
  });

  // Download palette
  downloadPaletteBtn.addEventListener('click', () => {
    if (currentPaletteColors.length === 0) {
      alert('Please add colors to your palette first.');
      return;
    }
    
    // Create SVG content
    const svgContent = `
      <svg width="500" height="100" xmlns="http://www.w3.org/2000/svg">
        ${currentPaletteColors.map((color, i) => 
          `<rect x="${i * (500 / currentPaletteColors.length)}" y="0" 
                width="${500 / currentPaletteColors.length}" height="100" 
                fill="${color}" />`
        ).join('')}
      </svg>
    `;
    
    // Create download link
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `custom_palette_${Date.now()}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Visualize palette
  visualizePaletteBtn.addEventListener('click', () => {
    if (currentPaletteColors.length < 2) {
      alert('Please add at least 2 colors to visualize.');
      return;
    }
    
    updateMixVisualization();
  });

  // Switch visualization mode
  vizModeButtons.forEach(button => {
    button.addEventListener('click', () => {
      vizModeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentMixVizMode = button.getAttribute('data-viz');
      updateMixVisualization();
    });
  });

  // Update visualization
  function updateMixVisualization() {
    if (!mixVisualizationContainer || currentPaletteColors.length === 0) return;
    
    // Clear previous visualization
    mixVisualizationContainer.innerHTML = '';
    
    // Create a temporary palette object
    const tempPalette = {
      colors: currentPaletteColors.map(hex => ({ hex }))
    };
    
    // Create visualization based on current mode
    switch (currentMixVizMode) {
      case 'fluid-waves':
        createFluidWavesViz(mixVisualizationContainer, tempPalette);
        break;
      case 'glass-morphism':
        createGlassMorphismViz(mixVisualizationContainer, tempPalette);
        break;
      case 'gradient-blend':
        createGradientBlendViz(mixVisualizationContainer, tempPalette);
        break;
      case 'neon-glow':
        createNeonGlowViz(mixVisualizationContainer, tempPalette);
        break;
      default:
        createFluidWavesViz(mixVisualizationContainer, tempPalette);
    }
  }

  // Initialize with default color
  updateColorPreview();
});
