function removeClass(el, className){
  document.querySelector(el).className = document.querySelector(el).className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}
function addClass(el, className){
  if (!hasClass(el, className)) document.querySelector(el).className += ' ' + className;
}
function hasClass(el, className){
  return new RegExp('\\b'+ className+'\\b').test(document.querySelector(el).className);
}
function toggleClass(el, className){
  hasClass(el, className) ? removeClass(el,className) : addClass(el,className);
}
