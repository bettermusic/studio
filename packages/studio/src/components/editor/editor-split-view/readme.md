# bm-studio



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [bm-editor-mode-dropdown](../editor-mode-dropdown)
- [bm-editor-key-dropdown](../editor-key-dropdown)
- [bm-editor-capo-dropdown](../editor-capo-dropdown)
- [bm-editor](../editor)
- [bm-view](../../view)

### Graph
```mermaid
graph TD;
  bm-editor-split-view --> bm-editor-mode-dropdown
  bm-editor-split-view --> bm-editor-key-dropdown
  bm-editor-split-view --> bm-editor-capo-dropdown
  bm-editor-split-view --> bm-editor
  bm-editor-split-view --> bm-view
  bm-editor-mode-dropdown --> bm-dropdown
  bm-dropdown --> bm-dropdown-list-item
  bm-editor-key-dropdown --> bm-dropdown
  bm-editor-capo-dropdown --> bm-dropdown
  bm-editor --> bm-text-editor
  style bm-editor-split-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
