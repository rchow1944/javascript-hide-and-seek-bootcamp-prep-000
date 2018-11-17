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

function increaseRankBy(n){
  let ranks = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}