import { Component, h, Host, Prop } from '@stencil/core';
import { cva } from "class-variance-authority";
import { applyStyleToMultipleVariants } from "../../../utils/cva";

@Component({
  tag: 'bm-button',
  styleUrl: 'button.css',
})
export class BmButton {
 
  @Prop() text?: string;

  @Prop() startIcon?: string;

  @Prop() endIcon?: string;

  @Prop() color: "primary" | "secondary" | "minimal" | "destructive" = "primary";

  @Prop() size: "sm" | "base" | "lg" | "icon" = 'base';

  @Prop() loading?: boolean;

  @Prop() disabled?: boolean;

  buttonClasses = cva(
    "inline-flex items-center text-sm font-medium relative rounded-md transition-colors",
    {
      variants: {
        color: {
          primary: "text-primary hover:text-blue",
          secondary: "text-gray-600 hover:text-gray-800",
          minimal: "text-gray-600 hover:text-primary",
          destructive: "",
        },
        size: {
          sm: "px-3 py-2 leading-4 rounded-sm" /** For backwards compatibility */,
          base: "h-9 px-4 py-2.5 ",
          lg: "h-[36px] px-4 py-2.5 ",
          icon: "flex justify-center min-h-[36px] min-w-[36px] ",
        },
        loading: {
          true: "cursor-wait",
        },
        disabled: {
          true: "cursor-not-allowed",
        },
      },
      compoundVariants: [
        // Primary variants
        {
          disabled: true,
          color: "primary",
          className: "bg-gray-800 bg-opacity-30",
        },
        {
          loading: true,
          color: "primary",
          className: "bg-gray-800/30 text-primary/30",
        },
        ...applyStyleToMultipleVariants({
          disabled: [undefined, false],
          color: "primary",
          className:
            "bg-gray-500 hover:bg-gray-400 focus:border focus:border-white focus:outline-none focus:ring-2 focus:ring-offset focus:ring-brand-500",
        }),
        // Secondary variants
        {
          disabled: true,
          color: "secondary",
          className:
            "border border-gray-200 bg-opacity-30 text-gray-900/30 bg-white",
        },
        {
          loading: true,
          color: "secondary",
          className:
            "bg-gray-100 text-gray-900/30",
        },
        ...applyStyleToMultipleVariants({
          disabled: [undefined, false],
          color: "secondary",
          className:
            "border border-gray-300 hover:bg-gray-200 hover:border-gray-400 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-900",
        }),
        // Minimal variants
        {
          disabled: true,
          color: "minimal",
          className:
            "border:gray-200 bg-opacity-30 text-gray-900/30 ",
        },
        {
          loading: true,
          color: "minimal",
          className:
            "bg-gray-100 text-gray-900/30",
        },
        applyStyleToMultipleVariants({
          disabled: [undefined, false],
          color: "minimal",
          className:
            "hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-900 ",
        }),
        // Destructive variants
        {
          disabled: true,
          color: "destructive",
          className:
            "text-red-700/30 bg-red-100/40 border border-red-200",
        },
        {
          loading: true,
          color: "destructive",
          className:
            "text-red-700/30 hover:text-red-700/30 bg-red-100 border border-red-200",
        },
        ...applyStyleToMultipleVariants({
          disabled: [false, undefined],
          color: "destructive",
          className:
            "border text-gray-900 hover:text-red-700 focus:text-red-700 hover:border-red-100 focus:border-red-100 hover:bg-red-100  focus:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-red-700",
        }),
      ],
      defaultVariants: {
        color: "primary",
        size: "base",
      },
    }
  );

  render() {
    const startIconSrc = this.startIcon ? `/assets/icons/${this.startIcon}.svg` : null;
    const endIconSrc = this.endIcon ? `/assets/icons/${this.endIcon}.svg` : null;
    return (
      <Host>
        <button class={
          this.buttonClasses({
            color: this.color,
            size: this.size,
            loading: false,
            disabled: false,
          })}>
          { this.startIcon ? <ion-icon className={`${this.text ? 'pr-1.5': null }`} src={startIconSrc}></ion-icon> : null }
          {this.text}
          { this.endIcon ? <ion-icon className={`${this.text ? 'pl-1.5': null }`} name={endIconSrc}></ion-icon> : null }
        </button>
      </Host>
    );
  }

}
