const requireModule = require.context('./modules', false, /\.js$/)

const modules = {}

requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace('.store.js', '').replace('./', '')

  modules[moduleName] = requireModule(fileName)[moduleName]
})

export default modules
