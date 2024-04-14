import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        first_name: 'prueba',
        last_name: 'prueba',
        date_birth: DateTime.now().toFormat('yyyy-MM-dd') as any,
        address: 'Dirección de la prueba',
        mobile_phone: '1234567890',
        email: 'prueba@prueba.com',
        password: '123456789',
      },
      {
        first_name: 'Francisco',
        last_name: 'Gaviria',
        date_birth: DateTime.now().toFormat('yyyy-MM-dd') as any,
        address: 'Dirección de la prueba',
        mobile_phone: '123456789',
        email: 'francisco@prueba.com',
        password: '123456789',
      },
    ])
  }
}
