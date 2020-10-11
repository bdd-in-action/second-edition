import { Sequelize } from 'sequelize'

export const database = new Sequelize({
    database: 'flying_high',
    dialect: 'sqlite',
    storage: ':memory:',
})
