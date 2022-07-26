import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from '@stencil/sass';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'studio',
  taskQueue: 'async',
  sourceMap: true,
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload'
  },
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: '@praisecharts/studio-components',
      directivesProxyFile: '../studio-components-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../studio-components-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      excludeComponents: [
        // exclude components
      ]
    }),
    {
    type: 'dist',
    esmLoaderPath: '../loader', 
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
