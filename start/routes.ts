/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import SessionController from '#controllers/session_controller'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/api/login', [SessionController, 'login'])
router.get('/api/user', [UsersController, 'index']).use(middleware.auth())
router.post('/api/user', [UsersController, 'store'])
