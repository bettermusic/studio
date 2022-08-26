import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pc-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class PcButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
