import vine from '@vinejs/vine'

export const loginValidator = vine.compile(
  vine.object({
    mobile_phone: vine.string().trim().maxLength(10),
    password: vine.string().trim().minLength(6),
  })
)
