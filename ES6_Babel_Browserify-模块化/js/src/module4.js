/*默认暴露*/
export default function () {
  console.log('module4')
}

/*分别暴露*/
export function fun() {
  console.log('module4------test')
}

function fun2() {
  console.log('module4------fun2')
}

/*统一暴露*/
export {fun2}