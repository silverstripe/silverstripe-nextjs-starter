const path = require('path')
require(`dotenv`).config()


module.exports = {
  webpack: (config, { webpack, buildId }) => {
    // Fixes npm packages that depend on node modules
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BUILD_ID': JSON.stringify(buildId),
        // Required for embedded images. Remove if your images are hosted outside of the CMS instance.
        'process.env.SILVERSTRIPE_BASE_URL': JSON.stringify(process.env.SILVERSTRIPE_BASE_URL || ``)
      })
    )
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      use: [
        {
          loader: `graphql-mini-transforms/webpack`,
          options: {
            exclude: /node_modules/,
            simple: true,
          }
        }
      ]
    })
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
