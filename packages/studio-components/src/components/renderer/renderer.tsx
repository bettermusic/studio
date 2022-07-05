import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'pc-renderer',
  styleUrl: 'renderer.scss',
  shadow: true,
})
export class Renderer {

  @Prop() html: string

 @Prop() mode: string;

 @Element() host: HTMLElement;

  render() {
    this.host.shadowRoot.innerHTML = this.html
    return (
      <Host></Host>
    );
  }
}
