import db from './db'
import { Fish,User } from './models'

User.hasMany(Fish)

export {
  db,
  Fish,
  User
}