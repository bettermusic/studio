# bm-studio



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bm-editor-header](../editor-header)
- [bm-editor](../editor)
- [bm-view](../../view)

### Graph
```mermaid
graph TD;
  bm-editor-split-view --> bm-editor-header
  bm-editor-split-view --> bm-editor
  bm-editor-split-view --> bm-view
  bm-editor-header --> bm-button-group
  bm-editor-header --> bm-button-dropdown
  bm-editor-header --> bm-button
  bm-editor-header --> bm-dropdown-shell
  bm-button-dropdown --> bm-dropdown-list-item
  bm-button-dropdown --> bm-button
  bm-editor --> bm-button-group
  bm-editor --> bm-button
  bm-editor --> bm-text-editor
  style bm-editor-split-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
