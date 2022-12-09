import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from '@stencil/sass';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindConfig from './tailwind.config';




const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  autoprefixCss: true,
  namespace: 'studio',
  taskQueue: 'async',
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
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null // disable service workers
  
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      copy: [
        {
          src: '**/*.{svg}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
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
    sass(),
    tailwind({
      tailwindCssPath: './src/styles/tailwind.css',
      tailwindConf: tailwindConfig,
    }),
    tailwindHMR()
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
