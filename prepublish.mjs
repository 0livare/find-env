import fs from 'fs/promises'

/**
 * Prevent the /dist folder from being published to npm.
 * This allows users to path into this lib without including "/dist/".
 */
async function run() {
  await fs.copyFile('README.md', 'dist/README.md')
  await fs.copyFile('lib/find.d.ts', 'dist/find.d.ts')

  const pkg = JSON.parse(
    await fs.readFile(new URL('./package.json', import.meta.url)),
  )
  pkg.main = './find.js'
  pkg.types = './find.d.ts'
  delete pkg.files

  await fs.writeFile('./dist/package.json', JSON.stringify(pkg, null, 2))

  console.log('Prepublish ran 🎉')
}

run()
