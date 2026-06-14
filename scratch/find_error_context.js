import { readFileSync } from 'fs';

const inspect = () => {
  const content = readFileSync('dist/main.js', 'utf8');
  const lines = content.split('\n');
  const targetLine = lines[9]; // line 10 (0-indexed is 9)
  
  if (!targetLine) {
    console.log("Line 10 not found!");
    return;
  }
  
  console.log(`Line 10 length: ${targetLine.length}`);
  const start = Math.max(0, 3658 - 200);
  const end = Math.min(targetLine.length, 3658 + 200);
  console.log("--- Context around column 3658 ---");
  console.log(targetLine.slice(start, end));
  console.log("----------------------------------");
};

inspect();
