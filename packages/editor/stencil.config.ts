import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'editor',
  taskQueue: 'async',
  sourceMap: true,
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
    type: 'dist',
    esmLoaderPath: '../loader', 
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [
    sass()
  ],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
    ],
    after: [
      nodePolyfills(),
    ]
  },
};
