import fs from 'fs-extra';
import path from 'path';

/**
 * Creates a directory if it doesn't exist
 */
export function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Writes content to a file, creating any necessary directories
 */
export function writeToFile(filePath: string, content: string): void {
  const dirPath = path.dirname(filePath);
  ensureDirectoryExists(dirPath);
  fs.writeFileSync(filePath, content);
}

/**
 * Creates a CSS file with styles for the website
 * Note: CSS is now embedded in HTML head to avoid path issues
 */
export function generateCssFile(): void {
  console.log('CSS generation skipped - styles are now embedded in HTML head for better reliability');
}

/**
 * Cleans up the target directory (removing old files)
 */
export function cleanPublicDirectory(): void {
  if (fs.existsSync('public')) {
    // Preserve the .gitkeep file
    const files = fs.readdirSync('public');
    
    for (const file of files) {
      if (file !== '.gitkeep' && file !== '_redirects') {
        const filePath = path.join('public', file);
        fs.removeSync(filePath);
      }
    }
  } else {
    fs.mkdirSync('public');
  }
}