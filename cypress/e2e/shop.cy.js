describe('Testing the purchase', function () {

    it('Purchase', function () {
       cy.reload();
       cy.visit('https://sh3910517.c.had.su/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click().click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.header-left-items > .site-branding').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.header-right-items > .header-cart > a > .counter').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Тимур');
       cy.get('#billing_last_name').type('Ефимов');
       cy.get('#billing_address_1').type('ул. Клубничная 5');
       cy.get('#billing_city').type('с. Кукуево');
       cy.get('#billing_state').type('Абрикосовая');
       cy.get('#billing_postcode').type('630100');
       cy.get('#billing_phone').type('+79232476594');
       cy.get('#billing_email').type('test@test.ru');
       cy.get('#place_order').click();
       cy.wait(1000);
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
    })
    
})