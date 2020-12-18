import Vue from "vue";
// 函数的节流
function throttle(func, wait = 500) {
  let timer = null,
      previous = 0;
  return function anonymous(...params) {
      let now = new Date(),
          remaining = wait - (now - previous);
      if (remaining <= 0) {
          clearTimeout(timer);
          timer = null;
          previous = now;
          func.call(this, ...params);
      } else if (!timer) {
          timer = setTimeout(() => {
              clearTimeout(timer);
              timer = null;
              previous = new Date();
              func.call(this, ...params);
          }, remaining);
      }
  };
}

Vue.directive('throttle', {
  bind (el, binding) {
    const [func, timer] = binding.value;
    el.addEventListener('click', throttle(func, timer));
  }
})