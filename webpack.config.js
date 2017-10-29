module.exports = {
  entry: {
    'index': ['babel-polyfill', './nodes/cleaning/index.js'],
  },
  output: {
    path: __dirname,
    filename: 'cleaning/static/cleaning/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            "presets": [
              "react",
              "es2015",
              "es2016",
              "stage-0",
            ]
          },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      },

    ],

  },
  devServer: {
    contentBase: 'public'
  },
};
