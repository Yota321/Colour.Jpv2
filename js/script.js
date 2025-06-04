document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const closeSidebar = document.getElementById('close-sidebar');
  const sidebar = document.querySelector('.sidebar');
  const topNavItems = document.querySelectorAll('.top-nav .nav-item');
  const sidebarNavItems = document.querySelectorAll('.sidebar .main-nav .nav-item');
  const mainContentViews = document.querySelectorAll('.main-content > div[class$="-view"]');
  const colorDetailModal = document.getElementById('color-detail');
  const paletteDetailModal = document.getElementById('palette-detail');
  const closeModalButtons = document.querySelectorAll('.modal .close-button');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');
  const homePreviewButtons = document.querySelectorAll('.view-more-btn');
  const vizOptions = document.querySelectorAll('.viz-option');

  // --- Sidebar Functionality ---
  hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });

  // Close sidebar if clicking outside of it
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target) && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  });

  // --- View Switching --- 
  function setActiveView(viewName) {
    console.log(`Switching to view: ${viewName}`);
    
    // Deactivate all views
    mainContentViews.forEach(view => view.classList.remove('active'));
    
    // Deactivate all nav items
    topNavItems.forEach(item => item.classList.remove('active'));
    sidebarNavItems.forEach(item => item.classList.remove('active'));
    
    // Activate the target view
    const targetView = document.querySelector(`.${viewName}-view`);
    if (targetView) {
      targetView.classList.add('active');
    } else {
      console.error(`View not found: ${viewName}-view`);
    }

    // Activate the corresponding nav item(s)
    const targetTopNavItem = document.querySelector(`.top-nav .nav-item[data-view="${viewName}"]`);
    if (targetTopNavItem) {
      targetTopNavItem.classList.add('active');
    }
    
    const targetSidebarNavItem = document.querySelector(`.sidebar .main-nav .nav-item[data-view="${viewName}"]`);
    if (targetSidebarNavItem) {
      targetSidebarNavItem.classList.add('active');
    }
    
    // Close sidebar after navigation
    sidebar.classList.remove('open');
  }

  // Add click event listeners to top navigation items
  topNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
      setActiveView(view);
    });
  });

  // Add click event listeners to sidebar navigation items
  sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
      setActiveView(view);
    });
  });

  // Add click event listeners to home preview buttons
  homePreviewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.getAttribute('data-view');
      setActiveView(view);
    });
  });

  // --- Modal Functionality ---
  function openModal(modalElement) {
    modalElement.classList.add('open');
  }

  function closeModal(modalElement) {
    modalElement.classList.remove('open');
  }

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeModal(button.closest('.modal'));
    });
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      closeModal(backdrop.closest('.modal'));
    });
  });

  // --- Visualization Options ---
  vizOptions.forEach(option => {
    option.addEventListener('click', () => {
      vizOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
      
      const vizType = option.getAttribute('data-viz');
      updateVisualization(vizType);
    });
  });

  function updateVisualization(vizType) {
    console.log(`Updating visualization to: ${vizType}`);
    // This would be implemented to change the active visualization
    // For now, just log the change
  }

  // --- Single Color View --- 
  const singleColorGrid = document.querySelector('.single-colors-view');
  
  function displaySingleColors() {
    if (!singleColorGrid) return;
    
    singleColorGrid.innerHTML = ''; // Clear previous content
    
    // Check if colorData is available
    if (!window.singleColors || !Array.isArray(window.singleColors)) {
      console.error('Single colors data not available');
      return;
    }
    
    window.singleColors.forEach(color => {
      const colorCard = document.createElement('div');
      colorCard.classList.add('color-card', 'glass');
      colorCard.style.backgroundColor = color.hex;
      colorCard.dataset.hex = color.hex;
      colorCard.innerHTML = `<span>${color.name}</span>`;
      
      colorCard.addEventListener('click', () => {
        showColorDetail(color.hex);
      });
      
      singleColorGrid.appendChild(colorCard);
    });
  }

  function showColorDetail(hex) {
    // Find color data
    const colorData = window.singleColors.find(c => c.hex === hex);
    if (!colorData) return;

    // Set current detail color
    window.currentDetailColor = colorData;

    // Update modal content
    document.getElementById('detail-color-name').textContent = colorData.name;
    document.getElementById('detail-color-swatch').style.backgroundColor = colorData.hex;
    document.getElementById('detail-color-hex').textContent = colorData.hex;
    document.getElementById('detail-color-rgb').textContent = colorData.rgb || '';
    document.getElementById('detail-color-cmyk').textContent = colorData.cmyk || '';
    
    // Calculate HSL if needed
    if (colorData.hex) {
      const rgb = hexToRgb(colorData.hex);
      if (rgb) {
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        document.getElementById('detail-color-hsl').textContent = `${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
      }
    }

    // Open the modal
    openModal(colorDetailModal);
  }

  // --- All Palettes View --- 
  const allPalettesGrid = document.querySelector('.all-palettes-view');
  
  function displayPalettes() {
    if (!allPalettesGrid) return;
    
    allPalettesGrid.innerHTML = ''; // Clear previous content
    
    // Check if palette data is available
    if (!window.colorPalettes || !Array.isArray(window.colorPalettes)) {
      console.error('Color palettes data not available');
      return;
    }
    
    window.colorPalettes.forEach(palette => {
      const paletteCard = document.createElement('div');
      paletteCard.classList.add('palette-card', 'glass');
      paletteCard.dataset.id = palette.id;

      const colorsDiv = document.createElement('div');
      colorsDiv.classList.add('palette-colors');
      
      palette.colors.forEach(color => {
        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('palette-color-swatch');
        colorSwatch.style.backgroundColor = color.hex;
        colorsDiv.appendChild(colorSwatch);
      });

      const nameDiv = document.createElement('div');
      nameDiv.classList.add('palette-name');
      nameDiv.textContent = palette.name;

      paletteCard.appendChild(colorsDiv);
      paletteCard.appendChild(nameDiv);

      paletteCard.addEventListener('click', () => {
        showPaletteDetail(palette.id);
      });

      allPalettesGrid.appendChild(paletteCard);
    });
  }

  function showPaletteDetail(paletteId) {
    // Find palette data
    const palette = window.colorPalettes.find(p => p.id === paletteId);
    if (!palette) return;

    // Set current detail palette
    window.currentDetailPalette = palette;

    // Update modal content
    document.getElementById('detail-name').textContent = palette.name;
    
    // Display Tags
    const tagsContainer = document.getElementById('detail-tags');
    tagsContainer.innerHTML = '';
    
    palette.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('tag');
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    // Display Colors
    const colorsContainer = document.getElementById('detail-colors');
    colorsContainer.innerHTML = '';
    
    palette.colors.forEach(color => {
      const colorElement = document.createElement('div');
      colorElement.classList.add('palette-color');
      colorElement.style.backgroundColor = color.hex;
      colorElement.title = `${color.hex}\nRGB: ${color.rgb || ''}\nCMYK: ${color.cmyk || ''}`;
      
      colorElement.addEventListener('click', () => {
        // If the color exists in singleColors, show its detail
        const singleColor = window.singleColors.find(c => c.hex === color.hex);
        if (singleColor) {
          showColorDetail(color.hex);
        }
      });
      
      colorsContainer.appendChild(colorElement);
    });

    // Open the modal
    openModal(paletteDetailModal);
  }

  // --- Utility Functions ---
  
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

  // --- Initialization ---
  function initializeApp() {
    console.log('Initializing Color Palette Explorer app');
    
    // Ensure the home view is active initially
    setActiveView('home');
    
    // Initialize data displays if data is available
    if (window.singleColors) {
      displaySingleColors();
    }
    
    if (window.colorPalettes) {
      displayPalettes();
    }
  }

  // Start the app
  initializeApp();
});
