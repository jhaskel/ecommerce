'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CuponUserSchema extends Schema {
  up () {
    this.create('cupon_user', (table) => {
      table.increments()
      table.integer('coupon_id').unsigned()
      table.integer('user_id').unsigned()
      table.foreign('cupon_id').reference('id').intTable('cupons').onDelete('cascade')
      table.foreign('user_id').reference('id').intTable('users').onDelete('cascade')

      table.timestamps()
    })
  }

  down () {
    this.drop('cupon_users')
  }
}

module.exports = CuponUserSchema
