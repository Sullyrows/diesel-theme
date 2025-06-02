// Cat Theme JavaScript Preview
function calculateFibonacci(n) {
  if (n <= 1) return n;
  
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}

class ColorManager {
  constructor(primaryColor) {
    this.primaryColor = primaryColor;
    this.palette = new Map();
  }
  
  addColor(name, hexValue) {
    this.palette.set(name, hexValue);
    return this;
  }
  
  getColor(name) {
    return this.palette.get(name) || this.primaryColor;
  }
}

// Create a new color manager with our theme color
const themeColors = new ColorManager("#FFC400")
  .addColor("background", "#1e2127")
  .addColor("foreground", "#abb2bf")
  .addColor("accent", "#FFC400");

console.log(`Theme primary color: ${themeColors.primaryColor}`);

// Async/await example
async function fetchThemeData() {
  try {
    const response = await fetch('/api/theme');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch theme data:', error);
    throw error;
  }
}
