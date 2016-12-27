import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        /* List of module files to bundle.
         * Defaults ./user.app.js */
        path.resolve(__dirname, 'client/users/index.js')
    ],
    target: 'web',
    output: {
        library: 'Redux',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    }
}
