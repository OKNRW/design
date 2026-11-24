// Baut dist/oknrw-tokens.css und dist/oknrw-tokens.json aus tokens/*.json (DTCG-Format).
export default {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'ok',
      buildPath: 'dist/',
      files: [{ destination: 'oknrw-tokens.css', format: 'css/variables', options: { outputReferences: true } }]
    },
    json: {
      transformGroup: 'css',
      prefix: 'ok',
      buildPath: 'dist/',
      files: [{ destination: 'oknrw-tokens.json', format: 'json/flat' }]
    }
  }
};
