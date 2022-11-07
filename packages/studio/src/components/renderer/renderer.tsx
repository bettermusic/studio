import { Component, Host, h, Prop, Element } from '@stencil/core';
import state from "../../stores/editor_store";

@Component({
  tag: 'bm-renderer',
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
