/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PcEditor {
        "initialValue": string;
        "setCapo": (capoPosition: number) => Promise<void>;
    }
    interface PcEditorCapoDropdown {
    }
    interface PcEditorKeyDropdown {
    }
    interface PcEditorModeDropdown {
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html": string;
        "mode": string;
    }
}
declare global {
    interface HTMLPcEditorElement extends Components.PcEditor, HTMLStencilElement {
    }
    var HTMLPcEditorElement: {
        prototype: HTMLPcEditorElement;
        new (): HTMLPcEditorElement;
    };
    interface HTMLPcEditorCapoDropdownElement extends Components.PcEditorCapoDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorCapoDropdownElement: {
        prototype: HTMLPcEditorCapoDropdownElement;
        new (): HTMLPcEditorCapoDropdownElement;
    };
    interface HTMLPcEditorKeyDropdownElement extends Components.PcEditorKeyDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorKeyDropdownElement: {
        prototype: HTMLPcEditorKeyDropdownElement;
        new (): HTMLPcEditorKeyDropdownElement;
    };
    interface HTMLPcEditorModeDropdownElement extends Components.PcEditorModeDropdown, HTMLStencilElement {
    }
    var HTMLPcEditorModeDropdownElement: {
        prototype: HTMLPcEditorModeDropdownElement;
        new (): HTMLPcEditorModeDropdownElement;
    };
    interface HTMLPcEditorSplitViewElement extends Components.PcEditorSplitView, HTMLStencilElement {
    }
    var HTMLPcEditorSplitViewElement: {
        prototype: HTMLPcEditorSplitViewElement;
        new (): HTMLPcEditorSplitViewElement;
    };
    interface HTMLPcRendererElement extends Components.PcRenderer, HTMLStencilElement {
    }
    var HTMLPcRendererElement: {
        prototype: HTMLPcRendererElement;
        new (): HTMLPcRendererElement;
    };
    interface HTMLElementTagNameMap {
        "pc-editor": HTMLPcEditorElement;
        "pc-editor-capo-dropdown": HTMLPcEditorCapoDropdownElement;
        "pc-editor-key-dropdown": HTMLPcEditorKeyDropdownElement;
        "pc-editor-mode-dropdown": HTMLPcEditorModeDropdownElement;
        "pc-editor-split-view": HTMLPcEditorSplitViewElement;
        "pc-renderer": HTMLPcRendererElement;
    }
}
declare namespace LocalJSX {
    interface PcEditor {
        "initialValue"?: string;
    }
    interface PcEditorCapoDropdown {
    }
    interface PcEditorKeyDropdown {
    }
    interface PcEditorModeDropdown {
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html"?: string;
        "mode"?: string;
    }
    interface IntrinsicElements {
        "pc-editor": PcEditor;
        "pc-editor-capo-dropdown": PcEditorCapoDropdown;
        "pc-editor-key-dropdown": PcEditorKeyDropdown;
        "pc-editor-mode-dropdown": PcEditorModeDropdown;
        "pc-editor-split-view": PcEditorSplitView;
        "pc-renderer": PcRenderer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pc-editor": LocalJSX.PcEditor & JSXBase.HTMLAttributes<HTMLPcEditorElement>;
            "pc-editor-capo-dropdown": LocalJSX.PcEditorCapoDropdown & JSXBase.HTMLAttributes<HTMLPcEditorCapoDropdownElement>;
            "pc-editor-key-dropdown": LocalJSX.PcEditorKeyDropdown & JSXBase.HTMLAttributes<HTMLPcEditorKeyDropdownElement>;
            "pc-editor-mode-dropdown": LocalJSX.PcEditorModeDropdown & JSXBase.HTMLAttributes<HTMLPcEditorModeDropdownElement>;
            "pc-editor-split-view": LocalJSX.PcEditorSplitView & JSXBase.HTMLAttributes<HTMLPcEditorSplitViewElement>;
            "pc-renderer": LocalJSX.PcRenderer & JSXBase.HTMLAttributes<HTMLPcRendererElement>;
        }
    }
}
