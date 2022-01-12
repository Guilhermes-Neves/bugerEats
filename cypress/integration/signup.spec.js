import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {
    // before(()=> {
    //     /** Antes de todos os casos de testes */
    // })

    // beforeEach(() => {
    //     cy.fixture('deliver').then(function (d) {
    //         this.deliver = d
    //     })
    // })

    // after(()=> {
    //     /** Depois de cada todos os casos de testes */
    // })

    // afterEach(() => {
    //     /** Depois de cada caso de testes */
    // })

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

        /**cy.get('.alert-error').should('have.text', 'Oops! CPF inválido') */
    })

    it('Incorrect document', function () {
        var deliver = signupFactory.deliver()

        deliver.cpf = 'XX00014141'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)
    })

    it('Incorrect email', function () {
        var deliver = signupFactory.deliver()

        deliver.email = 'guilherme.nevesteste.com'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)
    })

    context('Required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'name', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })
}) 