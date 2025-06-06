import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|webp|gif|ico)$/i,
        type: 'asset/resource',
    }

    const fontLoader = {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icons: true,
                    svgConfg: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const scssModuleLoader =  {
        test: /\.module\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          cssLoaderWithModules,
          "sass-loader",
        ],
    }

    const scssLoader =  {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
    }

    const fileLoader = {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/pdf/',
              publicPath: '/static/pdf/',
            },
          },
        ],
      }

      const videoLoader = {
        test: /\.(mp4|webm|ogg|mp3|mp4|webm|wav|flac|aac)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
    }

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // }

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
            loader: 'ts-loader',
            options: {
                transpileOnly: isDev
            }
            }
        ]
    }


    return [
        scssModuleLoader,
        scssLoader,
        tsLoader,
        assetLoader,
        svgrLoader,
        fontLoader,
        fileLoader,
        videoLoader
    ]
}