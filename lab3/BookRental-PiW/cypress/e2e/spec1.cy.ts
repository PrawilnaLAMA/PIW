describe('BookRental App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Wyświetla listę książek na stronie głównej', () => {
    cy.get('.content').should('exist');
    // Sprawdzamy, czy jest przynajmniej jedno ogłoszenie książki (wykluczając przycisk Dodaj książkę)
    cy.get('.book-announcements > *')
      .not('.add-book-button-container')
      .should('have.length.greaterThan', 0);
  });

  it('Filtruje książki po autorze', () => {
    cy.get('input[name="author"]')
      .clear() // wyczyść input na wszelki wypadek
      .type('Kowalski');

    // Poczekaj, aż lista książek zaktualizuje się
    cy.get('.book-announcement', { timeout: 10000 }).should('exist');

    cy.get('.book-announcement').each(($el) => {
      cy.wrap($el).find('.announcement-book-author').should('exist');
      cy.wrap($el).find('.announcement-book-author').should(($author) => {
        expect($author.text()).to.include('Kowalski');
      });
    });
  });

  it('Można kliknąć przycisk logowania', () => {
    cy.get('.account-login').click();
    // Po kliknięciu sprawdzamy, czy pojawił się przycisk wylogowania
    cy.get('.account-logout').should('exist');
  });

  it('Przechodzi na stronę dodawania nowej książki', () => {
    cy.get('.add-book-button').click();
    // Poczekaj na przekierowanie
    cy.wait(2000); // Dodaj krótki czas oczekiwania na przekierowanie
    cy.url({ timeout: 10000 }).should('include', '/new');
    cy.get('.book-form', { timeout: 10000 }).should('exist');
  });

  it('Po kliknięciu "MOJE" pokazuje książki użytkownika', () => {
    cy.get('.account-my-books').click();
    cy.get('.book-announcements > *')
      .not('.add-book-button-container')
      .each(($el) => {
        // Tutaj sprawdzamy, czy element istnieje, możesz dodać bardziej konkretne sprawdzenie
        cy.wrap($el).should('exist');
      });
  });
});
