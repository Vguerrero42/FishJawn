import { Sequelize } from 'sequelize'
import * as pkg from '../../package.json'

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`, {
  logging: false
})


export default db