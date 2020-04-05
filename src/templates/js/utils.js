function hide(ele) {
  ele.classList.add('u-hide')
}

function show(ele) {
  ele.classList.remove('u-hide')
}

function setSelect(ele) {
  ele.classList.add('is-selected');
}

function unSelect(ele) {
  ele.classList.remove('is-selected');
}

function enable(ele) {
  ele.classList.remove('disabled')
}

function inActive(ele) {
  ele.classList.remove('is-active')
}

function setActive(ele) {
  ele.classList.add('is-active')
}