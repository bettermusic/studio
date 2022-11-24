// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'ui/Button',
  argTypes: {
    html: { control: 'text' }, // always shows
  },
};

const Template = (args) => `<bm-button>${args.html}</bm-button>`;

export const Example = Template.bind({});
Example.args = {
  html: `Hey`
}