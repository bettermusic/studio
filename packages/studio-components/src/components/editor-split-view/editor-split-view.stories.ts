// import {Studio} from '@praisecharts/studio-components/components/studio';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Studio',
  argTypes: {
    label: { control: 'text' }, // always shows
    advanced: { control: 'boolean' },
    // below are only included when advanced is true
    margin: { control: 'number', if: { arg: 'advanced' } },
    padding: { control: 'number', if: { arg: 'advanced' } },
    cornerRadius: { control: 'number', if: { arg: 'advanced' } },
  },
  // component: Studio 
};

const Template = (args) => `<pc-split-view></pc-split-view>`;

export const Example = Template.bind({});
