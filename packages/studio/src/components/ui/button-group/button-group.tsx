import { Component, h, Host, Prop } from '@stencil/core';
import classNames from '../../../utils/classNames';

@Component({
  tag: 'bm-button-group',
  styleUrl: 'button-group.css',
  shadow: false,
})
export class BmButton {
 
  @Prop() combined: boolean = false;

  @Prop() containerProps: any;

  /**
   * Breakdown of Tailwind Magic below
   * [&_bm-button_button]:border-l-0 [&_bm-button_a]:border-l-0 -> Selects all button/a tags inside the bm-button element and applies a border left of 0
   * [&>*:first-child_button]:rounded-l-md [&>*:first-child_button]:border-l -> Selects the first child of the content
   * ounds the left side
   * [&>*:last-child_button]:rounded-r-md -> Selects the last child of the content and rounds the right side
   * We dont need to add border to the right as we never remove it
   */

  render() {
    return (
      <Host>
        <div
        part="button-group"
          {...this.containerProps}
          class={classNames(
            "flex",
            !this.combined
              ? "space-x-2"
              : "[&_bm-button_button]:rounded-none [&_bm-button_button]:border-l-0 [&>*:first-child_button]:rounded-l-md [&>*:first-child_button]:border-l [&_bm-button_a]:rounded-none  [&_bm-button_a]:border-l-0 [&>*:last-child_button]:rounded-r-md",
            this.containerProps?.className
          )}>
          <slot />
        </div>
      </Host>
    );
  }

}
