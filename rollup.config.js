import pkg from './package.json';

export default [
    {
        input: 'src/main.js',
        output: [
            { name: 'UIAvatarSvg', file: pkg.browser, format: 'umd' }, // UMD (for browsers)
            { file: pkg.main, format: 'cjs' }, // CommonJS (for Node)
            { file: pkg.module, format: 'es' } // ES module (for bundlers)
        ]
    }
];
