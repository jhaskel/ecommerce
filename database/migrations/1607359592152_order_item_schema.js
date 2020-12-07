'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up () {
    this.create('order_items', (table) => {
      table.increments()
      table.integer('product_id').unsigned()
      table.integer('quantity')
      table.decimal('subtotal',12,2)
      table.integer('order_id')

      table.foreign('product_id').reference('id').intTable('images').onDelete('cascade')
      table.foreign('order_id').reference('id').intTable('orders').onDelete('cascade')
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemSchema
