module.exports = ({ file, options, env }) => ({
  parser: file.extname === '.styl' ? 'sugarss' : false, 
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": { browsers: 'last 2 versions'  },
    'cssnano':  env === 'production'  ? {} : false
  }
})

/**
 * можно добавить проверку на другие расширения. И изначально была эта проверка
 * parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
 */
