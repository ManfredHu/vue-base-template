const timeoutArr = []
const intervalArr = []

export function setTimeout() {
  const timer = window.setTimeout(...arguments)
  timeoutArr.push(timer)
  return timer
}

export function setInterval() {
  const timer = window.setInterval(...arguments)
  intervalArr.push(timer)
  return timer
}

export function destory() {
  timeoutArr.forEach((item) => clearTimeout(item))
  intervalArr.forEach((item) => clearInterval(item))
}

export function logTimer() {
  console.log('timeoutArr', timeoutArr)
  console.log('intervalArr', intervalArr)
}
