// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import BetterMusicTheme from './BetterMusicTheme';


addons.setConfig({
  theme: BetterMusicTheme,
});