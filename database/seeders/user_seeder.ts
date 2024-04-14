import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        first_name: 'prueba',
        last_name: 'prueba',
        date_birth: new Date(),
        address: 'Dirección de la prueba',
        mobile_phone: '1234567890',
        email: 'prueba@nodejs.com',
        password: '123456789',
      },
      {
        first_name: 'Francisco',
        last_name: 'Gaviria',
        date_birth: new Date(),
        address: 'Dirección de la prueba',
        mobile_phone: '123456789',
        email: 'francisco@nodejs.com',
        password: '123456789',
      },
    ])
  }
}
