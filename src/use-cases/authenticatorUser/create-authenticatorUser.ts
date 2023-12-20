import { AuthenticatorUser } from "../../entities/authenticatorUser";
import { AuthenticatorUserRepository } from "../../repositories/authenticatorUser-repository";
import { getEncryptPassword } from "../../util/encryptPassword";

interface CreateAuthenticatorUserRequest {
  name: string
  login: string
  password: string
}

type CreateAuthenticatorUserResponse = AuthenticatorUser

export class CreateAuthenticatorUser {

  constructor(
    private authenticatorUserRepository: AuthenticatorUserRepository
  ){}

  async execute({
    name,
    login,
    password
  }: CreateAuthenticatorUserRequest): Promise<CreateAuthenticatorUserResponse> {

    const alreadyExists = await this.authenticatorUserRepository.findLogin(login)
    
    if(alreadyExists){
      throw new Error('Another authenticator user already exists with this login')
    }

    const authenticatorUser = new AuthenticatorUser({
      name,
      login,
      password: getEncryptPassword(password)
    })

    await this.authenticatorUserRepository.create(authenticatorUser)

    return authenticatorUser
  }
}