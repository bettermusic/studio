// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Editor',
  argTypes: {
    value: { control: 'text' },
  },

  // component: Studio
};

const Editor = (args) => `<pc-editor value="${args.value}"></pc-editor>`;

export const ChordPro = Editor.bind({});
ChordPro.args = {
  value: `{t:Kingdom}
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

export const ChordsOverLyrics = Editor.bind({});
ChordsOverLyrics.args = {
  value: `title: Rattle
artist: Elevation Worship
key: Eb

Intro (5x)
Eb(no3) / / / | / / / / |

Verse 1
Eb                   Ebsus         Eb
Saturday was silent, surely it was through
Cm                         Bb        Ab2  Eb/G    Eb  / / / /
   But since when has im - possible\ ever stopped You
Eb                                Ebsus       Eb
Friday’s disappointment\ is Sun - day’s empty tomb
Cm                     Bb        Ab2  Eb/G    Eb
   Since when has im - possible\ ever stopped You
Ab2 - Eb/G Eb /

Chorus 1
Eb5                                     /Bb - /Ab Eb5
This is the sound\ of dry bones rattling
Eb5                                           /Bb - /Ab Eb5
This is the praise\ make a dead man walk again
         Cm                Bb
Open the grave, I'm coming out
          Ab                   Eb
I'm gonna live, gonna live a - gain
Eb5                                     Ab - Eb/G Eb5
This is the sound\ of dry bones rattling
Ab - Eb/G Eb5 / | Ab - Eb/G Eb5 /`
};
