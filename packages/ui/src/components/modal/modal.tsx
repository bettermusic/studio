import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pc-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class PcModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
