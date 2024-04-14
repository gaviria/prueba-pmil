// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { IUser } from '../interfaces/IUser.js'
import User from '#models/user'
import { USER_MESSAGES } from '../constants/messages.js'

export default class UsersController {
  async index({}: HttpContext) {
    return User.all()
  }

  async store({ request }: HttpContext) {
    const data: IUser = request.only([
      'firstName',
      'lastName',
      'date_birth',
      'address',
      'mobile_phone',
      'email',
      'password',
    ])

    const user: IUser = await User.create(data)

    return user
  }

  async show({ params }: HttpContext) {
    return User.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)
    const data: IUser = request.only([
      'firstName',
      'lastName',
      'date_birth',
      'address',
      'mobile_phone',
      'email',
      'password',
    ])
    user.merge(data)
    await user.save()

    return user
  }

  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return { message: USER_MESSAGES.DELETE_SUCCESS, user: user }
  }
}
