import printMe from './print';
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = 'Hello Webpack';
  btn.innerHTML = 'Click Me';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
