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
    throw new Error(`Can't set attribute on "${elem}" element.`);
  }
}

export function getAttr(elem, name = '') {
  if (elem) {
    return elem.getAttribute(name);
  }
  throw new Error(`Can't get attribute on "${elem}" element.`);
}

export function setText(elem, text = '') {
  if (elem) {
    elem.textContent = text;
  } else {
    throw new Error(`Can't set text content on "${elem}" element.`);
  }
}

export function onFullLoad(callback = console.log) {
  window.addEventListener('load', callback);
}

export function onReady(callback) {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

export function getWidth(elem) {
  if (elem) {
    return parseFloat(getComputedStyle(elem, null).width.replace('px', ''));
  } else {
    throw new Error(`Can't get width of "${elem}" element.`);
  }
}

export function getParent(elem) {
  return elem.parentNode;
}

export function remove(elem) {
  const parent = getParent(elem);

  if (parent) {
    parent.removeChild(elem);
  }
}
