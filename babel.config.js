module.exports = function (api) {
  api.cache(false)

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ]

  let plugins = []

  if (process.env.NODE_ENV === 'testing') {
    plugins = [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-modules-commonjs'
    ]
  }


  return {
    presets,
    plugins
  }
}
