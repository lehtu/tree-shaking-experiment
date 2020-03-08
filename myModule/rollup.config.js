import autoExternal from 'rollup-plugin-auto-external';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';
import path from 'path';
import pkg from './package.json';

export default [
    {
        input: 'index.ts',
        output: [
            {
                file: pkg.main,
                format: 'es',
            },
        ],
        plugins: [
            autoExternal({
                builtins: true,
                dependencies: true,
                packagePath: path.resolve('./package.json'),
                peerDependencies: false,
            }),
            json(),
            resolve(),
            commonjs(),
            typescript(),
            visualizer({
                filename: 'dist/stats.html'
            })
        ]
    }
];