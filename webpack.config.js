const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.ts',
    mode: "development",
    module: {
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },
    resolve: {
        extensions:['.ts','.js']
    },
    output: {
        publicPath: 'public',
        filename: 'sketch.js',
        path: path.resolve(__dirname,'public')
    }
}
