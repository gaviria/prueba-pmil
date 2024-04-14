// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { IUser } from '../interfaces/IUser.js'
import User from '#models/user'
import { USER_MESSAGES } from '../constants/messages.js'
import { createUserValidator, updateUserValidator } from '#validators/user'

export default class UsersController {
  async index({ response }: HttpContext) {
    const users: IUser[] = await User.all()
    return response.send(users)
  }

  async store({ request, response }: HttpContext) {
    const data: IUser = await createUserValidator.validate(
      request.only([
        'first_name',
        'last_name',
        'date_birth',
        'address',
        'mobile_phone',
        'email',
        'password',
      ])
    )

    const user: IUser = await User.create(data)

    return response.send(user)
  }

  async show({ params, response }: HttpContext) {
    const user: IUser = await User.findOrFail(params.id)
    return response.send(user)
  }

  async update({ params, request, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data: IUser = await request.validateUsing(updateUserValidator, {
      meta: { userId: params.id },
    })

    user.merge(data)
    await user.save()

    return response.send(user)
  }

  async destroy({ params, response }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.send({ message: USER_MESSAGES.DELETE_SUCCESS, user: user })
  }
}
