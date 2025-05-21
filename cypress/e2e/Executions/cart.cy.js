import Methods from "../Methods/methods";
import LoginElements from "../Elements/loginElements";
import Users from "../../fixtures/users";
import ProductElements from "../Elements/productElements";
import HomeElements from "../Elements/homeElements";
import CartElements from "../Elements/cartElements";
describe('suite de testes executando cenarios realacionado ai carrinho', () => {
    
    beforeEach('', () => {
        Methods.aberturaDeSite();
        Methods.click(LoginElements.buttonLogin)
        Methods.inputText(LoginElements.inputUser, Users.usuarioMauricio)
        Methods.inputText(LoginElements.inputPassword, Users.senhaMauricio)
        Methods.click(LoginElements.buttonEnter)
        Methods.validateElementPresent(HomeElementos.validateUser)
    });
    it('Adicionar um produto ao carrinho', () => {
        
        Methods.clickElement(HomeElementos.buttonBuy)
        Methods.clickElement(ProductElements.btnImg)
        Methods.click(ProductElements.buttonM)
        Methods.click(ProductElements.buttonRed)
        Methods.click(ProductElements.buttonSubmit)
        Methods.validateElementPresent(ProductElements.buttonCart)
        Methods.click(ProductElements.buttonCart)
        Methods.validateElementPresent(CartElements.buttonCoupon)
    });

    it.only('Adicionar um produto ao carrinho e excluir o produto', () => {
        
        Methods.clickElement(HomeElements.buttonBuy)
        Methods.clickElement(ProductElements.btnImg)
        Methods.click(ProductElements.buttonM)
        Methods.click(ProductElements.buttonRed)
        Methods.click(ProductElements.buttonSubmit)
        Methods.validateElementPresent(ProductElements.buttonCart)
        Methods.click(ProductElements.buttonCart)
        Methods.validateElementPresent(CartElements.buttonCoupon)
        Methods.click(CartElements.buttonDeleteProduct)
        Methods.validateElementPresent(CartElements.buttonReturnStore)
 });
})