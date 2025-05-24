


import { resolve as _resolve } from 'path';

export const title = 'My UI Library';
export const components = 'src/components/**/*.jsx';
export const defaultExample = true;
export const webpackConfig = {
    resolve: {
        // Match your Vite aliases (if any)
        alias: {
            '@': _resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
