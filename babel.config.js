module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["es2015", {
      "modules": false
    }] // ['pluginname'，{plugin options}]
  ],
  "plugins": [
    ["component", [{
      "libraryName": "mint-ui",
      "style": true
    }]]
  ]
}
