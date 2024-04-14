import { DateTime } from "luxon"

/* eslint-disable unicorn/filename-case */
export interface IUser {
  first_name: string
  last_name: string
  date_birth: Date
  address: string
  mobile_phone: string
  token?: string
  email: string
  password: string
}
