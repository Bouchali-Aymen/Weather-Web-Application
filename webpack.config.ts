

const webpack = require('webpack');


module.exports = {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  };

  export default webpack