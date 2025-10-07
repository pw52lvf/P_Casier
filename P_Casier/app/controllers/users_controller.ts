import type { HttpContextContract } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
    
    public async store({ request, response, session }: HttpContextContract) {
    try {
      const username = request.input('username')
      const password = request.input('password')
      const password_confirmation = request.input('confirm_password')
      const email = request.input('email')
      const firstname = request.input('firstname')
      const lastname = request.input('lastname')

      const confirmedPassword = password === password_confirmation
      if (!confirmedPassword) {
        session.flash('errors.register', 'Les mots de passe ne correspondent pas')
        return response.redirect().back()
      }

      const existingUser = await User.query()
        .where('username', username)
        .orWhere('email', email)
        .first()

      if (existingUser) {
        session.flash('errors.register', 'Nom d\'utilisateur ou email déjà utilisé')
        return response.redirect().back()
      }

      const user = new User()
      user.username = username
      user.password = password
      user.email = email
      user.firstname = firstname
      user.lastname = lastname
      await user.save()

      session.put('user', user)

      return response.redirect('/home')
    } catch (error) {
      console.error('Registration error:', error)
      session.flash('errors.register', 'Une erreur est survenue lors de l\'inscription')
      return response.redirect().back()
    }
  }

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