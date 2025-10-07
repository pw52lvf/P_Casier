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

router.on('/').render('pages/home')
router.on('/signup').render('pages/signup')
router.on('/home').render('/pages/home')

router.post('/login', usersController.login)