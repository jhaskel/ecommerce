'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  /*
   **relacionamento entre categoria e image
   */
  image() {
    this.belongsTo('App/Model/Image')
  }

  /*
   **relacionamento entre categoria e produto
   */

  products() {
    this.belongsToMany('App/Models/Product')
  }
}

module.exports = Category
