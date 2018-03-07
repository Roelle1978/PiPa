const path = require('path')
const webpack = require('webpack')

const photonGlobals = new webpack.DefinePlugin({
    WEBGL_RENDERER: true,
    CANVAS_RENDERER: true
})

module.exports = {
    entry: './lib/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pipapong.bundle.js'
    },
    plugins: [
        photonGlobals
    ],
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
        ]
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        poll: 1200
    }
}
