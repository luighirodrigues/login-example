import { describe, expect, it } from "vitest";
import { getEncryptPassword } from "./encryptPassword";

describe('encrypting pass', ()=>{
  it('should be able to encrypt', ()=>{
    expect(getEncryptPassword(
      'password123'
    )).equals('ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f')
  })
})