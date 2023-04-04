import add from 'remote/add'

import _ from 'lodash'

function component() {
  const div = document.createElement('div')
  const btn = document.createElement('button');

  btn.innerHTML = _.join(['Hi', 'index'], ' ');
  btn.onclick = function print() {
    console.log(add(2,3))
  }

  div.appendChild(btn)

  return div;
}

document.body.appendChild(component());