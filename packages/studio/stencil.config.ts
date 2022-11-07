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
  globalScript: 'src/global/app.ts',
  preamble: 'Built with Stencil\nCopyright (c) Sonreign Media Inc.',
  sourceMap: true,
  devServer: {
    openBrowser: false,
    reloadStrategy: 'pageReload'
  },
  nodeResolve: {
    browser: true,
    preferBuiltins: true
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
      componentCorePackage: '@bettermusic/studio',
      directivesProxyFile: '../studio-angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../studio-angular/src/lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      excludeComponents: [
        // exclude components
        'bm-button',
        'bm-modal',
        'bm-dropdown',
        'bm-dropdown-list-item',
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
