type ElementProps = {
  [key: string]: any
  id?: string
  children?: EL[]
  nodeValue?: string
}

type EL = TextElement | NodeElement

type TextElement = {
  type: 'TEXT_ELEMENT'
  props: ElementProps
}

type NodeElement = {
  type: string
  props: ElementProps
}

type Container = HTMLElement

export { ElementProps, EL, TextElement, NodeElement, Container }
