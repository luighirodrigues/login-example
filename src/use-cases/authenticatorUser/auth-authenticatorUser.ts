import { AuthenticatorUserRepository } from "../../repositories/authenticatorUser-repository"
import { getEncryptPassword } from "../../util/encryptPassword"

interface AuthAuthenticatorUserRequest {
  login: string
  password: string
}

interface AuthAuthenticatorUserResponse {
  name: string
  login: string
}

export class AuthAuthenticatorUser {
  constructor(
    private authenticatorUserRepository: AuthenticatorUserRepository
  ){}

  async execute({
    login,
    password
  }: AuthAuthenticatorUserRequest): Promise<AuthAuthenticatorUserResponse> {

    const foundUser = await this.authenticatorUserRepository.findLogin(login)

    if(!foundUser){
      throw new Error(`Cant find a user with ${login}`)
    }

    if(getEncryptPassword(password)!=foundUser.password){
      throw new Error(`Wrong password for ${login}`)
    }

    const response : AuthAuthenticatorUserResponse = {name: foundUser.login, login: foundUser.login}

    return response
  }
}