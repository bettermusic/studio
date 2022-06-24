import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pcs-renderer',
  styleUrl: 'renderer.scss',
  shadow: true,
})
export class Renderer {

  @Prop() html: string

  @Prop() mode: string;

  render() {
    return (
      <Host>
        <div innerHTML={this.html}></div>
      </Host>
    );
  }

}
