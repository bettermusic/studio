import { Component, Prop, h, State, Listen, Event, EventEmitter, Method, Watch, Host, Element } from '@stencil/core';
import '../../../utils/closestPolifill';
import { UUID } from '../../../utils/consts';
import { getItemLabel, getItemValue } from '../../../utils/dropdown-list-item.helpers';
import { DropdownListFilter } from '../dropdown-list-item/dropdown-list-filter';

@Component({
  tag: 'bm-dropdown-shell',
  styleUrl: 'bm-dropdown-shell.style.scss',
  shadow: false
})
export class BmDropdown {
  private element: Element;
  private dropdown: HTMLElement;
  private dropdownInner: HTMLElement;
  private dropdownInput: HTMLInputElement;
  private autocompleteInput: HTMLInputElement;
  private bmList: HTMLBmDropdownListItemElement;
  private uuid: string = '';
  private currentSource?: any[];
  private isClosing = false;

  @State() currentItem: any = null;
  @State() isVisible = false;

  @Element() host: HTMLElement;
  // --------------------------------------------------------------------------
  //
  //  Props
  //
  // --------------------------------------------------------------------------
  /**
   * Optional ID for dropdown changed events
   */
  @Prop() id: string;
  /**
   * Define object mapping for labels
   */
  @Prop() dataLabel: string;
  /**
   * Define object mapping for labels
   */
  @Prop() buttonLabel?: string;
  /**
   * Selected value
   */
  @Prop({ mutable: true }) value: any;
  /**
   * Filter value
   */
  @Prop({ mutable: true }) currentFilter: any;

  /**
   * Define object mapping for id/value
   */
  @Prop() dataId: string;
  /**
   * Should dropdown autoclose on changeValue
   */
  @Prop() autoClose: boolean = true;

  /**
   * Define object mapping for id/value
   */
  @Prop() source: any[] = [];

  /**
   * Placeholder text
   */
  @Prop() placeholder: string = 'Select';
  /**
   * Filter criteria
   */
  @Prop() filter: 'contains' | 'start';

  @Prop() maxHeight: number;

  @Prop() hasFilter: boolean = true;

  @Prop() autocomplete: boolean = false;
  @Prop() autoFocus: boolean = false;

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------
  /**
   * When value changed
   */
  @Event({ eventName: 'changed' }) changeValue: EventEmitter<{ val: any; id: string; originalEvent?: MouseEvent }>;
  /**
   * Before element close, can be prevented
   */
  @Event() close: EventEmitter;

  /**
   * Before element open, can be prevented
   */
  @Event() open: EventEmitter;

  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------

  /**
   * Close dropdown
   */
  @Method() async doClose(isDisconnected = false): Promise<void> {
    if (!isDisconnected) {
      const event = this.close.emit();
      if (event.defaultPrevented) {
        return;
      }
    }
    this.isClosing = true;
    this.isVisible = false;
  }
  /**
   * Open dropdown
   */
  @Method() async doOpen(): Promise<void> {
    const event = this.open.emit();
    if (event.defaultPrevented) {
      return;
    }
    this.isVisible = true;
  }

  /**
   * Change value
   */
  @Method() async doChange(val: any, originalEvent?: MouseEvent): Promise<void> {
    this.value = getItemValue(val, this.dataId);
    this.changeValue.emit({ val: this.value, id: this.id, originalEvent });
    if (this.autocompleteInput) {
      this.autocompleteInput.value = getItemLabel(this.currentItem, this.dataLabel);
    }
    if (this.autoClose && this.isVisible) {
      this.doClose();
    }
  }

  // --------------------------------------------------------------------------
  //
  //  Internal
  //
  // --------------------------------------------------------------------------

  /** Action finished */
  @Listen('mousedown', { target: 'document' })
  onMouseUp(e: MouseEvent): void {
    if (this.isVisible && !e.defaultPrevented) {
      // using event coridinates to check if click was outside of dropdown
      const isOutside = !this.isMouseEventInDOMRect(e, this.dropdown.getBoundingClientRect());
      
      if (isOutside) {
        this.doClose();
      }
    }
  }

  @Listen('keydown', { target: 'document' }) onKey(e: KeyboardEvent) {
    switch (e.code) {
      case 'Escape':
        e.preventDefault();
        this.doClose();
        break;
    }
  }

  @Watch('value') onValueChanged(newVal: any) {
    this.currentItem = this.getValue(newVal);
  }

  componentWillLoad() {
    if (this.value) {
      this.currentItem = this.value;
    }
  }

  connectedCallback() {
    this.uuid = `${this.uuidv4(new Date().getTime())}-pcdropdown`;
    if (typeof this.value !== 'undefined') {
      this.onValueChanged(this.value);
    }
  }

  disconnectedCallback() {
    this.doClose(true);
  }

  componentDidRender() {
    if (this.dropdown) {
      this.host.appendChild(this.dropdown);
    }
    if (this.isVisible) {
      this.updateStyles();
    }
    if (this.dropdownInput) {
      this.dropdownInput.focus();
    }
    if (this.autoFocus) {
      if (this.autocomplete) {
        setTimeout(() => this.autocompleteInput?.focus(), 0);
      }
    }
  }

  render() {
    const buttonProps = {
      [UUID]: this.uuid,
      onClick: e => this.selectClick(e)
    };
    const dropdownProps = {
      [UUID]: this.uuid,
      ref: e => (this.dropdown = e)
    };
    
    return (
      <Host ref={el => this.element = el as HTMLElement}>
        <div {...buttonProps} >
          <slot name="dropdown-button" />
        </div> 
        <div {...{ [UUID]: this.uuid }} ref={e => (this.dropdown = e)}
              class={`${this.isVisible ? 'flex' : 'hidden'} mt-2 z-10 max-h-full absolute box-border overflow-hidden min-h-[1rem] min-w-[1rem] shadow-lg shadow-gray-100`}
              >
          <slot name="dropdown-content" />
        </div> 
      </Host>
    );
  }

  private getValue(newVal: any) {
    for (let index in this.source) {
      const item = this.source[index];
      if (newVal == getItemValue(item, this.dataId)) {
        return item;
      }
    }
    return null;
  }

  private selectClick(e: Event) {
    if (e.defaultPrevented) {
      return;
    }
    if (this.isVisible) {
      this.doClose();
    } else {
      this.doOpen();
    }
  }

  private updateStyles() {
    if (!this.dropdown) {
      return;
    }
    const { top, left, height } = this.element.getBoundingClientRect();
    const visibleRect = this.clientRectangle();
    let currentTop = top + height + visibleRect.top;

    const style: {
      top?: string;
      maxHeight?: number;
      maxWidth?: string;
      left?: string;
      opacity?: number;
      display: string;
    } = {
      opacity: 1,
      display: 'block'
    };

    // top
    if (currentTop > visibleRect.centerY) {
      style.top = `${currentTop - 48}px`;
      style.maxHeight = currentTop - 48 - visibleRect.top - 50;
      this.dropdown.classList.add('top');

      // bottom
    } else {
      style.top = `${currentTop}px`;
      style.maxHeight = visibleRect.bottom - currentTop - 50;
      this.dropdown.classList.remove('top');
    }

    // left
    let currentLeft = left + visibleRect.left;
    const rightSpace = visibleRect.right - (currentLeft + this.dropdown.clientWidth);    
    if (rightSpace < 0) {
      currentLeft += rightSpace;
    }
    style.left = `${currentLeft}px`;
    this.dropdownInner.style.maxHeight = `${Math.min(style.maxHeight, this.maxHeight || style.maxHeight)}px`;
    this.dropdownInner.style.maxWidth = style.maxWidth;

    for (let s in style) {
      this.dropdown.style[s] = style[s];
    }
  }

  private clientRectangle() {
    const rect = {
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      bottom: 0,
      centerY: 0,
      height: document.body.clientHeight,
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      right: 0,
      width: document.body.clientWidth,
      centerX: 0,
    };
    rect.bottom = rect.top + rect.height;
    rect.right = rect.left + rect.width;
    rect.centerY = rect.top + rect.height / 2;
    rect.centerX = rect.left + rect.width / 2;
    return rect;
  }

  private uuidv4(stamp: number) {
    return `${stamp}-xx-y`.replace(/[xy]/g, (c) => {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private isMouseEventInDOMRect(event: MouseEvent, rect: DOMRect) {
    // Get the x- and y-coordinates of the mouse event relative to the viewport
    const x = event.clientX;
    const y = event.clientY;
  
    // Check if the coordinates are within the bounds of the DOMRect
    if (x >= rect.x && x <= rect.x + rect.width &&
        y >= rect.y && y <= rect.y + rect.height) {
      // The mouse event occurred within the DOMRect
      return true;
    }
  
    // The mouse event did not occur within the DOMRect
    return false;
  }
}
