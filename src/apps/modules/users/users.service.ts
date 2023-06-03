import config from '../../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

// s6. database logic
const createUser = async (user: IUser): Promise<IUser | null> => {
  // s8. auto generated incremental id
  const id = await generateUserId()
  user.id = id

  // s9. default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user 🚫')
  }
  return createdUser
}
export default { createUser }