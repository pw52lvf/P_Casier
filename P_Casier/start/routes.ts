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

const usersController = new UsersController()

router.on('/').render('pages/login')
router.on('/signup').render('pages/signup')

router.post('/login', usersController.login)