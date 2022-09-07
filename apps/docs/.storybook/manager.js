// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import PraiseChartsTheme from './PraiseChartsTheme';


addons.setConfig({
  theme: PraiseChartsTheme,
  // shortcuts do not play well with codemirror
  enableShortcuts: false,
});
