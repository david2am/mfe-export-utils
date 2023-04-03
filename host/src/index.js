import printMe from './print.js';
import _ from 'lodash'

function component() {
  const div = document.createElement('div')
  const btn = document.createElement('button');

  btn.innerHTML = _.join(['Hi', 'index'], ' ');
  btn.onclick = printMe

  div.appendChild(btn)

  return div;
}

document.body.appendChild(component());