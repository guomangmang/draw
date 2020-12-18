// 由一个组件，向上找到所有的指定组件
function findComponentsUpward (context, componentName) {
  let parents = [];
  const parent = context.$parent;

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent);
    return parents.concat(findComponentsUpward(parent, componentName));
  } else {
    return [];
  }
}
export { findComponentsUpward };

// 设置异步间隔延迟
export function delay(interval = 0) {
  return new Promise(resolve => {
      let timer = setTimeout(_ => {
          clearTimeout(timer)
          resolve()
      },interval)
  })
}