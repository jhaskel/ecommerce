'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeCreate', async Model => {
      Model.token = await str_random(25)
      const expires_at = new Date()
      expires_at.setMinutes(expires_at.getMinutes() + 30)
      Model.expires_at = expires_at
    })
  }

  //formata para o padraõ mysql
  static get dates() {
    return ['create_at', 'update_at', 'expires_at']
  }
}

module.exports = PasswordReset
