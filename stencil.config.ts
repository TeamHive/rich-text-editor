import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'rich-text-editor',
  outputTargets:[
    { type: 'dist' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass()
  ]
};
