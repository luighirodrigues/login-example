import { AuthenticatorUser } from "../entities/authenticatorUser";

export interface AuthenticatorUserRepository {
  create(authenticatorUser: AuthenticatorUser): Promise<void>
  findLogin(login: string): Promise<AuthenticatorUser | null>
}