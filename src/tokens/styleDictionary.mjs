import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source:['src/tokens/**/*.json'],
  platforms:{
    css:{
      transformGroup:'scss',
      buildPath:'src/styles/scss/base/',
      files:[{
        destination: '_variables.scss',
        format: 'scss/variables'
      }]
    },
     js: {
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  }
})

sd.buildAllPlatforms();