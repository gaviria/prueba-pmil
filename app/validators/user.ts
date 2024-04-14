import vine from '@vinejs/vine'
import { uniqueRule } from '../rules/unique.js'

/**
 * Validates the user's creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim().maxLength(20),
    last_name: vine.string().trim().maxLength(20),
    date_birth: vine.date(),
    address: vine.string().trim().maxLength(100),
    mobile_phone: vine
      .string()
      .trim()
      .maxLength(10)
      .use(uniqueRule({ table: 'users', column: 'mobile_phone' })),
    email: vine
      .string()
      .trim()
      .email()
      .use(uniqueRule({ table: 'users', column: 'email' })),
    password: vine.string().trim().minLength(6),
  })
)

/**
 * Validates the user's update action
 */
export const updateUserValidator = vine.withMetaData<{ userId: number }>().compile(
  vine.object({
    first_name: vine.string().trim().maxLength(20),
    last_name: vine.string().trim().maxLength(20),
    date_birth: vine.date(),
    address: vine.string().trim().maxLength(100),
    mobile_phone: vine
      .string()
      .trim()
      .maxLength(10)
      .unique(async (db, value, field) => {
        const user = await db
          .from('users')
          .whereNot('id', field.meta.userId)
          .where('mobile_phone', value)
          .first()
        return !user
      }),
    email: vine.string().unique(async (db, value, field) => {
      const user = await db
        .from('users')
        .whereNot('id', field.meta.userId)
        .where('email', value)
        .first()
      return !user
    }),
    password: vine.string().trim().minLength(6),
  })
)
