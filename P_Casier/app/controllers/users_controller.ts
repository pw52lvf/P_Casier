import type { HttpContextContract } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
    
    public async login({ request, response, session }: HttpContextContract) {
    const identifiant = request.input('identifiant')
    const password = request.input('password')

    try {
      const user = await User.query()
        .where('identifiant', identifiant)
        .first()

      if (!user) {
        session.flash('errors.login', 'Identifiants invalides')
        return response.redirect().back()
      }

      const isValidPassword = await user.verifyPassword(password)
      
      if (!isValidPassword) {
        session.flash('errors.login', 'Identifiants invalides')
        return response.redirect().back()
      }

      session.put('user', user)
      
      return response.redirect('/home')
    } catch (error) {
      console.error('Login error:', error)
      session.flash('errors.login', 'Une erreur est survenue lors de la connexion')
      return response.redirect().back()
    }
  }
}