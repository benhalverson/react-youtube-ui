describe('anonymous calculator', () => {
	it('can make calculations', () => {
		cy.visit('http://localhost:3000')
		.get('input')
		.type('coding music')
		.should('have.text', ' coding music')
	});
});
