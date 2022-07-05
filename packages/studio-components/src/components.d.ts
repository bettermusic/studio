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
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html": string;
        "mode": string;
    }
}
export interface PcEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPcEditorElement;
}
declare global {
    interface HTMLPcEditorElement extends Components.PcEditor, HTMLStencilElement {
    }
    var HTMLPcEditorElement: {
        prototype: HTMLPcEditorElement;
        new (): HTMLPcEditorElement;
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
        "pc-editor-split-view": HTMLPcEditorSplitViewElement;
        "pc-renderer": HTMLPcRendererElement;
    }
}
declare namespace LocalJSX {
    interface PcEditor {
        "initialValue"?: string;
        "onChordProUpdated"?: (event: PcEditorCustomEvent<string>) => void;
    }
    interface PcEditorSplitView {
    }
    interface PcRenderer {
        "html"?: string;
        "mode"?: string;
    }
    interface IntrinsicElements {
        "pc-editor": PcEditor;
        "pc-editor-split-view": PcEditorSplitView;
        "pc-renderer": PcRenderer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pc-editor": LocalJSX.PcEditor & JSXBase.HTMLAttributes<HTMLPcEditorElement>;
            "pc-editor-split-view": LocalJSX.PcEditorSplitView & JSXBase.HTMLAttributes<HTMLPcEditorSplitViewElement>;
            "pc-renderer": LocalJSX.PcRenderer & JSXBase.HTMLAttributes<HTMLPcRendererElement>;
        }
    }
}
