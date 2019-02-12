function removeClass(el, className){
  el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
function addClass(el, className){
  if (!hasClass(el, className)) el.className += ' ' + className;
}
function hasClass(el, className){
  return new RegExp('\\b'+ className+'\\b').test(el.className);
}
function toggleClass(el, className){
  hasClass(el, className) ? removeClass(el,className) : addClass(el,className);
}
