import { readFileSync } from 'fs';

const css = readFileSync('src/styles.css', 'utf8');
const lines = css.split('\n');

// Find all occurrences of site-header and print 15 lines before/after
lines.forEach((line, index) => {
  if (line.includes('.site-header') && !line.includes('.site-header .') && !line.includes('.site-header:')) {
    console.log(`Line ${index + 1}: ${line.trim()}`);
    // Print the block
    let block = '';
    for (let i = index; i < Math.min(index + 30, lines.length); i++) {
      block += lines[i] + '\n';
      if (lines[i].includes('}')) break;
    }
    console.log(block);
    console.log('===');
  }
});
