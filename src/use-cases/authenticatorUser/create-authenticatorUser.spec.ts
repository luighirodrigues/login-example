import { describe, expect, it } from 'vitest'

import { CreateAuthenticatorUser } from './create-authenticatorUser'
import { AuthenticatorUser } from '../../entities/authenticatorUser'
import { inMemoryAuthenticatorUserRepository } from '../../repositories/in-memory/in-memory-authenticatorUser'

describe('Create an Authenticator User', ()=>{

  it('should be able to create an Authenticator User', () => {

    const authenticatorUserRepository = new inMemoryAuthenticatorUserRepository()
    const createAuthenticatorUser = new CreateAuthenticatorUser(
      authenticatorUserRepository
    )
  
    expect(createAuthenticatorUser.execute({
      login: 'john.doe',
      name: 'John Doe',
      password: 'johndoe123'
    })).resolves.toBeInstanceOf(AuthenticatorUser)
  })

  it('should not be able to create an Authenticator User', async () => {

    const authenticatorUserRepository = new inMemoryAuthenticatorUserRepository()
    const createAuthenticatorUser = new CreateAuthenticatorUser(
      authenticatorUserRepository
    )

    await createAuthenticatorUser.execute({
      login: 'john.doe',
      name: 'John Doe',
      password: 'johndoe123'
    })
  
    expect(createAuthenticatorUser.execute({
      login: 'john.doe',
      name: 'John Foo',
      password: 'johnfoo123'
    })).rejects.toBeInstanceOf(Error)

    expect(createAuthenticatorUser.execute({
      login: 'john.foo',
      name: 'John Foo',
      password: 'johnfoo123'
    })).resolves.toBeInstanceOf(AuthenticatorUser)

  })

})
