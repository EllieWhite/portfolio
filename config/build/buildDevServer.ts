import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        host: '0.0.0.0',
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true
    }
}