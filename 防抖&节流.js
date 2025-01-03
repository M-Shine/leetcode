// 防抖
function debounce(fn, wait) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  }
}

// 节流
function throttle(fn, wait) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, wait);
    }
  }
}