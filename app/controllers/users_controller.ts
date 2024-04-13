// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { IUser } from '../interfaces/IUser.js'
import User from '#models/user'

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
    // const data = await request.validate({
    //   schema: schema.create({
    //     firstName: schema.string(),
    //     lastName: schema.string(),
    //     date_birth: schema.date(),
    //     address: schema.string(),
    //     mobile_phone: schema.string(),
    //     token: schema.string(),
    //     email: schema.string({}, [
    //       rules.email(),
    //     ]),
    //     password: schema.string({}, [
    //       rules.minLength(6),
    //     ]),
    //   }),
    // })
  }

  async show({ params }: HttpContext) {}

  async update({ params, request }: HttpContext) {}

  async destroy({ params }: HttpContext) {}
}
