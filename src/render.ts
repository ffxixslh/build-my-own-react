import { createTextElement } from './createElement'
import { NodeElement, Container } from './types'

function render(element: NodeElement, container: Container) {
  /**
   * @todo 完善dom类型
   */
  const dom: any =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)

  element.props?.children?.forEach((child) => {
    render(child, dom)
  })

  const isProperty = (key: string) => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })

  container.appendChild(dom)
}

export { render }
