export function select(target = '', container = document) {
  return container.querySelector(target);
}

export function selectAll(target = '', container = document) {
  return [...container.querySelectorAll(target)];
}

export function setAttr(elem, name = '', value = '') {
  if (elem) {
    elem.setAttribute(name, value);
  } else {
    console.error(`Can't set attribute on "${elem}" element.`);
  }
}

export function getAttr(elem, name = '') {
  if (elem) {
    return elem.getAttribute(name);
  } else {
    console.error(`Can't get attribute on "${elem}" element.`);
  }
}

export function setText(elem, text = '') {
  if (elem) {
    elem.textContent = text;
  } else {
    console.error(`Can't set text content on "${elem}" element.`);
  }
}

export function onFullLoad(callback = console.log) {
  window.addEventListener('load', callback);
}
