import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('first_name', 20).notNullable()
      table.string('last_name', 20).notNullable()
      table.date('date_birth').notNullable()
      table.string('address', 100).notNullable()
      table.string('token').nullable()
      table.string('mobile_phone', 10).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
