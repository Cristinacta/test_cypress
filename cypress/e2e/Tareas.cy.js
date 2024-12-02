describe('template spec', () => {
  
  it('Crear tarea', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
  })

  it('Marcar tarea como completada', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
  })

  it('Desmarcar tarea como completada', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
  })

  it('Editar tarea', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').clear()
    cy.get('.view > .input-container > [data-testid="text-input"]').type("hacer la maleta{enter}")
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
  })

  it('Borrar tarea', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="text-input"]').type("hacer la maleta{enter}")
    cy.get("button").invoke("show")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-button"]').click()
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
  })
  
  it('Filtrar tareas', () => {
    cy.visit ("https://todomvc.com/examples/react/dist/")
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="text-input"]').type("poner lavadoras{enter}")
    cy.get('[data-testid="text-input"]').type("hacer la maleta{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
    cy.get(':nth-child(2) > a').click()
    cy.get('[data-testid="todo-item-label"]').should("be.visible")
    cy.get(':nth-child(1) > a').click()
  })
})