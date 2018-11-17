function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild(){
  let children = document.getElementById('grand-node').querySelectorAll('div');
  return children[children.length-1];
}