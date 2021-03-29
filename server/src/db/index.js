import db from './db'
import { Fish,User,Catch,Location} from './models'

User.hasMany(Catch)

Catch.belongsTo(User)
Fish.hasMany(Catch)
Location.hasMany(Catch)




export {
  db,
  Fish,
  User,
  Catch,
  Location
}