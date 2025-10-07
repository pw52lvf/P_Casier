/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const usersController = new UsersController()

router.on('/').render('pages/login').as('login')
router.on('/home').render('pages/home')

// Auth
router.post('/login', [UsersController, 'login'])