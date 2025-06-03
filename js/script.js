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
    // Deactivate all views
    mainContentViews.forEach(view => view.classList.remove('active'));
    // Deactivate all nav items
    topNavItems.forEach(item => item.classList.remove('active'));
    sidebarNavItems.forEach(item => item.classList.remove('active'));

    // Activate the target view
    const targetView = document.querySelector(`.${viewName}-view`);
    if (targetView) {
      targetView.classList.add('active');
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
    
    // Special case for home: activate home in top nav
    if (viewName === 'home') {
        const homeTopNavItem = document.querySelector(`.top-nav .nav-item[data-view="home"]`);
        if(homeTopNavItem) homeTopNavItem.classList.add('active');
    }
    
    // Special case for sidebar items not in top nav
    if (['single-colors', 'all-palettes', 'favorites'].includes(viewName)) {
        const correspondingSidebarItem = document.querySelector(`.sidebar .main-nav .nav-item[data-view="${viewName}"]`);
        if(correspondingSidebarItem) correspondingSidebarItem.classList.add('active');
    }

    // Close sidebar after navigation (optional)
    sidebar.classList.remove('open');
  }

  topNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
      setActiveView(view);
    });
  });

  sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const view = item.getAttribute('data-view');
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

  // --- Single Color View --- 
  const singleColorGrid = document.querySelector('.single-colors-view'); // Assuming a container exists
  const colorDetailName = document.getElementById('detail-color-name');
  const colorDetailSwatch = document.getElementById('detail-color-swatch');
  const colorDetailHex = document.getElementById('detail-color-hex');
  const colorDetailRgb = document.getElementById('detail-color-rgb');
  const colorDetailCmyk = document.getElementById('detail-color-cmyk');
  const colorDetailHsl = document.getElementById('detail-color-hsl');
  const colorVariationsContainer = document.getElementById('color-variations');
  const colorHarmoniesContainer = document.getElementById('color-harmonies');
  const variationTypeButtons = document.querySelectorAll('.variation-type');
  const copyButtons = document.querySelectorAll('.copy-button');
  const downloadColorSvgButton = document.getElementById('download-color-svg');
  const viewPalettesButton = document.getElementById('view-palettes');
  let currentDetailColor = null;

  function displaySingleColors() {
    if (!singleColorGrid) return;
    singleColorGrid.innerHTML = ''; // Clear previous content
    singleColors.forEach(color => {
      const colorCard = document.createElement('div');
      colorCard.classList.add('color-card', 'glass'); // Add glass effect
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
    const colorData = singleColors.find(c => c.hex === hex);
    if (!colorData) return;

    currentDetailColor = colorData;

    colorDetailName.textContent = colorData.name;
    colorDetailSwatch.style.backgroundColor = colorData.hex;
    colorDetailHex.textContent = colorData.hex;
    colorDetailRgb.textContent = colorData.rgb;
    colorDetailCmyk.textContent = colorData.cmyk;
    
    const rgbValues = hexToRgb(colorData.hex);
    const hslValues = rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
    colorDetailHsl.textContent = `${hslValues.h}, ${hslValues.s}%, ${hslValues.l}%`;

    // Display variations (default to tints)
    displayVariations('tints');
    variationTypeButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector('.variation-type[data-type="tints"]').classList.add('active');

    // Display harmonies
    displayHarmonies();

    openModal(colorDetailModal);
  }

  function displayVariations(type) {
    if (!currentDetailColor) return;
    const variations = generateColorVariations(currentDetailColor.hex);
    colorVariationsContainer.innerHTML = '';
    variations[type].forEach(variationHex => {
      const swatch = document.createElement('div');
      swatch.classList.add('color-swatch');
      swatch.style.backgroundColor = variationHex;
      swatch.dataset.hex = variationHex;
      swatch.title = variationHex; // Show hex on hover
      swatch.addEventListener('click', () => showColorDetail(variationHex)); // Allow clicking variations
      colorVariationsContainer.appendChild(swatch);
    });
  }

  variationTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      variationTypeButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      displayVariations(button.dataset.type);
    });
  });

  function displayHarmonies() {
    if (!currentDetailColor) return;
    const harmonies = generateColorHarmonies(currentDetailColor.hex);
    colorHarmoniesContainer.innerHTML = '';

    for (const type in harmonies) {
      const harmonyGroup = document.createElement('div');
      harmonyGroup.classList.add('harmony-group');
      const title = document.createElement('h4');
      title.textContent = type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1'); // Format title
      harmonyGroup.appendChild(title);

      const swatchesContainer = document.createElement('div');
      swatchesContainer.classList.add('harmony-swatches-inner');

      const colors = Array.isArray(harmonies[type]) ? harmonies[type] : [harmonies[type]];
      colors.forEach(harmonyHex => {
        const swatch = document.createElement('div');
        swatch.classList.add('color-swatch');
        swatch.style.backgroundColor = harmonyHex;
        swatch.dataset.hex = harmonyHex;
        swatch.title = harmonyHex;
        swatch.addEventListener('click', () => showColorDetail(harmonyHex));
        swatchesContainer.appendChild(swatch);
      });
      harmonyGroup.appendChild(swatchesContainer);
      colorHarmoniesContainer.appendChild(harmonyGroup);
    }
  }

  // Copy color values
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const valueType = button.dataset.value;
      let textToCopy = '';
      switch (valueType) {
        case 'hex': textToCopy = colorDetailHex.textContent; break;
        case 'rgb': textToCopy = colorDetailRgb.textContent; break;
        case 'cmyk': textToCopy = colorDetailCmyk.textContent; break;
        case 'hsl': textToCopy = colorDetailHsl.textContent; break;
      }
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: Show feedback to user
        button.textContent = 'Copied!';
        setTimeout(() => { button.textContent = 'Copy'; }, 1500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });

  // Download Color SVG
  downloadColorSvgButton.addEventListener('click', () => {
    if (!currentDetailColor) return;
    const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="${currentDetailColor.hex}"/>
    </svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentDetailColor.name.replace(/\s+/g, '_')}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // View Palettes containing this color
  viewPalettesButton.addEventListener('click', () => {
    if (!currentDetailColor) return;
    // Filter palettes that include the current color's hex
    const matchingPalettes = colorPalettes.filter(palette => 
      palette.colors.some(color => color.hex === currentDetailColor.hex)
    );
    // Switch to 'All Palettes' view and display only matching ones
    setActiveView('all-palettes');
    displayPalettes(matchingPalettes); // Modify displayPalettes to accept a filter
    closeModal(colorDetailModal);
  });

  // --- All Palettes View --- 
  const allPalettesGrid = document.querySelector('.all-palettes-view'); // Assuming a container exists

  function displayPalettes(palettesToDisplay = colorPalettes) {
    if (!allPalettesGrid) return;
    allPalettesGrid.innerHTML = ''; // Clear previous content
    palettesToDisplay.forEach(palette => {
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
  
  // --- Palette Detail Modal ---
  const detailPaletteName = document.getElementById('detail-name');
  const detailTagsContainer = document.getElementById('detail-tags');
  const detailColorsContainer = document.getElementById('detail-colors');
  const detailVisualizationContainer = document.querySelector('#palette-detail .visualization-container');
  const copyPaletteButton = document.getElementById('copy-palette');
  const downloadVizButton = document.getElementById('download-viz');
  let currentDetailPalette = null;

  function showPaletteDetail(paletteId) {
    const palette = colorPalettes.find(p => p.id === paletteId);
    if (!palette) return;
    
    currentDetailPalette = palette;

    detailPaletteName.textContent = palette.name;
    
    // Display Tags
    detailTagsContainer.innerHTML = '';
    palette.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        detailTagsContainer.appendChild(tagElement);
    });

    // Display Colors
    detailColorsContainer.innerHTML = '';
    palette.colors.forEach(color => {
        const colorElement = document.createElement('div');
        colorElement.classList.add('palette-color');
        colorElement.style.backgroundColor = color.hex;
        colorElement.title = `${color.hex}\nRGB: ${color.rgb}\nCMYK: ${color.cmyk}`;
        colorElement.addEventListener('click', () => showColorDetail(color.hex)); // Link to single color detail
        detailColorsContainer.appendChild(colorElement);
    });

    // Placeholder for Visualization
    detailVisualizationContainer.innerHTML = '<p>Visualization Preview Here</p>'; 
    // TODO: Implement actual visualization based on selected mode

    openModal(paletteDetailModal);
  }
  
  // Copy Palette Colors
  copyPaletteButton.addEventListener('click', () => {
      if (!currentDetailPalette) return;
      const hexCodes = currentDetailPalette.colors.map(c => c.hex).join(', ');
      navigator.clipboard.writeText(hexCodes).then(() => {
          copyPaletteButton.textContent = 'Copied!';
          setTimeout(() => { copyPaletteButton.textContent = 'Copy Palette'; }, 1500);
      }).catch(err => {
          console.error('Failed to copy palette: ', err);
      });
  });
  
  // Download Visualization (Placeholder)
  downloadVizButton.addEventListener('click', () => {
      if (!currentDetailPalette) return;
      alert('Visualization download functionality is not yet implemented.');
      // TODO: Implement SVG/Canvas export for the current visualization
  });

  // --- Initialization ---
  function initializeApp() {
    setActiveView('home'); // Start on the home page
    displaySingleColors(); // Populate single colors view initially
    displayPalettes(); // Populate all palettes view initially
    // TODO: Load favorites from local storage
    // TODO: Populate Trending view
    // TODO: Populate About view
    // TODO: Implement Color Mix Tool
  }

  initializeApp();
});

