import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello');

  const icon = new Image();
  icon.src = Icon;
  element.appendChild(icon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component())
