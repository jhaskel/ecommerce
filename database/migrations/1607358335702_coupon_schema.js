'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponSchema extends Schema {
  up () {
    this.create('coupons', (table) => {
      table.increments()
      table.string('code',100).notNullable()
      table.dateTime('valid_from')
      table.dateTime('valid_until')
      table.integer('quantity').defaultTo('1')
      table.enu('can_user_for',['product','client','product_client','all'])
      table.enu('type',['free','currency','percent']).defaultTo('currency')
      table.boolean('recursive').defaultTo(false)
      table.timestamps()

    })
  }

  down () {
    this.drop('coupons')
  }
}

module.exports = CouponSchema
