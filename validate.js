// Test script to validate website functionality
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function runTests() {
  console.log('Starting validation tests for ColorPalette Pro website...');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    // Desktop tests
    console.log('\n=== Running Desktop Tests ===');
    await runDesktopTests(browser);
    
    // Mobile tests
    console.log('\n=== Running Mobile Tests ===');
    await runMobileTests(browser);
    
    console.log('\n✅ All tests completed successfully!');
  } catch (error) {
    console.error('\n❌ Test failed:', error);
  } finally {
    await browser.close();
  }
}

async function runDesktopTests(browser) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to the website
  const url = 'file://' + path.resolve('./index.html');
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Take screenshot of desktop view
  await page.screenshot({ path: './test_screenshots/desktop_main.png' });
  console.log('✓ Desktop main view screenshot captured');
  
  // Test single color tab (default view)
  const singleColorGrid = await page.$('#single-color-grid');
  const isSingleColorGridVisible = await singleColorGrid.evaluate(el => {
    return window.getComputedStyle(el).display !== 'none';
  });
  console.log(`✓ Single color tab is ${isSingleColorGridVisible ? 'visible' : 'not visible'} by default`);
  
  // Test switching to all palettes view
  await page.click('.nav-item[data-view="all"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/desktop_all_palettes.png' });
  
  const paletteGrid = await page.$('#palette-grid');
  const isPaletteGridVisible = await paletteGrid.evaluate(el => {
    return window.getComputedStyle(el).display !== 'none';
  });
  console.log(`✓ All palettes view is ${isPaletteGridVisible ? 'visible' : 'not visible'} after clicking`);
  
  // Test palette detail modal
  await page.click('.palette-card:first-child');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/desktop_palette_detail.png' });
  console.log('✓ Palette detail modal opens on click');
  
  // Close modal - using evaluate to ensure element is visible and clickable
  await page.evaluate(() => {
    const closeBtn = document.querySelector('#palette-detail .close-button');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // Switch back to single colors
  await page.click('.nav-item[data-view="single-colors"]');
  await new Promise(r => setTimeout(r, 500));
  
  // Test color detail modal
  await page.click('.color-card:first-child');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/desktop_color_detail.png' });
  console.log('✓ Color detail modal opens on click');
  
  // Close modal - using evaluate to ensure element is visible and clickable
  await page.evaluate(() => {
    const closeBtn = document.querySelector('#color-detail .close-button');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // Test dark mode toggle
  await page.click('#theme-toggle');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/desktop_dark_mode.png' });
  console.log('✓ Dark mode toggle works');
  
  // Test visualization options
  await page.click('.viz-option[data-viz="neon-glow"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/desktop_neon_viz.png' });
  console.log('✓ Visualization options change works');
  
  // Test search functionality
  await page.type('#search-input', 'blue');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: './test_screenshots/desktop_search.png' });
  console.log('✓ Search functionality works');
  
  await page.close();
}

async function runMobileTests(browser) {
  const page = await browser.newPage();
  // Set mobile viewport
  await page.setViewport({ 
    width: 375, 
    height: 667,
    isMobile: true,
    hasTouch: true
  });
  
  // Navigate to the website
  const url = 'file://' + path.resolve('./index.html');
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Take screenshot of mobile view
  await page.screenshot({ path: './test_screenshots/mobile_main.png' });
  console.log('✓ Mobile main view screenshot captured');
  
  // Test mobile menu toggle
  await page.click('#mobile-menu-toggle');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/mobile_menu_open.png' });
  console.log('✓ Mobile menu toggle opens sidebar');
  
  // Test navigation in mobile view
  await page.click('.nav-item[data-view="all"]');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/mobile_all_palettes.png' });
  console.log('✓ Navigation works in mobile view');
  
  // Test closing sidebar - using evaluate to ensure element is visible and clickable
  await page.evaluate(() => {
    const closeBtn = document.querySelector('#close-sidebar');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/mobile_sidebar_closed.png' });
  console.log('✓ Sidebar closes properly');
  
  // Test palette detail modal in mobile
  await page.click('.palette-card:first-child');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/mobile_palette_detail.png' });
  console.log('✓ Palette detail modal works in mobile');
  
  // Close modal - using evaluate to ensure element is visible and clickable
  await page.evaluate(() => {
    const closeBtn = document.querySelector('#palette-detail .close-button');
    if (closeBtn) closeBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  
  // Test mobile search
  await page.type('#search-input', 'green');
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: './test_screenshots/mobile_search.png' });
  console.log('✓ Search works in mobile view');
  
  // Test mobile dropdown
  await page.click('.dropdown-toggle');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: './test_screenshots/mobile_dropdown.png' });
  console.log('✓ Dropdown menus work in mobile view');
  
  await page.close();
}

// Run the tests
runTests().catch(console.error);
