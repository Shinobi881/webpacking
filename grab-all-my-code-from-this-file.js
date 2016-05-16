import { myObject } from './another-file.js';

const stuffFunc = (thingy) => {
  document.write('Is this thing on?');
  console.dir(thingy);
}

stuffFunc(myObject);

const testFunc = () => {
  const element = document.createElement('h1');
  element.textContent = 'We\'re Webpacking!!!';
  document.body.appendChild(element);
}

testFunc();