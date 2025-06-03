// Add trending content to the trending view
document.addEventListener('DOMContentLoaded', () => {
  // Check if trending view exists
  const trendingView = document.querySelector('.trending-view');
  if (!trendingView) return;

  // Get trending content from HTML file
  fetch('trending_about_content.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const trendingContent = doc.querySelector('.trending-container');
      
      if (trendingContent) {
        trendingView.innerHTML = '';
        trendingView.appendChild(trendingContent);
        populateTrendingPalettes();
      }
    })
    .catch(error => {
      console.error('Error loading trending content:', error);
      // Fallback content if fetch fails
      trendingView.innerHTML = `
        <div class="trending-container">
          <div class="trending-header glass">
            <h2>Trending Palettes</h2>
            <p>Curated color combinations inspired by current design trends</p>
          </div>
          <div class="trending-grid" id="trending-grid"></div>
        </div>
      `;
      populateTrendingPalettes();
    });

  // Populate trending palettes
  function populateTrendingPalettes() {
    const trendingGrid = document.querySelector('.trending-grid');
    if (!trendingGrid) return;

    // Get top 6 palettes (could be based on different criteria)
    const trendingPalettes = colorPalettes.slice(0, 6);
    
    trendingPalettes.forEach(palette => {
      const paletteCard = document.createElement('div');
      paletteCard.classList.add('trending-palette', 'glass');
      paletteCard.dataset.id = palette.id;

      const colorsDiv = document.createElement('div');
      colorsDiv.classList.add('trending-palette-colors');
      
      palette.colors.forEach(color => {
        const colorSwatch = document.createElement('div');
        colorSwatch.classList.add('trending-palette-color');
        colorSwatch.style.backgroundColor = color.hex;
        colorsDiv.appendChild(colorSwatch);
      });

      const infoDiv = document.createElement('div');
      infoDiv.classList.add('trending-palette-info');
      
      const nameDiv = document.createElement('div');
      nameDiv.classList.add('trending-palette-name');
      nameDiv.textContent = palette.name;
      
      const tagsDiv = document.createElement('div');
      tagsDiv.classList.add('trending-palette-tags');
      
      palette.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('trending-palette-tag');
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
      });

      infoDiv.appendChild(nameDiv);
      infoDiv.appendChild(tagsDiv);
      
      paletteCard.appendChild(colorsDiv);
      paletteCard.appendChild(infoDiv);
      
      paletteCard.addEventListener('click', () => {
        if (typeof showPaletteDetail === 'function') {
          showPaletteDetail(palette.id);
        }
      });

      trendingGrid.appendChild(paletteCard);
    });
  }
});

// Add about content to the about view
document.addEventListener('DOMContentLoaded', () => {
  // Check if about view exists
  const aboutView = document.querySelector('.about-view');
  if (!aboutView) return;

  // Get about content from HTML file
  fetch('trending_about_content.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const aboutContent = doc.querySelector('.about-container');
      
      if (aboutContent) {
        aboutView.innerHTML = '';
        aboutView.appendChild(aboutContent);
      }
    })
    .catch(error => {
      console.error('Error loading about content:', error);
      // Fallback content if fetch fails
      aboutView.innerHTML = `
        <div class="about-container">
          <div class="about-header glass">
            <div class="about-avatar">
              <div class="star-icon large">
                <div class="star-point top"></div>
                <div class="star-point right"></div>
                <div class="star-point bottom"></div>
                <div class="star-point left"></div>
              </div>
            </div>
            <div class="about-title">
              <h2>About Color Palette Explorer</h2>
              <p class="about-subtitle">A colorful journey by Yota Kaizaki</p>
            </div>
          </div>
          
          <div class="about-story glass">
            <h3>The Colorful Backstory</h3>
            <p>Hey there! I'm Yota Kaizaki, and I have a confession: I'm slightly obsessed with colors. It all started when I accidentally spilled my entire collection of paint tubes during an art class in college. Instead of creating a mess, the colors mixed into the most beautiful combinations I'd ever seen.</p>
            
            <p>That happy accident led me down a rabbit hole of color theory, design principles, and eventually coding. I created Color Palette Explorer because I couldn't find a tool that let me play with colors the way I wanted to – something fun, intuitive, and visually stunning.</p>
          </div>
        </div>
      `;
    });
});
