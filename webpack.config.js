const path = require("path");

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "cs-components-grid"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "url-loader?name=[name].[ext]"
      }
    ]
  },
  externals: {
    react: "react"
  },
  resolve: {
    alias: {
      globalize$: path.resolve(__dirname, "node_modules/globalize/dist/globalize.js"),
      globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
      cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
      cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr")
    },
    extensions: [".tsx", ".ts"]
  }
}
