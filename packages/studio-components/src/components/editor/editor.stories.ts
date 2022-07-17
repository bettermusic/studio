// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Editor',
  argTypes: {
    initialValue: { control: 'text' },
  },

  // component: Studio 
};

const Template = (args) => `<pc-editor initial-value="${args.initialValue}"></pc-editor>`;

export const Example = Template.bind({});
Example.args = {
  initialValue: `{t:Kingdom}
{artist: Maverick City Music}
{capo: 2}
{key: F}  
{c:Intro (2x)}
[Gm][F][/][/][|][C#dim7][Dm][/][/][|]

{c:Verse 1 *1}
My [Dm7]heart has always [C/E]longed for something[F] more
I [Dm7]searched the stars to [Bb]knock on Heaven's [F2]door
Cre - [Dm7]ation groans for [C2/E]God to be re [F2]- vealed
[Dm7]Every wound we [Bb]carry will be[F2] healed
My eyes on the [G7/B]Son, Lord Your will be [Bbm6]done`
};
