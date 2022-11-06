// import * as step1 from './steps/step1';
import Didact from './src'

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)

console.log('hello Didact')

const container = document.getElementById('root')
Didact.render(element, container as HTMLElement)
