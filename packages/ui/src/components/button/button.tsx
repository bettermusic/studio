import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bm-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class BmButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
