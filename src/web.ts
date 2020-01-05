import { WebPlugin } from '@capacitor/core';
import { SiriKitPlugin } from './definitions';

export class SiriKitWeb extends WebPlugin implements SiriKitPlugin {
  constructor() {
    super({
      name: 'SiriKit',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const SiriKit = new SiriKitWeb();

export { SiriKit };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(SiriKit);
