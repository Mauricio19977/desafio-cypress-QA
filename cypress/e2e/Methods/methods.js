export class Methods {

    static aberturaDeSite() {
        cy.fixture('example.json').then((site) => {
            cy.visit(site.baseUrl, { failOnStatusCode: false })
        })
    }

    static click(elemento) {
        cy.get(elemento, { timeout: 20000 }).click({ force: true })
    }

    static clickElement(elemento) {
        cy.get(elemento, { timeout: 20000 }).eq(0).click({ force: true })
    }

    static inputText(element, text) {
        cy.get(element).type(text, { force: true }).should('have.value', text)
    }

    static validateElementPresent(element){
        cy.get(element).wait(500).should('be.visible')
    }
}

export default Methods;
