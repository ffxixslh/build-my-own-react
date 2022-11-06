import { EL, ElementProps, NodeElement, TextElement } from './types'

function createElement(
  type: string,
  props: ElementProps,
  ...children: EL[]
): NodeElement {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text: string): TextElement {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
    },
  }
}

export { createElement, createTextElement }
