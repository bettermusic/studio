import { Component, Host, h, Prop, Element } from '@stencil/core';
import state from "../../utils/store";

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
    this.host.shadowRoot.innerHTML = state.html
    return (
      <Host></Host>
    );
  }
}
