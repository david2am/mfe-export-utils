import printMe from './print.js';

function component() {
  const div = document.createElement('div')
  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe

  div.appendChild(btn)

  return div;
}

document.body.appendChild(component());