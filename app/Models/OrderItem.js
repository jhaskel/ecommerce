'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {

static get Traits(){
  return ['App/Model/Trits/NoTimestamp']
}

   product() {
    return this.belongsTo('App/Model/Product')
  }

  order() {
    return this.belongsTo('App/Model/Order')
  }

}

module.exports = OrderItem
