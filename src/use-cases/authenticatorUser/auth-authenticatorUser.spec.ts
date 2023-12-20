import { describe, expect, it } from 'vitest'
import { inMemoryAuthenticatorUserRepository } from '../../repositories/in-memory/in-memory-authenticatorUser'
import { CreateAuthenticatorUser } from './create-authenticatorUser'
import { AuthenticatorUser } from '../../entities/authenticatorUser'
import { AuthAuthenticatorUser } from './auth-authenticatorUser'

describe('Authenticating the Authenticator User', ()=>{

  it('should be possible to login', async ()=>{
    const authenticatorUserRepository = new inMemoryAuthenticatorUserRepository()
    const createAuthenticatorUser = new CreateAuthenticatorUser(
      authenticatorUserRepository
    )
    const authAuthenticatorUser = new AuthAuthenticatorUser(
      authenticatorUserRepository
    )
  
    await expect(createAuthenticatorUser.execute({
      login: 'john.doe',
      name: 'John Doe',
      password: 'johndoe123'
    })).resolves.toBeInstanceOf(AuthenticatorUser)

    await expect(createAuthenticatorUser.execute({
      login: 'john.doe2',
      name: 'John Doe',
      password: 'johndoe1234'
    })).resolves.toBeInstanceOf(AuthenticatorUser)

    expect(authAuthenticatorUser.execute({
      login: 'john.doe',
      password: 'johndoe123'
    })).resolves

    expect(authAuthenticatorUser.execute({
      login: 'john.doe2',
      password: 'johndoe1234'
    })).resolves

  })

  it('should be possible to authenticate', async ()=>{
    const authenticatorUserRepository = new inMemoryAuthenticatorUserRepository()
    const createAuthenticatorUser = new CreateAuthenticatorUser(
      authenticatorUserRepository
    )
    const authAuthenticatorUser = new AuthAuthenticatorUser(
      authenticatorUserRepository
    )
  
    await expect(createAuthenticatorUser.execute({
      login: 'john.doe',
      name: 'John Doe',
      password: 'johndoe123'
    })).resolves.toBeInstanceOf(AuthenticatorUser)

    await expect(createAuthenticatorUser.execute({
      login: 'john.doe2',
      name: 'John Doe',
      password: 'johndoe1234'
    })).resolves.toBeInstanceOf(AuthenticatorUser)

    expect(authAuthenticatorUser.execute({
      login: 'john.doee',
      password: 'johndoe123'
    })).rejects.toBeInstanceOf(Error)

    expect(authAuthenticatorUser.execute({
      login: 'john.doe',
      password: 'johndoe1234'
    })).rejects.toBeInstanceOf(Error)

    expect(authAuthenticatorUser.execute({
      login: 'john.doe2',
      password: 'johndoe123'
    })).rejects.toBeInstanceOf(Error)
  })
})