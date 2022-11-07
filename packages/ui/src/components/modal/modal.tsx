import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bm-modal',
  styleUrl: 'modal.css',
  shadow: true,
})
export class BmModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
