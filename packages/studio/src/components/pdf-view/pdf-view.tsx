import { Component, Host, h, Element, Prop } from '@stencil/core';
@Component({
  tag: 'bm-pdf-view',
  styleUrl: 'pdf-view.css',
  shadow: true,
})
export class PdfRenderer {
  @Element() host: HTMLElement;
  @Prop() svgContent: string;

  render() {
    return (
      <Host class="w-full bg-gray-200 border-e border-b rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-none border-gray-300" data-mode="dark">
          <div class="pdf-container" innerHTML={this.svgContent}></div>
      </Host>
    );
  }
}
