import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-for-angular',
  shadow: true,
})
export class TestForAngular {

  render() {
    return (
      <Host>
        <p>This compoment from stencil works!</p>
        <slot></slot>
      </Host>
    );
  }

}
