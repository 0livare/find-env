import fs from 'fs/promises';

/**
 * Prevent the /dist folder from being published to npm.
 * This allows users to path into this lib without including "/dist/".
 */
async function run() {
  await fs.copyFile('README.md', 'dist/README.md');
  await fs.copyFile('lib/find.d.ts', 'dist/find.d.ts');

  // Update package and write into dist
  const pack = JSON.parse(
    await fs.readFile(new URL('./package.json', import.meta.url))
  );
  pack.main = './find.js';
  pack.types = './find.d.ts';
  delete pack.files;
  delete pack.targets;
  delete pack.browserslist;
  await fs.writeFile('./dist/package.json', JSON.stringify(pack, null, 2));

  console.log('Prepublish ran 🎉');
}

run();
