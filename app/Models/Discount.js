'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
  //espicifica a tabela
  static get table() {
    return 'coupon_order'
  }
  order() {
    return this.belongsTo('App/Model/Order', 'order_id', 'id')
  }

   coupon() {
    return this.belongsTo('App/Model/Coupon', 'coupon_id', 'id')
  }

}

module.exports = Discount
