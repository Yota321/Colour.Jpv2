// Visualization Modes Implementation

// Create Fluid Waves Visualization
function createFluidWavesViz(container, palette) {
  if (!container || !palette || !palette.colors || palette.colors.length < 2) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight || 200;
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  const colors = palette.colors.map(c => c.hex);
  
  // Animation variables
  let animationFrame;
  const waves = [];
  
  // Create wave objects
  for (let i = 0; i < colors.length; i++) {
    waves.push({
      color: colors[i],
      amplitude: 10 + Math.random() * 20,
      frequency: 0.01 + Math.random() * 0.02,
      speed: 0.02 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
      y: canvas.height * (i + 0.5) / colors.length
    });
  }
  
  // Animation function
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw each wave
    waves.forEach(wave => {
      ctx.beginPath();
      ctx.moveTo(0, wave.y);
      
      // Update phase
      wave.phase += wave.speed;
      
      // Draw wave path
      for (let x = 0; x < canvas.width; x++) {
        const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
        ctx.lineTo(x, y);
      }
      
      // Complete the path to fill the area
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      
      // Fill with color
      ctx.fillStyle = wave.color;
      ctx.fill();
    });
    
    animationFrame = requestAnimationFrame(animate);
  }
  
  // Start animation
  animate();
  
  // Add download button
  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-viz-btn');
  downloadBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download
  `;
  
  downloadBtn.addEventListener('click', () => {
    // Create a temporary canvas with higher resolution for download
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width * 2;
    tempCanvas.height = canvas.height * 2;
    const tempCtx = tempCanvas.getContext('2d');
    
    // Scale up the context
    tempCtx.scale(2, 2);
    
    // Draw each wave on the temporary canvas
    waves.forEach(wave => {
      tempCtx.beginPath();
      tempCtx.moveTo(0, wave.y);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
        tempCtx.lineTo(x, y);
      }
      
      tempCtx.lineTo(canvas.width, canvas.height);
      tempCtx.lineTo(0, canvas.height);
      tempCtx.closePath();
      
      tempCtx.fillStyle = wave.color;
      tempCtx.fill();
    });
    
    // Convert to data URL and trigger download
    const dataURL = tempCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `fluid_waves_${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
  container.appendChild(downloadBtn);
  
  // Return cleanup function
  return () => {
    cancelAnimationFrame(animationFrame);
  };
}

// Create Glass Morphism Visualization
function createGlassMorphismViz(container, palette) {
  if (!container || !palette || !palette.colors || palette.colors.length < 2) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('glass-morphism-viz');
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';
  wrapper.style.minHeight = '200px';
  wrapper.style.overflow = 'hidden';
  
  // Create background gradient
  wrapper.style.background = `linear-gradient(45deg, ${palette.colors.map(c => c.hex).join(', ')})`;
  wrapper.style.backgroundSize = '400% 400%';
  wrapper.style.animation = 'gradientBG 15s ease infinite';
  
  // Add glass elements
  const colors = palette.colors.map(c => c.hex);
  const shapes = ['circle', 'square', 'rectangle'];
  
  for (let i = 0; i < colors.length * 2; i++) {
    const shape = document.createElement('div');
    const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
    const size = 30 + Math.random() * 100;
    const color = colors[i % colors.length];
    
    shape.style.position = 'absolute';
    shape.style.background = color;
    shape.style.opacity = '0.2';
    shape.style.backdropFilter = 'blur(10px)';
    shape.style.border = '1px solid rgba(255, 255, 255, 0.2)';
    
    if (shapeType === 'circle') {
      shape.style.borderRadius = '50%';
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    } else if (shapeType === 'square') {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.borderRadius = '10px';
    } else {
      shape.style.width = `${size * 1.5}px`;
      shape.style.height = `${size * 0.8}px`;
      shape.style.borderRadius = '10px';
    }
    
    shape.style.left = `${Math.random() * 80}%`;
    shape.style.top = `${Math.random() * 80}%`;
    shape.style.transform = `rotate(${Math.random() * 360}deg)`;
    shape.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
    shape.style.animationDelay = `${Math.random() * 5}s`;
    
    wrapper.appendChild(shape);
  }
  
  // Add glass panel in center
  const glassPanel = document.createElement('div');
  glassPanel.classList.add('glass-panel');
  glassPanel.style.position = 'absolute';
  glassPanel.style.top = '50%';
  glassPanel.style.left = '50%';
  glassPanel.style.transform = 'translate(-50%, -50%)';
  glassPanel.style.width = '60%';
  glassPanel.style.height = '60%';
  glassPanel.style.background = 'rgba(255, 255, 255, 0.1)';
  glassPanel.style.backdropFilter = 'blur(10px)';
  glassPanel.style.borderRadius = '15px';
  glassPanel.style.border = '1px solid rgba(255, 255, 255, 0.2)';
  glassPanel.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
  
  // Add color dots inside panel
  colors.forEach((color, index) => {
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = '20px';
    dot.style.height = '20px';
    dot.style.borderRadius = '50%';
    dot.style.background = color;
    dot.style.bottom = '20px';
    dot.style.left = `${20 + index * 30}px`;
    
    glassPanel.appendChild(dot);
  });
  
  wrapper.appendChild(glassPanel);
  container.appendChild(wrapper);
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(10deg); }
      100% { transform: translateY(0) rotate(0deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Add download button
  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-viz-btn');
  downloadBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download
  `;
  
  downloadBtn.addEventListener('click', () => {
    // Use html2canvas to capture the visualization
    html2canvas(wrapper).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = `glass_morphism_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
  
  container.appendChild(downloadBtn);
}

// Create Gradient Blend Visualization
function createGradientBlendViz(container, palette) {
  if (!container || !palette || !palette.colors || palette.colors.length < 2) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('gradient-blend-viz');
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';
  wrapper.style.minHeight = '200px';
  wrapper.style.overflow = 'hidden';
  
  const colors = palette.colors.map(c => c.hex);
  
  // Create gradient layers
  const gradientTypes = [
    'linear-gradient(to right, {colors})',
    'linear-gradient(to bottom, {colors})',
    'linear-gradient(45deg, {colors})',
    'linear-gradient(135deg, {colors})',
    'radial-gradient(circle at center, {colors})',
    'radial-gradient(circle at top left, {colors})',
    'conic-gradient(from 0deg, {colors})'
  ];
  
  // Create layers
  for (let i = 0; i < Math.min(gradientTypes.length, colors.length + 2); i++) {
    const layer = document.createElement('div');
    layer.style.position = 'absolute';
    layer.style.top = '0';
    layer.style.left = '0';
    layer.style.width = '100%';
    layer.style.height = '100%';
    
    // Shuffle colors for this layer
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    
    // Create gradient
    const gradientTemplate = gradientTypes[i % gradientTypes.length];
    const gradient = gradientTemplate.replace('{colors}', shuffledColors.join(', '));
    
    layer.style.background = gradient;
    layer.style.opacity = (i === 0) ? '1' : '0';
    layer.style.transition = 'opacity 2s ease-in-out';
    layer.style.zIndex = 10 - i;
    
    wrapper.appendChild(layer);
  }
  
  container.appendChild(wrapper);
  
  // Animate between gradients
  const layers = wrapper.querySelectorAll('div');
  let currentLayer = 0;
  
  function animateGradients() {
    // Hide current layer
    layers[currentLayer].style.opacity = '0';
    
    // Move to next layer
    currentLayer = (currentLayer + 1) % layers.length;
    
    // Show next layer
    layers[currentLayer].style.opacity = '1';
    
    // Schedule next animation
    setTimeout(animateGradients, 4000);
  }
  
  // Start animation
  setTimeout(animateGradients, 4000);
  
  // Add download button
  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-viz-btn');
  downloadBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download
  `;
  
  downloadBtn.addEventListener('click', () => {
    // Use html2canvas to capture the visualization
    html2canvas(wrapper).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = `gradient_blend_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
  
  container.appendChild(downloadBtn);
}

// Create Neon Glow Visualization
function createNeonGlowViz(container, palette) {
  if (!container || !palette || !palette.colors || palette.colors.length < 2) return;
  
  // Clear container
  container.innerHTML = '';
  
  // Create wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('neon-glow-viz');
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';
  wrapper.style.height = '100%';
  wrapper.style.minHeight = '200px';
  wrapper.style.background = '#000';
  wrapper.style.overflow = 'hidden';
  
  const colors = palette.colors.map(c => c.hex);
  
  // Create neon elements
  const shapes = ['line', 'circle', 'rectangle', 'triangle'];
  
  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const shape = shapes[i % shapes.length];
    
    const neonElement = document.createElement('div');
    neonElement.classList.add('neon-element');
    neonElement.style.position = 'absolute';
    
    if (shape === 'line') {
      neonElement.style.width = '80%';
      neonElement.style.height = '3px';
      neonElement.style.top = `${20 + i * 15}%`;
      neonElement.style.left = '10%';
      neonElement.style.background = color;
      neonElement.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`;
      neonElement.style.animation = 'neonPulse 2s infinite alternate';
      neonElement.style.animationDelay = `${i * 0.3}s`;
    } 
    else if (shape === 'circle') {
      neonElement.style.width = '60px';
      neonElement.style.height = '60px';
      neonElement.style.borderRadius = '50%';
      neonElement.style.top = `${20 + i * 15}%`;
      neonElement.style.left = `${20 + i * 10}%`;
      neonElement.style.border = `2px solid ${color}`;
      neonElement.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`;
      neonElement.style.animation = 'neonPulse 3s infinite alternate';
      neonElement.style.animationDelay = `${i * 0.5}s`;
    }
    else if (shape === 'rectangle') {
      neonElement.style.width = '100px';
      neonElement.style.height = '50px';
      neonElement.style.top = `${30 + i * 10}%`;
      neonElement.style.left = `${50 - i * 10}%`;
      neonElement.style.border = `2px solid ${color}`;
      neonElement.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`;
      neonElement.style.animation = 'neonPulse 4s infinite alternate';
      neonElement.style.animationDelay = `${i * 0.7}s`;
    }
    else if (shape === 'triangle') {
      neonElement.style.width = '0';
      neonElement.style.height = '0';
      neonElement.style.borderLeft = '30px solid transparent';
      neonElement.style.borderRight = '30px solid transparent';
      neonElement.style.borderBottom = `60px solid ${color}`;
      neonElement.style.top = `${40 - i * 5}%`;
      neonElement.style.left = `${60 + i * 5}%`;
      neonElement.style.filter = `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color})`;
      neonElement.style.animation = 'neonRotate 5s infinite linear';
      neonElement.style.animationDelay = `${i * 0.9}s`;
    }
    
    wrapper.appendChild(neonElement);
  }
  
  // Add central text with main color
  const textElement = document.createElement('div');
  textElement.classList.add('neon-text');
  textElement.style.position = 'absolute';
  textElement.style.top = '50%';
  textElement.style.left = '50%';
  textElement.style.transform = 'translate(-50%, -50%)';
  textElement.style.fontFamily = "'Inter', sans-serif";
  textElement.style.fontSize = '2rem';
  textElement.style.fontWeight = 'bold';
  textElement.style.color = colors[0];
  textElement.style.textShadow = `0 0 5px ${colors[0]}, 0 0 10px ${colors[0]}, 0 0 20px ${colors[0]}`;
  textElement.style.animation = 'neonTextPulse 2s infinite alternate';
  textElement.textContent = 'NEON';
  
  wrapper.appendChild(textElement);
  container.appendChild(wrapper);
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes neonPulse {
      0% { opacity: 0.7; }
      100% { opacity: 1; }
    }
    
    @keyframes neonRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes neonTextPulse {
      0% { opacity: 0.8; text-shadow: 0 0 5px ${colors[0]}, 0 0 10px ${colors[0]}; }
      100% { opacity: 1; text-shadow: 0 0 5px ${colors[0]}, 0 0 10px ${colors[0]}, 0 0 20px ${colors[0]}, 0 0 30px ${colors[0]}; }
    }
  `;
  document.head.appendChild(style);
  
  // Add download button
  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-viz-btn');
  downloadBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Download
  `;
  
  downloadBtn.addEventListener('click', () => {
    // Use html2canvas to capture the visualization
    html2canvas(wrapper).then(canvas => {
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = `neon_glow_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  });
  
  container.appendChild(downloadBtn);
}

// Add html2canvas script for download functionality
function loadHtml2Canvas() {
  if (!document.querySelector('script[src*="html2canvas"]')) {
    const script = document.createElement('script');
    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    document.head.appendChild(script);
  }
}

// Load html2canvas when document is ready
document.addEventListener('DOMContentLoaded', loadHtml2Canvas);
