import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
  namespace: 'editor',
  taskQueue: 'async',
  outputTargets: [{
    type: 'dist',
    esmLoaderPath: '../loader',
  },{
    type: 'www',
    serviceWorker: null // disable service workers
  }],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
    ],
    after: [
      nodePolyfills(),
    ]
  },
};
