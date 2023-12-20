import { AuthenticatorUser } from "../../entities/authenticatorUser";
import { AuthenticatorUserRepository } from "../authenticatorUser-repository";

export class inMemoryAuthenticatorUserRepository implements AuthenticatorUserRepository {
  public items: AuthenticatorUser[] = []

  async create(authenticatorUser: AuthenticatorUser): Promise<void> {
    this.items.push(authenticatorUser)
  }

  async findLogin(login: string): Promise<AuthenticatorUser | null> {
    const existsLogin = this.items.find(aUser => {
      return aUser.login == login
    })

    if(!existsLogin){
      return null
    }

    return existsLogin
  }
}