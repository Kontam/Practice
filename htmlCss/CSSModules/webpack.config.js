const path = require('path');

module.exports = {
  entry: './src/js/App.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".ts",".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: "ts-loader"
      },
    ],
  },
};
