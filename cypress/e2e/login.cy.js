describe('Form authorization testing', function () {

    it('Correct log/pass', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Password reset check', function () {
       cy.reload();
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('german@dolnikov.ru');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Correct log / incorrect pass', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');   
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Incorrect log / correct pass', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('gurman@dolnikov.ru');   
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Такого логина или пароля нет').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Login without @', function () {
      cy.reload();
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru');   
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.contains('Нужно исправить проблему валидации').should('be.visible');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Conversion to lowercase letters in the login', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');   
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })  
    
})