module.exports = {
    mode: "development",
    target: 'node',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader', options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }]
    }
}
