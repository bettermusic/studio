# pc-studio



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `value`  | `value`   |             | `string` | `undefined` |


## Dependencies

### Depends on

- [pc-editor-mode-dropdown](../editor-mode-dropdown)
- [pc-editor-key-dropdown](../editor-key-dropdown)
- [pc-editor-capo-dropdown](../editor-capo-dropdown)
- [pc-editor](../editor)
- [pc-renderer](../renderer)

### Graph
```mermaid
graph TD;
  pc-editor-split-view --> pc-editor-mode-dropdown
  pc-editor-split-view --> pc-editor-key-dropdown
  pc-editor-split-view --> pc-editor-capo-dropdown
  pc-editor-split-view --> pc-editor
  pc-editor-split-view --> pc-renderer
  pc-editor-mode-dropdown --> pc-dropdown
  pc-dropdown --> pc-dropdown-list-item
  pc-editor-key-dropdown --> pc-dropdown
  pc-editor-capo-dropdown --> pc-dropdown
  style pc-editor-split-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
