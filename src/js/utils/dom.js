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
    console.log(`Can't set ${name} attribute on "${elem}" element.`);
  }
}

export function getAttr(elem, name = '') {
  if (elem) {
    return elem.getAttribute(name);
  }
  console.log(`Can't get attribute on "${elem}" element.`);
}

export function setText(elem, text = '') {
  if (elem) {
    elem.textContent = text;
  } else {
    console.log(`Can't set text content on "${elem}" element.`);
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
    console.log(`Can't get width of "${elem}" element.`);
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

export function bindEvent(elem = document, event, callback) {
  elem.addEventListener(event, callback);
}

export function removeEvent(elem = document, event, callback) {
  elem.removeEventListener(event, callback);
}

export function addClass(elem, ...classes) {
  elem.classList.add(...classes);
}

export function removeClass(elem, ...classes) {
  elem.classList.remove(...classes);
}

export function toggleClass(elem, flag = false, ...classes) {
  flag ? addClass(elem, ...classes) : removeClass(elem, ...classes);
}

export function toggleBetweenClasses(
  elem,
  flag = false,
  { positiveClasses = [], negativeClasses = [] } = {}
) {
  if (flag) {
    addClass(elem, ...positiveClasses);
    removeClass(elem, ...negativeClasses);
  } else {
    addClass(elem, ...negativeClasses);
    removeClass(elem, ...positiveClasses);
  }
}

export function scrollTop() {
  window.scrollTo({ behavior: 'smooth', top: 0 });
}
