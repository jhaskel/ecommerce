'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
   /*
   **relacionamento entre PRODUTO e image
   */
  image() {
    this.belongsTo('App/Model/Image')
  }

  /*
   **relacionamento entre produto e imagens
   */

  images() {
    this.belongsToMany('App/Models/Image')
  }
  /*
   **relacionamento entre produto e categorias
   */

  categories(){
    this.belongsToMany('App/Model/Category')
  }
  /*
   **relacionamento entre produto e cupom
   */

  coupons(){
    this.belongsToMany('App/Model/Coupon')
  }
}

module.exports = Product
