// https://docs.cypress.io/api/introduction/api.html

describe('vue-base-plugin Test', () => {
  context('mobile', function () {
    beforeEach(function () {
      // https://docs.cypress.io/api/commands/viewport.html#Width-Height
      cy.viewport('iphone-6+')
    })
    it('index test', () => {
      cy.visit('http://localhost:9110/#/')
      cy.get('.components-list').eq(0).find('header').should('contain', '组件列表')
      cy.get('.components-list ul li').should('have.length', 9)
    })
    it('ToTop.vue test', () => {
      cy.visit('http://localhost:9110/#/totop')
      cy.get('.totop').should('be.visible').click()
      cy.wait(1000)
      cy.get('.totop').should('not.be.visible')
    })
  })
})
