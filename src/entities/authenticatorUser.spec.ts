import { expect, test } from 'vitest'
import { AuthenticatorUser } from './authenticatorUser'

test('create an AuthenticatorUser', () => {
  const authenticatorUser = new AuthenticatorUser({
    login: 'john.doe',
    name: 'John Doe',
    password: 'johndoe123'
  })

  expect(authenticatorUser).toBeInstanceOf(AuthenticatorUser)
  expect(authenticatorUser.name).toEqual('John Doe')
})