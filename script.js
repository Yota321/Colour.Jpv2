document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let currentViz = 'fluid-waves';
    let searchTerm = '';
    let selectedPalette = null;
    let selectedColor = null;
    let isDarkTheme = false;
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let colorFavorites = JSON.parse(localStorage.getItem('colorFavorites') || '[]');
    let currentView = 'single-colors'; // Set single-colors as default view
    let currentSort = 'name';
    let activeFilters = [];
    let allTags = [];
    let singleColors = []; // Will store all individual colors
    
    // DOM elements
    const paletteGrid = document.getElementById('palette-grid');
    const singleColorGrid = document.getElementById('single-color-grid');
    const searchInput = document.getElementById('search-input');
    const themeToggle = document.getElementById('theme-toggle');
    const vizOptions = document.querySelectorAll('.viz-option');
    const navItems = document.querySelectorAll('.nav-item');
    const paletteDetailModal = document.getElementById('palette-detail');
    const colorDetailModal = document.getElementById('color-detail');
    const codeModal = document.getElementById('code-modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const scrollTopBtn = document.getElementById('scroll-top');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const sortOptions = document.querySelectorAll('.sort-option');
    const tagFiltersContainer = document.getElementById('tag-filters');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const codeTabs = document.querySelectorAll('.code-tab');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    
    // Initialize the app
    init();
    
    function init() {
        // Extract all unique tags
        extractTags();
        
        // Extract all single colors
        extractSingleColors();
        
        // Populate tag filters
        populateTagFilters();
        
        // Render content based on default view
        renderContent();
        
        // Check for dark mode preference
        checkDarkModePreference();
        
        // Set up event listeners
        setupEventListeners();
    }
    
    function extractTags() {
        // Extract all unique tags from palettes
        const tagSet = new Set();
        colorPalettes.forEach(palette => {
            palette.tags.forEach(tag => tagSet.add(tag));
        });
        allTags = Array.from(tagSet).sort();
    }
    
    function extractSingleColors() {
        // Extract all unique colors from palettes
        const colorSet = new Set();
        const colorMap = new Map();
        
        // Process each palette's colors
        colorPalettes.forEach(palette => {
            palette.colors.forEach(color => {
                if (!colorSet.has(color.hex)) {
                    colorSet.add(color.hex);
                    
                    // Generate a name for the color if not available
                    const colorName = generateColorName(color.hex);
                    
                    // Add to our single colors array
                    singleColors.push({
                        id: singleColors.length + 1,
                        name: colorName,
                        hex: color.hex,
                        rgb: color.rgb,
                        cmyk: color.cmyk,
                        hsl: rgbToHsl(color.rgb)
                    });
                    
                    // Store in map for quick lookup
                    colorMap.set(color.hex, singleColors.length - 1);
                }
            });
        });
        
        // Add more colors to reach 500+ total
        addMoreColors();
    }
    
    function addMoreColors() {
        // Add more colors to reach 500+ total
        const targetCount = 500;
        const currentCount = singleColors.length;
        
        if (currentCount >= targetCount) return;
        
        // Generate additional colors
        for (let i = currentCount; i < targetCount; i++) {
            const h = Math.floor(Math.random() * 360);
            const s = Math.floor(Math.random() * 100);
            const l = Math.floor(Math.random() * 100);
            
            const hex = hslToHex(h, s, l);
            const rgb = hslToRgb(h, s, l);
            const cmyk = rgbToCmyk(rgb);
            const hsl = `${h}, ${s}%, ${l}%`;
            
            singleColors.push({
                id: singleColors.length + 1,
                name: generateColorName(hex),
                hex: hex,
                rgb: rgb,
                cmyk: cmyk,
                hsl: hsl
            });
        }
    }
    
    function generateColorName(hex) {
        // Simple algorithm to generate a color name based on hex
        // In a real app, you'd use a color naming library or API
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        
        // Convert to HSL for better naming
        const hsl = rgbToHsl(`${r}, ${g}, ${b}`);
        const [h, s, l] = hsl.split(', ').map(val => parseFloat(val));
        
        // Basic color wheel segments
        let baseName = "Color";
        if (s < 10) {
            if (l < 20) baseName = "Black";
            else if (l < 40) baseName = "Dark Gray";
            else if (l < 60) baseName = "Gray";
            else if (l < 80) baseName = "Light Gray";
            else baseName = "White";
        } else {
            if (h < 30) baseName = l < 50 ? "Dark Red" : "Red";
            else if (h < 60) baseName = l < 50 ? "Dark Orange" : "Orange";
            else if (h < 90) baseName = l < 50 ? "Dark Yellow" : "Yellow";
            else if (h < 150) baseName = l < 50 ? "Dark Green" : "Green";
            else if (h < 210) baseName = l < 50 ? "Dark Cyan" : "Cyan";
            else if (h < 270) baseName = l < 50 ? "Dark Blue" : "Blue";
            else if (h < 330) baseName = l < 50 ? "Dark Purple" : "Purple";
            else baseName = l < 50 ? "Dark Red" : "Red";
        }
        
        // Add intensity modifiers
        let modifier = "";
        if (s > 80) modifier = "Vibrant ";
        else if (s > 60) modifier = "Rich ";
        else if (s < 30 && s >= 10) modifier = "Muted ";
        
        // Add brightness modifiers
        if (l < 20 && s >= 10) modifier = "Deep ";
        else if (l > 80 && s >= 10) modifier = "Bright ";
        
        return `${modifier}${baseName} ${hex.substring(1, 4)}`;
    }
    
    function rgbToHsl(rgbStr) {
        // Convert RGB string to HSL
        const [r, g, b] = rgbStr.split(', ').map(val => parseInt(val) / 255);
        
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
        
        return `${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
    }
    
    function hslToRgb(h, s, l) {
        // Convert HSL to RGB string
        h /= 360;
        s /= 100;
        l /= 100;
        
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
        
        return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}`;
    }
    
    function hslToHex(h, s, l) {
        // Convert HSL to hex
        const rgb = hslToRgb(h, s, l);
        const [r, g, b] = rgb.split(', ').map(val => parseInt(val));
        
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    }
    
    function rgbToCmyk(rgbStr) {
        // Convert RGB string to CMYK string
        const [r, g, b] = rgbStr.split(', ').map(val => parseInt(val) / 255);
        
        if (r === 0 && g === 0 && b === 0) {
            return "0, 0, 0, 100";
        }
        
        const k = 1 - Math.max(r, g, b);
        const c = (1 - r - k) / (1 - k);
        const m = (1 - g - k) / (1 - k);
        const y = (1 - b - k) / (1 - k);
        
        return `${Math.round(c * 100)}, ${Math.round(m * 100)}, ${Math.round(y * 100)}, ${Math.round(k * 100)}`;
    }
    
    function populateTagFilters() {
        // Create filter buttons for each tag
        allTags.forEach(tag => {
            const button = document.createElement('button');
            button.className = 'filter-option';
            button.textContent = tag;
            button.dataset.tag = tag;
            button.addEventListener('click', () => toggleTagFilter(tag, button));
            tagFiltersContainer.appendChild(button);
        });
    }
    
    function toggleTagFilter(tag, button) {
        const index = activeFilters.indexOf(tag);
        if (index === -1) {
            // Add filter
            activeFilters.push(tag);
            button.classList.add('active');
        } else {
            // Remove filter
            activeFilters.splice(index, 1);
            button.classList.remove('active');
        }
        renderContent();
    }
    
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', () => {
            searchTerm = searchInput.value.trim().toLowerCase();
            renderContent();
        });
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Visualization options
        vizOptions.forEach(option => {
            option.addEventListener('click', () => setVisualization(option.dataset.viz));
        });
        
        // Navigation items
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                setView(item.dataset.view);
                
                // Close sidebar on mobile after navigation
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('active');
                }
            });
        });
        
        // Mobile menu toggle
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
        
        // Close sidebar button
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        // Close buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                paletteDetailModal.classList.remove('active');
                colorDetailModal.classList.remove('active');
                codeModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Modal backdrop click to close
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', () => {
                paletteDetailModal.classList.remove('active');
                colorDetailModal.classList.remove('active');
                codeModal.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Dropdown toggles
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const dropdown = toggle.parentElement;
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown.active').forEach(activeDropdown => {
                    if (activeDropdown !== dropdown) {
                        activeDropdown.classList.remove('active');
                    }
                });
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
        
        // Sort options
        sortOptions.forEach(option => {
            option.addEventListener('click', () => {
                currentSort = option.dataset.sort;
                
                // Update active state
                sortOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close dropdown
                option.closest('.dropdown').classList.remove('active');
                
                renderContent();
            });
        });
        
        // Copy palette button
        document.getElementById('copy-palette').addEventListener('click', copyPalette);
        
        // Copy color button
        document.getElementById('copy-color').addEventListener('click', copyColor);
        
        // Download SVG button
        document.getElementById('download-svg').addEventListener('click', downloadSvg);
        
        // Download color SVG button
        document.getElementById('download-color-svg').addEventListener('click', downloadColorSvg);
        
        // Generate code button
        document.getElementById('generate-code').addEventListener('click', generateCode);
        
        // Copy code button
        document.getElementById('copy-code').addEventListener('click', copyCode);
        
        // Code tabs
        codeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.dataset.tab;
                
                // Update active tab
                codeTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                // Show corresponding panel
                document.querySelectorAll('.code-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                document.getElementById(`${tabId}-panel`).classList.add('active');
            });
        });
    }
    
    function renderContent() {
        // Render content based on current view
        if (currentView === 'single-colors') {
            renderSingleColors();
            paletteGrid.style.display = 'none';
            singleColorGrid.style.display = 'grid';
        } else {
            renderPalettes();
            paletteGrid.style.display = 'grid';
            singleColorGrid.style.display = 'none';
        }
    }
    
    function renderPalettes() {
        // Clear the grid
        paletteGrid.innerHTML = '';
        
        // Filter palettes based on search, view, and tags
        let filteredPalettes = filterPalettes();
        
        // Sort palettes
        sortPalettes(filteredPalettes);
        
        // Check if there are any palettes to display
        if (filteredPalettes.length === 0) {
            paletteGrid.innerHTML = '<div class="no-results">No palettes found matching your criteria.</div>';
            return;
        }
        
        // Render each palette card
        filteredPalettes.forEach((palette, index) => {
            const card = createPaletteCard(palette, index);
            paletteGrid.appendChild(card);
        });
    }
    
    function renderSingleColors() {
        // Clear the grid
        singleColorGrid.innerHTML = '';
        
        // Filter colors based on search
        let filteredColors = filterSingleColors();
        
        // Sort colors
        sortSingleColors(filteredColors);
        
        // Check if there are any colors to display
        if (filteredColors.length === 0) {
            singleColorGrid.innerHTML = '<div class="no-results">No colors found matching your criteria.</div>';
            return;
        }
        
        // Render each color card
        filteredColors.forEach((color, index) => {
            const card = createColorCard(color, index);
            singleColorGrid.appendChild(card);
        });
    }
    
    function filterPalettes() {
        let filtered = [...colorPalettes];
        
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(palette => {
                // Search by name
                if (palette.name.toLowerCase().includes(searchTerm)) return true;
                
                // Search by tags
                if (palette.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
                
                // Search by color values (hex, rgb, cmyk)
                if (palette.colors.some(color => 
                    color.hex.toLowerCase().includes(searchTerm) ||
                    color.rgb.toLowerCase().includes(searchTerm) ||
                    color.cmyk.toLowerCase().includes(searchTerm)
                )) return true;
                
                return false;
            });
        }
        
        // Filter by view
        if (currentView === 'favorites') {
            filtered = filtered.filter(palette => favorites.includes(palette.id));
        } else if (currentView === 'trending') {
            // For trending, we'll just show the first 20 palettes as an example
            filtered = filtered.slice(0, 20);
        }
        
        // Filter by tags
        if (activeFilters.length > 0) {
            filtered = filtered.filter(palette => 
                activeFilters.some(tag => palette.tags.includes(tag))
            );
        }
        
        return filtered;
    }
    
    function filterSingleColors() {
        let filtered = [...singleColors];
        
        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(color => {
                // Search by name
                if (color.name.toLowerCase().includes(searchTerm)) return true;
                
                // Search by color values (hex, rgb, cmyk, hsl)
                if (
                    color.hex.toLowerCase().includes(searchTerm) ||
                    color.rgb.toLowerCase().includes(searchTerm) ||
                    color.cmyk.toLowerCase().includes(searchTerm) ||
                    color.hsl.toLowerCase().includes(searchTerm)
                ) return true;
                
                return false;
            });
        }
        
        // Filter by view
        if (currentView === 'favorites') {
            filtered = filtered.filter(color => colorFavorites.includes(color.id));
        } else if (currentView === 'trending') {
            // For trending, we'll just show the first 40 colors as an example
            filtered = filtered.slice(0, 40);
        }
        
        return filtered;
    }
    
    function sortPalettes(palettes) {
        switch (currentSort) {
            case 'name':
                palettes.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'id':
                palettes.sort((a, b) => a.id - b.id);
                break;
            case 'random':
                // Fisher-Yates shuffle
                for (let i = palettes.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [palettes[i], palettes[j]] = [palettes[j], palettes[i]];
                }
                break;
        }
    }
    
    function sortSingleColors(colors) {
        switch (currentSort) {
            case 'name':
                colors.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'id':
                colors.sort((a, b) => a.id - b.id);
                break;
            case 'random':
                // Fisher-Yates shuffle
                for (let i = colors.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [colors[i], colors[j]] = [colors[j], colors[i]];
                }
                break;
        }
    }
    
    function createPaletteCard(palette, index) {
        const card = document.createElement('div');
        card.className = 'palette-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Create visualization
        const visualization = document.createElement('div');
        visualization.className = 'palette-visualization';
        
        const vizContent = createVisualization(currentViz, palette.colors);
        visualization.appendChild(vizContent);
        
        // Create info section
        const info = document.createElement('div');
        info.className = 'palette-info';
        
        const name = document.createElement('h3');
        name.textContent = palette.name;
        
        const tags = document.createElement('div');
        tags.className = 'tags';
        
        palette.tags.slice(0, 3).forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });
        
        const colors = document.createElement('div');
        colors.className = 'colors';
        
        palette.colors.forEach(color => {
            const colorPreview = document.createElement('div');
            colorPreview.className = 'color-preview';
            colorPreview.style.backgroundColor = color.hex;
            colors.appendChild(colorPreview);
        });
        
        info.appendChild(name);
        info.appendChild(tags);
        info.appendChild(colors);
        
        card.appendChild(visualization);
        card.appendChild(info);
        
        // Add click event to open modal
        card.addEventListener('click', () => openPaletteDetail(palette));
        
        return card;
    }
    
    function createColorCard(color, index) {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        // Create color preview
        const preview = document.createElement('div');
        preview.className = 'color-preview';
        preview.style.backgroundColor = color.hex;
        
        // Create info section
        const info = document.createElement('div');
        info.className = 'color-info';
        
        const name = document.createElement('h3');
        name.textContent = color.name;
        name.title = color.name; // Add tooltip for long names
        
        const hex = document.createElement('div');
        hex.className = 'color-hex';
        hex.textContent = color.hex;
        
        info.appendChild(name);
        info.appendChild(hex);
        
        card.appendChild(preview);
        card.appendChild(info);
        
        // Add click event to open modal
        card.addEventListener('click', () => openColorDetail(color));
        
        return card;
    }
    
    function createVisualization(type, colors) {
        const container = document.createElement('div');
        container.className = type;
        
        switch (type) {
            case 'fluid-waves':
                colors.forEach((color, index) => {
                    const wave = document.createElement('div');
                    wave.className = 'wave';
                    wave.style.backgroundColor = color.hex;
                    wave.style.animationDelay = `${index * -2}s`;
                    container.appendChild(wave);
                });
                break;
                
            case 'glass-morphism':
                colors.forEach((color, index) => {
                    const panel = document.createElement('div');
                    panel.className = 'glass-panel';
                    panel.style.backgroundColor = color.hex;
                    panel.style.opacity = '0.7';
                    panel.style.animationDelay = `${index * -3}s`;
                    container.appendChild(panel);
                });
                break;
                
            case 'gradient-blend':
                colors.forEach((color, index) => {
                    const circle = document.createElement('div');
                    circle.className = 'gradient-circle';
                    circle.style.backgroundColor = color.hex;
                    circle.style.animationDelay = `${index * -2}s`;
                    container.appendChild(circle);
                });
                break;
                
            case 'neon-glow':
                container.style.backgroundColor = '#111';
                colors.forEach((color, index) => {
                    const line = document.createElement('div');
                    line.className = 'neon-line';
                    line.style.backgroundColor = color.hex;
                    line.style.boxShadow = `0 0 10px ${color.hex}, 0 0 20px ${color.hex}`;
                    line.style.animationDelay = `${index * -0.5}s`;
                    container.appendChild(line);
                });
                break;
        }
        
        return container;
    }
    
    function openPaletteDetail(palette) {
        selectedPalette = palette;
        
        // Set palette details
        document.getElementById('detail-name').textContent = palette.name;
        
        // Update favorite button state
        const favoriteButton = document.querySelector('#palette-detail .favorite-button');
        favoriteButton.classList.toggle('active', favorites.includes(palette.id));
        
        // Clear event listener to prevent duplicates
        favoriteButton.replaceWith(favoriteButton.cloneNode(true));
        
        // Add new event listener
        document.querySelector('#palette-detail .favorite-button').addEventListener('click', () => toggleFavorite(palette.id));
        
        // Set tags
        const tagsContainer = document.getElementById('detail-tags');
        tagsContainer.innerHTML = '';
        
        palette.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag-item';
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
        
        // Set colors
        const colorsContainer = document.getElementById('detail-colors');
        colorsContainer.innerHTML = '';
        
        palette.colors.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.className = 'color-item';
            
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.hex;
            
            const details = document.createElement('div');
            details.className = 'color-details';
            
            const hex = document.createElement('div');
            hex.className = 'color-hex';
            hex.textContent = color.hex;
            
            const values = document.createElement('div');
            values.className = 'color-values';
            
            const rgb = document.createElement('span');
            rgb.textContent = `RGB: ${color.rgb}`;
            
            const cmyk = document.createElement('span');
            cmyk.textContent = `CMYK: ${color.cmyk}`;
            
            values.appendChild(rgb);
            values.appendChild(cmyk);
            
            details.appendChild(hex);
            details.appendChild(values);
            
            colorItem.appendChild(swatch);
            colorItem.appendChild(details);
            
            colorsContainer.appendChild(colorItem);
        });
        
        // Create visualization
        const vizContainer = document.querySelector('#palette-detail .visualization-container');
        vizContainer.innerHTML = '';
        vizContainer.appendChild(createVisualization(currentViz, palette.colors));
        
        // Show modal
        paletteDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function openColorDetail(color) {
        selectedColor = color;
        
        // Set color details
        document.getElementById('detail-color-name').textContent = color.name;
        document.getElementById('detail-color-swatch').style.backgroundColor = color.hex;
        
        // Update favorite button state
        const favoriteButton = document.querySelector('#color-detail .favorite-button');
        favoriteButton.classList.toggle('active', colorFavorites.includes(color.id));
        
        // Clear event listener to prevent duplicates
        favoriteButton.replaceWith(favoriteButton.cloneNode(true));
        
        // Add new event listener
        document.querySelector('#color-detail .favorite-button').addEventListener('click', () => toggleColorFavorite(color.id));
        
        // Set color values
        document.getElementById('detail-color-hex').textContent = color.hex;
        document.getElementById('detail-color-rgb').textContent = color.rgb;
        document.getElementById('detail-color-cmyk').textContent = color.cmyk;
        document.getElementById('detail-color-hsl').textContent = color.hsl;
        
        // Generate color harmonies
        generateColorHarmonies(color);
        
        // Show modal
        colorDetailModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function generateColorHarmonies(color) {
        const harmoniesContainer = document.getElementById('color-harmonies');
        harmoniesContainer.innerHTML = '';
        
        // Parse HSL values
        const [h, s, l] = color.hsl.split(', ').map(val => parseFloat(val));
        const hue = h;
        const saturation = parseInt(s);
        const lightness = parseInt(l);
        
        // Generate harmonies
        const harmonies = {
            'Complementary': [(hue + 180) % 360],
            'Analogous 1': [(hue + 30) % 360],
            'Analogous 2': [(hue - 30 + 360) % 360],
            'Triadic 1': [(hue + 120) % 360],
            'Triadic 2': [(hue + 240) % 360],
            'Split Comp 1': [(hue + 150) % 360],
            'Split Comp 2': [(hue + 210) % 360],
            'Tetradic 1': [(hue + 90) % 360],
            'Tetradic 2': [(hue + 180) % 360],
            'Tetradic 3': [(hue + 270) % 360]
        };
        
        // Create swatches
        Object.entries(harmonies).forEach(([name, [harmonyHue]]) => {
            const harmonyHex = hslToHex(harmonyHue, saturation, lightness);
            
            const swatch = document.createElement('div');
            swatch.className = 'harmony-swatch';
            swatch.style.backgroundColor = harmonyHex;
            swatch.title = name;
            
            harmoniesContainer.appendChild(swatch);
        });
    }
    
    function toggleFavorite(id) {
        const index = favorites.indexOf(id);
        
        if (index === -1) {
            // Add to favorites
            favorites.push(id);
            document.querySelector('#palette-detail .favorite-button').classList.add('active');
            showNotification('Added to favorites');
        } else {
            // Remove from favorites
            favorites.splice(index, 1);
            document.querySelector('#palette-detail .favorite-button').classList.remove('active');
            showNotification('Removed from favorites');
            
            // Update view if we're in favorites
            if (currentView === 'favorites') {
                renderContent();
            }
        }
        
        // Save to localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    
    function toggleColorFavorite(id) {
        const index = colorFavorites.indexOf(id);
        
        if (index === -1) {
            // Add to favorites
            colorFavorites.push(id);
            document.querySelector('#color-detail .favorite-button').classList.add('active');
            showNotification('Added to favorites');
        } else {
            // Remove from favorites
            colorFavorites.splice(index, 1);
            document.querySelector('#color-detail .favorite-button').classList.remove('active');
            showNotification('Removed from favorites');
            
            // Update view if we're in favorites
            if (currentView === 'favorites') {
                renderContent();
            }
        }
        
        // Save to localStorage
        localStorage.setItem('colorFavorites', JSON.stringify(colorFavorites));
    }
    
    function copyPalette() {
        if (!selectedPalette) return;
        
        const colorValues = selectedPalette.colors.map(color => 
            `${color.hex} (RGB: ${color.rgb}, CMYK: ${color.cmyk})`
        ).join('\n');
        
        const textToCopy = `${selectedPalette.name}\n${colorValues}`;
        
        navigator.clipboard.writeText(textToCopy)
            .then(() => showNotification('Palette copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
    }
    
    function copyColor() {
        if (!selectedColor) return;
        
        navigator.clipboard.writeText(selectedColor.hex)
            .then(() => showNotification('Color copied to clipboard'))
            .catch(err => console.error('Could not copy text: ', err));
    }
    
    function downloadSvg() {
        if (!selectedPalette) return;
        
        // Create SVG
        const colors = selectedPalette.colors;
        const svgWidth = 800;
        const svgHeight = 400;
        
        let svgContent = '';
        
        switch (currentViz) {
            case 'fluid-waves':
                svgContent = createFluidWavesSvg(colors, svgWidth, svgHeight);
                break;
            case 'glass-morphism':
                svgContent = createGlassMorphismSvg(colors, svgWidth, svgHeight);
                break;
            case 'gradient-blend':
                svgContent = createGradientBlendSvg(colors, svgWidth, svgHeight);
                break;
            case 'neon-glow':
                svgContent = createNeonGlowSvg(colors, svgWidth, svgHeight);
                break;
        }
        
        // Create download link
        const link = document.createElement('a');
        link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent));
        link.setAttribute('download', `${selectedPalette.name.replace(/\s+/g, '-').toLowerCase()}-${currentViz}.svg`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('SVG downloaded successfully');
    }
    
    function downloadColorSvg() {
        if (!selectedColor) return;
        
        // Create SVG
        const svgWidth = 800;
        const svgHeight = 400;
        
        // Create SVG content
        let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">`;
        
        // Background
        svgContent += `<rect width="${svgWidth}" height="${svgHeight}" fill="${selectedColor.hex}"/>`;
        
        // Add color information
        svgContent += `
            <rect x="20" y="${svgHeight - 120}" width="${svgWidth - 40}" height="100" rx="10" fill="rgba(255,255,255,0.85)"/>
            <text x="40" y="${svgHeight - 80}" font-family="Arial" font-size="24" font-weight="bold" fill="#333">${selectedColor.name}</text>
            <text x="40" y="${svgHeight - 50}" font-family="Arial" font-size="16" fill="#333">HEX: ${selectedColor.hex} | RGB: ${selectedColor.rgb} | CMYK: ${selectedColor.cmyk}</text>
        `;
        
        svgContent += '</svg>';
        
        // Create download link
        const link = document.createElement('a');
        link.setAttribute('href', 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent));
        link.setAttribute('download', `${selectedColor.name.replace(/\s+/g, '-').toLowerCase()}.svg`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        showNotification('Color swatch downloaded successfully');
    }
    
    function createFluidWavesSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Waves
        colors.forEach((color, index) => {
            const yPos = height * (index + 1) / (colors.length + 1);
            const amplitude = height / 8;
            const frequency = 0.01;
            
            let path = `<path d="M0,${yPos}`;
            
            for (let x = 0; x <= width; x += 10) {
                const y = yPos + Math.sin(x * frequency) * amplitude;
                path += ` L${x},${y}`;
            }
            
            path += ` L${width},${height} L0,${height} Z" fill="${color.hex}" opacity="0.7"/>`;
            svg += path;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function createGlassMorphismSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Define filter for glass effect
        svg += `
        <defs>
            <filter id="glass" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="glass" />
            </filter>
        </defs>`;
        
        // Glass panels
        colors.forEach((color, index) => {
            const size = 200;
            const x = width / 2 - size / 2 + (index - 1) * 50;
            const y = height / 2 - size / 2 + (index - 1) * 30;
            
            svg += `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="20" ry="20" 
                    fill="${color.hex}" opacity="0.7" filter="url(#glass)" />`;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function createGradientBlendSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="white"/>`;
        
        // Define gradients
        svg += '<defs>';
        colors.forEach((color, index) => {
            svg += `<radialGradient id="grad${index}" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:${color.hex};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${color.hex};stop-opacity:0" />
            </radialGradient>`;
        });
        svg += '</defs>';
        
        // Circles
        const centerX = width / 2;
        const centerY = height / 2;
        
        colors.forEach((color, index) => {
            const radius = 150 - (index * 30);
            svg += `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="url(#grad${index})" opacity="0.7">
                <animate attributeName="r" values="${radius};${radius*1.1};${radius}" dur="${3 + index}s" repeatCount="indefinite" />
            </circle>`;
        });
        
        // Add palette name
        svg += `<text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#333">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="#333">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function createNeonGlowSvg(colors, width, height) {
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
        
        // Background
        svg += `<rect width="${width}" height="${height}" fill="#111"/>`;
        
        // Define filters for glow effects
        svg += '<defs>';
        colors.forEach((color, index) => {
            // Extract RGB values for better glow effect
            const r = parseInt(color.hex.slice(1, 3), 16);
            const g = parseInt(color.hex.slice(3, 5), 16);
            const b = parseInt(color.hex.slice(5, 7), 16);
            
            svg += `
            <filter id="glow${index}" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feFlood flood-color="rgb(${r}, ${g}, ${b})" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>`;
        });
        svg += '</defs>';
        
        // Neon lines with enhanced effects
        colors.forEach((color, index) => {
            const y = 100 + index * 80;
            
            // Add a background glow for enhanced effect
            svg += `<rect x="90" y="${y-15}" width="${width-180}" height="30" rx="15" 
                   fill="${color.hex}" opacity="0.15" filter="url(#glow${index})" />`;
            
            // Main neon line
            svg += `<line x1="100" y1="${y}" x2="${width-100}" y2="${y}" 
                    stroke="${color.hex}" stroke-width="4" stroke-linecap="round" filter="url(#glow${index})" />`;
            
            // Add animated pulse effect
            svg += `
            <animate xlink:href="#neonLine${index}" attributeName="opacity" 
                     values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />`;
        });
        
        // Add palette name with glow
        svg += `
        <filter id="textGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feFlood flood-color="white" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
        <text x="${width/2}" y="30" font-family="Arial" font-size="24" text-anchor="middle" 
              fill="white" filter="url(#textGlow)">${selectedPalette.name}</text>`;
        
        // Add color values
        colors.forEach((color, index) => {
            const y = height - 60 + (index * 20);
            svg += `<text x="20" y="${y}" font-family="Arial" font-size="12" fill="white">${color.hex} - RGB(${color.rgb})</text>`;
        });
        
        svg += '</svg>';
        return svg;
    }
    
    function generateCode() {
        if (!selectedPalette) return;
        
        const colors = selectedPalette.colors;
        
        // Generate CSS code
        const cssCode = generateCssCode(colors);
        document.getElementById('css-code').textContent = cssCode;
        
        // Generate SASS code
        const sassCode = generateSassCode(colors);
        document.getElementById('sass-code').textContent = sassCode;
        
        // Generate Tailwind code
        const tailwindCode = generateTailwindCode(colors);
        document.getElementById('tailwind-code').textContent = tailwindCode;
        
        // Show code modal
        codeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function generateCssCode(colors) {
        let css = `:root {\n`;
        
        colors.forEach((color, index) => {
            css += `  --color-${index + 1}: ${color.hex};\n`;
        });
        
        css += `}\n\n`;
        
        // Add some example usage
        css += `/* Example usage */\n`;
        css += `.primary-bg {\n  background-color: var(--color-1);\n}\n\n`;
        css += `.secondary-bg {\n  background-color: var(--color-2);\n}\n\n`;
        css += `.accent-bg {\n  background-color: var(--color-3);\n}\n\n`;
        
        // Add gradient example
        css += `/* Gradient example */\n`;
        css += `.gradient-bg {\n  background: linear-gradient(to right`;
        
        colors.forEach(color => {
            css += `, ${color.hex}`;
        });
        
        css += `);\n}\n`;
        
        return css;
    }
    
    function generateSassCode(colors) {
        let sass = `// Color variables\n`;
        
        colors.forEach((color, index) => {
            sass += `$color-${index + 1}: ${color.hex};\n`;
        });
        
        sass += `\n// Example usage\n`;
        sass += `.primary-bg {\n  background-color: $color-1;\n}\n\n`;
        sass += `.secondary-bg {\n  background-color: $color-2;\n}\n\n`;
        sass += `.accent-bg {\n  background-color: $color-3;\n}\n\n`;
        
        // Add mixin example
        sass += `// Mixin example\n`;
        sass += `@mixin gradient-bg {\n  background: linear-gradient(to right`;
        
        colors.forEach(color => {
            sass += `, ${color.hex}`;
        });
        
        sass += `);\n}\n\n`;
        sass += `.gradient-element {\n  @include gradient-bg;\n}\n`;
        
        return sass;
    }
    
    function generateTailwindCode(colors) {
        // Convert hex to RGB for Tailwind
        function hexToRgb(hex) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `${r} ${g} ${b}`;
        }
        
        let tailwind = `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n`;
        
        // Add color definitions
        colors.forEach((color, index) => {
            const colorName = index === 0 ? 'primary' : index === 1 ? 'secondary' : `accent${index - 1}`;
            tailwind += `        ${colorName}: {\n          DEFAULT: '${color.hex}',\n          rgb: '${hexToRgb(color.hex)}',\n        },\n`;
        });
        
        tailwind += `      },\n    },\n  },\n};\n\n`;
        
        // Add example usage
        tailwind += `<!-- Example usage in HTML -->\n`;
        tailwind += `<div class="bg-primary text-white">Primary background</div>\n`;
        tailwind += `<div class="bg-secondary text-black">Secondary background</div>\n`;
        tailwind += `<div class="bg-accent1 text-white">Accent background</div>\n\n`;
        
        // Add gradient example
        tailwind += `<!-- Gradient example -->\n`;
        tailwind += `<div class="bg-gradient-to-r`;
        
        colors.forEach((color, index) => {
            const colorName = index === 0 ? 'primary' : index === 1 ? 'secondary' : `accent${index - 1}`;
            tailwind += ` from-${colorName}`;
            if (index === 1) tailwind += ` via-${colorName}`;
            if (index === 2) tailwind += ` to-${colorName}`;
        });
        
        tailwind += `">Gradient background</div>\n`;
        
        return tailwind;
    }
    
    function copyCode() {
        // Get active code panel
        const activePanel = document.querySelector('.code-panel.active');
        const code = activePanel.querySelector('code').textContent;
        
        navigator.clipboard.writeText(code)
            .then(() => showNotification('Code copied to clipboard'))
            .catch(err => console.error('Could not copy code: ', err));
    }
    
    function setVisualization(viz) {
        currentViz = viz;
        
        // Update active button
        vizOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.viz === viz);
        });
        
        // Re-render palettes with new visualization
        renderContent();
    }
    
    function setView(view) {
        currentView = view;
        
        // Update active button
        navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.view === view);
        });
        
        // Re-render content with new view
        renderContent();
    }
    
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        
        // Update theme toggle text
        const toggleText = document.querySelector('.toggle-text');
        toggleText.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
        
        // Save preference
        localStorage.setItem('darkTheme', isDarkTheme);
    }
    
    function checkDarkModePreference() {
        // Check localStorage
        const storedPreference = localStorage.getItem('darkTheme');
        
        if (storedPreference !== null) {
            isDarkTheme = storedPreference === 'true';
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            isDarkTheme = prefersDark;
        }
        
        // Apply theme
        document.body.classList.toggle('dark-theme', isDarkTheme);
        
        // Update theme toggle text
        const toggleText = document.querySelector('.toggle-text');
        toggleText.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
    }
    
    function showNotification(message) {
        notificationMessage.textContent = message;
        notification.classList.add('active');
        
        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('active');
        }, 3000);
    }
});
