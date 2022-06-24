// MyComponent.story.js|jsx

import { MyComponent } from '@praisecharts/editor/components';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/MyComponent',
  component: MyComponent,
};

export const Basic = () => <my-component></my-component>;

export const WithProp = () => <my-component></my-component>;