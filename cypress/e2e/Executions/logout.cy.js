import Methods from "../Methods/methods";
import LoginElements from "../Elements/loginElements";
import Users from "../../fixtures/users";
import HomeElements from "../Elements/homeElements";

describe("suit de testes executando cenarios de login", () => {

  beforeEach("Realização de abertura da aplicação", () => {
    
    Methods.aberturaDeSite()
    
  })
  
  it("Logout com sucesso", () => {
    
    Methods.click(LoginElements.buttonLogin)
    Methods.inputText(LoginElements.inputUser, Users.userName)
    Methods.inputText(LoginElements.inputPassword, Users.passaword)
    Methods.click(LoginElements.buttonEnter)
    Methods.click(HomeElements.buttonLogout)
    Methods.validateElementPresent(LoginElements.buttonLogin)
    
  })
  
});
