/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  RichTextEditorOptions,
} from './utils/options.interface';

export namespace Components {
  interface HiveColorPopover {
    'colors': string[];
    'isOpen': boolean;
    'position': 'top' | 'bottom';
  }
  interface HiveLinkPopover {
    'creating': boolean;
    'text': string;
    'url': string;
  }
  interface HiveRichText {
    'fontSmoothing': boolean;
    'getContent': () => Promise<{ text: string; html: string; }>;
    'options': Partial<RichTextEditorOptions>;
    'setContent': (value: string) => Promise<void>;
    'value': string;
  }
}

declare global {


  interface HTMLHiveColorPopoverElement extends Components.HiveColorPopover, HTMLStencilElement {}
  var HTMLHiveColorPopoverElement: {
    prototype: HTMLHiveColorPopoverElement;
    new (): HTMLHiveColorPopoverElement;
  };

  interface HTMLHiveLinkPopoverElement extends Components.HiveLinkPopover, HTMLStencilElement {}
  var HTMLHiveLinkPopoverElement: {
    prototype: HTMLHiveLinkPopoverElement;
    new (): HTMLHiveLinkPopoverElement;
  };

  interface HTMLHiveRichTextElement extends Components.HiveRichText, HTMLStencilElement {}
  var HTMLHiveRichTextElement: {
    prototype: HTMLHiveRichTextElement;
    new (): HTMLHiveRichTextElement;
  };
  interface HTMLElementTagNameMap {
    'hive-color-popover': HTMLHiveColorPopoverElement;
    'hive-link-popover': HTMLHiveLinkPopoverElement;
    'hive-rich-text': HTMLHiveRichTextElement;
  }
}

declare namespace LocalJSX {
  interface HiveColorPopover {
    'colors'?: string[];
    'isOpen'?: boolean;
    'onColorSelected'?: (event: CustomEvent<any>) => void;
    'position'?: 'top' | 'bottom';
  }
  interface HiveLinkPopover {
    'creating'?: boolean;
    'onAction'?: (event: CustomEvent<any>) => void;
    'text'?: string;
    'url'?: string;
  }
  interface HiveRichText {
    'fontSmoothing'?: boolean;
    /**
    * The style change event when the user clicks to apply a new style
    */
    'onStyleChange'?: (event: CustomEvent<any>) => void;
    /**
    * The text change event when the user releases a key-up event in the text area
    */
    'onTextChange'?: (event: CustomEvent<any>) => void;
    'options'?: Partial<RichTextEditorOptions>;
    'value'?: string;
  }

  interface IntrinsicElements {
    'hive-color-popover': HiveColorPopover;
    'hive-link-popover': HiveLinkPopover;
    'hive-rich-text': HiveRichText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hive-color-popover': LocalJSX.HiveColorPopover & JSXBase.HTMLAttributes<HTMLHiveColorPopoverElement>;
      'hive-link-popover': LocalJSX.HiveLinkPopover & JSXBase.HTMLAttributes<HTMLHiveLinkPopoverElement>;
      'hive-rich-text': LocalJSX.HiveRichText & JSXBase.HTMLAttributes<HTMLHiveRichTextElement>;
    }
  }
}


