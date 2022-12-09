// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'ui/Button',
  argTypes: {
    text: { control: 'text' }, // always shows
    color: { control: 'select', options: ['primary', 'minimal'] },
  },
};

const Template = (args) => `<bm-button text="${args.text}" color="${args.color}"></bm-button>`;

export const Primary = Template.bind({});
Primary.args = {
  text: `Hey`,
  color: 'primary'
}

export const Minimal = Template.bind({});
Minimal.args = {
  text: `Hey`,
  color: 'minimal'
}