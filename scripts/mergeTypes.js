// script/mergeTypes.js
import { promises as fs } from 'fs';
import path from 'path';

const typesDir = path.join(process.cwd(), 'dist');
const indexFile = path.join(typesDir, 'index.d.ts');

async function mergeTypes() {
  // Check if the index.d.ts file exists and delete it
  try {
    await fs.unlink(indexFile);
  } catch (error) {
    // Ignore if the file does not exist
  }

  const typeFiles = (await fs.readdir(typesDir)).filter((file) =>
    file.endsWith('.d.ts')
  );

  let indexContent = '';

  for (const file of typeFiles) {
    const content = await fs.readFile(path.join(typesDir, file), 'utf-8');
    indexContent += content + '\n\n'; // Add double newline for separation
  }

  // Write the combined content into index.d.ts
  await fs.writeFile(indexFile, indexContent.trim());
  console.log('Types merged into index.d.ts');
}

mergeTypes().catch(console.error);
