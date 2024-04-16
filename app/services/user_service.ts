import User from '#models/user'
import { IUser } from '../interfaces/IUser.js'

export default class UserService {
  /**
   * Retrieves all users from the database.
   * @return {Promise<User[]>} A promise that resolves to an array of User objects.
   */
  async getAllUsers() {
    return await User.all()
  }

  /**
   * Retrieves a user from the database by their ID.
   *
   * @param {number} id - The ID of the user to retrieve.
   * @return {Promise<User>} A promise that resolves to the user with the given ID, or rejects if no user is found.
   */
  async getUserById(id: number) {
    return await User.findOrFail(id)
  }

  /**
   * Stores a new user in the database.
   *
   * @param {IUser} data - The user data to be stored.
   * @return {Promise<User>} A promise that resolves to the created user.
   */
  async storeUser(data: IUser) {
    return await User.create(data)
  }

  /**
   * Updates a user in the database.
   *
   * @param {number} id - The ID of the user to update.
   * @param {IUser} data - The updated user data.
   * @return {Promise<User>} A promise that resolves to the updated user.
   */
  async updateUser(id: number, data: IUser) {
    const user = await this.getUserById(id)
    user.merge(data)
    await user.save()
    return user
  }
}
