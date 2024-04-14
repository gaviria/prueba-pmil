import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { HASH_OPTIONS } from '../constants/hash.js'

const AuthFinder = withAuthFinder(() => hash.use(HASH_OPTIONS.SCRYPT), {
  uids: ['mobile_phone'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'first_name' })
  declare first_name: string

  @column({ columnName: 'last_name' })
  declare last_name: string

  @column({
    columnName: 'date_birth',
    prepare: (value) => {
      return DateTime.fromJSDate(value).toFormat('yyyy-MM-dd') //sqlite no acepta fechas
    },
  })
  declare date_birth: Date

  @column({ columnName: 'address' })
  declare address: string

  @column({ columnName: 'mobile_phone' })
  declare mobile_phone: string

  //null for not show token in json response
  @column({ columnName: 'token', serializeAs: null })
  declare token: string

  @column({ columnName: 'email' })
  declare email: string

  @column({ columnName: 'password' })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
