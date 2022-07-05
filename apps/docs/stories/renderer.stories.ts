// import {Studio} from '@praisecharts/studio-components/components/studio';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Renderer',
  argTypes: {
    html: { control: 'text' }, // always shows
  },
  // component: Studio 
};

const Template = (args) => `<pcs-renderer html="${args.html}"></pcs-renderer>`;

export const Example = Template.bind({});
Example.args = {
  html: `<h1>Kingdom</h1><div class="chord-sheet"><div class="paragraph"><table class="row"><tr><td class="comment">Intro (2x)</td></tr></table><table class="row"><tr><td class="chord">Fm</td><td class="chord">Eb</td><td class="chord">/</td><td class="chord">/</td><td class="chord">|</td><td class="chord">Bdim7</td><td class="chord">Cm</td><td class="chord">/</td><td class="chord">/</td><td class="chord">|</td></tr></table></div><div class="paragraph"><table class="row"><tr><td class="comment">Verse 1 *1</td></tr></table><table class="row"><tr><td class="chord"></td><td class="chord">Cm7</td><td class="chord">Bb/D</td><td class="chord">Eb</td></tr><tr><td class="lyrics">My </td><td class="lyrics">heart has always </td><td class="lyrics">longed for something</td><td class="lyrics"> more</td></tr></table><table class="row"><tr><td class="chord"></td><td class="chord">Cm7</td><td class="chord">Ab</td><td class="chord">Eb2</td></tr><tr><td class="lyrics">I </td><td class="lyrics">searched the stars to </td><td class="lyrics">knock on Heaven's </td><td class="lyrics">door</td></tr></table><table class="row"><tr><td class="chord"></td><td class="chord">Cm7</td><td class="chord">Bb2/D</td><td class="chord">Eb2</td></tr><tr><td class="lyrics">Cre - </td><td class="lyrics">ation groans for </td><td class="lyrics">God to be re </td><td class="lyrics">- vealed</td></tr></table><table class="row"><tr><td class="chord">Cm7</td><td class="chord">Ab</td><td class="chord">Eb2</td></tr><tr><td class="lyrics">Every wound we </td><td class="lyrics">carry will be</td><td class="lyrics"> healed</td></tr></table><table class="row"><tr><td class="chord"></td><td class="chord">F7/A</td><td class="chord">Abm6</td></tr><tr><td class="lyrics">My eyes on the </td><td class="lyrics">Son, Lord Your will be </td><td class="lyrics">done</td></tr></table></div><div class="paragraph"></div></div>`
}