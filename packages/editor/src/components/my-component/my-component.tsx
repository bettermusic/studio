import { Component, Prop, h } from '@stencil/core';

import { ChordSheetParser, HtmlTableFormatter } from 'chordsheetjs'; // the latest published to chordsheetjs
// import { ChordSheetParser, HtmlTableFormatter } from '@praisecharts/chordchartjs'; // the local version

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getChordPro(): string {
    const chordSheet = `
    Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be`.substring(1);

    const parser = new ChordSheetParser();
    const song = parser.parse(chordSheet);
    const formatter = new HtmlTableFormatter();
    const disp = formatter.format(song);

    return disp;
  }

  render() {
    return <div>{this.getChordPro()}</div>;
  }
}
