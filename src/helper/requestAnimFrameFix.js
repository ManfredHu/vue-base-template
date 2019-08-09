import debug from 'debug'
const log = debug('worker:requestAniFix')

function requestAnimFrameFix() {
  localStorage.debug = 'worker:*'
  log('requestAnimFrameFix')
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function _requestAnimFrame( callback ) {
        window.setTimeout(callback, 1000 / 60)
      }
  })()
}
export default requestAnimFrameFix
