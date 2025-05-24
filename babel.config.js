module.exports = {
  presets: [
    // don’t transform ES modules (Styleguidist/Webpack will handle imports)
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react'
  ]
};
