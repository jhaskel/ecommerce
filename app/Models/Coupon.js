'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {

//formata para o padraõ mysql
  static get dates() {
    return ['create_at', 'update_at', 'valid_from','valid_until']
  }

  users(){
    this.belongsToMany('App/Model/User')
  }

  products(){
    this.belongsToMany('App/Model/Product')
  }

  orders(){
    this.belongsToMany('App/Model/Order')
  }

}

module.exports = Coupon
