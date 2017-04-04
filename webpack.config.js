module.exports = options => {
  return {
    entry: './src/index.ts',
    output: {
      filename: './dist/bundle.js',
    },
	 module: {
	   rules: [
		 {
		   test: /\.tsx?$/,
		   loader: 'ts-loader',
		   exclude: /node_modules/,
		 }
	   ],
		 loaders: [           
            { test: require.resolve('snapsvg'), loader: 'imports-loader?this=>window,fix=>module.exports=0'}
        ]
	 },
	 resolve: {
	   extensions: [".tsx", ".ts", ".js"]
	 }
  }
}



/*
module: {
        loaders: [           
            { test: require.resolve('snapsvg'), loader: 'imports-loader?this=>window,fix=>module.exports=0'}
        ]
    }
*/