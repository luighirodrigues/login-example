import {createHash} from 'node:crypto'

export function getEncryptPassword (password: string): string {
  return createHash('sha256').update(password).digest('hex')
}