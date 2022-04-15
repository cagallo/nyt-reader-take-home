describe('NYT reader user flow', () => {
  beforeEach(() => {
    cy.intercept('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2dmcJLnwUghBy4tATB4z2Peb3oPCCLUN', { fixture: 'sampleArticles.json'} )
    cy.visit('http://localhost:3000/')
  })

  it('should display page title and all of the article cards', () => {
    cy.get('h1').contains('Breaking News with Chezzy')
      .get('.article-container').children().should('have.length', 4)
      .get('.article-container > .article-details:nth-child(1) > .headline-text > .article-title-main').should('be.visible')
      .get('.article-container > .article-details:nth-child(1) > .article-image').should('be.visible')
  })

  it('should default to Home category on page load', () => {
    cy.get('.dropdown-options').should('have.value', 'Home')
  })

  it('should allow users to choose a different news category', () => {
    cy.get('.dropdown-label > .dropdown-options').select('Politics')
  })

  it('should allow users to click on news story for more information about the article', () => {
    cy.get('.main-page > .article-container > .article-details:nth-child(1) > .headline-text > .article-title-main').click()
    .location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/article/3JIhyuk')
    }))
    cy.get('.single-page-title').contains('Putin admits sanctions have hurt Russia’s oil and gas sector.')
      .get('.byline').contains('By Dan Bilefsky')
      .get('.hero-image').should('be.visible')
      .get('.article-caption').contains('A refinery in Omsk, Russia,')
  })  

  it('should allow user with link to read full article on the New York Times website', () => {
    cy.get('.article-container > .article-details:nth-child(1) > .headline-text > .article-title-main').click()
    cy.get('.single-article-container > .button-container > a').should('have.attr', 'href', 'https://www.nytimes.com/live/2022/04/14/world/ukraine-russia-war-news/putin-admits-sanctions-have-hurt-russias-oil-and-gas-sector')
  })

  it('should allow user to navigate back to landing page from single article view', () => {
    cy.get('.article-container > .article-details:nth-child(1) > .headline-text > .article-title-main').click()
    cy.get('.single-article-container > .button-container > button').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/')
    }))
  })

  it('should display a not found page if the user visits a bad link', () => {
    cy.visit('http://localhost:3000/cats')
    cy.get('.error-message').contains("I'm sorry, this page does not exist, please return home.")
  })

})


