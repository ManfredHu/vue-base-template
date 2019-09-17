/* eslint-disable no-unused-expressions */
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'index test': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.components-list')
      .assert.containsText('header', '组件列表')
      .assert.elementPresent('.components-list ul li:nth-child(9)') // at least 9 elements
      .end()
  },
  'ToTop.vue test': browser => {
    browser.url('http://localhost:9110/#/totop')
    browser.assert.elementPresent('.totop')
    browser.expect.element('.totop').to.be.visible
    browser.click('.totop')
    browser.pause(1000)
    browser.expect.element('.totop').to.not.be.visible
    browser.end()
  }
}
