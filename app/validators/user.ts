import vine from '@vinejs/vine'
import { uniqueRule } from '../rules/unique.js'

/**
 * Validates the post's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().maxLength(20),
    lastName: vine.string().trim().maxLength(20),
    date_birth: vine.date(),
    address: vine.string().trim().maxLength(100),
    mobile_phone: vine.string().trim().maxLength(10),
    email: vine
      .string()
      .trim()
      .email()
      .use(uniqueRule({ table: 'users', column: 'email' })),
    password: vine.string().trim().minLength(6),
  })
)
