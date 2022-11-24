import { Component, h, Host } from '@stencil/core';
import  EditIcon  from '../../../icons/edit';

@Component({
  tag: 'bm-editor-header',
  styleUrl: 'editor-header.css',
  shadow: true,
})
export class Editor {

  render() {
    return (
      <Host class="bg-neutral-800 rounded-t-lg p-2 flex border-b border-neutral-700 items-center">
        <div class="flex-initial flex items-center">
          <img class="rounded shadow-sm h-auto w-8" src="https://cdn-assets.praisecharts.com/content/albums/600x600/album_10701.jpg"></img>
          <div class="flex-col ml-2 text-sm text-white">
            <strong>Rattle!</strong>
            <h6 class="text-xs text-neutral-500">Elevation Worship</h6>
          </div>
        </div>
        <div class="flex-1 flex justify-end space-x-2 text-gray-700 w-100">
          <bm-button 
            size='base' 
            color='secondary'
            text='Edit'
            >
          </bm-button>
          <bm-button 
            size='icon'
            color='minimal'
            >
            <EditIcon></EditIcon>
          </bm-button>
        </div>
      </Host>
    );
  }
}

